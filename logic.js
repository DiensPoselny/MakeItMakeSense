const playButton = document.querySelector("button");

playButton.addEventListener("click", () => {
  const titleContainer = document.getElementById("p-title-container");
  titleContainer.classList.add("hidden");
  playButton.classList.add("hidden");
});
