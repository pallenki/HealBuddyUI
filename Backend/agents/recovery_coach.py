from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Default context for all incoming questions
DEFAULT_CONTEXT = (
    "The patient had liposuction surgery 7 days ago and is currently recovering at home. "
    "They are wearing a compression garment and experiencing mild soreness and occasional swelling."
)

def get_response(message: str, context: str = "") -> str:
    full_context = context if context else DEFAULT_CONTEXT

    system_prompt = (
        "You are a friendly and motivational recovery coach helping a patient feel encouraged and supported after liposuction surgery. "
        "Provide short, supportive tips about self-care, mindset, and light activity after surgery. "
        "Do not give medical or clinical instructions — leave that to their doctor.\n\n"
        "Respond in a clear, warm tone using **no more than 5 short bullet points or lines**. "
        "Avoid paragraphs, disclaimers, or complex medical info.\n\n"
        f"Here is the patient context: {full_context}"
    )


    try:
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": message}
            ],
            temperature=0.7,
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"[Recovery Coach GPT Error] {e}"
