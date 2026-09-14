export interface LandmarkPhoto {
  title: string;
  caption: string;
  url: string;
}

export interface CountryLandmarksAndFacts {
  facts: string[];
  landmarks: LandmarkPhoto[];
}

export const WORLD_LANDMARKS_AND_FACTS: Record<string, CountryLandmarksAndFacts> = {
  "ad": {
    "landmarks": [
      {
        "title": "Madriu-Perafita-Claror Valley",
        "caption": "UNESCO World Heritage glacial valley preserving pastoral Pyrenean huts and traditional stone trails.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Refuge_perafita_andorra.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Casa de la Vall",
        "caption": "Historic 16th-century fortified manor house in Andorra la Vella that served as parliament for centuries.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Casa_de_la_Vall_2015-10.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Grandvalira Ski Resort",
        "caption": "The largest ski resort domain in the Pyrenees with over 210 kilometers of snow-covered alpine slopes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/da/Ski_resorts_in_the_world.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Coma Pedrosa",
        "caption": "Coma Pedrosa is the highest mountain in Andorra.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Comapedrosa01.jpg/330px-Comapedrosa01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Pyrenean chamois",
        "caption": "The Pyrenean chamois is a goat-antelope that lives in the Pyrenees and Cantabrian Mountains of Spain, France and Andorra, and the...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Isard_des_pyrenees_bigorre_2003.jpg/330px-Isard_des_pyrenees_bigorre_2003.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Andorra la Vella is the highest capital city in Europe, sitting at an elevation of 1,023 meters in the Pyrenees.",
      "It is a co-principality jointly headed by the Bishop of Urgell in Spain and the President of France.",
      "Catalan is the sole official language of Andorra, making it the only country in the world where Catalan holds this primary status."
    ]
  },
  "ae": {
    "landmarks": [
      {
        "title": "Burj Khalifa in Dubai",
        "caption": "The tallest building and freestanding structure in human history, soaring 828 meters above the Dubai skyline.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg/3840px-Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Sheikh Zayed Grand Mosque in Abu Dhabi",
        "caption": "Monumental white Macedonian marble mosque with 82 domes and the world's largest hand-knotted carpet.",
        "url": "https://upload.wikimedia.org/wikipedia/en/7/7d/Sheikh_Zayed_Mosque_view.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Louvre Abu Dhabi",
        "caption": "Universal art museum crowned by Jean Nouvel's massive floating dome creating a shimmering 'rain of light'.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/3840px-Abu_dhabi_skylines_2014.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hajar Mountains",
        "caption": "The Hajar Mountains are one of the highest mountain ranges in the Arabian Peninsula, shared between northern Oman and eastern United...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Nakhal_Fort_1.jpg/330px-Nakhal_Fort_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Arabian oryx",
        "caption": "The Arabian oryx or white oryx is a medium-sized antelope with a distinct shoulder bump, long, straight horns, and a tufted tail.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Arabian_oryx_%28oryx_leucoryx%29.jpg/330px-Arabian_oryx_%28oryx_leucoryx%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Burj Khalifa in Dubai is the world's tallest building at 828 meters, visible from up to 95 kilometers away.",
      "The United Arab Emirates was established on December 2, 1971 as a sovereign federation of seven distinct emirates.",
      "Dubai's police fleet includes high-performance supercars like Bugatti Veyrons, Aston Martins, and Ferraris for public engagement."
    ]
  },
  "af": {
    "landmarks": [
      {
        "title": "Band-e-Amir National Park",
        "caption": "A chain of six intensely deep sapphire-blue natural travertine lakes in the Hindu Kush mountains.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Afghanistan%27s_Grand_Canyon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Blue Mosque of Mazar-i-Sharif",
        "caption": "Magnificent tiled Islamic shrine glowing with intricate turquoise and cobalt mosaic calligraphy.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Blue_Mosque_in_the_northern_Afghan_city_in_2012.jpg/3840px-Blue_Mosque_in_the_northern_Afghan_city_in_2012.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Minaret of Jam",
        "caption": "Solitary 65-meter 12th-century brick minaret rising dramatically from a remote river canyon.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/Jam_afghan_architecture_harirud_brick.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Band-e Amir National Park",
        "caption": "Band-e Amir National Park is located in the central Bamyan Province of Afghanistan.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Afghanistan%27s_Grand_Canyon.jpg/330px-Afghanistan%27s_Grand_Canyon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Snow leopard",
        "caption": "The snow leopard is a felid species in the genus Panthera.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/330px-Irbis4.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Poetry has been a central pillar of Afghan culture for millennia, with Thursday poetry nights held in ancient cities like Herat.",
      "Buzkashi is the traditional national sport, where horseback riders compete to maneuver a goat carcass toward a scoring circle.",
      "Afghanistan is home to the world's finest lapis lazuli mines in Badakhshan, mined continuously for over 6,000 years."
    ]
  },
  "ag": {
    "landmarks": [
      {
        "title": "Nelson's Dockyard in English Harbour",
        "caption": "Fully restored 18th-century Georgian naval dockyard and UNESCO World Heritage site named after Admiral Horatio Nelson.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Nelson%27s_Dockyard.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Shirley Heights Lookout",
        "caption": "Historic military battery offering panoramic vistas over English and Falmouth Harbours, famous for Sunday sunset parties.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/English_Harbour.jpg/3840px-English_Harbour.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Barbuda Frigate Bird Sanctuary",
        "caption": "The largest nesting colony of magnificent frigatebirds in the Caribbean, home to over 5,000 birds in Codrington Lagoon.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Barbuda_in_its_region_%28zoomed%29.svg/500px-Barbuda_in_its_region_%28zoomed%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Devil's Bridge (Antigua and Barbuda)",
        "caption": "Devil's Bridge National Park is a natural rock arch in eastern Antigua.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Devils_Bridge%2C_Antigua.JPG/330px-Devils_Bridge%2C_Antigua.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Fallow deer",
        "caption": "Fallow deer is the common name for species of deer in the genus Dama of subfamily Cervinae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/D%C3%BClmen%2C_Wildpark_--_2018_--_3762.jpg/330px-D%C3%BClmen%2C_Wildpark_--_2018_--_3762.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Antigua is famous for having 'a beach for every day of the year'—boasting exactly 365 distinct sandy beaches.",
      "Nelson's Dockyard is the world's only continuously operating Georgian naval dockyard.",
      "Antigua and Barbuda does not have a single natural permanent river or natural lake on either of its main islands."
    ]
  },
  "al": {
    "landmarks": [
      {
        "title": "Gjirokastër Historic Stone City",
        "caption": "UNESCO-listed Ottoman-era fortified stone city famed for its hillside fortress and kule tower houses.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/16/Gjirokaster_2016-2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "The Blue Eye (Syri i Kaltër)",
        "caption": "Hypnotic natural freshwater spring with deep turquoise waters bubbling from an unexplored karst cavern.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Albania_Blue_Eye.jpg/3840px-Albania_Blue_Eye.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Berat Citadel & Mangalem Quarter",
        "caption": "The 'Town of a Thousand Windows', showcasing white Ottoman residences cascading below the fortress.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Berat_57.jpg/3840px-Berat_57.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Alps of Albania National Park",
        "caption": "Alps of Albania National Park is the largest national park in Albania.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Theth_and_Theth_National_Park%2C_Albania_2017.jpg/330px-Theth_and_Theth_National_Park%2C_Albania_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Golden eagle",
        "caption": "The golden eagle is a bird of prey living in the Northern Hemisphere.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/330px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Albania has over 173,000 concrete military dome bunkers built during the Cold War scattered across mountains and beaches.",
      "Mother Teresa, the world-renowned Nobel Peace Prize laureate and humanitarian, was ethnically Albanian.",
      "Albania is one of the only European countries with zero McDonald's restaurant locations, cherishing its local culinary culture."
    ]
  },
  "am": {
    "landmarks": [
      {
        "title": "Khor Virap & Mount Ararat",
        "caption": "Ancient monastery framed dramatically against the snow-capped volcanic twin peaks of Mount Ararat.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg/3840px-Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Geghard Cave Monastery",
        "caption": "Medieval UNESCO monastic complex carved directly into the sheer vertical cliffs of the Azat Valley.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Monasterio_de_Geghard%2C_Armenia%2C_2016-10-02%2C_DD_63.jpg/3840px-Monasterio_de_Geghard%2C_Armenia%2C_2016-10-02%2C_DD_63.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lake Sevan",
        "caption": "One of the world's largest high-altitude freshwater alpine lakes, crowned by the Sevanavank monastery.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/69/Sevan_new_collection.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Sevan",
        "caption": "Lake Sevan is the largest body of water in Armenia and the broader Caucasus region.  It is one of the largest freshwater alpine lakes in Eurasia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Lake_Sevan_2022-08-14_Sentinel-2_L2A.jpg/330px-Lake_Sevan_2022-08-14_Sentinel-2_L2A.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Armenian mouflon",
        "caption": "The Armenian mouflon is an endangered subspecies of mouflon endemic to Iran, Armenia, the Nakhchivan Autonomous Republic of Azerbaijan,...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Armenian_mouflon.jpg/330px-Armenian_mouflon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "In 301 AD, Armenia became the very first nation in the world to officially adopt Christianity as its state religion.",
      "Chess is a mandatory subject in all primary schools across Armenia, fostering strategic logic from childhood.",
      "Armenian lavash flatbread is inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity."
    ]
  },
  "ao": {
    "landmarks": [
      {
        "title": "Kalandula Falls",
        "caption": "One of the largest waterfalls by volume in Africa, cascading 105 meters on the Lucala River.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/95/Kalandula_waterfalls_of_the_Lucala-River_in_Malange%2C_Angola.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Miradouro da Lua (Moon Viewpoint)",
        "caption": "Spectacular moon-like coastal karst landscape of eroded multicolored clay cliffs overlooking the Atlantic.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Luanda_2025_focused_%28cropped%29.jpg/3840px-Luanda_2025_focused_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Serra da Leba Pass",
        "caption": "Iconic winding hairpin mountain road descending over 1,800 meters from the Huíla Plateau.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/86/Lubango-Namibe_landscape.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kalandula Falls",
        "caption": "Kalandula Falls or Calandula Falls are waterfalls in the municipality of Calandula, Malanje Province, Angola.  On the Lucala River, the falls are 105 meters high and 400 meters wide.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Kalandula_waterfalls_of_the_Lucala-River_in_Malange%2C_Angola.JPG/330px-Kalandula_waterfalls_of_the_Lucala-River_in_Malange%2C_Angola.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Giant sable antelope",
        "caption": "The giant sable antelope is a critically endangered subspecies of the common sable antelope native and endemic to the central highlands...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Giant_sable_bull_in_Luando.jpg/330px-Giant_sable_bull_in_Luando.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Angola is the native home of the rare giant sable antelope (palanca negra gigante), a national symbol thought extinct until rediscovered.",
      "The Welwitschia mirabilis plant, endemic to the Namib desert in Angola, can survive for over 1,500 years on coastal fog alone.",
      "Kizomba music and sensual partner dance originated in Angola in the late 1980s and has spread globally."
    ]
  },
  "aq": {
    "landmarks": [
      {
        "title": "Mount Erebus Active Volcano",
        "caption": "The southernmost active volcano on planet Earth, renowned for its persistent boiling anorthoclase phonolite lava lake.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mt_erebus.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lemaire Channel & Icebergs",
        "caption": "Dramatic 11-kilometer strait flanked by sheer ice-covered cliffs, known as the 'Kodak Gap' for jaw-dropping scenic vistas.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Ant-pen-map-Kiev.PNG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Deception Island Volcanic Caldera",
        "caption": "Ring-shaped volcanic island with a flooded caldera harbor where geothermal waters warm the black volcanic ash beaches.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/40/Deception_island.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Blood Falls",
        "caption": "Blood Falls is an outflow of an iron(III) oxide–tainted plume of saltwater, flowing from the tongue of Taylor Glacier onto the...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Blood_Falls_by_Peter_Rejcek.jpg/330px-Blood_Falls_by_Peter_Rejcek.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Emperor penguin",
        "caption": "The emperor penguin is the tallest and heaviest of all living penguin species and lives exclusively in Antarctica.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg/330px-Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Antarctica is the coldest, windiest, and driest continent on Earth, containing approximately 90% of all the ice and 70% of all freshwater on the planet.",
      "Under the Antarctic Treaty signed in 1959, the entire continent is designated as a scientific preserve dedicated solely to peace and research.",
      "Emperor penguins are the only animal species that remain on the open Antarctic sea ice throughout the brutal, sunless polar winter to breed."
    ]
  },
  "ar": {
    "landmarks": [
      {
        "title": "Perito Moreno Glacier in Patagonia",
        "caption": "Monumental 30-kilometer-long advancing glacier in Los Glaciares National Park, calving colossal ice blocks into Lake Argentino.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Perito_Moreno_Glacier_2023.jpg/3840px-Perito_Moreno_Glacier_2023.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Iguazu Falls (Devil's Throat)",
        "caption": "A roaring horseshoe amphitheater of 275 distinct waterfalls plunging over 80 meters along the Argentine-Brazilian border.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Teatro Colón & La Boca in Buenos Aires",
        "caption": "One of the world's premier acoustical opera houses and the colorful historic Italian quarter where tango was born.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Fachada_del_Teatro_Col%C3%B3n_en_Buenos_Aires%2C_Argentina.jpg/3840px-Fachada_del_Teatro_Col%C3%B3n_en_Buenos_Aires%2C_Argentina.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Aconcagua",
        "caption": "Aconcagua is a mountain in the Principal Cordillera of the Andes range, located in Mendoza Province, Argentina.  With a summit elevation of 6,967.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Aconcagua2016.jpg/330px-Aconcagua2016.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Rufous hornero",
        "caption": "The rufous hornero is a medium-sized ovenbird in the family Furnariidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Rufous_hornero_%28Furnarius_rufus%29_Colonia_%28cropped%29.jpg/330px-Rufous_hornero_%28Furnarius_rufus%29_Colonia_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Argentina is the birthplace of Tango, which originated in the immigrant working-class port neighborhoods of Buenos Aires in the late 19th century.",
      "Ushuaia in Tierra del Fuego, Argentina, is recognized worldwide as the southernmost city on Earth.",
      "Aconcagua (6,961 m) in the Argentine Andes is the highest mountain peak outside of Asia."
    ]
  },
  "at": {
    "landmarks": [
      {
        "title": "Schönbrunn Palace",
        "caption": "The opulent 1,441-room Baroque summer residence of the Habsburg monarchs in Vienna.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Wien_-_Schloss_Sch%C3%B6nbrunn.JPG/3840px-Wien_-_Schloss_Sch%C3%B6nbrunn.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hallstatt Alpine Village",
        "caption": "Picturesque 16th-century lakeside village nestled between the Hallstätter See and Dachstein mountains.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Hallstatt_-_Zentrum_.JPG/3840px-Hallstatt_-_Zentrum_.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hohensalzburg Fortress",
        "caption": "One of the largest medieval castles in Europe, crowning the Festungsberg hill above Salzburg.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Salzburg_-_Festung_Hohensalzburg.JPG/3840px-Salzburg_-_Festung_Hohensalzburg.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Grossglockner",
        "caption": "The Großglockner, or just Glockner, is, at 3,798 metres above the Adriatic (12,461 ft), the highest mountain in Austria and highest...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Gro%C3%9Fglockner_from_behind_the_glass_panorama_tower.JPG/330px-Gro%C3%9Fglockner_from_behind_the_glass_panorama_tower.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Alpine ibex",
        "caption": "The Alpine ibex, also known as the steinbock, is a European species of goat which lives in the Alps.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/003_Wild_Alpine_Ibex_Sunset_Creux_du_Van_Mont_Racine_Photo_by_Giles_Laurent.jpg/330px-003_Wild_Alpine_Ibex_Sunset_Creux_du_Van_Mont_Racine_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Vienna has been home to legendary composers like Wolfgang Amadeus Mozart, Ludwig van Beethoven, and Franz Schubert.",
      "Over 60% of Austria's territory is covered by the spectacular alpine peaks of the Austrian Alps.",
      "Austria is the birthplace of the sewing machine, the snow globe, and the Viennese waltz."
    ]
  },
  "au": {
    "landmarks": [
      {
        "title": "Sydney Opera House & Harbour Bridge",
        "caption": "Jørn Utzon's architectural masterpiece with shell-like sails dominating Sydney Harbour.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Sydney_Australia._%2821339175489%29.jpg"
      },
      {
        "title": "Uluru (Ayers Rock)",
        "caption": "Colossal ancient sandstone monolith in the Red Centre, sacred to the indigenous Anangu people, glowing red at sunrise.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a8/ULURU.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Great Barrier Reef",
        "caption": "The world's largest coral reef ecosystem, spanning 2,300 km and visible from outer space.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4f/ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "The Twelve Apostles (Victoria)",
        "caption": "The Twelve Apostles are a collection of limestone stacks off the shore of Port Campbell National Park, by the Great Ocean Road in Victoria, Australia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/The_Twelve_Apostles_2011.jpg/330px-The_Twelve_Apostles_2011.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Red kangaroo",
        "caption": "The red kangaroo is the largest of all kangaroos, the largest terrestrial mammal native to Australia, and the largest extant marsupial.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Red_kangaroo_-_melbourne_zoo.jpg/330px-Red_kangaroo_-_melbourne_zoo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Australia is the only continent covered entirely by a single nation and is home to unique marsupials like kangaroos, koalas, and wombats.",
      "The Great Barrier Reef is the largest living structure on Earth, composed of over 2,900 individual reefs and 900 islands.",
      "Australia is home to the world's longest golf course, the Nullarbor Links, which stretches over 1,365 kilometers across two states."
    ]
  },
  "az": {
    "landmarks": [
      {
        "title": "Flame Towers in Baku",
        "caption": "Trio of illuminated flame-shaped glass skyscrapers dominating the Caspian Sea shoreline of Baku.",
        "url": "https://thumb.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/1920px-Flame_towers_baku.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Gobustan Mud Volcanoes & Petroglyphs",
        "caption": "Rare geological desert landscape home to nearly half the world's bubbling mud volcanoes and prehistoric rock art.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ec/%C4%B0lham_%C6%8Fliyev_Pal%C3%A7%C4%B1q_Vulkanlar%C4%B1_Turizm_Kompleksinin_t%C9%99m%C9%99lqoyma_m%C9%99rasimind%C9%99_%2817%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Sheki Khan's Palace",
        "caption": "Exquisite 18th-century royal summer residence famous for stained-glass shebeke windows assembled without nails.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b6/%C5%9E%C9%99ki_%C5%9F%C9%99h%C9%99ri_%C3%BCmumi_g%C3%B6r%C3%BCn%C3%BC%C5%9F._%C3%A7ayk%C9%99nar%C4%B1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Gobustan Rock Art Cultural Landscape",
        "caption": "The Gobustan Rock Art Cultural Landscape is a historic site in Azerbaijan, comprising a large collection of petroglyphs that reflect the...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Petroglyphs_of_Qobustan_2.jpg/330px-Petroglyphs_of_Qobustan_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Karabakh horse",
        "caption": "The Karabakh is a mountain-steppe racing and riding horse breed.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Qarabaq_ati.jpg/330px-Qarabaq_ati.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Known as the 'Land of Fire' due to natural subterranean petroleum gas fires like Yanar Dag burning eternally from the earth.",
      "Azerbaijan is home to nearly half of all the mud volcanoes on Earth, where cold subterranean mud erupts in geysers.",
      "In 1918, the Azerbaijan Democratic Republic became the first secular Muslim-majority democratic republic in the world."
    ]
  },
  "ba": {
    "landmarks": [
      {
        "title": "Stari Most (Old Bridge) in Mostar",
        "caption": "The iconic 16th-century Ottoman stone arch bridge soaring over the turquoise waters of the Neretva River.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Mostar_Old_Town_Panorama_2007.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Baščaršija Bazaar in Sarajevo",
        "caption": "Historic Ottoman-era bazaar featuring artisan coppersmiths and the Sebilj wooden fountain.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/27/Sarajevo_Bascarsija_from_Trebevic.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kravica Waterfalls",
        "caption": "A spectacular natural amphitheater of tumbling cascading waterfalls on the Trebižat River.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Waterfalls_Kravica_5%2C_Bosnia_and_Herzegovina.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kravica (waterfall)",
        "caption": "Kravica Waterfall is a large tufa cascade on the Trebižat River, in the karstic heartland of Herzegovina in Bosnia and Herzegovina.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Waterfalls_Kravica_5%2C_Bosnia_and_Herzegovina.jpg/330px-Waterfalls_Kravica_5%2C_Bosnia_and_Herzegovina.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Balkan lynx",
        "caption": "The Balkan lynx is a subspecies of the Eurasian lynx in the genus Lynx.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Tirana_Zoo_Balkan_Lynx_%28OSCAL19_trip%29.jpg/330px-Tirana_Zoo_Balkan_Lynx_%28OSCAL19_trip%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Sarajevo was the first city in Europe and the second in the world to have a full-time operational electric tram network in 1885.",
      "Local divers leap from the 24-meter-high Stari Most bridge into the chilly Neretva River in a tradition dating back to 1664.",
      "Bosnia and Herzegovina is nicknamed the 'Heart-Shaped Land' due to its distinct geographic silhouette on the Balkan map."
    ]
  },
  "bb": {
    "landmarks": [
      {
        "title": "Harrison's Cave",
        "caption": "Spectacular subterranean crystallized limestone cavern featuring running streams, cascading waterfalls, and stalagmites.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Harrisoncave1.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Historic Bridgetown & Garrison",
        "caption": "UNESCO-listed British colonial port town featuring 17th-century fortifications and the historic Parliament Buildings.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Bridgetown_aerial.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Bathsheba Beach & Soup Bowl",
        "caption": "Dramatic Atlantic surf beach dotted with giant mushroom-shaped limestone boulders carved by pounding waves.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Bathsheba%2C_Barbados_08.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Harrison's Cave",
        "caption": "Harrison's Cave is a tourist attraction in the country of Barbados, first mentioned in 1795.  Tourists can access the subterranean environment on a tramway.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Harrisoncave1.JPG/330px-Harrisoncave1.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Green monkey",
        "caption": "The green monkey, also known as the sabaeus monkey, is an Old World monkey with golden-green fur and pale hands and feet.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Gambia06Bijilo0015_%285421078756%29.jpg/330px-Gambia06Bijilo0015_%285421078756%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Mount Gay Rum, produced in Barbados continuously since 1703, is the oldest existing commercial rum brand in the world.",
      "Barbados became the world's newest parliamentary republic in November 2021, removing the British monarch as head of state.",
      "Pop and cultural superstar Rihanna was born and raised in Bridgetown, Barbados, where a street is named Rihanna Drive in her honor."
    ]
  },
  "bd": {
    "landmarks": [
      {
        "title": "Sundarbans Mangrove Forest",
        "caption": "The largest contiguous mangrove wetland forest on Earth, sanctuary to the endangered Royal Bengal tiger.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Save_the_sundarbans_20.jpg/3840px-Save_the_sundarbans_20.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lalbagh Fort in Dhaka",
        "caption": "Incomplete 17th-century Mughal fortress palace with terraced gardens and the Tomb of Pari Bibi.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/43/%E0%A6%B2%E0%A6%BE%E0%A6%B2_%E0%A6%95%E0%A7%87%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B0_%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Cox's Bazar Beach",
        "caption": "The world's longest unbroken natural sea sand beach, stretching over 120 kilometers along the Bay of Bengal.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Cox%27s_Bazaar_Sunset_Sep2019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Sundarbans",
        "caption": "Sundarbans is a mangrove forest area in the Ganges Delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.  It spans the area from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh's Khulna Division.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Save_the_sundarbans_20.jpg/330px-Save_the_sundarbans_20.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Bengal tiger",
        "caption": "The Bengal tiger is a population of the Panthera tigris tigris subspecies.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg/330px-Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Cox's Bazar in Bangladesh is the longest uninterrupted natural sea beach in the world at 120 km.",
      "The Sundarbans delta is the largest mangrove forest and home to the world's highest density of Bengal tigers.",
      "The 1952 Language Movement in Dhaka led the United Nations to designate February 21 as International Mother Language Day."
    ]
  },
  "be": {
    "landmarks": [
      {
        "title": "Grand Place of Brussels",
        "caption": "The central square of Brussels, globally revered for its ornate guildhalls and Gothic Town Hall.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Grand-Place%2C_Brussels_-_panorama%2C_June_2018.jpg/3840px-Grand-Place%2C_Brussels_-_panorama%2C_June_2018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Bruges Medieval Canals",
        "caption": "The 'Venice of the North', with cobblestone lanes, swan-filled canals, and Flemish brick architecture.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Br%C3%BCgge_Blick_vom_Belfried_4.jpg/3840px-Br%C3%BCgge_Blick_vom_Belfried_4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "The Atomium",
        "caption": "Iconic 102-meter-tall modernist landmark built for the 1958 World's Fair depicting an iron crystal cell.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/67/The_Atomium_during_civil_twilight_%28DSCF1135%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ardennes",
        "caption": "The Ardennes, also known as the Ardennes Forest or Forest of Ardennes, is a region of extensive forests, rough terrain, rolling hills...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Frahan_JPG01.jpg/330px-Frahan_JPG01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Wild boar",
        "caption": "The wild boar, also known as the wild swine, common wild pig, Eurasian wild pig, or simply wild pig, is a suid native to much of Eurasia...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Wildschwein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg/330px-Wildschwein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Belgium produces over 220,000 tons of gourmet chocolate each year, with Brussels Airport being the world's largest chocolate sales point.",
      "It has three official languages: Dutch (Flemish) in the north, French (Walloon) in the south, and German in the east.",
      "Brussels serves as the de facto administrative capital of the European Union and the headquarters of NATO."
    ]
  },
  "bf": {
    "landmarks": [
      {
        "title": "Sindou Peaks",
        "caption": "Dramatic weathered sandstone rock towers and needle spires sculpted by wind and rain in the Cascades region.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Burkina_20110120_164655.jpg/3840px-Burkina_20110120_164655.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Grand Mosque of Bobo-Dioulasso",
        "caption": "Magnificent Sudano-Sahelian mudbrick mosque featuring protruding timber struts and conical minarets.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c6/BoboDioulasso-Market.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Karfiguéla Cascades (Banfora Falls)",
        "caption": "Picturesque waterfalls cascading down sandstone ledges into cool freshwater pools surrounded by sugarcane fields.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/52/Cascades_de_Banfora_Burkina_Faso.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Arli National Park",
        "caption": "Arli National Park, often called Arly, is a national park located in Tapoa Province, southeastern Burkina Faso.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Arli-NP_MS1219.jpg/330px-Arli-NP_MS1219.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "White-bellied pangolin",
        "caption": "The white-bellied pangolin is one of eight extant species of pangolins, and is native to equatorial Africa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Tree_pangolin_%28Phataginus_tricuspis%29_Nyamebe_Bepo.jpg/330px-Tree_pangolin_%28Phataginus_tricuspis%29_Nyamebe_Bepo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The country's name, Burkina Faso, translates poetically to 'Land of Incorruptible People' in the Moore and Dioula languages.",
      "Ouagadougou hosts FESPACO (Panafrican Film and Television Festival), Africa's largest and most prestigious film festival, every two years.",
      "Burkina Faso is famous for its artistic bronze lost-wax casting traditions practiced by skilled master sculptors."
    ]
  },
  "bg": {
    "landmarks": [
      {
        "title": "Rila Monastery",
        "caption": "Bulgaria's largest and most famed Eastern Orthodox monastery, founded in the 10th century high in the Rila mountains.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/46/Rila_Monastery%2C_August_2013.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Alexander Nevsky Cathedral",
        "caption": "Monumental Neo-Byzantine cathedral in Sofia featuring glistening gold-plated domes.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Catedral_de_Alejandro_Nevski_--_2019_--_Sof%C3%ADa%2C_Bulgaria.jpg/3840px-Catedral_de_Alejandro_Nevski_--_2019_--_Sof%C3%ADa%2C_Bulgaria.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Belogradchik Rocks & Fortress",
        "caption": "Fascinating sandstone and conglomerate rock formations integrated with a Roman and Ottoman fortress.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Belogradchik_Fortress_Entrance.jpg/3840px-Belogradchik_Fortress_Entrance.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Seven Rila Lakes",
        "caption": "The Seven Rila Lakes are a group of tarns—glacial lakes formed in cirques—in the northwestern part of Rila Mountain in Bulgaria.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Vr-ezeren-pan-sm.jpg/330px-Vr-ezeren-pan-sm.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Brown bear",
        "caption": "The brown bear is a large bear native to Eurasia and North America.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/330px-2010-kodiak-bear-1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Bulgaria is the only nation in Europe that has kept the same name since its founding in 681 AD.",
      "The Cyrillic script was created in the First Bulgarian Empire during the 9th century under Tsar Simeon the Great.",
      "Bulgaria produces up to 85% of the world's precious attar of roses in the famous Rose Valley near Kazanlak."
    ]
  },
  "bh": {
    "landmarks": [
      {
        "title": "Qal'at al-Bahrain (Bahrain Fort)",
        "caption": "UNESCO-listed ancient Portuguese and Dilmun coastal fortress guarding the Arabian Gulf shore.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Bahrain_Fort_March_2015.JPG/3840px-Bahrain_Fort_March_2015.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Al Fateh Grand Mosque",
        "caption": "Monumental modern mosque featuring the world's largest fiberglass dome and Italian marble floors.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/AlFatehMosque.jpg/3840px-AlFatehMosque.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "The Tree of Life (Shajarat al-Hayah)",
        "caption": "A 400-year-old solitary mesquite tree flourishing in the barren desert sands with no visible water source.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Tree_of_Life%2C_Bahrain_-_%E0%B4%9C%E0%B5%80%E0%B4%B5%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86_%E0%B4%AE%E0%B4%B0%E0%B4%82%2C_%E0%B4%AC%E0%B4%B9%E0%B5%8D%E0%B4%B1%E0%B5%88%E0%B5%BB_01.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Tree of Life (Bahrain)",
        "caption": "The Tree of Life in Bahrain is a 9.75-metre (32.0 ft) high Prosopis juliflora tree that is over 400 years old.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Tree_of_Life%2C_Bahrain_-_%E0%B4%9C%E0%B5%80%E0%B4%B5%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86_%E0%B4%AE%E0%B4%B0%E0%B4%82%2C_%E0%B4%AC%E0%B4%B9%E0%B5%8D%E0%B4%B1%E0%B5%88%E0%B5%BB_01.JPG/330px-Tree_of_Life%2C_Bahrain_-_%E0%B4%9C%E0%B5%80%E0%B4%B5%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86_%E0%B4%AE%E0%B4%B0%E0%B4%82%2C_%E0%B4%AC%E0%B4%B9%E0%B5%8D%E0%B4%B1%E0%B5%88%E0%B5%BB_01.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Arabian oryx",
        "caption": "The Arabian oryx or white oryx is a medium-sized antelope with a distinct shoulder bump, long, straight horns, and a tufted tail.  It is a bovid, and the smallest member of the genus Oryx, native to desert and steppe areas of the Arabian Peninsula.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Arabian_oryx_%28oryx_leucoryx%29.jpg/330px-Arabian_oryx_%28oryx_leucoryx%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Bahrain was the first country in the Arabian Gulf to discover commercial oil in 1932.",
      "For centuries, Bahrain was renowned globally as the premier source of natural saltwater pearls in the world.",
      "It is connected to Saudi Arabia by the King Fahd Causeway, a 25-kilometer series of bridges spanning the sea."
    ]
  },
  "bi": {
    "landmarks": [
      {
        "title": "Lake Tanganyika Shoreline",
        "caption": "The world's second-deepest and second-largest freshwater lake by volume, fringed by palm beaches in Bujumbura.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/STS51G-034-0012_Lake_Tanganyika_June1985.jpg/3840px-STS51G-034-0012_Lake_Tanganyika_June1985.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Rusizi National Park",
        "caption": "River delta reserve where the Rusizi River enters Lake Tanganyika, home to hippos, sitatungas, and crocodiles.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Rusizi_NP_hippopotamus.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Gishora Drum Sanctuary",
        "caption": "Historic royal site where master drummers perform the sacred ritual royal dance of the Karienda drums.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/90/Dioc%C3%A8se_Gitega_y.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kibira National Park",
        "caption": "The Kibira National Park is a national park in northwestern Burundi.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/L%27environnement_de_Kibira_%C3%A0_teza.jpg/330px-L%27environnement_de_Kibira_%C3%A0_teza.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hippopotamus",
        "caption": "The hippopotamus, often shortened to hippo, further qualified as the common hippopotamus, Nile hippopotamus and river hippopotamus, is a large semiaquatic mammal native to sub-Saharan Africa.  It is one of only two extant species in the family Hippopotamidae, the other being the pygmy hippopotamus.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Portrait_Hippopotamus_in_the_water.jpg/330px-Portrait_Hippopotamus_in_the_water.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The ritual dance of the royal drum (Karyenda) is recognized by UNESCO as an Intangible Cultural Heritage of Humanity.",
      "Burundi claims the southernmost source of the Nile River, marked by a stone pyramid at Rutovu.",
      "Lake Tanganyika holds roughly 17% of the world's available surface freshwater and contains over 250 species of cichlid fish."
    ]
  },
  "bj": {
    "landmarks": [
      {
        "title": "Royal Palaces of Abomey",
        "caption": "Historic earthen palaces of the twelve kings of Dahomey who ruled between 1625 and 1900.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Abomey_2006_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ganvié Stilt Village",
        "caption": "The 'Venice of Africa', a lagoon city of over 20,000 residents living in wooden houses built on stilts in Lake Nokoué.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Ganvi%C3%A9_fishing_village_on_stilts_in_Benin_%2810282059623%29_%282%29.jpg/3840px-Ganvi%C3%A9_fishing_village_on_stilts_in_Benin_%2810282059623%29_%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Door of No Return in Ouidah",
        "caption": "Memorial arch on the Atlantic beach commemorating the victims of the transatlantic slave trade.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Door_of_no_return.jpg/3840px-Door_of_no_return.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Pendjari National Park",
        "caption": "Pendjari National Park lies in north-western Benin, adjoining the Arli National Park in Burkina Faso.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Parc_national_de_la_Pendjari.JPG/330px-Parc_national_de_la_Pendjari.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lion",
        "caption": "The lion is a large cat of the genus Panthera, currently ranging only in Sub-Saharan Africa and India.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/330px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Benin is the historic birthplace of Vodun (Voodoo), an official recognized religion practiced alongside Christianity and Islam.",
      "The Dahomey Amazons, a fierce all-female military frontline regiment, defended the Kingdom of Dahomey for two centuries.",
      "Ganvié was established in the 17th century by people fleeing slave raiders, whose religious taboos prevented them from attacking over water."
    ]
  },
  "bn": {
    "landmarks": [
      {
        "title": "Sultan Omar Ali Saifuddien Mosque",
        "caption": "Spectacular golden-domed Islamic landmark surrounded by an artificial lagoon and ceremonial stone royal barge.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Portrait_of_D.Y.M.M._Maulana_Al-Sultan_Sir_Omar_Ali_Saifuddin_Saadul_Khairi_Waddin.jpg/3840px-Portrait_of_D.Y.M.M._Maulana_Al-Sultan_Sir_Omar_Ali_Saifuddin_Saadul_Khairi_Waddin.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Kampong Ayer Water Village",
        "caption": "The 'Venice of the East', a traditional settlement of wooden houses on stilts over the Brunei River.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/BN-bsb-kampong-ayer.jpg/3840px-BN-bsb-kampong-ayer.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Ulu Temburong National Park",
        "caption": "Pristine virgin Bornean rainforest accessible only by longboat, celebrated for its 60-meter canopy walkway.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/13/Long_way_to_go....jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ulu Temburong National Park",
        "caption": "Ulu Temburong National Park is the first national park to be established in Brunei, protected since 1991.  The park is in Temburong District in eastern Brunei, and covers about 40% of the district in the south at 550 square kilometres (210 sq mi).",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Long_way_to_go....jpg/330px-Long_way_to_go....jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Proboscis monkey",
        "caption": "The proboscis monkey or long-nosed monkey is an arboreal Old World monkey with an unusually large nose, a reddish-brown skin color and a...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Proboscis_Monkey_in_Borneo.jpg/330px-Proboscis_Monkey_in_Borneo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Over 70% of Brunei is covered by primary tropical rainforests, thanks to strict national conservation policies.",
      "Kampong Ayer is one of the largest stilt settlements in the world, inhabited continuously for over 1,000 years.",
      "Citizens of Brunei enjoy free education and healthcare funded by the country's vast offshore petroleum resources."
    ]
  },
  "bo": {
    "landmarks": [
      {
        "title": "Salar de Uyuni",
        "caption": "The world's largest salt flat (10,582 sq km), transforming into a colossal mirror reflecting the sky and clouds during the wet season.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/37/Salar_de_Uyuni%2C_Bolivia%2C_2016-02-04%2C_DD_16-18_HDR.JPG"
      },
      {
        "title": "Laguna Colorada (Red Lagoon)",
        "caption": "Shallow salt lake in the Eduardo Avaroa Reserve famed for its intense red-crimson water, white borax islands, and thousands of rare James's and Andean flamingos.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Laguna_Colorada_MC.jpg"
      },
      {
        "title": "Tiwanaku & Puerta del Sol (Gate of the Sun)",
        "caption": "UNESCO World Heritage Site near Lake Titicaca featuring monumental pre-Columbian megalithic stone gateways and the ancient spiritual capital of the Tiwanaku Empire.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/PUERTA_DEL_SOL_TIWANAKU.jpg/3840px-PUERTA_DEL_SOL_TIWANAKU.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lake Titicaca & Isla del Sol",
        "caption": "The highest navigable lake on Earth (3,812 m) and the sacred Isla del Sol, celebrated in Inca mythology as the birthplace of the Sun God Inti.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/73/Lake_Titicaca_ESA22522896.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "La Paz & Mi Teleférico Urban Cable Cars",
        "caption": "The world's highest and longest urban cable car transit network gliding high above La Paz with panoramic views of snow-crested Mount Illimani (6,438 m).",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/L%C3%ADnea_Roja_de_Mi_Telef%C3%A9rico_en_La_Paz%2C_Bolivia.jpg"
      },
      {
        "title": "Cerro Rico & Historic Potosí",
        "caption": "UNESCO World Heritage colonial mining city crowned by the legendary silver mountain Cerro Rico ('Rich Hill') and historic Casa de la Moneda.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Cerro_ricco.jpg"
      },
      {
        "title": "Andean condor",
        "caption": "The Andean condor is a South American New World vulture and is the only extant member of the genus Vultur.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/330px-AndeanCondorMale.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Salar de Uyuni holds an estimated 50% to 70% of the world's known lithium reserves beneath its white salt crust.",
      "Bolivia has two capital cities: Sucre is the official constitutional capital, while La Paz is the seat of government.",
      "Bolivia's Constitution recognizes 37 official languages, including Spanish, Quechua, Aymara, and Guaraní.",
      "La Paz sits at 3,640 meters altitude and is served by Mi Teleférico, the world's highest and largest urban cable car network.",
      "Lake Titicaca, shared with Peru at 3,812 m elevation, is the world's highest body of water navigable by large commercial vessels."
    ]
  },
  "br": {
    "landmarks": [
      {
        "title": "Christ the Redeemer in Rio de Janeiro",
        "caption": "Monumental 30-meter Art Deco statue crowning the 700-meter granite peak of Mount Corcovado overlooking Guanabara Bay.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Christ_on_Corcovado_cropped.JPG"
      },
      {
        "title": "The Amazon Rainforest & River",
        "caption": "The world's largest tropical rainforest and river basin, home to 10% of Earth's known species.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Amazon17_%285641020319%29.jpg/3840px-Amazon17_%285641020319%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lençóis Maranhenses National Park",
        "caption": "Surreal landscape of rolling white sand dunes filled with crystal-clear freshwater rainwater lagoons during wet season.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Len%C3%A7%C3%B3is_Maranhenses_2018.jpg/3840px-Len%C3%A7%C3%B3is_Maranhenses_2018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Iguazu Falls",
        "caption": "Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná.  Together, they make up the largest waterfall system in the world.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg/330px-Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Jaguar",
        "caption": "The jaguar is a large cat species and the only living member of the genus Panthera that is native to the Americas.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/330px-Standing_jaguar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Brazil is the fifth-largest country in the world by both area and population, bordering every South American nation except Chile and Ecuador.",
      "The Amazon River discharges approximately 20% of all the river water that empties into the world's oceans.",
      "Brazil is the only nation to have won the FIFA World Cup five times and the only country to have participated in every tournament."
    ]
  },
  "bs": {
    "landmarks": [
      {
        "title": "Exuma Cays & Pig Beach",
        "caption": "Idyllic uninhabited island famous for friendly feral pigs that swim out into crystal turquoise water to greet visitors.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Exuma_and_Cays_in_Bahamas_%28zoom%29.svg/1920px-Exuma_and_Cays_in_Bahamas_%28zoom%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Dean's Blue Hole",
        "caption": "The world's second-deepest known saltwater blue hole (202 m), nestled in a sheltered bay on Long Island.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Dean%E2%80%99s_Blue_Hole.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Queen's Staircase in Nassau",
        "caption": "Historic 66-step staircase hand-hewn out of solid limestone rock by 600 slaves in the late 18th century.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Queen%27s_staircase%2C_Nassau%2C_Bahamas.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Dean's Blue Hole",
        "caption": "Dean's Blue Hole is a blue hole located in Long Island, Bahamas in a bay located west of Clarence Town.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Dean%E2%80%99s_Blue_Hole.jpg/330px-Dean%E2%80%99s_Blue_Hole.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "American flamingo",
        "caption": "The American flamingo is a large species of flamingo native to the West Indies, northern South America and the Yucatán Peninsula.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/American_Flamingo_JG.jpg/330px-American_Flamingo_JG.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The name 'Bahamas' comes from the Spanish phrase 'baja mar', meaning 'shallow sea', reflecting its luminous turquoise waters.",
      "Christopher Columbus made his first landfall in the Americas in 1492 on the Bahamian island of San Salvador.",
      "The Bahamas comprises over 700 islands and 2,400 cays scattered across 100,000 square miles of the clearest ocean waters."
    ]
  },
  "bt": {
    "landmarks": [
      {
        "title": "Tiger's Nest Monastery (Paro Taktsang)",
        "caption": "Sacred cliffside Himalayan monastery clinging to a sheer rock face 900 meters above the Paro Valley.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Paro_Taktsang%2C_Bhutan_%28edited%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Punakha Dzong",
        "caption": "Majestic 17th-century administrative and monastic fortress situated at the confluence of two rushing rivers.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Punakha_Dzong%2C_Bhutan_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Dochula Pass & 108 Chortens",
        "caption": "Scenic mountain pass offering breathtaking panoramic views of snow-covered eastern Himalayan peaks.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Druk_Wangyal_Chortens%2C_Bhutan_01.jpg/3840px-Druk_Wangyal_Chortens%2C_Bhutan_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Jigme Dorji National Park",
        "caption": "Jigme Dorji National Park (JDNP), named after the late Jigme Dorji Wangchuck, is the second-largest National Park of Bhutan.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Mo_Chu_Jigme_Dorji_NP_AJT_Johnsingh_IMG_1361.JPG/330px-Mo_Chu_Jigme_Dorji_NP_AJT_Johnsingh_IMG_1361.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Takin",
        "caption": "The takin ; is a large species of ungulate of the subfamily Caprinae found in the eastern Himalayas.  It includes three subspecies, the Mishmi takin, the golden takin, and the Bhutan takin, and is closely related to the Tibetan takin (B.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Thimphu-Takin-Reservat-06-2015-gje.jpg/330px-Thimphu-Takin-Reservat-06-2015-gje.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Bhutan is the world's only carbon-negative country, absorbing more greenhouse gases than its economy emits.",
      "Rather than measuring Gross Domestic Product (GDP), Bhutan measures national progress via 'Gross National Happiness' (GNH).",
      "Bhutan was the very first nation in the world to ban the sale and commercial production of tobacco products nationwide."
    ]
  },
  "bw": {
    "landmarks": [
      {
        "title": "Okavango Delta",
        "caption": "The world's largest inland delta, transforming the Kalahari Desert into an emerald labyrinth of wildlife lagoons.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Okavango_Delta%2C_Botswana1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Chobe National Park",
        "caption": "Renowned sanctuary along the Chobe River hosting Africa's largest concentrated population of wild elephants.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Gnus_zebras_chobe_national_park.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Makgadikgadi Salt Pans",
        "caption": "Immense stark white shimmering salt flats, the prehistoric remnants of the ancient Lake Makgadikgadi.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/45/DeltaOkawango.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Makgadikgadi Pan",
        "caption": "The Makgadikgadi Pan is a salt pan situated in the middle of the dry savanna of north-eastern Botswana, is one of the largest salt flats...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/DeltaOkawango.jpg/330px-DeltaOkawango.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "African bush elephant",
        "caption": "The African bush elephant, also known as the African savanna elephant, is a species of elephant native to sub-Saharan Africa and the largest living terrestrial animal, with fully grown bulls reaching an average shoulder height of 3. 04–3.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/178_Male_African_bush_elephant_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg/330px-178_Male_African_bush_elephant_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Botswana is home to roughly one-third of Africa's remaining wild elephant population, with over 130,000 elephants.",
      "The Okavango Delta is an endorheic basin where the Okavango River empties into desert sands without reaching any ocean.",
      "Botswana is the world's leading diamond producer by value, transforming gem revenue into robust public healthcare and education."
    ]
  },
  "by": {
    "landmarks": [
      {
        "title": "Mir Castle Complex",
        "caption": "Magnificent 16th-century UNESCO World Heritage castle blending Gothic, Baroque, and Renaissance styles.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9C%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.JPG/3840px-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9C%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Belovezhskaya Pushcha National Park",
        "caption": "Ancient primeval forest sanctuary home to the continent's largest herd of wild European bison (wisent).",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/ba/BelarusBNP09.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Nesvizh Radziwiłł Castle",
        "caption": "Opulent residential palace surrounded by picturesque lakes and landscaped English gardens.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/84/%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6_%D1%96_%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6%D1%81%D0%BA%D1%96_%D0%B7%D0%B0%D0%BC%D0%B0%D0%BA_12.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Braslaw Lakes",
        "caption": "Braslaw Lakes is one of the four national parks in Belarus.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Belarus_-_Snudy_Lake.jpg/330px-Belarus_-_Snudy_Lake.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "European bison",
        "caption": "The European bison or the European wood bison, also known as the wisent, the zubr, or sometimes colloquially as the European buffalo, is...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/European_bison_%28Bison_bonasus%29_male_Bia%C5%82owieza.jpg/330px-European_bison_%28Bison_bonasus%29_male_Bia%C5%82owieza.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Known as the 'Lungs of Europe' because over 40% of its landmass is covered by dense, pristine primeval forests.",
      "Belovezhskaya Pushcha is one of the last remnants of the immense primeval forest that once covered the European Plain.",
      "Belarusian folk textiles feature the distinctive 'Rushnik' red-and-white woven geometric pattern, honored directly on its national flag."
    ]
  },
  "bz": {
    "landmarks": [
      {
        "title": "Great Blue Hole",
        "caption": "Massive 300-meter-wide submarine sinkhole in Lighthouse Reef made famous by underwater explorer Jacques Cousteau.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Great_Blue_Hole.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Xunantunich Maya Ruins",
        "caption": "Ancient Maya archaeological site crowned by El Castillo, a 40-meter-tall pyramid decorated with carved friezes.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Xunantunich_Belize_1_19.jpg/3840px-Xunantunich_Belize_1_19.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Belize Barrier Reef",
        "caption": "The second-largest coral reef system in the world (after Australia's Great Barrier Reef), sheltering manatees and sharks.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Satellite_image_of_Belize_in_March_31%2C_2002.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Belize Barrier Reef",
        "caption": "The Belize Barrier Reef is a series of coral reefs straddling the coast of Belize, roughly 300 metres (980 ft) offshore in the north and 40 kilometres (25 mi) in the south within the country limits.  The Belize Barrier Reef is a 300-kilometre (190 mi) long section of the 900-kilometre (560 mi) Mesoamerican Barrier Reef System, which is continuous from Cancún on the north-eastern tip of the Yucatán Peninsula through the Riviera Maya and down to Honduras, making it the second largest coral reef system in the world after the Great Barrier Reef in Australia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Satellite_image_of_Belize_in_March_31%2C_2002.jpg/330px-Satellite_image_of_Belize_in_March_31%2C_2002.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Keel-billed toucan",
        "caption": "The keel-billed toucan, also known as rainbow-billed toucan or sulphur-breasted toucan, is a species of toucan native to southern...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Keel-billed_toucan_%28Ramphastos_sulfuratus_sulfuratus%29_on_foxtail_palm_%28Wodyetia_bifurcata%29_Cayo.jpg/330px-Keel-billed_toucan_%28Ramphastos_sulfuratus_sulfuratus%29_on_foxtail_palm_%28Wodyetia_bifurcata%29_Cayo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Belize is the only country in Central America where English is the official language.",
      "The Belize Barrier Reef is the longest barrier reef in the Western Hemisphere, stretching 300 kilometers.",
      "Over 60% of Belize's land surface is blanketed by lush subtropical forest, with more than 40% under protected status."
    ]
  },
  "ca": {
    "landmarks": [
      {
        "title": "Banff National Park & Lake Louise",
        "caption": "Glacial turquoise lake framed by Mount Victoria and the majestic Canadian Rocky Mountains.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Niagara Falls (Horseshoe Falls)",
        "caption": "Massive curved waterfall plunging millions of gallons of water over a 51-meter cliff every minute.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/ab/3Falls_Niagara.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "CN Tower in Toronto",
        "caption": "Iconic 553-meter communications tower dominating the Lake Ontario skyline, featuring a glass observation floor.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8a/CN-tower-edm.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Moraine Lake",
        "caption": "Moraine Lake is a snow and glacially fed alpine lake in Banff National Park, 14 kilometres (8. 7 mi) outside the village of Lake Louise, Alberta, Canada.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/330px-Moraine_Lake_17092005.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "North American beaver",
        "caption": "The North American beaver is one of two extant beaver species, along with the Eurasian beaver.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/330px-American_Beaver.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Canada has the longest coastline of any nation on Earth, measuring 202,080 kilometers across three oceans.",
      "Canada contains more than half of all the natural lakes on planet Earth, with over 2 million lakes spanning its territory.",
      "Canada produces roughly 70% of the world's commercial supply of pure maple syrup, primarily in the province of Quebec."
    ]
  },
  "cd": {
    "landmarks": [
      {
        "title": "Virunga National Park",
        "caption": "Africa's oldest national park, sanctuary to critically endangered mountain gorillas and active volcanic peaks.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Virunga_National_Park-107997.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Nyiragongo Volcano",
        "caption": "Active stratovolcano in the Albertine Rift famous for hosting one of the world's most active and largest boiling lava lakes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/13/An_aerial_view_of_the_towering_volcanic_peak_of_Mt._Nyiragongo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kahuzi-Biéga National Park",
        "caption": "Protected volcanic rainforest highland sheltering the last remaining wild populations of eastern lowland gorillas.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Lake_Kivu_%2820875703429%29.jpg/3840px-Lake_Kivu_%2820875703429%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mount Nyiragongo",
        "caption": "Mount Nyiragongo is an active stratovolcano with an elevation of 3,470 m (11,385 ft) in the Virunga Mountains associated with the Albertine Rift.  It is located inside Virunga National Park, in the North Kivu province in the Democratic Republic of the Congo, about 12 km (7.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/An_aerial_view_of_the_towering_volcanic_peak_of_Mt._Nyiragongo.jpg/330px-An_aerial_view_of_the_towering_volcanic_peak_of_Mt._Nyiragongo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mountain gorilla",
        "caption": "The mountain gorilla is one of the two subspecies of the eastern gorilla.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Susa_group%2C_mountain_gorilla.jpg/330px-Susa_group%2C_mountain_gorilla.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "DR Congo contains roughly 60% of the Congo Basin rainforest, the second-largest tropical rainforest system on Earth after the Amazon.",
      "The okapi (forest giraffe), a unique animal with striped zebra-like hindquarters, is native exclusively to the Ituri rainforest in DR Congo.",
      "It holds the largest deposits of cobalt and coltan in the world, minerals essential to global smartphone and electric vehicle batteries."
    ]
  },
  "cf": {
    "landmarks": [
      {
        "title": "Dzanga-Sangha National Park",
        "caption": "Pristine Congo Basin tropical rainforest sanctuary famous for the Dzanga Bai forest clearing filled with forest elephants.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Dzanga_Bai_forest_clearing_with_African_forest_elephants%2C_Central_African_Republic.jpg/3840px-Dzanga_Bai_forest_clearing_with_African_forest_elephants%2C_Central_African_Republic.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Boali Waterfalls",
        "caption": "Impressive 50-meter-high and 250-meter-wide waterfalls cascading over stepped granite ledges on the Mbali River.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Republique_Centrafricaine_-_Boali_-_Chutes_de_Boali.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Manovo-Gounda St. Floris",
        "caption": "Vast UNESCO-listed national park spanning savannas and floodplains in the northern reaches of the country.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/34/Manovo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Dzanga-Sangha Special Reserve",
        "caption": "The Dzanga-Sangha Special Reserve is a protected area in southwestern Central African Republic, covering 6,865.54 km2 (2,650.80 sq mi)...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Dzanga_Sangha_Entry_Point%2C_Central_African_Republic.jpg/330px-Dzanga_Sangha_Entry_Point%2C_Central_African_Republic.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "African forest elephant",
        "caption": "The African forest elephant is an elephant species native to humid tropical forests in West Africa and the Congo Basin.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Loxodontacyclotis.jpg/330px-Loxodontacyclotis.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Dzanga Bai, known as the 'Village of Elephants', attracts up to 100 forest elephants daily to lick mineral-rich saline mud.",
      "The Central African Republic is home to the indigenous Ba'Aka Pygmies, renowned for their complex polyphonic vocal music.",
      "The country contains the second-largest contiguous expanse of dense tropical rainforest on Earth after the Amazon."
    ]
  },
  "cg": {
    "landmarks": [
      {
        "title": "Odzala-Kokoua National Park",
        "caption": "Ancient Congo Basin rainforest sanctuary home to Western lowland gorillas and forest buffalo.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/3840px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Loufoulakari Falls",
        "caption": "Spectacular rapids and waterfalls at the confluence of the Loufoulakari and Congo rivers near Brazzaville.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Fulbert_Youlou_%28cropped%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Gorges of Diosso",
        "caption": "Dramatic red sandstone rock cliffs and lush tropical gorges carved into the coastline near Pointe-Noire.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Jeune_gar%C3%A7on_de_type_de_race_Bavili_%28Congo_Fran%C3%A7ais%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Nouabalé-Ndoki National Park",
        "caption": "Nouabalé-Ndoki National Park is a national park in the Republic of the Congo.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Loxodonta_cyclotis_29048923.jpg/330px-Loxodonta_cyclotis_29048923.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Western lowland gorilla",
        "caption": "The western lowland gorilla is one of two critically endangered subspecies of the western gorilla that lives in montane, primary and secondary forest and lowland swampland in central Africa in Angola, Cameroon, Central African Republic, Republic of the Congo, Democratic Republic of the Congo, Equatorial Guinea and Gabon.  It is the nominate subspecies of the western gorilla, and the smallest of the four gorilla subspecies.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/WesternLowlandGorilla03.jpg/330px-WesternLowlandGorilla03.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Brazzaville, the capital of Republic of the Congo, sits directly across the Congo River from Kinshasa (DR Congo)—the world's closest pair of capital cities.",
      "The Sapeurs (La Sape) are Congolese dandies known for their impeccable designer three-piece suits, silk ties, and vibrant public elegance.",
      "The Congo River is the deepest river in the world, with measured depths exceeding 220 meters (720 feet)."
    ]
  },
  "ch": {
    "landmarks": [
      {
        "title": "The Matterhorn Peak in Zermatt",
        "caption": "Iconic 4,478-meter pyramid-shaped mountain summit, recognized globally as the symbol of the Swiss Alps.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Chillon Castle on Lake Geneva",
        "caption": "Medieval island fortress situated on a rocky islet near Montreux, immortalized by Lord Byron.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/001_Chateau_de_Chillon_and_Dents_du_Midi_Photo_by_Giles_Laurent.jpg/3840px-001_Chateau_de_Chillon_and_Dents_du_Midi_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Jungfraujoch 'Top of Europe'",
        "caption": "High-altitude saddle reachable by cogwheel train tunnel with views across the Aletsch Glacier.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Sphinx_et_Jungfrau_-_img_06980.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Matterhorn",
        "caption": "The Matterhorn is a mountain of the Alps, straddling the main watershed and border between Switzerland and Italy.  It is a large, near-symmetric pyramidal peak in the extended Monte Rosa area of the Pennine Alps, whose summit is 4,478 metres (14,692 ft) above sea level, making it one of the highest summits in the Alps and Europe.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/330px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Alpine ibex",
        "caption": "The Alpine ibex, also known as the steinbock, is a European species of goat which lives in the Alps.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/003_Wild_Alpine_Ibex_Sunset_Creux_du_Van_Mont_Racine_Photo_by_Giles_Laurent.jpg/330px-003_Wild_Alpine_Ibex_Sunset_Creux_du_Van_Mont_Racine_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Switzerland has four official national languages: German, French, Italian, and Romansh.",
      "The Swiss consume approximately 11 kilograms of chocolate per person annually, the highest chocolate consumption in the world.",
      "Switzerland has built enough fortified nuclear fallout shelters to accommodate 100% of its entire population in an emergency."
    ]
  },
  "ci": {
    "landmarks": [
      {
        "title": "Basilica of Our Lady of Peace",
        "caption": "The largest church in the world by surface area, constructed of Italian marble in Yamoussoukro.",
        "url": "https://upload.wikimedia.org/wikipedia/en/0/02/Notre_dame_de_la_paix_yamoussoukro_by_felix_krohn.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Nimba Strict Nature Reserve",
        "caption": "UNESCO-listed mountain crest home to viviparous toads and chimpanzees that use stone tools.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Nimba_Range.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Grand-Bassam Historic Town",
        "caption": "Historic French colonial capital with colonial villas, artisan craft centers, and Atlantic sandy beaches.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Grand-Bassam-Plage.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Taï National Park",
        "caption": "Taï National Park is a national park in Ivory Coast that contains one of the last areas of primary rainforest in West Africa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Ta%C3%AF_National_Park_%2824148248710%29.jpg/330px-Ta%C3%AF_National_Park_%2824148248710%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Pygmy hippopotamus",
        "caption": "The pygmy hippopotamus or pygmy hippo is a small hippopotamid which is native to the forests and swamps of West Africa, primarily in...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Hexaprotodon_liberiensis_in_Edinburgh_Zoo.JPG/330px-Hexaprotodon_liberiensis_in_Edinburgh_Zoo.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Ivory Coast is the world's largest producer and exporter of cocoa beans, supplying over 40% of the world's chocolate raw material.",
      "The Basilica of Our Lady of Peace in Yamoussoukro is recognized by the Guinness World Records as the largest church on Earth.",
      "The country's national football team, The Elephants, is one of the most celebrated athletic squads in African sports history."
    ]
  },
  "cl": {
    "landmarks": [
      {
        "title": "Torres del Paine National Park",
        "caption": "Dramatic granite mountain towers rising above turquoise glacial lakes and golden pampas in Chilean Patagonia.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Torres_del_Paine_y_cuernos_del_Paine%2C_montaje.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Easter Island (Rapa Nui) Moai Statues",
        "caption": "Mysterious colossal volcanic stone statues erected by Polynesian navigators across the Pacific island.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Rapanookee_vona.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Atacama Desert (Valle de la Luna)",
        "caption": "The driest non-polar desert on Earth, home to lunar-like salt formations, geysers, and world-class astronomical observatories.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Valle_della_Luna_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Atacama Desert",
        "caption": "The Atacama Desert is a desert plateau on the Pacific coast of South America, stretching along a 1,600-kilometre-long (1,000-mile) strip of land in northern Chile, west of the Andes.  It covers an area of 105,000 km2 (41,000 mi2), rising to 128,000 km2 (49,000 mi2) if the barren lower slopes of the Andes are included.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Atacama.png/330px-Atacama.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Andean condor",
        "caption": "The Andean condor is a South American New World vulture and is the only extant member of the genus Vultur.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/330px-AndeanCondorMale.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Chile is the longest and narrowest country in the world, stretching over 4,300 kilometers north to south with an average width of just 175 km.",
      "The Atacama Desert in northern Chile has spots where rainfall has never been recorded in all of modern history.",
      "Because of its exceptionally clear and dry skies, Chile hosts over 50% of the world's ground-based astronomical telescope capacity."
    ]
  },
  "cm": {
    "landmarks": [
      {
        "title": "Mount Cameroon (Fako)",
        "caption": "An active volcano and the highest peak in West and Central Africa (4,040 m), known as the 'Chariot of the Gods'.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Mount_Cameroon_view_from_Buea_%28Soppo%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Waza National Park",
        "caption": "Expansive Sahelian savanna reserve teeming with lions, giraffes, African elephants, and migratory waterbirds.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Elephants_around_tree_in_Waza%2C_Cameroon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Chutes de la Lobé (Lobé Waterfalls)",
        "caption": "One of the rare waterfalls in the world that cascades directly into the Atlantic Ocean over granite cliffs.",
        "url": "https://upload.wikimedia.org/wikipedia/en/b/b1/Mars_Express_film_poster.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Cameroon",
        "caption": "Mount Cameroon is an active stratovolcano in the Southwest Region of Cameroon next to the city of Buea near the Gulf of Guinea.  Mount Cameroon is also known as Cameroon Mountain or Fako or by its indigenous name Mongo ma Ndemi.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Mount_Cameroon_view_from_Buea_%28Soppo%29.jpg/330px-Mount_Cameroon_view_from_Buea_%28Soppo%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Western lowland gorilla",
        "caption": "The western lowland gorilla is one of two critically endangered subspecies of the western gorilla that lives in montane, primary and...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/WesternLowlandGorilla03.jpg/330px-WesternLowlandGorilla03.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Cameroon is nicknamed 'Africa in Miniature' because it features all of the continent's major climates: desert, savanna, rainforest, and mountains.",
      "Lobé Waterfalls near Kribi is one of the very few waterfalls on Earth that empties directly into the open ocean.",
      "Over 250 distinct indigenous linguistic and ethnic groups live peacefully together across Cameroon."
    ]
  },
  "cn": {
    "landmarks": [
      {
        "title": "The Great Wall of China",
        "caption": "Ancient series of fortifications stretching thousands of miles across northern mountain ridges.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/3840px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "The Forbidden City in Beijing",
        "caption": "Vast imperial palace complex of the Ming and Qing dynasties housing 980 surviving buildings.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ef/The_Forbidden_City_-_View_from_Coal_Hill.jpg"
      },
      {
        "title": "Terracotta Army of Xi'an",
        "caption": "Thousands of life-sized terracotta soldiers and war chariots buried with China's first emperor Qin Shi Huang.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/88/51714-Terracota-Army.jpg"
      },
      {
        "title": "Zhangjiajie National Forest Park",
        "caption": "Zhangjiajie National Forest Park is a national forest park located in Zhangjiajie, Hunan Province, China.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/1_tianzishan_wulingyuan_zhangjiajie_2012.jpg/330px-1_tianzishan_wulingyuan_zhangjiajie_2012.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Giant panda",
        "caption": "The giant panda, also known as the panda bear or simply panda, is a bear species endemic to China.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/330px-Grosser_Panda.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "China is the birthplace of the Four Great Inventions of antiquity: papermaking, the magnetic compass, gunpowder, and printing.",
      "Giant pandas are native exclusively to central China's bamboo forests in Sichuan, Shaanxi, and Gansu.",
      "China operates the world's largest high-speed railway network, with over 45,000 kilometers of operational track."
    ]
  },
  "co": {
    "landmarks": [
      {
        "title": "Cocora Valley Wax Palms",
        "caption": "Misty Andean valley home to the Quindío wax palm, the world's tallest palm species, soaring up to 60 meters high.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Valle_del_cocora_-_general_view.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Cartagena Old Walled City",
        "caption": "UNESCO-listed 16th-century Caribbean colonial fortress port town decorated with flowering balconies and plazas.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/30/Museo_Naval_del_Caribe.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Caño Cristales ('River of Five Colors')",
        "caption": "Spectacular river in the Serranía de la Macarena that glows vibrant red, magenta, and green from aquatic plants.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/57/Ca%C3%B1o_Cristales_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Cocora Valley",
        "caption": "The Cocora Valley is a valley in the Quindío Department of Colombia.  It is located in the Central Cordillera of the Andean mountains.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Valle_del_cocora_-_general_view.jpg/330px-Valle_del_cocora_-_general_view.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Andean condor",
        "caption": "The Andean condor is a South American New World vulture and is the only extant member of the genus Vultur.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/330px-AndeanCondorMale.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Colombia is the second-most biodiverse country in the world, and number one in the world for bird, orchid, and butterfly species.",
      "Colombia produces the finest emeralds on Earth, accounting for roughly 70% to 90% of the global gem-quality emerald market.",
      "Caño Cristales is hailed as the 'Liquid Rainbow' due to the vibrant blooming of the endemic Macarenia clavigera aquatic plant."
    ]
  },
  "cr": {
    "landmarks": [
      {
        "title": "Arenal Volcano & La Fortuna",
        "caption": "Iconic symmetrical stratovolcano rising above tropical rainforests, natural hot springs, and Lake Arenal.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Arenal_volcano_%2870785p%29_%28cropped%29.jpg/3840px-Arenal_volcano_%2870785p%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Monteverde Cloud Forest Reserve",
        "caption": "High-altitude misty cloud forest sanctuary famed for hanging suspension bridges, orchids, and the Resplendent Quetzal.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Monteverde_bosque.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Manuel Antonio National Park",
        "caption": "Pristine Pacific coastal park where white sand beaches meet tropical jungle home to three-toed sloths and capuchin monkeys.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/69/Manuel_antonio_06_april_2005.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Arenal Volcano",
        "caption": "Arenal Volcano is a recently active andesitic stratovolcano in north-western Costa Rica around 90 km (56 mi) northwest of San José, in the province of Alajuela, canton of San Carlos, and district of La Fortuna.  The Arenal volcano stands 1,633 metres (5,358 ft) high.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Arenal_volcano_%2870785p%29_%28cropped%29.jpg/330px-Arenal_volcano_%2870785p%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Three-toed sloth",
        "caption": "The three-toed or three-fingered sloths are arboreal neotropical mammals.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Bradypus.jpg/330px-Bradypus.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Costa Rica constitutionally abolished its standing army in 1948, redirecting military budgets toward education and healthcare.",
      "Despite covering only 0.03% of the planet's landmass, Costa Rica contains approximately 5% of the world's total biodiversity.",
      "Over 98% of Costa Rica's electricity has been generated from renewable energy sources (hydro, geothermal, and wind) for years."
    ]
  },
  "cu": {
    "landmarks": [
      {
        "title": "Old Havana (Habana Vieja)",
        "caption": "Historic colonial core featuring neoclassical architecture, cobblestone plazas, and 1950s classic American cars.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Havana_Map_-_Habana_Vieja.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Viñales Valley & Mogotes",
        "caption": "UNESCO-listed karst limestone landscape dotted with sheer dome-shaped hills and traditional tobacco farms.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Vi%C3%B1ales_Valley.jpg/3840px-Vi%C3%B1ales_Valley.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "El Malecon Coastal Esplanade",
        "caption": "Broad 8-kilometer sea wall promenade along Havana's coast, a beloved social hub for poets, musicians, and sunset strolls.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Casa_de_Beneficencia._Havana%2C_Cuba.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Viñales Valley",
        "caption": "Viñales Valley is a karstic depression in Cuba.  The valley has an area of 132 km2 (51 sq mi) and is located in the Sierra de los Órganos mountains, just north of Viñales in the Pinar del Río Province.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Vi%C3%B1ales_Valley.jpg/330px-Vi%C3%B1ales_Valley.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Cuban trogon",
        "caption": "The Cuban trogon or tocororo is a species of bird in the family Trogonidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Cuban_trogon_%28Priotelus_temnurus%29.JPG/330px-Cuban_trogon_%28Priotelus_temnurus%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Cuba has one of the highest doctor-to-patient ratios in the world and sends thousands of medical professionals on humanitarian missions abroad.",
      "The Bee Hummingbird, native exclusively to Cuba, is the smallest bird in the world, measuring just 5 centimeters long.",
      "Cuba has nine UNESCO World Heritage sites, showcasing a rich tapestry of Spanish colonial, Afro-Caribbean, and modernist culture."
    ]
  },
  "cv": {
    "landmarks": [
      {
        "title": "Pico do Fogo Volcano",
        "caption": "Active volcanic peak (2,829 m) rising dramatically from the caldera floor on Fogo Island, known for volcanic wine.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/af/Fogo%2C_Cape_Verde_Islands.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Cidade Velha Historic Center",
        "caption": "The first European colonial settlement in the tropics, established by the Portuguese on Santiago Island in 1462.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Pal%C3%A1cio_da_Cultura%2C_Praia%2C_Cape_Verde.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Santa Maria Beach on Sal Island",
        "caption": "Vibrant golden sand beach with turquoise Atlantic waters, world-famous for kitesurfing and sea turtle nesting.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Bela-vista-net-Sal-map.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Sal, Cape Verde",
        "caption": "Sal is an island in Cape Verde.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Bela-vista-net-Sal-map.jpg/330px-Bela-vista-net-Sal-map.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Loggerhead sea turtle",
        "caption": "The loggerhead sea turtle, loggerhead turtle or loggerhead, is a species of sea turtle distributed throughout the world.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Loggerhead_sea_turtle.jpg/330px-Loggerhead_sea_turtle.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Cape Verde was completely uninhabited until Portuguese explorers discovered the Atlantic archipelago in the 15th century.",
      "Morna, a soulful, melancholic traditional musical genre sung in Creole, was popularized worldwide by 'Barefoot Diva' Cesária Évora.",
      "There are more Cape Verdeans living abroad in diaspora (especially in the US and Europe) than in Cape Verde itself."
    ]
  },
  "cy": {
    "landmarks": [
      {
        "title": "Aphrodite's Rock (Petra tou Romiou)",
        "caption": "The legendary Mediterranean sea stack near Paphos where Aphrodite, Greek goddess of love, emerged from sea foam.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Roca_de_Afrodita%2C_Chipre%2C_2021-12-10%2C_DD_65.jpg/3840px-Roca_de_Afrodita%2C_Chipre%2C_2021-12-10%2C_DD_65.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Kourion Ancient Amphitheatre",
        "caption": "Magnificent Greco-Roman cliffside theatre overlooking Episkopi Bay with panoramic coastal views.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Roman_Empire_-_Cyprus_%28125_AD%29.svg/3840px-Roman_Empire_-_Cyprus_%28125_AD%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Troodos Mountain Painted Churches",
        "caption": "UNESCO-listed Byzantine mountain monasteries with remarkably preserved centuries-old frescoes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/df/Asinou_-_Kirche_Narthex_4_Kuppel.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Troodos Mountains",
        "caption": "Troodos or Trodos is the largest mountain range in Cyprus, located roughly in the centre of the island.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Chionistra_winter_1.JPG/330px-Chionistra_winter_1.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Cyprus mouflon",
        "caption": "The Cyprus mouflon, also known as Cypriot mouflon, is an endangered subspecies of mouflon endemic only to Cyprus in the mountains of...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Cypriot_Male_Mouflon.jpg/330px-Cypriot_Male_Mouflon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Cyprus is the legendary birthplace of Aphrodite, the ancient goddess of love and beauty.",
      "Commandaria dessert wine from Cyprus is the world's oldest named wine still in active production, dating back to 2000 BC.",
      "Its capital city, Nicosia, is the last remaining divided capital in the world, split between Greek Cypriot and Turkish Cypriot sectors."
    ]
  },
  "cz": {
    "landmarks": [
      {
        "title": "Charles Bridge & Prague Castle",
        "caption": "Historic 14th-century stone gothic bridge adorned with 30 statues of saints spanning the Vltava River.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Karl%C5%AFv_most_Praha%2C_Star%C3%A9_M%C4%9Bsto_20170810_007.jpg/3840px-Karl%C5%AFv_most_Praha%2C_Star%C3%A9_M%C4%9Bsto_20170810_007.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Prague Astronomical Clock",
        "caption": "The world's oldest astronomical clock still operating, installed in 1410 on the Old Town City Hall.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/37/Astronomical_Clock_%288341899828%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Český Krumlov Castle",
        "caption": "Fairy-tale South Bohemian Renaissance castle overlooking a dramatic horseshoe loop of the Vltava River.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/63/Blick_auf_das_Stadtzentrum_von_Krumau_%282026%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Bohemian Switzerland",
        "caption": "Bohemian Switzerland, also known as Czech Switzerland, is a nature region in the Elbe Sandstone Mountains in the northwestern Czech...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Pravcicka_brana_001.jpg/330px-Pravcicka_brana_001.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Red deer",
        "caption": "The red deer is a species of deer in the genus Cervus.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Cervus_elaphus_Luc_Viatour_6.jpg/330px-Cervus_elaphus_Luc_Viatour_6.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Prague Castle is recognized by the Guinness Book of Records as the largest ancient coherent castle complex in the world.",
      "The Czech Republic consumes more beer per capita than any other country on Earth, leading world rankings for decades.",
      "The word 'robot' was coined in the Czech Republic by writer Karel Čapek in his 1920 science fiction play R.U.R."
    ]
  },
  "de": {
    "landmarks": [
      {
        "title": "Neuschwanstein Castle",
        "caption": "The fairytale 19th-century Romanesque Revival palace built by King Ludwig II in the Bavarian Alps.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Schloss_Neuschwanstein_2013.jpg"
      },
      {
        "title": "Brandenburg Gate in Berlin",
        "caption": "Berlin's monumental 18th-century neoclassical triumphal arch and national symbol of German unity.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Cologne Cathedral (Kölner Dom)",
        "caption": "Gargantuan twin-spired Gothic cathedral towering over the Rhine river, taking over 600 years to build.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/04/K%C3%B6lner_Dom_-_Westfassade_2022_ohne_Ger%C3%BCst-0968_b.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Black Forest",
        "caption": "The Black Forest is a large forested mountain range in the state of Baden-Württemberg in southwest Germany, bounded by the Rhine Valley...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Blick_vom_Hohfelsen.jpg/330px-Blick_vom_Hohfelsen.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Red fox",
        "caption": "The red fox is the largest of the true foxes, and the most widely distributed member of the order Carnivora.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Portrait_of_a_red_fox_in_Rautas_fj%C3%A4llurskog_%28cropped%29.jpg/330px-Portrait_of_a_red_fox_in_Rautas_fj%C3%A4llurskog_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Neuschwanstein Castle in Bavaria directly inspired Walt Disney's iconic Cinderella and Sleeping Beauty castle.",
      "Johannes Gutenberg invented the movable-type printing press in Mainz around 1440, sparking the global Renaissance.",
      "Germany is home to over 25,000 historic castles, palaces, and medieval fortresses."
    ]
  },
  "dj": {
    "landmarks": [
      {
        "title": "Lake Assal",
        "caption": "A hypersaline crater lake sitting 155 meters below sea level, the lowest land point in Africa and third-lowest on Earth.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Lake_Assal_NASA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Abbe Chimneys",
        "caption": "Surreal otherworldly landscape of steaming limestone travertine steam chimneys rising above the Danakil desert.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Lake_Abbe_Map.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Day Forest National Park",
        "caption": "Ancient relict East African juniper forest sanctuary in the Goda Mountains offering cool respite from desert heat.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/98/Goda_Mountains_-_National_Park_of_For%C3%AAt_du_Day.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Assal (Djibouti)",
        "caption": "Lake Assal is a crater lake in central-western Djibouti.  It is located at the western end of Gulf of Tadjoura between Arta Region, and Tadjoura Region, touching Dikhil Region, at the top of the Great Rift Valley, some 120 km (75 mi) west of Djibouti city.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Lake_Assal_NASA.jpg/330px-Lake_Assal_NASA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Whale shark",
        "caption": "The whale shark is a slow-moving, filter-feeding carpet shark and the largest known extant fish species.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Similan_Dive_Center_-_great_whale_shark.jpg/330px-Similan_Dive_Center_-_great_whale_shark.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Lake Assal is the lowest point in Africa (-155 m) and the most saline body of water on Earth outside Antarctica (nearly 10x saltier than the ocean).",
      "Djibouti's surreal Lake Abbe was chosen by filmmakers as a key location for filming the classic 1968 movie Planet of the Apes.",
      "The Gulf of Tadjoura in Djibouti is one of the world's premier locations for swimming alongside gentle juvenile whale sharks."
    ]
  },
  "dk": {
    "landmarks": [
      {
        "title": "Nyhavn Waterfront",
        "caption": "Copenhagen's colorful 17th-century canal district lined with vibrant townhouses, wooden ships, and cafes.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/The_Nyhavn_Canal_3.jpg/3840px-The_Nyhavn_Canal_3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Kronborg Castle (Elsinore)",
        "caption": "Majestic Renaissance stronghold immortalized as Elsinore in William Shakespeare's Hamlet.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Kronborg_April_2026_10.jpg/3840px-Kronborg_April_2026_10.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "The Little Mermaid Statue",
        "caption": "Beloved bronze sculpture at Langelinie promenade inspired by Hans Christian Andersen's timeless fairy tale.",
        "url": "https://upload.wikimedia.org/wikipedia/en/7/7a/Copenhagen_-_the_little_mermaid_statue_-_2013.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Møns Klint",
        "caption": "Møns Klint is a 6 km stretch of limestone and chalk cliffs along the eastern coast of the Danish island of Møn in the Baltic Sea, and as...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/M%C3%B8ns_Klint_7.jpg/330px-M%C3%B8ns_Klint_7.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mute swan",
        "caption": "The mute swan is a species of swan and a member of the family Anatidae within the waterfowl order.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/CygneVaires.jpg/330px-CygneVaires.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Denmark's Dannebrog is the world's oldest continuously used national flag, having flown continuously since 1219.",
      "LEGO bricks were invented in Billund, Denmark in 1932 by carpenter Ole Kirk Christiansen.",
      "Copenhagen is famed as the most bicycle-friendly capital in the world, with over 60% of residents cycling to work or school daily."
    ]
  },
  "dm": {
    "landmarks": [
      {
        "title": "Boiling Lake in Morne Trois Pitons",
        "caption": "The world's second-largest hot spring (60 m wide), a flooded fumarole boiling with grayish-blue geothermal water.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Dominica_Boiling_Lake.jpg/3840px-Dominica_Boiling_Lake.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Trafalgar Falls (Father & Mother Falls)",
        "caption": "Twin cascading waterfalls plunging into natural volcanic sulfur hot pools amidst tropical mountain rainforest.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/27/Dominica.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Champagne Reef",
        "caption": "Subterranean geothermal vents bubbling thousands of warm bubbles up through colorful coral reefs like a glass of champagne.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a2/1770s_montage.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Morne Trois Pitons National Park",
        "caption": "Morne Trois Pitons National Park is a national park in Dominica established in July 1975, the first to be legally established in the...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Dominica_Hiking_Path.JPG/330px-Dominica_Hiking_Path.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Imperial amazon",
        "caption": "The imperial amazon or Dominican amazon, also known as the sisserou or sisserou parrot, is a parrot found only on the Caribbean island...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Amazona_imperialis_-Roseau_-Dominica_-aviary-6a-3c.jpg/330px-Amazona_imperialis_-Roseau_-Dominica_-aviary-6a-3c.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Dominica is known as the 'Nature Isle of the Caribbean' due to its untouched rainforests, 365 rivers, and volcanic peaks.",
      "It is home to the indigenous Kalinago (Carib) people, who maintain an autonomous territory on the Atlantic coast.",
      "Dominica's flag is the only sovereign national flag in the world that features the color purple (on the Sisserou parrot emblem)."
    ]
  },
  "do": {
    "landmarks": [
      {
        "title": "Zona Colonial of Santo Domingo",
        "caption": "The oldest permanent European settlement in the Americas, featuring the first cathedral, hospital, and paved street.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/SantoDomingoedit.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Punta Cana Beaches",
        "caption": "World-famous palm-lined white sand coast meeting the turquoise waters of the Atlantic and Caribbean.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Cap_Cana_Marina_Dominican_Republic.jpg/3840px-Cap_Cana_Marina_Dominican_Republic.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Pico Duarte",
        "caption": "The highest mountain peak in all the Caribbean islands (3,098 m), located in the Cordillera Central.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Hispaniolanpineforest.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Pico Duarte",
        "caption": "Pico Duarte is the highest peak in the Dominican Republic, on the island of Hispaniola and in all the Caribbean.  At 3,101 m (10,174 ft) above sea level, it gives Hispaniola the 16th-highest maximum elevation of any island in the world.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Hispaniolanpineforest.jpg/330px-Hispaniolanpineforest.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Palmchat",
        "caption": "The palmchat is a medium-sized passerine bird endemic to the Caribbean island of Hispaniola.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Cigua-palmera-ave-nacional-dominicana.jpg/330px-Cigua-palmera-ave-nacional-dominicana.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Santo Domingo's Cathedral of Santa María la Menor, consecrated in 1541, is the oldest cathedral in the Americas.",
      "The Dominican Republic is the only place on Earth where the rare turquoise gemstone Larimar (blue pectolite) is mined.",
      "Merengue and Bachata music and dances both originated in the Dominican Republic and are celebrated worldwide."
    ]
  },
  "dz": {
    "landmarks": [
      {
        "title": "Djémila Roman Ruins",
        "caption": "UNESCO-listed ancient Roman mountain colony known for its forum, basilicas, and triumphal arch.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Roman_Ruins_of_Djemila_in_S%C3%A9tif%2C_Algeria.jpg/3840px-Roman_Ruins_of_Djemila_in_S%C3%A9tif%2C_Algeria.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Casbah of Algiers",
        "caption": "Historic whitewashed medina and Ottoman-era citadel overlooking the Bay of Algiers.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/AlgerCasbah.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Tassili n'Ajjer National Park",
        "caption": "Vast sandstone plateau in the Sahara Desert preserving thousands of prehistoric cave paintings.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Martyrs_Memorial._Algiers%2C_Algeria.jpg/3840px-Martyrs_Memorial._Algiers%2C_Algeria.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Tassili n'Ajjer",
        "caption": "Tassili n'Ajjer is a mountain range in the Sahara desert, located in south-eastern Algeria.  It holds one of the most important groupings of prehistoric cave art in the world and covers an area of more than 72,000 km2 (28,000 sq mi).",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Map_of_Tassili_n%27Ajjer_and_surroundings-en.jpg/330px-Map_of_Tassili_n%27Ajjer_and_surroundings-en.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Fennec fox",
        "caption": "The fennec fox is a small fox native to the deserts of North Africa, ranging from Western Sahara and Mauritania to the Sinai Peninsula.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Fennec_Fox_Vulpes_zerda.jpg/330px-Fennec_Fox_Vulpes_zerda.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Algeria is the largest country in Africa and the Arab world by land area, with over 80% covered by the Sahara Desert.",
      "Tassili n'Ajjer contains over 15,000 prehistoric rock paintings depicting a green Sahara with herds of elephants and giraffes.",
      "Algeria is the homeland of renowned Algerian novelist and Nobel laureate Albert Camus, who was born in Mondovi."
    ]
  },
  "ec": {
    "landmarks": [
      {
        "title": "Galápagos Islands Marine Reserve",
        "caption": "Volcanic archipelago famous for fearless endemic wildlife that inspired Charles Darwin's theory of evolution.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Lobo_marino_%28Zalophus_californianus_wollebaeki%29%2C_Punta_Pitt%2C_isla_de_San_Crist%C3%B3bal%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-24%2C_DD_11.JPG/3840px-Lobo_marino_%28Zalophus_californianus_wollebaeki%29%2C_Punta_Pitt%2C_isla_de_San_Crist%C3%B3bal%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-24%2C_DD_11.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Cotopaxi Volcano & National Park",
        "caption": "One of the world's highest active volcanoes (5,897 m), an iconic snow-capped symmetrical cone rising on the Avenue of the Volcanoes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/20/Cotopaxi_volcano_2008-06-27T1322.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Historic Center of Quito",
        "caption": "The least-altered and best-preserved historic center in the Americas, the very first city declared a UNESCO World Heritage site in 1978.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/FACHADA_ASAMBLEA_NACIONAL._QUITO%2C_20_DE_FEBRERO_2020._01.jpg/3840px-FACHADA_ASAMBLEA_NACIONAL._QUITO%2C_20_DE_FEBRERO_2020._01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Cotopaxi",
        "caption": "Cotopaxi is an active stratovolcano in the Andes Mountains, located in Cotopaxi National Park in Cotopaxi Province, about 50 km (31. 1 mi) south of Quito, and 31 km (19 mi) northeast of the city of Latacunga, Ecuador.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Cotopaxi_volcano_2008-06-27T1322.jpg/330px-Cotopaxi_volcano_2008-06-27T1322.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Galápagos tortoise",
        "caption": "The Galápagos tortoise, also called the Galápagos giant tortoise, is a very large species of tortoise in the genus Chelonoidis.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Galapagos_giant_tortoise_Geochelone_elephantopus.jpg/330px-Galapagos_giant_tortoise_Geochelone_elephantopus.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Mount Chimborazo in Ecuador is the closest place on Earth to the sun; due to the Earth's equatorial bulge, its peak is the farthest point from the Earth's center.",
      "The Panama hat was actually invented and handcrafted in Ecuador (specifically in Montecristi), not Panama.",
      "In 2008, Ecuador became the first country in the world to recognize the legal Rights of Nature (Pachamama) in its national constitution."
    ]
  },
  "ee": {
    "landmarks": [
      {
        "title": "Tallinn Medieval Old Town",
        "caption": "One of the best-preserved medieval fortified Hanseatic trading cities in Northern Europe.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Old_Town_of_Tallinn%2C_Tallinn%2C_Estonia_-_panoramio_%2858%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Soomaa National Park Bogs",
        "caption": "Pristine wetland wilderness famed for its 'fifth season' spring floods navigated by traditional dugout canoes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/76/Raudna_j%C3%B5gi-masterplaan-2008.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Alexander Nevsky Cathedral",
        "caption": "Grand Russian Revival onion-domed cathedral standing proudly atop Toompea Hill in Tallinn.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Catedral_de_Alejandro_Nevsky%2C_Tallin%2C_Estonia%2C_2012-08-11%2C_DD_46.JPG/3840px-Catedral_de_Alejandro_Nevsky%2C_Tallin%2C_Estonia%2C_2012-08-11%2C_DD_46.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lahemaa National Park",
        "caption": "Lahemaa National Park is a park in northern Estonia, 70 kilometers east from the capital Tallinn.  The Gulf of Finland is to the north of the park and the Tallinn-Narva highway (E20) to the south.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Viru_Bog%2C_Parque_Nacional_Lahemaa%2C_Estonia%2C_2012-08-12%2C_DD_26.JPG/330px-Viru_Bog%2C_Parque_Nacional_Lahemaa%2C_Estonia%2C_2012-08-12%2C_DD_26.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Eurasian wolf",
        "caption": "The Eurasian wolf, also known as the common wolf, is a subspecies of grey wolf native to Europe and Asia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Kolm%C3%A5rden_Wolf.jpg/330px-Kolm%C3%A5rden_Wolf.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Estonia is recognized as one of the world's most digitally advanced societies; 99% of public services are accessible online 24/7.",
      "Skype was founded in Estonia in 2003 by a team of innovative Estonian software developers.",
      "More than 50% of Estonia's land area is blanketed by virgin forests, bogs, and pristine natural wetlands."
    ]
  },
  "eg": {
    "landmarks": [
      {
        "title": "The Great Pyramids of Giza & Sphinx",
        "caption": "The sole surviving wonder of the ancient world, erected over 4,500 years ago on the Giza plateau.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/1280px-Pyramids_of_the_Giza_Necropolis.jpg"
      },
      {
        "title": "Valley of the Kings & Karnak",
        "caption": "Colossal temple pylons and hypostyle halls in Luxor, ancient Thebes, leading to subterranean pharaonic tombs.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Luxor%2C_Tal_der_K%C3%B6nige_%281995%2C_860x605%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Abu Simbel Temples",
        "caption": "Colossal twin rock temples carved out of the sandstone mountain for Pharaoh Ramesses II overlooking Lake Nasser.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Ramsis%2C_Aswan_Governorate%2C_Egypt_-_panoramio.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "White Desert National Park",
        "caption": "Sahara el Beyda, the White Desert Protected Area, is a national park in Egypt, first established as a protected area in 2002.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Al_Farafrah%2C_New_Valley_Governorate%2C_Egypt_-_panoramio_%2821%29.jpg/330px-Al_Farafrah%2C_New_Valley_Governorate%2C_Egypt_-_panoramio_%2821%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Egyptian cobra",
        "caption": "The Egyptian cobra is one of the most venomous species of snakes inhabiting Northern Africa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Egyptian_Cobra_Snake.jpg/330px-Egyptian_Cobra_Snake.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Ancient Egyptian civilization lasted for over 3,000 years, producing the monumental pyramids, hieroglyphic writing, and papyrus paper.",
      "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years until Lincoln Cathedral was built in England.",
      "The Nile River flows through Egypt from south to north, providing the vital lifeblood that gave rise to ancient agriculture."
    ]
  },
  "er": {
    "landmarks": [
      {
        "title": "Asmara Art Deco Architecture",
        "caption": "UNESCO World Heritage capital city celebrated as 'Little Rome' for hundreds of modernist Italian Futurism buildings.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/87/Asmara_Montage.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Dahlak Archipelago Reefs",
        "caption": "Pristine Red Sea coral island marine park famed for historic pearl diving, sea turtles, and dugongs.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/ISS067-E-939_-_View_of_Earth.jpg/3840px-ISS067-E-939_-_View_of_Earth.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Qohaito Archaeological Ruins",
        "caption": "Ancient pre-Aksumite trading metropolis dating back to the 1st millennium BC perched atop a scenic plateau.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Qohaito%2C_Eritrea_%2833628113490%29.jpg/3840px-Qohaito%2C_Eritrea_%2833628113490%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Dahlak Archipelago",
        "caption": "The Dahlak Archipelago is an Eritrean island group located in the Red Sea, measuring around 643 square km and lying roughly 58 kilometers east of Massawa, the regional capital city.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/ISS067-E-939_-_View_of_Earth.jpg/330px-ISS067-E-939_-_View_of_Earth.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Somali wild ass",
        "caption": "The Somali wild ass is a subspecies of the African wild ass.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Equus_africanus_somaliensis_2_%28cropped%29.jpg/330px-Equus_africanus_somaliensis_2_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Asmara was designated a UNESCO World Heritage site in 2017 for its extraordinarily preserved 1930s Italian modernist and Art Deco architecture.",
      "Eritrea has no single official state language, adopting a multi-linguistic policy recognizing Tigrinya, Arabic, English, and local mother tongues.",
      "The Red Sea coastal waters of Eritrea contain over 350 species of coral and more than 1,000 species of fish."
    ]
  },
  "es": {
    "landmarks": [
      {
        "title": "Sagrada Família in Barcelona",
        "caption": "Antoni Gaudí's visionary basilica with organic forest-like stone pillars and stained glass light.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ef/SF_maig_2_cropped.jpg"
      },
      {
        "title": "The Alhambra of Granada",
        "caption": "Magnificent Moorish palace fortress featuring intricate Islamic geometric stuccowork and gardens.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg"
      },
      {
        "title": "Plaza de España in Seville",
        "caption": "Stunning semicircular palace complex built for the 1929 Ibero-American Expo with tiled alcoves and bridges.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg"
      },
      {
        "title": "Picos de Europa",
        "caption": "The Picos de Europa are a mountain range extending for about 20 km (12 mi), forming part of the Cantabrian Mountains in northern Spain.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Picu_Urriellu.jpg/330px-Picu_Urriellu.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Spanish imperial eagle",
        "caption": "The Spanish imperial eagle, Spanish eagle, Iberian imperial eagle or Adalbert's eagle is a species of eagle native to the Iberian Peninsula.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Aguila_Imperial_Entrando_Al_Posadero_%28125891767%29.jpeg/330px-Aguila_Imperial_Entrando_Al_Posadero_%28125891767%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Spain is the world's leading producer of olive oil, accounting for more than 40% of the entire global supply.",
      "The world's oldest operating restaurant is Sobrino de Botín in Madrid, serving roasted suckling pig continuously since 1725.",
      "Spain's national anthem, the 'Marcha Real', is one of only four national anthems in the world that has no official lyrics."
    ]
  },
  "et": {
    "landmarks": [
      {
        "title": "Rock-Hewn Churches of Lalibela",
        "caption": "Eleven monolithic medieval cave churches chiseled straight down out of solid red volcanic rock in the 12th century.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lalibela%2C_san_giorgio%2C_esterno_24.jpg/3840px-Lalibela%2C_san_giorgio%2C_esterno_24.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Simien Mountains National Park",
        "caption": "Spectacular jagged volcanic peaks and deep precipices, home to the endemic Gelada baboon and Walia ibex.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/be/Semien_Mountains_9.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Danakil Depression & Erta Ale",
        "caption": "One of the hottest and lowest places on Earth, featuring bubbling neon-yellow sulfur springs and lava lakes.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Map_Danakil.jpg/3840px-Map_Danakil.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Simien Mountains National Park",
        "caption": "Simien Mountains National Park is the largest national park in Ethiopia.  Located in the North Gondar Zone of the Amhara Region, its territory covers the highest parts of the Simien Mountains and includes Ras Dashan, the highest point in Ethiopia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Semien_Mountains_9.jpg/330px-Semien_Mountains_9.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Walia ibex",
        "caption": "The Walia ibex is a vulnerable species of ibex.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Walia_ibex_3.jpg/330px-Walia_ibex_3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Ethiopia is the only African nation that was never colonized by European powers, successfully defending its sovereignty at the 1896 Battle of Adwa.",
      "Coffee originated in the ancient forests of Kaffa in southwestern Ethiopia, where coffee beans were first discovered.",
      "Ethiopia follows a unique 13-month solar calendar that is approximately 7 years behind the standard Gregorian calendar."
    ]
  },
  "fi": {
    "landmarks": [
      {
        "title": "Santa Claus Village (Rovaniemi)",
        "caption": "The official hometown of Santa Claus in Finnish Lapland right on the magical Arctic Circle boundary.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Santa_Claus_Village.jpg/3840px-Santa_Claus_Village.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Suomenlinna Sea Fortress",
        "caption": "An expansive 18th-century maritime fortress spanning six interconnected islands in Helsinki harbor.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/af/Suomenlinna_aerial.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Saimaa Labyrinth",
        "caption": "Vast maze of blue water, forested isles, and quiet shores home to the rare endangered Saimaa ringed seal.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/30/Suomen-Salpa.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Koli National Park",
        "caption": "Koli National Park is a national park in the municipalities of Joensuu, Lieksa and Kontiolahti in the North Karelia region of Finland.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Koli_hill_view.jpg/330px-Koli_hill_view.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Saimaa ringed seal",
        "caption": "The Saimaa ringed seal is a species of seal.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Pusa_hispida_saimensis_304551354.jpg/330px-Pusa_hispida_saimensis_304551354.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Finland has consistently been ranked the happiest country in the world by the United Nations World Happiness Report.",
      "There are over 3 million saunas in Finland—more than one sauna for every two citizens!",
      "Known as the 'Land of a Thousand Lakes', Finland actually boasts 187,888 registered natural lakes."
    ]
  },
  "fj": {
    "landmarks": [
      {
        "title": "Mamanuca & Yasawa Islands",
        "caption": "Tropical volcanic islands with turquoise lagoons, white coral beaches, and world-class scuba dive walls.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/31/Mamanuca.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Bouma National Heritage Park in Taveuni",
        "caption": "Protected rainforest on the 'Garden Island' of Taveuni featuring the three cascading Tavoro Waterfalls.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Trisia_Farrelly_ONZM_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Sri Siva Subramaniya Temple in Nadi",
        "caption": "The largest Hindu temple complex in the Southern Hemisphere, celebrated for ornate Dravidian temple carvings.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mamanuca Islands",
        "caption": "The Mamanuca Islands of Fiji are a volcanic archipelago lying to the west of Nadi and to the south of the Yasawa Islands.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Mamanuca.jpg/330px-Mamanuca.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Brachylophus bulabula",
        "caption": "Brachylophus bulabula, commonly known as the Central Fijian banded iguana is a species of iguanid lizard endemic to some of the larger...",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Brachylophus_bulabula_Cologne_Zoo.jpg/330px-Brachylophus_bulabula_Cologne_Zoo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The 180-degree meridian (International Date Line) passes right through Taveuni, Fiji, allowing visitors to stand with one foot in 'today' and one in 'yesterday'.",
      "Fiji's men's rugby sevens team won the nation's first-ever Olympic gold medal at Rio 2016 and defended it at Tokyo 2020.",
      "Traditional kava (yaqona) ceremony is the quintessential social welcome ritual in Fijian culture, shared from a communal coconut shell."
    ]
  },
  "fm": {
    "landmarks": [
      {
        "title": "Nan Madol Megalithic Ruins",
        "caption": "The 'Venice of the Pacific', an ancient stone city built atop 92 artificial islets linked by tidal canals off Pohnpei.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Nan_madol.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Chuuk (Truk) Lagoon Ghost Fleet",
        "caption": "The world's premier wreck diving destination, hosting dozens of Japanese WWII warships and aircraft on the lagoon floor.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/83/Chuuk_Lagoon_Municipalities_map.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Yap Island Rai Stone Money",
        "caption": "Historic limestone circular carved stones measuring up to 3.6 meters across, still used for ceremonial transactions.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/54/Yap_Stone_Money.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Chuuk Lagoon",
        "caption": "Chuuk Lagoon, previously Truk Atoll, is an atoll in the central Pacific Ocean.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Chuuk_Lagoon_Municipalities_map.jpg/330px-Chuuk_Lagoon_Municipalities_map.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Pohnpei lorikeet",
        "caption": "The Pohnpei lorikeet, known as serehd in Pohnpeian, is a species of parrot in the family Psittaculidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Pohnpei_Lorikeet.jpg/330px-Pohnpei_Lorikeet.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Nan Madol on Pohnpei is the only ancient city ever constructed entirely on top of a coral reef, using basalt stone columns weighing tons.",
      "Yap Island is famous for Rai stones, the world's largest stone money discs, quarried in Palau and paddled across hundreds of miles of ocean.",
      "The Federated States of Micronesia comprises 607 islands spread across nearly 2.7 million square kilometers of the western Pacific."
    ]
  },
  "fr": {
    "landmarks": [
      {
        "title": "Eiffel Tower in Paris",
        "caption": "The iconic wrought-iron lattice tower soaring 330 meters above Paris, designed for the 1889 World's Fair.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Eiffel_Tower_from_the_Seine%2C_17_July_2007.jpg"
      },
      {
        "title": "Louvre Museum & Glass Pyramid",
        "caption": "The world's largest art museum and historic royal palace, housing the Mona Lisa and Winged Victory.",
        "url": "https://thumb.wikimedia.org/wikipedia/en/thumb/4/42/Louvre_Pyramid.jpg/3840px-Louvre_Pyramid.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mont-Saint-Michel",
        "caption": "The gravity-defying medieval Benedictine abbey perched on a rocky tidal island off Normandy.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Mont-Saint-Michel_vu_du_ciel.jpg/3840px-Mont-Saint-Michel_vu_du_ciel.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Verdon Gorge",
        "caption": "The Verdon Gorge is a river canyon located in the Provence-Alpes-Côte d'Azur region of Southeastern France.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Verdon_Gorge_1.jpg/330px-Verdon_Gorge_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Chamois",
        "caption": "The chamois, or Alpine chamois, is a species of goat-antelope native to mountainous parts of Europe and Western Asia, from the Pyrenees...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/064_Wild_Chamois_Parc_r%C3%A9gional_Chasseral_Photo_by_Giles_Laurent.jpg/330px-064_Wild_Chamois_Parc_r%C3%A9gional_Chasseral_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "France is the world's most visited country, welcoming over 100 million international tourists each year.",
      "It produces over 1,500 distinct varieties of registered cheese, celebrated by French culinary heritage.",
      "Mont Blanc (4,808 m) in the French Alps is the highest mountain summit in Western Europe."
    ]
  },
  "ga": {
    "landmarks": [
      {
        "title": "Loango National Park",
        "caption": "The 'Africa's Last Eden', famous for surfing hippos, forest elephants, and red river hogs on uninhabited Atlantic beaches.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/African_Forest_Buffalo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lopé National Park",
        "caption": "UNESCO-listed mosaic of ancient tropical rainforest and relic savanna preserving 400,000 years of human habitation.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Lop%C3%A9_National_Park_river_crop.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ivindo National Park & Kongou Falls",
        "caption": "Magnificent wild blackwater waterfalls plunging through pristine virgin rainforest in north-eastern Gabon.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/10/Waterfall_ivindo_gabon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ivindo National Park",
        "caption": "Ivindo National Park is a national park in east-central Gabon in Central Africa, straddling the border of the Ogooué-Ivindo and Ogooué-Lolo provinces.  Its creation was announced in August 2002 by then-President Omar Bongo at the Earth Summit in Johannesburg, along with Gabon's 12 other terrestrial national parks.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Waterfall_ivindo_gabon.jpg/330px-Waterfall_ivindo_gabon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Western lowland gorilla",
        "caption": "The western lowland gorilla is one of two critically endangered subspecies of the western gorilla that lives in montane, primary and...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/WesternLowlandGorilla03.jpg/330px-WesternLowlandGorilla03.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "More than 85% of Gabon is covered by lush equatorial rainforest, making it the second-most forested country on Earth after Suriname.",
      "In 2002, Gabon's government designated over 11% of its entire national territory as a network of 13 protected national parks.",
      "Loango National Park is one of the only places on Earth where wild hippos and elephants can be seen roaming Atlantic ocean beaches."
    ]
  },
  "gb": {
    "landmarks": [
      {
        "title": "Big Ben & Palace of Westminster",
        "caption": "The iconic neo-Gothic clock tower and British Parliament buildings along the River Thames in London.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/87/Clock_Tower_-_Big_Ben_London.jpg"
      },
      {
        "title": "Stonehenge",
        "caption": "Prehistoric monument of colossal standing sarsen and bluestones aligned with the summer solstice in Wiltshire.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Edinburgh Castle",
        "caption": "Historic fortress perched dramatically on the volcanic plug of Castle Rock, dominating Scotland's capital.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/59/City_of_Edinburgh_-_Edinburgh_Castle_-_20140421004403.jpg"
      },
      {
        "title": "Giant's Causeway",
        "caption": "The Giant's Causeway is an area of approximately 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption,...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Causeway-code_poet-4.jpg/330px-Causeway-code_poet-4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "European robin",
        "caption": "The European robin, known simply as the robin or robin redbreast in the British Isles, is a small insectivorous passerine bird belonging...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Erithacus_rubecula_with_cocked_head.jpg/330px-Erithacus_rubecula_with_cocked_head.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The United Kingdom is the birthplace of modern parliamentary democracy, the Industrial Revolution, football, cricket, and rugby.",
      "The British Library in London holds over 170 million cataloged items, adding roughly 3 million new items each year.",
      "No place in the entire United Kingdom is more than 113 kilometers (70 miles) away from the sea."
    ]
  },
  "gd": {
    "landmarks": [
      {
        "title": "Grand Anse Beach",
        "caption": "World-famous 3-kilometer crescent of soft white sand sheltered from Atlantic swells near Saint George's.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/David_Emmanuel_2007.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Molinere Underwater Sculpture Park",
        "caption": "The world's first underwater sculpture garden, created by artist Jason deCaires Taylor to foster coral reef regeneration.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Underwater_sculptures_at_Molinere_Underwater_Sculpture_Park.jpg/3840px-Underwater_sculptures_at_Molinere_Underwater_Sculpture_Park.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Annandale & Concord Falls",
        "caption": "Picturesque tropical waterfalls tumbling into clear swimming basins surrounded by wild nutmeg and spice trees.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Unnamed_Road%2C_Grenada_-_panoramio_%283%29.jpg/3840px-Unnamed_Road%2C_Grenada_-_panoramio_%283%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Carriacou",
        "caption": "Carriacou is an island of the Grenadine Islands.  It is a part of the nation of Grenada and is located in the south-eastern Caribbean Sea, northeast of the island of Grenada and the north coast of South America.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Hillsborough_Carriacou.jpg/330px-Hillsborough_Carriacou.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mona monkey",
        "caption": "The mona monkey is an Old World monkey that lives in western Africa between Ghana and Cameroon.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Mona_monkey_-_Grand_Etang_Lake_-_Grenada_-_2.jpg/330px-Mona_monkey_-_Grand_Etang_Lake_-_Grenada_-_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Grenada is universally known as the 'Isle of Spice' because it is one of the world's largest producers of nutmeg, mace, and cinnamon.",
      "Nutmeg is so central to Grenada's cultural and economic identity that it is depicted directly on its national flag.",
      "Grenada opened the world's very first underwater sculpture gallery at Molinere Bay in 2006."
    ]
  },
  "ge": {
    "landmarks": [
      {
        "title": "Gergeti Trinity Church & Kazbek",
        "caption": "14th-century mountain church perched at 2,170 meters against the backdrop of Mount Kazbek.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Gergeti_Trinity_Church_09.23.jpg/3840px-Gergeti_Trinity_Church_09.23.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Narikala Fortress in Tbilisi",
        "caption": "Ancient coastal fortress overlooking Tbilisi and the Mtkvari River, accessed by scenic aerial cable car.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Tbilisi_IMG_8846_1920.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Vardzia Cave City",
        "caption": "Magnificent 12th-century subterranean monastery and fortress carved into the Erusheti Mountain.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/2025-05-25_Vardzia_9.jpg/3840px-2025-05-25_Vardzia_9.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mount Kazbek",
        "caption": "Mount Kazbek or Mount Kazbegi is a dormant stratovolcano and one of the major mountains of the Caucasus, located in Georgia, just south...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Kazbegi%2C_Mount_Kazbek%2C_Georgia.jpg/330px-Kazbegi%2C_Mount_Kazbek%2C_Georgia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Caucasian snowcock",
        "caption": "The Caucasian snowcock is a snowcock in the pheasant family Phasianidae of the order Galliformes, gallinaceous birds.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Caucasian_Snowcock_iNaturalist.jpg/330px-Caucasian_Snowcock_iNaturalist.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Archaeological discoveries confirm Georgia as the birthplace of winemaking, with continuous production dating back 8,000 years in clay Qvevri vessels.",
      "Georgian is written in its own unique, elegant 33-letter script (Mkhedruli), one of the only unique writing systems in use today.",
      "Ushguli in Svaneti, Georgia, is one of the highest continuously inhabited settlements in Europe at 2,200 meters."
    ]
  },
  "gh": {
    "landmarks": [
      {
        "title": "Cape Coast Castle",
        "caption": "Monumental coastal stone fortress and UNESCO World Heritage memorial of the historic transatlantic trade.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Cape_Coast_Castle%2C_Cape_Coast%2C_Ghana.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kakum National Park Canopy Walkway",
        "caption": "Thrilling 350-meter suspended canopy rope walkway strung 40 meters high across tropical rainforest treetops.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/16/Kakum.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Volta",
        "caption": "The largest artificial reservoir in the world by surface area (8,502 sq km), formed by the Akosombo Dam.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Adomi-bridge_0418.png/3840px-Adomi-bridge_0418.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mole National Park",
        "caption": "Mole National Park, one of Ghana's seven national parks, is the country's largest wildlife refuge.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Elefant_Ghana.jpg/330px-Elefant_Ghana.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "African elephant",
        "caption": "African elephants are members of the genus Loxodonta comprising two living elephant species, the African bush elephant and the smaller...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/330px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "In 1957, Ghana became the very first sub-Saharan African nation to gain independence from colonial rule.",
      "Lake Volta in Ghana is the world's largest man-made reservoir by surface area, covering roughly 3.6% of the country's total land.",
      "Ghana is renowned for its hand-woven Kente cloth, an exquisite silk-and-cotton textile historically worn by Ashanti royalty."
    ]
  },
  "gm": {
    "landmarks": [
      {
        "title": "Kunta Kinteh Island (James Island)",
        "caption": "Historic UNESCO-listed fortified river island in the Gambia River, memorial of the transatlantic slave trade.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/00/River_gambia_galleryfull.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Wassu Stone Circles",
        "caption": "Ancient megalithic laterite stone circles dating between the 3rd century BC and 16th century AD.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/54/Wassu_Stone_Circle.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Abuko Nature Reserve",
        "caption": "Biodiverse gallery forest reserve protecting green vervet monkeys, Nile crocodiles, and over 270 bird species.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Gambia_abuko_001.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "River Gambia National Park",
        "caption": "River Gambia National Park is a national park in the Gambia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Rijeka_Gambija_2026.jpg/330px-Rijeka_Gambija_2026.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hippopotamus",
        "caption": "The hippopotamus, often shortened to hippo, further qualified as the common hippopotamus, Nile hippopotamus and river hippopotamus, is a...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Portrait_Hippopotamus_in_the_water.jpg/330px-Portrait_Hippopotamus_in_the_water.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Gambia is the smallest sovereign country in mainland Africa, tracing a narrow strip of land along both banks of the Gambia River.",
      "In national elections, Gambian citizens traditionally vote by dropping a glass marble into color-coded drums attached to bicycle bells.",
      "Kunta Kinteh, the protagonist of Alex Haley's novel Roots, was born in Juffureh along the Gambia River."
    ]
  },
  "gn": {
    "landmarks": [
      {
        "title": "Fouta Djallon Highlands",
        "caption": "Scenic highland plateau known as the 'Water Tower of West Africa', source of the Niger, Senegal, and Gambia rivers.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Guinea_Highlands_map.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Dame de Mali (Lady of Mali)",
        "caption": "Monumental natural rock formation resembling the profile of a woman carved into Mount Loura.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Keita%2C_1966_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Nimba Biosphere",
        "caption": "High mountain crest in the south-east preserving unique montane grasslands and tool-using wild chimpanzees.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Nimba_Range.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Nimba Strict Nature Reserve",
        "caption": "Mount Nimba Strict Nature Reserve is a protected area and UNESCO World Heritage Site located in both Guinea and Côte d'Ivoire, extending...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Nimba_Range.jpg/330px-Nimba_Range.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Western chimpanzee",
        "caption": "The western chimpanzee or West African chimpanzee is a critically endangered subspecies of the common chimpanzee.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Chimpanz%C3%A9_de_Bossou_27.jpg/330px-Chimpanz%C3%A9_de_Bossou_27.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Fouta Djallon highlands are known as the 'Water Tower of West Africa' as they form the headwaters of the Niger, Gambia, and Senegal rivers.",
      "Guinea possesses roughly one-third of the world's total known reserves of bauxite, the principal ore of aluminum.",
      "Traditional Guinean djembe drumming and the National Ballet of Guinea (Ballets Africains) helped popularize West African percussion globally."
    ]
  },
  "gq": {
    "landmarks": [
      {
        "title": "Malabo Cathedral & Santa Isabel",
        "caption": "Neo-Gothic cathedral designed by architect Luis Segarra Llairadó on Bioko Island overlooking the harbor.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/74/Hotel_de_Federaciones_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Pico Basilé Peak",
        "caption": "Extinct volcanic peak (3,011 m) dominating Bioko Island, providing panoramic views across the Gulf of Guinea.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/15/Pico_Basil%C3%A9.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Monte Alén National Park",
        "caption": "Dense tropical rainforest reserve in mainland Río Muni sheltering gorillas, chimpanzees, and forest elephants.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/96/Nationalpark_Monte_Al%C3%A9n_%28Tafel%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Monte Alén National Park",
        "caption": "Monte Alén National Park is located near the center of Equatorial Guinea.  It was established in 1990.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Nationalpark_Monte_Al%C3%A9n_%28Tafel%29.jpg/330px-Nationalpark_Monte_Al%C3%A9n_%28Tafel%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Goliath frog",
        "caption": "The goliath frog, otherwise known commonly as the giant slippery frog and the goliath bullfrog, is a species of frog in the family...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Conraua_goliath_photo_from_iNaturalist_539752953.jpg/330px-Conraua_goliath_photo_from_iNaturalist_539752953.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Equatorial Guinea is the only independent sovereign country in mainland Africa where Spanish is an official language.",
      "The capital city, Malabo, is situated on Bioko Island in the Atlantic Ocean, while a large portion of the territory lies on the African mainland.",
      "It is constructing a brand-new planned administrative capital city named Ciudad de la Paz (formerly Oyala) in the mainland interior."
    ]
  },
  "gr": {
    "landmarks": [
      {
        "title": "The Acropolis & Parthenon",
        "caption": "Ancient citadel crowned by the Parthenon temple, immortal monument to the golden age of classical Athens.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Santorini Caldera & Oia Village",
        "caption": "Dazzling whitewashed cliffside villages with blue-domed churches perched high above volcanic Aegean waters.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Oia_sunset_-_panoramio_%282%29.jpg/3840px-Oia_sunset_-_panoramio_%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Meteora Monasteries",
        "caption": "Incredible Eastern Orthodox monasteries perched atop towering sheer sandstone rock pillars in Thessaly.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Meteora%27s_monastery_2.jpg/3840px-Meteora%27s_monastery_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Samaria Gorge",
        "caption": "The Samariá Gorge is a\nNational Park of Greece since 1962 on the island of Crete – a major tourist attraction of the island – and a...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Landkarte_Westkreta.jpg/330px-Landkarte_Westkreta.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Kri-kri",
        "caption": "The kri-kri, sometimes called the Cretan goat, Agrimi, or Cretan Ibex, is a feral goat inhabiting the Eastern Mediterranean, previously...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Male_and_female_Cretan_ibex.jpg/330px-Male_and_female_Cretan_ibex.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Greece is universally hailed as the birthplace of Western democracy, theater, philosophy, literature, and the Olympic Games.",
      "It features thousands of islands and islets, with roughly 227 inhabited across the Ionian and Aegean Seas.",
      "Greece enjoys an average of over 250 sunny days per year, with Rhodes enjoying roughly 300 days of sunshine."
    ]
  },
  "gt": {
    "landmarks": [
      {
        "title": "Tikal Ancient Maya Metropolis",
        "caption": "Monumental Maya ruins deep in the Petén jungle featuring towering steep limestone temple pyramids rising above the canopy.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Tikal_3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Atitlán & Volcanoes",
        "caption": "Magnificent volcanic caldera lake ringed by three volcanoes and traditional indigenous Maya highland villages.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Lago_de_Atitlan_seen_from_orbit.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Antigua Guatemala",
        "caption": "Historic colonial capital famous for preserved Spanish Baroque architecture, ruins, and cobblestone streets beneath Volcán de Agua.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Ciudad_de_Guatemala%2C_CA.jpg/3840px-Ciudad_de_Guatemala%2C_CA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lake Atitlán",
        "caption": "Lake Atitlán is a large natural lake in the Guatemalan Highlands of the Sierra Madre mountain range.  The lake is located in the Sololá Department of southwestern Guatemala.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Lago_de_Atitlan_seen_from_orbit.jpg/330px-Lago_de_Atitlan_seen_from_orbit.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Resplendent quetzal",
        "caption": "The resplendent quetzal is a small bird found in Central America and southern Mexico that lives in tropical forests, particularly...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Resplendent_quetzal_san_gerardo_de_dota_3.31.24_DSC_3989-topaz-denoiseraw.jpg/330px-Resplendent_quetzal_san_gerardo_de_dota_3.31.24_DSC_3989-topaz-denoiseraw.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Tikal was one of the greatest urban centers of the ancient Maya civilization, housing up to 100,000 residents at its peak.",
      "The quetzal, a brilliantly colored emerald and crimson bird with long tail feathers, is the national symbol and currency of Guatemala.",
      "More than 20 distinct Mayan languages are officially recognized and actively spoken across Guatemala today."
    ]
  },
  "gw": {
    "landmarks": [
      {
        "title": "Bijagós Archipelago Biosphere",
        "caption": "Untouched Atlantic archipelago of 88 islands home to saltwater hippopotamuses, sea turtles, and mangrove labyrinths.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/L%27Archipel_des_Bijagos_vu_par_Sentinel_2.jpg/3840px-L%27Archipel_des_Bijagos_vu_par_Sentinel_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Orango National Park",
        "caption": "Protected coastal island park famous for rare saltwater-adapted marine hippos that swim in ocean surf.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Lagoa_com_hipop%C3%B3tamos_02.jpg/3840px-Lagoa_com_hipop%C3%B3tamos_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Historic Bissau Velho",
        "caption": "Charming colonial old quarter in Bissau with pastel Portuguese architecture and bustling fish markets.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/Fortaleza_de_S%C3%A3o_Jos%C3%A9_da_Amura%2C_Bissau.jpg"
      },
      {
        "title": "Bijagós Islands",
        "caption": "The Bijagós Islands, often misspelled Bijagos in English text and formerly known in English as Bissagots, are a group of about 88...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/L%27Archipel_des_Bijagos_vu_par_Sentinel_2.jpg/330px-L%27Archipel_des_Bijagos_vu_par_Sentinel_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "African manatee",
        "caption": "The African manatee, also known as the West African manatee, is a species of manatee that inhabits much of Western Africa – from Senegal...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/African_manatee_at_Coex_Aquarium%2C_South_Korea.jpg/330px-African_manatee_at_Coex_Aquarium%2C_South_Korea.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Bijagós Archipelago in Guinea-Bissau is home to one of the world's only known populations of saltwater-swimming hippopotamuses.",
      "The Bijagós society is matrilineal, where women hold central authority in spiritual affairs, law, and land ownership.",
      "Cashew nuts are the cornerstone of the national economy, with Guinea-Bissau ranking among the world's top cashew exporters."
    ]
  },
  "gy": {
    "landmarks": [
      {
        "title": "Kaieteur Falls",
        "caption": "The world's largest single-drop waterfall by volume, plunging 226 meters (four times taller than Niagara) into a pristine jungle canyon.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e2/GuyanaKaieteurFalls2004.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Roraima Plateau",
        "caption": "Towering sheer flat-topped tepui mountain sharing borders with Venezuela and Brazil, inspiring Arthur Conan Doyle's The Lost World.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Roraima3_%2879%29.JPG/3840px-Roraima3_%2879%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "St. George's Cathedral in Georgetown",
        "caption": "One of the tallest freestanding wooden Gothic Revival church buildings in the world, soaring 43 meters high.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/20191121_Guyana_0048_Georgetown_sRGB_%2849295795336%29.jpg/3840px-20191121_Guyana_0048_Georgetown_sRGB_%2849295795336%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Kaieteur Falls",
        "caption": "Kaieteur Falls is one of the most powerful single-drop waterfalls in the world.  It is located on the Potaro River in Kaieteur National Park, central Essequibo Territory, Guyana.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/GuyanaKaieteurFalls2004.jpg/330px-GuyanaKaieteurFalls2004.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Jaguar",
        "caption": "The jaguar is a large cat species and the only living member of the genus Panthera that is native to the Americas.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/330px-Standing_jaguar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Kaieteur Falls is about four times higher than Niagara Falls and twice as high as Victoria Falls for a single-drop waterfall.",
      "Guyana is the only English-speaking country in South America, maintaining strong cultural ties with the Caribbean Community.",
      "Over 80% of Guyana's territory is covered by intact, dense primary Amazonian rainforest."
    ]
  },
  "hn": {
    "landmarks": [
      {
        "title": "Copán Ruinas & Hieroglyphic Stairway",
        "caption": "Major Maya ceremonial center famous for elaborate high-relief stone stelae and the longest carved Maya text in the Americas.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/da/Copanruinas.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Roatán Island & West Bay Beach",
        "caption": "Idyllic Bay Island surrounded by pristine Mesoamerican barrier coral reefs, world-famous for scuba diving.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/58/Westbay2106.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Río Plátano Biosphere Reserve",
        "caption": "One of the few remaining large tropical rainforests in Central America, home to jaguars, tapirs, and indigenous peoples.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Cerro_Chachahuate.jpg/3840px-Cerro_Chachahuate.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Río Plátano Biosphere Reserve",
        "caption": "The Río Plátano Biosphere Reserve is a protected area in the Gracias a Dios department region on the Caribbean coast of Honduras.  With a total area of 5,250 square kilometers (2,030 mi2), most of the reserve runs along the Río Plátano.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Cerro_Chachahuate.jpg/330px-Cerro_Chachahuate.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "White-tailed deer",
        "caption": "The white-tailed deer, also known commonly as the whitetail and the Virginia deer, is a medium-sized species of deer native to North and...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/White-tailed_deer.jpg/330px-White-tailed_deer.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Hieroglyphic Stairway at Copán features over 2,000 individual carved glyphs, the longest known Maya hieroglyphic inscription in the world.",
      "Honduras was the first country to establish a dedicated national marine reserve for the protection of whale sharks.",
      "The annual 'Lluvia de Peces' (Rain of Fish) in Yoro is a folklore meteorological phenomenon where small fish are found on the ground after heavy storms."
    ]
  },
  "hr": {
    "landmarks": [
      {
        "title": "Dubrovnik Old City Walls",
        "caption": "Imposing medieval stone walls encircling the historic Adriatic port city known as the 'Pearl of the Adriatic'.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Dubrovnik_s_24.jpg/3840px-Dubrovnik_s_24.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Plitvice Lakes National Park",
        "caption": "A chain of 16 terraced crystal-clear lakes linked by cascading waterfalls across karst canyon limestone.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/39/View_in_Plitvice_Lakes_National_Park.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Diocletian's Palace in Split",
        "caption": "An expansive 4th-century Roman retirement fortress palace forming the bustling living heart of modern Split.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Croatia-01239_-_The_Peristil_%289551533404%29.jpg/3840px-Croatia-01239_-_The_Peristil_%289551533404%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Kornati",
        "caption": "The Kornati archipelago of Croatia, also known as the Stomorski islands, is located in the northern part of Dalmatia, south from Zadar and west from Šibenik, in the Šibenik-Knin County.  With 35 kilometres length and 89 islands, some large, some small, in a sea area of about 320 square kilometres (124 sq mi), the Kornati are the densest archipelago in the Mediterranean Sea.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Kornati.jpg/330px-Kornati.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Eurasian lynx",
        "caption": "The Eurasian lynx is one of the four extant species within the medium-sized wild cat genus Lynx.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Lynx_Nationalpark_Bayerischer_Wald_01.jpg/330px-Lynx_Nationalpark_Bayerischer_Wald_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Dalmatian dog breed traces its historic origin to the coastal Dalmatia region of Croatia.",
      "The necktie (cravat) was invented in Croatia, originating from linen neckerchiefs worn by Croatian mercenaries in the 17th century.",
      "Croatia comprises over 1,200 islands and islets scattered across the sparkling sapphire Adriatic Sea."
    ]
  },
  "ht": {
    "landmarks": [
      {
        "title": "Citadelle Laferrière",
        "caption": "Monumental early 19th-century mountain fortress perched atop Bonnet à l'Évêque, the largest fortress in the Americas.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/76/Citadelle_Laferri%C3%A8re.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Sans-Souci Palace",
        "caption": "The royal residence of King Henri I in Milot, renowned as the 'Versailles of the Caribbean'.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Palais_du_sans-soucis.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Bassin Bleu Waterfalls",
        "caption": "Hidden natural turquoise pools and waterfalls secluded within lush limestone grottos near Jacmel.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/94/Bassin_Bleu%2C_Haiti.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Pic la Selle",
        "caption": "Pic la Selle, also called Morne La Selle, is the highest peak in Haiti at 2,574 metres (8,445 ft) above sea level.  The mountain is part of the Chaîne de la Selle mountain range and has a pine forest.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Pic_La_Selle%2C_point_culminant_d%27Ha%C3%AFti.jpg/330px-Pic_La_Selle%2C_point_culminant_d%27Ha%C3%AFti.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hispaniolan trogon",
        "caption": "The Hispaniolan trogon is a species of bird in the family Trogonidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Hispaniolan_Trogon_%28Priotelus_roseigaster%29_%288082799519%29.jpg/330px-Hispaniolan_Trogon_%28Priotelus_roseigaster%29_%288082799519%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Haiti was the first nation in Latin America and the Caribbean to achieve independence, and the first independent republic founded by former slaves (1804).",
      "Citadelle Laferrière is the largest fortress in the Americas, built by tens of thousands of workers to defend the young republic.",
      "Haitian Creole and French are both official languages, with Creole spoken by virtually the entire population."
    ]
  },
  "hu": {
    "landmarks": [
      {
        "title": "Hungarian Parliament Building",
        "caption": "Gothic Revival masterpiece situated majestically on the banks of the Danube River in Budapest.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Hungarian_Parliament_Building_from_across_the_Danube%2C_2025-01-11.jpg/3840px-Hungarian_Parliament_Building_from_across_the_Danube%2C_2025-01-11.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Buda Castle & Fisherman's Bastion",
        "caption": "Fairytale neo-Romanesque rampart towers offering sweeping panoramic views across the Danube and Pest.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Hal%C3%A1szb%C3%A1stya_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Széchenyi Thermal Baths",
        "caption": "One of Europe's largest natural geothermal spa complexes, renowned for steaming outdoor mineral pools.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Budapest_Sz%C3%A9chenyi_Baths_R02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Hortobágy National Park",
        "caption": "Hortobágy is an 800 km2 national park in eastern Hungary.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Hortobagy-ziehbrunnen.jpg/330px-Hortobagy-ziehbrunnen.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hungarian Grey",
        "caption": "The Hungarian Grey, also known as the Hungarian Grey Steppe, is a Hungarian breed of beef cattle.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Magyar_sz%C3%BCrkemarha_%28cropped%29.jpg/330px-Magyar_sz%C3%BCrkemarha_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Rubik's Cube was invented in 1974 by Hungarian architect and professor Ernő Rubik in Budapest.",
      "Budapest has more than 100 natural geothermal mineral water springs, earning it the title 'City of Spas'.",
      "The Budapest Millennium Underground Railway (Line M1), opened in 1896, is the oldest electric underground railway in continental Europe."
    ]
  },
  "id": {
    "landmarks": [
      {
        "title": "Borobudur Temple",
        "caption": "The largest Buddhist temple in the world, an 8th-century stone stupa pyramid adorned with 504 Buddha statues.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Pradaksina.jpg/3840px-Pradaksina.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Raja Ampat Islands",
        "caption": "Pristine archipelago in West Papua renowned as the global epicenter of marine biodiversity and coral reef life.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Raja_Ampat_Islands_-_journal.pbio.1001457.g001.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Bromo Volcano",
        "caption": "Active volcanic caldera rising dramatically from the Sea of Sand desert on Java, revered for sunrise panoramas.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bromo-Semeru-Batok-Widodaren.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Bromo",
        "caption": "The Bromo, or Mount Bromo, is an active somma volcano, a Hindu pilgrimage site, and part of the Tengger mountains, in East Java, Indonesia.  At 2,329 meters (7,641 ft), it is not the highest peak of the massif, but is the most active and famous.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Bromo-Semeru-Batok-Widodaren.jpg/330px-Bromo-Semeru-Batok-Widodaren.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Komodo dragon",
        "caption": "The Komodo dragon, also known as the Komodo monitor, is a large reptile of the monitor lizard family Varanidae that is endemic to the...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/202306_Varanus_komodoensis.jpg/330px-202306_Varanus_komodoensis.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Indonesia is the largest island nation on Earth, comprising over 17,500 islands stretching across 5,000 kilometers.",
      "It is home to the Komodo dragon, the world's largest living lizard species, found only in Komodo National Park.",
      "Indonesia has more active volcanoes than any other country in the world, with over 130 active peaks."
    ]
  },
  "ie": {
    "landmarks": [
      {
        "title": "Cliffs of Moher",
        "caption": "Dramatic Atlantic coastal sea cliffs soaring over 214 meters straight out of the ocean in County Clare.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Cliffs-Of-Moher-OBriens-From-South.JPG/3840px-Cliffs-Of-Moher-OBriens-From-South.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Trinity College Long Room Library",
        "caption": "Magnificent 65-meter oak-vaulted library in Dublin housing the ancient illuminated manuscript Book of Kells.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Long_Room_Interior%2C_Trinity_College_Dublin%2C_Ireland_-_Diliff.jpg/3840px-Long_Room_Interior%2C_Trinity_College_Dublin%2C_Ireland_-_Diliff.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Rock of Cashel",
        "caption": "Historic ecclesiastical fortress and seat of ancient Munster kings set upon a limestone outcrop.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/13/Rock_of_Cashel_%2849163525453%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ring of Kerry",
        "caption": "The Ring of Kerry is a 179-kilometre-long (111-mile) circular tourist route in County Kerry, south-western Ireland.  Clockwise from Killarney it follows the N71 to Kenmare, then the N70 around the Iveragh Peninsula to Killorglin – passing through Sneem, Waterville, Cahersiveen, and Glenbeigh – before returning to Killarney via the N72.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Atlantic_Ocean%2C_Ring_of_Kerry_%28506559%29_%2827964189752%29.jpg/330px-Atlantic_Ocean%2C_Ring_of_Kerry_%28506559%29_%2827964189752%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lepus timidus hibernicus",
        "caption": "Lepus timidus hibernicus, more commonly known as the Irish hare, is a subspecies of the mountain hare that is native to the island of...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Irish_Mountain_Hare_imported_from_iNaturalist_photo_322047161_on_22_April_2024.jpg/330px-Irish_Mountain_Hare_imported_from_iNaturalist_photo_322047161_on_22_April_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The harp is the official national symbol of Ireland, making it the only country in the world with a musical instrument as its national emblem.",
      "There are naturally no wild snakes in Ireland; the island has been snake-free since the last Ice Age.",
      "Halloween originated in ancient Ireland from the Celtic pagan harvest festival of Samhain over 2,000 years ago."
    ]
  },
  "il": {
    "landmarks": [
      {
        "title": "Old City of Jerusalem & Western Wall",
        "caption": "Sacred limestone rampart and holy quarter revered by Judaism, Christianity, and Islam.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/2014-06_East_Jerusalem_090_%2814936890061%29.jpg/3840px-2014-06_East_Jerusalem_090_%2814936890061%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Masada Desert Fortress",
        "caption": "Ancient mountain plateau fortress overlooking the Dead Sea, built by King Herod with panoramic desert vistas.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/14/Israel-2013-Aerial_21-Masada.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Bahá'í Terraced Gardens in Haifa",
        "caption": "Nineteen cascading floral garden terraces climbing Mount Carmel to the golden Shrine of the Báb.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/6e/TerracesBenGurion2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Dead Sea",
        "caption": "The Dead Sea, also known by other names, is a landlocked salt lake bordered by Jordan to the east, the West Bank to the west and Israel...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Dead_Sea_beach_00.JPG/330px-Dead_Sea_beach_00.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Nubian ibex",
        "caption": "The Nubian ibex is a desert-dwelling species of goat found in mountainous areas of northern and northeast Africa, and the Middle East.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/PikiWiki_Israel_38769_Male_Ibex.jpg/330px-PikiWiki_Israel_38769_Male_Ibex.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Dead Sea, bordered by Israel and Jordan, is the lowest elevation of land on the surface of the Earth at 430 meters below sea level.",
      "Israel has one of the highest densities of tech startups per capita in the world, giving rise to its nickname 'Silicon Wadi'.",
      "Hebrew is the only known historic language that has been successfully revived from an extinct spoken tongue into an everyday national language."
    ]
  },
  "in": {
    "landmarks": [
      {
        "title": "The Taj Mahal in Agra",
        "caption": "The ivory-white marble mausoleum commissioned in 1631 by Mughal Emperor Shah Jahan for Mumtaz Mahal.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Amber Fort in Jaipur",
        "caption": "Opulent hilltop sandstone fortress blending Hindu and Mughal styles overlooking Maota Lake.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg/3840px-20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Varanasi Ghats along the Ganges",
        "caption": "Sacred riverside steps in one of the world's oldest continuously inhabited cities where pilgrims perform sacred rituals.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/3840px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Valley of Flowers National Park",
        "caption": "Valley of Flowers National Park is an Indian national park which was established in 1982.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Valley_of_flowers_national_park%2C_Uttarakhand%2C_India_03_%28edit%29.jpg/330px-Valley_of_flowers_national_park%2C_Uttarakhand%2C_India_03_%28edit%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Bengal tiger",
        "caption": "The Bengal tiger is a population of the Panthera tigris tigris subspecies.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg/330px-Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "India is the world's largest democracy and the most populous nation on Earth.",
      "Yoga originated in ancient northern India over 5,000 years ago as a discipline uniting body, mind, and spirit.",
      "The mathematical concept of zero (Shunya) and the decimal place-value system were invented by ancient Indian mathematicians."
    ]
  },
  "iq": {
    "landmarks": [
      {
        "title": "Citadel of Erbil",
        "caption": "Ancient fortified tell settlement continuously inhabited for over 6,000 years, rising high above modern Erbil.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/34/Hawler_Castle.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ruins of Ancient Babylon & Ishtar Gate",
        "caption": "Legendary capital of Mesopotamia along the Euphrates River, home to Hammurabi's Code and King Nebuchadnezzar.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Ishtar_Gate.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Great Mosque of Samarra & Spiral Minaret",
        "caption": "9th-century Abbasid mosque featuring the iconic 52-meter freestanding spiral conical minaret.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Samrraa_05.jpg/3840px-Samrraa_05.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mesopotamian Marshes",
        "caption": "The Mesopotamian Marshes, also known as the Iraqi Marshes, are a wetland area located in southern Iraq and southwestern Iran as well as...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Chibaish_Marches%2C_Iraq_-_An_Nasiriyah.jpg/330px-Chibaish_Marches%2C_Iraq_-_An_Nasiriyah.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Euphrates softshell turtle",
        "caption": "The Euphrates softshell turtle, also known as the Mesopotamian softshell turtle, is a species of softshell turtle in the family...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Req%C3%AA_s%C3%AAlane.jpg/330px-Req%C3%AA_s%C3%AAlane.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Mesopotamia ('the land between the rivers' Tigris and Euphrates) is widely recognized as the Cradle of Civilization.",
      "The ancient Sumerians of Iraq invented the world's first written language (cuneiform), the wheel, and the 60-minute hour.",
      "The Code of Hammurabi, written in Babylon around 1750 BC, is one of the oldest deciphered legal codes in human history."
    ]
  },
  "ir": {
    "landmarks": [
      {
        "title": "Persepolis Ancient Ruins",
        "caption": "The monumental ceremonial capital of the Achaemenid Persian Empire founded by Darius the Great in 518 BC.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Achaemenid_Empire_500_BCE.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Naqsh-e Jahan Square in Isfahan",
        "caption": "One of the largest city squares in the world, framed by the Shah Mosque, Sheikh Lotfollah Mosque, and Ali Qapu.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/41/Naqsh-e_Rustam_necropolis_in_Iran.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Nasir al-Mulk (Pink Mosque)",
        "caption": "Stunning Qajar-era mosque in Shiraz famous for intricate kaleidoscopic stained-glass morning light reflections.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Nasir_al-Din_Tusi.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Damavand",
        "caption": "Mount Damavand is a dormant stratovolcano in Iran.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/981012-Damavand-South-IMG_9861-2.jpg/330px-981012-Damavand-South-IMG_9861-2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Asiatic cheetah",
        "caption": "The Asiatic cheetah is a critically endangered cheetah subspecies currently surviving in Iran.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Delbar_%28Iranian_Cheetah%29_01_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      }
    ],
    "facts": [
      "Persian civilization is one of the world's oldest continuous civilizations, with urban settlements dating back to 4000 BC.",
      "The Persian windmill (panemone) was invented in eastern Persia around the 7th–9th century to grind grain.",
      "Iran is the world's leading producer of saffron, harvesting over 90% of the globe's total 'red gold' crop."
    ]
  },
  "is": {
    "landmarks": [
      {
        "title": "The Blue Lagoon",
        "caption": "World-famous geothermal spa fed by warm, mineral-rich milky-cyan volcanic waters in a lava field.",
        "url": "https://thumb.wikimedia.org/wikipedia/en/thumb/0/00/Blue_Lagoon_Main_Building.JPG/3840px-Blue_Lagoon_Main_Building.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Gullfoss Waterfall & Geysir",
        "caption": "Dramatic golden tiered waterfall plunging into a rugged canyon along Iceland's Golden Circle route.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/18/Gullfoss_from_the_Air_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Jökulsárlón Glacier Lagoon",
        "caption": "Deep glacial lagoon dotted with luminous blue icebergs drifting out towards the black volcanic Diamond Beach.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2c/J%C3%B6kuls%C3%A1rl%C3%B3n_lagoon_in_southeastern_Iceland.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Vatnajökull",
        "caption": "Vatnajökull is the largest and most voluminous ice cap in Iceland, and the second largest in area in Europe after the Severny Island ice cap of Novaya Zemlya.  It is in the south-east of the island, covering approximately 8% of the country.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Vatnaj%C3%B6kull.jpeg/330px-Vatnaj%C3%B6kull.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Atlantic puffin",
        "caption": "The Atlantic puffin, also known as the common puffin, is a species of seabird in the auk family.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Puffin_%28Fratercula_arctica%29.jpg/330px-Puffin_%28Fratercula_arctica%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Iceland runs on nearly 100% renewable energy, utilizing natural geothermal steam and hydroelectric power.",
      "It has no mosquitoes, no military armed forces, and no railway system whatsoever.",
      "The Althing, Iceland's parliament established at Thingvellir in 930 AD, is the oldest surviving parliament in the world."
    ]
  },
  "it": {
    "landmarks": [
      {
        "title": "The Colosseum of Rome",
        "caption": "The largest ancient amphitheater ever constructed, hosting gladiatorial contests in imperial Rome.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/3840px-Colosseo_2020.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Venice Grand Canal & Rialto Bridge",
        "caption": "The bustling main water thoroughfare of Venice, plied by gondolas past centuries-old Venetian palazzi.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Rialto_2025_4.jpg/3840px-Rialto_2025_4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Leaning Tower of Pisa",
        "caption": "The world-famous free-standing Romanesque bell tower celebrated for its unintended 4-degree tilt.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Italy_-_Pisa_-_Leaning_Tower.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Dolomites",
        "caption": "The Dolomites or Pale Mountains are a mountain range in northeastern Italy.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Faloria_Cortina_d%27Ampezzo_10.jpg/330px-Faloria_Cortina_d%27Ampezzo_10.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Italian wolf",
        "caption": "The Italian wolf, also known as the Apennine wolf, is a subspecies of the grey wolf native to the Italian Peninsula.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/C._l._italicus_in_MNP.jpg/330px-C._l._italicus_in_MNP.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Italy boasts 60 UNESCO World Heritage Sites, tying for the highest number of any country on Earth.",
      "Pizza was born in Naples during the 18th century, with the classic Pizza Margherita created in 1889 honoring Queen Margherita.",
      "Two sovereign independent enclave microstates lie entirely within Italy's borders: Vatican City and San Marino."
    ]
  },
  "jm": {
    "landmarks": [
      {
        "title": "Dunn's River Falls in Ocho Rios",
        "caption": "Famous terraced cascading waterfall that visitors can climb hand-in-hand directly up to the white sandy beach.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Dunns_River_Falls_climb.JPG/3840px-Dunns_River_Falls_climb.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Blue Mountains Peak",
        "caption": "Jamaica's highest mountain range (2,256 m), renowned for misty cloud forests and world-famous Blue Mountain coffee.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Blue_Mountain_Peak.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Bob Marley Museum in Kingston",
        "caption": "The legendary reggae icon's former residence and recording studio preserved with personal musical artifacts.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Rita-Marley.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Blue Mountains (Jamaica)",
        "caption": "The Blue Mountains are the longest mountain range in Jamaica.  They include the island's highest point, Blue Mountain Peak, at 2,256 m (7,402 ft).",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/JM_Blue_Mountain_Peak_1010_%2878%29_%2817049629637%29.jpg/330px-JM_Blue_Mountain_Peak_1010_%2878%29_%2817049629637%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Red-billed streamertail",
        "caption": "The red-billed streamertail, also known as the doctor bird, or swallow tail hummingbird, is a species of hummingbird in the \"emeralds\", tribe Trochilini of the subfamily Trochilinae.  It is endemic to Jamaica and is the national bird of the country.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Red-billed_streamertail%28_Trochilus_polytmus%29_adult_male_2.jpg/330px-Red-billed_streamertail%28_Trochilus_polytmus%29_adult_male_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Jamaica is the birthplace of Reggae music, ska, rocksteady, dub, and legendary musical visionary Bob Marley.",
      "Jamaica was the very first Caribbean nation to gain independence from the United Kingdom (on August 6, 1962).",
      "Jamaican sprinters, including Usain Bolt and Shelly-Ann Fraser-Pryce, have dominated Olympic sprinting for decades."
    ]
  },
  "jo": {
    "landmarks": [
      {
        "title": "The Treasury (Al-Khazneh) at Petra",
        "caption": "Spectacular Hellenistic facade carved directly out of the rose-red sandstone cliff face by the ancient Nabataeans.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Treasury_petra_crop.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Wadi Rum Desert",
        "caption": "The 'Valley of the Moon', an immense wilderness of sandstone monoliths and Martian-red sand dunes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Mountain_in_Wadi_Rum%2C_Jordan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Jerash Greco-Roman City",
        "caption": "One of the best-preserved Roman provincial cities in the world, complete with colonnaded streets and plazas.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Oval_Plaza_%28Forum_Romanum%2C_Gerasa_-_Jerash%2C_Jordan%29_-_%D8%B3%D8%A7%D8%AD%D8%A9_%D8%A7%D9%84%D9%86%D8%AF%D9%88%D8%A9%2C_%D8%AC%D8%B1%D8%B4.jpg/3840px-Oval_Plaza_%28Forum_Romanum%2C_Gerasa_-_Jerash%2C_Jordan%29_-_%D8%B3%D8%A7%D8%AD%D8%A9_%D8%A7%D9%84%D9%86%D8%AF%D9%88%D8%A9%2C_%D8%AC%D8%B1%D8%B4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Dead Sea",
        "caption": "The Dead Sea, also known by other names, is a landlocked salt lake bordered by Jordan to the east, the West Bank to the west and Israel...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Dead_Sea_beach_00.JPG/330px-Dead_Sea_beach_00.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Arabian oryx",
        "caption": "The Arabian oryx or white oryx is a medium-sized antelope with a distinct shoulder bump, long, straight horns, and a tufted tail.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Arabian_oryx_%28oryx_leucoryx%29.jpg/330px-Arabian_oryx_%28oryx_leucoryx%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Petra was carved into rose-colored sandstone cliffs over 2,000 years ago by Nabataean engineers who pioneered advanced water cisterns.",
      "The mineral-rich waters of the Dead Sea allow swimmers to float effortlessly on the surface due to extreme 34% salinity.",
      "Wadi Rum's dramatic Martian-like topography has served as the filming location for blockbuster sci-fi movies including The Martian and Dune."
    ]
  },
  "jp": {
    "landmarks": [
      {
        "title": "Mount Fuji",
        "caption": "Japan's highest and most sacred mountain (3,776 m), an iconic snow-capped symmetrical active volcano.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/3840px-View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Fushimi Inari Taisha in Kyoto",
        "caption": "Historic Shinto shrine famous for thousands of vermilion torii gates winding through sacred woodlands.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg"
      },
      {
        "title": "Himeji Castle (White Heron Castle)",
        "caption": "Widely regarded as Japan's most spectacular and pristine surviving feudal samurai fortress.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Himeji_castle_in_may_2015.jpg/3840px-Himeji_castle_in_may_2015.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Nachi Falls",
        "caption": "Nachi Falls  in Nachikatsuura, Wakayama Prefecture, Japan, is one of the best-known waterfalls in Japan.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Kumano_Kodo_World_heritage_Nachi-no-taki_%E7%86%8A%E9%87%8E%E5%8F%A4%E9%81%93_%E9%82%A3%E6%99%BA%E5%A4%A7%E6%BB%9D10.JPG/330px-Kumano_Kodo_World_heritage_Nachi-no-taki_%E7%86%8A%E9%87%8E%E5%8F%A4%E9%81%93_%E9%82%A3%E6%99%BA%E5%A4%A7%E6%BB%9D10.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Japanese serow",
        "caption": "The Japanese serow  is a Japanese goat-antelope, an even-toed ungulate.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Nihonkamoshika-akita.JPG/330px-Nihonkamoshika-akita.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Tokyo is the world's most populous metropolitan area, with over 37 million residents across its greater urban region.",
      "Japan has over 5.5 million vending machines offering everything from hot tea and soup to fresh fruit and umbrellas.",
      "The Japanese Shinkansen bullet train network has carried over 10 billion passengers with zero passenger fatalities due to derailments or collisions."
    ]
  },
  "ke": {
    "landmarks": [
      {
        "title": "Maasai Mara National Reserve",
        "caption": "World-famous savanna plains hosting the annual Great Migration of over 1.5 million wildebeest and zebras.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/17/Masai_Mara_at_Sunset.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Kenya",
        "caption": "The second-highest mountain in Africa (5,199 m), an extinct volcano featuring equatorial glaciers and tarns.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/MtKenya.jpg/3840px-MtKenya.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Amboseli National Park & Kilimanjaro View",
        "caption": "Classic East African savanna where large elephant herds graze against the backdrop of Mount Kilimanjaro.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Amboseli_Airstrip_2017_02_crop.jpg/3840px-Amboseli_Airstrip_2017_02_crop.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mount Kenya",
        "caption": "Mount Kenya is the second highest mountain in Africa and the namesake of the country Kenya.  Located about 150 km north-northeast of the capital of Nairobi and just 16.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/MtKenya.jpg/330px-MtKenya.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lion",
        "caption": "The lion is a large cat of the genus Panthera, currently ranging only in Sub-Saharan Africa and India.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/330px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The annual Great Migration across the Mara River is hailed as the 'Eighth Wonder of the Natural World'.",
      "Kenyan distance runners dominate global marathons and track athletics, with legends like Eliud Kipchoge breaking world records.",
      "Kenya pioneered the mobile money revolution in 2007 with M-Pesa, transforming everyday payments across the developing world."
    ]
  },
  "kg": {
    "landmarks": [
      {
        "title": "Issyk-Kul Alpine Lake",
        "caption": "The world's second-largest high-altitude saline lake, framed by snow-capped Tian Shan mountain ranges.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Issykkul_plyag.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ala-Archa National Park",
        "caption": "Breathtaking alpine gorge and glacier valley popular for mountaineering and hiking just south of Bishkek.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/53/Bishkek_P9170507_014_%2840103613941%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Song-Kul Lake & Yurts",
        "caption": "Remote high mountain lake where Kyrgyz semi-nomadic shepherds graze their livestock in summer yurts.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Song-K%C3%B6l.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Issyk-Kul",
        "caption": "Issyk-Kul or Ysyk-Köl is an endorheic saline lake in the western Tian Shan mountains in eastern Kyrgyzstan—just south of a dividing range separating Kyrgyzstan from Kazakhstan.  It is the eighth-deepest lake in the world, the eleventh-largest lake in the world by volume, and the second-largest saline lake.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Issykkul_plyag.jpg/330px-Issykkul_plyag.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Snow leopard",
        "caption": "The snow leopard is a felid species in the genus Panthera.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/330px-Irbis4.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Over 90% of Kyrgyzstan's terrain is mountainous, dominated by the majestic peaks of the Tian Shan and Pamir ranges.",
      "The Kyrgyz Epic of Manas is one of the longest epic poems in human history, consisting of over 500,000 poetic lines.",
      "The traditional Kyrgyz yurt (boz ui) is so culturally important that the tunduk (wooden roof crown) forms the central symbol of its national flag."
    ]
  },
  "kh": {
    "landmarks": [
      {
        "title": "Angkor Wat Temple",
        "caption": "The largest religious monument in the world, built by the Khmer Empire in the 12th century with lotus-bud towers.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/41/Angkor_Wat.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Bayon Temple & Stone Faces",
        "caption": "Fascinating Khmer temple in Angkor Thom featuring 216 colossal smiling stone faces of Avalokiteshvara.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Bayon%2C_Angkor_Thom%2C_Camboya%2C_2013-08-17%2C_DD_37.JPG/3840px-Bayon%2C_Angkor_Thom%2C_Camboya%2C_2013-08-17%2C_DD_37.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Tonlé Sap Floating Villages",
        "caption": "Southeast Asia's largest freshwater lake with seasonal reverse flow and vibrant floating fishing communities.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Cambodia%2C_Tonle_Sap_IMG_3285.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Tonle Sap",
        "caption": "Tonle Sap is a lake in central Cambodia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Cambodia%2C_Tonle_Sap_IMG_3285.JPG/330px-Cambodia%2C_Tonle_Sap_IMG_3285.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Kouprey",
        "caption": "The kouprey, also known as the forest ox and grey ox, is a possibly extinct species of forest-dwelling wild bovine native to Southeast Asia.",
        "url": "https://thumb.wikimedia.org/wikipedia/en/thumb/2/27/Kouprey_at_Vincennes_Zoo_in_Paris_by_Georges_Broihanne_1937.jpg/330px-Kouprey_at_Vincennes_Zoo_in_Paris_by_Georges_Broihanne_1937.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Angkor Wat is the only national monument depicted directly on a sovereign nation's flag in the entire world.",
      "Tonlé Sap Lake is unique because its water flow reverses twice a year depending on the monsoon rains.",
      "The ancient Khmer Empire constructed the world's most sophisticated hydraulic city network at Angkor."
    ]
  },
  "ki": {
    "landmarks": [
      {
        "title": "South Tarawa & Betio Causeway",
        "caption": "Slender coral atoll string serving as the vibrant capital, site of the historic World War II Battle of Tarawa.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b5/South_Tarawa_from_the_air.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Phoenix Islands Protected Area (PIPA)",
        "caption": "One of the largest marine protected reserves on Earth, conserving pristine deep ocean ecosystems and corals.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/52/Rotjan_-_Enderbury_Day_1_-_2nd_half_%2862%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kiritimati (Christmas Island)",
        "caption": "The largest coral atoll in the world by land area, renowned globally for flats bonefishing and seabird colonies.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Kiritimati-EO.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Phoenix Islands Protected Area",
        "caption": "The Phoenix Islands Protected Area (PIPA) is located in the Republic of Kiribati, an ocean nation in the central Pacific approximately midway between Australia and Hawaii.  PIPA constitutes 11.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Rotjan_-_Enderbury_Day_1_-_2nd_half_%2862%29.JPG/330px-Rotjan_-_Enderbury_Day_1_-_2nd_half_%2862%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "White tern",
        "caption": "White terns consist of three species of terns in the genus Gygis and the family Laridae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Gygis_alba_Ascension_Island_1.jpg/330px-Gygis_alba_Ascension_Island_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Kiribati is the only country in the world situated in all four hemispheres (Northern, Southern, Eastern, and Western).",
      "Millennium Island (Caroline Atoll) in Kiribati is the first place on Earth to welcome the rising sun each new calendar year.",
      "Kiribati consists of 33 coral atolls and reef islands dispersed across an ocean expanse larger than India."
    ]
  },
  "km": {
    "landmarks": [
      {
        "title": "Mount Karthala Volcano",
        "caption": "Active shield volcano on Grand Comore with one of the largest active volcanic calderas in the world (3x4 km).",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Mount_Karthala_%2811000398163%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Old Friday Mosque in Moroni",
        "caption": "Iconic seaside stone mosque built with coral rag overlooking the turquoise harbor of Moroni.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/94/Moroni-Harbour.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mohéli Marine National Park",
        "caption": "Protected coral reef sanctuary where green sea turtles nest year-round and humpback whales calve in winter.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Moh%C3%A9li_in_Comoros.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Karthala",
        "caption": "Mount Karthala or Karthola is an active shield volcano and the highest point of the Comoros at 2,361 m (7,746 ft) above sea level.  It is the southernmost and larger of the two volcanoes forming Grande Comore island, the largest island in the nation of Comoros.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Mount_Karthala_%2811000398163%29.jpg/330px-Mount_Karthala_%2811000398163%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Livingstone's fruit bat",
        "caption": "Livingstone's fruit bat, also called the Comoro flying fox, is a megabat in the genus Pteropus.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Bristol.zoo.livfruitbat.arp.jpg/330px-Bristol.zoo.livfruitbat.arp.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Comoros is nicknamed the 'Perfume Islands' because it is the world's leading producer of ylang-ylang essential oil.",
      "The prehistoric coelacanth fish, an ancient 'living fossil' believed extinct for 66 million years, was discovered swimming off Comoros.",
      "Comoros is the only sovereign state in the world that is a member of the African Union, Francophonie, and the Arab League simultaneously."
    ]
  },
  "kn": {
    "landmarks": [
      {
        "title": "Brimstone Hill Fortress",
        "caption": "The 'Gibraltar of the Caribbean', a colossal 18th-century British stone fortress crowning an 800-foot volcanic hill.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Saint_Kitts_and_Nevis_Regions_map.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "St. Kitts Scenic Railway",
        "caption": "The 'Last Railway in the West Indies', a historic double-decker train that circles the coast through sugarcane fields.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Saint_Kitts_and_Nevis_Regions_map.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Nevis Peak Volcano",
        "caption": "Potentially active volcanic summit (985 m) dominating Nevis Island, frequently wrapped in cloud mist.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Saint_Kitts_and_Nevis_Regions_map.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Liamuiga",
        "caption": "Mount Liamuiga is a 1,156-metre (3,792 ft) stratovolcano which forms the north-western part of the island of Saint Kitts.  The peak is the highest point on the island of Saint Kitts, in the federation of Saint Kitts and Nevis, and in the entire British Leeward Islands, as well as one of the tallest peaks in the eastern Caribbean archipelago.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/ISS022-E-39042_-_View_of_the_Lesser_Antilles.jpg/330px-ISS022-E-39042_-_View_of_the_Lesser_Antilles.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Brown pelican",
        "caption": "The brown pelican is a bird of the pelican family, Pelecanidae, one of three species found in the Americas and one of two that feed by...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Brown_pelican_in_flight_%28Bodega_Bay%29.jpg/330px-Brown_pelican_in_flight_%28Bodega_Bay%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Saint Kitts and Nevis is the smallest sovereign state in the Americas, both in geographic area and population.",
      "American Founding Father Alexander Hamilton was born on the island of Nevis in 1755 or 1757.",
      "The St. Kitts Scenic Railway was originally built between 1912 and 1926 to transport sugar cane from inland estates to the central factory."
    ]
  },
  "kp": {
    "landmarks": [
      {
        "title": "Juche Tower in Pyongyang",
        "caption": "Monumental 170-meter stone tower topped by a glowing 20-meter torch overlooking the Taedong River.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Tower_of_Juche_Idea%2C_Pyongyang%2C_North_Korea_%282909246855%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Paektu & Heaven Lake",
        "caption": "Sacred volcanic mountain on the Chinese border featuring a deep caldera lake filled with turquoise water.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Laika_ac_Mt._Paekdu_%287998657081%29.jpg/3840px-Laika_ac_Mt._Paekdu_%287998657081%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Kumsusan Palace of the Sun",
        "caption": "Monumental granite mausoleum situated in Pyongyang, surrounded by extensive landscaped moat gardens.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Kumsusan_Memorial_Palace%2C_Pyongyang.jpg/3840px-Kumsusan_Memorial_Palace%2C_Pyongyang.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mount Paektu",
        "caption": "Mount Paektu or Mount Baekdu (Korean: 백두산) is an active stratovolcano on the Chinese–North Korean border.  In China, it is known as Changbai Mountain.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Laika_ac_Mt._Paekdu_%287998657081%29.jpg/330px-Laika_ac_Mt._Paekdu_%287998657081%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Qianlima",
        "caption": "The qianlima is a mythical horse that originates from the Chinese classics and is commonly portrayed in East Asian mythology.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Chollima_statue_05.JPG/330px-Chollima_statue_05.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Mount Paektu, the highest peak on the Korean Peninsula, is an active volcano considered the mythical spiritual birthplace of the Korean people.",
      "North Korea uses the Juche calendar, which begins with year 1 marked by the birth year of Kim Il-sung in 1912.",
      "The Rungrado 1st of May Stadium in Pyongyang is one of the largest stadium arenas in the world, with a seating capacity of 114,000."
    ]
  },
  "kr": {
    "landmarks": [
      {
        "title": "Gyeongbokgung Palace in Seoul",
        "caption": "The primary royal palace of the Joseon Dynasty, featuring the Gwanghwamun Gate and scenic royal pavilion gardens.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/%EA%B4%91%ED%99%94%EB%AC%B8_%EC%9B%94%EB%8C%80.jpg/3840px-%EA%B4%91%ED%99%94%EB%AC%B8_%EC%9B%94%EB%8C%80.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Bukchon Hanok Village",
        "caption": "Traditional residential quarter in Seoul featuring hundreds of preserved wooden Joseon hanok houses.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Bukchon_Hanok_Village_01.jpg/3840px-Bukchon_Hanok_Village_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Jeju Island & Hallasan Volcano",
        "caption": "Subtropical volcanic island home to South Korea's highest peak (1,947 m) and natural lava tubes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Jeju_Island.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Hallasan",
        "caption": "Hallasan (Korean: 한라산) is a shield volcano comprising much of Jeju Island in South Korea.  Its summit, at 1,947 m (6,388 ft), is the highest point in the country.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Hallasan_Above.jpg/330px-Hallasan_Above.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Siberian tiger",
        "caption": "The Siberian tiger or Amur tiger is a population of the tiger subspecies Panthera tigris tigris native to Northeast China, the Russian...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/330px-P.t.altaica_Tomak_Male.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "South Korea has the world's fastest average internet speeds and was the first country to commercially roll out 5G mobile networks nationwide.",
      "The Korean alphabet, Hangul, was scientifically created in 1443 by King Sejong the Great to promote widespread literacy.",
      "Kimchi, Korea's national dish of seasoned fermented vegetables, has over 200 registered regional varieties."
    ]
  },
  "kw": {
    "landmarks": [
      {
        "title": "Kuwait Towers",
        "caption": "Trio of slender reinforced-concrete towers clad in shimmering turquoise enameled steel discs.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuwait_City_Skyline_1.jpg/3840px-Kuwait_City_Skyline_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "The Grand Mosque of Kuwait",
        "caption": "Expansive mosque in Kuwait City with Andalusian tilework, stained glass, and a 43-meter central dome.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuwait_City_Skyline_1.jpg/3840px-Kuwait_City_Skyline_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Souq Al-Mubarakiya",
        "caption": "Historic 200-year-old traditional market featuring spices, Persian carpets, dates, and fragrant incense.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Kuwait_City_Souq_al-Mubarakeya_at_Night_01.jpg/3840px-Kuwait_City_Souq_al-Mubarakeya_at_Night_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Failaka Island",
        "caption": "Failaka Island is a Kuwaiti Island in the Persian Gulf.  The island is 20 km off the coast of Kuwait City in the Persian Gulf.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Beach_at_Failaka_Island.jpg/330px-Beach_at_Failaka_Island.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Dromedary",
        "caption": "The dromedary, also known as the dromedary camel, Arabian camel and one-humped camel, is a large camel of the genus Camelus with one...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Camelus_dromedarius_in_Nuweiba.jpg/330px-Camelus_dromedarius_in_Nuweiba.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Kuwaiti Dinar (KWD) is the highest-valued currency unit in the world by nominal exchange rate.",
      "Kuwait has one of the highest levels of per capita oil reserves in the world, holding roughly 7% of global oil reserves.",
      "Al-Hamra Tower in Kuwait City is the tallest carved concrete skyscraper in the world, soaring 414 meters into the sky."
    ]
  },
  "kz": {
    "landmarks": [
      {
        "title": "Charyn Canyon",
        "caption": "The 'Valley of Castles', a 150-meter-deep sandstone canyon featuring sculpted rock towers and dramatic cliffs.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Charyn_Canyon%2C_Kazakhstan_03.jpg/3840px-Charyn_Canyon%2C_Kazakhstan_03.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hazrat Sultan Mosque in Astana",
        "caption": "Monumental white marble mosque in the capital city, featuring the largest dome in Kazakhstan.",
        "url": "https://upload.wikimedia.org/wikipedia/en/5/5c/Khazret_Sultan_Mosque_2_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Kaindy Sunken Forest",
        "caption": "Scenic alpine lake formed by an earthquake in the Tian Shan mountains where submerged spruce trees still rise from the water.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/26/Kaindy_lake_south-east_Kazakhstan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Big Almaty Lake",
        "caption": "Big Almaty Lake is a natural alpine reservoir.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Big_Almaty_Lake_%282511_m%29_and_snowy_peak_of_Soviets_%284317_m%29_in_September%2C_2%2C_2017.jpg/330px-Big_Almaty_Lake_%282511_m%29_and_snowy_peak_of_Soviets_%284317_m%29_in_September%2C_2%2C_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Snow leopard",
        "caption": "The snow leopard is a felid species in the genus Panthera.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/330px-Irbis4.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Kazakhstan is the ninth-largest country in the world by land area and the largest landlocked nation on Earth.",
      "The Baikonur Cosmodrome in Kazakhstan is the world's oldest and largest operational space launch facility, from which Yuri Gagarin launched into space.",
      "Wild apples originated in the mountains of Kazakhstan; Almaty, its former capital, literally translates to 'Father of Apples'."
    ]
  },
  "la": {
    "landmarks": [
      {
        "title": "Kuang Si Waterfalls",
        "caption": "Three-tiered cascades plunging into brilliant turquoise swimming pools surrounded by tropical jungle.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/3a/The_river_of_Kuang_si_waterfalls.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Luang Prabang Historic Town",
        "caption": "UNESCO-listed royal capital blending traditional gilded Lao wooden architecture with French colonial mansions.",
        "url": "https://thumb.wikimedia.org/wikipedia/en/thumb/2/28/Vientiane_-_Patuxai_-_0003.jpg/3840px-Vientiane_-_Patuxai_-_0003.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Plain of Jars",
        "caption": "Mysterious archaeological megalithic stone jars dating to the Iron Age scattered across the Xieng Khouang plateau.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Plainofjars_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kuang Si Falls",
        "caption": "The Kuang Si Falls \n or Kuang Xi Falls, alternatively known as the Tat Kuang Si Waterfalls, is a multi-tiered waterfall in Laos about 29...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/The_river_of_Kuang_si_waterfalls.jpg/330px-The_river_of_Kuang_si_waterfalls.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Asian elephant",
        "caption": "The Asian elephant, also known as the Asiatic elephant, is the only living species in the genus Elephas.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Elephas_maximus_%28Bandipur%29.jpg/330px-Elephas_maximus_%28Bandipur%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Laos is the only landlocked country in Southeast Asia, surrounded by China, Vietnam, Cambodia, Thailand, and Myanmar.",
      "Sticky rice (khao niao) is the staple food of Laos; Laotians consume more sticky rice per capita than any other people in the world.",
      "The 4,000 Islands (Si Phan Don) along the Mekong River in southern Laos is one of the few habitats of the rare freshwater Irrawaddy dolphin."
    ]
  },
  "lb": {
    "landmarks": [
      {
        "title": "Baalbek Roman Temple Complex",
        "caption": "Colossal Roman archaeological sanctuary featuring the monumental Temple of Bacchus and Jupiter's columns.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Baalbek_Baccustempel.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Jeita Grotto",
        "caption": "Breathtaking interconnected karstic limestone caves featuring the world's longest known stalactite (8.2 m).",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/09/Upper_Jeita_Grotto.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Byblos Ancient Harbor",
        "caption": "One of the oldest continuously inhabited cities on Earth, where the Phoenician phonetic alphabet was born.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Byblos_Libanon_2003.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Jeita Grotto",
        "caption": "The Jeita Grotto is a system of two separate, but interconnected, karstic limestone caves spanning an overall length of nearly 9 kilometres (5. 6 mi).",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Upper_Jeita_Grotto.jpg/330px-Upper_Jeita_Grotto.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Striped hyena",
        "caption": "The striped hyena is a species of hyena native to North and East Africa, the Middle East, the Caucasus, Central Asia, and the Indian...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Striped_hyena_in_Bhigwan_August_2025_by_Tisha_Mukherjee_07_%28cropped%29.jpg/330px-Striped_hyena_in_Bhigwan_August_2025_by_Tisha_Mukherjee_07_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Byblos in Lebanon is one of the oldest continuously inhabited cities in the world, with settlements dating back over 7,000 years.",
      "The Lebanese cedar tree (Cedrus libani) has been prized since biblical times and is featured proudly on the national flag.",
      "Lebanon is the only country in the Middle East that has no natural desert territory within its borders."
    ]
  },
  "lc": {
    "landmarks": [
      {
        "title": "The Pitons (Gros Piton & Petit Piton)",
        "caption": "Dramatic pair of towering volcanic emerald spires rising over 750 meters straight out of the Caribbean Sea in Soufrière.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/44/Pitons-aerial.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Sulphur Springs (Drive-In Volcano)",
        "caption": "The Caribbean's only drive-in volcano, featuring bubbling sulfur mud baths and geothermal steam vents.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sulphur_Springs_2003.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Marigot Bay",
        "caption": "Idyllic natural hurricane haven sheltered by steep palm-covered forested hills and luxury yachts.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Marigot_Bay%2C_St._Lucia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Pitons (Saint Lucia)",
        "caption": "The Pitons are two mountainous volcanic plugs, volcanic spires, located in Saint Lucia.  Petit Piton is 743 m (2,438 ft) high and Gros Piton is 798.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Pitons-aerial.jpg/330px-Pitons-aerial.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Saint Lucia amazon",
        "caption": "The Saint Lucia amazon, also known as the St.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Amazona_versicolor_-St_Lucia-5a.jpg/330px-Amazona_versicolor_-St_Lucia-5a.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Saint Lucia is the only sovereign country in the world named after a historical woman (Saint Lucy of Syracuse).",
      "Saint Lucia has produced two Nobel laureates (Sir Arthur Lewis for Economics and Derek Walcott for Literature), the highest per capita rate in the world.",
      "The iconic twin volcanic Pitons are recognized as a UNESCO World Heritage Site for their dramatic natural topography."
    ]
  },
  "li": {
    "landmarks": [
      {
        "title": "Vaduz Castle",
        "caption": "The official residence of the Reigning Prince of Liechtenstein, overlooking the Rhine valley from an alpine ridge.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Liechtenstein_asv2022-10_img22_Vaduz_Schloss.jpg/3840px-Liechtenstein_asv2022-10_img22_Vaduz_Schloss.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Gutenberg Castle in Balzers",
        "caption": "Magnificent preserved high-medieval castle perched atop a 70-meter freestanding rocky hill.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Liechtenstein_asv2022-10_img25_Balzers_Burg_Gutenberg.jpg/3840px-Liechtenstein_asv2022-10_img25_Balzers_Burg_Gutenberg.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Malbun Alpine Valley",
        "caption": "Idyllic alpine ski and hiking resort nestled high in an amphitheater of mountain summits.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Wikiolo_in_Liechtenstein_%28461%29.jpg/3840px-Wikiolo_in_Liechtenstein_%28461%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Grauspitz",
        "caption": "The Grauspitz is a mountain in the Rätikon range of the Alps, located on the border between Liechtenstein and Switzerland.  With an elevation of 2,599 metres (8,527 ft) above sea level, the Grauspitz is the highest mountain in Liechtenstein.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Grauspitzen.JPG/330px-Grauspitzen.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Alpine marmot",
        "caption": "The alpine marmot is a large ground-dwelling squirrel, from the genus of marmots.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/071_Wild_marmot_at_Grand_Muveran_Nature_Reserve_Photo_by_Giles_Laurent.jpg/330px-071_Wild_marmot_at_Grand_Muveran_Nature_Reserve_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Liechtenstein is one of only two 'doubly landlocked' countries in the world (surrounded exclusively by landlocked neighbors).",
      "It is the world's leading manufacturer of high-end dental prosthetics and false teeth through the company Ivoclar Vivadent.",
      "Liechtenstein has had no standing army since 1868, when its 80-man force returned from war with 81 men after making an Italian friend!"
    ]
  },
  "lk": {
    "landmarks": [
      {
        "title": "Sigiriya Lion Rock Fortress",
        "caption": "Ancient 5th-century palace citadel perched on top of a 180-meter vertical granite column with celestial frescoes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Sigiriya_%28141688197%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Temple of the Sacred Tooth Relic",
        "caption": "Venerated Buddhist temple in Kandy housing the sacred tooth relic of the Buddha in golden caskets.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/SL_Kandy_asv2020-01_img33_Sacred_Tooth_Temple.jpg/3840px-SL_Kandy_asv2020-01_img33_Sacred_Tooth_Temple.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Nine Arches Bridge in Ella",
        "caption": "Colonial-era railway viaduct built entirely of solid stone, brick, and cement without steel reinforcement.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f6/The_Nine_Arches_Bridge.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Sinharaja Forest Reserve",
        "caption": "Sinharaja Forest Reserve is the last virgin Rainforest left in Sri Lanka.  Home to many rare endemic flora and fauna, it has been designated a World Heritage Site by UNESCO.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/20160128_Sri_Lanka_4132_Sinharaja_Forest_Preserve_sRGB_%2825674474901%29.jpg/330px-20160128_Sri_Lanka_4132_Sinharaja_Forest_Preserve_sRGB_%2825674474901%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Sri Lankan elephant",
        "caption": "The Sri Lankan elephant is native to Sri Lanka and one of three recognised subspecies of the Asian elephant.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Tuskers_of_Sri_Lanka.jpg/330px-Tuskers_of_Sri_Lanka.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Sri Lanka is one of the world's top producers of high-quality black tea, globally celebrated as Ceylon tea.",
      "In 1960, Sri Lanka made global history by electing Sirimavo Bandaranaike as the world's first female prime minister.",
      "True cinnamon (Cinnamomum verum) is indigenous to Sri Lanka, which still produces roughly 90% of the world's supply."
    ]
  },
  "lr": {
    "landmarks": [
      {
        "title": "Sapo National Park",
        "caption": "Liberia's largest protected area and one of West Africa's last primary rainforests, home to the rare pygmy hippopotamus.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/48/Zwergflusspferd_-_Pygmy_Hippopotamus_-_Hexaprotodon_liberiensis.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original"
      },
      {
        "title": "Providence Island in Monrovia",
        "caption": "Historic landing point on the Mesurado River where freed African-American settlers landed in 1822.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Providence_Island_view_of_downtown_Monrovia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Robertsport Surf Point",
        "caption": "World-class Atlantic point break beloved by international surfers, framed by coastal rainforest hills.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Robertsport_hillside.jpg/3840px-Robertsport_hillside.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mount Richard-Molard",
        "caption": "Mount Richard-Molard is a mountain along the border of Guinea, Ivory Coast and Liberia in West Africa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Mount_Nimba_Strict_Nature_Reserve-108445.jpg/330px-Mount_Nimba_Strict_Nature_Reserve-108445.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Pygmy hippopotamus",
        "caption": "The pygmy hippopotamus or pygmy hippo is a small hippopotamid which is native to the forests and swamps of West Africa, primarily in...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Hexaprotodon_liberiensis_in_Edinburgh_Zoo.JPG/330px-Hexaprotodon_liberiensis_in_Edinburgh_Zoo.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Founded in 1847 by freed African Americans, Liberia is the oldest independent modern democratic republic in Africa.",
      "Liberia is one of only two African nations (along with Ethiopia) that maintained its sovereignty throughout the 'Scramble for Africa'.",
      "In 2006, Liberia made history by electing Ellen Johnson Sirleaf as the first democratically elected female head of state in African history."
    ]
  },
  "ls": {
    "landmarks": [
      {
        "title": "Maletsunyane Falls in Semonkong",
        "caption": "Spectacular 192-meter unbroken waterfall plunging into a deep gorge, site of the world's highest commercial abseil.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Maletsunyanefalls.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Thaba Bosiu National Monument",
        "caption": "Historic sandstone mountain plateau fortress established by King Moshoeshoe I as the cradle of the Basotho nation.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/67/685_Thaba_Bosiu.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Sani Pass & Drakensberg Escarpment",
        "caption": "Dramatic 4x4 mountain pass climbing into the alpine roof of southern Africa, home to Africa's highest pub.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sani_Pass_heading_into_Lesotho.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Maletsunyane Falls",
        "caption": "Maletsunyane Falls is a 192-metre-high (630 ft) waterfall in the Southern African country Lesotho.  It is located near the town of Semonkong, which is also named after the falls.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Maletsunyanefalls.JPG/330px-Maletsunyanefalls.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Bearded vulture",
        "caption": "The bearded vulture, also known as the lammergeier and ossifrage, is a very large bird of prey in the monotypic genus Gypaetus.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/010e_Wild_Bearded_Vulture_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/330px-010e_Wild_Bearded_Vulture_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Lesotho is known as the 'Kingdom in the Sky'—it is the only independent country on Earth situated entirely above 1,000 meters elevation.",
      "Its lowest elevation point is 1,400 meters, the highest lowest point of any nation in the world.",
      "The traditional Basotho woolen blanket (seana marena) and conical straw hat (mokorotlo) are revered national cultural symbols."
    ]
  },
  "lt": {
    "landmarks": [
      {
        "title": "The Hill of Crosses",
        "caption": "Sacred Catholic pilgrimage site near Šiauliai featuring over 100,000 crosses planted by faithful pilgrims.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Kry%C5%BEi%C5%B3_kalnas_%28G%C3%B3ra_Krzy%C5%BCy%29.JPG/3840px-Kry%C5%BEi%C5%B3_kalnas_%28G%C3%B3ra_Krzy%C5%BCy%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Trakai Island Castle",
        "caption": "14th-century red-brick Gothic fortress perched on an island in Lake Galvė.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Trakai_castle_2016.jpg/3840px-Trakai_castle_2016.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Curonian Spit Sand Dunes",
        "caption": "Vast coastal sand dune peninsula separating the Curonian Lagoon from the Baltic Sea.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Mirties_sl%C4%97nis_nuo_Parnid%C5%BEio_kopos.JPG/3840px-Mirties_sl%C4%97nis_nuo_Parnid%C5%BEio_kopos.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Curonian Spit",
        "caption": "The Curonian Spit, sometimes called Courish Split, is a 98-kilometre-long (61 mi), thin, curved sand-dune spit that separates the Curonian Lagoon from the Baltic Sea.  It is a UNESCO World Heritage Site shared by Lithuania and Russia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Mirties_sl%C4%97nis_nuo_Parnid%C5%BEio_kopos.JPG/330px-Mirties_sl%C4%97nis_nuo_Parnid%C5%BEio_kopos.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "White stork",
        "caption": "The white stork is a large bird in the stork family, Ciconiidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/White_stork_%28Ciconia_ciconia%29_Bia%C5%82owieza.jpg/330px-White_stork_%28Ciconia_ciconia%29_Bia%C5%82owieza.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "In the 14th century, the Grand Duchy of Lithuania was the largest country in Europe, stretching from the Baltic Sea to the Black Sea.",
      "Basketball is regarded almost as a national religion in Lithuania, with the men's national team winning multiple Olympic medals.",
      "Lithuanian is one of the oldest living Indo-European languages, remarkably retaining ancient grammatical structures similar to Sanskrit."
    ]
  },
  "lu": {
    "landmarks": [
      {
        "title": "Bock Casemates",
        "caption": "Subterranean defense network of tunnels and cannon galleries hewn directly into the fortress rock.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/57/Selig_Luxembourg_from_Paffendall.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Vianden Castle",
        "caption": "One of the largest and most dramatic feudal residences of the Romanesque and Gothic periods in Europe.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Burg_Vianden%2C_Luxemburg.jpg/3840px-Burg_Vianden%2C_Luxemburg.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Grand Ducal Palace",
        "caption": "The official residence of the Grand Duke of Luxembourg in the historic town center with Flemish Renaissance facade.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Luxemburg_BW_2016-09-15_11-46-49_stitch.jpg/3840px-Luxemburg_BW_2016-09-15_11-46-49_stitch.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Little Switzerland (Luxembourg)",
        "caption": "Little Switzerland is a nickname for a region in the east of Luxembourg, bestowed upon the region on account of its reputed geographical...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Mullerthal.jpg/330px-Mullerthal.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "European badger",
        "caption": "The European badger, also known as the Eurasian badger, is a species of badger in the family Mustelidae native to Europe and West Asia...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/European_badger_%28Meles_meles_taxus%29_Drenthe.jpg/330px-European_badger_%28Meles_meles_taxus%29_Drenthe.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Luxembourg is the only remaining sovereign Grand Duchy in the world, headed by a constitutional Grand Duke.",
      "In 2020, Luxembourg became the very first country on Earth to make all public transit (buses, trains, and trams) 100% free nationwide.",
      "Nearly half of Luxembourg's total resident population consists of foreign expatriates representing over 170 nationalities."
    ]
  },
  "lv": {
    "landmarks": [
      {
        "title": "Riga Art Nouveau Historic Quarter",
        "caption": "Over 800 elaborate Art Nouveau building facades with gargoyles and statues across Riga's city center.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Liepajas_Sveta_Jazepa_Romas_katolu_katedrale_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Gauja National Park & Turaida Castle",
        "caption": "The 'Livonian Switzerland', featuring red sandstone cliffs and medieval brick castles.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Koiva_ja_liivakivi.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Rundāle Palace",
        "caption": "Baroque and Rococo palace designed by Bartolomeo Rastrelli, featuring stunning French formal rose gardens.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Rundale_Palace_%286483271573%29.jpg/3840px-Rundale_Palace_%286483271573%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Ķemeri National Park",
        "caption": "Ķemeri National Park is a national park located west of the city of Jūrmala, Latvia.  Established in 1997, Ķemeri is the third largest national park in the country by area, covering an area of 381.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Liela_Kemeru_taka_5jul03.JPG/330px-Liela_Kemeru_taka_5jul03.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "White wagtail",
        "caption": "The white wagtail is a small passerine bird in the family Motacillidae, which also includes pipits and longclaws.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/20180415_015_Winterswijk_Witte_kwikstaart_%2840785272624%29.jpg/330px-20180415_015_Winterswijk_Witte_kwikstaart_%2840785272624%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Latvia is home to Ventas Rumba in Kuldīga, the widest natural waterfall in Europe at up to 270 meters across.",
      "Over 54% of Latvia is covered by lush wild forests, making it one of the greenest countries in Europe.",
      "Jeans inventor Jacob Davis (born Jākobs Jufess) was a Latvian tailor who emigrated to America and patented riveted jeans with Levi Strauss."
    ]
  },
  "ly": {
    "landmarks": [
      {
        "title": "Leptis Magna Roman Metropolis",
        "caption": "One of the most extensive and best-preserved Roman ruins in the Mediterranean, birthplace of Emperor Septimius Severus.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/44/CarthageMap.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Old Town of Ghadames",
        "caption": "The 'Pearl of the Desert', a unique mudbrick oasis town designed with covered streets to protect from extreme Sahara heat.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Ghadames_Mosque.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Acacus Mountains Rock Art",
        "caption": "Surreal desert massif containing rock shelters and petroglyphs chronicling thousands of years of Saharan culture.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Tadrart_Acacus_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Wadi Mathendous",
        "caption": "Wadi Mathendous is a prehistoric archaeological site in the Mesak Settafet escarpment, located in the southwestern Fezzan region in Libya.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Mathendous_giraffes.jpg/330px-Mathendous_giraffes.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Fennec fox",
        "caption": "The fennec fox is a small fox native to the deserts of North Africa, ranging from Western Sahara and Mauritania to the Sinai Peninsula.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Fennec_Fox_Vulpes_zerda.jpg/330px-Fennec_Fox_Vulpes_zerda.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Leptis Magna contains monumental Roman architecture including the Arch of Septimius Severus, marble baths, and a seaside amphitheater.",
      "The Great Man-Made River in Libya is the world's largest underground pipe and irrigation engineering network, tapping ancient fossil water.",
      "Over 90% of Libya's territory is covered by the Sahara Desert, which experiences virtually zero annual rainfall in interior regions."
    ]
  },
  "ma": {
    "landmarks": [
      {
        "title": "Koutoubia Mosque & Jemaa el-Fnaa",
        "caption": "Vibrant main square of Marrakesh filled with storytellers, musicians, and spice stalls beneath the Almohad minaret.",
        "url": "https://upload.wikimedia.org/wikipedia/en/e/e0/Tower_of_the_Koutoubia_Mosque.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Chefchaouen (The Blue Pearl)",
        "caption": "Enchanting mountain medina painted in soothing shades of cobalt, sky blue, and indigo.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Chefchaouen-the-blue-city-of-morocco-with-palm-trees-and-the-mountain-view-in-the-backrgound.jpg/3840px-Chefchaouen-the-blue-city-of-morocco-with-palm-trees-and-the-mountain-view-in-the-backrgound.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Aït Benhaddou Ksar",
        "caption": "Earthen clay fortified ksar along the ancient caravan route between the Sahara and Marrakesh.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg/3840px-Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Erg Chebbi",
        "caption": "Erg Chebbi is one of Morocco's several ergs – large seas of dunes formed by wind-blown sand.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Merzouga_Dunes_2011.jpg/330px-Merzouga_Dunes_2011.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Barbary macaque",
        "caption": "The Barbary macaque is a macaque species native to the Atlas Mountains of Morocco, Algeria and Tunisia, along with a small introduced...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Macaca_sylvanus.Mother_and_baby.jpg/330px-Macaca_sylvanus.Mother_and_baby.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The University of al-Qarawiyyin in Fez, founded in 859 AD by Fatima al-Fihri, is recognized by UNESCO as the oldest continuously operating university in the world.",
      "Morocco was the very first country in the world to formally recognize the newly independent United States of America in 1777.",
      "Chefchaouen is painted in shades of blue because Jewish refugees who settled there in the 15th century believed blue mirrored the sky and heaven."
    ]
  },
  "mc": {
    "landmarks": [
      {
        "title": "Monte Carlo Casino & Square",
        "caption": "The world-famous Belle Époque gambling and entertainment complex overlooking the French Riviera.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Panorama_von_Monaco-La_Turbie.jpg/3840px-Panorama_von_Monaco-La_Turbie.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Prince's Palace of Monaco",
        "caption": "Fortified cliffside palace of the Grimaldi family atop 'The Rock' with daily changing of the guard.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/20/%D0%9C%D0%9E%D0%9D%D0%90%D0%9A%D0%9E_-_panoramio_%284%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Oceanographic Museum",
        "caption": "Monumental neoclassical museum built into the sheer cliff above the Mediterranean, founded by Prince Albert I.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Monaco_BW_2011-06-07_17-50-43.jpg/3840px-Monaco_BW_2011-06-07_17-50-43.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Rock of Monaco",
        "caption": "The Rock of Monaco is a 62-metre (203 ft) tall monolith on the Mediterranean coast of the Principality of Monaco.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Monaco_Ville_from_T%C3%AAte_de_Chien_-_panoramio.jpg/330px-Monaco_Ville_from_T%C3%AAte_de_Chien_-_panoramio.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mediterranean monk seal",
        "caption": "The Mediterranean monk seal is a monk seal belonging to the family Phocidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Monachus_monachus_DSC_0274.jpg/330px-Monachus_monachus_DSC_0274.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Monaco is the second-smallest independent sovereign state in the world after Vatican City, spanning just 2.08 square kilometers.",
      "Native citizens of Monaco (Monégasques) are legally prohibited from gambling or entering the gaming rooms of the Monte Carlo Casino.",
      "The Monaco Grand Prix has been held annually through the narrow, winding city streets since 1929, forming motorsport's Triple Crown."
    ]
  },
  "md": {
    "landmarks": [
      {
        "title": "Mileștii Mici Underground Cellars",
        "caption": "Guinness World Record largest wine cellar, spanning over 200 km of subterranean limestone galleries.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/35/Mile%C5%9Ftii_Mici_%283944427747%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Orheiul Vechi Cave Monastery",
        "caption": "Ancient archaeological complex featuring cave monasteries carved into limestone cliffs above the Răut River.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Stanca_deasupra_Rautului_Butuceni.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Soroca Fortress",
        "caption": "Historic circular stone fortress built by Prince Stephen the Great on the banks of the Dniester River.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/%D0%A1%D0%BE%D1%80%D0%BE%D0%BA%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D1%8C_Cetatea_Soroca_Soroca_Fortress_%2842928890910%29.jpg/3840px-%D0%A1%D0%BE%D1%80%D0%BE%D0%BA%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D1%8C_Cetatea_Soroca_Soroca_Fortress_%2842928890910%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Old Orhei",
        "caption": "Old Orhei is a Moldovan historical and archaeological complex located in Trebujeni, which is approximately 60 kilometres (37 mi)...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Stanca_deasupra_Rautului_Butuceni.jpg/330px-Stanca_deasupra_Rautului_Butuceni.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Roe deer",
        "caption": "The roe deer, also known as the roe, western roe deer, or European roe, is a species of deer.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Roe_deer_%28Capreolus_capreolus%29_young_male_Cumnor.jpg/330px-Roe_deer_%28Capreolus_capreolus%29_young_male_Cumnor.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Mileștii Mici holds the Guinness World Record for the largest wine collection in the world, storing nearly 2 million bottles.",
      "Moldova has the highest density of vineyards in the world relative to its total agricultural land area.",
      "Its national emblem is the Aurochs, an extinct colossal wild ox that symbolized the historic Principality of Moldavia."
    ]
  },
  "me": {
    "landmarks": [
      {
        "title": "Bay of Kotor & Perast",
        "caption": "Dramatic fjord-like Adriatic inlet surrounded by sheer limestone cliffs and medieval stone villages.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Wyspa_%C5%9Bw._Jerzego_w_Pera%C5%9Bcie_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original"
      },
      {
        "title": "Sveti Stefan Island Resort",
        "caption": "Iconic fortified 15th-century island village connected to the pink sandy mainland by a narrow isthmus.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Sveti_Stefan%2C_Montenegro%2C_2014-04-18%2C_DD_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original"
      },
      {
        "title": "Durmitor National Park & Tara River",
        "caption": "Rugged glacial peaks and the deepest river canyon in Europe, acclaimed for whitewater rafting.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Durmitor.jpg/3840px-Durmitor.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Tara River Canyon",
        "caption": "The Tara River Canyon, also known as the Tara River Gorge, is the river canyon of the Tara river.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Tara_River_Canyon.jpg/330px-Tara_River_Canyon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Golden eagle",
        "caption": "The golden eagle is a bird of prey living in the Northern Hemisphere.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/330px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Tara River Canyon in Montenegro is the deepest river canyon in Europe and the second-deepest in the world after the Grand Canyon.",
      "The name Montenegro literally translates to 'Black Mountain', named after the dark pine-covered slopes of Mount Lovćen.",
      "The Bay of Kotor is considered southern Europe's southernmost fjord-like ria, celebrated for dramatic limestone cliffs plunging into the sea."
    ]
  },
  "mg": {
    "landmarks": [
      {
        "title": "Avenue of the Baobabs",
        "caption": "Iconic dirt track lined with monumental 800-year-old Grandidier's baobab trees rising 30 meters into the sky.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/Adansonia_grandidieri_Pat_Hooper.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Tsingy de Bemaraha",
        "caption": "Surreal labyrinth of needle-sharp karst limestone pinnacles traversed by suspension footbridges.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Tsingy_de_Bemaraha.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Andasibe-Mantadia National Park",
        "caption": "Misty rainforest sanctuary famous as the home of the Indri, the largest living lemur, known for eerie whale-like calls.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Madagascar_train.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Isalo National Park",
        "caption": "Isalo National Park is a National Park in the Ihorombe Region of Madagascar, in the southwestern corner of the Province of Fianarantsoa.  The closest town is Ranohira, and the closest cities are Toliara and Ihosy.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Isalo_National_Park_Madagascar.jpg/330px-Isalo_National_Park_Madagascar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Ring-tailed lemur",
        "caption": "The ring-tailed lemur is a medium- to larger-sized strepsirrhine (wet-nosed) primate and the most internationally recognized lemur species, owing to its long, black-and-white, ringed tail.  It belongs to Lemuridae, one of five lemur families, and is the only member of the Lemur genus.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Ring-tailed_lemur_%28Lemur_catta%29.jpg/330px-Ring-tailed_lemur_%28Lemur_catta%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Madagascar separated from the Indian subcontinent roughly 88 million years ago; over 90% of its wildlife is found nowhere else on Earth.",
      "All lemur species in the wild live exclusively on the island of Madagascar.",
      "Madagascar produces roughly 80% of the world's natural bourbon vanilla beans, hand-pollinated on orchid plantations."
    ]
  },
  "mh": {
    "landmarks": [
      {
        "title": "Majuro Atoll Lagoon",
        "caption": "Slender ribbon of coral islands enclosing a calm 295-sq-km emerald lagoon plied by traditional outrigger canoes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Eneko_Islet_02.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Bikini Atoll Lagoon & Shipwrecks",
        "caption": "UNESCO World Heritage underwater grave of historic warships sunken during Cold War nuclear testing operations.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/94/Bikini_Atoll_2001-01-14%2C_Landsat_7_ETM%2B%2C_bands_3-2-1-8.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Arno Atoll Coral Reefs",
        "caption": "Tranquil outer atoll celebrated for traditional coconut copra production, shark sanctuaries, and marine life.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Elphinstone_Reef.jpg/3840px-Elphinstone_Reef.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Bikini Atoll",
        "caption": "Bikini Atoll, known as Eschscholtz Atoll between the 19th century and 1946, is a coral reef in the Marshall Islands consisting of 23 islands surrounding a 229. 4-square-mile (594.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Bikini_Atoll_2001-01-14%2C_Landsat_7_ETM%2B%2C_bands_3-2-1-8.png/330px-Bikini_Atoll_2001-01-14%2C_Landsat_7_ETM%2B%2C_bands_3-2-1-8.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Black noddy",
        "caption": "The black noddy, also known as white-capped noddy, is a species of tern in the family Laridae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Anous_minutus_by_Gregg_Yan_02.jpg/330px-Anous_minutus_by_Gregg_Yan_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Marshallese people were master navigators who created traditional 'stick charts' (rebbelib and mattang) to read ocean wave swells.",
      "The bikini swimwear was named in 1946 after Bikini Atoll in the Marshall Islands, capturing global attention like an atomic blast.",
      "The Marshall Islands established the world's largest shark sanctuary in 2011, covering nearly 2 million square kilometers of ocean."
    ]
  },
  "mk": {
    "landmarks": [
      {
        "title": "Lake Ohrid & St. John at Kaneo",
        "caption": "Ancient deep tectonic lake and cliffside Byzantine church with panoramic sparkling blue views.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Lake_Ohrid%2C_Macedonia-Albania_viewed_from_a_NASA_satellite.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Skopje Stone Bridge & Old Bazaar",
        "caption": "15th-century Ottoman bridge connecting modern Macedonia Square to the Ottoman trading quarter.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/08_Skopje.jpg/3840px-08_Skopje.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Matka Canyon",
        "caption": "Dramatic limestone gorge home to medieval monasteries and submerged underwater caves like Vrelo.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Matka_Canyon_Skopje_3.jpg/3840px-Matka_Canyon_Skopje_3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lake Ohrid",
        "caption": "Lake Ohrid is a lake which straddles the mountainous border between the southwestern part of North Macedonia and eastern Albania.  It is one of Europe's deepest and oldest lakes, with a unique aquatic ecosystem of worldwide importance, with more than 200 endemic species.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Lake_Ohrid%2C_Macedonia-Albania_viewed_from_a_NASA_satellite.jpg/330px-Lake_Ohrid%2C_Macedonia-Albania_viewed_from_a_NASA_satellite.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Balkan lynx",
        "caption": "The Balkan lynx is a subspecies of the Eurasian lynx in the genus Lynx.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Tirana_Zoo_Balkan_Lynx_%28OSCAL19_trip%29.jpg/330px-Tirana_Zoo_Balkan_Lynx_%28OSCAL19_trip%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Lake Ohrid is one of Europe's deepest (288 m) and oldest lakes, estimated to have formed between 4 and 10 million years ago.",
      "Skopje's Old Bazaar is the largest and most well-preserved Ottoman-era bazaar in the Balkans outside of Istanbul.",
      "Mother Teresa was born in Skopje in 1910 when the city was part of the Ottoman Empire."
    ]
  },
  "ml": {
    "landmarks": [
      {
        "title": "Great Mosque of Djenné",
        "caption": "The largest mudbrick building in the world, a monument of Sudano-Sahelian architecture replastered annually by the town.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Djenne_great_mud_mosque.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Timbuktu & Sankoré Mosque",
        "caption": "Legendary medieval desert university and trading hub that housed hundreds of thousands of ancient illuminated manuscripts.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/67/Donkeys%2C_Timbuktu.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Bandiagara Escarpment (Dogon Country)",
        "caption": "Dramatic 150-kilometer sandstone cliff dotted with ancient cliffside Dogon villages and granaries.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Les_Falaises_de_Bandiagara.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Hombori",
        "caption": "Mount Hombori is a mountain in Mali's Mopti Region, near the town of Hombori.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Hombori_Tondo_from_Hombori.JPG/330px-Hombori_Tondo_from_Hombori.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "West African giraffe",
        "caption": "The West African giraffe, also known as the Niger giraffe, is a species or subspecies of the giraffe distinguished by its light colored...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Giraffe-solo_Koure-NIGER.jpg/330px-Giraffe-solo_Koure-NIGER.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Mansa Musa, ruler of the Mali Empire in the 14th century, is widely regarded as the wealthiest individual in human history.",
      "The annual replastering of the Great Mosque of Djenné is a vibrant one-day community festival that has occurred every spring for generations.",
      "Timbuktu was one of the greatest intellectual centers of the medieval world, housing the University of Sankoré with 25,000 students."
    ]
  },
  "mm": {
    "landmarks": [
      {
        "title": "Bagan Temple Plains",
        "caption": "Over 2,200 ancient Buddhist temples and pagodas rising above the green plains along the Ayeyarwady River.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/89/Bagan%2C_Burma.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Shwedagon Pagoda in Yangon",
        "caption": "Glistening 99-meter golden stupa adorned with thousands of genuine diamonds and rubies, the holiest pagoda in Myanmar.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Shwedagon_Pagoda_2017.jpg/3840px-Shwedagon_Pagoda_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Inle Lake & Leg-Rowers",
        "caption": "Scenic freshwater lake famous for floating vegetable gardens and fishermen who steer long wooden boats using one leg.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Inle_Lake_%28Myanmar%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Inle Lake",
        "caption": "Inle Lake is a freshwater lake located in the Nyaungshwe Township of Shan State, part of Shan Hills in Myanmar (Burma).  It is the second largest lake in Myanmar, with an estimated surface area of 44.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Inle_Lake_%28Myanmar%29.jpg/330px-Inle_Lake_%28Myanmar%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Indochinese tiger",
        "caption": "The Indochinese tiger is a population of Panthera tigris tigris that is native to mainland Southeast Asia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Panthera_tigris_corbetti_01.jpg/330px-Panthera_tigris_corbetti_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Bagan was the capital of the Pagan Kingdom, where over 10,000 Buddhist temples and stupas were built between the 11th and 13th centuries.",
      "Both men and women in Myanmar traditionally wear thanaka, a fragrant yellow-white paste made from ground tree bark, as natural sunscreen.",
      "Traditional Intha fishermen on Inle Lake practice a unique one-legged rowing technique to keep their hands free for fishing nets."
    ]
  },
  "mn": {
    "landmarks": [
      {
        "title": "Gobi Desert & Flaming Cliffs",
        "caption": "Vast desert where royally paleontologist Roy Chapman Andrews discovered the world's first fossilized dinosaur eggs.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Gobi_Desert.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Genghis Khan Equestrian Statue",
        "caption": "Colossal 40-meter stainless steel equestrian statue of Genghis Khan rising above the steppes at Tsonjin Boldog.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Genghis_Khan_Equestrian_Statue%2C_photo_by_Vaiz_Ha.jpg/3840px-Genghis_Khan_Equestrian_Statue%2C_photo_by_Vaiz_Ha.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Erdene Zuu Monastery",
        "caption": "Probably the earliest surviving Buddhist monastery in Mongolia, enclosed by a wall of 108 stupas in Kharkhorin.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4c/%C5%9Awi%C4%85tynia_Zachodnia_w_klasztorze_Erdene_Dzuu_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Gobi Desert",
        "caption": "The Gobi Desert is a large, cold desert and grassland region in southern Mongolia and North China.  It is the sixth-largest desert in the world.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Gobi_Desert.jpg/330px-Gobi_Desert.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Przewalski's horse",
        "caption": "Przewalski's horse, also called the takhi, Mongolian wild horse or Dzungarian horse, is a rare and endangered wild horse originally...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Przewalskis_horse_02.jpg/330px-Przewalskis_horse_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Mongolia is the most sparsely populated sovereign country on Earth, with just over 3.4 million people in a land twice the size of France.",
      "Horses outnumber humans in Mongolia, playing an indispensable role in pastoral nomadic culture and the annual Naadam festival.",
      "Ulaanbaatar is statistically the coldest national capital city on Earth, with average winter temperatures plunging below -25°C."
    ]
  },
  "mr": {
    "landmarks": [
      {
        "title": "Richat Structure ('Eye of the Sahara')",
        "caption": "Prominent 40-kilometer circular geological dome in the Sahara clearly visible from space orbits.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Richat_Structure_ISS030-E-12516.jpg/3840px-Richat_Structure_ISS030-E-12516.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Banc d'Arguin National Park",
        "caption": "UNESCO coastal mudflat and mangrove haven hosting over two million wintering migratory shorebirds.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/69/Bancdarguin_map_lg.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Historic Ksour of Chinguetti",
        "caption": "Ancient 13th-century desert trade crossroads celebrated for stone desert libraries preserving Islamic manuscripts.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/LocationWesternAfrica.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Richat Structure",
        "caption": "The Richat Structure, or Guelb er Richât, often called the Eye of Africa is a prominent circular geological feature at the northwestern edge of the Taoudeni Basin, on the Adrar Plateau of the Sahara.  It is located near Ouadane in the Adrar Region of Mauritania.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Richat_Structure_ISS030-E-12516.jpg/330px-Richat_Structure_ISS030-E-12516.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Fennec fox",
        "caption": "The fennec fox is a small fox native to the deserts of North Africa, ranging from Western Sahara and Mauritania to the Sinai Peninsula.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Fennec_Fox_Vulpes_zerda.jpg/330px-Fennec_Fox_Vulpes_zerda.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Mauritania Iron Ore Train is one of the longest and heaviest trains in the world, stretching up to 3 kilometers across the Sahara.",
      "The Richat Structure ('Eye of the Sahara') is a colossal circular eroded dome used as a landmark by early space astronauts.",
      "Chinguetti is recognized as the seventh holy city of Islam, housing centuries-old libraries of rare calligraphy manuscripts."
    ]
  },
  "mt": {
    "landmarks": [
      {
        "title": "St. John's Co-Cathedral in Valletta",
        "caption": "Baroque masterpiece featuring an intricately carved gilded interior and Caravaggio's masterpiece painting.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/St_John%27s_Co-Cathedral%2C_Valletta_001.jpg/3840px-St_John%27s_Co-Cathedral%2C_Valletta_001.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Blue Grotto Caves",
        "caption": "A complex of sea caves on the southern coast famous for brilliant turquoise and cyan underwater reflections.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Blue_Grotto_Malta.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mdina 'The Silent City'",
        "caption": "Ancient fortified walled hilltop capital featuring narrow shaded stone alleyways and noble palaces.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Malta_-_Mdina_%28Triq_San_Oswald%29_02_ies.jpg/3840px-Malta_-_Mdina_%28Triq_San_Oswald%29_02_ies.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Blue Grotto (Malta)",
        "caption": "The Blue Grotto refers to a number of sea caverns on the south east coast of Malta, a short distance from the fishing harbour limits of...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Blue_Grotto_Malta.jpg/330px-Blue_Grotto_Malta.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Pharaoh Hound",
        "caption": "The Pharaoh Hound or Kelb tal-Fenek is a Maltese breed of warren hound.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Pies_faraona_e34.jpg/330px-Pies_faraona_e34.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Malta's megalithic temples, such as Ġgantija and Ħaġar Qim, date to 3600 BC and are older than Stonehenge and the Egyptian Pyramids.",
      "The capital city of Valletta, founded in 1566 by the Knights of St. John, is the smallest national capital in the European Union.",
      "Maltese is the only Semitic language officially recognized as a national language in the European Union, written in the Latin alphabet."
    ]
  },
  "mu": {
    "landmarks": [
      {
        "title": "Le Morne Brabant Mountain",
        "caption": "Dramatic UNESCO basaltic mountain rising from the turquoise lagoon, historic sanctuary of runaway slaves.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Le_Morne_Peninsula_in_Mauritius_%2853697779236%29.jpg/3840px-Le_Morne_Peninsula_in_Mauritius_%2853697779236%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Chamarel Seven Coloured Earths",
        "caption": "Geological phenomenon of rolling sand dunes composed of volcanic mineral sands settling into seven distinct colors.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Seven_Coloured_Earths_Geopark_in_Chamarel%2C_Mauritius_%2853697998768%29.jpg/3840px-Seven_Coloured_Earths_Geopark_in_Chamarel%2C_Mauritius_%2853697998768%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Sir Seewoosagur Ramgoolam Botanical Garden",
        "caption": "Historic 18th-century tropical botanical garden famous for giant Victoria amazonica water lilies.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/25/Seewoosagur_Ramgoolam%2C_1970.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Le Morne Brabant",
        "caption": "Le Morne Brabant is a peninsula at the extreme southwestern tip of the Indian Ocean island of Mauritius.  On it is a basaltic monolith of the same name 556 metres high.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Le_Morne_Peninsula_in_Mauritius_%2853697779236%29.jpg/330px-Le_Morne_Peninsula_in_Mauritius_%2853697779236%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mauritius kestrel",
        "caption": "The Mauritius kestrel is a bird of prey from the family Falconidae endemic to the forests of Mauritius, where it is restricted to the...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Mauritius_kestrel_%28Falco_punctatus%29.jpg/330px-Mauritius_kestrel_%28Falco_punctatus%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Mauritius was the sole habitat of the extinct flightless Dodo bird before Dutch sailors arrived in the 16th century.",
      "The 'Underwater Waterfall' off the coast of Le Morne is an optical illusion caused by sand runoff plunging into an ocean trench.",
      "Mauritius is consistently ranked as the most peaceful and economically competitive nation in Africa."
    ]
  },
  "mv": {
    "landmarks": [
      {
        "title": "Malé Atoll & Grand Friday Mosque",
        "caption": "White marble mosque with a golden dome and minaret standing at the bustling center of the island capital.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Mal%C3%A9.jpg/3840px-Mal%C3%A9.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hanifaru Bay Biosphere",
        "caption": "Protected marine bay in Baa Atoll famous for mass feeding aggregations of graceful manta rays and whale sharks.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Baa_Atoll.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Overwater Villas of Ari Atoll",
        "caption": "Iconic wooden bungalows standing on stilts directly above crystal-clear turquoise lagoons and coral reefs.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original"
      },
      {
        "title": "Baa Atoll",
        "caption": "Baa Atoll is an administrative division of the Maldives.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Baa_Atoll.png/330px-Baa_Atoll.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Manta ray",
        "caption": "Manta rays are large rays belonging to the genus Mobula.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Dharavandhoo_Thila_-_Manata_Black_Pearl.JPG/330px-Dharavandhoo_Thila_-_Manata_Black_Pearl.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Maldives is the flattest and lowest-lying country on Earth, with an average natural ground elevation of just 1.5 meters above sea level.",
      "It consists of roughly 1,192 coral islands grouped into a double chain of 26 natural atolls across the Indian Ocean.",
      "In 2009, the Maldivian cabinet held the world's very first underwater cabinet meeting to raise global awareness of rising sea levels."
    ]
  },
  "mw": {
    "landmarks": [
      {
        "title": "Lake Malawi National Park",
        "caption": "UNESCO World Heritage freshwater marine park renowned for hundreds of brightly colored endemic cichlid fish.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/05/Lake_Malawi_seen_from_orbit.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Mulanje (Sapitwa Peak)",
        "caption": "Colossal granite inselberg soaring 3,002 meters high, crowned by the endemic Mulanje cedar and tea estates.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Mulanje_ETM_26may02.jpg/3840px-Mulanje_ETM_26may02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Liwonde National Park",
        "caption": "Thriving conservation sanctuary on the Shire River teeming with hippos, African elephants, and black rhinos.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Liwonde_market.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mulanje Massif",
        "caption": "The Mulanje Massif, also known as Mount Mulanje, is a large inselberg and World Heritage Site in southern Malawi.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Mulanje_ETM_26may02.jpg/330px-Mulanje_ETM_26may02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "African fish eagle",
        "caption": "The African fish eagle or the African sea eagle is a large species of eagle found throughout sub-Saharan Africa wherever large bodies of open water with an abundant food supply occur.  It is the national bird of Malawi, Namibia, Zambia, and Zimbabwe.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/African_fish_eagle%2C_Haliaeetus_vocifer%2C_at_Chobe_National_Park%2C_Botswana_%2833516612831%29.jpg/330px-African_fish_eagle%2C_Haliaeetus_vocifer%2C_at_Chobe_National_Park%2C_Botswana_%2833516612831%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Lake Malawi contains more species of freshwater fish than any other lake in the world, with over 1,000 distinct species of cichlids.",
      "Malawi is warmly affectionately known across Africa as the 'Warm Heart of Africa' due to the friendliness of its people.",
      "Mount Mulanje is believed to have inspired J.R.R. Tolkien's depiction of the Lonely Mountain after he visited southern Africa."
    ]
  },
  "mx": {
    "landmarks": [
      {
        "title": "Chichen Itza & El Castillo",
        "caption": "Monumental Maya step-pyramid engineered to cast a shadow resembling a slithering serpent during equinoxes.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/3840px-Chichen_Itza_3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Pyramids of Teotihuacan",
        "caption": "Colossal ancient Mesoamerican city featuring the monumental Pyramid of the Sun along the Avenue of the Dead.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/2020-02-11_Teotihuacan_la_Avenida_de_los_Muertos_y_la_Pir%C3%A1mide_del_Sol.jpg/3840px-2020-02-11_Teotihuacan_la_Avenida_de_los_Muertos_y_la_Pir%C3%A1mide_del_Sol.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Copper Canyon (Barrancas del Cobre)",
        "caption": "Massive network of six distinct ravines in the Sierra Madre Occidental, larger and deeper than the Grand Canyon.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/66/Barranca_del_cobre_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Copper Canyon",
        "caption": "Copper Canyon is a system of six distinct canyons in the Sierra Madre Occidental in the southwestern part of the state of Chihuahua in northwestern Mexico that is 65,000 square kilometres (25,000 sq mi) in size.  The canyons were formed by six rivers that drain the western side of the Sierra Tarahumara.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Barranca_del_cobre_2.jpg/330px-Barranca_del_cobre_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Golden eagle",
        "caption": "The golden eagle is a bird of prey living in the Northern Hemisphere.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/330px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Mexico City was founded in 1325 as Tenochtitlan on an island in Lake Texcoco by the Aztecs, becoming the capital of New Spain.",
      "Traditional Mexican cuisine is recognized by UNESCO as an Intangible Cultural Heritage of Humanity.",
      "Chocolate was first cultivated by ancient Mesoamerican civilizations (Olmecs, Maya, and Aztecs) who consumed it as a frothy ceremonial drink."
    ]
  },
  "my": {
    "landmarks": [
      {
        "title": "Petronas Twin Towers in Kuala Lumpur",
        "caption": "88-story twin skyscrapers joined by a double-deck skybridge, former tallest buildings in the world.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sky_Deck_at_Kuala_Lumpur_Tower_%28Menara_KL%29%2C_Malaysia_on_28_July_2020_at_172828.jpg/3840px-Sky_Deck_at_Kuala_Lumpur_Tower_%28Menara_KL%29%2C_Malaysia_on_28_July_2020_at_172828.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Batu Caves & Murugan Statue",
        "caption": "Massive limestone hill featuring Hindu cave temples guarded by a 42-meter gold-coated statue of Lord Murugan.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Batu_Caves_stairs_2022-05.jpg/3840px-Batu_Caves_stairs_2022-05.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mount Kinabalu in Borneo",
        "caption": "The highest peak in Borneo (4,095 m), renowned for dramatic granite peaks and carnivorous pitcher plants.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Kinabalu_Sabah_Borneo_Kampong_Kundasang_panorama_2.jpg/3840px-Kinabalu_Sabah_Borneo_Kampong_Kundasang_panorama_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mount Kinabalu",
        "caption": "Mount Kinabalu is the highest mountain in Malaysia and Maritime Southeast Asia, located on the island of Borneo in Sabah.  With a height of 4,095 metres (13,435 ft), it is the third-highest peak of an island on Earth, the 28th-highest peak in Southeast Asia, and 20th-most-prominent mountain in the world.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Kinabalu_Sabah_Borneo_Kampong_Kundasang_panorama_2.jpg/330px-Kinabalu_Sabah_Borneo_Kampong_Kundasang_panorama_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Malayan tiger",
        "caption": "The Malayan tiger is a tiger from a specific population of the Panthera tigris tigris subspecies that is native to Peninsular Malaysia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/MalayanTiger.jpg/330px-MalayanTiger.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Malaysia is home to Taman Negara, one of the oldest deciduous tropical rainforests on Earth, estimated at 130 million years old.",
      "The King of Malaysia is chosen every five years through a unique rotational monarchy system among the hereditary royal rulers of nine states.",
      "The world's largest flower, the parasitic Rafflesia arnoldii (blooming up to 1 meter in diameter), grows wild in Malaysian rainforests."
    ]
  },
  "mz": {
    "landmarks": [
      {
        "title": "Bazaruto Archipelago Marine Park",
        "caption": "Group of six idyllic sandy barrier islands famous for towering sand dunes, coral reefs, and rare dugongs.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/ISS059-E-92404_-_View_of_Mozambique.jpg/3840px-ISS059-E-92404_-_View_of_Mozambique.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Island of Mozambique (Ilha de Moçambique)",
        "caption": "UNESCO-listed coral island with fortified Portuguese colonial architecture and the Chapel of Nossa Senhora de Baluarte.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/90/Ilha_de_Mocambique.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Gorongosa National Park",
        "caption": "Celebrated wildlife conservation reserve at the southern end of the Great East African Rift Valley.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Gorongosa_Park_Gate.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Bazaruto Archipelago",
        "caption": "The Bazaruto Archipelago is a group of six islands in Mozambique, near the mainland city of Vilankulo.  It comprises the islands of Bazaruto, Benguerra, Magaruque, Santa Carolina and Bangué.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/ISS059-E-92404_-_View_of_Mozambique.jpg/330px-ISS059-E-92404_-_View_of_Mozambique.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Dugong",
        "caption": "The dugong is a marine mammal.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Dugong.JPG/330px-Dugong.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Mozambique's national flag is the only national flag in the world to feature a modern rifle (an AK-47) alongside a hoe and book.",
      "The Bazaruto Archipelago shelters the last remaining viable wild population of dugongs (sea cows) in the Western Indian Ocean.",
      "Over 2,500 kilometers of pristine coastline along the Indian Ocean makes Mozambique a premier destination for scuba diving."
    ]
  },
  "na": {
    "landmarks": [
      {
        "title": "Sossusvlei & Dune 45",
        "caption": "Massive rust-red sand dunes in the Namib Desert, the oldest desert on Earth, rising over 300 meters high.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Sossusvlei.jpg/3840px-Sossusvlei.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Deadvlei Clay Pan",
        "caption": "Stark white clay pan dotted with 900-year-old dead camel thorn tree skeletons against burnt-orange dunes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Dead_Vlei_4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Etosha National Park Salt Pan",
        "caption": "Immense white mineral pan so large it can be seen from space, drawing thousands of flamingos, rhinos, and lions.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Dust_Cloud_in_Etosha_National_Park.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Fish River Canyon",
        "caption": "The Fish River Canyon is located in the south of Namibia.  It is the largest canyon in Africa, and the second most visited tourist attraction in Namibia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Fish_River_Canyon_from_Main_View_Point.jpg/330px-Fish_River_Canyon_from_Main_View_Point.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Cheetah",
        "caption": "The cheetah is a species of large feline and the only living member of the genus Acinonyx.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/330px-Male_cheetah_facing_left_in_South_Africa.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Namib Desert in Namibia is considered the oldest desert in the world, having endured arid conditions for at least 55 million years.",
      "Namibia was the first country in the world to incorporate environmental conservation directly into its national constitution.",
      "It is home to the largest free-roaming population of wild cheetahs in the world."
    ]
  },
  "ne": {
    "landmarks": [
      {
        "title": "Agadez Grand Mosque",
        "caption": "Imposing 27-meter-tall mudbrick minaret reinforced with protruding wooden beams in the historic caravan city of Agadez.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/1997_277-9A_Agadez_mosque_cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Aïr and Ténéré Natural Reserves",
        "caption": "Vast desert mountain range rising out of the sand seas of the Sahara, protecting rare Saharan wildlife.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Montagnes_Bleus1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "W National Park of Niger",
        "caption": "Transboundary protected savanna along the W-shaped loop of the Niger River, home to West African lions.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Niger%2C_Niamey%2C_Pont_Kennedy_%281%29.jpg/3840px-Niger%2C_Niamey%2C_Pont_Kennedy_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Aïr Mountains",
        "caption": "The Aïr Mountains or Aïr Massif is a triangular massif, located in northern Niger, within the Sahara.  Part of the West Saharan montane xeric woodlands ecoregion, they rise to more than 1,800 m (5,900 ft) and extend over 84,000 km2 (32,000 sq mi).",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Timia_valley.JPG/330px-Timia_valley.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Dama gazelle",
        "caption": "The dama gazelle, also known as the addra gazelle or mhorr gazelle, is a species of gazelle.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Gazella_dama_ruficollis_3zz.jpg/330px-Gazella_dama_ruficollis_3zz.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Grand Mosque of Agadez is the tallest mudbrick structure in the world, built in 1515 and restored in 1844.",
      "The Ténéré desert region in Niger is so isolated that a single acacia tree (Tree of Ténéré) was once the only tree for 400 km in any direction.",
      "Niger is famous for the Cure Salée festival held by Tuareg and Wodaabe nomadic pastoralists to celebrate the end of the rainy season."
    ]
  },
  "ng": {
    "landmarks": [
      {
        "title": "Zuma Rock in Niger State",
        "caption": "Monumental 725-meter natural monolith rising dramatically from the surrounding plains north of Abuja.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Zuma_Rock.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Osun-Osogbo Sacred Grove",
        "caption": "Dense primary rainforest sanctuary along the Osun River containing ancient shrines and sculptures to the Yoruba goddess Osun.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Erin-ijesha-water-fall.jpg/3840px-Erin-ijesha-water-fall.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lekki Conservation Centre",
        "caption": "Wetland nature reserve in Lagos featuring Africa's longest canopy suspension walkway (401 m).",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/A_pathway_in_the_Lekki_Convention_Center.jpg/3840px-A_pathway_in_the_Lekki_Convention_Center.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Zuma Rock",
        "caption": "Zuma Rock is a large natural monolith, or inselberg, an igneous intrusion composed of gabbro and granodiorite and of Precambrian age, located in Madalla, a town in Niger State, Nigeria.  It is situated in the west of Nigeria's capital, Abuja, along the main road from Abuja to Kaduna, off Madalla, and is sometimes referred to as the \"Gateway to Abuja from Suleja\".",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Zuma_Rock.jpg/330px-Zuma_Rock.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "African bush elephant",
        "caption": "The African bush elephant, also known as the African savanna elephant, is a species of elephant native to sub-Saharan Africa and the...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/178_Male_African_bush_elephant_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg/330px-178_Male_African_bush_elephant_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Nigeria is the most populous country in Africa and the sixth-most populous in the world, with over 220 million people.",
      "Nollywood, Nigeria's movie industry, produces over 2,500 films every year, ranking as the second-largest film producer in the world by volume.",
      "Nigeria is home to over 500 distinct languages, with Hausa, Yoruba, and Igbo being the three major regional languages."
    ]
  },
  "ni": {
    "landmarks": [
      {
        "title": "Masaya Volcano Lava Lake",
        "caption": "Active volcano featuring the smoking Santiago crater where visitors can view glowing molten lava at night.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/40/Volcan_Masaya2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ometepe Island & Twin Volcanoes",
        "caption": "Enchanting hourglass-shaped island in Lake Nicaragua formed by two volcanoes: active Concepción and dormant Maderas.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/30/Ometepemap.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Colonial Granada & Cathedral",
        "caption": "One of Central America's oldest European cities (founded 1524), celebrated for bright colonial facades and carriage rides.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Nicaragua_2017-03-15_%2833978834325%29.jpg/3840px-Nicaragua_2017-03-15_%2833978834325%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Ometepe",
        "caption": "Ometepe is an island formed by two volcanoes rising out of Lake Nicaragua, located in the Rivas Department of the Republic of Nicaragua.  Its name derives from the Nawat words ome (two) and tepetl (mountain), meaning \"two mountains\".",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Ometepemap.png/330px-Ometepemap.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Turquoise-browed motmot",
        "caption": "The turquoise-browed motmot is a colourful, medium-sized bird of the motmot family, Momotidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Turquoise-browed_motmot_%28Eumomota_superciliosa_apiaster%29_Copan_2.jpg/330px-Turquoise-browed_motmot_%28Eumomota_superciliosa_apiaster%29_Copan_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Lake Nicaragua is the largest freshwater lake in Central America and the only freshwater lake in the world home to bull sharks.",
      "Cerro Negro volcano in Nicaragua is the only place in the world where thrill-seekers can practice 'volcano boarding' down black ash slopes.",
      "Nicaragua is the largest country in Central America by geographic land area."
    ]
  },
  "nl": {
    "landmarks": [
      {
        "title": "Keukenhof Tulip Gardens",
        "caption": "The 'Garden of Europe', blooming with over 7 million vibrant tulips, hyacinths, and daffodils every spring.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/26Y_1599_2.jpg/3840px-26Y_1599_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Amsterdam Canals & Bridges",
        "caption": "UNESCO-listed 17th-century concentric canal network traversed by historic bicycles and canal cruisers.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/57/Imagen_de_los_canales_conc%C3%A9ntricos_en_%C3%81msterdam.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kinderdijk Historic Windmills",
        "caption": "Iconic collection of 19 monumental 18th-century drainage windmills engineered to manage water levels.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Zaanstad_Zaanse_Schans_22.jpg/3840px-Zaanstad_Zaanse_Schans_22.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Wadden Sea",
        "caption": "The Wadden Sea is an intertidal zone in the southeastern part of the North Sea.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/13-09-29-nordfriesisches-wattenmeer-RalfR-19.jpg/330px-13-09-29-nordfriesisches-wattenmeer-RalfR-19.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Harbor seal",
        "caption": "The harbor seal, also known as the common seal, is a true seal found along temperate and Arctic marine coastlines of the Northern...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Common_seal_%28Phoca_vitulina%29_2.jpg/330px-Common_seal_%28Phoca_vitulina%29_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Around 26% of the Netherlands lies below sea level, and 50% sits less than one meter above it, protected by an ingenious dike system.",
      "There are more bicycles in the Netherlands (roughly 23 million) than human residents (17.8 million).",
      "The Dutch people are statistically the tallest in the world on average, with adult men averaging over 183 cm (6 ft)."
    ]
  },
  "no": {
    "landmarks": [
      {
        "title": "Geirangerfjord",
        "caption": "Majestic UNESCO World Heritage fjord with deep blue waters, snow-capped peaks, and the Seven Sisters waterfall.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Geirangerfjord_.jpg/3840px-Geirangerfjord_.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Preikestolen (Pulpit Rock)",
        "caption": "Massive flat-topped cliff rising 604 meters vertically above the shimmering waters of the Lysefjord.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Lyse_Fjord_et_Preikestolen.jpg/3840px-Lyse_Fjord_et_Preikestolen.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lofoten Islands Fishing Villages",
        "caption": "Dramatic Arctic archipelago featuring jagged peaks rising from the sea and red fishermen's rorbuer cabins.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Moskenes_Reinebringen_lub_2025-07-21_img09_Aussicht.jpg/3840px-Moskenes_Reinebringen_lub_2025-07-21_img09_Aussicht.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Geirangerfjord",
        "caption": "Geirangerfjorden (Norwegian) or Geiranger Fjord (English) is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway.  It is located entirely in Stranda Municipality.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Geirangerfjord_.jpg/330px-Geirangerfjord_.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Reindeer",
        "caption": "The reindeer or caribou is a species of deer with circumpolar distribution, native to Arctic, subarctic, tundra, boreal, and mountainous...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Reinbukken_p%C3%A5_frisk_gr%C3%B8nt_beite._-_panoramio.jpg/330px-Reinbukken_p%C3%A5_frisk_gr%C3%B8nt_beite._-_panoramio.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Norway has the second-longest coastline in the world (over 100,000 km including fjords and 50,000+ coastal islands).",
      "Modern alpine and cross-country skiing was pioneered in Norway; the word 'ski' is an ancient Old Norse word meaning a split piece of wood.",
      "In Svalbard, polar bears outnumber permanent human residents, and the sun does not set for over 4 months during the midnight sun."
    ]
  },
  "np": {
    "landmarks": [
      {
        "title": "Mount Everest & Himalayas",
        "caption": "Sagarmatha, the highest mountain on planet Earth (8,848.86 m), towering above the Khumbu Icefall.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/15/Mt._Everest_from_Gokyo_Ri_November_5%2C_2012.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Swayambhunath (Monkey Temple)",
        "caption": "Ancient stupa perched atop a hill in the Kathmandu Valley painted with the all-seeing eyes of the Buddha.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Swayambhunath_2018.jpg/3840px-Swayambhunath_2018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Pokhara & Phewa Lake",
        "caption": "Idyllic alpine city with reflections of the sacred fishtail peak Machapuchare mirrored in the lake waters.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Pokhara_Valley.jpg/3840px-Pokhara_Valley.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Annapurna Sanctuary",
        "caption": "The Annapurna Sanctuary is a high glacial basin lying 40 km directly north of Pokhara.  This oval-shaped plateau sits at an altitude of over 4000 metres, and is surrounded by a ring of mountains, the Annapurna range, most of which are over 7000 metres.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Machapuchre-wow.jpg/330px-Machapuchre-wow.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Bengal tiger",
        "caption": "The Bengal tiger is a population of the Panthera tigris tigris subspecies.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg/330px-Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Nepal's national flag is the only national flag in the world that is non-quadrilateral (formed of two stacked pennants).",
      "Eight of the world's ten highest mountain peaks, including Mount Everest (8,848.86 m), lie within or on Nepal's borders.",
      "Lumbini in southern Nepal is revered as the birthplace of Siddhartha Gautama, who became Gautama Buddha around 563 BC."
    ]
  },
  "nr": {
    "landmarks": [
      {
        "title": "Anibare Bay & Harbour",
        "caption": "Pristine white sand beach framed by dramatic limestone pinnacle reefs on the eastern Pacific shore of Nauru.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Living_on_a_Blue_Planet_-_Nauru.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Command Ridge",
        "caption": "Nauru's highest point (65 m), featuring preserved WWII Japanese communication bunkers and artillery guns.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Nauru_map_english.svg/960px-Nauru_map_english.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Buada Lagoon",
        "caption": "Tranquil freshwater lagoon surrounded by lush coconut palms and breadfruit trees in Nauru's interior plateau.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Buada_Lagoon%2C_Nauru_2007.jpg/3840px-Buada_Lagoon%2C_Nauru_2007.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Buada Lagoon",
        "caption": "Buada Lagoon is a landlocked, slightly brackish, freshwater lake of Buada district in the island nation of Nauru.  It occupies 3.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Buada_Lagoon%2C_Nauru_2007.jpg/330px-Buada_Lagoon%2C_Nauru_2007.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Great frigatebird",
        "caption": "The great frigatebird is a large seabird in the frigatebird family.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Male_greater_frigate_bird_displaying.jpg/330px-Male_greater_frigate_bird_displaying.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Nauru is the smallest independent sovereign republic in the world, covering a mere 21 square kilometers (8.1 sq miles).",
      "Nauru has no official designated national capital city; government offices are situated in the Yaren District.",
      "It is the second-least populated independent sovereign nation in the world after Vatican City, with roughly 11,000 citizens."
    ]
  },
  "nz": {
    "landmarks": [
      {
        "title": "Milford Sound (Piopiotahi)",
        "caption": "Majestic fjord in Fiordland National Park carved by ancient glaciers, crowned by the sheer pyramid peak of Mitre Peak.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Milford_Sound_%28New_Zealand%29.JPG/3840px-Milford_Sound_%28New_Zealand%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Aoraki / Mount Cook",
        "caption": "The highest mountain in New Zealand (3,724 m), surrounded by Hooker Valley glacial lakes and dark sky reserves.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/07/Mt_Cook_LC0247.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Rotorua Geothermal Wonders & Hobbiton",
        "caption": "Steaming geothermal mud pools and preserved lush rolling hills of the Shire movie set in the Waikato region.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Government_Gardens_in_Rotorua_01.jpg/3840px-Government_Gardens_in_Rotorua_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Tongariro National Park",
        "caption": "Tongariro National Park, located in the central North Island, is the oldest national park in New Zealand and the sixth national park established in the world.  It has been recognised by UNESCO as a World Heritage Site for its mixed cultural and natural values.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Tongariro_Mahuia_River_n.jpg/330px-Tongariro_Mahuia_River_n.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Tuatara",
        "caption": "The tuatara is a species of reptile endemic to New Zealand.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Tuatara_%285205719005%29.jpg/330px-Tuatara_%285205719005%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "In 1893, New Zealand became the very first self-governing country in the world to grant women the right to vote in parliamentary elections.",
      "New Zealand has more sheep than people—approximately five sheep for every human resident.",
      "The Kiwi, a flightless nocturnal bird with nostrils at the tip of its bill, is the beloved national emblem of New Zealanders."
    ]
  },
  "om": {
    "landmarks": [
      {
        "title": "Sultan Qaboos Grand Mosque",
        "caption": "Monumental white marble mosque in Muscat housing a gargantuan Persian hand-woven prayer carpet.",
        "url": "https://thumb.wikimedia.org/wikipedia/en/thumb/5/5b/Sultan_Qaboos_Grand_Mosque_RB.jpg/3840px-Sultan_Qaboos_Grand_Mosque_RB.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Nizwa Fort & Heritage Souq",
        "caption": "Massive 17th-century circular defense tower fortress guarding oasis date palms and artisan silver markets.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Nizwa_%285%29.jpg/3840px-Nizwa_%285%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Wahiba Sands (Sharqiya)",
        "caption": "Immense golden and copper sand dunes rising over 100 meters high, traditional territory of Bedouin communities.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Al-alamPalace.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Jebel Akhdar (Oman)",
        "caption": "The Jebel Akhdar Mountains is a mountain range approximately 80 km (50 mi) long and 32 km (20 mi) wide, that is part of the Hajar Mountains in Ad Dakhiliyah Governorate of Oman.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Jebel_Akhdar_view.jpg/330px-Jebel_Akhdar_view.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Arabian oryx",
        "caption": "The Arabian oryx or white oryx is a medium-sized antelope with a distinct shoulder bump, long, straight horns, and a tufted tail.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Arabian_oryx_%28oryx_leucoryx%29.jpg/330px-Arabian_oryx_%28oryx_leucoryx%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Oman is the oldest continuously independent state in the Arab world, with ancient maritime trading networks reaching East Africa.",
      "Frankincense from the Boswellia sacra trees of Dhofar in southern Oman has been traded since ancient times across Mesopotamia and Egypt.",
      "Traditional Omani falaj water irrigation channels date back over 2,000 years and are recognized as UNESCO World Heritage treasures."
    ]
  },
  "pa": {
    "landmarks": [
      {
        "title": "The Panama Canal & Miraflores Locks",
        "caption": "Engineering marvel connecting the Atlantic and Pacific oceans, lifting colossal container ships 26 meters via locks.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Panama_Canal_Map_EN.svg/500px-Panama_Canal_Map_EN.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Casco Viejo (Old Panama)",
        "caption": "Historic 17th-century colonial district in Panama City featuring brick streets, rooftop bars, and Spanish plazas.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Casco_Antiguo_%28San_Felipe%29_-_Pamama.jpg/3840px-Casco_Antiguo_%28San_Felipe%29_-_Pamama.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "San Blas Islands (Guna Yala)",
        "caption": "Archipelago of 365 postcard-perfect coral islands governed autonomously by the indigenous Guna people.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Kuna_Yala_beach_2003.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "San Blas Islands",
        "caption": "The San Blas Islands of Panama is an archipelago comprising approximately 365 islands and cays, of which 49 are inhabited.  They lie off the north coast of the Isthmus of Panama, east of the Panama Canal.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/San_Blas_Islands.jpg/330px-San_Blas_Islands.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Harpy eagle",
        "caption": "The harpy eagle is a large neotropical species of eagle.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Harpia_harpyja_001_800.jpg/330px-Harpia_harpyja_001_800.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Panama is the only place in the world where one can watch the sun rise over the Pacific Ocean and set over the Atlantic Ocean from the same spot.",
      "The Panama Canal generates over 2 billion dollars in annual toll revenue and handles roughly 5% of all global maritime trade.",
      "The indigenous Guna women of San Blas are famous for crafting intricate multi-layered applique textile art known as Molas."
    ]
  },
  "pe": {
    "landmarks": [
      {
        "title": "Machu Picchu & Huayna Picchu",
        "caption": "15th-century Inca citadel perched 2,430 meters high on an Andean mountain ridge above the Urubamba River valley.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg"
      },
      {
        "title": "Vinicunca (Rainbow Mountain)",
        "caption": "High Andean mountain famed for natural mineral stripes of turquoise, lavender, magenta, and gold at 5,200 m elevation.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Monta%C3%B1aarcoirisperuabanto.jpg/3840px-Monta%C3%B1aarcoirisperuabanto.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Nazca Lines in the Coastal Desert",
        "caption": "Enigmatic geoglyphs etched into the desert floor depicting hummingbirds, monkeys, and geometric shapes.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/L%C3%ADneas_de_Nazca%2C_Nazca%2C_Per%C3%BA%2C_2015-07-29%2C_DD_49.JPG/3840px-L%C3%ADneas_de_Nazca%2C_Nazca%2C_Per%C3%BA%2C_2015-07-29%2C_DD_49.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Vinicunca",
        "caption": "Vinicunca, or Winikunka, also called Montaña de Siete Colores, Montaña de Colores, or Montaña Arcoíris, is a mountain in the Andes of Peru with an altitude of 5,036 metres (16,522 ft) above sea level.  It is located on the road to Ausangate mountain, in the Cusco region, between Cusipata District, Quispicanchi, and Pitumarca District, Canchis.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Monta%C3%B1aarcoirisperuabanto.jpg/330px-Monta%C3%B1aarcoirisperuabanto.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Andean condor",
        "caption": "The Andean condor is a South American New World vulture and is the only extant member of the genus Vultur.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/330px-AndeanCondorMale.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Machu Picchu was built without mortar; the Incas used a technique called ashlar, fitting giant stones so tightly that not even a knife blade can pass.",
      "Peru is the birthplace of the potato, where indigenous Andean farmers cultivated over 4,000 distinct varieties over millennia.",
      "The Amazon River begins in the Peruvian Andes, originating from glacier streams high on Mount Mismi."
    ]
  },
  "pg": {
    "landmarks": [
      {
        "title": "Mount Wilhelm Peak",
        "caption": "The highest mountain in Papua New Guinea (4,509 m), featuring glacial alpine valleys and equatorial tarns.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Mount_Wilhelm.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kokoda Track",
        "caption": "Historic 96-kilometer overland trail traversing the rugged Owen Stanley Range, famous for heroic World War II battles.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/83/New_guinea_kokoda.PNG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Rabaul Volcano & Tavurvur Caldera",
        "caption": "Active stratovolcano on New Britain Island that buried the colonial town of Rabaul in volcanic ash in 1994.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/90/Rabaul_from_Vulcanology_Observatory.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Wilhelm",
        "caption": "Mount Wilhelm is the highest mountain in Papua New Guinea at 4,509 metres (14,793 ft).  It is part of the Bismarck Range and the peak is the point where three provinces, Chimbu, Jiwaka and Madang, meet.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Mount_Wilhelm.jpg/330px-Mount_Wilhelm.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Raggiana bird-of-paradise",
        "caption": "The Raggiana bird-of-paradise, also known as Count Raggi's bird-of-paradise, is a large bird in the bird-of-paradise family Paradisaeidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Raggiana_Bird-of-paradise_0A2A5379.jpg/330px-Raggiana_Bird-of-paradise_0A2A5379.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Papua New Guinea is the most linguistically diverse country on Earth, with over 840 living indigenous languages spoken.",
      "It is home to the stunning Birds of Paradise, whose elaborate plumage and courtship dances are celebrated in tribal Sing-Sing festivals.",
      "Over 75% of Papua New Guinea's land area remains blanketed by pristine tropical rainforests."
    ]
  },
  "ph": {
    "landmarks": [
      {
        "title": "Chocolate Hills of Bohol",
        "caption": "Over 1,700 conical grass-covered limestone mounds that turn cocoa-brown during the dry season.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/af/Chocolate_Hills_Bohol.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Banaue Rice Terraces",
        "caption": "2,000-year-old mountain terraces carved into the Cordillera mountains by the ancestors of the indigenous Ifugao people.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Banaue-terrace.JPG/3840px-Banaue-terrace.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "El Nido Lagoons in Palawan",
        "caption": "Towering limestone karst cliffs enclosing secret turquoise lagoons and crystal-clear tropical snorkeling reefs.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/El_Nido_Bay_December_2018.jpg/3840px-El_Nido_Bay_December_2018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Chocolate Hills",
        "caption": "The Chocolate Hills are a geological formation in the Philippine province of Bohol.  A minimum of 1,260 hills, and possibly over 1,776, spread over an area of more than 50 square kilometers (20 sq mi).",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Chocolate_Hills_Bohol.JPG/330px-Chocolate_Hills_Bohol.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Philippine eagle",
        "caption": "The Philippine eagle, also known as the monkey-eating eagle or great Philippine eagle, is a critically endangered species of eagle of...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Pamarayeg_IIIx2_%28cropped%29.jpg/330px-Pamarayeg_IIIx2_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Philippines is an archipelago of over 7,640 islands in Southeast Asia, with roughly 2,000 islands inhabited.",
      "It is home to the Philippine eagle (monkey-eating eagle), one of the largest, rarest, and most powerful eagles in the world.",
      "The Puerto Princesa Subterranean River in Palawan is an 8.2-kilometer navigable underground river flowing directly into the sea."
    ]
  },
  "pk": {
    "landmarks": [
      {
        "title": "Badshahi Mosque in Lahore",
        "caption": "Monumental red sandstone Mughal mosque built by Emperor Aurangzeb with carved marble inlays.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Badshahi_Mosque_front_picture.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "K2 Peak & Karakoram Range",
        "caption": "The world's second-highest mountain (8,611 m), known as the 'Savage Mountain' in the Gilgit-Baltistan region.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Chogori.jpg/3840px-Chogori.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hunza Valley & Baltit Fort",
        "caption": "High-mountain paradise framed by Rakaposhi and Ultar Sar peaks with ancient terraced apricot orchards.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Hunza_Valley_HDR.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "K2",
        "caption": "K2, also known as Mount Godwin-Austen, at 8,611 metres (28,251 ft) above sea level, is the second-highest mountain on Earth, after Mount Everest at 8,849 metres (29,032 ft).  It lies in the Karakoram range, partially in the Gilgit-Baltistan region of Pakistan-administered Kashmir and partially in the China-administered Trans-Karakoram Tract in the Taxkorgan Tajik Autonomous County of Xinjiang.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Chogori.jpg/330px-Chogori.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Markhor",
        "caption": "The markhor is a large wild Capra species native to the mountain regions at the crossroads of Central and South Asia, including the...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/330px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Pakistan is home to five of the world's 14 peaks above 8,000 meters, including K2 and Nanga Parbat.",
      "The ancient Indus Valley Civilization site of Mohenjo-daro in Sindh featured the world's earliest known planned urban sanitation systems.",
      "The city of Sialkot in Pakistan produces over 70% of the world's hand-stitched professional footballs, including official FIFA World Cup balls."
    ]
  },
  "pl": {
    "landmarks": [
      {
        "title": "Wieliczka Salt Mine",
        "caption": "Underground world of labyrinthine chambers, saline lakes, and the Chapel of St. Kinga carved entirely from rock salt.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/%CE%91%CE%BB%CE%B1%CF%84%CF%89%CF%81%CF%85%CF%87%CE%B5%CE%AF%CE%B1_%CE%92%CE%B9%CE%B5%CE%BB%CE%AF%CF%84%CF%83%CE%BA%CE%B1_5021.jpg/3840px-%CE%91%CE%BB%CE%B1%CF%84%CF%89%CF%81%CF%85%CF%87%CE%B5%CE%AF%CE%B1_%CE%92%CE%B9%CE%B5%CE%BB%CE%AF%CF%84%CF%83%CE%BA%CE%B1_5021.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Wawel Royal Castle in Kraków",
        "caption": "Historic fortified complex overlooking the Vistula River that served as the royal seat of Polish monarchs for centuries.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Wawel_%284%29.jpg/3840px-Wawel_%284%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Białowieża Primeval Forest",
        "caption": "One of the last and largest remaining parts of the immense primeval forest that once stretched across the European plain.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Bialowieza_National_Park_in_Poland0029.JPG/3840px-Bialowieza_National_Park_in_Poland0029.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Tatra Mountains",
        "caption": "The Tatra Mountains or Tatras, are a series of mountains within the Western Carpathians that form a natural border between Slovakia and...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Tatra_mountains_western_side_2.jpg/330px-Tatra_mountains_western_side_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "European bison",
        "caption": "The European bison or the European wood bison, also known as the wisent, the zubr, or sometimes colloquially as the European buffalo, is...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/European_bison_%28Bison_bonasus%29_male_Bia%C5%82owieza.jpg/330px-European_bison_%28Bison_bonasus%29_male_Bia%C5%82owieza.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Poland's Constitution of May 3, 1791 was the first modern written democratic constitution in Europe and the second in the world after the US.",
      "Marie Skłodowska Curie, born in Warsaw, was the first person to win two Nobel Prizes in two different scientific fields (Physics and Chemistry).",
      "Poland is home to nearly 25% of the world's population of white storks, which nest on rooftops across the countryside every summer."
    ]
  },
  "ps": {
    "landmarks": [
      {
        "title": "Church of the Nativity in Bethlehem",
        "caption": "One of the oldest continuously operating Christian churches, built over the grotto venerated as Jesus's birthplace.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Church_of_the_Nativity_%287703592746%29.jpg/3840px-Church_of_the_Nativity_%287703592746%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hisham's Palace in Jericho",
        "caption": "Umayyad desert palace famous for its magnificent 'Tree of Life' floor mosaic, one of the largest in antiquity.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Hisham_Palace_in_Jericho2.jpg/3840px-Hisham_Palace_in_Jericho2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Old City of Hebron",
        "caption": "Ancient stone quarters centering the Cave of the Patriarchs (Ibrahimi Mosque), sacred to both Judaism and Islam.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/16-03-31-Hebron-Altstadt-RalfR-WAT_5712.jpg/3840px-16-03-31-Hebron-Altstadt-RalfR-WAT_5712.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Wadi Qelt",
        "caption": "Wadi Qelt, in Hebrew Nahal Prat, formerly Naḥal Faran, is a valley, riverine gulch or stream in the West Bank, originating near...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/WadiKelt_ST_06.jpg/330px-WadiKelt_ST_06.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mountain gazelle",
        "caption": "The mountain gazelle, also called the true gazelle or the Palestine mountain gazelle, is a species of gazelle that is widely but...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Gazella_gazella.jpg/330px-Gazella_gazella.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Jericho is widely considered one of the oldest continuously inhabited cities on Earth, with archaeological evidence spanning over 11,000 years.",
      "Olive trees are deeply intertwined with Palestinian identity; some ancient olive groves in the West Bank are estimated to be over 2,000 years old.",
      "Traditional Palestinian cross-stitch embroidery (tatreez) is inscribed on UNESCO's Representative List of Intangible Cultural Heritage."
    ]
  },
  "pt": {
    "landmarks": [
      {
        "title": "Belém Tower & Jerónimos Monastery",
        "caption": "Manueline maritime architectural masterpieces in Lisbon celebrating the Age of Discoveries.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Bel%C3%A9m_Tower_in_Lisbon%2C_Portugal.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Pena Palace in Sintra",
        "caption": "Vibrantly colored Romanticist fairytale palace crowning the misty forested peaks of the Sintra mountains.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/74/Sintra_Portugal_Pal%C3%A1cio_da_Pena-01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Dom Luís I Bridge in Porto",
        "caption": "Double-deck metal arch bridge spanning the Douro River, engineered by a student of Gustave Eiffel.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Dom_Lu%C3%ADs_I_Bridge_%2836961760686%29.jpg/3840px-Dom_Lu%C3%ADs_I_Bridge_%2836961760686%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Peneda-Gerês National Park",
        "caption": "Peneda-Gerês National Park, also known simply as Gerês, is a national park in Norte Region, Portugal.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Serra_Amarela_%283998067385%29_%282%29.jpg/330px-Serra_Amarela_%283998067385%29_%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Iberian wolf",
        "caption": "The Iberian wolf, is a subspecies of grey wolf.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Iberian_Wolf_AdF_001.jpg/330px-Iberian_Wolf_AdF_001.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Portugal and England share the Treaty of Windsor (1386), the oldest active diplomatic alliance in recorded world history.",
      "Portugal produces more than 50% of the world's commercial cork supply, harvested sustainably from cork oak forests in the Alentejo.",
      "Lisbon is one of the oldest cities in Western Europe, predating London, Paris, and even Rome by four centuries."
    ]
  },
  "pw": {
    "landmarks": [
      {
        "title": "Rock Islands Southern Lagoon",
        "caption": "Mushroom-shaped emerald limestone islets surrounded by turquoise coral lagoons, a UNESCO World Heritage marvel.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Ngerukewid-2016-aerial-view-Luka-Peternel.jpg/3840px-Ngerukewid-2016-aerial-view-Luka-Peternel.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Jellyfish Lake (Ongeim'l Tketau)",
        "caption": "Isolated marine lake populated by millions of golden jellyfish that lost their stinging ability over evolutionary time.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Jellyfish_Lake_aerial_%28March_2008%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ngardmau Waterfalls",
        "caption": "The tallest waterfall in Micronesia, tumbling 30 meters over a wide rock face into a jungle freshwater pool on Babeldaob.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Ngardmau_Dock_1.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Rock Islands",
        "caption": "The Rock Islands of Palau, also called Chelbacheb, are a collection of several hundred small limestone or coral uprises in the Southern Lagoon of Palau between Koror and Peleliu, now an incorporated part of Koror State.  There are between 250 and 300 islands in the group according to different sources, with an aggregate area of 42 square kilometers (16 sq mi) and a maximum height of 207 meters (679 ft).",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Ngerukewid-2016-aerial-view-Luka-Peternel.jpg/330px-Ngerukewid-2016-aerial-view-Luka-Peternel.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Palau fruit dove",
        "caption": "The Palau fruit dove is a species of bird in the family Columbidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Palau_fruit_dove_%28Ptilinopus_pelewensis%29_Rock_Islands.jpg/330px-Palau_fruit_dove_%28Ptilinopus_pelewensis%29_Rock_Islands.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Visitors to Palau must sign the 'Palau Pledge' stamped into their passports, swearing to tread lightly and preserve the island environment.",
      "In 2009, Palau created the world's very first dedicated National Shark Sanctuary, banning all commercial shark fishing in its EEZ.",
      "Palau is renowned for Jellyfish Lake, where swimmers can safely snorkel with millions of stingless golden jellyfish."
    ]
  },
  "py": {
    "landmarks": [
      {
        "title": "Itaipu Dam",
        "caption": "One of the largest operational hydroelectric power plants in the world on the Paraná River, shared with Brazil.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Itaipu_geral.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Jesuit Missions of La Santísima Trinidad",
        "caption": "UNESCO-listed ruins of 17th-century autonomous religious communities established by the Jesuits for the Guaraní people.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Trinidad_%28Paraguay%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "The Gran Chaco Wilderness",
        "caption": "Vast, sparsely populated dry forest plain home to jaguars, giant armadillos, and diverse Mennonite farming colonies.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/ce/MapaAyoreosAislados.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Iguazu Falls",
        "caption": "Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg/330px-Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Giant armadillo",
        "caption": "The giant armadillo, colloquially tatu-canastra, tatou, ocarro or tatú carreta, is the largest living species of armadillo.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Priodontes_maximus_at_R%C3%A9gina.jpg/330px-Priodontes_maximus_at_R%C3%A9gina.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Paraguay is one of the only countries in the Americas where an indigenous language (Guaraní) is spoken by the non-indigenous majority.",
      "Its national flag is unique among sovereign nations for having different emblems on the obverse and reverse sides.",
      "Paraguay generates almost 100% of its electricity from clean renewable hydroelectric dams, exporting clean surplus power."
    ]
  },
  "qa": {
    "landmarks": [
      {
        "title": "Museum of Islamic Art in Doha",
        "caption": "I.M. Pei's geometric limestone masterpiece standing on an artificial peninsula along the Doha Corniche.",
        "url": "https://thumb.wikimedia.org/wikipedia/en/thumb/c/c7/Museum_of_Islamic_Art_in_Doha%2C_Qatar_%2832673171432%29.jpg/3840px-Museum_of_Islamic_Art_in_Doha%2C_Qatar_%2832673171432%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Souq Waqif",
        "caption": "Vibrant traditional marketplace in Doha famous for spices, falconry shops, Arabian horses, and woven textiles.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Souq_Waqif%2C_Doha%2C_Catar%2C_2013-08-05%2C_DD_84.JPG/3840px-Souq_Waqif%2C_Doha%2C_Catar%2C_2013-08-05%2C_DD_84.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Inland Sea (Khor Al Adaid)",
        "caption": "UNESCO-recognized natural marvel where the sea reaches deep into the heart of towering desert dunes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/21/Dunes_at_Khawr_al_Udayd_in_2004.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Khor Al Adaid",
        "caption": "Khor Al Adaid, is a settlement and inlet of the Persian Gulf in Al Wakrah Municipality in southeast Qatar, on the border with Saudi Arabia.  Approximately 78 kilometres (48 mi) south of the capital Doha, it is also known to local English speakers as the \"Inland Sea\".",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Dunes_at_Khawr_al_Udayd_in_2004.jpg/330px-Dunes_at_Khawr_al_Udayd_in_2004.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Arabian oryx",
        "caption": "The Arabian oryx or white oryx is a medium-sized antelope with a distinct shoulder bump, long, straight horns, and a tufted tail.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Arabian_oryx_%28oryx_leucoryx%29.jpg/330px-Arabian_oryx_%28oryx_leucoryx%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Qatar hosted the 2022 FIFA World Cup, becoming the very first Arab nation to host the prestigious international football tournament.",
      "It is home to the world's largest non-associated offshore natural gas reserve, the North Field.",
      "Traditional falconry is a celebrated national sport in Qatar, with a dedicated falcon hospital operating in Souq Waqif."
    ]
  },
  "ro": {
    "landmarks": [
      {
        "title": "Bran Castle (Dracula's Castle)",
        "caption": "Dramatic medieval fortress perched on a 200-foot rock in Transylvania, linked in folklore to Bram Stoker's Dracula.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/17/Castelul_Bran2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Transfăgărășan Highway",
        "caption": "Spectacular serpentine alpine mountain road winding through the Fagaras Mountains of the Southern Carpathians.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/74/Romania-roads-DN7C.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Palace of the Parliament in Bucharest",
        "caption": "The world's heaviest building and second-largest administrative building, containing over 1,100 rooms.",
        "url": "https://thumb.wikimedia.org/wikipedia/en/thumb/1/18/Bucharest_-_Palace_of_the_Parliament_%282024%29_%282%29.jpg/3840px-Bucharest_-_Palace_of_the_Parliament_%282024%29_%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Danube Delta",
        "caption": "The Danube Delta is the second largest river delta in Europe, after the Volga Delta, and is the best preserved on the continent.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Danube_Delta_ESA23450088.jpeg/330px-Danube_Delta_ESA23450088.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Eurasian brown bear",
        "caption": "The Eurasian brown bear is one of the most common subspecies of the brown bear, and is found in much of Eurasia.  It is also called the European brown bear, common brown bear, common bear, European bear, and colloquially by many other names.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Eurasian_brown_bear_%28Ursus_arctos_arctos%29_female_1.jpg/330px-Eurasian_brown_bear_%28Ursus_arctos_arctos%29_female_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Palace of the Parliament in Bucharest weighs an astonishing 4.1 million tonnes, recognized as the heaviest building on Earth.",
      "The fountain pen was invented in 1827 by Romanian mathematician and engineer Petrache Poenaru while studying in Paris.",
      "Timișoara in Romania was the first city in continental Europe to be lit by electric street lamps in 1884."
    ]
  },
  "rs": {
    "landmarks": [
      {
        "title": "Belgrade Fortress (Kalemegdan)",
        "caption": "Historic citadel perched at the scenic confluence of the Danube and Sava rivers, contested in over 115 battles.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/P037152-661920_-_Belgrade_fortress_stand_at_the_downtown_of_Belgrade.jpg/3840px-P037152-661920_-_Belgrade_fortress_stand_at_the_downtown_of_Belgrade.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Church of Saint Sava",
        "caption": "One of the largest Eastern Orthodox churches in the world, dominating the Belgrade skyline with its marble and gold interior.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Hram_svetog_save_beograd_0005_%28edited%29.jpg/3840px-Hram_svetog_save_beograd_0005_%28edited%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Tara National Park & Drina River House",
        "caption": "Pristine mountain forests and the famous tiny wooden cabin balanced atop a solitary rock in the middle of the Drina River.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Mitrovac_na_Tari.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Tara (mountain)",
        "caption": "Tara is a mountain in western Serbia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Mitrovac_na_Tari.jpg/330px-Mitrovac_na_Tari.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Eurasian griffon vulture",
        "caption": "The Eurasian griffon vulture is a large Old World vulture in the bird of prey family Accipitridae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Gyps_fulvus_in_flight_-_Spain.jpg/330px-Gyps_fulvus_in_flight_-_Spain.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Nikola Tesla, the pioneering electrical engineer who invented alternating current (AC) power, was of Serbian heritage.",
      "Eighteen Roman emperors were born on the territory of modern-day Serbia, including Constantine the Great.",
      "Serbia is one of the world's largest exporters of raspberries, supplying over 20% of the world market."
    ]
  },
  "ru": {
    "landmarks": [
      {
        "title": "Saint Basil's Cathedral & Red Square",
        "caption": "Iconic multi-colored flame-shaped onion domes commissioned by Ivan the Terrible in the heart of Moscow.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/18/Saint_Basil%27s_Cathedral_in_Moscow.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "The State Hermitage Museum",
        "caption": "Former Winter Palace of the Russian Tsars in Saint Petersburg housing over 3 million treasures and works of art.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/16/5174-3._St._Petersburg._Greater_Hermitage.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Baikal",
        "caption": "The world's deepest (1,642 m) and oldest freshwater lake, containing over 20% of Earth's unfrozen surface fresh water.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Baikal.A2001296.0420.250m-NASA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Baikal",
        "caption": "Lake Baikal is a rift lake and the deepest lake in the world.  It is situated in southern Siberia, Russia, between the federal subjects of Irkutsk Oblast to the northwest and the Republic of Buryatia to the southeast.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Baikal.A2001296.0420.250m-NASA.jpg/330px-Baikal.A2001296.0420.250m-NASA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Siberian tiger",
        "caption": "The Siberian tiger or Amur tiger is a population of the tiger subspecies Panthera tigris tigris native to Northeast China, the Russian...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/330px-P.t.altaica_Tomak_Male.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Russia is the largest country in the world by land area, spanning 11 time zones and encompassing one-tenth of Earth's total land.",
      "Lake Baikal in Siberia contains more freshwater than all five North American Great Lakes combined.",
      "The Trans-Siberian Railway is the longest single railway line on Earth, traversing 9,289 kilometers (5,772 miles) from Moscow to Vladivostok."
    ]
  },
  "rw": {
    "landmarks": [
      {
        "title": "Volcanoes National Park",
        "caption": "Misty rainforest slopes of the Virunga volcanoes, famous as the sanctuary of wild mountain gorillas studied by Dian Fossey.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/48/Volcanoes_National_Park_Banner_Image.gif?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Nyungwe Forest National Park",
        "caption": "Vast montane rainforest reserve featuring an exhilarating 70-meter-high canopy suspension bridge.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/RwandaVolcanoAndLake_cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Kivu Shoreline & Gisenyi",
        "caption": "One of Africa's Great Lakes, surrounded by rolling green emerald hills and sandy beaches.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/19/LakeKivu_satellite.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Virunga Mountains",
        "caption": "The Virunga Mountains are a chain of volcanoes in East Africa, in the area where Rwanda, the Democratic Republic of the Congo (DRC), and Uganda meet.  The mountain range is a branch of the Albertine Rift Mountains, which border the western branch of the East African Rift.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Virunga_National_Park_Landscape.jpg/330px-Virunga_National_Park_Landscape.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mountain gorilla",
        "caption": "The mountain gorilla is one of the two subspecies of the eastern gorilla.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Susa_group%2C_mountain_gorilla.jpg/330px-Susa_group%2C_mountain_gorilla.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Rwanda has the highest percentage of women in parliament of any country in the world, with women holding over 60% of parliamentary seats.",
      "Known as the 'Land of a Thousand Hills' (Pays des Mille Collines) due to its endless terraced rolling green topography.",
      "On the last Saturday of every month, Rwandans participate in Umuganda, a nationwide mandatory community service morning to clean and build."
    ]
  },
  "sa": {
    "landmarks": [
      {
        "title": "Al-Ula & Hegra (Madain Salih)",
        "caption": "Saudi Arabia's first UNESCO World Heritage Site, featuring monumental rock-cut tombs carved by the Nabataeans.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/68/King_Faisal_bin_Abdulaziz_%28cropped%29%28b%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kingdom Centre Tower in Riyadh",
        "caption": "Iconic 302-meter skyscraper featuring an inverted parabolic arch spanned by an illuminated skybridge.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Kingdom_Centre_Riyadh_2024.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "The Edge of the World (Jebel Fihrayn)",
        "caption": "Dramatic 300-meter sheer cliff drop along the Tuwaiq Escarpment offering uninterrupted horizon views.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Tuwaiq_Escarpment-14h38m25s-k.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Rub' al Khali",
        "caption": "The Rub' al Khali is a desert encompassing most of the southern third of the Arabian Peninsula.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Rub_al_Khali_002.JPG/330px-Rub_al_Khali_002.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Arabian leopard",
        "caption": "The Arabian leopard is the smallest leopard subspecies.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/PikiWiki_Israel_14861_judean_desert_leopard_cropped.JPG/330px-PikiWiki_Israel_14861_judean_desert_leopard_cropped.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Saudi Arabia is home to the Rub' al Khali (Empty Quarter), the largest continuous sand desert in the world, covering 650,000 sq km.",
      "It has no permanent natural rivers; freshwater is supplied primarily by underground aquifers and the world's largest seawater desalination network.",
      "Mecca and Medina, the two holiest cities in Islam, are situated in the western Hejaz region of Saudi Arabia."
    ]
  },
  "sb": {
    "landmarks": [
      {
        "title": "Marovo Lagoon",
        "caption": "The world's largest saltwater double-barrier lagoon, dotted with hundreds of forested coral islets in New Georgia.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Vangunu_Island_NASA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Iron Bottom Sound in Guadalcanal",
        "caption": "Historic sea strait containing dozens of sunken WWII naval warships and aircraft from the Battle of Guadalcanal.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/IronbottomSound.jpg/3840px-IronbottomSound.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mataniko Waterfalls",
        "caption": "Scenic dual cascade tumbling into a limestone cavern pool surrounded by dense tropical jungle near Honiara.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Mataniko_River_Solomon_Islands.jpg"
      },
      {
        "title": "Marovo Lagoon",
        "caption": "Marovo Lagoon is the largest double-barrier enclosed lagoon in the world.  Located in the New Georgia Islands, Western Province, Solomon Islands, between Vangunu and Nggatokae islands, both extinct volcanic islands, at 8.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Vangunu_Island_NASA.jpg/330px-Vangunu_Island_NASA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Sanford's sea eagle",
        "caption": "Sanford's sea eagle, also known as Sanford's fish eagle or the Solomon eagle, is a sea eagle endemic to the Solomon Islands archipelago.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Icthyophaga_sanfordi_-_R%C3%A9mi_Bigonneau_-_239032930.jpeg/330px-Icthyophaga_sanfordi_-_R%C3%A9mi_Bigonneau_-_239032930.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Marovo Lagoon in the Solomon Islands is the largest saltwater lagoon protected by a double barrier reef on Earth.",
      "Some indigenous Solomon Islanders possess a unique natural gene that produces blonde hair alongside dark Melanesian skin.",
      "Kavachi, an active submarine volcano in the Western Province, is nicknamed the 'Sharkcano' because sharks thrive in its warm acidic caldera."
    ]
  },
  "sc": {
    "landmarks": [
      {
        "title": "Anse Source d'Argent on La Digue",
        "caption": "Globally renowned tropical beach framed by enormous sculpted granite boulders and crystal-clear turquoise waters.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/La_Digue_asv2024-10_img22_Union_Estate.jpg/3840px-La_Digue_asv2024-10_img22_Union_Estate.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Vallée de Mai on Praslin",
        "caption": "Prehistoric palm forest sanctuary home to the endemic Coco de Mer palm bearing the world's largest and heaviest seed.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/29/Valle%C3%A9_de_mai2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Aldabra Atoll",
        "caption": "The world's second-largest coral atoll, home to over 150,000 giant Aldabra tortoises.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b2/An_Outpost_for_Evolution_at_Aldabra_Atoll.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mahé highlands and surrounding areas Important Bird Area",
        "caption": "The Mahé highlands and surrounding areas Important Bird Area occupy the central and north-western part of the island of Mahé in the Seychelles archipelago of the western Indian Ocean.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Morne_Seychellois_NP_footpath.jpg/330px-Morne_Seychellois_NP_footpath.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Aldabra giant tortoise",
        "caption": "The Aldabra giant tortoise, Aldabra tortoise, or simply giant tortoise, is a species of tortoise in the family Testudinidae and genus...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Giant_Tortoise.JPG/330px-Giant_Tortoise.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Seychelles is the least populous sovereign country in Africa, with roughly 100,000 residents across 115 islands.",
      "The Coco de Mer palm seed native to Praslin can weigh up to 30 kilograms (66 lbs), holding the world record for the largest seed.",
      "Almost 50% of Seychelles' total land area is designated under strict environmental protection laws."
    ]
  },
  "sd": {
    "landmarks": [
      {
        "title": "Meroë Pyramids",
        "caption": "Nearly 200 steep-angled sandstone pyramids rising from desert dunes, royal tombs of the ancient Kingdom of Kush.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/NubianMeroePyramids30sep2005%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Jebel Barkal & Napata",
        "caption": "Sacred sandstone mountain in Nubia revered by pharaohs and Kushite kings as the southern home of the god Amun.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gebel_Barkal.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Confluence of Blue & White Nile",
        "caption": "Historic water junction at Khartoum where the silt-rich Blue Nile from Ethiopia joins the White Nile from Lake Victoria.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/ET_Bahir_Dar_asv2018-02_img32_view_from_Bezawit.jpg/3840px-ET_Bahir_Dar_asv2018-02_img32_view_from_Bezawit.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Bayuda Desert",
        "caption": "The Bayuda Desert, located at 18°N 33°E, is in the eastern region of the Sahara Desert, spanning approximately 100,000 km2 of northeast Sudan north of Omdurman and south of Korti, embraced by the great bend of the Nile in the north, east, and south and limited by the Wadi Muqaddam in the west.  The north-to-south-aligned Wadi Abu Dom divides the Bayuda Desert into the eastern Bayuda Volcanic Field and the western ochre-colored sand-sheets scattered with rocky outcrop.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Bayuda_Desert_NASA.jpg/330px-Bayuda_Desert_NASA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Secretarybird",
        "caption": "The secretarybird or secretary bird is a large bird of prey that is endemic to Africa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Secretary_bird_Mara_for_WC.jpg/330px-Secretary_bird_Mara_for_WC.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Sudan has more pyramids than Egypt—over 250 ancient Nubian pyramids stand across sites like Meroë, El Kurru, and Nuri.",
      "The Kingdom of Kush ruled over all of Egypt during the 25th Dynasty, known to historians as the Black Pharaohs.",
      "Sudan produces over 70% of the world's commercial supply of gum arabic, harvested from acacia senegal trees."
    ]
  },
  "se": {
    "landmarks": [
      {
        "title": "The Vasa Ship Museum",
        "caption": "The world's only intact 17th-century warship, salvaged from the Stockholm seabed after 333 years underwater.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stockholm_Vasa_Museum_and_Nordic_Museum_09.jpg/3840px-Stockholm_Vasa_Museum_and_Nordic_Museum_09.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Gamla Stan (Stockholm Old Town)",
        "caption": "Historic cobblestone island quarter featuring colorful 17th-century merchant houses and the Royal Palace.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Gamla_stan_September_2014_01.jpg/3840px-Gamla_stan_September_2014_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Icehotel in Jukkasjärvi",
        "caption": "The world's original hotel sculpted entirely from natural river ice and snow in Swedish Lapland every winter.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/0f/ICEHOTEL_Main_Hall_%282014%29_by_Alessandro_Falca_%26_AnnaSofia_M%C3%A5%C3%A5g.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Abisko National Park",
        "caption": "Abisko National Park is a National Park in Sweden, established in 1909.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Lapporten_2.jpg/330px-Lapporten_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Moose",
        "caption": "The moose or elk is the world's tallest, largest and heaviest extant species of deer and the only extant species in the genus Alces.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Alaska_moose.jpg/330px-Alaska_moose.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Sweden has the most islands of any country on Earth, with an estimated 267,570 islands along its coasts and lakes.",
      "The Nobel Prizes were founded by Swedish inventor and industrialist Alfred Nobel in his 1895 will, awarded annually in Stockholm.",
      "The 3-point seatbelt was invented in 1959 by Volvo engineer Nils Bohlin, who left the patent open so all car manufacturers could save lives."
    ]
  },
  "sg": {
    "landmarks": [
      {
        "title": "Marina Bay Sands & SkyPark",
        "caption": "Three 55-story hotel towers topped by a cantilevered ship-shaped sky terrace and 150-meter infinity pool.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Marina_Bay_Sands_%28I%29.jpg/3840px-Marina_Bay_Sands_%28I%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Gardens by the Bay & Supertrees",
        "caption": "Futuristic horticultural sanctuary featuring 18 vertical vertical plant-covered Supertrees and climate biomes.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore_-_20120712-02.jpg/3840px-Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore_-_20120712-02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Jewel Changi HSBC Rain Vortex",
        "caption": "The world's tallest indoor waterfall, cascading seven stories (40 m) down through a lush forest canopy dome.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/JewelSingaporeVortex1.jpg/3840px-JewelSingaporeVortex1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Bukit Timah Nature Reserve",
        "caption": "The Bukit Timah Nature Reserve is a nature reserve near the geographic centre of Singapore.  It is located on the slopes of Bukit Timah Hill, the country's highest natural peak standing at approximately 165 metres (541 ft), and includes parts of the surrounding area within the planning area of Bukit Panjang.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/A_hike_to_the_Bukit_Timah_Summit_%282025%29_-_img_12.jpg/330px-A_hike_to_the_Bukit_Timah_Summit_%282025%29_-_img_12.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Crimson sunbird",
        "caption": "The crimson sunbird is a species of bird in the sunbird family which feed largely on nectar.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/0A2A6965_Crimson_Sunbird.jpg/330px-0A2A6965_Crimson_Sunbird.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Singapore is one of only three surviving sovereign city-states in the world, alongside Monaco and Vatican City.",
      "Singapore is known as the 'City in a Garden', with green spaces and rooftop vegetation covering nearly 50% of the island.",
      "Singapore Changi Airport has been repeatedly named the World's Best Airport by Skytrax more times than any other airport."
    ]
  },
  "si": {
    "landmarks": [
      {
        "title": "Lake Bled & Island Church",
        "caption": "Glacial lake with a tear-shaped island and pilgrimage church surrounded by Julian Alps and a cliffside medieval castle.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Lake_Bled_from_the_Mountain.jpg/3840px-Lake_Bled_from_the_Mountain.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Postojna Cave System",
        "caption": "Enchanting 24-kilometer karst cave system navigated by an electric subterranean train to see stalactites and olm salamanders.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/74/Postojna_%2822206343750%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Predjama Castle",
        "caption": "Impregnable medieval Renaissance castle built directly into the mouth of a vertical 123-meter-high cliff cave.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/H%C3%B6hlenburg_Predjama_in_Slovenien.jpg/3840px-H%C3%B6hlenburg_Predjama_in_Slovenien.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Postojna Cave",
        "caption": "Postojna Cave is a 24. 34 km (15.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Postojna_%2822206343750%29.jpg/330px-Postojna_%2822206343750%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Olm",
        "caption": "The olm or proteus is an aquatic salamander which is the only species in the genus Proteus of the family Proteidae and the only...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Proteus_anguinus_Postojnska_Jama_Slovenija.jpg/330px-Proteus_anguinus_Postojnska_Jama_Slovenija.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Over 60% of Slovenia is covered by pristine forests, ranking it as the third most forested nation in the European Union.",
      "Postojna Cave is home to the olm ('baby dragon'), an extraordinary sightless amphibian that can survive up to 10 years without food.",
      "The world's oldest productive grape vine, certified at over 450 years old, still produces wine in Maribor, Slovenia."
    ]
  },
  "sk": {
    "landmarks": [
      {
        "title": "Spiš Castle",
        "caption": "One of the largest castle sites in Central Europe, spreading across 4 hectares above the village of Žehra.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Spi%C5%A1_Castle_from_the_south_in_Spi%C5%A1%2C_Slovakia%2C_2016_June.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "High Tatras Alpine Range",
        "caption": "The jagged granite alpine peaks forming the natural border between Slovakia and Poland, featuring Lake Štrbské Pleso.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Tatry_Panorama01xxx.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Bojnice Castle",
        "caption": "Romantic fairy-tale castle with pastel turquoise turrets and a travertine cave located right underneath the castle moat.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Slovakia_Bojnice_%28The_photo_is_made_of_a_glider_%22Duo_Discus_xlt%22%29_%288698340484%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "High Tatras",
        "caption": "The High Tatras or High Tatra Mountains, are a mountain range along the border of northern Slovakia in the Prešov Region, and southern Poland in the Lesser Poland Voivodeship.  They are a range of the Tatra Mountains chain.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Tatry_Panorama01xxx.jpg/330px-Tatry_Panorama01xxx.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Tatra chamois",
        "caption": "The Tatra chamois is a subspecies of the chamois of the genus Rupicapra.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Tatra_Chamois.jpg/330px-Tatra_Chamois.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Slovakia has the world's highest number of castles and châteaux per capita, with over 180 castles and 425 manor houses.",
      "Slovakia is the world's largest producer of cars per capita, manufacturing over 1 million vehicles annually.",
      "The geographic midpoint of continental Europe is claimed at the Church of Saint John the Baptist in Kremnické Bane, Slovakia."
    ]
  },
  "sl": {
    "landmarks": [
      {
        "title": "Tacugama Chimpanzee Sanctuary",
        "caption": "Renowned forest conservation refuge in the Western Area Peninsula hills rehabilitating rescued wild chimpanzees.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tacugama.jpg"
      },
      {
        "title": "Bunce Island Historic Fortress",
        "caption": "Historic 18th-century British slave castle in the Sierra Leone River, crucial site for Afro-American Gullah heritage.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bunce_Island_slave_castle_in_Sierra_Leone.jpg"
      },
      {
        "title": "River Number Two Beach",
        "caption": "Pristine white sand beach where a freshwater mountain river empties directly into the warm Atlantic surf.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e0/River_Number_Two_Beach_Sierra_Leone.jpg"
      },
      {
        "title": "Banana Islands",
        "caption": "The Banana Islands are a group of islands that lie off the coast of Yawri Bay, south west of the Freetown Peninsula in the Western Area...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Banana_Islands_%28Sierra_Leone%29.jpg/330px-Banana_Islands_%28Sierra_Leone%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Western chimpanzee",
        "caption": "The western chimpanzee or West African chimpanzee is a critically endangered subspecies of the common chimpanzee.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Chimpanz%C3%A9_de_Bossou_27.jpg/330px-Chimpanz%C3%A9_de_Bossou_27.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The monumental Cotton Tree in central Freetown stood for hundreds of years as a national symbol of freedom until felled by a storm in 2023.",
      "The Gullah Geechee people of coastal South Carolina and Georgia in the US trace strong ancestral and linguistic roots directly to Sierra Leone.",
      "Sierra Leone was founded as a haven for liberated and freed African-American and Caribbean slaves, leading to the name 'Freetown'."
    ]
  },
  "sm": {
    "landmarks": [
      {
        "title": "Three Towers of San Marino (Guaita Fortress)",
        "caption": "Iconic 11th-century cliffside castle perched atop the three peaks of Mount Titano overlooking the Adriatic coast.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/San_marino%2C_veduta_del_monte_titano_02.jpg/3840px-San_marino%2C_veduta_del_monte_titano_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mount Titano Panorama",
        "caption": "Limestone mountain ridge hosting the historic microstate with sweeping views reaching from the Apennines to the sea.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/San_marino%2C_veduta_del_monte_titano_02.jpg/3840px-San_marino%2C_veduta_del_monte_titano_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Palazzo Pubblico & Piazza della Libertà",
        "caption": "The neo-Gothic town hall and seat of government of the world's oldest surviving republic.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Palazzo_Pubblico_-_esterno.jpg/3840px-Palazzo_Pubblico_-_esterno.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Monte Titano",
        "caption": "Monte Titano or Monte Brugola is a mountain of the Apennines and the highest point in the country of San Marino.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/San_marino%2C_veduta_del_monte_titano_02.jpg/330px-San_marino%2C_veduta_del_monte_titano_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Peregrine falcon",
        "caption": "The peregrine falcon, also referred to simply as the peregrine, is a bird of prey (raptor) in the family Falconidae known for its speed.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Falco_peregrinus_m_Humber_Bay_Park_Toronto.jpg/330px-Falco_peregrinus_m_Humber_Bay_Park_Toronto.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "San Marino is recognized as the world's oldest surviving constitutional republic, founded in 301 AD by Saint Marinus.",
      "It has two heads of state, called Captains Regent, who are elected every six months to ensure balanced democratic leadership.",
      "San Marino is the only country in the world that has more registered motor vehicles than human residents."
    ]
  },
  "sn": {
    "landmarks": [
      {
        "title": "Gorée Island & House of Slaves",
        "caption": "UNESCO-listed historical island off Dakar with colonial pastel houses and the poignant 'Door of No Return'.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Ile-de-goree.jpg/3840px-Ile-de-goree.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lake Retba (Pink Lake)",
        "caption": "Vibrant strawberry-pink saline lake colored by Dunaliella salina microalgae, historically the finish of the Paris-Dakar Rally.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/RetbaLakeShore.jpg/3840px-RetbaLakeShore.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "African Renaissance Monument",
        "caption": "Colossal 52-meter bronze statue in Dakar, the tallest statue on the African continent, overlooking the Atlantic Ocean.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Monument_renaissance.jpg/3840px-Monument_renaissance.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Djoudj National Bird Sanctuary",
        "caption": "The Djoudj National Bird Sanctuary lies on the southeast bank of the Senegal River in Senegal, in northern Biffeche, north east of St-Louis.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/CormoransDjoudj.JPG/330px-CormoransDjoudj.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Panthera leo leo",
        "caption": "Panthera leo leo is a lion subspecies present in West Africa, northern Central Africa and India.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Lionss_of_king.jpg/330px-Lionss_of_king.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Dakar, the capital of Senegal, sits on the Cap-Vert Peninsula, making it the westernmost city on the mainland of the African continent.",
      "Lake Retba's striking pink hue is caused by salt-loving algae, allowing swimmers to float effortlessly due to high salinity.",
      "Senegal has never experienced a military coup d'état since gaining independence in 1960, standing as a pillar of democratic stability in West Africa."
    ]
  },
  "so": {
    "landmarks": [
      {
        "title": "Laas Geel Cave Paintings",
        "caption": "Spectacular Neolithic rock art caves featuring remarkably vivid 5,000-year-old paintings of decorated cattle and people.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Laas_Geel.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mogadishu Lighthouse & Old Harbor",
        "caption": "Historic Italian colonial-era lighthouse watching over the ancient stone alleys of the Hamar Weyne historic quarter.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/47/On_a_desserted_beach_in_Mogadishu%2C_Somalia_in_Dec_2024_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Cal Madow Mountain Escarpment",
        "caption": "High mountain range in the north featuring cool waterfalls, misty juniper forests, and frankincense trees.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/14/Frankincense_2005-12-31.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Cape Guardafui",
        "caption": "Cape Guardafui is a headland in Somalia, in the federal state of Puntland.  It forms the geographical apex of the Horn of Africa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Desert_and_ocean_-_44533517561.jpg/330px-Desert_and_ocean_-_44533517561.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Somali wild ass",
        "caption": "The Somali wild ass is a subspecies of the African wild ass.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Equus_africanus_somaliensis_2_%28cropped%29.jpg/330px-Equus_africanus_somaliensis_2_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Somalia has the longest coastline in mainland Africa, extending over 3,333 kilometers along the Indian Ocean and Gulf of Aden.",
      "Somalia is historically known as the 'Nation of Poets' because oral poetry has been the primary medium for history, philosophy, and debate.",
      "Somalia has the largest population of dromedary camels in the world, serving as a pillar of pastoral culture and economy."
    ]
  },
  "sr": {
    "landmarks": [
      {
        "title": "Historic Inner City of Paramaribo",
        "caption": "UNESCO-listed Dutch colonial town featuring unique wooden colonial architecture blending European and indigenous styles.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Paramaribo_city_collage.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Central Suriname Nature Reserve",
        "caption": "Vast pristine rainforest reserve protecting 1.6 million hectares of primary Amazon forest and granite dome inselbergs.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Amazon_jungle_from_above.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Brownsberg Nature Park",
        "caption": "Mountain plateau overlooking the Brokopondo Reservoir, renowned for howler monkeys, toucans, and jungle waterfalls.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Leo_val_brownsberg.JPG/1920px-Leo_val_brownsberg.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Central Suriname Nature Reserve",
        "caption": "The Central Suriname Nature Reserve is a conservation unit in Suriname. \nIt preserves an area of tropical rainforest.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Amazon_jungle_from_above.jpg/330px-Amazon_jungle_from_above.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Jaguar",
        "caption": "The jaguar is a large cat species and the only living member of the genus Panthera that is native to the Americas.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/330px-Standing_jaguar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Suriname is the most heavily forested country on Earth, with approximately 93% of its landmass covered by intact tropical forest.",
      "Dutch is the sole official language of Suriname, making it the only Dutch-speaking nation in South America.",
      "Suriname is celebrated for its religious harmony, exemplified by a historic Jewish synagogue and a Muslim mosque situated peacefully side by side in Paramaribo."
    ]
  },
  "ss": {
    "landmarks": [
      {
        "title": "The Sudd Wetland",
        "caption": "One of the largest freshwater wetland floodplains in the world, fed by the White Nile and spanning over 30,000 sq km.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Sudd_swamp.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Boma National Park",
        "caption": "Vast grassland wilderness hosting the massive seasonal migration of millions of white-eared kob and tiang antelopes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Boma_Neighborhood_Street.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kinyeti Mountain Peak",
        "caption": "The highest peak in South Sudan (3,187 m) located in the Imatong Mountains near the Ugandan border.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/17/Sudan_Kinyeti.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Sudd",
        "caption": "The Sudd is a vast swamp in South Sudan, formed by the White Nile's Baḥr al-Jabal section.  The Arabic word sudd is derived from sadd, meaning \"barrier\" or \"obstruction\".",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Sudd_swamp.jpg/330px-Sudd_swamp.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Kob",
        "caption": "The kob is an antelope found across Central Africa and parts of West Africa and East Africa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Male_Ugandan_kob_-_Queen_Elizabeth_National_Park%2C_Uganda_%284%29.jpg/330px-Male_Ugandan_kob_-_Queen_Elizabeth_National_Park%2C_Uganda_%284%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "South Sudan is the newest globally recognized sovereign nation in the world, gaining independence on July 9, 2011.",
      "Recent aerial surveys revealed that the mammal migration across South Sudan's Boma-Badingilo landscape is the largest land mammal migration on Earth.",
      "The Sudd swamp on the White Nile is so vast that it can swell to the size of England during the peak rainy season."
    ]
  },
  "st": {
    "landmarks": [
      {
        "title": "Pico Cão Grande (Great Dog Peak)",
        "caption": "Dramatic 370-meter volcanic plug needle soaring vertically out of the primary rainforest mist on São Tomé.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Pico_C%C3%A3o_Grande.jpg/3840px-Pico_C%C3%A3o_Grande.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Obo National Park",
        "caption": "Virgin tropical cloud forest reserve rich in endemic flora, exotic orchids, and rare bird species.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Forest_of_S%C3%A3o_Tom%C3%A9_Island.jpg/3840px-Forest_of_S%C3%A3o_Tom%C3%A9_Island.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Boca do Inferno & Praia Piscina",
        "caption": "Dramatic volcanic blowhole and golden palm-fringed tropical beach on the southern Atlantic coast.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Gulf_of_Guinea_%28English%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Pico Cão Grande",
        "caption": "The Pico Cão Grande is a landmark needle-shaped volcanic plug peak in São Tomé and Príncipe, in the Caué District of São Tomé Island in Parque Natural Obô de São Tomé.  Its summit is 663 m (2,175 ft) above sea level, and it rises about 370 m (1,210 ft) over the surrounding terrain.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Pico_C%C3%A3o_Grande.jpg/330px-Pico_C%C3%A3o_Grande.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "São Tomé grosbeak",
        "caption": "The São Tomé grosbeak is the largest member of the canary genus Crithagra, 50% heavier than the next largest canary species.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Crithagra_concolor_%2810.3897-BDJ.11.e110428%29_Figure_2c.jpg/330px-Crithagra_concolor_%2810.3897-BDJ.11.e110428%29_Figure_2c.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "In the early 20th century, São Tomé and Príncipe was the world's largest producer of cocoa, earning the moniker 'The Chocolate Islands'.",
      "Pico Cão Grande is a nearly vertical volcanic phonolite needle rising 370 meters above its surroundings, frequently shrouded in cloud.",
      "It is the second-smallest sovereign state in Africa after Seychelles, located right on the equator in the Gulf of Guinea."
    ]
  },
  "sv": {
    "landmarks": [
      {
        "title": "Santa Ana Volcano (Ilamatepec)",
        "caption": "El Salvador's highest volcano (2,381 m), featuring an intense turquoise emerald acidic crater lake.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Santa_Ana_Volcano.USAF.C-130.1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Joya de Cerén ('Pompeii of the Americas')",
        "caption": "Pre-Columbian Maya farming community buried under volcanic ash from Laguna Caldera in 600 AD.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/35/ES_Joya_Ceren_05_2012_Estructura_9_Area_2_Tamazcal_wide_angle_1479.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "El Tunco & Sunzal Surf Coast",
        "caption": "World-famous Pacific black sand surf haven renowned for consistent point break waves and stunning coastal sunsets.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Hamacacq.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Coatepeque Caldera",
        "caption": "Coatepeque Caldera is a volcanic caldera in El Salvador in Central America.  The caldera was formed during a series of rhyolitic explosive eruptions from a group of stratovolcanoes between about 72,000 and 57,000 years ago.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/LakeCoatepequeElSalvador_%28cropped%29.jpg/330px-LakeCoatepequeElSalvador_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Turquoise-browed motmot",
        "caption": "The turquoise-browed motmot is a colourful, medium-sized bird of the motmot family, Momotidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Turquoise-browed_motmot_%28Eumomota_superciliosa_apiaster%29_Copan_2.jpg/330px-Turquoise-browed_motmot_%28Eumomota_superciliosa_apiaster%29_Copan_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "El Salvador is known as the 'Land of Volcanoes' because it has more than 20 volcanoes situated across a relatively compact territory.",
      "In September 2021, El Salvador made global economic history by becoming the first country to adopt Bitcoin as legal tender.",
      "Pupusas, thick handmade corn tortillas stuffed with melted cheese, refried beans, and chicharrón, are the beloved national dish."
    ]
  },
  "sy": {
    "landmarks": [
      {
        "title": "Ancient Ruins of Palmyra",
        "caption": "Spectacular Greco-Roman desert oasis city famed for the monumental colonnaded avenue and Arch of Triumph.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/21/Palmyra_-_Monumental_Arch.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Krak des Chevaliers Fortress",
        "caption": "One of the most significant and best-preserved medieval Crusader castles in the world.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/KRAK_DES_CHEVALIERS_-_GAR_-_6-00.jpg/3840px-KRAK_DES_CHEVALIERS_-_GAR_-_6-00.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Umayyad Mosque of Damascus",
        "caption": "One of the oldest and largest mosques in the world, located in the heart of Damascus's walled ancient city.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Umayyad_Mosque%2C_Damascus.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Euphrates",
        "caption": "The Euphrates is the longest and one of the most historically important rivers of West Asia.  Together with the Tigris, it is one of the two defining rivers of Mesopotamia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Euphrates_River_in_Turkey%2C_Rumkale_%2852031477798%29.jpg/330px-The_Euphrates_River_in_Turkey%2C_Rumkale_%2852031477798%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Syrian brown bear",
        "caption": "The Syrian brown bear is a medium-sized and endangered subspecies of brown bear native to the Middle East and West-Central Asia,...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Ursus_arctos_syriacus.jpg/330px-Ursus_arctos_syriacus.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Damascus, the capital of Syria, is widely cited as one of the oldest continuously inhabited cities in recorded world history.",
      "The Ugaritic alphabet, excavated in northern Syria, dates back to 1400 BC and is one of the earliest alphabetic scripts known.",
      "Syrian laurel Aleppo soap has been handcrafted in the city of Aleppo for over 3,000 years, celebrated as the world's first hard soap."
    ]
  },
  "sz": {
    "landmarks": [
      {
        "title": "Mlilwane Wildlife Sanctuary",
        "caption": "Pioneering conservation reserve in the scenic Ezulwini Valley where visitors walk or cycle alongside zebras.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/00/Zabras_in_Mlilwane_Wildlife_Sanctuary.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Sibebe Rock Monolith",
        "caption": "The world's second-largest exposed granite monolith (after Uluru in Australia), estimated at 3 billion years old.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/14/012_035_Ile_Mingan_Niapiscau.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mantenga Cultural Village & Falls",
        "caption": "Traditional 19th-century Swazi beehive hut village beneath the roaring waters of the Mantenga Falls.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Image_of_King_Sobhuza_II_Memorial_Park.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mlilwane Wildlife Sanctuary",
        "caption": "Mlilwane Wildlife Sanctuary is Eswatini's oldest protected area, owned and managed by a non-profit trust.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Zabras_in_Mlilwane_Wildlife_Sanctuary.jpg/330px-Zabras_in_Mlilwane_Wildlife_Sanctuary.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Southern bald ibis",
        "caption": "The southern bald ibis is a large bird found in open grassland or semi-desert in the mountains of southern Africa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Southern_Bald_Ibis_%28Geronticus_calvus%29_%2829865447691%29.jpg/330px-Southern_Bald_Ibis_%28Geronticus_calvus%29_%2829865447691%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "In 2018, King Mswati III officially changed the country's English name from Swaziland to the Kingdom of Eswatini.",
      "Sibebe Rock is the second-largest exposed granite pluton in the world, with ancient rock formations dating back 3 billion years.",
      "The annual Umhlanga (Reed Dance) ceremony brings together tens of thousands of young women to celebrate national unity and culture."
    ]
  },
  "td": {
    "landmarks": [
      {
        "title": "Ennedi Natural & Cultural Reserve",
        "caption": "Breathtaking desert sandstone plateau featuring towering arches, natural canyons, and hidden guelta waterholes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2a/24_Kamele_ziehen_zur_Wasserstelle_im_Ennedi-Gebirge_im_Tschad.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lakes of Ounianga",
        "caption": "Eighteen interconnected hyper-saline and freshwater blue lakes surrounded by golden Saharan sand dunes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/18/Ounianga_Serir.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Zakouma National Park",
        "caption": "A celebrated conservation success story in Central Africa, home to recovered herds of savanna elephants and buffalos.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Girafe_du_parc_national_de_Zakouma.jpg/3840px-Girafe_du_parc_national_de_Zakouma.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Ennedi Plateau",
        "caption": "The Ennedi Plateau is located in the northeast of Chad, in the regions of Ennedi-Ouest and Ennedi-Est.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/24_Kamele_ziehen_zur_Wasserstelle_im_Ennedi-Gebirge_im_Tschad.jpg/330px-24_Kamele_ziehen_zur_Wasserstelle_im_Ennedi-Gebirge_im_Tschad.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "African wild dog",
        "caption": "The African wild dog, also called painted dog and Cape hunting dog, is a wild canine native to sub-Saharan Africa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/African_Wild_Dog_at_Working_with_Wildlife.jpg/330px-African_Wild_Dog_at_Working_with_Wildlife.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The Lakes of Ounianga in the heart of the hyper-arid Sahara are supplied by ancient subterranean fossil water aquifers.",
      "The Aloba Arch in Chad's Ennedi Plateau is one of the largest natural rock arches in the world, spanning 77 meters across.",
      "Lake Chad was once part of an ancient mega-lake (Mega-Chad) that was larger than the Caspian Sea."
    ]
  },
  "tg": {
    "landmarks": [
      {
        "title": "Koutammakou Landscape",
        "caption": "UNESCO World Heritage cultural landscape famous for Batammariba two-story mud tower houses (Takienta).",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/65/Togo_Taberma_house_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Togo & Togoville",
        "caption": "Historic lakeside village across Lake Togo where traditional voodoo shrines and the historic 1884 German protectorate treaty stand.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/82/Leonhard_Seppala_with_dogs.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Akrowa Cascades in Badou",
        "caption": "Spectacular 100-meter waterfall plunging through lush rainforest foliage in the lush coffee-growing hills.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Cascade_de_Kime.jpg"
      },
      {
        "title": "Fazao Malfakassa National Park",
        "caption": "Fazao Malfakassa National Park or Parc national de Fazao Malfakassa is the largest of three national parks in Togo, the others being...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Vue_de_la_montagne_%C3%A0_Fazao.jpg/330px-Vue_de_la_montagne_%C3%A0_Fazao.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "African elephant",
        "caption": "African elephants are members of the genus Loxodonta comprising two living elephant species, the African bush elephant and the smaller...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/330px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The traditional Takienta mud tower houses of the Batammariba people in northern Togo are considered masterpieces of sustainable African architecture.",
      "The Akodessawa Fetish Market in Lomé, Togo is recognized as the largest voodoo traditional medicine and fetish market in the world.",
      "Togo is one of the narrowest countries in the world, measuring just 115 kilometers across at its widest point."
    ]
  },
  "th": {
    "landmarks": [
      {
        "title": "Grand Palace & Wat Phra Kaew",
        "caption": "Opulent royal ceremonial palace in Bangkok enshrining the sacred 14th-century Emerald Buddha.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/0005574_-_Wat_Phra_Kaew_006.jpg/3840px-0005574_-_Wat_Phra_Kaew_006.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Wat Arun (Temple of Dawn)",
        "caption": "Riverside temple on the Chao Phraya River with an 82-meter central spire encrusted with colorful porcelain.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg/3840px-%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Phi Phi Islands & Maya Bay",
        "caption": "Dramatic vertical limestone karsts plunging into emerald tropical waters in the Andaman Sea.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/KohPhiPhi.JPG/3840px-KohPhiPhi.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Khao Sok National Park",
        "caption": "Khao Sok National Park is in Surat Thani Province, Thailand.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/1022_KhaoSokNationalPark_2.jpg/330px-1022_KhaoSokNationalPark_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Indochinese tiger",
        "caption": "The Indochinese tiger is a population of Panthera tigris tigris that is native to mainland Southeast Asia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Panthera_tigris_corbetti_01.jpg/330px-Panthera_tigris_corbetti_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Thailand is the only Southeast Asian nation that was never colonized by European imperial powers.",
      "Bangkok's ceremonial Thai name has 168 letters, holding the Guinness World Record for the longest place name on Earth.",
      "Thailand is home to both the world's smallest mammal (Kitti's hog-nosed bat) and the largest fish (the whale shark)."
    ]
  },
  "tj": {
    "landmarks": [
      {
        "title": "Pamir Highway (M41)",
        "caption": "The world's second-highest international road, traversing the dramatic high-altitude 'Roof of the World'.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/10/Pamir_Highway_Route.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Iskanderkul Alpine Lake",
        "caption": "Mesmerizing turquoise glacial lake named after Alexander the Great, situated at 2,195 m in the Fann Mountains.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/Iskander-kul%2C_Tajikistan.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "National Library & Flagpole in Dushanbe",
        "caption": "Monumental public buildings centering the Dushanbe skyline, formerly site of the world's tallest flagpole.",
        "url": "https://upload.wikimedia.org/wikipedia/en/3/3e/National_Library_of_Tajikistan.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Pamir Mountains",
        "caption": "The Pamir Mountains are a mountain range in Central Asia and South Asia.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/%D0%9B%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%BE%D1%84%D0%B8%D1%86%D0%B5%D1%80%D0%BE%D0%B2_%D1%8E%D0%B6%D0%BD._-_panoramio_%283%29.jpg/330px-%D0%9B%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA_%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D1%85_%D0%BE%D1%84%D0%B8%D1%86%D0%B5%D1%80%D0%BE%D0%B2_%D1%8E%D0%B6%D0%BD._-_panoramio_%283%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Marco Polo sheep",
        "caption": "The Marco Polo sheep is a subspecies of argali sheep, named after Marco Polo.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Marco_Polo_sheep_pair_by_F%C3%A1bio_Olmos_%28cropped%29.jpg/330px-Marco_Polo_sheep_pair_by_F%C3%A1bio_Olmos_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Over 93% of Tajikistan's total territory is covered by towering mountains, with more than half sitting above 3,000 meters elevation.",
      "Fedchenko Glacier in the Pamir Mountains is the longest non-polar valley glacier in the world, spanning 77 kilometers.",
      "Tajik is a dialect of Persian, making Tajikistan culturally and linguistically connected to Iran and Persian literature."
    ]
  },
  "tl": {
    "landmarks": [
      {
        "title": "Cristo Rei of Dili",
        "caption": "27-meter bronze statue of Jesus Christ crowning the Fatucama Peninsula overlooking Dili Bay.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Christ_Dili.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Atauro Island Reefs",
        "caption": "Pristine island across from Dili scientifically documented as having the most biodiverse reef fish waters on Earth.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Atauro_coast_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Ramelau (Tatamailau)",
        "caption": "Timor's highest peak (2,986 m), sacred to indigenous culture and crowned by a statue of the Virgin Mary.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/View_to_Mt_Tatamailau%2C_Ainaro_on_a_clear_day.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Tatamailau",
        "caption": "Tatamailau, or Tata Mailau, also Mount Ramelau, is the highest point in Timor-Leste and also of Timor island at 2,963 m (9,721 ft).  The mountain is located approximately 70 km (43 mi) south of the capital Dili in the district of Ainaro.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/View_to_Mt_Tatamailau%2C_Ainaro_on_a_clear_day.jpg/330px-View_to_Mt_Tatamailau%2C_Ainaro_on_a_clear_day.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Saltwater crocodile",
        "caption": "The saltwater crocodile is a crocodilian native to saltwater habitats, brackish wetlands and freshwater rivers from India's east coast...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/SaltwaterCrocodile%28%27Maximo%27%29.jpg/330px-SaltwaterCrocodile%28%27Maximo%27%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Scientists discovered that the waters surrounding Atauro Island have the highest average reef fish biodiversity in the world.",
      "Timor-Leste was the first new sovereign nation to be internationally recognized in the 21st century (on May 20, 2002).",
      "According to local folklore, the island of Timor was formed from the body of an ancient giant crocodile who befriended a boy."
    ]
  },
  "tm": {
    "landmarks": [
      {
        "title": "Darvaza Gas Crater ('Door to Hell')",
        "caption": "A 70-meter-wide fiery natural gas crater in the Karakum Desert that has been burning continuously since 1971.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Darvasa_gas_crater_panorama.jpg/3840px-Darvasa_gas_crater_panorama.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "White Marble City of Ashgabat",
        "caption": "Guinness World Record capital holding the highest density of white marble-clad buildings in the world.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/View_of_Ashgabat_%2842376779291%29.jpg/3840px-View_of_Ashgabat_%2842376779291%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Ancient Merv Silk Road Ruins",
        "caption": "UNESCO-listed ancient Silk Road oasis metropolis that was once one of the largest cities on Earth.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/Turkmenistan_Merv_city.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Darvaza gas crater",
        "caption": "The Darvaza gas crater, also known as the Door to Hell or Gates of Hell, officially the Shining of Karakum, is a burning natural gas field collapsed into a cavern near Darvaza, Turkmenistan.  Hundreds of natural gas fires illuminate the floor and rim of the crater.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Darvasa_gas_crater_panorama.jpg/330px-Darvasa_gas_crater_panorama.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Akhal-Teke",
        "caption": "The Akhal-Teke is a Turkmen horse breed.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Dagat-Geli.jpg/330px-Dagat-Geli.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Ashgabat holds the Guinness World Record for the highest concentration of white marble buildings, with over 540 marble facades.",
      "The Darvaza gas crater was accidentally ignited by Soviet geologists in 1971 expecting it to burn out in weeks, but it has burned for over 50 years.",
      "Turkmenistan is famous for its Akhal-Teke horse breed, known as 'golden horses' for their natural metallic shimmering coats."
    ]
  },
  "tn": {
    "landmarks": [
      {
        "title": "El Jem Roman Amphitheatre",
        "caption": "Colossal 3rd-century Roman amphitheater in the desert, one of the best-preserved in the world, seating 35,000 spectators.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5d/The_Amphitheatre_of_El_Jem%2C_built_around_AD_238_in_Thysdrus_in_Africa_Proconsularis%2C_the_estimated_capacity_is_35%2C000%2C_Tunisia_-_52717762494.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ruins of Ancient Carthage",
        "caption": "Ancient Phoenician and Roman maritime metropolis overlooking the Gulf of Tunis, home of general Hannibal Barca.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/46/TUNISIE_UTIQUE_05.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Sidi Bou Said Coastal Village",
        "caption": "Charming cliffside Mediterranean village with distinctive whitewashed walls, cobalt-blue doors, and bougainvillea.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Sidi_Chebaan.jpg/3840px-Sidi_Chebaan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lake Ichkeul",
        "caption": "Lake Ichkeul is a lake in northern Tunisia, located 20 kilometres to Bizerte, the northernmost city in Africa on the Mediterranean Sea.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Vue_matinale_de_la_montagne_dominant_le_parc_Ichkeul.jpg/330px-Vue_matinale_de_la_montagne_dominant_le_parc_Ichkeul.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Greater flamingo",
        "caption": "The greater flamingo is the largest and most widespread species of the flamingo family.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/010_Greater_flamingos_male_and_female_in_the_Camargue_during_mating_season_Photo_by_Giles_Laurent.jpg/330px-010_Greater_flamingos_male_and_female_in_the_Camargue_during_mating_season_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Ancient Carthage in Tunisia was the formidable maritime rival to the Roman Republic, led by military genius Hannibal.",
      "The troglodyte underground cave homes of Matmata in southern Tunisia served as the childhood home of Luke Skywalker in Star Wars.",
      "Tunisia's Cape Angela is the northernmost point on the entire African continent."
    ]
  },
  "to": {
    "landmarks": [
      {
        "title": "Ha'amonga 'a Maui Trilithon",
        "caption": "Mysterious 13th-century stone archway made of three colossal coral limestone slabs weighing over 40 tons.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/17/Ha%CA%BBamonga.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mapu 'a Vaea Blowholes",
        "caption": "Spectacular 5-kilometer stretch of coastline where Pacific waves force water jets up to 30 meters high through limestone fissures.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/59/Mapu_a_Vaea.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Humpback Whale Nurseries of Vava'u",
        "caption": "Sheltered tropical island channels where migratory Antarctic humpback whales mate and nurse newborn calves.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Humpback_Whale_underwater_shot.jpg"
      },
      {
        "title": "Tongatapu",
        "caption": "Tongatapu is the main island of Tonga and the site of its capital, Nukuʻalofa.  Approximately 260 square kilometres in size, it is located in Tonga's southern island group, to which it gives its name and it is the country's most populous island, with 74,611 residents (2016) or roughly 70.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Tonga_ESA363260.jpg/330px-Tonga_ESA363260.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Humpback whale",
        "caption": "The humpback whale is a species of baleen whale.  It is a rorqual and is the only species in the genus Megaptera.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Humpback_whale_breaching_off_Cabo_San_Lucas.jpg/330px-Humpback_whale_breaching_off_Cabo_San_Lucas.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Tonga is the only monarchy in the Pacific and the only Pacific island nation that never lost its indigenous sovereignty to foreign colonization.",
      "Tonga is affectionately known as the 'Friendly Islands', a moniker given by Captain James Cook in 1773 due to the warm hospitality he received.",
      "Every winter, hundreds of southern humpback whales migrate from Antarctica to the warm sheltered waters of Tonga to calve."
    ]
  },
  "tr": {
    "landmarks": [
      {
        "title": "Hagia Sophia Grand Mosque",
        "caption": "6th-century Byzantine architectural wonder in Istanbul with a soaring dome that revolutionized world architecture.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Hagia_Sophia_%28228968325%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Cappadocia Fairy Chimneys & Hot Air Balloons",
        "caption": "Surreal volcanic landscape of cone-shaped tuff towers, underground cities, and sunrise hot air balloon flights.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg/3840px-Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Pamukkale Travertine Terraces",
        "caption": "The 'Cotton Castle', cascading terraces of gleaming white mineral carbonate travertine filled with warm thermal water.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Pamukkale%2C_Denizli_2026_68.jpg/3840px-Pamukkale%2C_Denizli_2026_68.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Pamukkale",
        "caption": "Pamukkale, meaning \"cotton castle\" in Turkish, is a natural site in Denizli Province in southwestern Turkey.  The area is famous for a carbonate mineral left by the flowing of thermal spring water.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Pamukkale%2C_Denizli_2026_68.jpg/330px-Pamukkale%2C_Denizli_2026_68.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Wolf",
        "caption": "The wolf, also known as the grey wolf or gray wolf, is a canine native to Eurasia and North America.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Eurasian_wolf_2.jpg/330px-Eurasian_wolf_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Istanbul is the only transcontinental metropolis in the world situated across two continents: Europe and Asia.",
      "Tulips were originally cultivated and popularized in the Ottoman Empire before being introduced to the Netherlands in the 16th century.",
      "Göbekli Tepe in southeastern Turkey is considered the world's oldest known temple complex, dating back over 11,500 years."
    ]
  },
  "tt": {
    "landmarks": [
      {
        "title": "Pitch Lake in La Brea",
        "caption": "The largest natural commercial asphalt deposit in the world, covering 100 acres and holding 10 million tons of asphalt.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/06/Trinidad_pitch_lake_ENG.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Pigeon Point Beach in Tobago",
        "caption": "Iconic thatched-roof jetty extending into tranquil turquoise waters fringed by coconut palms.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/30/Pigeon_Point_beach.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Caroni Bird Sanctuary",
        "caption": "Vast mangrove wetland where thousands of brilliant scarlet ibises fly in to roost at sunset.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Caronipanchrisfitzpatrick.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Pitch Lake",
        "caption": "The Pitch Lake is the largest natural deposit of bitumen in the world, estimated to contain 10 million tons.  It is located in Trinidad and Tobago, more specifically in La Brea in southwest Trinidad, within the Siparia Regional Corporation.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Trinidad_pitch_lake_ENG.png/330px-Trinidad_pitch_lake_ENG.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Scarlet ibis",
        "caption": "The scarlet ibis, sometimes called red ibis, is a species of ibis in the bird family Threskiornithidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Oceanografic_Scarlet_Ibis_02.jpg/330px-Oceanografic_Scarlet_Ibis_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The steelpan (steel drum) was invented in Trinidad and Tobago in the 1930s, recognized as the only acoustic musical instrument invented in the 20th century.",
      "Trinidad and Tobago is the birthplace of Calypso and Soca music, as well as the world-famous Trinidad Carnival.",
      "Pitch Lake has supplied natural asphalt to pave streets around the globe, including London's famous roadway to Buckingham Palace."
    ]
  },
  "tv": {
    "landmarks": [
      {
        "title": "Funafuti Conservation Area",
        "caption": "Protected 33-sq-km marine park conserving pristine coral reefs, sea turtles, and islets on the western edge of Funafuti Atoll.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Funafuti_airport_-_Fiji_Airways.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Tepuka Islet Lagoon",
        "caption": "Idyllic coral islet featuring powdery white sands, coconut palms, and remnants of World War II Pacific defense outposts.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Tepuka_Islet.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Funafuti Airstrip & Community Green",
        "caption": "The central runway on Fongafale Island, which transforms into a bustling open-air community sports park every evening.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Funafuti_airport_-_Fiji_Airways.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Funafuti",
        "caption": "Funafuti is an atoll, comprising numerous islets, that is the capital of Tuvalu.  As of the 2017 census, it has a population of 6,320 people.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Funafuti_airport_-_Fiji_Airways.jpg/330px-Funafuti_airport_-_Fiji_Airways.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Black noddy",
        "caption": "The black noddy, also known as white-capped noddy, is a species of tern in the family Laridae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Anous_minutus_by_Gregg_Yan_02.jpg/330px-Anous_minutus_by_Gregg_Yan_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Tuvalu is one of the smallest and least-visited countries on Earth, welcoming fewer than 3,000 international visitors per year.",
      "Tuvalu licenses its country-code top-level internet domain '.tv' to global streaming and television companies, generating vital national revenue.",
      "The highest point in Tuvalu is just 4.6 meters (15 feet) above sea level, making it keenly vulnerable to global sea level rise."
    ]
  },
  "tw": {
    "landmarks": [
      {
        "title": "Taipei 101 Skyscraper",
        "caption": "Iconic bamboo-stalk inspired 508-meter tower featuring a massive tuned mass damper ball resisting typhoons.",
        "url": "https://upload.wikimedia.org/wikipedia/en/0/02/Skyscraper_live.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Taroko Marble Gorge",
        "caption": "Spectacular 19-kilometer-long canyon carved through towering marble cliffs by the Liwu River.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Taroko_Gorge4.jpg/3840px-Taroko_Gorge4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Sun Moon Lake",
        "caption": "Tranquil alpine lake surrounded by emerald mountains, named because its east side resembles the sun and west the moon.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/65/Sun_Moon_Lake_Sentinel-2B_MSI_2024-04-04.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      }
    ],
    "facts": [
      "Taiwan is the global capital of semiconductor manufacturing, producing over 60% of the world's advanced computer microchips.",
      "Bubble tea (boba) was invented in Taichung, Taiwan in the 1980s before becoming a worldwide phenomenon.",
      "Taiwan has the highest density of 24-hour convenience stores in the world per capita, serving as everyday community hubs."
    ]
  },
  "tz": {
    "landmarks": [
      {
        "title": "Mount Kilimanjaro",
        "caption": "The highest mountain in Africa and world's highest freestanding mountain (5,895 m), capped by equatorial glaciers.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Uhuru_Peak_Mt._Kilimanjaro_1.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Serengeti National Park",
        "caption": "Vast endless plains world-famous for the Great Migration and predator-prey wildlife spectacles.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Serengeti-Landscape-2012.JPG/3840px-Serengeti-Landscape-2012.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Ngorongoro Crater",
        "caption": "The world's largest unbroken, unflooded volcanic caldera, forming an Eden-like natural sanctuary for 25,000 large animals.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/76/Ngorongoro-1001-2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ngorongoro Conservation Area",
        "caption": "Ngorongoro Conservation Area is a protected area and a UNESCO World Heritage Site located in Ngorongoro District, 180 km (110 mi) west of Arusha City in Arusha Region, within the Crater Highlands geological area of northeastern Tanzania.  The area is named after Ngorongoro Crater, a large volcanic caldera within the area.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Ngorongoro-1001-2.jpg/330px-Ngorongoro-1001-2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Panthera leo melanochaita",
        "caption": "Panthera leo melanochaita is a lion subspecies in Southern and East Africa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Male_Lion_on_Rock.jpg/330px-Male_Lion_on_Rock.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Over 30% of Tanzania's land area is allocated to national parks, wildlife reserves, and protected nature sanctuaries.",
      "The Olduvai Gorge in northern Tanzania is known as the 'Cradle of Humankind', where early hominin fossils were uncovered by the Leakey family.",
      "Zanzibar Island off the coast of Tanzania was historically known as the 'Spice Island' for its production of cloves, nutmeg, and cinnamon."
    ]
  },
  "ua": {
    "landmarks": [
      {
        "title": "Saint Sophia's Cathedral in Kyiv",
        "caption": "11th-century UNESCO World Heritage cathedral famed for its shimmering gold domes and ancient mosaics.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/80-391-0151_Kyiv_St.Sophia%27s_Cathedral_RB_18_2_%28cropped%29.jpg/3840px-80-391-0151_Kyiv_St.Sophia%27s_Cathedral_RB_18_2_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Kyiv Pechersk Lavra",
        "caption": "Historic Orthodox monastery complex situated on the high hills of the Dnieper River with underground catacombs.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/%D0%9B%D0%B0%D0%B2%D1%80%D0%B0.jpg/3840px-%D0%9B%D0%B0%D0%B2%D1%80%D0%B0.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Lviv Historic Center & Market Square",
        "caption": "Charming Central European medieval and Renaissance old town celebrated for coffee culture and cobblestone lanes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/63/Lw%C3%B3w_-_Widok_z_wie%C5%BCy_ratuszowej_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Carpathian National Nature Park",
        "caption": "The Carpathian National Nature Park is a National Park located in Ivano-Frankivsk Oblast, Ukraine.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/%D0%9A%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9_05.jpg/330px-%D0%9A%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9_05.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Common nightingale",
        "caption": "The common nightingale, rufous nightingale or simply nightingale, is a small passerine bird which is known for its powerful and...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Luscinia_megarhynchos_-_Common_nightingale_-_Nachtegaal_%28cropped%29.jpg/330px-Luscinia_megarhynchos_-_Common_nightingale_-_Nachtegaal_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Ukraine is the second-largest country by land area entirely within Europe after Russia.",
      "The world's heaviest and largest cargo aircraft ever built, the Antonov An-225 Mriya, was engineered in Ukraine.",
      "Arsenalna Metro Station in Kyiv is one of the deepest underground train stations on Earth, dug 105.5 meters beneath the city."
    ]
  },
  "ug": {
    "landmarks": [
      {
        "title": "Bwindi Impenetrable National Park",
        "caption": "Misty montane rainforest harboring almost half of the world's remaining population of endangered mountain gorillas.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Bwindi.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Murchison Falls",
        "caption": "Dramatic natural gorge where the Victoria Nile violently forces itself through a 7-meter rock gap into a roaring cascade.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/95/Murchison_Twin_Falls%2C_Uganda_%2816093084916%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Rwenzori Mountains ('Mountains of the Moon')",
        "caption": "Legendary snow-capped equatorial mountain range featuring Margherita Peak (5,109 m) and giant lobelias.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/50/1172_ruwenzori.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Lake Victoria",
        "caption": "Lake Victoria is one of the African Great Lakes.  With a surface area of approximately 59,947 km2 (23,146 sq mi), Lake Victoria is Africa's largest lake by area, the world's largest tropical lake, and the world's second-largest fresh water lake by surface area after Lake Superior in North America.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/ISS042-E-263206_-_View_of_Earth.jpg/330px-ISS042-E-263206_-_View_of_Earth.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Grey crowned crane",
        "caption": "The grey crowned crane or gray crowned crane is a large crane species native to Sub-Saharan Africa.  It occurs mainly in dry savannah, although it nests in somewhat wetter habitats, and can also be found in marshes, cultivated lands and grassy flatlands near rivers and lakes.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Grey_crowned_crane_%28Balearica_regulorum_gibbericeps%29.jpg/330px-Grey_crowned_crane_%28Balearica_regulorum_gibbericeps%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Winston Churchill dubbed Uganda the 'Pearl of Africa' in 1908 because of its magnificent landscapes, wildlife, and vibrant peoples.",
      "Bwindi Impenetrable Forest is one of the most biologically diverse ecosystems on Earth, with over 350 bird species and 120 mammal species.",
      "The crested crane, known for its elegant golden crown of stiff feathers, is the beloved national bird featured on Uganda's flag."
    ]
  },
  "us": {
    "landmarks": [
      {
        "title": "The Grand Canyon",
        "caption": "Colossal 446-kilometer-long gorge carved over millions of years by the Colorado River in Arizona.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/31/Canyon_River_Tree_%28165872763%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Statue of Liberty in New York",
        "caption": "Colossal neoclassical copper sculpture on Liberty Island, a gift from France symbolizing freedom and democracy.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/89/Front_view_of_Statue_of_Liberty_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Yellowstone National Park",
        "caption": "The world's first national park, famous for Old Faithful geyser, prismatic hot springs, and roaming bison herds.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Grand_Canyon_of_the_Yellowstone_Lower_Falls_%2895819p%29.jpg/3840px-Grand_Canyon_of_the_Yellowstone_Lower_Falls_%2895819p%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Yosemite Valley",
        "caption": "Yosemite Valley is a glacial valley in Yosemite National Park in the western Sierra Nevada mountains of Central California, United States.  The valley is about 7.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/330px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Bald eagle",
        "caption": "The bald eagle is a bird of prey found in North America.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg/330px-Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The United States established the world's first national park in 1872 when President Ulysses S. Grant signed Yellowstone into law.",
      "The US has the largest economy in the world by nominal GDP and the largest highway road network spanning 6.6 million kilometers.",
      "The Apollo 11 mission landed American astronauts Neil Armstrong and Buzz Aldrin on the Moon in July 1969."
    ]
  },
  "uy": {
    "landmarks": [
      {
        "title": "Casapueblo in Punta Ballena",
        "caption": "Whimsical Mediterranean-style cliffside sculpture-hotel created by Uruguayan artist Carlos Páez Vilaró.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/69/Casapueblo.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Historic Quarter of Colonia del Sacramento",
        "caption": "Charming 17th-century cobblestone town founded by the Portuguese on the banks of the Río de la Plata.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Basilica_del_Sanct%C3%ADsimo_Sacramento.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Punta del Este & The Hand (La Mano)",
        "caption": "Famous Atlantic beach resort featuring Mario Irarrázabal's colossal sculpture of fingers emerging from the sand.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/47/%D0%9F%D1%83%D0%BD%D1%82%D0%B0-%D0%B4%D0%B5%D0%BB%D1%8C-%D0%AD%D1%81%D1%82%D0%B5.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Quebrada de los Cuervos",
        "caption": "The Quebrada de los Cuervos is an important landform in Treinta y Tres Department, Uruguay.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Arroyo_Yerbal_Ch_en_Quebrada_de_los_Cuervos.jpg/330px-Arroyo_Yerbal_Ch_en_Quebrada_de_los_Cuervos.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Southern lapwing",
        "caption": "The southern lapwing, commonly called quero-quero in Brazil, or tero in Argentina and Uruguay, tero-tero in Paraguay, and queltehue in...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Southern_Lapwing_-_Indaiatuba%2C_SP%2C_BR.jpg/330px-Southern_Lapwing_-_Indaiatuba%2C_SP%2C_BR.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Uruguay hosted the very first FIFA World Cup in 1930 and won the tournament, defeating Argentina in the final at Estadio Centenario.",
      "In Uruguay, cows outnumber human beings roughly four to one, producing world-renowned grass-fed beef.",
      "Uruguay was the first country in the world to provide every primary school student with a free laptop and internet access through Plan Ceibal."
    ]
  },
  "uz": {
    "landmarks": [
      {
        "title": "Registan Square in Samarkand",
        "caption": "Majestic ensemble of three monumental 15th- and 17th-century Islamic madrasahs covered in dazzling azure tilework.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8c/RegistanSquare_Samarkand.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Itchan Kala in Khiva",
        "caption": "Pristine walled medieval inner town with mudbrick ramparts, turquoise minarets, and oriental palaces.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Islam_Khodja_Madrasa_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Ark of Bukhara",
        "caption": "Massive 5th-century fortified citadel that served as the palace residence for the Emirs of Bukhara.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Ark_of_Bukhara_2023.9.jpg/3840px-Ark_of_Bukhara_2023.9.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Kyzylkum Desert",
        "caption": "The Kyzylkum Desert is the 15th largest desert in the world.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Region_of_Kyzyl_Kum.png/330px-Region_of_Kyzyl_Kum.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Snow leopard",
        "caption": "The snow leopard is a felid species in the genus Panthera.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/330px-Irbis4.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Uzbekistan is one of only two 'doubly landlocked' nations on Earth (alongside Liechtenstein).",
      "Samarkand was a crown jewel of the ancient Silk Road, with its blue-tiled architecture praised by Alexander the Great and Marco Polo.",
      "Uzbek plov (spiced rice pilaf with tender lamb, carrots, and raisins) is a national culinary obsession inscribed on UNESCO's heritage list."
    ]
  },
  "va": {
    "landmarks": [
      {
        "title": "Saint Peter's Basilica",
        "caption": "The monumental papal enclave church designed by Michelangelo and Bernini, center of the Catholic world.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/3840px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "The Sistine Chapel",
        "caption": "Renowned chapel famous for Michelangelo's ceiling frescoes, including The Creation of Adam and The Last Judgment.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Crowds_in_Vatican_Museum_%285789666941%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Saint Peter's Square",
        "caption": "Colossal elliptical piazza framed by Bernini's four-row colonnade and ancient Egyptian obelisk.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Crowds_in_Vatican_Museum_%285789666941%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Gardens of Vatican City",
        "caption": "The Gardens of Vatican City, also informally known as the Vatican Gardens in Vatican City, are private urban gardens and parks which...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Vatikanische_Gaerten_Museen_Rom.jpg/330px-Vatikanische_Gaerten_Museen_Rom.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Italian sparrow",
        "caption": "The Italian sparrow, also known as the cisalpine sparrow, is a passerine bird of the sparrow family Passeridae, found in Italy and other...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Sparrow_on_blue_chair_%28cropped%29.jpg/330px-Sparrow_on_blue_chair_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Vatican City is the smallest independent sovereign state in the world, covering an area of just 0.49 square kilometers (121 acres).",
      "The Vatican is guarded by the Pontifical Swiss Guard, the world's oldest active military unit, founded in 1506.",
      "It is the only sovereign country in the world designated entirely as a UNESCO World Heritage Site."
    ]
  },
  "vc": {
    "landmarks": [
      {
        "title": "La Soufrière Volcano",
        "caption": "Active stratovolcano (1,234 m) dominating the northern end of Saint Vincent, with hiking trails leading to the crater.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Saint_Vincent_Island.JPG/3840px-Saint_Vincent_Island.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Tobago Cays Marine Park",
        "caption": "Pristine group of five uninhabited sand islets protected by horseshoe coral reefs teeming with green sea turtles.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Tobagocays2018.jpg/3840px-Tobagocays2018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Bequia Island & Princess Margaret Beach",
        "caption": "Charming Grenadine island celebrated for traditional wooden boatbuilding and tranquil calm beaches.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/87/LocationBequia.PNG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Tobago Cays",
        "caption": "The Tobago Cays are an archipelago located in the Southern Grenadines of Saint Vincent and the Grenadines comprising five small islands and extensive coral reefs.  The cays – Petit Rameau, Petit Bateau, Baradal, Petit Tabac and Jamesby – are a popular tourism destination.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Tobagocays2018.jpg/330px-Tobagocays2018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Saint Vincent amazon",
        "caption": "The Saint Vincent amazon, also known as Saint Vincent parrot, is a large, approximately 40 cm (16 in) long, multi-colored amazon parrot...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Amazona_guildingii_-Botanical_Gardens_-Kingstown_-Saint_Vincent-8a-4c.jpg/330px-Amazona_guildingii_-Botanical_Gardens_-Kingstown_-Saint_Vincent-8a-4c.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The country consists of the main island of Saint Vincent and the northern two-thirds of the 32 Grenadine islands.",
      "Port Royal scenes in Disney's blockbuster Pirates of the Caribbean films were shot on location in Wallilabou Bay on Saint Vincent.",
      "The Saint Vincent Botanical Gardens, founded in 1765, is one of the oldest botanical gardens in the Western Hemisphere."
    ]
  },
  "ve": {
    "landmarks": [
      {
        "title": "Angel Falls (Salto Ángel)",
        "caption": "The world's highest uninterrupted waterfall, plunging 979 meters from the cliff of the Auyán-tepui plateau in Canaima.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e9/SaltoAngel1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Mount Roraima Tepui",
        "caption": "Ancient tabletop sandstone mountain rising above the Gran Sabana with sheer 400-meter cliffs and unique carnivorous plants.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Roraima3_%2879%29.JPG/3840px-Roraima3_%2879%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Los Roques Archipelago",
        "caption": "Protected Caribbean national marine park consisting of 350 islands, cays, and pristine white sand coral reefs.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/92/Gran_Roque_from_plane.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Angel Falls",
        "caption": "Angel Falls  is a waterfall in Venezuela. \nIt is the world's tallest uninterrupted waterfall, with a height of 979 metres (3,212 ft), and a plunge of 807 m (2,648 ft).",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/SaltoAngel1.jpg/330px-SaltoAngel1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Venezuelan troupial",
        "caption": "The Venezuelan troupial, known in Venezuela as the Turpial, is the national bird of Venezuela.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Curacao-Icterus-Icterus-2013.JPG/330px-Curacao-Icterus-Icterus-2013.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Angel Falls (Kerepakupai Merú) is the highest waterfall in the world at 979 meters, with an uninterrupted plunge of 807 meters.",
      "Catatumbo Lightning in Venezuela is a unique atmospheric phenomenon producing continuous lightning storms up to 160 nights a year over Lake Maracaibo.",
      "Venezuela possesses the largest proven crude oil reserves of any country on Earth, concentrated in the Orinoco Belt."
    ]
  },
  "vn": {
    "landmarks": [
      {
        "title": "Ha Long Bay",
        "caption": "UNESCO World Heritage seascape of nearly 2,000 emerald-topped limestone pillars rising out of the Gulf of Tonkin.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Ha_Long_Bay_in_2019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Hội An Ancient Lantern Town",
        "caption": "Well-preserved 15th- to 19th-century international trading port glowing with colorful silk lanterns at night.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Hoi_An_%28I%29.jpg/3840px-Hoi_An_%28I%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Golden Bridge (Cầu Vàng) at Ba Na Hills",
        "caption": "150-meter pedestrian walkway held high in the clouds above Da Nang by two giant sculpted stone hands.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Linh_Ung_Pagoda.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Hạ Long Bay",
        "caption": "Hạ Long Bay or Halong Bay is a bay located in Northeastern Vietnam, administered by the city of Quảng Ninh.  The name Hạ Long means \"descending dragon\".",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Ha_Long_Bay_in_2019.jpg/330px-Ha_Long_Bay_in_2019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Saola",
        "caption": "The saola, also called the spindlehorn, Asian unicorn, or infrequently, Vũ Quang bovid, is a forest-dwelling bovid native to the...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Pseudoryx_nghetinhensis%2C_b.PNG/330px-Pseudoryx_nghetinhensis%2C_b.PNG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Vietnam is the world's second-largest producer and exporter of coffee, renowned for its strong Robusta beans and condensed milk coffee (cà phê sữa đá).",
      "Sơn Đoòng Cave in central Vietnam is recognized as the largest natural cave in the world by cross-sectional volume.",
      "The traditional Vietnamese silk dress, the áo dài, is worn with flowing trousers and is celebrated as a graceful national symbol."
    ]
  },
  "vu": {
    "landmarks": [
      {
        "title": "Mount Yasur Volcano on Tanna Island",
        "caption": "One of the world's most accessible continuously active volcanoes, erupting glowing magma strombolian fireworks daily.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Tannamap.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Millennium Cave on Espiritu Santo",
        "caption": "Colossal natural limestone cave chamber traversed by underground river trekking, bamboo bridges, and jungle canyons.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/ISS027-E-17333_-_View_of_Dominican_Republic.jpg/3840px-ISS027-E-17333_-_View_of_Dominican_Republic.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "SS President Coolidge Shipwreck",
        "caption": "The largest and most accessible intact luxury liner shipwreck in the world, resting in clear tropical waters off Santo.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/S.S._President_Coolidge_at_sea%2C_1930s.jpg/3840px-S.S._President_Coolidge_at_sea%2C_1930s.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Mount Yasur",
        "caption": "Mount Yasur is an active volcano on Tanna Island, Vanuatu, 361 m (1,184 ft) high above sea level, on the coast near Sulphur Bay, northeast of the taller Mount Tukosmera, which was active in the Pleistocene.  It has a largely unvegetated pyroclastic cone with a nearly circular summit crater 400 m in diameter.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Mount_Yasur_eruption_2006%2C_Tanna_Island%2C_Vanuatu%2C_VAN_0516.jpg/330px-Mount_Yasur_eruption_2006%2C_Tanna_Island%2C_Vanuatu%2C_VAN_0516.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Vanuatu flying fox",
        "caption": "The Vanuatu flying fox or white flying fox is a species of flying fox in the family Pteropodidae.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Pteropus_anetianus.jpg/330px-Pteropus_anetianus.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The traditional Pentecost Island land diving (Naghol) ritual, where men dive from 30-meter wooden towers with vines tied to their ankles, inspired modern bungee jumping.",
      "Mount Yasur on Tanna Island has been erupting continuously for over 800 years and was noted by Captain James Cook in 1774.",
      "Vanuatu has the world's only underwater post office, located 3 meters beneath the surface in Hideaway Island's marine sanctuary."
    ]
  },
  "ws": {
    "landmarks": [
      {
        "title": "To Sua Ocean Trench",
        "caption": "Stunning 30-meter-deep natural sinkhole filled with clear turquoise seawater, surrounded by lush jungle foliage on Upolu.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Fuipisia_waterfall_-_Samoa.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Alofaaga Blowholes on Savai'i",
        "caption": "Spectacular natural volcanic blowholes that blast seawater and launched coconuts dozens of meters into the sky.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Samoa_Savaii_map.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Piula Cave Pool",
        "caption": "Natural freshwater swimming pool formed inside a volcanic lava tube right beside the Pacific ocean shore.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Piula_Theological_College%2C_Upolu_island%2C_Samoa%2C_2009.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Savaiʻi",
        "caption": "Savaiʻi is the largest and highest island both in Samoa and in the Samoan Islands chain.  The island is also the sixth largest in Polynesia, behind the three main islands of New Zealand and the Hawaiian Islands of Hawaii and Maui.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Samoa_Savaii_map.png/330px-Samoa_Savaii_map.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Tooth-billed pigeon",
        "caption": "The tooth-billed pigeon, also known as the manumea, is a large pigeon found only in Samoa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Naturalis_Biodiversity_Center_-_ZMA.AVES.56900_-_Didunculus_strigirostris_Jardine%2C_1845_-_Columbidae_-_skin_specimen.jpeg/330px-Naturalis_Biodiversity_Center_-_ZMA.AVES.56900_-_Didunculus_strigirostris_Jardine%2C_1845_-_Columbidae_-_skin_specimen.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Fa'a Samoa (The Samoan Way) is the 3,000-year-old traditional socio-political cultural framework guiding community life.",
      "In 2011, Samoa skipped December 30 entirely by jumping west across the International Date Line to align trading days with Australia and NZ.",
      "Scottish author Robert Louis Stevenson spent his final years in Samoa, where he was beloved and buried atop Mount Vaea."
    ]
  },
  "ye": {
    "landmarks": [
      {
        "title": "Old Walled City of Shibam",
        "caption": "The 'Manhattan of the Desert', ancient mudbrick high-rises soaring up to 11 stories built in the 16th century.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/%D9%85%D8%AF%D9%8A%D9%86%D8%A9_%D8%B4%D8%A8%D8%A7%D9%85_%D8%AD%D8%B6%D8%B1%D9%85%D9%88%D8%AA.jpg/3840px-%D9%85%D8%AF%D9%8A%D9%86%D8%A9_%D8%B4%D8%A8%D8%A7%D9%85_%D8%AD%D8%B6%D8%B1%D9%85%D9%88%D8%AA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Old City of Sana'a",
        "caption": "Enchanting 2,500-year-old city of multistory rammed-earth houses decorated with geometric gypsum friezes.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5c/San%27a03_flickr.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Dragon's Blood Trees of Socotra",
        "caption": "Otherworldly umbrella-shaped dragon blood trees producing dark red resin on the isolated island of Socotra.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Dragonblood_tree_in_Socotra_2.jpg/3840px-Dragonblood_tree_in_Socotra_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Socotra",
        "caption": "Socotra, locally known as Saqatri, is a Yemeni island in the Indian Ocean.  It is situated between the Gulf of Aden, the Guardafui Channel and the Arabian Sea, and lies near major shipping routes.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Socotra_satview.jpg/330px-Socotra_satview.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Arabian leopard",
        "caption": "The Arabian leopard is the smallest leopard subspecies.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/PikiWiki_Israel_14861_judean_desert_leopard_cropped.JPG/330px-PikiWiki_Israel_14861_judean_desert_leopard_cropped.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Shibam in Yemen features the oldest skyscrapers in the world, built from sun-dried mudbrick over 500 years ago.",
      "Socotra Island is often called the 'most alien place on Earth' because over 37% of its 800+ plant species are found nowhere else.",
      "Yemen's port city of Mocha (Al-Makha) was the historic global marketplace that gave coffee its famous namesake."
    ]
  },
  "za": {
    "landmarks": [
      {
        "title": "Table Mountain in Cape Town",
        "caption": "Iconic flat-topped sandstone mountain rising over 1,000 meters above Table Bay, flanked by Lion's Head and Devil's Peak.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Table_Mountain_DanieVDM.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Kruger National Park",
        "caption": "One of Africa's largest game reserves, famous for high densities of lions, leopards, rhinos, elephants, and buffalos.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Kruger_Zebra.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Blyde River Canyon",
        "caption": "One of the largest green river canyons in the world, featuring the iconic Three Rondavels sandstone summits.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/20131119_162543b.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Blyde River Canyon",
        "caption": "The Blyde River Canyon is a 26 km long canyon located in Mpumalanga, South Africa.  It is the third-largest canyon on Earth, behind the Grand Canyon and the Fish River Canyon Unlike the Grand and Fish River Canyon, the Blyde River Canyon is a \"green canyon\" which is dominated by subtropical vegetation.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/20131119_162543b.jpg/330px-20131119_162543b.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Springbok",
        "caption": "The springbok or springbuck is an antelope found mainly in south and southwest Africa.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/174_Male_Springbok_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg/330px-174_Male_Springbok_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "South Africa has three distinct official capital cities: Pretoria (Executive), Cape Town (Legislative), and Bloemfontein (Judicial).",
      "It is the only country in the world to voluntarily dismantle and eliminate its entire nuclear weapons program.",
      "The Cape Floral Kingdom in South Africa is the smallest but richest of the world's six floral kingdoms, with over 9,000 plant species."
    ]
  },
  "zm": {
    "landmarks": [
      {
        "title": "Victoria Falls (Mosi-oa-Tunya)",
        "caption": "The 'Smoke that Thunders', the world's largest sheet of falling water spanning 1,708 meters across the Zambezi gorge.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg/3840px-Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "South Luangwa National Park",
        "caption": "World-renowned wildlife sanctuary along the Luangwa River, celebrated as the birthplace of walking safaris.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Luangwa_River_crossing.jpg/3840px-Luangwa_River_crossing.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Devil's Pool & Livingstone Island",
        "caption": "Exhilarating natural rock pool perched right on the lip of Victoria Falls where daring swimmers peer over the abyss.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg/3840px-Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Victoria Falls",
        "caption": "Victoria Falls is a waterfall on the Zambezi River, located on the border between Zambia and Zimbabwe.  It is one of the world's largest waterfalls, with a width of 1,708 m (5,604 ft).",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg/330px-Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "African fish eagle",
        "caption": "The African fish eagle or the African sea eagle is a large species of eagle found throughout sub-Saharan Africa wherever large bodies of...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/African_fish_eagle%2C_Haliaeetus_vocifer%2C_at_Chobe_National_Park%2C_Botswana_%2833516612831%29.jpg/330px-African_fish_eagle%2C_Haliaeetus_vocifer%2C_at_Chobe_National_Park%2C_Botswana_%2833516612831%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "Victoria Falls forms the largest curtain of falling water on Earth, plunging roughly 108 meters into the Batoka Gorge.",
      "Zambia is the historic birthplace of the guided walking safari, pioneered by conservationist Norman Carr in South Luangwa.",
      "Lake Kariba on the Zambia-Zimbabwe border is the world's largest man-made reservoir by water volume, holding over 180 billion tons."
    ]
  },
  "zw": {
    "landmarks": [
      {
        "title": "Great Zimbabwe Monument",
        "caption": "Monumental medieval stone city with dry-stone granite walls built without mortar between the 11th and 15th centuries.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Conical_Tower_-_Great_Enclosure_III_%2833736918448%29.jpg/3840px-Conical_Tower_-_Great_Enclosure_III_%2833736918448%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Victoria Falls (Zimbabwe Side)",
        "caption": "Spectacular viewing points overlooking the Main Falls, Devil's Cataract, and continuous rainforest mist.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg/3840px-Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Hwange National Park",
        "caption": "Zimbabwe's largest natural reserve, home to one of Africa's largest elephant populations and wild dog packs.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/80/Down_the_water_hole.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
      },
      {
        "title": "Matobo National Park",
        "caption": "The Matobo National Park forms the core of the Matobo or Matopos Hills, an area of granite kopjes and wooded valleys commencing some 35 kilometres (22 mi) south of Bulawayo, southern Zimbabwe.  The hills were formed over 2 billion years ago with granite being forced to the surface; it has eroded to produce smooth \"whaleback dwalas\" and broken kopjes, strewn with boulders and interspersed with thickets of vegetation.",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Sunrise_Matobo_Zimbabwe.jpg/330px-Sunrise_Matobo_Zimbabwe.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      },
      {
        "title": "Black rhinoceros",
        "caption": "The black rhinoceros, also called the black rhino or the hooked-lip rhinoceros, is a species of rhinoceros native to East and Southern...",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Black_Rhino_at_Working_with_Wildlife.jpg/330px-Black_Rhino_at_Working_with_Wildlife.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
      }
    ],
    "facts": [
      "The name 'Zimbabwe' originates from the Shona phrase 'Dzimba-dza-mabwe', meaning 'large houses of stone', referring to Great Zimbabwe.",
      "The Zimbabwe Bird carved from soapstone at Great Zimbabwe is the national emblem proudly displayed on the flag and coat of arms.",
      "Mana Pools National Park along the lower Zambezi River is famed for elephants that stand on their hind legs to reach high acacia pods."
    ]
  }
};
