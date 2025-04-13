window.onload = function () {
    const name = localStorage.getItem("username") || "Guest";
    const greetingBox = document.getElementById("greeting");
  
    greetingBox.innerHTML = `
      <h2 class="welcome-text">Welcome, <span>${name.toLowerCase()}</span> <span class="wave">👋</span></h2>
      <p class="subtext">This is your post-op companion – <strong>HEALBUDDY</strong>.</p>
    `;
  };
  
  function showHug() {
    const popup = document.getElementById("hug-popup");
    const gif = document.getElementById("rickroll-gif");
  
    gif.src = `https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif?t=${new Date().getTime()}`;
    popup.style.display = "flex";
  }
  
  function closeHug() {
    document.getElementById("hug-popup").style.display = "none";
  }
  
  function showMedicationChart() {
    document.getElementById("medication-popup").style.display = "flex";
  }
  
  function closeMedicationChart() {
    document.getElementById("medication-popup").style.display = "none";
  }
  function showDietChart() {
    document.getElementById("diet-popup").style.display = "flex";
  }
  
  function closeDietChart() {
    document.getElementById("diet-popup").style.display = "none";
  }
  
  function showMedicationChart() {
    document.getElementById("medication-popup").style.display = "flex";
  }
  
  function closeMedicationChart() {
    document.getElementById("medication-popup").style.display = "none";
  }
  
  function showHug() {
    const popup = document.getElementById("hug-popup");
    const gif = document.getElementById("rickroll-gif");
    gif.src = `https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif?t=${new Date().getTime()}`;
    popup.style.display = "flex";
  }
  
  function closeHug() {
    document.getElementById("hug-popup").style.display = "none";
  }
  
  window.onload = function () {
    const name = localStorage.getItem("username") || "Guest";
    const greetingBox = document.getElementById("greeting");
  
    greetingBox.innerHTML = `
      <h2 class="welcome-text">Welcome, <span>${name.toLowerCase()}</span> <span class="wave">👋</span></h2>
      <p class="subtext">This is your post-op companion – <strong>HEALBUDDY</strong>.</p>
    `;
  };
  function showDietChart() {
    document.getElementById("diet-popup").style.display = "flex";
  }
  function closeDietChart() {
    document.getElementById("diet-popup").style.display = "none";
  }
  
  function showMedicationChart() {
    document.getElementById("medication-popup").style.display = "flex";
  }
  function closeMedicationChart() {
    document.getElementById("medication-popup").style.display = "none";
  }
  
  function showHug() {
    const popup = document.getElementById("hug-popup");
    const gif = document.getElementById("rickroll-gif");
    gif.src = `https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif?t=${new Date().getTime()}`;
    popup.style.display = "flex";
  }
  function closeHug() {
    document.getElementById("hug-popup").style.display = "none";
  }
  
  function showSupportCircle() {
    document.getElementById("support-popup").style.display = "flex";
  }
  function closeSupportCircle() {
    document.getElementById("support-popup").style.display = "none";
  }
  
  window.onload = function () {
    const name = localStorage.getItem("username") || "Guest";
    const greetingBox = document.getElementById("greeting");
    greetingBox.innerHTML = `
      <h2 class="welcome-text">Welcome, <span>${name.toLowerCase()}</span> <span class="wave">👋</span></h2>
      <p class="subtext">This is your post-op companion – <strong>HEALBUDDY</strong>.</p>
    `;
  };
    