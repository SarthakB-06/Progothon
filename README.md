# MEDAI - AI Powered Instant Medical Guide

###  🏥 Revolutionizing Emergency Care with AI
**MEDAI** is an innovative, AI-driven web application designed to provide **instant first-aid guidance** and assist users in medical emergencies. Whether it's a minor injury or a critical situation, **MEDAI** ensures timely, reliable, and life-saving assistance through AI-powered responses, and real-time hospital suggestions.

**Empowering Individuals & Communities with Knowledge That Saves Lives!**  

---

## 🌟 Why MEDAI Matters – A Life-Saving Innovation 

### 🚨 **India’s Healthcare Crisis: Lack of Medical Knowledge is Deadly**  
India faces **one of the highest preventable death rates in the world** due to **limited first-aid knowledge, delayed medical response, and lack of accessibility to emergency care**.  

- 🏥 **70% of Indians lack basic first-aid training**  
- ⏳ **Ambulance response times often exceed critical limits**  
- 💔 **Thousands die each year from treatable emergencies** (heart attacks, choking, accidents)  
- 🚑 **Rural areas suffer from poor healthcare access**  

### 🩺 **MEDAI: A Step Towards Saving Lives**  
With India's **massive population and uneven healthcare access**, **MEDAI empowers people with life-saving first-aid knowledge at their fingertips**.  

✅ **Bridging the gap** between emergencies and medical response  
✅ **Making first-aid accessible** to rural & urban communities  
✅ **Equipping people with knowledge** to handle medical crises effectively  
✅ **Saving lives when every second counts**  

🌟 **MEDAI ensures that medical knowledge is no longer a privilege but a right for every Indian citizen.**  

---
## 🌟 Features

🤖 **AI Chatbot for Medical Emergencies** – Instantly provides first-aid recommendations using NLP.  
✅ **AI-Powered First Aid Guide** – Step-by-step instructions for handling medical situations.  
🚨 **SOS Emergency Alerts** – Instantly notifies emergency contacts via Twilio API.  
🗺️ **Hospital Locator** – Suggests nearby hospitals using Google Maps API.  
📁 **Medical Data Storage** – Securely saves medical data and emergency contacts for quick access.

---
## 🛠️ Technologies Used  

MEDAI is built using cutting-edge technologies to ensure **speed, reliability, and accessibility** in medical emergencies.  

### **Frontend (Web & Mobile)**  
- ⚛️ **React.js** – For a dynamic and responsive user experience  
- 🌍 **Google Maps API** – For hospital location services  

### **Backend & Server**  
- 🚀 **Node.js** – For a scalable and efficient backend  
- 💾 **MongoDB** – Secure cloud database for storing first-aid guide data

### **AI & APIs**  
- 🧠 **Gemeni API** – AI-powered chatbot for medical assistance  
- 📞 **Twilio API** – Sends emergency SOS alerts
- 🔐 **Auth0** – Secure authentication and user management

### **DevOps & Deployment**  
- ☁️ **Vercel** – Frontend hosting  
- 🛠️ **Render** – Backend deployment  
- 🔧 **Git & GitHub** – Version control and collaboration  

---

##  🚀 Getting Started
### **Prerequisites**
Ensure you have the following installed:
- ✅ **Node.js** (v16+)
- ✅ **MongoDB Atlas** (or local MongoDB setup)
- ✅ **Git**
- ✅ **npm** 

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/MEDAI.git
cd MEDAI
```
### **2️⃣ Install Dependencies**
**Frontend Setup:**
```bash
cd client
npm install
```
**Backend Setup:**
```bash
cd server
npm install
```
### **3️⃣ Set Up Environment Variables**
```bash
cd server
touch .env
```
**Add the following keys to the file:**
```bash
GEMINI_API_KEY=your_gemeni_api_key
MONGODB_URI=your_modgodd_api_key
MAPS_API_KEY=your_google_maps_api_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=twilio_phone_number
```
### **4️⃣ Run the Application**
**Start the Backend Server:**
```bash
cd server
npm run dev 
```
**Start the Frontend:**
```bash
cd client
npm start
```
---

## 🚀 Future Roadmap  

We are committed to making **MEDAI** more powerful and accessible. Here’s what’s next:  

### **🔹 Phase 1: Web-Based AI Chatbot (Current Stage ✅)**  
- AI-powered **instant first-aid guidance**  
- **Voice command support** for hands-free use  
- **SOS emergency alerts** via Twilio API  
- **Hospital locator** with Google Maps API  

### **🔹 Phase 2: Mobile App Development 📱**  
- **React Native app** for Android & iOS  
- **Push notifications** for emergency alerts  
- **Enhanced AI assistant** with contextual learning  
- **Offline access** to essential first-aid instructions  

### **🔹 Phase 3: IoT & Wearable Integration ⌚**  
- **Smartwatch detection** for falls & accidents  
- **Automatic SOS alerts** when a critical situation is detected  
- **Health monitoring integration** with real-time vitals tracking  

### **🔹 Phase 4: Community & AI Expansion 🌍**  
- **Multilingual support** for accessibility in different regions  
- **Integration with hospitals & ambulances** for faster medical response  
- **Crowdsourced emergency reporting** to help users assist others nearby  

🚀 **MEDAI is not just a project, it’s a movement towards a safer world!** 🌍  

---
## **Contributing**
We welcome contributions! To get started:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push:
   ```bash
   git commit -m "Add feature description"
   git push origin feature-name
   ```
4. Submit a pull request.

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.









