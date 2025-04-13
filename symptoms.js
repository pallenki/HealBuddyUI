async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;
  
    const chatWindow = document.getElementById("chat-window");
  
    // Show user message
    chatWindow.innerHTML += `<div class="user-msg">${message}</div>`;
    input.value = "";
  
    try {
      // Send to backend (replace with your friend’s actual API endpoint)
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });
  
      const data = await response.json();
  
      // Show bot response
      chatWindow.innerHTML += `<div class="bot-msg">${data.response}</div>`;
      chatWindow.scrollTop = chatWindow.scrollHeight;
    } catch (error) {
      chatWindow.innerHTML += `<div class="bot-msg">⚠️ Could not connect to the server.</div>`;
    }
  }
  