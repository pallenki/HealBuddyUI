let catState = 0;

function feedCat() {
  const catImg = document.getElementById("floating-cat");
  const caption = document.getElementById("cat-caption");

  // Load audio files
  const eatSound = new Audio("eat.wav");
  const purrSound = new Audio("purr.wav");

  if (catState === 0) {
    catImg.src = "cateat.gif";
    caption.textContent = "Yum!";
    eatSound.play();
    catState = 1;

    setTimeout(() => {
      catImg.src = "catpurr.gif";
      caption.textContent = "Prrrr... Thanks for feeding me! 😻";
      purrSound.play();
      catState = 2;
    }, 3500);
  }
}
