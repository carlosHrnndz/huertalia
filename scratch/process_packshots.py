import os
import cv2
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

os.makedirs('/Users/carlos/Documents/Antigravity/huertalia/assets/images/products', exist_ok=True)
os.makedirs('/Users/carlos/Documents/Antigravity/huertalia/assets/images/logo', exist_ok=True)

files_map = [
    ('WhatsApp Image 2026-08-09 at 18.45.58.jpeg', 'packshot_fresas.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.45.58 (1).jpeg', 'packshot_manzana.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.15.jpeg', 'packshot_platano.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.48.59.jpeg', 'packshot_mango.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.25.jpeg', 'packshot_mango_chamoy.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.25 (1).jpeg', 'packshot_manzana_chamoy.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.25 (2).jpeg', 'packshot_pina_chamoy.jpg')
]

input_dir = '/Users/carlos/Documents/Antigravity/huertalia/from_bela'
output_dir = '/Users/carlos/Documents/Antigravity/huertalia/assets/images/products'

def isolate_pouch(image_path):
    img = cv2.imread(image_path)
    h, w, c = img.shape
    
    # Convert to LAB / HSV to isolate white pouch from dark marble countertop & background
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Pouch is white/bright package in central region
    _, thresh = cv2.threshold(gray, 110, 255, cv2.THRESH_BINARY)
    
    # Morphological operations to clean mask
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
    thresh = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel, iterations=3)
    thresh = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel, iterations=2)
    
    # Find contours and pick the largest contour near center
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    pouch_contour = None
    max_area = 0
    
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if area > max_area and area > (w * h * 0.15):
            max_area = area
            pouch_contour = cnt
            
    mask = np.zeros((h, w), dtype=np.uint8)
    if pouch_contour is not None:
        cv2.drawContours(mask, [pouch_contour], -1, 255, -1)
    else:
        mask = thresh

    # Create smooth alpha mask
    mask_blur = cv2.GaussianBlur(mask, (11, 11), 0)
    
    # Create Studio Canvas (1000x1000, soft warm cream radial gradient)
    canvas_size = 1000
    canvas = np.full((canvas_size, canvas_size, 3), (240, 246, 250), dtype=np.uint8) # BGR for #FAF6F0
    
    # Add subtle radial lighting gradient
    y, x = np.ogrid[:canvas_size, :canvas_size]
    center_y, center_x = canvas_size / 2, canvas_size / 2
    dist_from_center = np.sqrt((x - center_x)**2 + (y - center_y)**2)
    radius = canvas_size * 0.7
    vignette = 1 - np.clip(dist_from_center / radius, 0, 0.35)
    
    for i in range(3):
        canvas[:, :, i] = np.clip(canvas[:, :, i] * vignette, 0, 255).astype(np.uint8)

    # Crop bounding box of pouch
    x_b, y_b, w_b, h_b = cv2.boundingRect(pouch_contour) if pouch_contour is not None else (0,0,w,h)
    
    pouch_crop = img[y_b:y_b+h_b, x_b:x_b+w_b]
    mask_crop = mask_blur[y_b:y_b+h_b, x_b:x_b+w_b] / 255.0
    
    # Resize pouch crop to fit canvas nicely (~80% height)
    target_h = int(canvas_size * 0.82)
    aspect = w_b / h_b
    target_w = int(target_h * aspect)
    
    pouch_resized = cv2.resize(pouch_crop, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)
    mask_resized = cv2.resize(mask_crop, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)
    
    # Calculate placement position on canvas
    start_x = (canvas_size - target_w) // 2
    start_y = (canvas_size - target_h) // 2 + 15
    
    # Create soft realistic drop shadow under pouch
    shadow_mask = np.zeros((canvas_size, canvas_size), dtype=np.float32)
    shadow_ellipse_y = start_y + target_h - 15
    shadow_ellipse_x = canvas_size // 2
    cv2.ellipse(shadow_mask, (shadow_ellipse_x, shadow_ellipse_y), (int(target_w * 0.45), 25), 0, 0, 360, 0.35, -1)
    shadow_mask = cv2.GaussianBlur(shadow_mask, (45, 45), 0)
    
    # Apply shadow to canvas
    for i in range(3):
        canvas[:, :, i] = np.clip(canvas[:, :, i] * (1 - shadow_mask), 0, 255).astype(np.uint8)

    # Composite pouch onto canvas using alpha mask
    for c in range(3):
        canvas[start_y:start_y+target_h, start_x:start_x+target_w, c] = (
            pouch_resized[:, :, c] * mask_resized + 
            canvas[start_y:start_y+target_h, start_x:start_x+target_w, c] * (1 - mask_resized)
        )
        
    return canvas

# Process all 7 images
for fname, outname in files_map:
    in_path = os.path.join(input_dir, fname)
    out_path = os.path.join(output_dir, outname)
    print(f'Processing {fname} -> {outname}')
    res = isolate_pouch(in_path)
    cv2.imwrite(out_path, res)

print('Packshots generated successfully!')
