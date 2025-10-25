# newsportal_backEnd/translate_service.py
import requests

# NOTE: LibreTranslate demo site is used here for example speed.
# You may replace the URL with your preferred provider (DeepL/Google Cloud).
LIBRETRANSLATE_URL = "https://libretranslate.de/translate"  # public instance; consider self-host or paid API for reliability
TIMEOUT = 5  # seconds

def translate_text(text: str, target_lang: str = "hi", source_lang: str = "auto"):
    """
    Translate `text` to `target_lang`. Returns translated_text on success,
    or original text on failure (fast fallback).
    """
    try:
        payload = {
            "q": text,
            "source": source_lang,
            "target": target_lang,
            "format": "text"
        }
        # free instance expects JSON
        resp = requests.post(LIBRETRANSLATE_URL, json=payload, timeout=TIMEOUT)
        resp.raise_for_status()
        data = resp.json()
        # LibreTranslate returns {"translatedText": "..."}
        return data.get("translatedText") or text
    except Exception:
        # fail-fast: return original text if translation fails
        return text
