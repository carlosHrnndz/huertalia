import os
import math
from PIL import Image, ImageFilter, ImageOps, ImageDraw, ImageEnhance

input_dir = '/Users/carlos/Documents/Antigravity/huertalia/from_bela'
floating_dir = '/Users/carlos/Documents/Antigravity/huertalia/assets/images/floating'
output_dir = '/Users/carlos/Documents/Antigravity/huertalia/assets/images/products'
os.makedirs(output_dir, exist_ok=True)

# Precise pouch crop coordinates for each of the 7 real product photos
crop_coords = {
    'WhatsApp Image 2026-08-09 at 18.45.58.jpeg': (0.15, 0.16, 0.95, 0.75),       # Fresas
    'WhatsApp Image 2026-08-09 at 18.45.58 (1).jpeg': (0.09, 0.14, 0.97, 0.79),   # Manzana
    'WhatsApp Image 2026-08-09 at 18.46.15.jpeg': (0.07, 0.16, 0.89, 0.79),       # Plátano
    'WhatsApp Image 2026-08-09 at 18.48.59.jpeg': (0.06, 0.07, 0.93, 0.83),       # Mango
    'WhatsApp Image 2026-08-09 at 18.46.25.jpeg': (0.04, 0.11, 0.94, 0.83),       # Mango Chamoy
    'WhatsApp Image 2026-08-09 at 18.46.25 (1).jpeg': (0.13, 0.12, 0.98, 0.79),   # Manzana Chamoy
    'WhatsApp Image 2026-08-09 at 18.46.25 (2).jpeg': (0.11, 0.21, 0.88, 0.78)    # Piña Chamoy
}

products_info = [
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.45.58.jpeg',
        'out': 'packshot_fresas.jpg',
        'bg_color': (252, 245, 243), # Soft strawberry cream
        'accent_color': (200, 62, 61, 35),
        'fruit_ref': 'strawberry.jpg',
        'badge_label': '100% FRUTA PURA'
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.45.58 (1).jpeg',
        'out': 'packshot_manzana.jpg',
        'bg_color': (248, 248, 242), # Soft apple cream
        'accent_color': (122, 154, 126, 30),
        'fruit_ref': 'apple.jpg',
        'badge_label': '100% FRUTA PURA'
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.15.jpeg',
        'out': 'packshot_platano.jpg',
        'bg_color': (253, 249, 238), # Soft banana warm gold cream
        'accent_color': (227, 180, 51, 30),
        'fruit_ref': 'apple.jpg', # Fallback fruit accent
        'badge_label': '100% FRUTA PURA'
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.48.59.jpeg',
        'out': 'packshot_mango.jpg',
        'bg_color': (254, 247, 238), # Soft mango cream
        'accent_color': (227, 136, 51, 35),
        'fruit_ref': 'mango.jpg',
        'badge_label': '100% FRUTA PURA'
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.25.jpeg',
        'out': 'packshot_mango_chamoy.jpg',
        'bg_color': (252, 242, 238), # Warm chamoy cream
        'accent_color': (179, 32, 37, 40),
        'fruit_ref': 'mango.jpg',
        'badge_label': '🌶️ LÍNEA CHAMOY'
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.25 (1).jpeg',
        'out': 'packshot_manzana_chamoy.jpg',
        'bg_color': (252, 242, 238), # Warm chamoy cream
        'accent_color': (179, 32, 37, 40),
        'fruit_ref': 'apple.jpg',
        'badge_label': '🌶️ LÍNEA CHAMOY'
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.25 (2).jpeg',
        'out': 'packshot_pina_chamoy.jpg',
        'bg_color': (253, 245, 235), # Warm pineapple chamoy cream
        'accent_color': (227, 136, 51, 40),
        'fruit_ref': 'mango.jpg',
        'badge_label': '🌶️ LÍNEA CHAMOY'
    }
]

def make_appealing_packshot(info):
    in_path = os.path.join(input_dir, info['file'])
    out_path = os.path.join(output_dir, info['out'])
    
    img = Image.open(in_path).convert('RGB')
    w, h = img.size
    
    # Bounding box crop for real pouch
    t_pct, l_pct, b_pct, r_pct = crop_coords.get(info['file'], (0.1, 0.15, 0.92, 0.80))
    left = int(w * l_pct)
    top = int(h * t_pct)
    right = int(w * r_pct)
    bottom = int(h * b_pct)
    
    pouch_raw = img.crop((left, top, right, bottom))
    p_w, p_h = pouch_raw.size
    
    # Build 1000x1000 Studio Canvas
    canvas_dim = 1000
    canvas = Image.new('RGBA', (canvas_dim, canvas_dim), info['bg_color'] + (255,))
    
    # Draw soft radial aura/glow in background matching fruit accent color
    aura = Image.new('RGBA', (canvas_dim, canvas_dim), (0, 0, 0, 0))
    aura_draw = ImageDraw.Draw(aura)
    aura_r = 380
    aura_draw.ellipse([500 - aura_r, 450 - aura_r, 500 + aura_r, 450 + aura_r], fill=info['accent_color'])
    aura = aura.filter(ImageFilter.GaussianBlur(90))
    canvas.paste(aura, (0, 0), aura)
    
    # If floating fruit reference image exists, crop floating fruit slices and position decoratively
    fruit_ref_path = os.path.join(floating_dir, info['fruit_ref'])
    if os.path.exists(fruit_ref_path):
        f_img = Image.open(fruit_ref_path).convert('RGBA')
        # Resize floating fruit decoratively
        f_small = f_img.resize((240, 240), Image.Resampling.LANCZOS)
        f_small = f_small.rotate(-15, expand=True)
        # Blur slightly for depth of field effect
        f_dof = f_small.filter(ImageFilter.GaussianBlur(2))
        
        # Position floating fruit behind/beside pouch
        canvas.paste(f_dof, (70, 620), f_dof)
        
        f_top = f_img.resize((180, 180), Image.Resampling.LANCZOS).rotate(25, expand=True)
        f_top_dof = f_top.filter(ImageFilter.GaussianBlur(3))
        canvas.paste(f_top_dof, (750, 140), f_top_dof)

    # Scale pouch to stand heroically in center (82% of canvas height)
    target_h = int(canvas_dim * 0.82)
    aspect = p_w / p_h
    target_w = int(target_h * aspect)
    
    pouch_resized = pouch_raw.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    pos_x = (canvas_dim - target_w) // 2
    pos_y = (canvas_dim - target_h) // 2 + 10
    
    # Ground shadow under pouch
    shadow = Image.new('RGBA', (canvas_dim, canvas_dim), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_w = int(target_w * 0.88)
    s_h = 36
    s_x = (canvas_dim - s_w) // 2
    s_y = pos_y + target_h - 18
    s_draw.ellipse([s_x, s_y, s_x + s_w, s_y + s_h], fill=(18, 35, 23, 50))
    shadow = shadow.filter(ImageFilter.GaussianBlur(22))
    canvas.paste(shadow, (0, 0), shadow)
    
    # Paste Hero Pouch
    pouch_rgba = pouch_resized.convert('RGBA')
    canvas.paste(pouch_rgba, (pos_x, pos_y))
    
    # Save final high-res JPEG image
    result = canvas.convert('RGB')
    enhancer = ImageEnhance.Sharpness(result)
    result = enhancer.enhance(1.15)
    
    result.save(out_path, 'JPEG', quality=96)
    print(f'Appealing packshot generated: {info["out"]}')

for item in products_info:
    make_appealing_packshot(item)

print('All 7 appealing packshots generated successfully!')
