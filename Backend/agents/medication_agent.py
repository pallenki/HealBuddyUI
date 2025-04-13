import os
import google.generativeai as genai

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def get_gemini_response(prompt: str) -> str:
    try:
        model = genai.GenerativeModel("gemini-1.5-pro")
        response = model.generate_content(f"You are a medical assistant. Answer medication-related questions safely.\n\n{prompt}")
        return response.text
    except Exception as e:
        return f"[Medication Agent Gemini Error] {str(e)}"
