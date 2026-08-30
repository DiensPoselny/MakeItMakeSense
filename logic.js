// MAIN SCREEN LOGIC
const playButton = document.querySelector("button");

playButton.addEventListener("click", () => {
  const titleContainer = document.getElementById("p-title-container");
  const wordpackContainer = document.getElementById("wordpack-container");

  titleContainer.classList.add("hidden");
  playButton.classList.add("hidden");
  wordpackContainer.classList.remove("hidden");
});

const characterButton = document.getElementById("wordpack-characters");
const animalButton = document.getElementById("wordpack-animals");
const moviesButton = document.getElementById("wordpack-movies-series");
const jobsButton = document.getElementById("wordpack-jobs");
const videogamesButton = document.getElementById("wordpack-videogames");

const charactersWordpack = [
  { word: "Yoda", hint: "Jedi" },
  { word: "Darth Vader", hint: "Breathing" },
  { word: "Harry Potter", hint: "Lightning" },
  { word: "Voldemort", hint: "Nose" },
  { word: "Hermione Granger", hint: "Intelligence" },
  { word: "Sherlock Holmes", hint: "Deduction" },
  { word: "Geralt of Rivia", hint: "White" },
  { word: "Shrek", hint: "Swamp" },
  { word: "Donkey", hint: "Silly" },
  { word: "Pikachu", hint: "Lightning" },
  { word: "Mario", hint: "Plumber" },
  { word: "Luigi", hint: "Brother" },
  { word: "Batman", hint: "Cave" },
  { word: "Joker", hint: "Laughter" },
  { word: "Spider-Man", hint: "Web" },
  { word: "Iron Man", hint: "Money" },
  { word: "Thor", hint: "God" },
  { word: "Hulk", hint: "Rage" },
  { word: "Gollum", hint: "Precious" },
  { word: "Gandalf", hint: "Staff" },
  { word: "Legolas", hint: "Bow" },
  { word: "Jack Sparrow", hint: "Rum" },
  { word: "Puss in Boots", hint: "Eyes" },
  { word: "Pinocchio", hint: "Lying" },
  { word: "SpongeBob", hint: "Burger" },
  { word: "Patrick Star", hint: "Rock" },
  { word: "Homer Simpson", hint: "Donut" },
  { word: "Bart Simpson", hint: "Skateboard" },
  { word: "Wednesday Addams", hint: "Emo" },
  { word: "Barbie", hint: "Pink" },
  { word: "Elsa", hint: "Ice" },
  { word: "Olaf", hint: "Hug" },
  { word: "Simba", hint: "Savana" },
  { word: "Mickey Mouse", hint: "Ears" },
  { word: "Wolverine", hint: "Claws" },
  { word: "Deadpool", hint: "4th Wall" },
  { word: "Thanos", hint: "Gauntlet" },
  { word: "Lara Croft", hint: "Tomb" },
  { word: "Kratos", hint: "Father" },
  { word: "Minion", hint: "Banana" },
  { word: "Gru", hint: "Villain" },
  { word: "Asterix", hint: "Potion" },
  { word: "The Little Mole (Krteček)", hint: "Pockets" },
  { word: "Pat (a Mat)", hint: "Handymen" },
  { word: "Scooby-Doo", hint: "Snack" },
  { word: "Terminator", hint: "Cyborg" },
  { word: "Neo", hint: "Timestop" },
  { word: "Indiana Jones", hint: "Whip" },
  { word: "Willy Wonka", hint: "Chocolate" },
  { word: "Luke Skywalker", hint: "Lightsaber" },
  { word: "Princess Leia", hint: "Buns" },
  { word: "Frodo Baggins", hint: "Ring" },
  { word: "Sauron", hint: "Eye" },
  { word: "Katniss Everdeen", hint: "Mockingjay" },
  { word: "John Wick", hint: "Pencil" },
  { word: "Pennywise", hint: "Balloon" },
  { word: "Freddy Krueger", hint: "Nightmare" },
  { word: "Hannibal Lecter", hint: "Silence" },
  { word: "Walter White", hint: "Chemistry" },
  { word: "Jesse Pinkman", hint: "Meth" },
  { word: "Peppa Pig", hint: "Puddle" },
  { word: "Sonic", hint: "Rings" },
  { word: "Tails", hint: "Helicopter" },
  { word: "Bowser", hint: "Shell" },
  { word: "Princess Peach", hint: "Castle" },
  { word: "Zelda", hint: "Triforce" },
  { word: "Link", hint: "Mastersword" },
  { word: "Pac-Man", hint: "Pellet" },
  { word: "Steve", hint: "Pickaxe" },
  { word: "Creeper", hint: "Explosion" },
  { word: "Donald Duck", hint: "Sailor" },
  { word: "Goofy", hint: "Clumsy" },
  { word: "Aladdin", hint: "Genie" },
  { word: "Tarzan", hint: "Jungle" },
  { word: "Hercules", hint: "Strength" },
  { word: "Mulan", hint: "Warrior" },
  { word: "Rapunzel", hint: "Hair" },
  { word: "Robin Hood", hint: "Archery" },
  { word: "Frankenstein", hint: "Monster" },
  { word: "Dracula", hint: "Vampire" },
  { word: "Sheriff Woody", hint: "Boot" },
  { word: "Buzz Lightyear", hint: "Infinity" },
  { word: "Lightning McQueen", hint: "Racecar" },
  { word: "Kung Fu Panda", hint: "Dumpling" },
  { word: "Garfield", hint: "Lasagna" },
  { word: "Popeye", hint: "Spinach" },
  { word: "Daffy Duck", hint: "Lisp" },
  { word: "Bugs Bunny", hint: "Carrot" },
  { word: "Tom", hint: "Trap" },
  { word: "Jerry", hint: "Cheese" },
  { word: "Groot", hint: "Tree" },
  { word: "Rocket Raccoon", hint: "Blaster" },
  { word: "Captain America", hint: "Shield" },
  { word: "Black Widow", hint: "Spy" },
  { word: "Doctor Strange", hint: "Portal" },
  { word: "Sub-Zero", hint: "Freeze" },
  { word: "Scorpion", hint: "Spear" },
  { word: "Master Chief", hint: "Armor" },
  { word: "Sans", hint: "Skeleton" },
];

