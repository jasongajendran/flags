# scripts/build_full_database.py
import json, re

# Read world flags catalog
with open('app/data/world-flags-catalog.ts') as f:
    catalog_text = f.read()

countries = re.findall(
    r'\{\s*id:\s*\"([^\"]+)\",\s*name:\s*\"([^\"]+)\",\s*iso2:\s*\"([^\"]+)\",\s*continent:\s*\"([^\"]+)\",\s*capital:\s*\"([^\"]+)\".*?funFact:\s*\"([^\"]+)\"',
    catalog_text
)

# Read country meta
with open('app/data/country-meta.ts') as f:
    meta_text = f.read()

meta_facts = {}
for m in re.finditer(r'\"([a-z]{2})\":\s*\{[^}]*\"extraFact\":\s*\"([^\"]+)\"', meta_text):
    meta_facts[m.group(1).lower()] = m.group(2)

# Read continent files for existing facts & curated photos
continent_facts = {}
continent_photos = {}
for c in ['europe', 'asia', 'africa', 'north-america', 'south-america', 'oceania', 'antarctica']:
    try:
        with open(f'app/data/continents/{c}.ts') as f:
            c_text = f.read()
        blocks = re.split(r'\{\s*id:\s*\"', c_text)[1:]
        for b in blocks:
            iso_m = re.search(r'iso2:\s*\"([^\"]+)\"', b)
            if not iso_m:
                continue
            iso = iso_m.group(1).lower()
            facts_m = re.search(r'interestingFacts:\s*\[(.*?)\]', b, re.DOTALL)
            if facts_m:
                facts = [x.strip(' \n\r\t"') for x in re.findall(r'\"([^\"]+)\"', facts_m.group(1))]
                if facts:
                    continent_facts[iso] = facts
            
            img_url_m = re.search(r'factImageUrl:\s*\"([^\"]+)\"', b)
            img_cap_m = re.search(r'factImageCaption:\s*\"([^\"]+)\"', b)
            if img_url_m and img_cap_m:
                continent_photos[iso] = {
                    "url": img_url_m.group(1),
                    "caption": img_cap_m.group(1)
                }
    except Exception as e:
        print(f"Error loading {c}: {e}")

print(f"Parsed {len(countries)} catalog countries, {len(meta_facts)} meta facts, {len(continent_facts)} continent facts.")
