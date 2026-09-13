# scripts/build_full_extended_dataset.py
import json, re

# Read world flags catalog
with open('app/data/world-flags-catalog.ts') as f:
    text = f.read()

country_matches = re.findall(
    r'\{\s*id:\s*\"([^\"]+)\",\s*name:\s*\"([^\"]+)\",\s*iso2:\s*\"([^\"]+)\",\s*continent:\s*\"([^\"]+)\",\s*capital:\s*\"([^\"]+)\".*?funFact:\s*\"([^\"]+)\"',
    text
)

# Read country meta
with open('app/data/country-meta.ts') as f:
    meta_text = f.read()

meta_dict = {}
for block in re.split(r'\"([a-z]{2})\":\s*\{', meta_text)[1:]:
    # find iso2
    pass
# parse meta properly
for m in re.finditer(r'\"([a-z]{2})\":\s*\{([^}]+)\}', meta_text):
    iso = m.group(1).lower()
    body = m.group(2)
    extra_m = re.search(r'\"extraFact\":\s*\"([^\"]+)\"', body)
    extra_fact = extra_m.group(1) if extra_m else ""
    meta_dict[iso] = extra_fact

# Read continent files to get existing curated facts and images
continent_curated = {}
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
            facts = []
            if facts_m:
                facts = [x.strip(' \n\r\t"') for x in re.findall(r'\"([^\"]+)\"', facts_m.group(1))]
            
            img_url_m = re.search(r'factImageUrl:\s*\"([^\"]+)\"', b)
            img_cap_m = re.search(r'factImageCaption:\s*\"([^\"]+)\"', b)
            photo = None
            if img_url_m and img_cap_m:
                photo = {"url": img_url_m.group(1), "caption": img_cap_m.group(1)}
            continent_curated[iso] = {"facts": facts, "photo": photo}
    except Exception as e:
        print(f"Error reading {c}: {e}")

print(f"Parsed {len(country_matches)} countries from catalog, {len(continent_curated)} from continent files.")

# Load comprehensive landmark & facts knowledge base
with open('scripts/landmarks_kb.json') as f:
    landmarks_kb = json.load(f)

print(f"Loaded {len(landmarks_kb)} landmark entries from knowledge base.")
