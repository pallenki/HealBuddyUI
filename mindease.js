async function sendMessage() {
  const message = document.getElementById("userInput").value;
  const context = document.getElementById("contextInput").value;
  const responseBox = document.getElementById("responseArea");
  responseBox.innerText = "Thinking... 🧠";

  try {
    const response = await fetch("https://healbuddy.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message, context: context })
    });

    const data = await response.json();
    responseBox.innerText = data.reply || "❌ No reply received.";
  } catch (err) {
    responseBox.innerText = "⚠️ Error: " + err.message;
  }
}
