# scripts/build_landmarks_and_facts.py
import json, re

# Read world-flags-catalog.ts to get the list of all countries
with open('app/data/world-flags-catalog.ts') as f:
    text = f.read()

country_matches = re.findall(
    r'\{\s*id:\s*\"([^\"]+)\",\s*name:\s*\"([^\"]+)\",\s*iso2:\s*\"([^\"]+)\",\s*continent:\s*\"([^\"]+)\",\s*capital:\s*\"([^\"]+)\".*?funFact:\s*\"([^\"]+)\"',
    text
)

# Read country-meta.ts to get extraFact and languages/currency
with open('app/data/country-meta.ts') as f:
    meta_text = f.read()

# Load curated continent country data if available
continent_facts = {}
continent_photos = {}
for c in ['europe', 'asia', 'africa', 'north-america', 'south-america', 'oceania', 'antarctica']:
    try:
        with open(f'app/data/continents/{c}.ts') as f:
            c_text = f.read()
        for block in re.split(r'\{\s*id:\s*\"', c_text)[1:]:
            iso_m = re.search(r'iso2:\s*\"([^\"]+)\"', block)
            if not iso_m:
                continue
            iso = iso_m.group(1).lower()
            
            facts_m = re.search(r'interestingFacts:\s*\[(.*?)\]', block, re.DOTALL)
            if facts_m:
                facts = [x.strip(' \n\r\t"') for x in re.findall(r'\"([^\"]+)\"', facts_m.group(1))]
                if facts:
                    continent_facts[iso] = facts
            
            img_url_m = re.search(r'factImageUrl:\s*\"([^\"]+)\"', block)
            img_cap_m = re.search(r'factImageCaption:\s*\"([^\"]+)\"', block)
            if img_url_m and img_cap_m:
                continent_photos[iso] = {
                    "url": img_url_m.group(1),
                    "caption": img_cap_m.group(1)
                }
    except Exception as e:
        print(f"Error reading {c}: {e}")

print(f"Loaded {len(continent_facts)} continent facts, {len(continent_photos)} continent photos")