const animalsWordpack = [
  { word: "Dog", hint: "Bark" },
  { word: "Cat", hint: "Purr" },
  { word: "Elephant", hint: "Trunk" },
  { word: "Giraffe", hint: "Neck" },
  { word: "Lion", hint: "Mane" },
  { word: "Tiger", hint: "Stripes" },
  { word: "Cheetah", hint: "Speed" },
  { word: "Zebra", hint: "Pattern" },
  { word: "Kangaroo", hint: "Pouch" },
  { word: "Koala", hint: "Eucalyptus" },
  { word: "Penguin", hint: "Tuxedo" },
  { word: "Polar Bear", hint: "Arctic" },
  { word: "Panda", hint: "Bamboo" },
  { word: "Wolf", hint: "Howl" },
  { word: "Fox", hint: "Cunning" },
  { word: "Monkey", hint: "Banana" },
  { word: "Gorilla", hint: "Chest" },
  { word: "Chameleon", hint: "Camouflage" },
  { word: "Sloth", hint: "Slow" },
  { word: "Beaver", hint: "Dam" },
  { word: "Dolphin", hint: "Echolocation" },
  { word: "Whale", hint: "Spout" },
  { word: "Shark", hint: "Fin" },
  { word: "Octopus", hint: "Tentacles" },
  { word: "Jellyfish", hint: "Sting" },
  { word: "Crocodile", hint: "Jaws" },
  { word: "Snake", hint: "Venom" },
  { word: "Frog", hint: "Croak" },
  { word: "Bat", hint: "Radar" },
  { word: "Owl", hint: "Nocturnal" },
  { word: "Eagle", hint: "Talon" },
  { word: "Parrot", hint: "Mimic" },
  { word: "Flamingo", hint: "Pink" },
  { word: "Ostrich", hint: "Sprint" },
  { word: "Peacock", hint: "Feathers" },
  { word: "Camel", hint: "Hump" },
  { word: "Llama", hint: "Spit" },
  { word: "Hippo", hint: "Mud" },
  { word: "Rhino", hint: "Horn" },
  { word: "Skunk", hint: "Odor" },
  { word: "Hedgehog", hint: "Quills" },
  { word: "Mole", hint: "Underground" },
  { word: "Squirrel", hint: "Nut" },
  { word: "Raccoon", hint: "Mask" },
  { word: "Hamster", hint: "Wheel" },
  { word: "Horse", hint: "Gallop" },
  { word: "Cow", hint: "Milk" },
  { word: "Sheep", hint: "Wool" },
  { word: "Pig", hint: "Snout" },
  { word: "Rooster", hint: "Dawn" },
  { word: "Goat", hint: "Horns" },
  { word: "Duck", hint: "Quack" },
  { word: "Goose", hint: "Honk" },
  { word: "Swan", hint: "Grace" },
  { word: "Turkey", hint: "Gobble" },
  { word: "Seal", hint: "Flipper" },
  { word: "Walrus", hint: "Tusks" },
  { word: "Otter", hint: "River" },
  { word: "Badger", hint: "Burrow" },
  { word: "Meerkat", hint: "Sentry" },
  { word: "Hyena", hint: "Laugh" },
  { word: "Leopard", hint: "Spots" },
  { word: "Jaguar", hint: "Bite" },
  { word: "Bison", hint: "Herd" },
  { word: "Moose", hint: "Antlers" },
  { word: "Deer", hint: "Forest" },
  { word: "Reindeer", hint: "Sleigh" },
  { word: "Platypus", hint: "Bill" },
  { word: "Wombat", hint: "Cube" },
  { word: "Armadillo", hint: "Armor" },
  { word: "Anteater", hint: "Tongue" },
  { word: "Porcupine", hint: "Spines" },
  { word: "Piranha", hint: "Teeth" },
  { word: "Seahorse", hint: "Pouch" },
  { word: "Starfish", hint: "Regeneration" },
  { word: "Lobster", hint: "Pincers" },
  { word: "Crab", hint: "Sidewalk" },
  { word: "Stingray", hint: "Barb" },
  { word: "Pelican", hint: "Pouch" },
  { word: "Woodpecker", hint: "Drill" },
  { word: "Toucan", hint: "Beak" },
  { word: "Hummingbird", hint: "Hover" },
  { word: "Vulture", hint: "Scavenger" },
  { word: "Crow", hint: "Intelligence" },
  { word: "Raven", hint: "Feather" },
  { word: "Pigeon", hint: "City" },
  { word: "Scorpion", hint: "Stinger" },
  { word: "Spider", hint: "Eight" },
  { word: "Centipede", hint: "Legs" },
  { word: "Bee", hint: "Honey" },
  { word: "Wasp", hint: "Sting" },
  { word: "Ant", hint: "Colony" },
  { word: "Termite", hint: "Wood" },
  { word: "Butterfly", hint: "Wings" },
  { word: "Moth", hint: "Light" },
  { word: "Dragonfly", hint: "Hovering" },
  { word: "Firefly", hint: "Glow" },
  { word: "Grasshopper", hint: "Jump" },
  { word: "Snail", hint: "Slime" },
  { word: "Leech", hint: "Blood" },
];

