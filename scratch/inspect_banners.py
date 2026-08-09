from PIL import Image
import glob, os

for path in sorted(glob.glob('/Users/carlos/Documents/Antigravity/huertalia/assets/images/banners/*.png')):
    im = Image.open(path)
    print(f"{os.path.basename(path)}: {im.size[0]}x{im.size[1]} (ratio {im.size[0]/im.size[1]:.2f})")
