const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Improved MongoDB connection with better error handling
mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
        process.exit(1); // Exit if cannot connect to database
    });

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
    emergencyContacts: [{ name: String, phone: String }] // Array for multiple contacts
});
const SOS = mongoose.model("SOS", SosSchema);

app.get("/api/first-aid", async (req, res) => {
    try {
        const data = await FirstAid.find();
        res.json(data);
    } catch (error) {
        console.error("Error fetching first aid data:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/api/sos", async (req, res) => {
    const { userId, name, phone, email, bloodGroup, medicalHistory, emergencyContacts } = req.body;

    if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
    }

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
        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const sosData = await SOS.findOne({ userId });
        if (!sosData) return res.status(404).json({ message: "No contacts found" });

        console.log(`🚨 ALERT! ${sosData.name} triggered SOS! Notifying contacts...`);
        res.json({ message: "SOS Alert Triggered!" });
    } catch (error) {
        console.error("Error processing SOS alert:", error);
        res.status(500).json({ error: "Server error" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
