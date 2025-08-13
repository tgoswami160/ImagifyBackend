# ⚙️ Imagify Backend

This is the **backend** for Imagify — an AI-powered text-to-image generation application.  
It handles API requests from the frontend and interacts with an AI model to generate images from text prompts.

---

## 🚀 Features
- REST API for text-to-image generation
- Secure API key handling for AI model access
- JSON-based request and response
- Error handling and validation
- CORS enabled for frontend communication

---

## 📂 Project Structure
```
backend/
│── routes/         # API routes
│── controllers/    # Request handlers
│── utils/          # Helper functions
│── config/         # API keys and environment variables
│── app.js          # Express server setup
```

---

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **AI API:** (e.g., OpenAI, Stability AI, etc.)
- **Deployment:** Render / Vercel Functions

---

## ⚙️ Installation
```bash
git clone https://github.com/tgoswami160/ImagifyBackend.git
npm install
npm start
```
Server runs on `http://localhost:4000`.

---

## 🔗 API Endpoint
```
POST /api/result
Content-Type: application/json
Body: { "prompt": "Your image description here" }
```



