# 🧠 HealBuddy – Your Post-Surgery Recovery Companion

**HealBuddy** is a multi-agent AI web app designed to support patients during post-surgical recovery. It combines empathetic UI with smart assistants powered by **Gemini** and **GPT-4**, providing personalized guidance, symptom checking, and calming support — all from a browser.

<img src="./healbuddy.png" alt="HealBuddy Logo" width="300"/>

---

## 🚀 Features

- 🤖 **Multi-Agent AI System**  
  - **Gemini**: Symptom checker  
  - **GPT-4**: Mind Ease

- 🐱 **Calm Companion Mode**  
  Interactive cat that purrs, smiles, and reacts when clicked or fed — helping patients feel calm and comforted.

- 🧠 **Context-Aware Responses**  
  All agents use a patient profile to personalize replies (e.g. 7 days post-surgery), limiting hallucination and improving clarity.

- 🗂️ **MongoDB Patient Profile**  
  A simple profile form stores basic recovery context in MongoDB and injects it into LLM prompts.

---

## 🏗️ Project Structure

```
ProjectHealBuddy/
├── Backend/                ← Flask app with GPT & Gemini agents
├── mindease.html           ← Emotional support chat UI
├── symptoms.html           ← Symptom checker UI
├── home.html               ← Landing page with patient form
├── chatbots.html           ← All-in-one chat view
├── cat/                    ← Calm Companion (interactive cat)
├── *.css / *.js            ← Page-specific styles and logic
└── *.png / *.gif / *.wav   ← Visual and audio assets
```

---

## 💬 Sample Use Cases

> 🧠 **“I feel itchy after surgery. Is that normal?”**  
> ✅ Symptom Checker (Gemini) replies with 3–5 supportive suggestions.

> 💪 **“I'm frustrated with my healing.”**  
> ✅ GPT Coach responds with encouraging bullet points.

> 🧘 **“What should I focus on today?”**  
> ✅ Recovery tips and motivation in a friendly tone.

> 🐾 **Tap the cat** → it purrs and smiles  
> ✅ Instant calm and comfort.

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Python (Flask), OpenAI GPT-4, Google Gemini Pro  
- **Database**: MongoDB Atlas  
- **Deployment**: Render (backend), GoDaddy (frontend)

---

## ✅ Live Demo URLs

```
Backend API:
  https://healbuddy.onrender.com/create-profile
  https://healbuddy.onrender.com/chat

Frontend Pages:
  https://<your-frontend-host>/home.html         ← Create patient profile
  https://<your-frontend-host>/symptoms.html     ← Symptom Checker (Gemini)
  https://<your-frontend-host>/mindease.html      ← MindEase (GPT support)
  https://<your-frontend-host>/cat/index.html     ← Calm Companion
```

---

## 👥 Team HealBuddy

- **Pavan** – AI Agents and Ops  
- **Harshitha** – UI & UX  
- **Nithin** – Backend, Integration

---

## 📸 Screenshots

> Add project screenshots here for visual appeal:
```
![Home Page](./screenshots/home.png)
![Chat UI](./screenshots/chat.png)
![Calm Companion](./screenshots/cat.png)
```

---

## 🏁 Judges, Try This:

- Create a profile ➡️ Ask symptoms ➡️ Get personalized response  
- Visit the Calm Companion for fun distraction  
- Experience the emotional support tone differences via Recovery Coach & MindEase

---

🔗 Designed with empathy. Built for comfort. Demoed with love.  
**#HackathonReady 🧠💬🐾**
