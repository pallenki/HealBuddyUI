function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
  
    localStorage.setItem("username", username);
    window.location.href = "splash.html";
  }
  
  // Auto-hide emergency banner
  window.onload = () => {
    setTimeout(() => {
      const banner = document.getElementById("emergency-banner");
      if (banner) banner.style.display = "none";
    }, 5000);
  };
  