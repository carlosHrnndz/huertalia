import os
from PIL import Image, ImageFilter, ImageOps, ImageDraw, ImageEnhance

input_dir = '/Users/carlos/Documents/Antigravity/huertalia/from_bela'
output_dir = '/Users/carlos/Documents/Antigravity/huertalia/assets/images/products'
os.makedirs(output_dir, exist_ok=True)

files_map = [
    ('WhatsApp Image 2026-08-09 at 18.45.58.jpeg', 'packshot_fresas.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.45.58 (1).jpeg', 'packshot_manzana.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.15.jpeg', 'packshot_platano.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.48.59.jpeg', 'packshot_mango.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.25.jpeg', 'packshot_mango_chamoy.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.25 (1).jpeg', 'packshot_manzana_chamoy.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.25 (2).jpeg', 'packshot_pina_chamoy.jpg')
]

def process_image(in_filename, out_filename):
    in_path = os.path.join(input_dir, in_filename)
    out_path = os.path.join(output_dir, out_filename)
    
    img = Image.open(in_path).convert('RGBA')
    w, h = img.size
    
    # Analyze brightness to find pouch boundary
    # Pouch is the bright white pouch in central region
    gray = img.convert('L')
    
    # Bounding box of bright white pouch
    # Threshold gray image to isolate white package from dark countertop (pixel > 120)
    bw = gray.point(lambda p: 255 if p > 115 else 0)
    
    # Get bounding box of bright pixels
    bbox = bw.getbbox()
    if not bbox:
        bbox = (int(w*0.1), int(h*0.1), int(w*0.9), int(h*0.9))
        
    left, top, right, bottom = bbox
    # Refine crop to pouch area with small padding
    pad = 10
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(w, right + pad)
    bottom = min(h, bottom + pad)
    
    pouch_crop = img.crop((left, top, right, bottom))
    p_w, p_h = pouch_crop.size
    
    # Create smooth rounded / feathered mask for pouch edge separation
    mask = Image.new('L', (p_w, p_h), 255)
    # Mask out dark outer areas if needed
    pouch_gray = gray.crop((left, top, right, bottom))
    mask_data = []
    for pixel in pouch_gray.getdata():
        if pixel < 90:
            mask_data.append(0)
        elif pixel < 120:
            mask_data.append(int((pixel - 90) * 8.5))
        else:
            mask_data.append(255)
    mask.putdata(mask_data)
    mask = mask.filter(ImageFilter.GaussianBlur(3))
    
    # Create Square Studio Canvas (1000x1000)
    canvas_dim = 1000
    studio = Image.new('RGBA', (canvas_dim, canvas_dim), (250, 246, 240, 255)) # #FAF6F0
    
    # Add subtle warm radial background gradient
    bg_draw = ImageDraw.Draw(studio)
    for r in range(canvas_dim, 0, -20):
        alpha_val = int(255 * (1 - (r / canvas_dim) * 0.15))
        # Warm gradient circle
        bg_draw.ellipse([500 - r, 500 - r, 500 + r, 500 + r], fill=(255, 252, 248, 255))
        
    # Scale pouch to fit canvas nicely (~82% of height)
    target_h = int(canvas_dim * 0.82)
    aspect = p_w / p_h
    target_w = int(target_h * aspect)
    
    pouch_resized = pouch_crop.resize((target_w, target_h), Image.Resampling.LANCZOS)
    mask_resized = mask.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    pos_x = (canvas_dim - target_w) // 2
    pos_y = (canvas_dim - target_h) // 2 + 15
    
    # Create soft realistic drop shadow under pouch
    shadow = Image.new('RGBA', (canvas_dim, canvas_dim), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_w = int(target_w * 0.85)
    s_h = 35
    s_x = (canvas_dim - s_w) // 2
    s_y = pos_y + target_h - 20
    s_draw.ellipse([s_x, s_y, s_x + s_w, s_y + s_h], fill=(18, 35, 23, 70))
    shadow = shadow.filter(ImageFilter.GaussianBlur(25))
    
    # Composite shadow and pouch onto studio canvas
    studio.paste(shadow, (0, 0), shadow)
    studio.paste(pouch_resized, (pos_x, pos_y), mask_resized)
    
    # Convert back to RGB and save high quality JPEG
    studio_rgb = studio.convert('RGB')
    
    # Slight contrast enhancement for studio look
    enhancer = ImageEnhance.Contrast(studio_rgb)
    studio_rgb = enhancer.enhance(1.05)
    
    studio_rgb.save(out_path, 'JPEG', quality=95)
    print(f'Successfully generated: {out_filename}')

for in_f, out_f in files_map:
    process_image(in_f, out_f)

print('All 7 original pouch packshots processed cleanly!')
