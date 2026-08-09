import os
from PIL import Image, ImageOps, ImageEnhance, ImageFilter

input_path = '/Users/carlos/Documents/Antigravity/huertalia/from_bela/WhatsApp Image 2026-08-09 at 18.45.58.jpeg'
output_dir = '/Users/carlos/Documents/Antigravity/huertalia/assets/images/logo'
os.makedirs(output_dir, exist_ok=True)

img = Image.open(input_path).convert('RGB')
w, h = img.size

# The logo area is located around top-center of the pouch
# Approx coordinates: top 24% to 36%, left 28% to 68%
crop_box = (int(w * 0.28), int(h * 0.23), int(w * 0.68), int(h * 0.35))
logo_crop = img.crop(crop_box)

# Convert to RGBA and threshold out the white paper background to make transparent PNG
logo_rgba = logo_crop.convert('RGBA')
datas = logo_rgba.getdata()

new_data = []
for item in datas:
    # item is (R, G, B, A)
    # Background paper is white/cream (R > 185, G > 185, B > 175)
    r, g, b, a = item
    if r > 180 and g > 180 and b > 170:
        new_data.append((255, 255, 255, 0)) # Transparent
    else:
        # Boost contrast of text and green leaf
        new_data.append((r, g, b, 255))

logo_rgba.putdata(new_data)

# Save transparent logo PNG
out_png = os.path.join(output_dir, 'logo_huertalia.png')
logo_rgba.save(out_png, 'PNG')

# Also create SVG Vector Logo matching exact brand typography & leaf icon
svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 120" width="100%" height="100%">
  <style>
    .brand-serif {
      font-family: 'Fraunces', 'Cinzel', 'Georgia', serif;
      font-weight: 800;
      font-size: 54px;
      letter-spacing: 0.05em;
      fill: #FAF6F0;
    }
    .brand-sub {
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0.42em;
      fill: #E38833;
    }
  </style>

  <g id="logo-wordmark">
    <!-- Main Serif Wordmark -->
    <text x="250" y="65" text-anchor="middle" class="brand-serif">HUERTALIA</text>
    
    <!-- Stylized Leaf Dot over the I in HUERTALIA -->
    <path d="M 406 22 C 400 15, 404 4, 414 7 C 424 10, 426 25, 412 28 C 408 28, 406 25, 406 22 Z" fill="#4B6B40" />
    <path d="M 408 24 Q 414 16 418 10" stroke="#FAF6F0" stroke-width="1.5" fill="none" stroke-linecap="round" />
    
    <!-- Subtitle L I O F I L I Z A D O S -->
    <text x="250" y="98" text-anchor="middle" class="brand-sub">L I O F I L I Z A D O S</text>
  </g>
</svg>'''

out_svg = os.path.join(output_dir, 'logo_huertalia.svg')
with open(out_svg, 'w', encoding='utf-8') as f:
    f.write(svg_content)

# Light background version of SVG logo (for light cards/footer)
svg_dark = svg_content.replace('fill="#FAF6F0"', 'fill="#122317"')
out_svg_dark = os.path.join(output_dir, 'logo_huertalia_dark.svg')
with open(out_svg_dark, 'w', encoding='utf-8') as f:
    f.write(svg_dark)

print('Logo PNG, SVG, and SVG Dark successfully extracted and generated!')
