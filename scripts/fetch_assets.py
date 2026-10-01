#!/usr/bin/env python3
"""Download brand assets from thewelltrading.co.za and optimize them for the new site."""
import os
import io
import urllib.request
from PIL import Image

BASE = "https://thewelltrading.co.za/wp-content/uploads"
OUT = "/home/z/my-project/public/images"

JOBS = [
    # (url, out_rel_path, max_width, is_logo)
    (f"{BASE}/2024/03/Logo_NO_TAGLINE-02-e1711096208360.png", "logo.png", 1024, True),
    (f"{BASE}/2024/03/cropped-Logo_NO_TAGLINE-02-192x192.png", "icon-192.png", 192, True),
    (f"{BASE}/2024/07/aerial-view-private-house-with-solar-panels-roof-scaled.jpg", "services/solar.jpg", 1600, False),
    (f"{BASE}/2024/03/competent-mechanic-starting-routine-condenser-maintenance-assembling-set-ac-gauges-vacuum-pumps-trained-professional-reading-pressure-liquids-gases-hvac-system_482257-63963.jpg", "services/hvac.jpg", 1600, False),
    (f"{BASE}/2024/08/african-american-apprentice-informing-master-technician-phone-about-air-conditioner-parts-needing-be-replaced-mechanic-checking-maintenance-plan-after-finishing-air-filters-cleaning-768x512.jpg", "services/apprentice.jpg", 1200, False),
    (f"{BASE}/2024/08/81db318ea4406f4d4aa3619eb4b51188_0.jpeg", "hero-electrician.jpeg", 1600, False),
    (f"{BASE}/2024/03/1111111111-e1711098198681.jpg", "about-truck.jpg", 1600, False),
    # Project gallery (real field photos)
    (f"{BASE}/2024/08/IMG_20230512_110307.jpg", "projects/p01.jpg", 1400, False),
    (f"{BASE}/2024/08/IMG_20230711_1450202-scaled.jpg", "projects/p02.jpg", 1400, False),
    (f"{BASE}/2024/08/IMG_20230815_1334012.jpg", "projects/p03.jpg", 1400, False),
    (f"{BASE}/2024/08/IMG_20240307_151458.jpg", "projects/p04.jpg", 1400, False),
    (f"{BASE}/2024/08/IMG_20240521_160427.jpg", "projects/p05.jpg", 1400, False),
    (f"{BASE}/2024/08/IMG_20240521_171542.jpg", "projects/p06.jpg", 1400, False),
    (f"{BASE}/2024/08/IMG_20240626_134631.jpg", "projects/p07.jpg", 1400, False),
    (f"{BASE}/2024/08/IMG_20240628_124539.jpg", "projects/p08.jpg", 1400, False),
    (f"{BASE}/2024/08/IMG_20240724_175010.jpg", "projects/p09.jpg", 1400, False),
    (f"{BASE}/2024/03/426576574_406272301937747_1923187187687457169_n.jpg", "projects/p10.jpg", 1400, False),
    (f"{BASE}/2024/03/418929841_413002501264727_8963019089559879133_n.jpg", "projects/p11.jpg", 1400, False),
    (f"{BASE}/2024/03/347421679_793604858759047_5849634739197285073_n.jpg", "projects/p12.jpg", 1400, False),
    (f"{BASE}/2024/03/417539047_412019974696313_3325639794477600247_n.jpg", "projects/p13.jpg", 1400, False),
    (f"{BASE}/2024/03/369799798_314286147803030_4790221289083362956_n.jpg", "projects/p14.jpg", 1400, False),
    (f"{BASE}/2024/03/323869711_875912596863536_7391825912712760778_n.jpg", "projects/p15.jpg", 1400, False),
    (f"{BASE}/2024/03/426595133_406272375271073_3570252711639662372_n.jpg", "projects/p16.jpg", 1400, False),
    (f"{BASE}/2024/03/321946738_663933898766999_2302751074505050384_n.jpg", "projects/p17.jpg", 1400, False),
    (f"{BASE}/2024/03/317983307_193841026514210_8619984491107740035_n.jpg", "projects/p18.jpg", 1400, False),
]


def process(url, rel, max_w, is_logo):
    dest = os.path.join(OUT, rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        raw = urllib.request.urlopen(req, timeout=45).read()
        img = Image.open(io.BytesIO(raw))
        if img.mode in ("RGBA", "LA", "P"):
            img = img.convert("RGBA")
        else:
            img = img.convert("RGB")
        if img.width > max_w:
            h = int(img.height * max_w / img.width)
            img = img.resize((max_w, h), Image.LANCZOS)
        if is_logo:
            img.save(dest, "PNG", optimize=True)
        else:
            if img.mode == "RGBA":
                bg = Image.new("RGB", img.size, (255, 255, 255))
                bg.paste(img, mask=img.split()[3])
                img = bg
            img.save(dest, "JPEG", quality=82, optimize=True, progressive=True)
        kb = os.path.getsize(dest) / 1024
        print(f"OK  {rel:38s} {img.width}x{img.height}  {kb:7.0f} KB")
    except Exception as e:
        print(f"FAIL {rel}: {e}")


if __name__ == "__main__":
    for url, rel, max_w, is_logo in JOBS:
        process(url, rel, max_w, is_logo)
    print("DONE")
