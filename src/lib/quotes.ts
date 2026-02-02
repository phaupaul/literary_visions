export interface BookQuote {
    quote: string;
    visualContext: string;
    worldContext: string; // Additional context about the world/technology/setting
}

export interface Book {
    title: string;
    author: string;
    series?: string;
    genre: string;
    worldContext: string; // Overall world description for better prompt enhancement
    quotes: BookQuote[];
}

export const BOOK_LIBRARY: Book[] = [
    {
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        series: "The Stormlight Archive",
        genre: "Epic Fantasy",
        worldContext: "Roshar is an alien world with frequent magical storms called highstorms. The landscape is shaped by these storms, with unique flora and fauna. Magic exists through spren (nature spirits) and gemstones that capture stormlight. The world has a unique ecology with rockbuds, grass that retracts when touched, and creatures with carapaces.",
        quotes: [
            {
                quote: "The Shattered Plains were a broken, jagged landscape of stone plateaus separated by deep chasms, stretching out to the horizon. Tiny fractures, fissures in the stone, ran across the plains like spiderwebs.",
                visualContext: "Vast alien landscape of broken stone plateaus, deep chasms between them, spiderweb-like fissures, alien sky with strange clouds, epic scale, desolate beauty",
                worldContext: "The Shattered Plains are a warzone on the alien world of Roshar, created by a magical catastrophe. The plateaus are connected by permanent bridges, and the chasms hide dangerous creatures called chasmfiends."
            },
            {
                quote: "The highstorm was a violent wall of darkness and lightning, majestic and terrible. Within it, the familiar world became something grand, a chaos of wind and rain that washed away the old.",
                visualContext: "Massive wall of storm clouds approaching, supernatural lightning, magical energy crackling through the air, otherworldly storm system, dramatic lighting",
                worldContext: "Highstorms are magical weather phenomena that travel across Roshar from east to west, bringing both destruction and magical energy called stormlight. They're so powerful they can level buildings and reshape landscapes."
            },
            {
                quote: "Kaladin stood at the edge of the chasm, stormlight streaming from his body like luminescent smoke. He held his spear, and the winds themselves seemed to obey his will.",
                visualContext: "Warrior glowing with magical light, luminescent energy streaming from body, spear in hand, wind swirling around him, heroic pose, dramatic backlighting, supernatural power",
                worldContext: "Kaladin is a Windrunner, one of the Knights Radiant who can manipulate gravity and pressure using stormlight. The glowing light is the magical energy he absorbs from gemstones, and he can use it to perform superhuman feats and fly."
            }
        ]
    },
    {
        title: "Red Rising",
        author: "Pierce Brown",
        series: "Red Rising Saga",
        genre: "Dystopian Sci-Fi",
        worldContext: "A future society where humanity is divided into color-coded castes, with Golds at the top and Reds at the bottom. Mars has been terraformed and colonized. Technology includes advanced mining equipment, gravity manipulation, and genetic modification. The society is based on Roman-inspired hierarchy and brutal competition.",
        quotes: [
            {
                quote: "It is eerie in the deep tunnels. Lonely. Beyond the roar of the drill, red dust fills the air. I cannot see the surface, only the rust-red rock of Mars surrounding me.",
                visualContext: "Deep underground Martian mining tunnels, massive industrial claw drill machine, red rock walls, heavy mining equipment, claustrophobic atmosphere, red dust clouds",
                worldContext: "The drill is a massive industrial claw drill used for helium-3 mining on Mars. These are enormous machines that can carve through solid rock, operated by the Red caste who are enslaved miners believing they're terraforming Mars for future generations."
            },
            {
                quote: "The Institute sprawls across a Martian valley, a massive arena where young Golds battle for supremacy. Castles rise from the red soil, banners snap in the thin wind, and the game of conquest begins.",
                visualContext: "Vast Martian valley with multiple fortified castles, red desert landscape, thin atmosphere with pink sky, military encampments, banners flying, Roman-inspired architecture on alien world",
                worldContext: "The Institute is a brutal training ground where teenage Golds are divided into houses and must conquer each other in a year-long war game. It's located in a terraformed valley on Mars with artificial castles and resources. Success here determines future power in Gold society."
            },
            {
                quote: "I stand in the arena, a razor in my hand. The blade curves like a sickle, its edge sharp enough to cut through bone. Around me, thousands of Golds watch from the stands, hungry for blood.",
                visualContext: "Gladiatorial arena with curved blade weapon, futuristic Roman colosseum, massive crowd in tiered seating, dramatic lighting, sense of deadly combat, sci-fi meets ancient Rome aesthetic",
                worldContext: "Razors are curved bladed weapons used by Golds in duels and combat. The arena represents the brutal meritocracy of Gold society where combat prowess determines status. These duels are often to the death and are entertainment for the ruling class."
            }
        ]
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        series: "Harry Potter",
        genre: "Urban Fantasy",
        worldContext: "The wizarding world exists hidden within modern Britain, with Hogwarts School of Witchcraft and Wizardry as its centerpiece. Magic is performed with wands, potions, and spells. Magical creatures include hippogriffs, dementors, and patronuses. The world has a rich history with dark wizards, ancient magic, and magical artifacts.",
        quotes: [
            {
                quote: "The Dementors were gliding toward them, their faces hidden beneath their hoods, their rotting hands outstretched. The cold was so intense he felt it in his bones, and then came the screaming.",
                visualContext: "Dark hooded figures floating above ground, tattered black robes flowing, skeletal hands reaching out, intense cold mist surrounding them, souls being drained, dark atmosphere",
                worldContext: "Dementors are soul-sucking creatures that guard Azkaban prison. They drain happiness and hope from their victims, leaving only despair. They glide rather than walk, and their presence causes extreme cold and relives worst memories. They can perform the Dementor's Kiss, sucking out a person's soul."
            },
            {
                quote: "The Patronus burst from the end of his wand, a silver stag that galloped toward the Dementors, its antlers lowered, driving them back into the darkness.",
                visualContext: "Brilliant silver ethereal stag made of light, glowing antlers, charging forward with magical energy, dispelling darkness, protective magic, hope incarnate",
                worldContext: "A Patronus is an advanced defensive spell that takes the form of a silvery-white animal unique to each wizard. It's conjured by focusing on the happiest memory and represents hope and positive energy. Harry's Patronus is a stag, the same form his father's took."
            },
            {
                quote: "Hogwarts castle stood tall against the night sky, its many turrets and towers lit with the warm glow of a thousand candles, reflected in the black lake below.",
                visualContext: "Massive medieval castle with multiple towers and turrets, warm candlelight glowing from windows, Gothic architecture, reflected perfectly in still dark lake, magical atmosphere, starry night sky",
                worldContext: "Hogwarts is a vast magical castle in the Scottish Highlands, hidden from Muggle view by powerful enchantments. It has moving staircases, talking portraits, secret passages, and is home to ghosts. The castle is sentient to some degree and protects its students with ancient magic."
            }
        ]
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        series: "The Lord of the Rings",
        genre: "Epic Fantasy",
        worldContext: "Middle-earth is a vast fantasy world with diverse races including Elves, Dwarves, Hobbits, and Men. Magic is subtle and ancient, wielded by wizards like Gandalf. The world is threatened by the Dark Lord Sauron and his One Ring of Power. Landscapes range from the peaceful Shire to the dark land of Mordor.",
        quotes: [
            {
                quote: "The road goes ever on and on, down from the door where it began. Now far ahead the road has gone, and I must follow, if I can.",
                visualContext: "Winding dirt road through rolling green hills, hobbit holes in hillsides, pastoral countryside, distant mountains, golden sunlight, sense of adventure and journey beginning",
                worldContext: "The Shire is the homeland of Hobbits, a peaceful agricultural region with rolling hills, gardens, and hobbit holes built into hillsides. It represents the simple, comfortable life that Frodo must leave behind to save Middle-earth."
            },
            {
                quote: "The mines of Moria were vast and dark, with pillars carved from the living rock rising into shadow. Drums, drums in the deep. They are coming.",
                visualContext: "Enormous underground dwarven halls, massive stone pillars carved with runes, torchlight casting long shadows, ancient architecture, ominous darkness, sense of dread and ancient evil",
                worldContext: "Moria, also called Khazad-dûm, was once the greatest Dwarven kingdom, carved deep into the Misty Mountains. It was abandoned after the Dwarves delved too deep and awakened a Balrog, an ancient demon of fire and shadow. The halls are now filled with orcs and goblins."
            },
            {
                quote: "Lothlórien was a land of golden light and silver trees. The mallorn trees rose high, their leaves shimmering, and upon their branches the Elves had built their flets, hidden among the golden leaves.",
                visualContext: "Ethereal elven forest with massive silver-barked trees, golden leaves glowing with inner light, elegant platforms built in branches, soft magical light filtering through canopy, timeless beauty",
                worldContext: "Lothlórien is an ancient Elven realm protected by the power of Galadriel's ring. Time moves differently here, and the forest is filled with mallorn trees that don't exist elsewhere in Middle-earth. The Elves live in platforms called flets built high in the trees."
            },
            {
                quote: "Mount Doom rose before them, a mountain of fire and ash. Rivers of lava flowed down its sides, and smoke and flame poured from its peak into the black sky of Mordor.",
                visualContext: "Massive volcanic mountain with glowing lava rivers, ash clouds, fire and smoke erupting from peak, desolate wasteland, oppressive dark sky, hellish landscape, sense of ultimate evil",
                worldContext: "Mount Doom, or Orodruin, is the volcano where Sauron forged the One Ring. It's located in the heart of Mordor, Sauron's dark realm. The only way to destroy the Ring is to cast it into the fires of Mount Doom where it was made."
            }
        ]
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        series: "Dune Chronicles",
        genre: "Space Opera",
        worldContext: "The desert planet Arrakis is the only source of the spice melange, essential for space travel and extending life. The planet is inhabited by giant sandworms and the native Fremen. Technology includes ornithopters, stillsuits for water conservation, and personal shields. The universe is ruled by feudal houses under an Emperor.",
        quotes: [
            {
                quote: "The desert was a vast ocean of sand dunes, rippling endlessly under the twin suns. In the distance, the rhythmic thumping of a sandworm's approach sent tremors through the ground.",
                visualContext: "Vast desert landscape with massive sand dunes, twin suns in alien sky, distant sandworm creating ground tremors, spice in the air creating shimmer effects",
                worldContext: "Arrakis desert with its massive sandworms that can grow over 400 meters long. The spice melange creates a cinnamon scent and blue-within-blue eyes for those who consume it regularly."
            },
            {
                quote: "The ornithopter's wings beat like a giant insect as it flew low over the dunes, its shadow racing across the golden sand. Inside, Paul could see the spice harvesters at work, racing against time before the worm arrived.",
                visualContext: "Insect-like aircraft with flapping wings flying over desert, mechanical dragonfly design, industrial spice harvesting equipment on sand, sense of urgency, golden desert landscape",
                worldContext: "Ornithopters are the primary aircraft on Arrakis, using flapping wings to fly. Spice harvesting is dangerous work as the vibrations attract sandworms. Harvesters must be picked up by carryalls before the worms arrive, or the crew and equipment are lost."
            },
            {
                quote: "Paul's eyes blazed with an inner blue fire, the mark of deep spice addiction. He saw the future branching before him like a vast tree, every decision a new path through time.",
                visualContext: "Close-up of eyes glowing with supernatural blue light, prescient visions overlaying reality, multiple timelines visible, mystical atmosphere, spice-induced consciousness",
                worldContext: "The spice melange grants prescient abilities to those who consume enough of it. Paul Atreides becomes a prophet who can see possible futures. The blue-within-blue eyes are a sign of deep spice saturation, where even the whites of the eyes turn blue."
            }
        ]
    },
    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        series: "The Kingkiller Chronicle",
        genre: "Epic Fantasy",
        worldContext: "The Four Corners of Civilization is a world where magic exists through sympathy (connecting similar objects) and naming (understanding the true names of things). The University teaches these arts. There are also the Fae realm and Chandrian, mythical beings of great power and malevolence.",
        quotes: [
            {
                quote: "The Waystone Inn lay in silence, and it was a silence of three parts. The most obvious part was a hollow, echoing quiet, made by things that were lacking.",
                visualContext: "Rustic medieval inn interior, empty common room with wooden tables and chairs, fireplace with dying embers, dust motes in shafts of light, melancholic atmosphere",
                worldContext: "The Waystone Inn is run by Kote (Kvothe in hiding), located in a small rural town. The inn represents a place where stories and legends converge, with an atmosphere of hidden magic and suppressed power."
            },
            {
                quote: "The Archives were vast beyond imagining, shelf after shelf stretching into shadow. Ancient books bound in leather, scrolls yellowed with age, and the smell of dust and old paper filled the air.",
                visualContext: "Massive library with towering shelves disappearing into darkness, ancient tomes and scrolls, candlelight and lamplight creating pools of warm light, mysterious shadows, sense of infinite knowledge",
                worldContext: "The Archives at the University contain the largest collection of knowledge in the world. It's a labyrinthine library where students can spend years and never see all of it. Access is restricted and jealously guarded by the Masters."
            },
            {
                quote: "Kvothe called the name of the wind, and it came. The air itself seemed to listen, to bend to his will, as leaves and dust swirled around him in a vortex of power.",
                visualContext: "Young man with red hair surrounded by swirling wind and leaves, magical energy visible in the air, dramatic pose, supernatural control over elements, mystical atmosphere",
                worldContext: "Naming is the most powerful form of magic, requiring deep understanding of the true nature of things. When Kvothe calls the name of the wind, he's not commanding it but speaking to its essential nature. It's a rare and dangerous gift that few possess."
            }
        ]
    }
];

// Legacy export for backward compatibility
export const CURATED_QUOTES = BOOK_LIBRARY.flatMap(book => 
    book.quotes.map(quote => ({
        book: book.title,
        author: book.author,
        quote: quote.quote,
        visualContext: quote.visualContext,
        worldContext: quote.worldContext
    }))
);