const moviesAndSeriesWordpack = [
  { word: "Titanic", hint: "Iceberg" },
  { word: "Inception", hint: "Dream" },
  { word: "Avatar", hint: "Pandora" },
  { word: "The Matrix", hint: "Simulation" },
  { word: "Interstellar", hint: "Blackhole" },
  { word: "Gladiator", hint: "Colosseum" },
  { word: "Jurassic Park", hint: "Dinosaur" },
  { word: "Pulp Fiction", hint: "Briefcase" },
  { word: "Fight Club", hint: "Soap" },
  { word: "Forrest Gump", hint: "Running" },
  { word: "The Godfather", hint: "Mafia" },
  { word: "The Shawshank Redemption", hint: "Escape" },
  { word: "The Dark Knight", hint: "Joker" },
  { word: "Avengers: Endgame", hint: "Snap" },
  { word: "Star Wars", hint: "Force" },
  { word: "The Lord of the Rings", hint: "Mordor" },
  { word: "Harry Potter", hint: "Hogwarts" },
  { word: "Pirates of the Caribbean", hint: "Kraken" },
  { word: "Back to the Future", hint: "DeLorean" },
  { word: "Ghostbusters", hint: "Proton" },
  { word: "Alien", hint: "Xenomorph" },
  { word: "Blade Runner", hint: "Replicant" },
  { word: "Die Hard", hint: "Skyscraper" },
  { word: "The Terminator", hint: "Judgment" },
  { word: "Rocky", hint: "Boxing" },
  { word: "Rambo", hint: "Survival" },
  { word: "Top Gun", hint: "Fighter" },
  { word: "Mad Max", hint: "Wasteland" },
  { word: "Jaws", hint: "Shark" },
  { word: "Home Alone", hint: "Boobytraps" },
  { word: "The Lion King", hint: "Pride" },
  { word: "Toy Story", hint: "Toys" },
  { word: "Finding Nemo", hint: "Ocean" },
  { word: "Monsters, Inc.", hint: "Doors" },
  { word: "Up", hint: "Balloons" },
  { word: "Cars", hint: "Piston" },
  { word: "Coco", hint: "Afterlife" },
  { word: "Frozen", hint: "Arendelle" },
  { word: "Zootopia", hint: "Mammals" },
  { word: "Ratatouille", hint: "Chef" },
  { word: "WALL-E", hint: "Trash" },
  { word: "The Incredibles", hint: "Supers" },
  { word: "Spider-Man: Into the Spider-Verse", hint: "Multiverse" },
  { word: "Oppenheimer", hint: "Atomic" },
  { word: "Barbie", hint: "Barbieland" },
  { word: "Dune", hint: "Spice" },
  { word: "Whiplash", hint: "Drums" },
  { word: "La La Land", hint: "Musical" },
  { word: "Parasite", hint: "Basement" },
  { word: "The Wolf of Wall Street", hint: "Stocks" },
  { word: "Breaking Bad", hint: "Methamphetamine" },
  { word: "Better Call Saul", hint: "Lawyer" },
  { word: "Game of Thrones", hint: "Westeros" },
  { word: "House of the Dragon", hint: "Targaryen" },
  { word: "Stranger Things", hint: "Upside-Down" },
  { word: "Wednesday", hint: "Nevermore" },
  { word: "Squid Game", hint: "Elimination" },
  { word: "Money Heist", hint: "Mint" },
  { word: "The Witcher", hint: "Mutant" },
  { word: "Peaky Blinders", hint: "Flatcap" },
  { word: "The Boys", hint: "Homelander" },
  { word: "The Mandalorian", hint: "Grogu" },
  { word: "The Last of Us", hint: "Cordyceps" },
  { word: "Chernobyl", hint: "Radiation" },
  { word: "Sherlock", hint: "Baker" },
  { word: "Black Mirror", hint: "Dystopia" },
  { word: "Dark", hint: "Timeloop" },
  { word: "The Crown", hint: "Monarchy" },
  { word: "Friends", hint: "Central-Perk" },
  { word: "How I Met Your Mother", hint: "Umbrella" },
  { word: "The Big Bang Theory", hint: "Bazinga" },
  { word: "The Office", hint: "Dunder-Mifflin" },
  { word: "Parks and Recreation", hint: "Pawnee" },
  { word: "Brooklyn Nine-Nine", hint: "Detectives" },
  { word: "Modern Family", hint: "Mockumentary" },
  { word: "The Simpsons", hint: "Springfield" },
  { word: "Family Guy", hint: "Quahog" },
  { word: "South Park", hint: "Colorado" },
  { word: "Rick and Morty", hint: "Portal-Gun" },
  { word: "BoJack Horseman", hint: "Hollywoo" },
  { word: "Arcane", hint: "Hextech" },
  { word: "Cyberpunk: Edgerunners", hint: "Future" },
  { word: "Attack on Titan", hint: "Walls" },
  { word: "Death Note", hint: "Shinigami" },
  { word: "Naruto", hint: "Hokage" },
  { word: "Dragon Ball Z", hint: "Saiyan" },
  { word: "One Piece", hint: "Grand-Line" },
  { word: "Demon Slayer", hint: "Katana" },
  { word: "Vikings", hint: "Valhalla" },
  { word: "The Walking Dead", hint: "Walkers" },
  { word: "Lost", hint: "Island" },
  { word: "Prison Break", hint: "Fox-River" },
  { word: "Dexter", hint: "Blood-Spatter" },
  { word: "True Detective", hint: "Carcosa" },
  { word: "Fargo", hint: "Snow" },
  { word: "Succession", hint: "Waystar" },
  { word: "The Sopranos", hint: "Mobster" },
  { word: "The Wire", hint: "Baltimore" },
  { word: "Westworld", hint: "Hosts" },
  { word: "Severance", hint: "Lumon" },
  { word: "Odyssea", hint: "Mythology" },
  { word: "Spiderman: Brand New Day", hint: "Mutation" },
  { word: "Project Hail Mary", hint: "Statement" },
];

