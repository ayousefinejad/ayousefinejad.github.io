---
layout: post
title: "License Plate Logo Replacer Service"
categories: projects
cover-img: "/assets/img/license_plate_logo.png"  # This is the featured image for homepage and post
tags: [license plate, logo, service]
---

I’m excited to introduce my new service: **License Plate Logo Replacer**!

This service allows you to customize and replace logos on car license plates, making them unique and personalized. Whether you want to add a custom badge, company logo, or any special design, I can help you create a professional look for your vehicle.

**Features:**
- High-quality logo replacement
- Fast turnaround
- Custom designs available
- Affordable pricing

Let’s make your license plate stand out!

---

**Upload your logo image and send it to our backend (base64 format):**

<script>
document.addEventListener('DOMContentLoaded', () => {
  // Use the ACTIVE (production) webhook once the workflow is activated:
  const API_URL = 'https://zenpower.info/webhook/6872fbd6-b91d-4001-ac3c-da9a13e35069';

  const form = document.getElementById('image-form');
  const input = document.getElementById('image-input');
  const status = document.getElementById('image-status');
  const result = document.getElementById('image-result');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    result.innerHTML = '';

    const file = input.files?.[0];
    if (!file) { status.textContent = 'Please select an image file.'; return; }

    status.textContent = 'Uploading and processing image...';

    try {
      // Use FormData to avoid JSON + preflight
      const fd = new FormData();
      fd.append('image_file', file); // n8n: get it with "Binary" or "Form-Data" field

      const response = await fetch(API_URL, {
        method: 'POST',
        body: fd,              // no Content-Type header -> browser sets multipart/form-data
      });

      // Try to parse JSON if provided
      const ct = response.headers.get('content-type') || '';
      let data = null;
      if (ct.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        try { data = JSON.parse(text); } catch { /* not JSON */ }
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      if (data && data.image) {
        result.innerHTML = `
          <strong>Processed image:</strong><br>
          <img src="data:image/png;base64,${data.image}" style="max-width:100%;border:1px solid #ccc;">
        `;
        status.textContent = '';
      } else {
        status.textContent = 'No image returned from backend. Check your n8n Respond node.';
      }
    } catch (err) {
      status.textContent = 'Error processing image: ' + (err?.message || err);
    }
  });
});
</script>


<form id="image-form" style="margin-bottom:1em;">
  <label for="image-input"><strong>Select an image to process:</strong></label><br>
  <input type="file" id="image-input" accept="image/*" /><br>
  <button type="submit">Send & Process</button>
</form>
<p id="image-status"></p>
<div id="image-result"></div>