# Extensive catalog of famous landmarks and facts for world countries
CUSTOM_LANDMARKS = {
    # Europe
    "ad": [
        {"title": "Madriu-Perafita-Claror Valley", "caption": "A UNESCO World Heritage glacial valley preserving pastoral Pyrenean huts and traditional stone trails.", "url": "https://picsum.photos/seed/ad-madriu/800/600"},
        {"title": "Casa de la Vall", "caption": "The historic 16th-century fortified manor house in Andorra la Vella that served as parliament for centuries.", "url": "https://picsum.photos/seed/ad-casadelavall/800/600"},
        {"title": "Grandvalira Pyrenees", "caption": "The largest ski resort domain in the Pyrenees and southern Europe with over 210 km of snow-covered slopes.", "url": "https://picsum.photos/seed/ad-grandvalira/800/600"}
    ],
    "al": [
        {"title": "Gjirokastër Historic City", "caption": "UNESCO-listed Ottoman stone fortress town famed for its castle and tower houses known as kule.", "url": "https://picsum.photos/seed/al-gjirokaster/800/600"},
        {"title": "The Blue Eye (Syri i Kaltër)", "caption": "A stunning natural freshwater spring with deep turquoise waters bubbling from more than 50 meters down.", "url": "https://picsum.photos/seed/al-blue-eye/800/600"},
        {"title": "Berat Citadel & Mangalem", "caption": "The 'Town of a Thousand Windows', showcasing white Ottoman residences along the Osum River.", "url": "https://picsum.photos/seed/al-berat/800/600"}
    ],
    "at": [
        {"title": "Schönbrunn Palace", "caption": "The opulent 1,441-room Baroque summer residence of the Habsburg monarchs in Vienna.", "url": "https://picsum.photos/seed/at-schonbrunn/800/600"},
        {"title": "Hallstatt Alpine Village", "caption": "A picturesque 16th-century lakeside village nestled between the Hallstätter See and steep Dachstein mountains.", "url": "https://picsum.photos/seed/at-hallstatt/800/600"},
        {"title": "Hohensalzburg Fortress", "caption": "One of the largest medieval castles in Europe, crowning the Festungsberg hill above Salzburg.", "url": "https://picsum.photos/seed/at-hohensalzburg/800/600"}
    ],
    "by": [
        {"title": "Mir Castle Complex", "caption": "UNESCO World Heritage 16th-century fortress blending Gothic, Renaissance, and Baroque architectural styles.", "url": "https://picsum.photos/seed/by-mircastle/800/600"},
        {"title": "Belovezhskaya Pushcha National Park", "caption": "Ancient primeval forest sanctuary home to the continent's largest herd of European bison (wisents).", "url": "https://picsum.photos/seed/by-bison/800/600"},
        {"title": "Nesvizh Radziwiłł Castle", "caption": "Grand residential estate surrounded by expansive landscaped parks and artificial canals.", "url": "https://picsum.photos/seed/by-nesvizh/800/600"}
    ],
    "be": [
        {"title": "Grand Place of Brussels", "caption": "The central square of Brussels, globally revered for its ornate guildhalls and Gothic Town Hall.", "url": "https://picsum.photos/seed/be-grandplace/800/600"},
        {"title": "Bruges Medieval Canals", "caption": "The 'Venice of the North', with cobblestone lanes, swan-filled canals, and Flemish brick architecture.", "url": "https://picsum.photos/seed/be-bruges/800/600"},
        {"title": "The Atomium", "caption": "An iconic 102-meter-tall modernist landmark built for the 1958 World's Fair depicting an iron crystal magnified 165 billion times.", "url": "https://picsum.photos/seed/be-atomium/800/600"}
    ],
    "ba": [
        {"title": "Stari Most (Old Bridge)", "caption": "The iconic 16th-century Ottoman arch bridge soaring over the turquoise waters of the Neretva River in Mostar.", "url": "https://picsum.photos/seed/ba-starimost/800/600"},
        {"title": "Baščaršija Bazaar", "caption": "Sarajevo's historic Ottoman-era cultural and economic center featuring the Sebilj wooden fountain.", "url": "https://picsum.photos/seed/ba-bascarsija/800/600"},
        {"title": "Kravica Waterfalls", "caption": "A spectacular natural amphitheater of tumbling cascading waterfalls on the Trebižat River.", "url": "https://picsum.photos/seed/ba-kravica/800/600"}
    ],
    "bg": [
        {"title": "Rila Monastery", "caption": "Bulgaria's largest and most famed Eastern Orthodox monastery, founded in the 10th century high in the Rila mountains.", "url": "https://picsum.photos/seed/bg-rila/800/600"},
        {"title": "Alexander Nevsky Cathedral", "caption": "Monumental Neo-Byzantine cathedral in Sofia featuring glistening gold-plated domes.", "url": "https://picsum.photos/seed/bg-nevsky/800/600"},
        {"title": "Belogradchik Rocks & Fortress", "caption": "Fascinating sandstone and conglomerate rock formations integrated with a Roman and Ottoman fortress.", "url": "https://picsum.photos/seed/bg-belogradchik/800/600"}
    ],
    "hr": [
        {"title": "Dubrovnik Old City Walls", "caption": "Imposing medieval stone walls encircling the historic Adriatic port city known as the 'Pearl of the Adriatic'.", "url": "https://picsum.photos/seed/hr-dubrovnik/800/600"},
        {"title": "Plitvice Lakes National Park", "caption": "A chain of 16 terraced crystal-clear lakes linked by cascading waterfalls across karst canyon limestone.", "url": "https://picsum.photos/seed/hr-plitvice/800/600"},
        {"title": "Diocletian's Palace in Split", "caption": "An expansive 4th-century Roman retirement fortress palace forming the bustling living heart of modern Split.", "url": "https://picsum.photos/seed/hr-split/800/600"}
    ],
    "cy": [
        {"title": "Aphrodite's Rock (Petra tou Romiou)", "caption": "The legendary Mediterranean sea stack near Paphos where Aphrodite, Greek goddess of love, emerged from sea foam.", "url": "https://picsum.photos/seed/cy-aphrodite/800/600"},
        {"title": "Kourion Ancient Amphitheatre", "caption": "Magnificent Greco-Roman cliffside theatre overlooking Episkopi Bay with panoramic coastal views.", "url": "https://picsum.photos/seed/cy-kourion/800/600"},
        {"title": "Troodos Mountain Painted Churches", "caption": "UNESCO-listed Byzantine mountain monasteries with remarkably preserved centuries-old frescoes.", "url": "https://picsum.photos/seed/cy-troodos/800/600"}
    ],
    "cz": [
        {"title": "Charles Bridge & Prague Castle", "caption": "Historic 14th-century stone gothic bridge adorned with 30 statues of saints spanning the Vltava River.", "url": "https://picsum.photos/seed/cz-charlesbridge/800/600"},
        {"title": "Prague Astronomical Clock", "caption": "The world's oldest astronomical clock still operating, installed in 1410 on the Old Town City Hall.", "url": "https://picsum.photos/seed/cz-astronomicalclock/800/600"},
        {"title": "Český Krumlov Castle", "caption": "Fairy-tale South Bohemian Renaissance castle overlooking a dramatic horseshoe loop of the Vltava River.", "url": "https://picsum.photos/seed/cz-krumlov/800/600"}
    ],
    "dk": [
        {"title": "Nyhavn Waterfront", "caption": "Copenhagen's colorful 17th-century canal district lined with vibrant townhouses, wooden ships, and cafes.", "url": "https://picsum.photos/seed/dk-nyhavn/800/600"},
        {"title": "Kronborg Castle (Elsinore)", "caption": "Majestic Renaissance stronghold immortalized as Elsinore in William Shakespeare's Hamlet.", "url": "https://picsum.photos/seed/dk-kronborg/800/600"},
        {"title": "The Little Mermaid Statue", "caption": "Beloved bronze sculpture at Langelinie promenade inspired by Hans Christian Andersen's timeless fairy tale.", "url": "https://picsum.photos/seed/dk-mermaid/800/600"}
    ],
    "ee": [
        {"title": "Tallinn Medieval Old Town", "caption": "One of the best-preserved medieval fortified Hanseatic trading cities in Northern Europe.", "url": "https://picsum.photos/seed/ee-tallinn/800/600"},
        {"title": "Soomaa National Park Bogs", "caption": "Pristine wetland wilderness famed for its 'fifth season' spring floods navigated by traditional dugout canoes.", "url": "https://picsum.photos/seed/ee-soomaa/800/600"},
        {"title": "Alexander Nevsky Cathedral", "caption": "Grand Russian Revival onion-domed cathedral standing proudly atop Toompea Hill in Tallinn.", "url": "https://picsum.photos/seed/ee-nevsky/800/600"}
    ],
    "fi": [
        {"title": "Santa Claus Village (Rovaniemi)", "caption": "The official hometown of Santa Claus in Finnish Lapland right on the magical Arctic Circle boundary.", "url": "https://picsum.photos/seed/fi-rovaniemi/800/600"},
        {"title": "Suomenlinna Sea Fortress", "caption": "An expansive 18th-century maritime fortress spanning six interconnected islands in Helsinki harbor.", "url": "https://picsum.photos/seed/fi-suomenlinna/800/600"},
        {"title": "Finnish Lake District (Saimaa)", "caption": "Vast maze of blue water, forested isles, and quiet shores home to the rare endangered Saimaa ringed seal.", "url": "https://picsum.photos/seed/fi-saimaa/800/600"}
    ],
    "fr": [
        {"title": "Eiffel Tower", "caption": "The iconic wrought-iron lattice tower soaring 330 meters above Paris, designed by Gustave Eiffel for the 1889 World's Fair.", "url": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"},
        {"title": "Louvre Museum & Glass Pyramid", "caption": "The world's largest art museum and historic royal palace, housing the Mona Lisa and Winged Victory.", "url": "https://picsum.photos/seed/fr-louvre/800/600"},
        {"title": "Mont-Saint-Michel", "caption": "The gravity-defying medieval Benedictine abbey perched on a rocky tidal island off the coast of Normandy.", "url": "https://picsum.photos/seed/fr-montsaintmichel/800/600"}
    ],
    "de": [
        {"title": "Neuschwanstein Castle", "caption": "The fairytale 19th-century Romanesque Revival palace built by King Ludwig II in the rugged Bavarian Alps.", "url": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80"},
        {"title": "Brandenburg Gate", "caption": "Berlin's monumental 18th-century neoclassical triumphal arch and national symbol of German unity.", "url": "https://picsum.photos/seed/de-brandenburggate/800/600"},
        {"title": "Cologne Cathedral (Kölner Dom)", "caption": "Gargantuan twin-spired Gothic cathedral towering over the Rhine river, taking over 600 years to build.", "url": "https://picsum.photos/seed/de-colognecathedral/800/600"}
    ],
    "gr": [
        {"title": "The Acropolis & Parthenon", "caption": "Ancient citadel crowned by the Parthenon temple, immortal monument to the golden age of classical Athens.", "url": "https://picsum.photos/seed/gr-acropolis/800/600"},
        {"title": "Santorini Caldera & Oia", "caption": "Dazzling whitewashed cliffside villages with blue-domed churches perched high above volcanic Aegean waters.", "url": "https://picsum.photos/seed/gr-santorini/800/600"},
        {"title": "Meteora Monasteries", "caption": "Incredible Eastern Orthodox monasteries perched atop towering sheer sandstone rock pillars in Thessaly.", "url": "https://picsum.photos/seed/gr-meteora/800/600"}
    ],
    "hu": [
        {"title": "Hungarian Parliament Building", "caption": "Gothic Revival masterpiece situated majestically on the banks of the Danube River in Budapest.", "url": "https://picsum.photos/seed/hu-parliament/800/600"},
        {"title": "Buda Castle & Fisherman's Bastion", "caption": "Fairytale neo-Romanesque rampart towers offering sweeping panoramic views across the Danube and Pest.", "url": "https://picsum.photos/seed/hu-bastion/800/600"},
        {"title": "Széchenyi Thermal Baths", "caption": "One of Europe's largest natural geothermal spa complexes, renowned for steaming outdoor mineral pools.", "url": "https://picsum.photos/seed/hu-szechenyi/800/600"}
    ],
    "is": [
        {"title": "The Blue Lagoon", "caption": "World-famous geothermal spa fed by warm, mineral-rich milky-cyan volcanic waters in a lava field.", "url": "https://picsum.photos/seed/is-bluelagoon/800/600"},
        {"title": "Gullfoss Waterfall & Geysir", "caption": "Dramatic golden tiered waterfall plunging into a rugged canyon along Iceland's Golden Circle route.", "url": "https://picsum.photos/seed/is-gullfoss/800/600"},
        {"title": "Jökulsárlón Glacier Lagoon", "caption": "Deep glacial lagoon dotted with luminous blue icebergs drifting out towards the black volcanic Diamond Beach.", "url": "https://picsum.photos/seed/is-jokulsarlon/800/600"}
    ],
    "ie": [
        {"title": "Cliffs of Moher", "caption": "Dramatic Atlantic coastal sea cliffs soaring over 214 meters straight out of the ocean in County Clare.", "url": "https://picsum.photos/seed/ie-cliffsofmoher/800/600"},
        {"title": "Trinity College Long Room Library", "caption": "Magnificent 65-meter oak-vaulted library in Dublin housing the ancient illuminated manuscript Book of Kells.", "url": "https://picsum.photos/seed/ie-trinity/800/600"},
        {"title": "Rock of Cashel", "caption": "Historic ecclesiastical fortress and seat of ancient Munster kings set upon a limestone outcrop.", "url": "https://picsum.photos/seed/ie-cashel/800/600"}
    ],
    "it": [
        {"title": "The Colosseum of Rome", "caption": "The largest ancient amphitheater ever constructed, hosting gladiatorial contests in imperial Rome.", "url": "https://picsum.photos/seed/it-colosseum/800/600"},
        {"title": "Venice Grand Canal & Rialto Bridge", "caption": "The bustling main water thoroughfare of Venice, plied by gondolas past centuries-old Venetian palazzi.", "url": "https://picsum.photos/seed/it-venice/800/600"},
        {"title": "Leaning Tower of Pisa", "caption": "The world-famous free-standing Romanesque bell tower celebrated for its unintended 4-degree tilt.", "url": "https://picsum.photos/seed/it-pisa/800/600"}
    ],
    "gb": [
        {"title": "Big Ben & Palace of Westminster", "caption": "The iconic neo-Gothic clock tower and British Parliament buildings along the River Thames.", "url": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"},
        {"title": "Stonehenge", "caption": "Prehistoric monument of colossal standing sarsen and bluestones aligned with the summer solstice.", "url": "https://picsum.photos/seed/gb-stonehenge/800/600"},
        {"title": "Edinburgh Castle", "caption": "Historic fortress perched dramatically on the volcanic plug of Castle Rock, dominating Scotland's capital.", "url": "https://picsum.photos/seed/gb-edinburgh/800/600"}
    ],
    "es": [
        {"title": "Sagrada Família in Barcelona", "caption": "Antoni Gaudí's visionary basilica with organic forest-like stone pillars and stained glass light.", "url": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80"},
        {"title": "The Alhambra of Granada", "caption": "Magnificent Moorish palace fortress featuring intricate Islamic geometric stuccowork and gardens.", "url": "https://picsum.photos/seed/es-alhambra/800/600"},
        {"title": "Plaza de España in Seville", "caption": "Stunning semicircular palace complex built for the 1929 Ibero-American Expo with tiled alcoves and bridges.", "url": "https://picsum.photos/seed/es-sevilla/800/600"}
    ],
    "us": [
        {"title": "Statue of Liberty", "caption": "Colossal neoclassical sculpture on Liberty Island in New York Harbor, symbol of freedom and hope.", "url": "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80"},
        {"title": "Grand Canyon National Park", "caption": "Awe-inspiring 277-mile long canyon carved over millions of years by the Colorado River in Arizona.", "url": "https://picsum.photos/seed/us-grandcanyon/800/600"},
        {"title": "Golden Gate Bridge", "caption": "World-famous 1.7-mile international orange suspension bridge connecting San Francisco to Marin County.", "url": "https://picsum.photos/seed/us-goldengate/800/600"}
    ],
    "ca": [
        {"title": "Lake Louise in Banff National Park", "caption": "Glacier-fed alpine lake renowned for its shimmering emerald-turquoise waters and Rocky Mountain peaks.", "url": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80"},
        {"title": "Niagara Falls", "caption": "Massive Horseshoe Falls pouring millions of gallons of water over the precipice between Canada and the USA.", "url": "https://picsum.photos/seed/ca-niagara/800/600"},
        {"title": "CN Tower in Toronto", "caption": "553-meter communications and observation tower dominating the skyline of Canada's largest city.", "url": "https://picsum.photos/seed/ca-cntower/800/600"}
    ],
    "mx": [
        {"title": "Chichén Itzá Pyramid (El Castillo)", "caption": "Massive Mayan step-pyramid dedicated to the feathered serpent deity Kukulkan in the Yucatán.", "url": "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80"},
        {"title": "Teotihuacán Sun & Moon Pyramids", "caption": "Colossal ancient Mesoamerican archaeological complex along the Avenue of the Dead.", "url": "https://picsum.photos/seed/mx-teotihuacan/800/600"},
        {"title": "Copper Canyon (Barrancas del Cobre)", "caption": "A group of six immense ravines in the Sierra Madre Occidental deeper and wider than the Grand Canyon.", "url": "https://picsum.photos/seed/mx-coppercanyon/800/600"}
    ],
    "jp": [
        {"title": "Mount Fuji", "caption": "Japan's highest and most sacred mountain (3,776 m), an iconic snow-capped symmetrical active volcano.", "url": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"},
        {"title": "Fushimi Inari Taisha", "caption": "Historic Shinto shrine in Kyoto famous for thousands of vermilion torii gates winding through sacred woodlands.", "url": "https://picsum.photos/seed/jp-fushimi/800/600"},
        {"title": "Himeji Castle", "caption": "The dazzling 'White Heron Castle', widely regarded as Japan's most spectacular surviving feudal fortress.", "url": "https://picsum.photos/seed/jp-himeji/800/600"}
    ],
    "cn": [
        {"title": "The Great Wall of China", "caption": "Ancient series of fortifications stretching thousands of miles across northern mountain ridges.", "url": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80"},
        {"title": "The Forbidden City in Beijing", "caption": "Vast imperial palace complex of the Ming and Qing dynasties housing 980 surviving buildings.", "url": "https://picsum.photos/seed/cn-forbiddencity/800/600"},
        {"title": "Terracotta Army of Xi'an", "caption": "Thousands of life-sized terracotta soldiers and war chariots buried with China's first emperor Qin Shi Huang.", "url": "https://picsum.photos/seed/cn-terracotta/800/600"}
    ],
    "in": [
        {"title": "The Taj Mahal in Agra", "caption": "The ivory-white marble mausoleum commissioned in 1631 by Mughal Emperor Shah Jahan for his favorite wife Mumtaz.", "url": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"},
        {"title": "Amber Fort in Jaipur", "caption": "Opulent hilltop sandstone fortress blending Hindu and Mughal styles overlooking Maota Lake.", "url": "https://picsum.photos/seed/in-amberfort/800/600"},
        {"title": "Varanasi Ghats along the Ganges", "caption": "Sacred riverside steps in one of the world's oldest continuously inhabited cities where pilgrims perform sacred rituals.", "url": "https://picsum.photos/seed/in-varanasi/800/600"}
    ],
    "au": [
        {"title": "Sydney Opera House & Harbour Bridge", "caption": "Jørn Utzon's architectural masterpiece with interlocking concrete shells overlooking sparkling Sydney Harbour.", "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80"},
        {"title": "Great Barrier Reef", "caption": "The world's largest coral reef ecosystem stretching over 2,300 km off the tropical Queensland coast.", "url": "https://picsum.photos/seed/au-barrierreef/800/600"},
        {"title": "Uluru (Ayers Rock)", "caption": "Sacred colossal sandstone monolith in the Red Centre desert changing vibrant colors at sunrise and sunset.", "url": "https://picsum.photos/seed/au-uluru/800/600"}
    ],
    "br": [
        {"title": "Christ the Redeemer", "caption": "The 30-meter Art Deco statue of Jesus Christ crowning Corcovado Mountain high above Rio de Janeiro.", "url": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80"},
        {"title": "Iguazu Falls", "caption": "Massive semicircular curtain of 275 thunderous waterfalls spanning the border between Brazil and Argentina.", "url": "https://picsum.photos/seed/br-iguazu/800/600"},
        {"title": "Sugarloaf Mountain & Copacabana", "caption": "Iconic granite peak rising out of Guanabara Bay accessed by cable cars with views of famous beaches.", "url": "https://picsum.photos/seed/br-sugarloaf/800/600"}
    ],
    "eg": [
        {"title": "Great Pyramids of Giza & Sphinx", "caption": "The only surviving wonder of the ancient world, built as monumental tombs for Pharaoh Khufu and his successors.", "url": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80"},
        {"title": "Karnak Temple Complex in Luxor", "caption": "Colossal open-air religious sanctuary famous for the Great Hypostyle Hall with 134 massive sandstone columns.", "url": "https://picsum.photos/seed/eg-karnak/800/600"},
        {"title": "Abu Simbel Temples", "caption": "Two colossal rock-cut temples carved out of the mountain by Pharaoh Ramesses II overlooking Lake Nasser.", "url": "https://picsum.photos/seed/eg-abusimbel/800/600"}
    ]
}
