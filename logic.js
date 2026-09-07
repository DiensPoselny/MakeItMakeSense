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
