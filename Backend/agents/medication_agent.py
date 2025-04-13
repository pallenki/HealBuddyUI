import os
import google.generativeai as genai

# Load your Gemini API key from environment
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def get_gemini_response(prompt: str) -> str:
    try:
        model = genai.GenerativeModel(model_name="gemini-pro")
        response = model.generate_content(
            f"You are a medical assistant. Respond in 5 lines or less. Be safe, clear, and concise.\n\n{prompt}"
        )
        return response.text
    except Exception as e:
        return f"[Medication Agent Gemini Error] {str(e)}"