const jobsWordpack = [
  { word: "Doctor", hint: "Stethoscope" },
  { word: "Teacher", hint: "Blackboard" },
  { word: "Firefighter", hint: "Hose" },
  { word: "Police Officer", hint: "Badge" },
  { word: "Chef", hint: "Apron" },
  { word: "Pilot", hint: "Cockpit" },
  { word: "Astronaut", hint: "Spacesuit" },
  { word: "Dentist", hint: "Teeth" },
  { word: "Nurse", hint: "Syringe" },
  { word: "Surgeon", hint: "Scalpel" },
  { word: "Architect", hint: "Blueprint" },
  { word: "Lawyer", hint: "Courtroom" },
  { word: "Judge", hint: "Gavel" },
  { word: "Plumber", hint: "Pipe" },
  { word: "Electrician", hint: "Voltage" },
  { word: "Carpenter", hint: "Saw" },
  { word: "Mechanic", hint: "Wrench" },
  { word: "Baker", hint: "Oven" },
  { word: "Butcher", hint: "Cleaver" },
  { word: "Barber", hint: "Razor" },
  { word: "Hairdresser", hint: "Scissors" },
  { word: "Farmer", hint: "Tractor" },
  { word: "Gardener", hint: "Shovel" },
  { word: "Fisherman", hint: "Net" },
  { word: "Librarian", hint: "Silence" },
  { word: "Journalist", hint: "Interview" },
  { word: "Photographer", hint: "Camera" },
  { word: "Programmer", hint: "Code" },
  { word: "Graphic Designer", hint: "Pixels" },
  { word: "Accountant", hint: "Taxes" },
  { word: "Banker", hint: "Vault" },
  { word: "Real Estate Agent", hint: "Property" },
  { word: "Flight Attendant", hint: "Trolley" },
  { word: "Bus Driver", hint: "Steering" },
  { word: "Train Conductor", hint: "Ticket" },
  { word: "Taxi Driver", hint: "Taximeter" },
  { word: "Sailor", hint: "Anchor" },
  { word: "Soldier", hint: "Helmet" },
  { word: "Miner", hint: "Pickaxe" },
  { word: "Welder", hint: "Torch" },
  { word: "Blacksmith", hint: "Anvil" },
  { word: "Mason", hint: "Brick" },
  { word: "Painter", hint: "Roller" },
  { word: "Tailor", hint: "Needle" },
  { word: "Shoemaker", hint: "Sole" },
  { word: "Watchmaker", hint: "Gears" },
  { word: "Jeweler", hint: "Gemstone" },
  { word: "Florist", hint: "Bouquet" },
  { word: "Optometrist", hint: "Lenses" },
  { word: "Veterinarian", hint: "Paws" },
  { word: "Pharmacist", hint: "Prescription" },
  { word: "Scientist", hint: "Microscope" },
  { word: "Chemist", hint: "Flask" },
  { word: "Biologist", hint: "Organism" },
  { word: "Archaeologist", hint: "Fossils" },
  { word: "Astronomer", hint: "Telescope" },
  { word: "Meteorologist", hint: "Forecast" },
  { word: "Geologist", hint: "Minerals" },
  { word: "Historian", hint: "Archive" },
  { word: "Economist", hint: "Inflation" },
  { word: "Sociologist", hint: "Society" },
  { word: "Psychologist", hint: "Therapy" },
  { word: "Philosopher", hint: "Logic" },
  { word: "Musician", hint: "Instrument" },
  { word: "Singer", hint: "Microphone" },
  { word: "Actor", hint: "Stage" },
  { word: "Director", hint: "Clapperboard" },
  { word: "Dancer", hint: "Choreography" },
  { word: "Writer", hint: "Manuscript" },
  { word: "Poet", hint: "Rhyme" },
  { word: "Comedian", hint: "Punchline" },
  { word: "Magician", hint: "Wand" },
  { word: "Circus Acrobat", hint: "Trapeze" },
  { word: "Clown", hint: "Nose" },
  { word: "Athlete", hint: "Medal" },
  { word: "Coach", hint: "Whistle" },
  { word: "Referee", hint: "Yellowcard" },
  { word: "Lifeguard", hint: "Buoy" },
  { word: "Fitness Trainer", hint: "Dumbbell" },
  { word: "Barista", hint: "Espresso" },
  { word: "Bartender", hint: "Cocktail" },
  { word: "Waiter", hint: "Tray" },
  { word: "Sommelier", hint: "Wine" },
  { word: "Hotel Receptionist", hint: "Keycard" },
  { word: "Doorman", hint: "Umbrella" },
  { word: "Janitor", hint: "Mop" },
  { word: "Garbage Collector", hint: "Trashcan" },
  { word: "Courier", hint: "Package" },
  { word: "Postal Worker", hint: "Mailbox" },
  { word: "Security Guard", hint: "CCTV" },
  { word: "Bodyguard", hint: "Earpiece" },
  { word: "Detective", hint: "Fingerprint" },
  { word: "Spy", hint: "Disguise" },
  { word: "Translator", hint: "Subtitles" },
  { word: "Diplomat", hint: "Embassy" },
  { word: "Politician", hint: "Election" },
  { word: "Mayor", hint: "Cityhall" },
  { word: "Tour Guide", hint: "Megaphone" },
  { word: "Air Traffic Controller", hint: "Radar" },
  { word: "Locksmith", hint: "Keyhole" },
];

