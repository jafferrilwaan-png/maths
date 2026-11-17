// LANA Inline AI Math Tutor Assistant
// Embedded inside each question dropdown with matrix dot background

window.AITutor = (function() {
  const DEFAULT_KEY = atob("QVEuQWI4Uk42SmxpXzlJZWNxV01TaXVtRFMzb3RQNzZOTl9GbVNKMGR6dUphdXRJNHhSdlE=");
  let apiKey = localStorage.getItem("lana_ai_key") || DEFAULT_KEY;
  let selectedModel = localStorage.getItem("lana_ai_model") || "google/gemini-2.0-flash-exp:free";

  const SYSTEM_PROMPT = `You are a university mathematics tutor for the course 23MA1302 - Linear Algebra and Numerical Analysis (Anna University / Autonomous).
Explain mathematical derivations step-by-step with complete rigor and clarity.
Do NOT use emojis or informal banter. Output clean, readable mathematical notation using standard LaTeX: use $...$ for inline equations and $$...$$ for display equations.
Explain the intuition and reasoning behind every formula so that students can understand and score full marks.`;

  function updateModel(modelName) {
    selectedModel = modelName;
    localStorage.setItem("lana_ai_model", modelName);
    document.querySelectorAll('.inline-ai-model-select').forEach(sel => {
      sel.value = modelName;
    });
  }

  function handleKey(e, inputElem) {
    if (e.key === 'Enter') {
      const btn = inputElem.parentElement.querySelector('.inline-ai-send-btn');
      if (btn) askInline(btn);
    }
  }

  async function askInline(btnElem) {
    const section = btnElem.closest('.inline-ai-section');
    if (!section) return;

    const input = section.querySelector('.inline-ai-input');
    const query = input.value.trim();
    if (!query) return;

    const history = section.querySelector('.inline-ai-chat-history');
    const card = btnElem.closest('.question-card');
    const qTitle = card ? (card.querySelector('.q-heading')?.innerText || '') : '';
    const qSolution = card ? (card.querySelector('.solution-content')?.innerText || '') : '';

    // Append user query
    const userMsg = document.createElement('div');
    userMsg.className = 'inline-ai-msg inline-ai-msg-user';
    userMsg.innerHTML = `<div class="inline-ai-bubble">${escapeHtml(query)}</div>`;
    history.appendChild(userMsg);
    input.value = '';

    // Loading indicator
    const loadingId = 'ai-loading-' + Date.now();
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'inline-ai-msg inline-ai-msg-bot';
    loadingMsg.id = loadingId;
    loadingMsg.innerHTML = `<div class="inline-ai-bubble"><em>Computing mathematical explanation...</em></div>`;
    history.appendChild(loadingMsg);
    history.scrollTop = history.scrollHeight;

    const contextPrompt = `Context Question: ${qTitle}\nExisting Solution Summary: ${qSolution.substring(0, 800)}\n\nStudent Query: ${query}`;

    try {
      const response = await callAI(contextPrompt);
      const target = document.getElementById(loadingId);
      if (target) {
        target.innerHTML = `<div class="inline-ai-bubble">${formatResponse(response)}</div>`;
        if (window.renderMathInElement) {
          renderMathInElement(target, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false }
            ],
            throwOnError: false
          });
        }
      }
    } catch (err) {
      const target = document.getElementById(loadingId);
      if (target) {
        target.innerHTML = `<div class="inline-ai-bubble inline-ai-error">Error: ${err.message}. Check network or model choice.</div>`;
      }
    }

    history.scrollTop = history.scrollHeight;
  }

  async function callAI(userQuery) {
    const isGeminiDirect = selectedModel.startsWith('gemini');

    if (isGeminiDirect) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${apiKey}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: `${SYSTEM_PROMPT}\n\n${userQuery}` }] }
          ]
        })
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error?.message || `HTTP ${res.status}`);
      }
      const data = await res.json();
      return data.candidates[0].content.parts[0].text;
    } else {
      // OpenRouter API
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.href,
          'X-Title': 'LANA Math Tutor'
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: userQuery }
          ]
        })
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error?.message || `HTTP ${res.status}`);
      }
      const data = await res.json();
      return data.choices[0].message.content;
    }
  }

  function formatResponse(text) {
    return text
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return { updateModel, handleKey, askInline };
})();
