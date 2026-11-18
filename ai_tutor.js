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

  const SYSTEM_PROMPT = `You are an expert, interactive AI mathematics tutor for university course 23MA1302 - Linear Algebra and Numerical Analysis.
Your core mission is to help the student truly grasp, understand, and master every concept and problem.

Chatbot & Tutoring Instructions:
1. Listen & Answer Directly:
   - Always respond directly to what the student is asking in their current message.
   - Do NOT default to, assume, or force specific topics (such as subspaces, vectors, etc.) unless the student's question specifically asks about them.
   - If the student sends a greeting ("hi", "hello"), reply warmly, helpfully, and ask what math concept or problem they would like to explore today.
2. Make the Student Understand:
   - When a student asks a doubt, says "I don't understand", asks for simple terms, or asks "why": meet them at their level like an empathetic human teacher. Break it down into simple, intuitive concepts, use visual/geometric intuition (e.g. arrows, coordinate spaces, transformations), and explain the "big picture" reason before writing formulas.
   - Clarify common pitfalls and explicitly answer the specific question they asked.
3. Complete, Non-Truncated Mathematics:
   - When providing derivations, proofs, or numerical calculations: provide fully completed, rigorous, step-by-step mathematical solutions. NEVER truncate calculations or stop mid-equation. Always state final numerical answers and conclusions.
   - Break long equations across multiple lines using separate $$...$$ blocks or \\begin{aligned} ... \\end{aligned} so they fit comfortably on mobile screens without horizontal clipping.
4. Clean Presentation:
   - Do NOT output internal reasoning logs, scratchpad processes, or <think> tags.
   - Use Markdown tables (| Col 1 | Col 2 |) when presenting comparison data, normal equations, or property checks.
   - Format all mathematical expressions in standard LaTeX ($...$ inline, $$...$$ display).
   - ALWAYS use standard lowercase LaTeX syntax (e.g. \\alpha, \\beta, \\in, \\mathbb{R}, \\frac, \\begin{aligned} ... \\end{aligned}). NEVER write LaTeX commands in uppercase like \\BEGIN{ALIGNED} or \\ALPHA.
   - ALWAYS enclose multi-line equations in $$ ... $$ and inline expressions in $ ... $.
   - Use bold text or standard headings for clean hierarchy.
5. University Exam Standards:
   - Highlight essential exam formulas, scoring rubrics, and mark allocation tips relevant to university semester evaluations.`;

  function syncDropdowns() {
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

    let contextPrompt = `Course: Linear Algebra and Numerical Analysis (23MA1302)\n`;
    if (qTitle) contextPrompt += `Problem: ${qTitle}\n`;
    if (qSolution) contextPrompt += `Reference Material/Working:\n${qSolution.substring(0, 600)}\n`;

    if (priorMsgs.length > 0) {
      contextPrompt += `\nPrior Discussion in this Thread:\n`;
      priorMsgs.slice(-4).forEach(m => {
        contextPrompt += `${m.role === 'student' ? 'Student' : 'Tutor'}: ${m.text}\n`;
      });
    }

    contextPrompt += `\nStudent's Latest Doubt/Message: "${query}"\n\n`;
    contextPrompt += `Tutor Action Required:
- Directly address the student's doubt.
- If they express confusion, say they don't understand, or ask for simple terms, explain the underlying intuition, geometric/physical concept, and step-by-step logic in plain, easy-to-understand terms so it clicks!
- If they ask for steps or calculations, provide complete, fully worked-out mathematics without truncation.
- Strictly genuine AI response only, zero fake text.`;

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

    // 1. Normalize environment delimiters: \BEGIN{ALIGNED} -> \begin{aligned}
    s = s.replace(/\\BEGIN\{([a-zA-Z0-9*]+)\}/gi, (m, env) => '\\begin{' + env.toLowerCase() + '}');
    s = s.replace(/\\END\{([a-zA-Z0-9*]+)\}/gi, (m, env) => '\\end{' + env.toLowerCase() + '}');

    // 2. Standardize bracket/parenthesis display delimiters: \[ ... \] -> $$ ... $$
    s = s.replace(/\\\[([\s\S]*?)\\\]/g, '$$$$ $1 $$$$');
    s = s.replace(/\\\(([\s\S]*?)\\\)/g, '$$ $1 $$');

    // 3. Normalize uppercase LaTeX commands and Greek symbols
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

    // 4. Auto-wrap standalone LaTeX environments in $$ ... $$ if not already delimited
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

