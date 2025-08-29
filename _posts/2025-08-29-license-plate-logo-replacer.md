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

{% raw %}
<div id="upload-box" style="border:1px solid #ccc; padding:20px; max-width:400px;">
  <h3>Upload License Plate Image</h3>
  <input type="file" id="inputImage" accept="image/*" />
  <button id="processBtn">Process</button>
  <div id="loading" style="display:none;">Processing...</div>
  <div id="resultBox" style="margin-top:20px;">
    <h4>Processed Image:</h4>
    <img id="resultImage" src="" style="max-width:100%; border:1px solid #ccc;" />
  </div>
</div>

<script>
const inputImage = document.getElementById('inputImage');
const processBtn = document.getElementById('processBtn');
const loading = document.getElementById('loading');
const resultImage = document.getElementById('resultImage');

let selectedFile = null;

inputImage.addEventListener('change', (e) => {
  selectedFile = e.target.files[0];
});

processBtn.addEventListener('click', async () => {
  if (!selectedFile) {
    alert('Please select an image!');
    return;
  }

  loading.style.display = 'block';
  resultImage.src = '';

  // Prepare form data
  const formData = new FormData();
  formData.append('file', selectedFile);

  try {
    const response = await fetch('https://allure.darkube.app', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Image processing failed!');
    }

    // Assuming the API returns: { "image_base64": "..." }
    const result = await response.json();
    if (result.image_base64) {
      resultImage.src = 'data:image/png;base64,' + result.image_base64;
    } else {
      resultImage.alt = 'No image received';
    }
  } catch (err) {
    alert('Error: ' + err.message);
  } finally {
    loading.style.display = 'none';
  }
});
</script>
{% endraw %}
