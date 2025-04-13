import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

DEFAULT_CONTEXT = (
    "The patient had liposuction surgery 7 days ago and is currently recovering at home. "
    "They are wearing a compression garment and experiencing mild soreness and occasional swelling."
)

def get_gemini_response(prompt: str) -> str:
    try:
        model = genai.GenerativeModel(model_name="gemini-pro")
        response = model.generate_content(
            f"Patient context: {full_context}\n"
            f"You are a medical assistant. Respond in 5 lines or less. Be safe, clear, and concise.\n\n{prompt}"
        )
        return response.text.strip()
    except Exception as e:
        return f"[Medication Agent Gemini Error] {str(e)}"
