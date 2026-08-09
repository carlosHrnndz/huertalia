import os
import math
from PIL import Image, ImageFilter, ImageOps, ImageDraw, ImageEnhance

base_dir = '/Users/carlos/Documents/Antigravity/huertalia'
from_bela_dir = os.path.join(base_dir, 'from_bela')
artifacts_dir = '/Users/carlos/.gemini/antigravity/brain/8d684970-0311-4df9-9c8b-98359a20772b'
output_dir = os.path.join(base_dir, 'assets/images/products')

os.makedirs(output_dir, exist_ok=True)

# Map of products: (real_photo, created_scene_image, output_packshot_name, pouch_bbox_on_created_image)
product_mapping = [
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.45.58.jpeg',           # Fresas real
        'created_img': 'packshot_fresas_1786300581234.jpg',                  # Created Fresas scene
        'out': 'packshot_fresas.jpg',
        'real_crop_pct': (0.16, 0.18, 0.90, 0.73),                           # Crop of real packaging artwork
        'pouch_area_pct': (0.245, 0.33, 0.795, 0.81)                          # Pouch face on created scene
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.45.58 (1).jpeg',       # Manzana real
        'created_img': 'packshot_manzana_1786300604689.jpg',                 # Created Manzana scene
        'out': 'packshot_manzana.jpg',
        'real_crop_pct': (0.10, 0.16, 0.92, 0.77),
        'pouch_area_pct': (0.21, 0.23, 0.835, 0.78)
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.46.15.jpeg',           # Plátano real
        'created_img': 'packshot_platano_1786300626446.jpg',                 # Created Plátano scene
        'out': 'packshot_platano.jpg',
        'real_crop_pct': (0.08, 0.18, 0.85, 0.77),
        'pouch_area_pct': (0.165, 0.215, 0.84, 0.80)
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.48.59.jpeg',           # Mango real
        'created_img': 'packshot_mango_1786300648505.jpg',                   # Created Mango scene
        'out': 'packshot_mango.jpg',
        'real_crop_pct': (0.07, 0.10, 0.88, 0.80),
        'pouch_area_pct': (0.22, 0.24, 0.81, 0.76)
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.46.25.jpeg',           # Mango Chamoy real
        'created_img': 'packshot_mango_chamoy_1786300670935.jpg',            # Created Mango Chamoy scene
        'out': 'packshot_mango_chamoy.jpg',
        'real_crop_pct': (0.05, 0.14, 0.89, 0.79),
        'pouch_area_pct': (0.225, 0.245, 0.815, 0.76)
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.46.25 (1).jpeg',       # Manzana Chamoy real
        'created_img': 'packshot_manzana_chamoy_1786300695587.jpg',          # Created Manzana Chamoy scene
        'out': 'packshot_manzana_chamoy.jpg',
        'real_crop_pct': (0.14, 0.15, 0.92, 0.77),
        'pouch_area_pct': (0.21, 0.23, 0.81, 0.77)
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.46.25 (2).jpeg',       # Piña Chamoy real
        'created_img': 'packshot_pina_chamoy_1786300720144.jpg',             # Created Piña Chamoy scene
        'out': 'packshot_pina_chamoy.jpg',
        'real_crop_pct': (0.12, 0.23, 0.84, 0.76),
        'pouch_area_pct': (0.21, 0.23, 0.81, 0.77)
    }
]

def embed_design(item):
    real_path = os.path.join(from_bela_dir, item['real_photo'])
    created_path = os.path.join(artifacts_dir, item['created_img'])
    out_path = os.path.join(output_dir, item['out'])
    
    # 1. Load created background scene image
    scene_img = Image.open(created_path).convert('RGBA')
    s_w, s_h = scene_img.size
    
    # 2. Load real packaging photo
    real_img = Image.open(real_path).convert('RGBA')
    r_w, r_h = real_img.size
    
    # Crop the exact front label graphic from real photo
    t_pct, l_pct, b_pct, r_pct = item['real_crop_pct']
    real_label = real_img.crop((
        int(r_w * l_pct),
        int(r_h * t_pct),
        int(r_w * r_pct),
        int(r_h * b_pct)
    ))
    
    # Calculate pouch placement box on created scene image
    pt_top, pt_left, pt_bot, pt_right = item['pouch_area_pct']
    pouch_x = int(s_w * pt_left)
    pouch_y = int(s_h * pt_top)
    pouch_w = int(s_w * (pt_right - pt_left))
    pouch_h = int(s_h * (pt_bot - pt_top))
    
    # Resize real label artwork to match the pouch area on the created scene
    real_label_resized = real_label.resize((pouch_w, pouch_h), Image.Resampling.LANCZOS)
    
    # Create mask for clean pouch shape matching stand-up pouch contour
    mask = Image.new('L', (pouch_w, pouch_h), 0)
    draw = ImageDraw.Draw(mask)
    
    top_w = int(pouch_w * 0.96)
    bot_w = int(pouch_w * 0.88)
    top_l = (pouch_w - top_w) // 2
    top_r = top_l + top_w
    bot_l = (pouch_w - bot_w) // 2
    bot_r = bot_l + bot_w
    
    polygon = [
        (top_l, 6),
        (top_r, 6),
        (top_r + 2, 25),
        (bot_r, pouch_h - 10),
        (pouch_w // 2, pouch_h - 2),
        (bot_l, pouch_h - 10),
        (top_l - 2, 25)
    ]
    draw.polygon(polygon, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(1.5))
    
    # Blend real package design onto pouch in the created lifestyle scene
    scene_img.paste(real_label_resized, (pouch_x, pouch_y), mask)
    
    # Save final composite studio packshot
    final_rgb = scene_img.convert('RGB')
    enhancer = ImageEnhance.Sharpness(final_rgb)
    final_rgb = enhancer.enhance(1.1)
    
    final_rgb.save(out_path, 'JPEG', quality=95)
    print(f'Successfully embedded real package design onto created scene: {item["out"]}')

for item in product_mapping:
    embed_design(item)

print('All 7 products successfully embedded with exact real package design!')
