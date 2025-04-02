// backend/server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse JSON request bodies

// System prompt for the medical advisor role
const SYSTEM_PROMPT = `
You are MedAI, a professional medical advisor AI.
keep response short and concise. about 50-words
 Your role is to provide accurate, clear, and concise medical advice to users in emergency situations or for general health queries.
  Always prioritize user safety, recommend seeking professional medical help when necessary, and avoid giving definitive diagnoses.
   Provide step-by-step guidance for first aid, explain symptoms, and suggest when to seek emergency care. 
   If the user asks about something outside your scope, politely redirect them to a healthcare professional. 
   Do not share personal opinions or non-medical advice.
`;

// Gemini API configuration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

// API endpoint to handle chat messages
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: "Gemini API key is not configured" });
  }

  try {
    // Make request to Gemini API
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: `${SYSTEM_PROMPT}\n\n${message}` }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Extract the response text from Gemini API
    const botResponseText = response.data.candidates[0].content.parts[0].text;
    res.json({ reply: botResponseText });
  } catch (error) {
    console.error("Error fetching response from Gemini API:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
    res.status(500).json({
      error: "Sorry, I couldn't process your request. Please try again or check your internet connection.",
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});