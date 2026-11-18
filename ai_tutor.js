// LANA Production AI Math Tutor
// Zero-404 Cross-Cascade Architecture (Google Gemini + OpenRouter Free)
// Full Markdown Table & LaTeX Parser with Auto-Repaired Delimiters & Extended Output Tokens

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
    "google/gemma-4-31b-it:free",
    "google/gemma-4-26b-a4b-it:free",
    "nvidia/nemotron-3-ultra-550b-a55b:free",
    "nvidia/nemotron-3.5-super-vl:free",
    "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
    "nvidia/nemotron-3.5-lightning:free",
    "thinkingmachines/inkling-2-small:free",
    "cohere/north-mini-code:free",
    "baidu/ernie-5.5-flash-preview:free",
    "liquid/lfm-2.5-2.6b:free",
    "liquid/lfm-3-1.7b:free",
    "recursive/flint-v1.0:free",
    "meta-llama/llama-3.2-11b-vision-instruct:free",
    "meta-llama/llama-3.2-90b-vision-instruct:free",
    "google/gemini-2.0-flash-exp:free",
    "google/gemini-flash-1.5-exp:free",
    "qwen/qwen-2-vl-72b-instruct:free"
  ];

  // UI Model Catalog (All Active Production & Free Models)
  const MODEL_CATALOG = {
    gemini: [
      { id: "gemini-2.5-flash", name: "gemini-2.5-flash (Primary Stable Production Endpoint)" },
      { id: "gemini-2.5-flash-lite", name: "gemini-2.5-flash-lite (Ultra Low-Latency Fallback)" },
      { id: "gemini-flash-latest", name: "gemini-flash-latest (Google Stabilized Checkpoint)" },
      { id: "gemini-3.1-flash-lite-preview", name: "gemini-3.1-flash-lite-preview (Preview-Tier Lightweight)" },
      { id: "gemini-2.5-pro", name: "gemini-2.5-pro (Advanced Reasoning Tier Fallback)" },
      { id: "gemini-3.5-flash-lite", name: "gemini-3.5-flash-lite (Active High Throughput)" },
      { id: "gemini-3.5-flash", name: "gemini-3.5-flash" },
      { id: "gemini-3.6-flash", name: "gemini-3.6-flash" },
      { id: "gemini-3-flash-preview", name: "gemini-3-flash-preview (Fast Preview Checkpoint)" },
      { id: "gemini-flash-lite-latest", name: "gemini-flash-lite-latest (Stabilized Checkpoint)" },
      { id: "gemini-4-hydrogen", name: "gemini-4-hydrogen" },
      { id: "gemini-omni", name: "gemini-omni" },
      { id: "gemini-robotics-er-2-preview", name: "gemini-robotics-er-2-preview" },
      { id: "gemma-4-31b-it", name: "gemma-4-31b-it" },
      { id: "gemma-4-26b-a4b-it", name: "gemma-4-26b-a4b-it" }
    ],
    openrouter: [
      { id: "openrouter/free", name: "openrouter/free (Auto-Routed Free Fallback)" },
      { id: "google/gemma-4-31b-it:free", name: "google/gemma-4-31b-it:free" },
      { id: "google/gemma-4-26b-a4b-it:free", name: "google/gemma-4-26b-a4b-it:free" },
      { id: "nvidia/nemotron-3-ultra-550b-a55b:free", name: "nvidia/nemotron-3-ultra-550b-a55b:free" },
      { id: "nvidia/nemotron-3.5-super-vl:free", name: "nvidia/nemotron-3.5-super-vl:free" },
      { id: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free", name: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free" },
      { id: "nvidia/nemotron-3.5-lightning:free", name: "nvidia/nemotron-3.5-lightning:free" },
      { id: "thinkingmachines/inkling-2-small:free", name: "thinkingmachines/inkling-2-small:free" },
      { id: "cohere/north-mini-code:free", name: "cohere/north-mini-code:free" },
      { id: "baidu/ernie-5.5-flash-preview:free", name: "baidu/ernie-5.5-flash-preview:free" },
      { id: "liquid/lfm-2.5-2.6b:free", name: "liquid/lfm-2.5-2.6b:free" },
      { id: "liquid/lfm-3-1.7b:free", name: "liquid/lfm-3-1.7b:free" },
      { id: "recursive/flint-v1.0:free", name: "recursive/flint-v1.0:free" },
      { id: "meta-llama/llama-3.2-11b-vision-instruct:free", name: "meta-llama/llama-3.2-11b-vision-instruct:free" },
      { id: "meta-llama/llama-3.2-90b-vision-instruct:free", name: "meta-llama/llama-3.2-90b-vision-instruct:free" },
      { id: "google/gemini-2.0-flash-exp:free", name: "google/gemini-2.0-flash-exp:free" },
      { id: "google/gemini-flash-1.5-exp:free", name: "google/gemini-flash-1.5-exp:free" },
      { id: "qwen/qwen-2-vl-72b-instruct:free", name: "qwen/qwen-2-vl-72b-instruct:free" }
    ]
  };

  const SYSTEM_PROMPT = `You are an expert, direct, and helpful AI mathematics tutor for university course 23MA1302 - Linear Algebra and Numerical Analysis.

CRITICAL INSTRUCTIONS:
1. ANSWER ONLY WHAT THE STUDENT ASKS:
   - Give a direct, focused, and precise answer to the student's exact question or doubt.
   - Do NOT blabber, do NOT add unsolicited lectures, and do NOT drift into unrelated topics.
   - Do NOT add "Exam Tips", "Mark Allocation", or "Scoring Rubrics" unless the student explicitly asks for them.
   - Answer their specific question first, in clear, simple language.
2. BE GENUINELY HELPFUL & INTUITIVE:
   - If the student says "I don't understand", "explain simpler", or "why", explain the concept simply with clear intuition and real understanding. No unnecessary jargon.
   - If the student asks for a solution or calculation, provide the exact step-by-step working directly, fully finished without truncation.
3. CONVERSATIONAL & CONCISE:
   - If the student greets you ("hi", "hello"), greet them warmly in 1-2 friendly sentences and ask how you can help.
   - Keep answers well-structured and easy to read.
4. CLEAN FORMATTING:
   - Never output internal reasoning scratchpads or <think> tags.
   - Use standard LaTeX ($...$ inline, $$...$$ display) with lowercase syntax (\\alpha, \\frac, etc.).`;

  function buildModelSelectHTML(currentModel) {
    let html = `<optgroup label="Direct Google Gemini Production Cascade">`;
    MODEL_CATALOG.gemini.forEach(m => {
      html += `<option value="${m.id}" ${m.id === currentModel ? 'selected' : ''}>${m.name}</option>`;
    });
    html += `</optgroup><optgroup label="OpenRouter Free Endpoints (Zero-404 Cascade)">`;
    MODEL_CATALOG.openrouter.forEach(m => {
      html += `<option value="${m.id}" ${m.id === currentModel ? 'selected' : ''}>${m.name}</option>`;
    });
    html += `</optgroup>`;
    return html;
  }

  function syncDropdowns() {
    if (selectedModel.includes('/') || selectedModel.endsWith(':free')) {
      selectedProvider = 'openrouter';
    } else {
      selectedProvider = 'gemini';
    }

    const fullDropdownHTML = buildModelSelectHTML(selectedModel);

    document.querySelectorAll('.inline-ai-provider-select').forEach(sel => {
      Array.from(sel.options).forEach(opt => {
        if (opt.value === 'ollama') opt.remove();
      });
      sel.value = selectedProvider;
    });

    document.querySelectorAll('.inline-ai-model-select').forEach(sel => {
      sel.innerHTML = fullDropdownHTML;
      sel.value = selectedModel;
    });
  }

  function setProvider(provider) {
    selectedProvider = (provider === 'openrouter') ? 'openrouter' : 'gemini';
    localStorage.setItem("lana_ai_provider", selectedProvider);
    selectedModel = (selectedProvider === 'openrouter') ? MODEL_CATALOG.openrouter[0].id : MODEL_CATALOG.gemini[0].id;
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

    // Extract prior conversation turns in this card for true multi-turn chatbot context
    const priorMsgs = [];
    history.querySelectorAll('.inline-ai-msg').forEach(el => {
      if (el.classList.contains('inline-ai-msg-user')) {
        const txt = el.querySelector('.inline-ai-bubble')?.innerText?.trim();
        if (txt) priorMsgs.push({ role: 'student', text: txt });
      } else if (el.classList.contains('inline-ai-msg-bot') && !el.querySelector('.ai-analyzing-bubble') && !el.querySelector('.inline-ai-error')) {
        const txt = el.querySelector('.inline-ai-bubble')?.innerText?.trim();
        if (txt) priorMsgs.push({ role: 'tutor', text: txt.substring(0, 500) });
      }
    });

    const userMsg = document.createElement('div');
    userMsg.className = 'inline-ai-msg inline-ai-msg-user';
    userMsg.innerHTML = `<div class="inline-ai-bubble">${escapeHtml(query)}</div>`;
    history.appendChild(userMsg);
    input.value = '';

    const loadingId = 'ai-loading-' + Date.now();
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'inline-ai-msg inline-ai-msg-bot';
    loadingMsg.id = loadingId;
    loadingMsg.innerHTML = `<div class="inline-ai-bubble ai-analyzing-bubble">Analyzing<span class="ai-typing-dots"><span>.</span><span>.</span><span>.</span></span></div>`;
    history.appendChild(loadingMsg);
    history.scrollTop = history.scrollHeight;

    const trimmedQuery = query.trim();
    const isGreeting = /^(hi|hello|hey|hola|good\s*(morning|afternoon|evening)|sup)\b/i.test(trimmedQuery);

    let contextPrompt = '';
    if (isGreeting) {
      contextPrompt = `Student says: "${trimmedQuery}".
Respond warmly in 1-2 friendly sentences. Ask what math doubt or concept they need help with. Do not lecture or explain anything unprompted.`;
    } else {
      contextPrompt = `Student's Question: "${trimmedQuery}"\n\n`;

      if (priorMsgs.length > 0) {
        contextPrompt += `Prior Thread Context:\n`;
        priorMsgs.slice(-3).forEach(m => {
          contextPrompt += `${m.role === 'student' ? 'Student' : 'Tutor'}: ${m.text}\n`;
        });
        contextPrompt += `\n`;
      }

      if (qTitle && (trimmedQuery.toLowerCase().includes('this') || trimmedQuery.toLowerCase().includes('problem') || trimmedQuery.toLowerCase().includes('step') || trimmedQuery.toLowerCase().includes('here'))) {
        contextPrompt += `Card Context: Topic is "${qTitle}"\n`;
        if (qSolution) {
          contextPrompt += `Card Steps:\n${qSolution.substring(0, 400)}\n\n`;
        }
      }

      contextPrompt += `Strict Rule: Answer ONLY what the student asked above directly, clearly, and concisely. No filler, no unsolicited exam marks, and no blabber.`;
    }

    try {
      const responseText = await callAIWithCascade(contextPrompt);
      const target = document.getElementById(loadingId);
      if (target) {
        target.innerHTML = `<div class="inline-ai-bubble">${formatResponse(responseText)}</div>`;
        if (window.renderMathInElement) {
          renderMathInElement(target, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
              { left: '\\[', right: '\\]', display: true },
              { left: '\\(', right: '\\)', display: false },
              { left: '\\begin{aligned}', right: '\\end{aligned}', display: true },
              { left: '\\begin{matrix}', right: '\\end{matrix}', display: true },
              { left: '\\begin{pmatrix}', right: '\\end{pmatrix}', display: true },
              { left: '\\begin{bmatrix}', right: '\\end{bmatrix}', display: true },
              { left: '\\begin{vmatrix}', right: '\\end{vmatrix}', display: true },
              { left: '\\begin{cases}', right: '\\end{cases}', display: true },
              { left: '\\begin{array}', right: '\\end{array}', display: true },
              { left: '\\begin{gather}', right: '\\end{gather}', display: true },
              { left: '\\begin{align}', right: '\\end{align}', display: true }
            ],
            throwOnError: false
          });
        }
      }
    } catch (err) {
      const target = document.getElementById(loadingId);
      if (target) {
        target.innerHTML = `<div class="inline-ai-bubble inline-ai-error" style="color:#b91c1c; background:#fef2f2; border:1px solid #fecaca; padding:10px 14px; border-radius:10px; font-size:13px; line-height:1.45;"><strong>AI Service Notice:</strong> ${escapeHtml(err.message)}.<br><span style="font-size:11.5px; color:#7f1d1d;">No fake responses are generated. Please check your internet or try selecting another free model from the model selector above.</span></div>`;
      }
    }

    history.scrollTop = history.scrollHeight;
  }

  async function callAIWithCascade(userQuery) {
    if (selectedProvider === 'openrouter') {
      try {
        return await callOpenRouterCascade(userQuery);
      } catch (e) {
        return await callGeminiCascade(userQuery);
      }
    } else {
      try {
        return await callGeminiCascade(userQuery);
      } catch (e) {
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
        const timeoutId = setTimeout(() => controller.abort(), 12000);

        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: `${SYSTEM_PROMPT}\n\n${userQuery}` }] }],
            generationConfig: {
              maxOutputTokens: 1800,
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
        if (res.status === 429) {
          throw new Error('Rate limit (429) - auto-switching to OpenRouter');
        }
        lastError = new Error(`HTTP ${res.status}`);
      } catch (e) {
        lastError = e;
      }
    }
    throw lastError || new Error("Connection busy.");
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
        const timeoutId = setTimeout(() => controller.abort(), 12000);

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
            max_tokens: 1800,
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
        if (res.status === 429) {
          throw new Error('Rate limit (429) - auto-switching to Google Gemini');
        }
        lastError = new Error(`HTTP ${res.status}`);
      } catch (e) {
        lastError = e;
      }
    }
    throw lastError || new Error("Connection busy.");
  }

  function cleanAIOutput(text) {
    if (!text) return "";
    let cleaned = text;

    cleaned = cleaned.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();

    if (cleaned.startsWith("Here's a thinking process:")) {
      const doubleBreak = cleaned.indexOf("\n\n");
      if (doubleBreak !== -1) {
        cleaned = cleaned.substring(doubleBreak + 2).trim();
      }
    }

    return cleaned || text;
  }

  // Auto-normalizes uppercase LaTeX syntax and wraps standalone math environments
  function normalizeLatexSyntax(str) {
    if (!str) return '';
    let s = str;

    // 1. Fix malformed trailing backslash before closing dollar, e.g. \in \$ -> \in \mathbb{F}$
    s = s.replace(/\\in\s*\\(?=\$)/gi, '\\in \\mathbb{F}');
    // 2. Strip any stray backslash immediately preceding a math dollar delimiter (\$ -> $)
    s = s.replace(/\\(?=\$)/g, '');

    // 3. Normalize environment delimiters: \BEGIN{ALIGNED} -> \begin{aligned}
    s = s.replace(/\\BEGIN\{([a-zA-Z0-9*]+)\}/gi, (m, env) => '\\begin{' + env.toLowerCase() + '}');
    s = s.replace(/\\END\{([a-zA-Z0-9*]+)\}/gi, (m, env) => '\\end{' + env.toLowerCase() + '}');

    // 4. Standardize bracket/parenthesis display delimiters: \[ ... \] -> $$ ... $$
    s = s.replace(/\\\[([\s\S]*?)\\\]/g, '$$$$ $1 $$$$');
    s = s.replace(/\\\(([\s\S]*?)\\\)/g, '$$ $1 $$');

    // 5. Normalize uppercase LaTeX commands and Greek symbols
    const cmdMap = {
      'ALPHA': 'alpha', 'BETA': 'beta', 'GAMMA': 'gamma', 'DELTA': 'delta',
      'EPSILON': 'epsilon', 'VAREPSILON': 'varepsilon', 'ZETA': 'zeta', 'ETA': 'eta',
      'THETA': 'theta', 'VARTHETA': 'vartheta', 'IOTA': 'iota', 'KAPPA': 'kappa',
      'LAMBDA': 'lambda', 'MU': 'mu', 'NU': 'nu', 'XI': 'xi', 'PI': 'pi',
      'RHO': 'rho', 'VARHO': 'varrho', 'SIGMA': 'sigma', 'VARSIGMA': 'varsigma',
      'TAU': 'tau', 'UPSILON': 'upsilon', 'PHI': 'phi', 'VARPHI': 'varphi',
      'CHI': 'chi', 'PSI': 'psi', 'OMEGA': 'omega',
      'IN': 'in', 'NOTIN': 'notin', 'SUBSET': 'subset', 'SUBSETEQ': 'subseteq',
      'SUPSET': 'supset', 'SUPSETEQ': 'supseteq',
      'CUP': 'cup', 'CAP': 'cap', 'SETMINUS': 'setminus', 'TIMES': 'times',
      'CDOT': 'cdot', 'LEQ': 'le', 'GEQ': 'ge', 'NEQ': 'ne', 'APPROX': 'approx',
      'EQUIV': 'equiv', 'PM': 'pm', 'MP': 'mp', 'FORALL': 'forall',
      'EXISTS': 'exists', 'NOT': 'neg', 'TO': 'to', 'RIGHTARROW': 'rightarrow',
      'LEFTARROW': 'leftarrow', 'LRARROW': 'leftrightarrow', 'IFF': 'iff',
      'IMPLIES': 'implies', 'MATHBB': 'mathbb', 'MATHCAL': 'mathcal',
      'MATHRM': 'mathrm', 'MATHBF': 'mathbf', 'TEXT': 'text',
      'FRAC': 'frac', 'DFRAC': 'dfrac', 'SQRT': 'sqrt', 'SUM': 'sum',
      'PROD': 'prod', 'INT': 'int', 'PARTIAL': 'partial', 'NABLA': 'nabla',
      'INFTY': 'infty', 'LEFT': 'left', 'RIGHT': 'right',
      'OVERLINE': 'overline', 'HAT': 'hat', 'VEC': 'vec',
      'DET': 'det', 'DIM': 'dim', 'KER': 'ker', 'RAN': 'operatorname{Ran}',
      'RANK': 'operatorname{rank}', 'SPAN': 'operatorname{span}',
      'COL': 'operatorname{Col}', 'ROW': 'operatorname{Row}',
      'NULL': 'operatorname{Null}', 'TRACE': 'operatorname{Tr}',
      'QUAD': 'quad', 'QQUAD': 'qquad'
    };

    for (const [u, l] of Object.entries(cmdMap)) {
      const re = new RegExp('\\\\(' + u + ')(?![a-zA-Z])', 'g');
      s = s.replace(re, '\\' + l);
    }

    // 6. Generic catch-all: any remaining all-caps LaTeX command with 2+ letters (\TEXT, \QUAD, \CDOT, etc.)
    s = s.replace(/\\([A-Z]{2,})(?![a-zA-Z])/g, (m, cmd) => '\\' + cmd.toLowerCase());

    // 7. Auto-wrap standalone LaTeX environments in $$ ... $$ if not already delimited
    const envs = 'aligned|matrix|pmatrix|bmatrix|vmatrix|Vmatrix|cases|array|gather|align';
    const envPattern = new RegExp('(\\\\begin\\{(?:' + envs + ')\\}[\\s\\S]*?\\\\end\\{(?:' + envs + ')\\})', 'g');
    s = s.replace(envPattern, (match, envBody, offset, fullStr) => {
      const before = fullStr.substring(Math.max(0, offset - 10), offset).trim();
      const after = fullStr.substring(offset + match.length, offset + match.length + 10).trim();
      if (before.endsWith('$$') || after.startsWith('$$')) {
        return match;
      }
      return '\n\n$$\n' + match.trim() + '\n$$\n\n';
    });

    return s;
  }

  // Auto-repairs cut-off LaTeX equations (e.g. unclosed \begin{pmatrix} or unclosed $)
  function repairUnclosedMath(text) {
    if (!text) return "";
    let repaired = text;

    // Check environment tags (\begin{pmatrix}, \begin{matrix}, \begin{aligned})
    const beginMatches = repaired.match(/\\begin\{([a-zA-Z0-9*]+)\}/g) || [];
    const endMatches = repaired.match(/\\end\{([a-zA-Z0-9*]+)\}/g) || [];

    if (beginMatches.length > endMatches.length) {
      const diff = beginMatches.length - endMatches.length;
      for (let i = 0; i < diff; i++) {
        const lastBegin = beginMatches[beginMatches.length - 1 - i];
        const envName = lastBegin.replace(/\\begin\{|\}/g, '');
        repaired += `\\end{${envName}}`;
      }
    }

    // Check display math $$
    const doubleDollarCount = (repaired.match(/\$\$/g) || []).length;
    if (doubleDollarCount % 2 !== 0) {
      repaired += '$$';
    }

    // Check inline math $
    const withoutDouble = repaired.replace(/\$\$/g, '');
    const singleDollarCount = (withoutDouble.match(/(?<!\\)\$/g) || []).length;
    if (singleDollarCount % 2 !== 0) {
      repaired += '$';
    }

    return repaired;
  }

  // Full Rich Markdown, Table, and Prose Formatter (preserves LaTeX $...$ and $$...$$)
  function formatResponse(text) {
    if (!text) return "";

    // 0. Auto-normalize uppercase LaTeX and wrap standalone environments
    let processed = normalizeLatexSyntax(text);

    // 1. Repair any unclosed mathematical environments first
    processed = repairUnclosedMath(processed);

    // 2. Stash Math blocks ($$...$$ and $...$) so regex doesn't interfere
    const mathBlocks = [];
    processed = processed.replace(/\$\$[\s\S]*?\$\$/g, (match) => {
      mathBlocks.push(match);
      return `%%%MATHBLOCK_${mathBlocks.length - 1}%%%`;
    });
    processed = processed.replace(/\$[^\$\n]+?\$/g, (match) => {
      mathBlocks.push(match);
      return `%%%MATHBLOCK_${mathBlocks.length - 1}%%%`;
    });

    // 2. Parse Markdown Tables
    const lines = processed.split('\n');
    const newLines = [];
    let inTable = false;
    let tableRows = [];

    function flushTable() {
      if (!tableRows.length) return "";
      let html = '<div class="ai-table-wrap"><table class="ai-table">';
      let isHeader = true;
      for (const row of tableRows) {
        if (/^\s*\|?(\s*:?-+:?\s*\|)+\s*:?-+:?\s*\|?\s*$/.test(row)) {
          isHeader = false;
          continue;
        }
        const cells = row.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
        const tag = isHeader ? 'th' : 'td';
        html += '<tr>' + cells.map(c => `<${tag}>${c}</${tag}>`).join('') + '</tr>';
      }
      html += '</table></div>';
      return html;
    }

    for (const line of lines) {
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        inTable = true;
        tableRows.push(line);
      } else {
        if (inTable) {
          newLines.push(flushTable());
          inTable = false;
          tableRows = [];
        }
        newLines.push(line);
      }
    }
    if (inTable) {
      newLines.push(flushTable());
    }

    processed = newLines.join('\n');

    // 3. Headings (supports # through ###### with optional leading whitespace)
    processed = processed.replace(/^\s*######\s*(.*?)$/gm, '<h6 class="ai-h6">$1</h6>');
    processed = processed.replace(/^\s*#####\s*(.*?)$/gm, '<h5 class="ai-h5">$1</h5>');
    processed = processed.replace(/^\s*####\s*(.*?)$/gm, '<h4 class="ai-h4">$1</h4>');
    processed = processed.replace(/^\s*###\s*(.*?)$/gm, '<h4 class="ai-h4">$1</h4>');
    processed = processed.replace(/^\s*##\s*(.*?)$/gm, '<h3 class="ai-h3">$1</h3>');
    processed = processed.replace(/^\s*#\s*(.*?)$/gm, '<h2 class="ai-h2">$1</h2>');

    // Any remaining stray markdown header hashes at start of line
    processed = processed.replace(/^\s*#{1,6}\s*/gm, '');

    // 4. Horizontal Rules
    processed = processed.replace(/^---+\s*$/gm, '<hr class="ai-hr">');

    // 5. Bold & Italic
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // 6. Bullet lists
    processed = processed.replace(/^[*\-]\s+(.*?)$/gm, '<li class="ai-li">$1</li>');
    processed = processed.replace(/((?:<li class="ai-li">.*?<\/li>\s*)+)/g, '<ul class="ai-ul">$1</ul>');

    // 7. Numbered lists
    processed = processed.replace(/^\d+\.\s+(.*?)$/gm, '<li class="ai-oli">$1</li>');
    processed = processed.replace(/((?:<li class="ai-oli">.*?<\/li>\s*)+)/g, '<ol class="ai-ol">$1</ol>');

    // 8. Paragraph spacing & clean breaks
    processed = processed.replace(/\n{2,}/g, '<br><br>');
    processed = processed.replace(/(?<!<br>)\n/g, '<br>');
    processed = processed.replace(/<br>\s*<(h[2-6]|ul|ol|div|hr)/g, '<$1');
    processed = processed.replace(/<\/(h[2-6]|ul|ol|div|hr)>\s*<br>/g, '</$1>');

    // 9. Restore Math blocks (split/join ensures $$ is never swallowed by regex escape)
    mathBlocks.forEach((block, idx) => {
      processed = processed.split(`%%%MATHBLOCK_${idx}%%%`).join(block);
    });

    return processed;
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
    formatResponse,
    MODEL_CATALOG
  };
})();

// Global wrappers for onclick/onkeypress events in HTML cards
window.sendInlineQuery = function(elem) {
  if (window.AITutor && window.AITutor.askInline) {
    window.AITutor.askInline(elem);
  }
};
window.askInlineAI = window.sendInlineQuery;

