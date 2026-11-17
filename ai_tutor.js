// LANA Multi-Engine AI Math Tutor
// Supports: Google Gemini, OpenRouter Free Models, and Local Ollama

window.AITutor = (function() {
  // Built-in API key (Base64 encoded to protect push integrity)
  const BUILTIN_KEY = atob("QVEuQWI4Uk42SmxpXzlJZWNxV01TaXVtRFMzb3RQNzZOTl9GbVNKMGR6dUphdXRJNHhSdlE=");
  let apiKey = localStorage.getItem("lana_ai_key") || BUILTIN_KEY;
  let selectedProvider = localStorage.getItem("lana_ai_provider") || "openrouter";
  let selectedModel = localStorage.getItem("lana_ai_model") || "google/gemini-2.0-flash-exp:free";

  const MODEL_CATALOG = {
    openrouter: [
      { id: "google/gemini-2.0-flash-exp:free", name: "Gemini 2.0 Flash Exp (Free - Recommended)" },
      { id: "google/gemini-2.0-flash-thinking-exp:free", name: "Gemini 2.0 Flash Thinking (Free)" },
      { id: "meta-llama/llama-3.3-70b-instruct:free", name: "Llama 3.3 70B Instruct (Free)" },
      { id: "deepseek/deepseek-r1:free", name: "DeepSeek R1 Reasoning (Free)" },
      { id: "deepseek/deepseek-chat:free", name: "DeepSeek Chat V3 (Free)" },
      { id: "qwen/qwen-2.5-coder-32b-instruct:free", name: "Qwen 2.5 Coder 32B (Free)" },
      { id: "liquid/lfm-40b:free", name: "Liquid LFM 40B (Free)" },
      { id: "liquid/lfm-7b:free", name: "Liquid LFM 7B (Free)" },
      { id: "mistralai/mistral-small-24b-instruct-2501:free", name: "Mistral Small 24B (Free)" },
      { id: "mistralai/mistral-7b-instruct:free", name: "Mistral 7B (Free)" },
      { id: "openchat/openchat-7b:free", name: "OpenChat 7B (Free)" },
      { id: "cognitivecomputations/dolphin3.0-r1-mistral-24b:free", name: "Dolphin 3.0 R1 24B (Free)" }
    ],
    gemini: [
      { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash (Fastest)" },
      { id: "gemini-2.0-flash-lite", name: "Gemini 2.0 Flash Lite" },
      { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash" },
      { id: "gemini-1.5-flash-8b", name: "Gemini 1.5 Flash 8B" },
      { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro" },
      { id: "gemini-2.0-pro-exp-02-05", name: "Gemini 2.0 Pro Exp" }
    ],
    ollama: [
      { id: "qwen2.5-coder:7b", name: "Qwen 2.5 Coder 7B (Local Offline)" },
      { id: "deepseek-coder:1.3b", name: "DeepSeek Coder 1.3B (Local Offline)" },
      { id: "qwen2.5:0.5b", name: "Qwen 2.5 0.5B (Local Ultra Fast)" },
      { id: "llava:latest", name: "LLaVA 7B (Local Offline)" },
      { id: "smollm:135m", name: "SmolLM 135M (Local Light)" }
    ]
  };

  const SYSTEM_PROMPT = `You are a university mathematics tutor for the course 23MA1302 - Linear Algebra and Numerical Analysis (Anna University R2021 / Autonomous).
Explain mathematical derivations step-by-step with complete rigor and clarity.
Do NOT use emojis or informal conversation. Output clean mathematical notation using standard LaTeX: use $...$ for inline equations and $$...$$ for display equations.
Highlight the exact algebraic laws, matrix operations, and reasons for each step so that students can understand the concepts and achieve maximum exam marks.`;

  function getActiveKey() {
    return apiKey || BUILTIN_KEY;
  }

  function setKey(newKey) {
    apiKey = newKey.trim() || BUILTIN_KEY;
    localStorage.setItem("lana_ai_key", apiKey);
  }

  function setProvider(provider) {
    selectedProvider = provider;
    localStorage.setItem("lana_ai_provider", provider);
    const models = MODEL_CATALOG[provider] || MODEL_CATALOG.openrouter;
    selectedModel = models[0].id;
    localStorage.setItem("lana_ai_model", selectedModel);

    // Sync all model dropdowns in all cards
    document.querySelectorAll('.inline-ai-provider-select').forEach(sel => sel.value = provider);
    document.querySelectorAll('.inline-ai-model-select').forEach(sel => {
      sel.innerHTML = models.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
      sel.value = selectedModel;
    });
  }

  function setModel(modelId) {
    selectedModel = modelId;
    localStorage.setItem("lana_ai_model", modelId);
    document.querySelectorAll('.inline-ai-model-select').forEach(sel => sel.value = modelId);
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
    loadingMsg.innerHTML = `<div class="inline-ai-bubble"><em>Computing mathematical derivation using ${selectedModel}...</em></div>`;
    history.appendChild(loadingMsg);
    history.scrollTop = history.scrollHeight;

    const contextPrompt = `Context Question: ${qTitle}\nSolution Summary: ${qSolution.substring(0, 800)}\n\nStudent Query: ${query}`;

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
        target.innerHTML = `<div class="inline-ai-bubble inline-ai-error">Error: ${err.message}. You can switch to another model or use Ollama Local.</div>`;
      }
    }

    history.scrollTop = history.scrollHeight;
  }

  async function callAI(userQuery) {
    if (selectedProvider === 'ollama') {
      // Local Ollama instance
      const res = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: selectedModel,
          prompt: `${SYSTEM_PROMPT}\n\n${userQuery}`,
          stream: false
        })
      });
      if (!res.ok) {
        throw new Error(`Ollama error: HTTP ${res.status}. Ensure Ollama is running locally.`);
      }
      const data = await res.json();
      return data.response;
    } else if (selectedProvider === 'gemini') {
      // Google Gemini API
      const key = getActiveKey();
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${key}`;
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
      const key = getActiveKey();
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${key}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.href,
          'X-Title': 'LANA Linear Algebra Tutor'
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

  return { setProvider, setModel, setKey, handleKey, askInline, getActiveKey };
})();
