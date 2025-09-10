---
layout: post
title: Research in Document Image Analysis and OCR
subtitle: "Exploring Deep Learning Techniques for Automated Document Understanding"
# cover-img: "/assets/img/posts/ocr/ocr_cover.png"
tags: [AI, Computer Vision, OCR, NLP]
---

## Overview  
In this project, I focused on **document image analysis** and **optical character recognition (OCR)** using state-of-the-art deep learning models. The goal was to build a pipeline capable of automatically detecting, segmenting, and extracting both **Persian** and **English** text from real-world document images.  

---

## Object Detection with YOLO  
To locate regions of interest (such as license plates, chassis numbers, or postal codes), I trained a **YOLO-based detection model** on a custom dataset.  

![document](/assets/img/posts/ocr/boxes.jpg)

---

## OCR with PaddleOCR  
After detection, I fine-tuned the **PaddleOCR recognition model** to support both **Persian** and **English**. This step allowed the system to extract accurate text from the cropped image regions.  

---

### Example Results  

📄 **Body Type Detection**  
![body type](/assets/img/posts/ocr/body_type_8.jpg)  
**OCR Output:** `سواری-سواری`  

---

📄 **Chassis Number Extraction**  
![chasis number](/assets/img/posts/ocr/chasis_number_14.jpg)  
**OCR Output:** `L6T7844Z0EN009980`  

---

📄 **Postal Code Recognition**  
![Postalcode](/assets/img/posts/ocr/postalcode_4.jpg)  
**OCR Output:** `۱۴۷۳۸۴۳۵۱۳`  

---

## Key Contributions  
- Developed a **two-stage pipeline** combining **object detection** and **OCR recognition**.  
- Fine-tuned OCR for **bilingual text recognition (Persian & English)**.  
- Achieved robust performance on **structured document fields** such as vehicle details and postal codes.  

---