const videogamesWordpack = [
  { word: "Minecraft", hint: "Voxel" },
  { word: "Grand Theft Auto", hint: "Heist" },
  { word: "The Witcher 3", hint: "Gwent" },
  { word: "Skyrim", hint: "Dragonborn" },
  { word: "Cyberpunk 2077", hint: "Nightcity" },
  { word: "Elden Ring", hint: "Tarnished" },
  { word: "Dark Souls", hint: "Bonfire" },
  { word: "Bloodborne", hint: "Yharnam" },
  { word: "Sekiro", hint: "Deflect" },
  { word: "Red Dead Redemption", hint: "Outlaw" },
  { word: "God of War", hint: "Leviathan" },
  { word: "The Last of Us", hint: "Clicker" },
  { word: "Uncharted", hint: "Treasure" },
  { word: "Horizon Zero Dawn", hint: "Machines" },
  { word: "Ghost of Tsushima", hint: "Samurai" },
  { word: "Zelda: Breath of the Wild", hint: "Sheikah" },
  { word: "Super Mario Odyssey", hint: "Cappy" },
  { word: "Super Smash Bros", hint: "Roster" },
  { word: "Mario Kart", hint: "Banana" },
  { word: "Pokemon", hint: "Pokeball" },
  { word: "Animal Crossing", hint: "Bells" },
  { word: "Splatoon", hint: "Ink" },
  { word: "Fortnite", hint: "Battlebus" },
  { word: "Apex Legends", hint: "Champions" },
  { word: "Call of Duty: Warzone", hint: "Gulag" },
  { word: "Counter-Strike", hint: "Defusal" },
  { word: "Valorant", hint: "Spike" },
  { word: "Overwatch", hint: "Payload" },
  { word: "Team Fortress 2", hint: "Hats" },
  { word: "Rainbow Six Siege", hint: "Reinforce" },
  { word: "League of Legends", hint: "Nexus" },
  { word: "Dota 2", hint: "Ancient" },
  { word: "World of Warcraft", hint: "Raid" },
  { word: "Diablo", hint: "Sanctuary" },
  { word: "StarCraft", hint: "Zerg" },
  { word: "Hearthstone", hint: "Mana" },
  { word: "Terraria", hint: "Pixel" },
  { word: "Stardew Valley", hint: "Farming" },
  { word: "Subnautica", hint: "Seamoth" },
  { word: "Hollow Knight", hint: "Nail" },
  { word: "Dead Cells", hint: "Cells" },
  { word: "Hades", hint: "Underworld" },
  { word: "Celeste", hint: "Mountain" },
  { word: "Cuphead", hint: "Parry" },
  { word: "Undertale", hint: "Mercy" },
  { word: "Deltarune", hint: "Darkner" },
  { word: "Portal", hint: "Companion" },
  { word: "Half-Life", hint: "Crowbar" },
  { word: "Left 4 Dead", hint: "Tank" },
  { word: "BioShock", hint: "BigDaddy" },
  { word: "Fallout", hint: "Pip-Boy" },
  { word: "Doom", hint: "SuperShotgun" },
  { word: "Wolfenstein", hint: "Bunker" },
  { word: "Quake", hint: "Rocketjump" },
  { word: "Halo", hint: "Warthog" },
  { word: "Gears of War", hint: "Lancer" },
  { word: "Mass Effect", hint: "Normandy" },
  { word: "Dragon Age", hint: "Inquisition" },
  { word: "Assassin's Creed", hint: "Hiddenblade" },
  { word: "Far Cry", hint: "Outpost" },
  { word: "Watch Dogs", hint: "Hacking" },
  { word: "Tom Clancy's The Division", hint: "Manhattan" },
  { word: "Resident Evil", hint: "Umbrella" },
  { word: "Silent Hill", hint: "Fog" },
  { word: "Dead Space", hint: "PlasmaCutter" },
  { word: "Alan Wake", hint: "Flashlight" },
  { word: "Outlast", hint: "Camcorder" },
  { word: "Five Nights at Freddy's", hint: "Animatronics" },
  { word: "Phasmophobia", hint: "Spiritbox" },
  { word: "Lethal Company", hint: "Scrap" },
  { word: "Among Us", hint: "Vent" },
  { word: "Fall Guys", hint: "Crown" },
  { word: "Rocket League", hint: "Boost" },
  { word: "Trackmania", hint: "Checkpoints" },
  { word: "Need for Speed", hint: "Nitrous" },
  { word: "Forza Horizon", hint: "Festival" },
  { word: "Gran Turismo", hint: "Sim" },
  { word: "Euro Truck Simulator", hint: "Cargo" },
  { word: "Cities: Skylines", hint: "Zoning" },
  { word: "The Sims", hint: "Plumbob" },
  { word: "RollerCoaster Tycoon", hint: "Park" },
  { word: "Civilization", hint: "Turn-based" },
  { word: "Age of Empires", hint: "Villager" },
  { word: "Total War", hint: "Formations" },
  { word: "Crusader Kings", hint: "Dynasty" },
  { word: "Hearts of Iron", hint: "Frontline" },
  { word: "Sea of Thieves", hint: "Galleon" },
  { word: "Rust", hint: "Radiation" },
  { word: "Ark: Survival Evolved", hint: "Taming" },
  { word: "DayZ", hint: "Chernarus" },
  { word: "Escape from Tarkov", hint: "Extraction" },
  { word: "Payday", hint: "Drill" },
  { word: "Hitman", hint: "Garrote" },
  { word: "Metal Gear Solid", hint: "Cardboard" },
  { word: "Death Stranding", hint: "Delivery" },
  { word: "Devil May Cry", hint: "Combo" },
  { word: "Monster Hunter", hint: "Carving" },
  { word: "Street Fighter", hint: "Hadouken" },
  { word: "Mortal Kombat", hint: "Fatality" },
  { word: "Tekken", hint: "IronFist" },
];

