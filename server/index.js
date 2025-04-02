const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    });

// Schemas
const FirstAidSchema = new mongoose.Schema({
    title: String,
    description: String,
    steps: [String],
    imageUrl: String,
});
const FirstAid = mongoose.model("FirstAid", FirstAidSchema);

const SosSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    name: String,
    phone: String,
    email: String,
    bloodGroup: String,
    medicalHistory: String,
    emergencyContacts: [{ name: String, phone: String }]
});
const SOS = mongoose.model("SOS", SosSchema);

// First Aid Endpoint
app.get("/api/first-aid", async (req, res) => {
    try {
        const data = await FirstAid.find();
        res.json(data);
    } catch (error) {
        console.error("Error fetching first aid data:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// SOS Endpoints
app.post("/api/sos", async (req, res) => {
    const { userId, name, phone, email, bloodGroup, medicalHistory, emergencyContacts } = req.body;
    if (!userId) return res.status(400).json({ error: "User ID is required" });

    try {
        let sosData = await SOS.findOne({ userId });
        if (sosData) {
            sosData.name = name;
            sosData.phone = phone;
            sosData.email = email;
            sosData.bloodGroup = bloodGroup;
            sosData.medicalHistory = medicalHistory;
            sosData.emergencyContacts = emergencyContacts;
            await sosData.save();
            return res.json({ message: "Emergency info updated!" });
        } else {
            const newSos = new SOS({ userId, name, phone, email, bloodGroup, medicalHistory, emergencyContacts });
            await newSos.save();
            return res.json({ message: "Emergency info saved!" });
        }
    } catch (error) {
        console.error("Error saving SOS data:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/api/sos/:userId", async (req, res) => {
    try {
        const sosData = await SOS.findOne({ userId: req.params.userId });
        if (!sosData) return res.status(404).json({ message: "No emergency contacts found" });
        res.json(sosData);
    } catch (err) {
        console.error("Error fetching SOS data:", err);
        res.status(500).json({ error: err.message });
    }
});

app.post("/api/sos/alert", async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) return res.status(400).json({ error: "User ID is required" });

        const sosData = await SOS.findOne({ userId });
        if (!sosData) return res.status(404).json({ message: "No contacts found" });

        console.log(`🚨 ALERT! ${sosData.name} triggered SOS! Notifying contacts...`);
        res.json({ message: "SOS Alert Triggered!" });
    } catch (error) {
        console.error("Error processing SOS alert:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// Medical Advisor Chat
const SYSTEM_PROMPT = `
You are MedAI, a professional medical advisor AI.
Keep responses short and concise, about 50 words.
Provide accurate medical advice for emergencies or general queries.
Prioritize safety, recommend professional help when needed, avoid diagnoses.
Offer step-by-step first aid, explain symptoms, suggest emergency care.
Redirect non-medical queries to professionals.
`;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

app.post("/api/chat", async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });
    if (!GEMINI_API_KEY) return res.status(500).json({ error: "Gemini API key is not configured" });

    try {
        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [{
                    role: "user",
                    parts: [{ text: `${SYSTEM_PROMPT}\n\n${message}` }],
                }],
            },
            { headers: { "Content-Type": "application/json" } }
        );

        const botResponseText = response.data.candidates[0].content.parts[0].text;
        res.json({ reply: botResponseText });
    } catch (error) {
        console.error("Error fetching response from Gemini API:", error.message);
        res.status(500).json({ error: "Sorry, I couldn't process your request. Please try again." });
    }
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));