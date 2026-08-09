import re

with open('/Users/carlos/Documents/Antigravity/huertalia/css/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Check for fixed pixel widths > 300px without max-width
fixed_widths = re.findall(r'width:\s*([3-9]\d{2}|[1-9]\d{3,})px', css)
print("Fixed widths > 300px in CSS:", fixed_widths)

# Check media queries
media_queries = re.findall(r'@media\s*\([^)]+\)\s*\{', css)
print("\nMedia queries in CSS:")
for mq in media_queries:
    print(" -", mq)
