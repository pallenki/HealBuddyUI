# router.py

from agents.recovery_coach import get_response as coach_response
from agents.clinical_expert import get_response as expert_response
from agents.medication_agent import get_gemini_response as med_response
from agents.symptom_checker import get_gemini_response as symptom_response

def route_to_agent(message, context):
    lowered = message.lower()

    # Medication-related questions → Gemini
    if any(word in lowered for word in ["med", "dose", "pill", "tablet", "ibuprofen", "paracetamol", "take my"]):
        print("[Router] Routing to Medication Agent (Gemini)")
        return med_response(message), "Gemini (Medication Agent)"

    # Symptom checking → Gemini
    elif any(word in lowered for word in ["pain", "feel", "symptom", "dizzy", "nausea", "fever", "vomit", "sweat"]):
        print("[Router] Routing to Symptom Checker (Gemini)")
        return symptom_response(message), "Gemini (Symptom Checker)"

    # Recovery motivation or general "can I"/"should I" → GPT Recovery Coach
    elif any(word in lowered for word in ["can i", "should i", "am i allowed", "when can", "is it okay", "do i need to"]):
        print("[Router] Routing to Recovery Coach (GPT-4)")
        return coach_response(message, context), "GPT-4 (Recovery Coach)"

    # Everything else → GPT Clinical Expert
    else:
        print("[Router] Routing to Clinical Expert (GPT-4)")
        return expert_response(message, context), "GPT-4 (Clinical Expert)"
