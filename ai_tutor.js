// LANA Production AI Math Tutor
// Zero-404 Cross-Cascade Architecture (Google Gemini + OpenRouter Free)
// Auto-failover across 30+ endpoints with real mathematical answers (Zero Fake Thinking)

window.AITutor = (function() {
  const DEFAULT_GEMINI_KEY = atob("QVEuQWI4Uk42SmxpXzlJZWNxV01TaXVtRFMzb3RQNzZOTl9GbVNKMGR6dUphdXRJNHhSdlE=");
  const DEFAULT_OPENROUTER_KEY = atob("c2stb3ItdjEtZGY5MGQyYjllY2Q4MDc4MTBmYWFhYWI4ZGIxN2VmNWE0MWNkNjNiMmEzMTRmZDI2NzAyMmRkN2U1MDgwMzBlMA==");

  let selectedProvider = localStorage.getItem("lana_ai_provider") || "gemini";
  let selectedModel = localStorage.getItem("lana_ai_model") || "gemini-3.5-flash-lite";

  // Google Gemini Production Cascade
  const GEMINI_CASCADE = [
    "gemini-3.5-flash-lite",         // Active high-throughput endpoint
    "gemini-flash-lite-latest",      // Google stabilized flash lite checkpoint
    "gemini-3-flash-preview",        // Fast preview checkpoint
    "gemini-2.5-flash",              // Production checkpoint
    "gemini-2.5-flash-lite",         // Ultra low-latency fallback
    "gemini-flash-latest",           // Latest stabilized pointer
    "gemini-3.1-flash-lite-preview", // Preview-tier checkpoint
    "gemini-2.5-pro",                // Reasoning tier fallback
    "gemini-3.6-flash",
    "gemini-3.5-flash",
    "gemini-4-hydrogen",
    "gemini-omni",
    "gemini-robotics-er-2-preview",
    "gemma-4-31b-it",
    "gemma-4-26b-a4b-it"
  ];

  // OpenRouter Free Endpoints
  const OPENROUTER_CASCADE = [
    "openrouter/free",
    "nvidia/nemotron-3-ultra-550b-a55b:free",
    "nvidia/nemotron-3.5-super-vl:free",
    "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
    "google/gemma-4-31b-it:free",
    "google/gemma-4-26b-a4b-it:free",
    "baidu/ernie-5.5-flash-preview:free",
    "cohere/north-mini-code:free",
    "liquid/lfm-3-1.7b:free",
    "recursive/flint-v1.0:free",
    "nvidia/nemotron-3.5-lightning:free",
    "thinkingmachines/inkling-2-small:free",
    "meta-llama/llama-3.2-11b-vision-instruct:free",
    "meta-llama/llama-3.2-90b-vision-instruct:free",
    "google/gemini-2.0-flash-exp:free",
    "google/gemini-flash-1.5-exp:free",
    "qwen/qwen-2-vl-72b-instruct:free"
  ];

  // UI Model Catalog
  const MODEL_CATALOG = {
    gemini: [
      { id: "gemini-3.5-flash-lite", name: "Gemini 3.5 Flash Lite (Active Production - Ultra Fast)" },
      { id: "gemini-flash-lite-latest", name: "Gemini Flash Lite Latest (Stabilized Checkpoint)" },
      { id: "gemini-3-flash-preview", name: "Gemini 3 Flash Preview" },
      { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash (Production Endpoint)" },
      { id: "gemini-2.5-flash-lite", name: "Gemini 2.5 Flash Lite" },
      { id: "gemini-flash-latest", name: "Gemini Flash Latest" },
      { id: "gemini-3.1-flash-lite-preview", name: "Gemini 3.1 Flash Lite Preview" },
      { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro (Advanced Reasoning)" },
      { id: "gemini-4-hydrogen", name: "Gemini 4 Hydrogen" },
      { id: "gemini-omni", name: "Gemini Omni" },
      { id: "gemini-3.6-flash", name: "Gemini 3.6 Flash" },
      { id: "gemini-3.5-flash", name: "Gemini 3.5 Flash" },
      { id: "gemini-robotics-er-2-preview", name: "Gemini Robotics ER 2" },
      { id: "gemma-4-31b-it", name: "Google Gemma 4 31B IT" },
      { id: "gemma-4-26b-a4b-it", name: "Google Gemma 4 26B IT" }
    ],
    openrouter: [
      { id: "openrouter/free", name: "OpenRouter Auto Free (Auto-Routed Zero-404)" },
      { id: "nvidia/nemotron-3-ultra-550b-a55b:free", name: "Nemotron 3 Ultra 550B (Free)" },
      { id: "nvidia/nemotron-3.5-super-vl:free", name: "Nemotron 3.5 Super VL (Free)" },
      { id: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free", name: "Nemotron 3 Nano Omni (Free)" },
      { id: "google/gemma-4-31b-it:free", name: "Google Gemma 4 31B IT (Free)" },
      { id: "google/gemma-4-26b-a4b-it:free", name: "Google Gemma 4 26B IT (Free)" },
      { id: "baidu/ernie-5.5-flash-preview:free", name: "Baidu Ernie 5.5 Flash (Free)" },
      { id: "cohere/north-mini-code:free", name: "Cohere North Mini Code (Free)" },
      { id: "liquid/lfm-3-1.7b:free", name: "Liquid LFM 3 1.7B (Free)" },
      { id: "recursive/flint-v1.0:free", name: "Recursive Flint v1.0 (Free)" },
      { id: "nvidia/nemotron-3.5-lightning:free", name: "Nemotron 3.5 Lightning (Free)" },
      { id: "thinkingmachines/inkling-2-small:free", name: "Inkling 2 Small (Free)" },
      { id: "meta-llama/llama-3.2-11b-vision-instruct:free", name: "Llama 3.2 11B Vision (Free)" },
      { id: "meta-llama/llama-3.2-90b-vision-instruct:free", name: "Llama 3.2 90B Vision (Free)" },
      { id: "google/gemini-2.0-flash-exp:free", name: "Gemini 2.0 Flash Exp (Free)" },
      { id: "google/gemini-flash-1.5-exp:free", name: "Gemini Flash 1.5 Exp (Free)" },
      { id: "qwen/qwen-2-vl-72b-instruct:free", name: "Qwen 2 VL 72B (Free)" }
    ]
  };

  const SYSTEM_PROMPT = `You are an expert mathematics professor for course 23MA1302 - Linear Algebra and Numerical Analysis.
Provide the direct, real answer immediately.
Do NOT include internal reasoning, do NOT write "thinking process" logs, and do NOT use emojis.
Explain all mathematical steps with rigor, displaying math in clean LaTeX ($...$ inline, $$...$$ display).
Highlight essential formulas and university exam mark allocation.`;

  function syncDropdowns() {
    // Determine provider automatically if model belongs to a specific catalog
    if (selectedModel.includes('/') || selectedModel.endsWith(':free')) {
      selectedProvider = 'openrouter';
    } else if (selectedModel.startsWith('gemini-') || selectedModel.startsWith('gemma-')) {
      selectedProvider = 'gemini';
    }

    const models = MODEL_CATALOG[selectedProvider] || MODEL_CATALOG.gemini;

    document.querySelectorAll('.inline-ai-provider-select').forEach(sel => {
      Array.from(sel.options).forEach(opt => {
        if (opt.value === 'ollama') opt.remove();
      });
      sel.value = selectedProvider;
    });

    document.querySelectorAll('.inline-ai-model-select').forEach(sel => {
      sel.innerHTML = models.map(m => `<option value="${m.id}" ${m.id === selectedModel ? 'selected' : ''}>${m.name}</option>`).join('');
      sel.value = selectedModel;
    });
  }

  function setProvider(provider) {
    selectedProvider = (provider === 'openrouter') ? 'openrouter' : 'gemini';
    localStorage.setItem("lana_ai_provider", selectedProvider);
    const models = MODEL_CATALOG[selectedProvider] || MODEL_CATALOG.gemini;
    selectedModel = models[0].id;
    localStorage.setItem("lana_ai_model", selectedModel);
    syncDropdowns();
  }

  function setModel(modelId) {
    selectedModel = modelId;
    localStorage.setItem("lana_ai_model", modelId);
    if (modelId.includes('/') || modelId.endsWith(':free')) {
      selectedProvider = 'openrouter';
    } else {
      selectedProvider = 'gemini';
    }
    localStorage.setItem("lana_ai_provider", selectedProvider);
    document.querySelectorAll('.inline-ai-model-select').forEach(sel => sel.value = modelId);
    document.querySelectorAll('.inline-ai-provider-select').forEach(sel => sel.value = selectedProvider);
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

    const contextPrompt = `Subject: Linear Algebra and Numerical Analysis (23MA1302)\nTopic / Question: ${qTitle}\nSummary: ${qSolution.substring(0, 400)}\n\nStudent Doubt / Query: ${query}`;

    try {
      const responseText = await callAIWithCascade(contextPrompt);
      const target = document.getElementById(loadingId);
      if (target) {
        target.innerHTML = `<div class="inline-ai-bubble">${formatResponse(responseText)}</div>`;
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
        target.innerHTML = `<div class="inline-ai-bubble inline-ai-error" style="color:#b91c1c; background:#fef2f2; border:1px solid #fecaca; padding:10px 14px; border-radius:10px;">Notice: ${escapeHtml(err.message)}</div>`;
      }
    }

    history.scrollTop = history.scrollHeight;
  }

  async function callAIWithCascade(userQuery) {
    // If user chose OpenRouter, try OpenRouter first; if it fails or rate-limits, fall back to Gemini
    if (selectedProvider === 'openrouter') {
      try {
        return await callOpenRouterCascade(userQuery);
      } catch (openRouterErr) {
        // Auto-failover to Gemini
        return await callGeminiCascade(userQuery);
      }
    } else {
      // Primary Gemini cascade
      try {
        return await callGeminiCascade(userQuery);
      } catch (geminiErr) {
        // Auto-failover to OpenRouter
        return await callOpenRouterCascade(userQuery);
      }
    }
  }

  async function callGeminiCascade(userQuery) {
    const key = DEFAULT_GEMINI_KEY;
    const modelsToTry = [
      selectedModel.startsWith('gemini') || selectedModel.startsWith('gemma') ? selectedModel : GEMINI_CASCADE[0],
      ...GEMINI_CASCADE.filter(m => m !== selectedModel)
    ];

    let lastError = null;
    for (const m of modelsToTry) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${key}`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 7000);

        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: `${SYSTEM_PROMPT}\n\n${userQuery}` }] }],
            generationConfig: {
              maxOutputTokens: 380,
              temperature: 0.2
            }
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            return cleanAIOutput(rawText);
          }
        }
        lastError = new Error(`Gemini ${m} returned HTTP ${res.status}`);
      } catch (e) {
        lastError = e;
      }
    }
    throw lastError || new Error("All Gemini cascade endpoints busy.");
  }

  async function callOpenRouterCascade(userQuery) {
    const key = DEFAULT_OPENROUTER_KEY;
    const modelsToTry = [
      selectedModel.includes('/') || selectedModel.endsWith(':free') ? selectedModel : OPENROUTER_CASCADE[0],
      ...OPENROUTER_CASCADE.filter(m => m !== selectedModel)
    ];

    let lastError = null;
    for (const m of modelsToTry) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 7000);

        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.href || 'https://maths-lana.edu',
            'X-Title': 'LANA University Math Master'
          },
          body: JSON.stringify({
            model: m,
            max_tokens: 380,
            temperature: 0.2,
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              { role: 'user', content: userQuery }
            ]
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          const choice = data.choices?.[0];
          let rawText = choice?.message?.content;
          if (!rawText && choice?.message?.reasoning) {
            rawText = choice.message.reasoning;
          }
          if (rawText) {
            return cleanAIOutput(rawText);
          }
        }
        lastError = new Error(`OpenRouter ${m} returned HTTP ${res.status}`);
      } catch (e) {
        lastError = e;
      }
    }
    throw lastError || new Error("All OpenRouter free models busy.");
  }

  // Strip internal thinking tags or reasoning boilerplate
  function cleanAIOutput(text) {
    if (!text) return "";
    let cleaned = text;

    // Remove <think>...</think> blocks
    cleaned = cleaned.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();

    // Remove "Here's a thinking process: ..." blocks
    if (cleaned.startsWith("Here's a thinking process:")) {
      const doubleBreak = cleaned.indexOf("\n\n");
      if (doubleBreak !== -1) {
        cleaned = cleaned.substring(doubleBreak + 2).trim();
      }
    }

    // If cleaned text is empty, fall back to original
    return cleaned || text;
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncDropdowns);
  } else {
    setTimeout(syncDropdowns, 50);
  }

  return {
    setProvider,
    setModel,
    handleKey,
    askInline,
    syncDropdowns,
    callAIWithCascade,
    MODEL_CATALOG
  };
})();
