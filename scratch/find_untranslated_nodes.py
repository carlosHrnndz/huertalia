import os
from bs4 import BeautifulSoup

def audit_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    untranslated = []
    
    # Check all elements with text
    for tag in soup.find_all(True):
        # Ignore script, style, head, html, meta, link, option (if parent select has handling)
        if tag.name in ['script', 'style', 'head', 'html', 'meta', 'link', 'svg', 'path', 'g', 'defs']:
          continue
        
        # Check direct text children
        for child in tag.children:
            if isinstance(child, str):
                text = child.strip()
                if text and len(text) > 1 and not tag.has_attr('data-i18n'):
                    # Ignore pure numbers or single symbols
                    if not text.isdigit() and text not in ['*', ':', '•', '🇲🇽 ES', '🇺🇸 EN', '&copy; 2026 HUERTALIA. Todos los derechos reservados.']:
                        untranslated.append((tag.name, tag.attrs, text))
                        
    print(f"--- Untranslated nodes in {os.path.basename(filepath)} ---")
    for u in untranslated:
        print(f"Tag <{u[0]}> attrs={u[1]} -> Text: '{u[2]}'")

audit_html('/Users/carlos/Documents/Antigravity/huertalia/index.html')
audit_html('/Users/carlos/Documents/Antigravity/huertalia/contacto.html')