let selectedWordpack = [];
let playerCount = 0;
let playerNames = [];
let impostorPlayer = null;
let selectedWord = null;
let currentPlayerIndex = 0;
const playerNamesStorageKey = "makeItMakeSensePlayerNames";
let savedPlayerNames = [];

try {
  const storedPlayerNames = localStorage.getItem(playerNamesStorageKey);
  savedPlayerNames = storedPlayerNames ? JSON.parse(storedPlayerNames) : [];
  if (!Array.isArray(savedPlayerNames)) savedPlayerNames = [];
} catch (error) {
  savedPlayerNames = [];
}

const playerCountContainer = document.getElementById("player-count-container");

characterButton.addEventListener("click", () => {
  selectedWordpack = charactersWordpack;

  const wordpackContainer = document.getElementById("wordpack-container");
  wordpackContainer.classList.add("hidden");
  playerCountContainer.classList.remove("hidden");
});

animalButton.addEventListener("click", () => {
  selectedWordpack = animalsWordpack;

  const wordpackContainer = document.getElementById("wordpack-container");
  wordpackContainer.classList.add("hidden");
  playerCountContainer.classList.remove("hidden");
});

moviesButton.addEventListener("click", () => {
  selectedWordpack = moviesAndSeriesWordpack;

  const wordpackContainer = document.getElementById("wordpack-container");
  wordpackContainer.classList.add("hidden");
  playerCountContainer.classList.remove("hidden");
});

