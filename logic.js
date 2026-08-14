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
  { word: "Sonic", hint: "Speed" },
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
];

let selectedWordpack = [];
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

let playerCount = 0;
let playerNames = [];
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

startGameButton.addEventListener("click", () => {
  playerNames = [];
  for (let i = 1; i <= playerCount; i++) {
    const name =
      document.getElementById(`player-${i}-name`).value || `Player ${i}`;
    playerNames.push(name);
  }
  console.log("Players:", playerNames);

  // Select random impostor
  let impostorPlayer =
    playerNames[Math.floor(Math.random() * playerNames.length)];
  console.log(`Impostor Player: ${impostorPlayer}`);

  playerNamesContainer.classList.add("hidden");
  // Game starts here

  // RANDOM WORD SELECT
  let selectedWord =
    selectedWordpack[Math.floor(Math.random() * selectedWordpack.length)];

  console.log(
    `Selected Word: ${selectedWord.word}, Hint: ${selectedWord.hint}`,
  );

  const gameContainer = document.getElementById("game-container");
  gameContainer.classList.remove("hidden");

  const playerNameDisplay = document.getElementById("current-player-name");
  playerNameDisplay.textContent = playerNames[0];
});
