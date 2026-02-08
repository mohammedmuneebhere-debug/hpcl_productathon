# inference.py

PRODUCT_RULES = {
    "boiler": ["FO", "LSHS"],
    "furnace": ["FO"],
    "genset": ["HSD"],
    "captive power": ["HSD", "LSHS"],
    "road": ["Bitumen"],
    "highway": ["Bitumen"],
    "shipping": ["Marine Bunker Fuel"],
    "port": ["Marine Bunker Fuel"],
    "solvent": ["Hexane", "Solvent 1425"],
    "chemical": ["Hexane", "Solvent 1425"],
    "jute": ["Jute Batch Oil"]
}

def infer_products(signal_text: str):
    text = signal_text.lower()
    matched_products = set()
    matched_keywords = []

    for keyword, products in PRODUCT_RULES.items():
        if keyword in text:
            matched_products.update(products)
            matched_keywords.append(keyword)

    confidence = min(0.3 + 0.15 * len(matched_keywords), 0.95)

    return {
        "products": list(matched_products),
        "confidence": round(confidence, 2),
        "reason": f"Matched keywords: {', '.join(matched_keywords)}"
    }