jobsButton.addEventListener("click", () => {
  selectedWordpack = jobsWordpack;

  const wordpackContainer = document.getElementById("wordpack-container");
  wordpackContainer.classList.add("hidden");
  playerCountContainer.classList.remove("hidden");
});

videogamesButton.addEventListener("click", () => {
  selectedWordpack = videogamesWordpack;

  const wordpackContainer = document.getElementById("wordpack-container");
  wordpackContainer.classList.add("hidden");
  playerCountContainer.classList.remove("hidden");
});

const startButton = document.getElementById("player-count-button");
const playerCountInput = document.getElementById("player-count-input");
const playerNamesContainer = document.getElementById("player-names-container");
const playerNamesInputsDiv = document.getElementById("player-names-inputs");
const startGameButton = document.getElementById("start-game-button");

if (savedPlayerNames.length >= 1 && savedPlayerNames.length <= 10) {
  playerCountInput.value = savedPlayerNames.length;
}

startButton.addEventListener("click", () => {
  playerCountContainer.classList.add("hidden");
  playerCount = parseInt(playerCountInput.value);

  // Create input fields for each player
  playerNamesInputsDiv.innerHTML = "";
  for (let i = 1; i <= playerCount; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.id = `player-${i}-name`;
    input.placeholder = `Player ${i} name`;
    input.value = savedPlayerNames[i - 1] || "";
    playerNamesInputsDiv.appendChild(input);
  }

  playerNamesContainer.classList.remove("hidden");
});

