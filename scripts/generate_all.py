# scripts/generate_all.py
import json, re

# Read world flags catalog
with open('app/data/world-flags-catalog.ts') as f:
    catalog_text = f.read()

country_matches = re.findall(
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

# Pre-curated top landmarks and extra facts by ISO2
LANDMARKS_MAP = {
    # Europe
    "ad": [
        {"title": "Madriu-Perafita-Claror Valley", "caption": "UNESCO World Heritage glacial valley preserving pastoral Pyrenean huts and traditional stone trails.", "url": "https://picsum.photos/seed/ad-madriu/800/600"},
        {"title": "Casa de la Vall", "caption": "Historic 16th-century fortified manor house in Andorra la Vella that served as parliament for centuries.", "url": "https://picsum.photos/seed/ad-casadelavall/800/600"},
        {"title": "Grandvalira Ski Resort", "caption": "The largest ski resort domain in the Pyrenees with over 210 kilometers of snow-covered alpine slopes.", "url": "https://picsum.photos/seed/ad-grandvalira/800/600"}
    ],
    "al": [
        {"title": "Gjirokastër Historic Stone City", "caption": "UNESCO-listed Ottoman-era fortified stone city famed for its hillside castle and tower houses.", "url": "https://picsum.photos/seed/al-gjirokaster/800/600"},
        {"title": "The Blue Eye (Syri i Kaltër)", "caption": "Hypnotic natural freshwater spring with deep turquoise waters bubbling from an unexplored karst cavern.", "url": "https://picsum.photos/seed/al-blue-eye/800/600"},
        {"title": "Berat Town of a Thousand Windows", "caption": "Spectacular Ottoman riverside architecture cascading down the hill beneath the ancient citadel.", "url": "https://picsum.photos/seed/al-berat/800/600"}
    ],
    "at": [
        {"title": "Schönbrunn Palace", "caption": "The opulent 1,441-room Baroque summer palace of the Habsburg dynasty in Vienna.", "url": "https://picsum.photos/seed/at-schonbrunn/800/600"},
        {"title": "Hallstatt Alpine Village", "caption": "Picturesque 16th-century lakeside village nestled between the Hallstätter See and Dachstein mountains.", "url": "https://picsum.photos/seed/at-hallstatt/800/600"},
        {"title": "Hohensalzburg Fortress", "caption": "One of the largest medieval castles in Europe, crowning the Festungsberg hill above Salzburg.", "url": "https://picsum.photos/seed/at-hohensalzburg/800/600"}
    ],
    "by": [
        {"title": "Mir Castle Complex", "caption": "Magnificent 16th-century UNESCO World Heritage castle blending Gothic, Baroque, and Renaissance architectural styles.", "url": "https://picsum.photos/seed/by-mircastle/800/600"},
        {"title": "Belovezhskaya Pushcha National Park", "caption": "Ancient primeval forest sanctuary home to the continent's largest herd of wild European bison (wisent).", "url": "https://picsum.photos/seed/by-bison/800/600"},
        {"title": "Nesvizh Radziwiłł Castle", "caption": "Opulent residential palace surrounded by picturesque lakes and landscaped English gardens.", "url": "https://picsum.photos/seed/by-nesvizh/800/600"}
    ],
    "be": [
        {"title": "Grand Place of Brussels", "caption": "The central square of Brussels, globally revered for its ornate guildhalls and Gothic Town Hall.", "url": "https://picsum.photos/seed/be-grandplace/800/600"},
        {"title": "Bruges Medieval Canals", "caption": "The 'Venice of the North', with cobblestone lanes, swan-filled canals, and Flemish brick architecture.", "url": "https://picsum.photos/seed/be-bruges/800/600"},
        {"title": "The Atomium", "caption": "Iconic 102-meter-tall modernist landmark built for the 1958 World's Fair depicting an iron crystal cell.", "url": "https://picsum.photos/seed/be-atomium/800/600"}
    ],
    "ba": [
        {"title": "Stari Most (Old Bridge) in Mostar", "caption": "The iconic 16th-century Ottoman stone arch bridge soaring over the turquoise waters of the Neretva River.", "url": "https://picsum.photos/seed/ba-starimost/800/600"},
        {"title": "Baščaršija Bazaar in Sarajevo", "caption": "Historic Ottoman-era bazaar featuring artisan copper coppersmiths and the Sebilj wooden fountain.", "url": "https://picsum.photos/seed/ba-bascarsija/800/600"},
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
        {"title": "Lake Saimaa Labyrinth", "caption": "Vast maze of blue water, forested isles, and quiet shores home to the rare endangered Saimaa ringed seal.", "url": "https://picsum.photos/seed/fi-saimaa/800/600"}
    ],
    "fr": [
        {"title": "Eiffel Tower", "caption": "The iconic wrought-iron lattice tower soaring 330 meters above Paris, designed for the 1889 World's Fair.", "url": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"},
        {"title": "Louvre Museum & Glass Pyramid", "caption": "The world's largest art museum and historic royal palace, housing the Mona Lisa and Winged Victory.", "url": "https://picsum.photos/seed/fr-louvre/800/600"},
        {"title": "Mont-Saint-Michel", "caption": "The gravity-defying medieval Benedictine abbey perched on a rocky tidal island off Normandy.", "url": "https://picsum.photos/seed/fr-montsaintmichel/800/600"}
    ],
    "de": [
        {"title": "Neuschwanstein Castle", "caption": "The fairytale 19th-century Romanesque Revival palace built by King Ludwig II in the Bavarian Alps.", "url": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80"},
        {"title": "Brandenburg Gate", "caption": "Berlin's monumental 18th-century neoclassical triumphal arch and national symbol of German unity.", "url": "https://picsum.photos/seed/de-brandenburggate/800/600"},
        {"title": "Cologne Cathedral (Kölner Dom)", "caption": "Gargantuan twin-spired Gothic cathedral towering over the Rhine river, taking over 600 years to build.", "url": "https://picsum.photos/seed/de-colognecathedral/800/600"}
    ],
    "gr": [
        {"title": "The Acropolis & Parthenon", "caption": "Ancient citadel crowned by the Parthenon temple, immortal monument to the golden age of classical Athens.", "url": "https://picsum.photos/seed/gr-acropolis/800/600"},
        {"title": "Santorini Caldera & Oia", "caption": "Dazzling whitewashed cliffside villages with blue-domed churches perched high above volcanic Aegean waters.", "url": "https://picsum.photos/seed/gr-santorini/800/600"},
        {"title": "Meteora Monasteries", "caption": "Incredible Eastern Orthodox monasteries perched atop towering sheer sandstone rock pillars in Thessaly.", "url": "https://picsum.photos/seed/gr-meteora/800/600"}
    ],
    "va": [
        {"title": "Saint Peter's Basilica", "caption": "The monumental papal enclave church designed by Michelangelo and Bernini, center of the Catholic world.", "url": "https://picsum.photos/seed/va-stpeter/800/600"},
        {"title": "The Sistine Chapel", "caption": "Renowned chapel famous for Michelangelo's ceiling frescoes, including The Creation of Adam and The Last Judgment.", "url": "https://picsum.photos/seed/va-sistine/800/600"},
        {"title": "Saint Peter's Square", "caption": "Colossal elliptical piazza framed by Bernini's four-row colonnade and ancient Egyptian obelisk.", "url": "https://picsum.photos/seed/va-square/800/600"}
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
    "lv": [
        {"title": "Riga Art Nouveau Historic Quarter", "caption": "Over 800 elaborate Art Nouveau building facades with gargoyles and statues across Riga's city center.", "url": "https://picsum.photos/seed/lv-riga/800/600"},
        {"title": "Gauja National Park & Turaida Castle", "caption": "The 'Livonian Switzerland', featuring red sandstone cliffs and medieval brick castles.", "url": "https://picsum.photos/seed/lv-gauja/800/600"},
        {"title": "Rundāle Palace", "caption": "Baroque and Rococo palace designed by Bartolomeo Rastrelli, featuring stunning French formal rose gardens.", "url": "https://picsum.photos/seed/lv-rundale/800/600"}
    ],
    "li": [
        {"title": "Vaduz Castle", "caption": "The official residence of the Reigning Prince of Liechtenstein, overlooking the Rhine valley from an alpine ridge.", "url": "https://picsum.photos/seed/li-vaduz/800/600"},
        {"title": "Gutenberg Castle in Balzers", "caption": "Magnificent preserved high-medieval castle perched atop a 70-meter freestanding rocky hill.", "url": "https://picsum.photos/seed/li-gutenberg/800/600"},
        {"title": "Malbun Alpine Valley", "caption": "Idyllic alpine ski and hiking resort nestled high in an amphitheater of mountain summits.", "url": "https://picsum.photos/seed/li-malbun/800/600"}
    ],
    "lt": [
        {"title": "The Hill of Crosses", "caption": "Sacred Catholic pilgrimage site near Šiauliai featuring over 100,000 crosses planted by faithful pilgrims.", "url": "https://picsum.photos/seed/lt-crosses/800/600"},
        {"title": "Trakai Island Castle", "caption": "14th-century red-brick Gothic fortress perched on an island in Lake Galvė.", "url": "https://picsum.photos/seed/lt-trakai/800/600"},
        {"title": "Curonian Spit Sand Dunes", "caption": "Vast coastal sand dune peninsula separating the Curonian Lagoon from the Baltic Sea.", "url": "https://picsum.photos/seed/lt-curonian/800/600"}
    ],
    "lu": [
        {"title": "Bock Casemates", "caption": "Subterranean defense network of tunnels and cannon galleries hewn directly into the fortress rock.", "url": "https://picsum.photos/seed/lu-bock/800/600"},
        {"title": "Vianden Castle", "caption": "One of the largest and most dramatic feudal residences of the Romanesque and Gothic periods in Europe.", "url": "https://picsum.photos/seed/lu-vianden/800/600"},
        {"title": "Grand Ducal Palace", "caption": "The official residence of the Grand Duke of Luxembourg in the historic town center with Flemish Renaissance facade.", "url": "https://picsum.photos/seed/lu-palace/800/600"}
    ],
    "mt": [
        {"title": "St. John's Co-Cathedral in Valletta", "caption": "Baroque masterpiece featuring an intricately carved gilded interior and Caravaggio's masterpiece painting.", "url": "https://picsum.photos/seed/mt-valletta/800/600"},
        {"title": "Blue Grotto Caves", "caption": "A complex of sea caves on the southern coast famous for brilliant turquoise and cyan underwater reflections.", "url": "https://picsum.photos/seed/mt-bluegrotto/800/600"},
        {"title": "Mdina 'The Silent City'", "caption": "Ancient fortified walled hilltop capital featuring narrow shaded stone alleyways and noble palaces.", "url": "https://picsum.photos/seed/mt-mdina/800/600"}
    ],
    "md": [
        {"title": "Mileștii Mici Underground Cellars", "caption": "Guinness World Record largest wine cellar, spanning over 200 km of subterranean limestone galleries.", "url": "https://picsum.photos/seed/md-milestii/800/600"},
        {"title": "Orheiul Vechi Cave Monastery", "caption": "Ancient archaeological complex featuring cave monasteries carved into limestone cliffs above the Răut River.", "url": "https://picsum.photos/seed/md-orheiul/800/600"},
        {"title": "Soroca Fortress", "caption": "Historic circular stone fortress built by Prince Stephen the Great on the banks of the Dniester River.", "url": "https://picsum.photos/seed/md-soroca/800/600"}
    ],
    "mc": [
        {"title": "Monte Carlo Casino & Square", "caption": "The world-famous Belle Époque gambling and entertainment complex overlooking the French Riviera.", "url": "https://picsum.photos/seed/mc-casino/800/600"},
        {"title": "Prince's Palace of Monaco", "caption": "Fortified cliffside palace of the Grimaldi family atop 'The Rock' with daily changing of the guard.", "url": "https://picsum.photos/seed/mc-palace/800/600"},
        {"title": "Oceanographic Museum", "caption": "Monumental neoclassical museum built into the sheer cliff above the Mediterranean, founded by Prince Albert I.", "url": "https://picsum.photos/seed/mc-oceanographic/800/600"}
    ],
    "me": [
        {"title": "Bay of Kotor & Perast", "caption": "Dramatic fjord-like Adriatic inlet surrounded by sheer limestone cliffs and medieval stone villages.", "url": "https://picsum.photos/seed/me-kotor/800/600"},
        {"title": "Sveti Stefan Island Resort", "caption": "Iconic fortified 15th-century island village connected to the pink sandy mainland by a narrow isthmus.", "url": "https://picsum.photos/seed/me-svetistefan/800/600"},
        {"title": "Durmitor National Park & Tara River", "caption": "Rugged glacial peaks and the deepest river canyon in Europe, acclaimed for whitewater rafting.", "url": "https://picsum.photos/seed/me-durmitor/800/600"}
    ],
    "nl": [
        {"title": "Keukenhof Tulip Gardens", "caption": "The 'Garden of Europe', blooming with over 7 million vibrant tulips, hyacinths, and daffodils every spring.", "url": "https://picsum.photos/seed/nl-keukenhof/800/600"},
        {"title": "Amsterdam Canals & Bridges", "caption": "UNESCO-listed 17th-century concentric canal network traversed by historic bicycles and canal cruisers.", "url": "https://picsum.photos/seed/nl-amsterdam/800/600"},
        {"title": "Kinderdijk Historic Windmills", "caption": "Iconic collection of 19 monumental 18th-century drainage windmills engineered to manage water levels.", "url": "https://picsum.photos/seed/nl-kinderdijk/800/600"}
    ],
    "mk": [
        {"title": "Lake Ohrid & St. John at Kaneo", "caption": "Ancient deep tectonic lake and cliffside Byzantine church with panoramic sparkling blue views.", "url": "https://picsum.photos/seed/mk-ohrid/800/600"},
        {"title": "Skopje Stone Bridge & Old Bazaar", "caption": "15th-century Ottoman bridge connecting modern Macedonia Square to the Ottoman trading quarter.", "url": "https://picsum.photos/seed/mk-skopje/800/600"},
        {"title": "Matka Canyon", "caption": "Dramatic limestone gorge home to medieval monasteries and submerged underwater caves like Vrelo.", "url": "https://picsum.photos/seed/mk-matka/800/600"}
    ],
    "no": [
        {"title": "Geirangerfjord", "caption": "Majestic UNESCO World Heritage fjord with deep blue waters, snow-capped peaks, and the Seven Sisters waterfall.", "url": "https://picsum.photos/seed/no-geirangerfjord/800/600"},
        {"title": "Preikestolen (Pulpit Rock)", "caption": "Massive flat-topped cliff rising 604 meters vertically above the shimmering waters of the Lysefjord.", "url": "https://picsum.photos/seed/no-pulpitrock/800/600"},
        {"title": "Lofoten Islands Fishing Villages", "caption": "Dramatic Arctic archipelago featuring jagged peaks rising from the sea and red fishermen's rorbuer cabins.", "url": "https://picsum.photos/seed/no-lofoten/800/600"}
    ],
    "pl": [
        {"title": "Wieliczka Salt Mine", "caption": "Underground world of labyrinthine chambers, saline lakes, and the Chapel of St. Kinga carved entirely from rock salt.", "url": "https://picsum.photos/seed/pl-wieliczka/800/600"},
        {"title": "Wawel Royal Castle in Kraków", "caption": "Historic fortified complex overlooking the Vistula River that served as the royal seat of Polish monarchs for centuries.", "url": "https://picsum.photos/seed/pl-wawel/800/600"},
        {"title": "Białowieża Primeval Forest", "caption": "One of the last and largest remaining parts of the immense primeval forest that once stretched across the European plain.", "url": "https://picsum.photos/seed/pl-bialowieza/800/600"}
    ],
    "pt": [
        {"title": "Belém Tower & Jerónimos Monastery", "caption": "Manueline maritime architectural masterpieces in Lisbon celebrating the Age of Discoveries.", "url": "https://picsum.photos/seed/pt-belem/800/600"},
        {"title": "Pena Palace in Sintra", "caption": "Vibrantly colored Romanticist fairytale palace crowning the misty forested peaks of the Sintra mountains.", "url": "https://picsum.photos/seed/pt-pena/800/600"},
        {"title": "Dom Luís I Bridge in Porto", "caption": "Double-deck metal arch bridge spanning the Douro River, engineered by a student of Gustave Eiffel.", "url": "https://picsum.photos/seed/pt-porto/800/600"}
    ],
    "ro": [
        {"title": "Bran Castle (Dracula's Castle)", "caption": "Dramatic medieval fortress perched on a 200-foot rock in Transylvania, linked in folklore to Bram Stoker's Dracula.", "url": "https://picsum.photos/seed/ro-brancastle/800/600"},
        {"title": "Transfăgărășan Highway", "caption": "Spectacular serpentine alpine mountain road winding through the Fagaras Mountains of the Southern Carpathians.", "url": "https://picsum.photos/seed/ro-transfagarasan/800/600"},
        {"title": "Palace of the Parliament in Bucharest", "caption": "The world's heaviest building and second-largest administrative building, containing over 1,100 rooms.", "url": "https://picsum.photos/seed/ro-parliament/800/600"}
    ],
    "ru": [
        {"title": "Saint Basil's Cathedral & Red Square", "caption": "Iconic multi-colored flame-shaped onion domes commissioned by Ivan the Terrible in the heart of Moscow.", "url": "https://picsum.photos/seed/ru-redsquare/800/600"},
        {"title": "The State Hermitage Museum", "caption": "Former Winter Palace of the Russian Tsars in Saint Petersburg housing over 3 million treasures and works of art.", "url": "https://picsum.photos/seed/ru-hermitage/800/600"},
        {"title": "Lake Baikal", "caption": "The world's deepest (1,642 m) and oldest freshwater lake, containing over 20% of Earth's unfrozen surface fresh water.", "url": "https://picsum.photos/seed/ru-baikal/800/600"}
    ],
    "sm": [
        {"title": "Three Towers of San Marino (Guaita Fortress)", "caption": "Iconic 11th-century cliffside castle perched atop the three peaks of Mount Titano overlooking the Adriatic coast.", "url": "https://picsum.photos/seed/sm-guaita/800/600"},
        {"title": "Mount Titano Panorama", "caption": "Limestone mountain ridge hosting the historic microstate with sweeping views reaching from the Apennines to the sea.", "url": "https://picsum.photos/seed/sm-titano/800/600"},
        {"title": "Palazzo Pubblico & Piazza della Libertà", "caption": "The neo-Gothic town hall and seat of government of the world's oldest surviving republic.", "url": "https://picsum.photos/seed/sm-palazzo/800/600"}
    ],
    "rs": [
        {"title": "Belgrade Fortress (Kalemegdan)", "caption": "Historic citadel perched at the scenic confluence of the Danube and Sava rivers, contested in over 115 battles.", "url": "https://picsum.photos/seed/rs-kalemegdan/800/600"},
        {"title": "Church of Saint Sava", "caption": "One of the largest Eastern Orthodox churches in the world, dominating the Belgrade skyline with its marble and gold interior.", "url": "https://picsum.photos/seed/rs-saintsava/800/600"},
        {"title": "Tara National Park & Drina River House", "caption": "Pristine mountain forests and the famous tiny wooden cabin balanced atop a solitary rock in the middle of the Drina River.", "url": "https://picsum.photos/seed/rs-tara/800/600"}
    ],
    "sk": [
        {"title": "Spiš Castle", "caption": "One of the largest castle sites in Central Europe, spreading across 4 hectares above the village of Žehra.", "url": "https://picsum.photos/seed/sk-spis/800/600"},
        {"title": "High Tatras Alpine Range", "caption": "The jagged granite alpine peaks forming the natural border between Slovakia and Poland, featuring Lake Štrbské Pleso.", "url": "https://picsum.photos/seed/sk-tatras/800/600"},
        {"title": "Bojnice Castle", "caption": "Romantic fairy-tale castle with pastel turquoise turrets and a travertine cave located right underneath the castle moat.", "url": "https://picsum.photos/seed/sk-bojnice/800/600"}
    ],
    "si": [
        {"title": "Lake Bled & Island Church", "caption": "Glacial lake with a tear-shaped island and pilgrimage church surrounded by Julian Alps and a cliffside medieval castle.", "url": "https://picsum.photos/seed/si-lakebled/800/600"},
        {"title": "Postojna Cave System", "caption": "Enchanting 24-kilometer karst cave system navigated by an electric subterranean train to see stalactites and olm salamanders.", "url": "https://picsum.photos/seed/si-postojna/800/600"},
        {"title": "Predjama Castle", "caption": "Impregnable medieval Renaissance castle built directly into the mouth of a vertical 123-meter-high cliff cave.", "url": "https://picsum.photos/seed/si-predjama/800/600"}
    ],
    "es": [
        {"title": "Sagrada Família in Barcelona", "caption": "Antoni Gaudí's visionary basilica with organic forest-like stone pillars and stained glass light.", "url": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80"},
        {"title": "The Alhambra of Granada", "caption": "Magnificent Moorish palace fortress featuring intricate Islamic geometric stuccowork and gardens.", "url": "https://picsum.photos/seed/es-alhambra/800/600"},
        {"title": "Plaza de España in Seville", "caption": "Stunning semicircular palace complex built for the 1929 Ibero-American Expo with tiled alcoves and bridges.", "url": "https://picsum.photos/seed/es-sevilla/800/600"}
    ],
    "se": [
        {"title": "The Vasa Ship Museum", "caption": "The world's only intact 17th-century warship, salvaged from the Stockholm seabed after 333 years underwater.", "url": "https://picsum.photos/seed/se-vasa/800/600"},
        {"title": "Gamla Stan (Stockholm Old Town)", "caption": "Historic cobblestone island quarter featuring colorful 17th-century merchant houses and the Royal Palace.", "url": "https://picsum.photos/seed/se-gamlastan/800/600"},
        {"title": "Icehotel in Jukkasjärvi", "caption": "The world's original hotel sculpted entirely from natural river ice and snow in Swedish Lapland every winter.", "url": "https://picsum.photos/seed/se-icehotel/800/600"}
    ],
    "ch": [
        {"title": "The Matterhorn Peak in Zermatt", "caption": "Iconic 4,478-meter pyramid-shaped mountain summit, recognized globally as the symbol of the Swiss Alps.", "url": "https://picsum.photos/seed/ch-matterhorn/800/600"},
        {"title": "Chillon Castle on Lake Geneva", "caption": "Medieval island fortress situated on a rocky islet near Montreux, immortalized by Lord Byron.", "url": "https://picsum.photos/seed/ch-chillon/800/600"},
        {"title": "Jungfraujoch 'Top of Europe'", "caption": "High-altitude saddle reachable by cogwheel train tunnel with views across the Aletsch Glacier.", "url": "https://picsum.photos/seed/ch-jungfrau/800/600"}
    ],
    "ua": [
        {"title": "Saint Sophia's Cathedral in Kyiv", "caption": "11th-century UNESCO World Heritage cathedral famed for its shimmering gold domes and ancient mosaics.", "url": "https://picsum.photos/seed/ua-stsophia/800/600"},
        {"title": "Kyiv Pechersk Lavra", "caption": "Historic Orthodox monastery complex situated on the high hills of the Dnieper River with underground catacombs.", "url": "https://picsum.photos/seed/ua-lavra/800/600"},
        {"title": "Lviv Historic Center & Market Square", "caption": "Charming Central European medieval and Renaissance old town celebrated for coffee culture and cobblestone lanes.", "url": "https://picsum.photos/seed/ua-lviv/800/600"}
    ],
    "gb": [
        {"title": "Big Ben & Palace of Westminster", "caption": "The iconic neo-Gothic clock tower and British Parliament buildings along the River Thames in London.", "url": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"},
        {"title": "Stonehenge", "caption": "Prehistoric monument of colossal standing sarsen and bluestones aligned with the summer solstice in Wiltshire.", "url": "https://picsum.photos/seed/gb-stonehenge/800/600"},
        {"title": "Edinburgh Castle", "caption": "Historic fortress perched dramatically on the volcanic plug of Castle Rock, dominating Scotland's capital.", "url": "https://picsum.photos/seed/gb-edinburgh/800/600"}
    ]
}

print(f"Loaded {len(LANDMARKS_MAP)} detailed European entries in map.")
