import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Default context for liposuction patient
DEFAULT_CONTEXT = (
    "The patient had liposuction surgery 7 days ago and is currently recovering at home. "
    "They are wearing a compression garment and experiencing mild soreness and occasional swelling."
)

def get_gemini_response(message: str, context: str = "") -> str:
    full_context = context if context else DEFAULT_CONTEXT

    try:
        model = genai.GenerativeModel("gemini-pro")
        prompt = (
        f"You are a calm, safety-focused symptom checker helping a patient recovering from liposuction surgery. "
        f"Do not diagnose. Instead, provide up to 5 short bullet points or lines of clear, supportive advice.\n\n"
        f"Patient context: {full_context}\n"
        f"User message: {message}\n\n"
        f"Instructions:\n"
        f"- Respond using ONLY 5 bullet points or fewer.\n"
        f"- Do NOT write any additional paragraphs, disclaimers, or follow-up sections.\n"
        f"- Focus on plain language, helpful actions, or when to call a doctor.\n"
        f"- If the issue is serious, say 'Please contact your doctor.' as one bullet point.\n"
        f"- Keep your tone calm and non-alarming."
        )


        response = model.generate_content(prompt)
        return response.text.strip()

    except Exception as e:
        return f"[Gemini Error] {e}"