const gameContainer = document.getElementById("game-container");

startGameButton.addEventListener("click", () => {
  playerNames = [];
  for (let i = 1; i <= playerCount; i++) {
    const name =
      document.getElementById(`player-${i}-name`).value || `Player ${i}`;
    playerNames.push(name);
  }
  savedPlayerNames = [...playerNames];
  localStorage.setItem(playerNamesStorageKey, JSON.stringify(savedPlayerNames));
  console.log("Players:", playerNames);

  // Select random impostor
  impostorPlayer = playerNames[Math.floor(Math.random() * playerNames.length)];
  console.log(`Impostor Player: ${impostorPlayer}`);

  playerNamesContainer.classList.add("hidden");
  // Game starts here

  // RANDOM WORD SELECT
  selectedWord =
    selectedWordpack[Math.floor(Math.random() * selectedWordpack.length)];

  console.log(
    `Selected Word: ${selectedWord.word}, Hint: ${selectedWord.hint}`,
  );

  gameContainer.classList.remove("hidden");

  currentPlayerIndex = 0;
  const playerNameDisplay = document.getElementById("current-player-name");
  playerNameDisplay.textContent = playerNames[currentPlayerIndex];
});

const revealscreen = document.getElementById("reveal-screen-container");
const revealWordButton = document.getElementById("reveal-button");
const revealContinueButton = document.getElementById("reveal-continue-button");

function ImpostorCheck() {
  const titleReveal = document.getElementById("reveal-title");
  const wordReveal = document.getElementById("reveal-word");

  if (playerNames[currentPlayerIndex] === impostorPlayer) {
    // Handle impostor reveal logic
    titleReveal.textContent = "Impostor!";
    wordReveal.textContent = `Hint: ${selectedWord.hint}`;
  } else {
    // Handle regular player reveal logic
    titleReveal.textContent = "Your Word:";
    wordReveal.textContent = selectedWord.word;
  }
}

revealWordButton.addEventListener("click", () => {
  revealscreen.classList.remove("hidden");
  document.body.classList.add("reveal-active");

  ImpostorCheck();
});

const nextPlayerButton = document.getElementById("next-player-button");

revealContinueButton.addEventListener("click", () => {
  revealscreen.classList.add("hidden");
  document.body.classList.remove("reveal-active");
  revealWordButton.classList.add("hidden");
  nextPlayerButton.classList.remove("hidden");
});

function GameStart() {
  gameContainer.classList.add("hidden");

  // Select random starting player
  const startingPlayer =
    playerNames[Math.floor(Math.random() * playerNames.length)];
  document.getElementById("starting-player").textContent =
    `Starting Player: ${startingPlayer}`;
  console.log(`Starting Player: ${startingPlayer}`);
  document
    .getElementById("starting-player-container")
    .classList.remove("hidden");
}

nextPlayerButton.addEventListener("click", () => {
  if (currentPlayerIndex < playerNames.length - 1) {
    currentPlayerIndex++;
    const playerNameDisplay = document.getElementById("current-player-name");
    playerNameDisplay.textContent = playerNames[currentPlayerIndex];

    // Hide next player button and show reveal button
    nextPlayerButton.classList.add("hidden");
    revealWordButton.classList.remove("hidden");
  } else {
    GameStart();
  }
});

// Play again button
const playAgainButton = document.getElementById("play-again-button");
playAgainButton.addEventListener("click", () => {
  document.getElementById("starting-player-container").classList.add("hidden");

  // Select new impostor and word
  impostorPlayer = playerNames[Math.floor(Math.random() * playerNames.length)];
  selectedWord =
    selectedWordpack[Math.floor(Math.random() * selectedWordpack.length)];

  console.log(`Impostor Player: ${impostorPlayer}`);
  console.log(
    `Selected Word: ${selectedWord.word}, Hint: ${selectedWord.hint}`,
  );

  // Reset game state
  currentPlayerIndex = 0;
  const playerNameDisplay = document.getElementById("current-player-name");
  playerNameDisplay.textContent = playerNames[currentPlayerIndex];

  // Show game container and reset buttons
  gameContainer.classList.remove("hidden");
  revealWordButton.classList.remove("hidden");
  nextPlayerButton.classList.add("hidden");
});
