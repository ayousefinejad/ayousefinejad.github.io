---
layout: post
title: "License Plate Logo Replacer Service"
categories: projects
cover-img: "/assets/img/license_plate_logo.png"
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

### Upload your logo image

<form id="image-form" style="margin-bottom:1em;">
  <label for="image-input"><strong>Select an image to process:</strong></label><br>
  <input type="file" id="image-input" accept="image/*" /><br>
  <button type="submit">Send & Process</button>
  <div class="progress-wrap">
    <progress id="upload-progress" max="100" value="0" hidden></progress>
    <span id="upload-percent"></span>
  </div>
</form>
<p id="image-status"></p>
<div id="image-result"></div>

<style>
  .progress-wrap { display:flex; align-items:center; gap:.5rem; margin:.5rem 0; }
  progress { width: 260px; height: 10px; }
</style>

{% raw %}
<script>
document.addEventListener('DOMContentLoaded', () => {
  const API_URL = 'https://zenpower.info/webhook/6872fbd6-b91d-4001-ac3c-da9a13e35069';

  const form   = document.getElementById('image-form');
  const input  = document.getElementById('image-input');
  const status = document.getElementById('image-status');
  const result = document.getElementById('image-result');

  const bar    = document.getElementById('upload-progress');
  const pctTxt = document.getElementById('upload-percent');

  function resetUI() {
    status.textContent = '';
    result.innerHTML = '';
    bar.value = 0;
    bar.hidden = true;
    pctTxt.textContent = '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    resetUI();

    const file = input.files?.[0];
    if (!file) { status.textContent = 'Please select an image file.'; return; }

    const fd = new FormData();
    fd.append('image_file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', API_URL);

    bar.hidden = false;
    status.textContent = 'Uploading...';

    xhr.upload.onprogress = (ev) => {
      if (ev.lengthComputable) {
        const percent = Math.round((ev.loaded / ev.total) * 100);
        bar.value = percent;
        pctTxt.textContent = percent + '%';
      }
    };

    xhr.onloadstart = () => {
      bar.value = 0;
      pctTxt.textContent = '0%';
    };

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
        status.textContent = 'Processing on server...';
      }
    };

    xhr.onerror = () => {
      status.textContent = 'Error processing image: Network error';
    };

    xhr.onload = () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        status.textContent = `Error processing image: HTTP ${xhr.status} ${xhr.statusText}`;
        return;
      }

      let data = null;
      const ct = xhr.getResponseHeader('content-type') || '';
      try {
        data = ct.includes('application/json') ? JSON.parse(xhr.responseText) : JSON.parse(xhr.responseText);
      } catch {}

      if (data && data.image) {
        result.innerHTML = `
          <strong>Processed image:</strong><br>
          <img src="data:image/png;base64,${data.image}" style="max-width:100%;border:1px solid #ccc;">
        `;
        status.textContent = '';
      } else if (data && data.ok) {
        status.textContent = data.message || 'Uploaded successfully.';
      } else {
        status.textContent = 'No image returned from backend. Check your n8n Respond node.';
      }

      pctTxt.textContent = '';
      bar.hidden = true;
    };

    xhr.send(fd);
  });
});
</script>
{% endraw %}
