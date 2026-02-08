from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from inference import infer_products

app = FastAPI(title="HPCL Lead Radar API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {"status": "API running"}

@app.get("/leads")
def get_leads():
    with open("leads.json", "r") as f:
        leads = json.load(f)

    enriched_leads = []

    for lead in leads:
        inference = infer_products(lead["signal_text"])
        lead["inferred_products"] = inference["products"]
        lead["confidence"] = inference["confidence"]
        lead["reason"] = inference["reason"]
        lead["urgency"] = "High" if lead["confidence"] > 0.6 else "Medium"
        enriched_leads.append(lead)

    return enriched_leads
