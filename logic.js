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

let selectedWordpack = [];
let playerCount = 0;
let playerNames = [];
let impostorPlayer = null;
let selectedWord = null;
let currentPlayerIndex = 0;
let timerInterval = null;
let timeRemaining = 240; // 4 minutes in seconds

const playerCountContainer = document.getElementById("player-count-container");

// Format time helper function
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

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

const startButton = document.getElementById("player-count-button");
const playerNamesContainer = document.getElementById("player-names-container");
const playerNamesInputsDiv = document.getElementById("player-names-inputs");
const startGameButton = document.getElementById("start-game-button");

startButton.addEventListener("click", () => {
  playerCountContainer.classList.add("hidden");
  playerCount = parseInt(document.getElementById("player-count-input").value);

  // Create input fields for each player
  playerNamesInputsDiv.innerHTML = "";
  for (let i = 1; i <= playerCount; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.id = `player-${i}-name`;
    input.placeholder = `Player ${i} name`;
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
  document.getElementById("starting-player").classList.remove("hidden");

  // Start 4-minute timer
  timeRemaining = 240; // 4 minutes = 240 seconds
  const timerDisplay = document.getElementById("game-timer");
  timerDisplay.classList.remove("hidden");
  timerDisplay.textContent = formatTime(timeRemaining);

  // Clear existing timer if any
  if (timerInterval) clearInterval(timerInterval);

  // Start new timer
  timerInterval = setInterval(() => {
    timeRemaining--;
    timerDisplay.textContent = formatTime(timeRemaining);

    // Stop timer when it reaches 0
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "0:00";
      document.getElementById("starting-player").classList.add("hidden");
      timerDisplay.classList.add("hidden");
      const votingContainer = document.getElementById("voting-container");
      votingContainer.classList.remove("hidden");
    }
  }, 1000);
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
  // Hide voting container
  document.getElementById("voting-container").classList.add("hidden");

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
