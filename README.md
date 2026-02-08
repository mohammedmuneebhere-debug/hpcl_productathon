# HPCL Lead Radar  
### B2B Lead Intelligence Agent for HPCL Productathon

**Author:** Drishti Neelam Kanojia  

---

## 🚀 Overview

HPCL Lead Radar is a B2B Lead Intelligence prototype designed to help HPCL’s Direct Sales teams move from relationship-driven selling to **proactive, signal-driven customer acquisition**.  
The system converts publicly available business signals—such as plant expansions, infrastructure projects, and logistics activity—into **actionable sales leads** enriched with inferred product requirements, confidence scoring, and urgency indicators.

This project was built as a **hackathon MVP**, focusing on clarity, explainability, and end-to-end workflow demonstration.

---

## 🎯 Problem Statement

HPCL’s Direct Sales / Bulk Fuels & Specialties business serves industrial customers across sectors such as manufacturing, infrastructure, chemicals, shipping, and logistics.  
While sales execution is strong, **early discovery of potential customers**—especially those expanding capacity or issuing procurement signals—remains largely manual and relationship-driven.

The challenge is to:
- Discover new and expanding B2B customers early  
- Infer their likely HPCL product requirements  
- Convert public signals into structured, actionable leads for sales teams  

---

## 💡 Solution

HPCL Lead Radar ingests public-style signals (simulated for the MVP) and transforms them into **Lead Dossiers** containing:

- Company profile and industry context  
- Signal description (expansion, project, procurement, etc.)  
- Inferred HPCL product recommendations  
- Confidence score and urgency level  
- Clear reasoning behind each recommendation  

Sales officers can quickly review, prioritize, and take action on high-intent leads through an interactive dashboard.

---

## ✨ Key Features

- 🔍 **Public Signal to Lead Conversion**  
- 🧠 **Rule-Based Product Need Inference (Explainable)**  
- 📊 **Confidence & Urgency Scoring**  
- 🧾 **Structured Lead Dossiers**  
- 🖥️ **Interactive Frontend Dashboard**  
- ⚡ **FastAPI + React End-to-End Workflow**

---

## 🛠️ Tech Stack

### Backend
- **FastAPI** – REST API
- **Python** – Inference logic
- **JSON** – Demo data storage

### Frontend
- **React (Vite)** – UI framework
- **CSS** – Styling, hover effects, gradients
- **Fetch API** – Backend communication

---

## 🏗️ Project Structure



hpcl_lead_radar/
├── backend/
│ ├── main.py # FastAPI server
│ ├── inference.py # Product inference logic
│ └── leads.json # Demo dataset
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx # Main dashboard UI
│ │ ├── main.jsx # React entry point
│ │ └── styles/
│ │ └── app.css
│ ├── index.html
│ └── vite.config.js
│
└── README.md


---

## ▶️ How to Run Locally

### 1️⃣ Backend
bash
cd hpcl_lead_radar/backend
pip install -r requirements.txt
uvicorn main:app --reload


Backend runs at:
http://127.0.0.1:8000

2️⃣ Frontend
cd hpcl_lead_radar/frontend
npm install
npm run dev


Frontend runs at:
http://localhost:5173

🎥 Demo

The demo showcases:

Automatic conversion of business signals into leads

Product recommendations based on industry context

Confidence-driven prioritization

Sales action via an interactive dashboard

🔮 Future Enhancements

Live web signal ingestion (news, tenders, directories)

ML-based product recommendation models

WhatsApp / mobile notifications for sales officers

Feedback loop to improve scoring accuracy

Executive analytics dashboard

🏁 Conclusion

HPCL Lead Radar demonstrates how HPCL can scale B2B customer discovery by combining public intelligence, explainable inference, and intuitive sales workflows—enabling faster discovery, better prioritization, and proactive engagement.


###Author: Drishti Neelam Kanojia

