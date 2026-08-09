import os
from PIL import Image, ImageFilter, ImageOps, ImageDraw, ImageEnhance

input_dir = '/Users/carlos/Documents/Antigravity/huertalia/from_bela'
output_dir = '/Users/carlos/Documents/Antigravity/huertalia/assets/images/products'
os.makedirs(output_dir, exist_ok=True)

# Precise pouch crop bounding boxes for each of the 7 WhatsApp photos (top_pct, left_pct, bottom_pct, right_pct)
crop_coords = {
    'WhatsApp Image 2026-08-09 at 18.45.58.jpeg': (0.15, 0.16, 0.95, 0.75),       # Fresas
    'WhatsApp Image 2026-08-09 at 18.45.58 (1).jpeg': (0.09, 0.14, 0.97, 0.79),   # Manzana
    'WhatsApp Image 2026-08-09 at 18.46.15.jpeg': (0.07, 0.16, 0.89, 0.79),       # Plátano
    'WhatsApp Image 2026-08-09 at 18.48.59.jpeg': (0.06, 0.07, 0.93, 0.83),       # Mango
    'WhatsApp Image 2026-08-09 at 18.46.25.jpeg': (0.04, 0.11, 0.94, 0.83),       # Mango Chamoy
    'WhatsApp Image 2026-08-09 at 18.46.25 (1).jpeg': (0.13, 0.12, 0.98, 0.79),   # Manzana Chamoy
    'WhatsApp Image 2026-08-09 at 18.46.25 (2).jpeg': (0.11, 0.21, 0.88, 0.78)    # Piña Chamoy
}

files_map = [
    ('WhatsApp Image 2026-08-09 at 18.45.58.jpeg', 'packshot_fresas.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.45.58 (1).jpeg', 'packshot_manzana.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.15.jpeg', 'packshot_platano.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.48.59.jpeg', 'packshot_mango.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.25.jpeg', 'packshot_mango_chamoy.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.25 (1).jpeg', 'packshot_manzana_chamoy.jpg'),
    ('WhatsApp Image 2026-08-09 at 18.46.25 (2).jpeg', 'packshot_pina_chamoy.jpg')
]

def crop_and_studio(in_filename, out_filename):
    in_path = os.path.join(input_dir, in_filename)
    out_path = os.path.join(output_dir, out_filename)
    
    img = Image.open(in_path).convert('RGB')
    w, h = img.size
    
    # Get custom crop bounds
    t_pct, l_pct, b_pct, r_pct = crop_coords.get(in_filename, (0.1, 0.15, 0.92, 0.80))
    left = int(w * l_pct)
    top = int(h * t_pct)
    right = int(w * r_pct)
    bottom = int(h * b_pct)
    
    pouch = img.crop((left, top, right, bottom))
    p_w, p_h = pouch.size
    
    # Create soft studio card / backdrop (1000x1000 square)
    canvas_dim = 1000
    studio = Image.new('RGB', (canvas_dim, canvas_dim), (250, 246, 240)) # Warm Ivory #FAF6F0
    
    # Scale pouch to occupy ~85% height of square canvas
    target_h = int(canvas_dim * 0.86)
    aspect = p_w / p_h
    target_w = int(target_h * aspect)
    
    pouch_resized = pouch.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    pos_x = (canvas_dim - target_w) // 2
    pos_y = (canvas_dim - target_h) // 2
    
    # Soft drop shadow under card/pouch
    shadow = Image.new('RGBA', (canvas_dim, canvas_dim), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rounded_rectangle([pos_x - 10, pos_y - 10, pos_x + target_w + 10, pos_y + target_h + 10], radius=16, fill=(18, 35, 23, 40))
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    
    studio_rgba = studio.convert('RGBA')
    studio_rgba.paste(shadow, (0, 0), shadow)
    
    # Rounded mask for clean product card presentation
    mask = Image.new('L', (target_w, target_h), 255)
    
    studio_rgba.paste(pouch_resized, (pos_x, pos_y))
    
    result = studio_rgba.convert('RGB')
    enhancer = ImageEnhance.Sharpness(result)
    result = enhancer.enhance(1.1)
    
    result.save(out_path, 'JPEG', quality=95)
    print(f'Clean packshot created: {out_filename}')

for in_f, out_f in files_map:
    crop_and_studio(in_f, out_f)

print('All 7 original design packshots generated cleanly!')
