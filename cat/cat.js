const cat = document.getElementById("catAvatar");
const catText = document.getElementById("catText");
const purrSound = document.getElementById("purrSound");
const eatSound = document.getElementById("eatSound");

const actions = ["Purr me?", "Feed me?"];

function randomAction() {
  const choice = actions[Math.floor(Math.random() * actions.length)];
  catText.textContent = choice;
  cat.src = "cat.gif";
}

// Handle click based on request
cat.addEventListener("click", () => {
  if (catText.textContent.includes("Purr")) {
    purrSound.play();
    cat.src = "catpurr.gif";
    catText.textContent = "Prrrrrr... 😽";
  } else if (catText.textContent.includes("Feed")) {
    eatSound.play();
    cat.src = "cateat.gif";
    catText.textContent = "Yum! 🐟";
  }

  // Reset back to idle after 3 seconds
  setTimeout(() => {
    randomAction();
  }, 3000);
});

// Change mood every 10 seconds
setInterval(randomAction, 10000);

// Start the first interaction
randomAction();
