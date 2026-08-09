import os
import math
from PIL import Image, ImageFilter, ImageOps, ImageDraw, ImageEnhance

input_dir = '/Users/carlos/Documents/Antigravity/huertalia/from_bela'
output_dir = '/Users/carlos/Documents/Antigravity/huertalia/assets/images/products'
os.makedirs(output_dir, exist_ok=True)

# Precise tight pouch crop coordinates for each of the 7 real product photos (top, left, bottom, right)
crop_coords = {
    'WhatsApp Image 2026-08-09 at 18.45.58.jpeg': (0.16, 0.18, 0.90, 0.73),       # Fresas
    'WhatsApp Image 2026-08-09 at 18.45.58 (1).jpeg': (0.10, 0.16, 0.92, 0.77),   # Manzana
    'WhatsApp Image 2026-08-09 at 18.46.15.jpeg': (0.08, 0.18, 0.85, 0.77),       # Plátano
    'WhatsApp Image 2026-08-09 at 18.48.59.jpeg': (0.07, 0.10, 0.88, 0.80),       # Mango
    'WhatsApp Image 2026-08-09 at 18.46.25.jpeg': (0.05, 0.14, 0.89, 0.79),       # Mango Chamoy
    'WhatsApp Image 2026-08-09 at 18.46.25 (1).jpeg': (0.14, 0.15, 0.92, 0.77),   # Manzana Chamoy
    'WhatsApp Image 2026-08-09 at 18.46.25 (2).jpeg': (0.12, 0.23, 0.84, 0.76)    # Piña Chamoy
}

products_info = [
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.45.58.jpeg',
        'out': 'packshot_fresas.jpg',
        'bg_gradient': [(255, 248, 246), (248, 236, 234)],
        'glow': (235, 90, 85, 35)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.45.58 (1).jpeg',
        'out': 'packshot_manzana.jpg',
        'bg_gradient': [(252, 252, 246), (242, 244, 235)],
        'glow': (122, 160, 126, 30)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.15.jpeg',
        'out': 'packshot_platano.jpg',
        'bg_gradient': [(255, 252, 242), (248, 242, 225)],
        'glow': (235, 185, 55, 35)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.48.59.jpeg',
        'out': 'packshot_mango.jpg',
        'bg_gradient': [(255, 250, 242), (248, 238, 222)],
        'glow': (235, 140, 45, 40)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.25.jpeg',
        'out': 'packshot_mango_chamoy.jpg',
        'bg_gradient': [(255, 246, 244), (246, 232, 228)],
        'glow': (195, 45, 50, 40)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.25 (1).jpeg',
        'out': 'packshot_manzana_chamoy.jpg',
        'bg_gradient': [(255, 246, 244), (246, 232, 228)],
        'glow': (195, 45, 50, 40)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.25 (2).jpeg',
        'out': 'packshot_pina_chamoy.jpg',
        'bg_gradient': [(255, 248, 240), (248, 236, 220)],
        'glow': (235, 130, 45, 40)
    }
]

def extract_clean_pouch_mask(crop_img):
    w, h = crop_img.size
    
    mask = Image.new('L', (w, h), 0)
    draw = ImageDraw.Draw(mask)
    
    # Precise pouch polygon inside crop box
    top_w = int(w * 0.98)
    bot_w = int(w * 0.88)
    
    top_l = (w - top_w) // 2
    top_r = top_l + top_w
    bot_l = (w - bot_w) // 2
    bot_r = bot_l + bot_w
    
    margin_top = int(h * 0.005)
    margin_bot = int(h * 0.99)
    
    polygon = [
        (top_l, margin_top + 10),
        (top_r, margin_top + 10),
        (top_r + 2, margin_top + 30),
        (bot_r, margin_bot - 6),
        (w // 2, margin_bot),
        (bot_l, margin_bot - 6),
        (top_l - 2, margin_top + 30)
    ]
    
    draw.polygon(polygon, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(1.5))
    return mask

def make_appealing_packshot(info):
    in_path = os.path.join(input_dir, info['file'])
    out_path = os.path.join(output_dir, info['out'])
    
    img = Image.open(in_path).convert('RGB')
    w, h = img.size
    
    t_pct, l_pct, b_pct, r_pct = crop_coords.get(info['file'], (0.1, 0.15, 0.90, 0.80))
    left = int(w * l_pct)
    top = int(h * t_pct)
    right = int(w * r_pct)
    bottom = int(h * b_pct)
    
    pouch_crop = img.crop((left, top, right, bottom))
    p_w, p_h = pouch_crop.size
    
    pouch_mask = extract_clean_pouch_mask(pouch_crop)
    
    # 1000x1000 Studio Canvas
    canvas_dim = 1000
    canvas = Image.new('RGBA', (canvas_dim, canvas_dim), info['bg_gradient'][0] + (255,))
    
    # Soft radial background glow matching fruit accent color
    aura = Image.new('RGBA', (canvas_dim, canvas_dim), (0, 0, 0, 0))
    aura_draw = ImageDraw.Draw(aura)
    aura_r = 380
    aura_draw.ellipse([500 - aura_r, 450 - aura_r, 500 + aura_r, 450 + aura_r], fill=info['glow'])
    aura = aura.filter(ImageFilter.GaussianBlur(95))
    canvas.paste(aura, (0, 0), aura)
    
    # Scale pouch to stand heroically in center (86% of canvas height)
    target_h = int(canvas_dim * 0.86)
    aspect = p_w / p_h
    target_w = int(target_h * aspect)
    
    pouch_resized = pouch_crop.resize((target_w, target_h), Image.Resampling.LANCZOS)
    mask_resized = pouch_mask.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    pos_x = (canvas_dim - target_w) // 2
    pos_y = (canvas_dim - target_h) // 2 + 10
    
    # Ground shadow under pouch
    shadow = Image.new('RGBA', (canvas_dim, canvas_dim), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_w = int(target_w * 0.84)
    s_h = 32
    s_x = (canvas_dim - s_w) // 2
    s_y = pos_y + target_h - 14
    s_draw.ellipse([s_x, s_y, s_x + s_w, s_y + s_h], fill=(18, 35, 23, 50))
    shadow = shadow.filter(ImageFilter.GaussianBlur(20))
    canvas.paste(shadow, (0, 0), shadow)
    
    # Composite clean pouch onto studio background
    canvas.paste(pouch_resized, (pos_x, pos_y), mask_resized)
    
    # Save final high-res JPEG image
    result = canvas.convert('RGB')
    enhancer = ImageEnhance.Sharpness(result)
    result = enhancer.enhance(1.1)
    
    result.save(out_path, 'JPEG', quality=96)
    print(f'Flawless studio packshot created: {info["out"]}')

for item in products_info:
    make_appealing_packshot(item)

print('All 7 flawless studio packshots generated successfully!')
