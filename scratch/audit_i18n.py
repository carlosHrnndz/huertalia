import re, json

with open('/Users/carlos/Documents/Antigravity/huertalia/js/main.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

with open('/Users/carlos/Documents/Antigravity/huertalia/index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

with open('/Users/carlos/Documents/Antigravity/huertalia/contacto.html', 'r', encoding='utf-8') as f:
    contacto_html = f.read()

# Extract keys from data-i18n in HTML files
index_keys = set(re.findall(r'data-i18n=["\']([^"\']+)["\']', index_html))
contacto_keys = set(re.findall(r'data-i18n=["\']([^"\']+)["\']', contacto_html))

all_html_keys = index_keys.union(contacto_keys)

# Extract translations.es and translations.en keys from main.js
es_match = re.search(r'es:\s*\{([^}]+(?:\n[^}]+)*)\},\s*en:', js_content)
en_match = re.search(r'en:\s*\{([^}]+(?:\n[^}]+)*)\}\s*\};', js_content)

es_keys = set(re.findall(r'([a-zA-Z0-9_]+):', es_match.group(1))) if es_match else set()
en_keys = set(re.findall(r'([a-zA-Z0-9_]+):', en_match.group(1))) if en_match else set()

print(f"Total data-i18n keys in HTML: {len(all_html_keys)}")
print(f"Total keys in translations.es: {len(es_keys)}")
print(f"Total keys in translations.en: {len(en_keys)}")

missing_in_es = all_html_keys - es_keys
missing_in_en = all_html_keys - en_keys

print(f"Keys in HTML but missing in ES dict: {missing_in_es}")
print(f"Keys in HTML but missing in EN dict: {missing_in_en}")

# Search for potential untranslated hardcoded Spanish text nodes in index.html (elements without data-i18n containing Spanish text)
raw_nodes = re.findall(r'>([^<>{}\n]+)<', index_html)
suspicious = []
for node in raw_nodes:
    cleaned = node.strip()
    if cleaned and not cleaned.startswith('&') and len(cleaned) > 2:
        if not any(k in index_html for k in [f'>{cleaned}<']): # checking context
            pass
        suspicious.append(cleaned)

print("\nSample text nodes in index.html:")
for s in suspicious[:20]:
    print(" -", s)
