---
layout: page
title: About me
subtitle: Artifical Intelligence Student at Universiy of Tehran
---

<!-- ![Arshia image]() -->


# Research Interest



# Education



# Courses


# Honors and Awards




<div id="agentic-ai-chat" style="margin:2em 0; border:1px solid var(--navbar-border-col); border-radius:8px; padding:1em; max-width:600px; background-color: var(--page-col);">
  <h3 style="color: var(--text-col);">Ask about Arshia Yousefi</h3>
  <div id="chat-history" style="height:200px; overflow-y:auto; background: var(--navbar-col); padding:1em; margin-bottom:1em; border-radius:4px; color: var(--text-col);"></div>
  <form id="chat-form" action="javascript:void(0)" style="display:flex; gap:0.5em;">
    <input type="text" id="chat-input" placeholder="Type your message..." style="flex:1; padding:0.5em; background-color: var(--navbar-col); color: var(--text-col); border: 1px solid var(--navbar-border-col); border-radius:4px;" required />
    <button type="submit" style="padding:0.5em 1em; background-color: var(--link-col); color: var(--page-col); border: none; border-radius:4px; cursor: pointer;">Send</button>
  </form>
</div>

{% raw %}
<script>
document.addEventListener('DOMContentLoaded', function() {
  const WEBHOOK_URL = 'https://zenpower.info/webhook/6872fbd6-b91d-4001-ac3c-da9a13e35069';
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const history = document.getElementById('chat-history');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();               // stop native form navigation

    const userMsg = input.value;
    if (!userMsg.trim()) return;

    history.innerHTML += `<div style="margin-bottom: 0.5em; color: var(--text-col);"><strong style="color: var(--link-col);">You:</strong> ${userMsg}</div>`;
    input.value = '';

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await response.json().catch(() => ({}));
      const botMsg = data.reply || 'No response';
      history.innerHTML += `<div style="margin-bottom: 0.5em; color: var(--text-col);"><strong style="color: var(--link-col);">Agentic AI:</strong> ${botMsg}</div>`;
      history.scrollTop = history.scrollHeight;
    } catch (err) {
      history.innerHTML += `<div style="color: var(--mid-col); margin-bottom: 0.5em;"><strong>Error:</strong> Could not connect to chatbot.</div>`;
    }
  });
});
</script>
{% endraw %}

