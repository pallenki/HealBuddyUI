import os
from openai import OpenAI

# Initialize the OpenAI client with API key
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def get_response(user_input: str, context: str) -> str:
    try:
        chat_completion = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "You are a clinical expert providing accurate, safe, and factual post-operative medical guidance. Be precise and cautious with your advice."
                },
                {
                    "role": "user",
                    "content": f"{context}\n\n{user_input}"
                }
            ]
        )
        return chat_completion.choices[0].message.content
    except Exception as e:
        return f"[Clinical Expert GPT Error] {str(e)}"
