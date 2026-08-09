import os
from PIL import Image, ImageFilter, ImageDraw, ImageEnhance

base_dir = '/Users/carlos/Documents/Antigravity/huertalia'
from_bela_dir = os.path.join(base_dir, 'from_bela')
artifacts_dir = '/Users/carlos/.gemini/antigravity/brain/8d684970-0311-4df9-9c8b-98359a20772b'
output_dir = os.path.join(base_dir, 'assets/images/products')

os.makedirs(output_dir, exist_ok=True)

product_mapping = [
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.45.58.jpeg',
        'created_img': 'packshot_fresas_1786300581234.jpg',
        'out': 'packshot_fresas.jpg',
        'real_crop_pct': (0.16, 0.20, 0.90, 0.72),
        'pouch_area_pct': (0.245, 0.33, 0.795, 0.81)
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.45.58 (1).jpeg',
        'created_img': 'packshot_manzana_1786300604689.jpg',
        'out': 'packshot_manzana.jpg',
        'real_crop_pct': (0.10, 0.18, 0.91, 0.75),
        'pouch_area_pct': (0.21, 0.23, 0.835, 0.78)
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.46.15.jpeg',
        'created_img': 'packshot_platano_1786300626446.jpg',
        'out': 'packshot_platano.jpg',
        'real_crop_pct': (0.08, 0.20, 0.84, 0.75),
        'pouch_area_pct': (0.165, 0.215, 0.84, 0.80)
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.48.59.jpeg',
        'created_img': 'packshot_mango_1786300648505.jpg',
        'out': 'packshot_mango.jpg',
        'real_crop_pct': (0.07, 0.13, 0.87, 0.78),
        'pouch_area_pct': (0.22, 0.24, 0.81, 0.76)
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.46.25.jpeg',
        'created_img': 'packshot_mango_chamoy_1786300670935.jpg',
        'out': 'packshot_mango_chamoy.jpg',
        'real_crop_pct': (0.05, 0.16, 0.88, 0.77),
        'pouch_area_pct': (0.225, 0.245, 0.815, 0.76)
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.46.25 (1).jpeg',
        'created_img': 'packshot_manzana_chamoy_1786300695587.jpg',
        'out': 'packshot_manzana_chamoy.jpg',
        'real_crop_pct': (0.14, 0.17, 0.91, 0.75),
        'pouch_area_pct': (0.21, 0.23, 0.81, 0.77)
    },
    {
        'real_photo': 'WhatsApp Image 2026-08-09 at 18.46.25 (2).jpeg',
        'created_img': 'packshot_pina_chamoy_1786300720144.jpg',
        'out': 'packshot_pina_chamoy.jpg',
        'real_crop_pct': (0.12, 0.25, 0.83, 0.74),
        'pouch_area_pct': (0.21, 0.23, 0.81, 0.77)
    }
]

def embed_design(item):
    real_path = os.path.join(from_bela_dir, item['real_photo'])
    created_path = os.path.join(artifacts_dir, item['created_img'])
    out_path = os.path.join(output_dir, item['out'])
    
    scene_img = Image.open(created_path).convert('RGBA')
    s_w, s_h = scene_img.size
    
    real_img = Image.open(real_path).convert('RGBA')
    r_w, r_h = real_img.size
    
    # Tight crop of the front label artwork without dark edges
    t_pct, l_pct, b_pct, r_pct = item['real_crop_pct']
    real_label = real_img.crop((
        int(r_w * l_pct),
        int(r_h * t_pct),
        int(r_w * r_pct),
        int(r_h * b_pct)
    ))
    
    pt_top, pt_left, pt_bot, pt_right = item['pouch_area_pct']
    pouch_x = int(s_w * pt_left)
    pouch_y = int(s_h * pt_top)
    pouch_w = int(s_w * (pt_right - pt_left))
    pouch_h = int(s_h * (pt_bot - pt_top))
    
    real_label_resized = real_label.resize((pouch_w, pouch_h), Image.Resampling.LANCZOS)
    
    # Smooth curved mask for pouch contour
    mask = Image.new('L', (pouch_w, pouch_h), 0)
    draw = ImageDraw.Draw(mask)
    
    top_w = int(pouch_w * 0.98)
    bot_w = int(pouch_w * 0.88)
    top_l = (pouch_w - top_w) // 2
    top_r = top_l + top_w
    bot_l = (pouch_w - bot_w) // 2
    bot_r = bot_l + bot_w
    
    polygon = [
        (top_l, 4),
        (top_r, 4),
        (top_r + 2, 22),
        (bot_r, pouch_h - 6),
        (pouch_w // 2, pouch_h - 1),
        (bot_l, pouch_h - 6),
        (top_l - 2, 22)
    ]
    draw.polygon(polygon, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(1.2))
    
    # Composite real label artwork onto pouch in lifestyle scene
    scene_img.paste(real_label_resized, (pouch_x, pouch_y), mask)
    
    final_rgb = scene_img.convert('RGB')
    enhancer = ImageEnhance.Sharpness(final_rgb)
    final_rgb = enhancer.enhance(1.08)
    
    final_rgb.save(out_path, 'JPEG', quality=96)
    print(f'Embedded cleanly: {item["out"]}')

for item in product_mapping:
    embed_design(item)

print('All 7 products seamlessly embedded!')
