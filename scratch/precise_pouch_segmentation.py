import os
import math
from PIL import Image, ImageFilter, ImageOps, ImageDraw, ImageEnhance

input_dir = '/Users/carlos/Documents/Antigravity/huertalia/from_bela'
output_dir = '/Users/carlos/Documents/Antigravity/huertalia/assets/images/products'
os.makedirs(output_dir, exist_ok=True)

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
        'bg_gradient': [(255, 248, 246), (248, 236, 234)], # Luxurious soft strawberry rose cream
        'glow': (235, 90, 85, 45)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.45.58 (1).jpeg',
        'out': 'packshot_manzana.jpg',
        'bg_gradient': [(252, 252, 246), (242, 244, 235)], # Soft apple sage cream
        'glow': (122, 160, 126, 40)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.15.jpeg',
        'out': 'packshot_platano.jpg',
        'bg_gradient': [(255, 252, 242), (248, 242, 225)], # Golden banana warm cream
        'glow': (235, 185, 55, 45)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.48.59.jpeg',
        'out': 'packshot_mango.jpg',
        'bg_gradient': [(255, 250, 242), (248, 238, 222)], # Tropical mango warm cream
        'glow': (235, 140, 45, 50)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.25.jpeg',
        'out': 'packshot_mango_chamoy.jpg',
        'bg_gradient': [(255, 246, 244), (246, 232, 228)], # Chamoy ruby warm cream
        'glow': (195, 45, 50, 50)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.25 (1).jpeg',
        'out': 'packshot_manzana_chamoy.jpg',
        'bg_gradient': [(255, 246, 244), (246, 232, 228)], # Chamoy ruby warm cream
        'glow': (195, 45, 50, 50)
    },
    {
        'file': 'WhatsApp Image 2026-08-09 at 18.46.25 (2).jpeg',
        'out': 'packshot_pina_chamoy.jpg',
        'bg_gradient': [(255, 248, 240), (248, 236, 220)], # Pineapple chamoy amber cream
        'glow': (235, 130, 45, 50)
    }
]

def extract_clean_pouch_mask(crop_img):
    w, h = crop_img.size
    
    # Create mask based on pouch color & geometry
    # The pouch is white/light matte paper with stand-up trapezoid shape
    mask = Image.new('L', (w, h), 0)
    draw = ImageDraw.Draw(mask)
    
    # Trapezoid stand-up pouch contour
    # Top width ~ 92% of crop width, Bottom width ~ 78% of crop width
    top_w = int(w * 0.94)
    bot_w = int(w * 0.78)
    
    top_l = (w - top_w) // 2
    top_r = top_l + top_w
    bot_l = (w - bot_w) // 2
    bot_r = bot_l + bot_w
    
    margin_top = int(h * 0.02)
    margin_bot = int(h * 0.98)
    
    polygon = [
        (top_l, margin_top + 15),
        (top_r, margin_top + 15),
        (top_r + 4, margin_top + 45),
        (bot_r, margin_bot - 12),
        (w // 2, margin_bot), # Bottom curve
        (bot_l, margin_bot - 12),
        (top_l - 4, margin_top + 45)
    ]
    
    draw.polygon(polygon, fill=255)
    
    # Smooth edges with slight feather
    mask = mask.filter(ImageFilter.GaussianBlur(3))
    return mask

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
    
    pouch_crop = img.crop((left, top, right, bottom))
    p_w, p_h = pouch_crop.size
    
    pouch_mask = extract_clean_pouch_mask(pouch_crop)
    
    # Build 1000x1000 Studio Canvas with elegant radial gradient
    canvas_dim = 1000
    canvas = Image.new('RGBA', (canvas_dim, canvas_dim), info['bg_gradient'][0] + (255,))
    
    # Draw soft radial aura/glow in background matching fruit accent color
    aura = Image.new('RGBA', (canvas_dim, canvas_dim), (0, 0, 0, 0))
    aura_draw = ImageDraw.Draw(aura)
    aura_r = 380
    aura_draw.ellipse([500 - aura_r, 450 - aura_r, 500 + aura_r, 450 + aura_r], fill=info['glow'])
    aura = aura.filter(ImageFilter.GaussianBlur(90))
    canvas.paste(aura, (0, 0), aura)
    
    # Scale pouch to stand heroically in center (84% of canvas height)
    target_h = int(canvas_dim * 0.84)
    aspect = p_w / p_h
    target_w = int(target_h * aspect)
    
    pouch_resized = pouch_crop.resize((target_w, target_h), Image.Resampling.LANCZOS)
    mask_resized = pouch_mask.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    pos_x = (canvas_dim - target_w) // 2
    pos_y = (canvas_dim - target_h) // 2 + 10
    
    # Ground shadow under pouch
    shadow = Image.new('RGBA', (canvas_dim, canvas_dim), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_w = int(target_w * 0.86)
    s_h = 34
    s_x = (canvas_dim - s_w) // 2
    s_y = pos_y + target_h - 18
    s_draw.ellipse([s_x, s_y, s_x + s_w, s_y + s_h], fill=(18, 35, 23, 60))
    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    canvas.paste(shadow, (0, 0), shadow)
    
    # Composite clean pouch onto studio background
    canvas.paste(pouch_resized, (pos_x, pos_y), mask_resized)
    
    # Save final high-res JPEG image
    result = canvas.convert('RGB')
    enhancer = ImageEnhance.Sharpness(result)
    result = enhancer.enhance(1.12)
    
    result.save(out_path, 'JPEG', quality=96)
    print(f'Clean appealing packshot created: {info["out"]}')

for item in products_info:
    make_appealing_packshot(item)

print('All 7 clean appealing packshots created successfully!')
