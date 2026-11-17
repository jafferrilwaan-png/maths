// LANA Production AI Math Tutor
// Zero-404 Cascade Architecture with Google Gemini, OpenRouter Free, and Local Ollama

window.AITutor = (function() {
  const BUILTIN_KEY = atob("QVEuQWI4Uk42SmxpXzlJZWNxV01TaXVtRFMzb3RQNzZOTl9GbVNKMGR6dUphdXRJNHhSdlE=");
  let apiKey = localStorage.getItem("lana_ai_key") || BUILTIN_KEY;
  let selectedProvider = localStorage.getItem("lana_ai_provider") || "openrouter";
  let selectedModel = localStorage.getItem("lana_ai_model") || "google/gemini-2.0-flash-exp:free";

  // Active Production Cascade (Configured for Zero-404 Fallback)
  const GEMINI_CASCADE = [
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-flash-latest",
    "gemini-3.1-flash-lite-preview",
    "gemini-2.5-pro",
    "gemini-2.0-flash",
    "gemini-1.5-flash"
  ];

  const OPENROUTER_FALLBACKS = [
    "openrouter/free",
    "google/gemini-2.0-flash-exp:free",
    "meta-llama/llama-3.3-70b-instruct:free",
    "deepseek/deepseek-r1:free"
  ];

  const MODEL_CATALOG = {
    openrouter: [
      { id: "openrouter/free", name: "OpenRouter Auto Free (Auto-Routed Fallback)" },
      { id: "google/gemini-2.0-flash-exp:free", name: "Gemini 2.0 Flash Exp (Free - Recommended)" },
      { id: "google/gemini-flash-1.5-exp:free", name: "Gemini Flash 1.5 Exp (Free)" },
      { id: "google/gemma-4-31b-it:free", name: "Google Gemma 4 31B (Free)" },
      { id: "google/gemma-4-26b-a4b-it:free", name: "Google Gemma 4 26B (Free)" },
      { id: "nvidia/nemotron-3-ultra-550b-a55b:free", name: "Nemotron 3 Ultra 550B (Free)" },
      { id: "nvidia/nemotron-3.5-super-vl:free", name: "Nemotron 3.5 Super VL (Free)" },
      { id: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free", name: "Nemotron 3 Nano Omni (Free)" },
      { id: "nvidia/nemotron-3.5-lightning:free", name: "Nemotron 3.5 Lightning (Free)" },
      { id: "thinkingmachines/inkling-2-small:free", name: "Inkling 2 Small (Free)" },
      { id: "cohere/north-mini-code:free", name: "Cohere North Mini Code (Free)" },
      { id: "baidu/ernie-5.5-flash-preview:free", name: "Baidu Ernie 5.5 Flash (Free)" },
      { id: "liquid/lfm-2.5-2.6b:free", name: "Liquid LFM 2.5 2.6B (Free)" },
      { id: "liquid/lfm-3-1.7b:free", name: "Liquid LFM 3 1.7B (Free)" },
      { id: "recursive/flint-v1.0:free", name: "Recursive Flint v1.0 (Free)" },
      { id: "meta-llama/llama-3.2-11b-vision-instruct:free", name: "Llama 3.2 11B Vision (Free)" },
      { id: "meta-llama/llama-3.2-90b-vision-instruct:free", name: "Llama 3.2 90B Vision (Free)" },
      { id: "qwen/qwen-2-vl-72b-instruct:free", name: "Qwen 2 VL 72B (Free)" },
      { id: "meta-llama/llama-3.3-70b-instruct:free", name: "Llama 3.3 70B Instruct (Free)" },
      { id: "deepseek/deepseek-r1:free", name: "DeepSeek R1 Reasoning (Free)" },
      { id: "qwen/qwen-2.5-coder-32b-instruct:free", name: "Qwen 2.5 Coder 32B (Free)" }
    ],
    gemini: [
      { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash (Primary Production)" },
      { id: "gemini-2.5-flash-lite", name: "Gemini 2.5 Flash Lite (Low-Latency)" },
      { id: "gemini-flash-latest", name: "Gemini Flash Latest" },
      { id: "gemini-3.1-flash-lite-preview", name: "Gemini 3.1 Flash Lite Preview" },
      { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro (Advanced Reasoning)" },
      { id: "gemini-4-hydrogen", name: "Gemini 4 Hydrogen" },
      { id: "gemini-omni", name: "Gemini Omni" },
      { id: "gemini-3.6-flash", name: "Gemini 3.6 Flash" },
      { id: "gemini-3.5-flash", name: "Gemini 3.5 Flash" },
      { id: "gemini-3.5-flash-lite", name: "Gemini 3.5 Flash Lite" },
      { id: "gemini-3-flash-preview", name: "Gemini 3 Flash Preview" },
      { id: "gemini-robotics-er-2-preview", name: "Gemini Robotics ER 2" },
      { id: "gemma-4-31b-it", name: "Gemma 4 31B IT" },
      { id: "gemma-4-26b-a4b-it", name: "Gemma 4 26B IT" },
      { id: "gemini-flash-lite-latest", name: "Gemini Flash Lite Latest" }
    ],
    ollama: [
      { id: "qwen2.5-coder:7b", name: "Qwen 2.5 Coder 7B (Local Offline)" },
      { id: "deepseek-coder:1.3b", name: "DeepSeek Coder 1.3B (Local Offline)" },
      { id: "qwen2.5:0.5b", name: "Qwen 2.5 0.5B (Local Ultra Fast)" },
      { id: "llava:latest", name: "LLaVA 7B (Local Offline)" },
      { id: "smollm:135m", name: "SmolLM 135M (Local Light)" }
    ]
  };

  const SYSTEM_PROMPT = `You are an expert university mathematics professor for course 23MA1302 - Linear Algebra and Numerical Analysis (Anna University R2021 / Autonomous).
Explain mathematical derivations step-by-step with absolute rigor, clarity, and precision.
Do NOT use emojis or colloquial chat. Output all mathematical notation in clean LaTeX ($...$ for inline, $$...$$ for display equations).
Explain the exact mathematical reason for every step and state scoring tips for university exams.`;

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

    const userMsg = document.createElement('div');
    userMsg.className = 'inline-ai-msg inline-ai-msg-user';
    userMsg.innerHTML = `<div class="inline-ai-bubble">${escapeHtml(query)}</div>`;
    history.appendChild(userMsg);
    input.value = '';

    const loadingId = 'ai-loading-' + Date.now();
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'inline-ai-msg inline-ai-msg-bot';
    loadingMsg.id = loadingId;
    loadingMsg.innerHTML = `<div class="inline-ai-bubble"><em>Analyzing with ${selectedModel} (Zero-404 Cascade Active)...</em></div>`;
    history.appendChild(loadingMsg);
    history.scrollTop = history.scrollHeight;

    const contextPrompt = `Context Question: ${qTitle}\nSolution Summary: ${qSolution.substring(0, 800)}\n\nStudent Query: ${query}`;

    try {
      const response = await callAIWithCascade(contextPrompt);
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
        target.innerHTML = `<div class="inline-ai-bubble inline-ai-error">Error: ${err.message}. Switch to Ollama Local or another OpenRouter model.</div>`;
      }
    }

    history.scrollTop = history.scrollHeight;
  }

  async function callAIWithCascade(userQuery) {
    if (selectedProvider === 'ollama') {
      const res = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: selectedModel,
          prompt: `${SYSTEM_PROMPT}\n\n${userQuery}`,
          stream: false
        })
      });
      if (!res.ok) throw new Error(`Ollama HTTP ${res.status}. Check if Ollama is running.`);
      const data = await res.json();
      return data.response;
    } else if (selectedProvider === 'gemini') {
      // Primary model + Cascade Fallback
      const key = getActiveKey();
      const modelsToTry = [selectedModel, ...GEMINI_CASCADE.filter(m => m !== selectedModel)];

      let lastError = null;
      for (const m of modelsToTry) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${key}`;
          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: `${SYSTEM_PROMPT}\n\n${userQuery}` }] }]
            })
          });
          if (res.ok) {
            const data = await res.json();
            return data.candidates[0].content.parts[0].text;
          }
          lastError = new Error(`Model ${m} returned HTTP ${res.status}`);
        } catch (e) {
          lastError = e;
        }
      }
      throw lastError || new Error("All cascade Gemini models failed.");
    } else {
      // OpenRouter with Fallback
      const key = getActiveKey();
      const modelsToTry = [selectedModel, ...OPENROUTER_FALLBACKS.filter(m => m !== selectedModel)];

      let lastError = null;
      for (const m of modelsToTry) {
        try {
          const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${key}`,
              'Content-Type': 'application/json',
              'HTTP-Referer': window.location.href,
              'X-Title': 'LANA Math Master'
            },
            body: JSON.stringify({
              model: m,
              messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: 'user', content: userQuery }
              ]
            })
          });
          if (res.ok) {
            const data = await res.json();
            return data.choices[0].message.content;
          }
          lastError = new Error(`OpenRouter ${m} returned HTTP ${res.status}`);
        } catch (e) {
          lastError = e;
        }
      }
      throw lastError || new Error("All OpenRouter models failed.");
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
