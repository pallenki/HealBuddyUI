async function sendMindEase() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;
  
    const chatWindow = document.getElementById("chat-window");
  
    // Show user message
    chatWindow.innerHTML += `<div class="user-msg">${message}</div>`;
    input.value = "";
  
    try {
      const response = await fetch("http://localhost:8000/mindease", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });
  
      const data = await response.json();
      chatWindow.innerHTML += `<div class="bot-msg">${data.response}</div>`;
      chatWindow.scrollTop = chatWindow.scrollHeight;
    } catch (error) {
      chatWindow.innerHTML += `<div class="bot-msg">🧘 Sorry, something went wrong. Try again soon.</div>`;
    }
  }
  