const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const FirstAidSchema = new mongoose.Schema({
  title: String,
  description: String,
  steps: [String],
  imageUrl: String,
});

const FirstAid = mongoose.model("FirstAid", FirstAidSchema);

// API Routes
app.get("/api/first-aid", async (req, res) => {
  const data = await FirstAid.find();
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
