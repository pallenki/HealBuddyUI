import sys
import os
sys.path.append(os.path.dirname(__file__))

from flask import Flask, request, jsonify
from flask_cors import CORS

# Load API keys and config from .env
from dotenv import load_dotenv
load_dotenv()

from router import route_to_agent  # Imports all your Gemini + GPT agent routing logic


# Create Flask app and enable CORS
app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json(force=True)
    user_message = data.get("message")
    context = data.get("context", "")

    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    try:
        reply, model = route_to_agent(user_message, context)
        print(f"[Router] '{user_message}' → {model}")
        return jsonify({"reply": reply, "model": model})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/", methods=["GET"])
def home():
    return "<h3>🧠 Multi-Agent AI Backend is Running</h3>", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)), debug=True)
