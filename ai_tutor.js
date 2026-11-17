// LANA AI Math Tutor Assistant
// Integrates with OpenRouter (Free models) and Google Gemini API

window.AITutor = (function() {
  const DEFAULT_KEY = "";
  let apiKey = localStorage.getItem("lana_ai_key") || "";
  let selectedModel = localStorage.getItem("lana_ai_model") || "google/gemini-2.0-flash-exp:free";

  const SYSTEM_PROMPT = `You are the expert AI Tutor for the course 23MA1302 - Linear Algebra and Numerical Analysis (Anna University R2021 / Panimalar Autonomous).
Your job is to explain mathematical steps line-by-line, solve doubts on Vector Spaces (Unit 1), Linear Transformations (Unit 2), and Inner Product Spaces (Unit 3).
Always provide crystal-clear derivations, highlight 'Why we do this step', and output all mathematical notation in clean LaTeX ($...$ for inline, $$...$$ for block). Keep tone encouraging, rigorous, and exam-focused.`;

  function init() {
    renderUI();
    setupEvents();
  }

  function renderUI() {
    const tutorHTML = `
      <!-- Floating AI Tutor Button -->
      <button id="aiTutorBtn" class="ai-floating-btn" title="Ask AI Math Tutor">
        <span class="ai-btn-icon">🤖</span>
        <span class="ai-btn-text">Ask AI Tutor</span>
      </button>

      <!-- AI Tutor Drawer / Modal -->
      <div id="aiDrawer" class="ai-drawer">
        <div class="ai-drawer-header">
          <div class="ai-drawer-title">
            <span class="ai-header-icon">🤖</span>
            <div>
              <h3>LANA AI Math Assistant</h3>
              <p>Anna University 23MA1302 Step-by-Step Solver</p>
            </div>
          </div>
          <button id="aiCloseBtn" class="ai-close-btn">&times;</button>
        </div>

        <div class="ai-config-bar">
          <div class="ai-config-item">
            <label>Model:</label>
            <select id="aiModelSelect" class="ai-select">
              <optgroup label="OpenRouter Free Models">
                <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free)</option>
                <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
                <option value="deepseek/deepseek-r1:free">DeepSeek R1 Reasoning (Free)</option>
                <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
                <option value="mistralai/mistral-7b-instruct:free">Mistral 7B (Free)</option>
              </optgroup>
              <optgroup label="Google Gemini Direct">
                <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
                <option value="gemini-1.5-flash">Gemini 1.5 Flash</option>
              </optgroup>
            </select>
          </div>
          <div class="ai-config-item">
            <label>API Key:</label>
            <input type="password" id="aiKeyInput" class="ai-key-input" value="${apiKey}" placeholder="OpenRouter or Gemini Key" />
          </div>
        </div>

        <div class="ai-quick-prompts">
          <button class="ai-chip" onclick="window.AITutor.sendQuickPrompt('Explain Step 2 of Gram-Schmidt Orthogonalization in Unit 3 line-by-line.')">💡 Gram-Schmidt Step 2</button>
          <button class="ai-chip" onclick="window.AITutor.sendQuickPrompt('Why is determinant |A| != 0 required to prove vectors form a Basis in R^3?')">🔍 Why |A| != 0 for Basis?</button>
          <button class="ai-chip" onclick="window.AITutor.sendQuickPrompt('How do I verify the Rank-Nullity Dimension Theorem for T: R^3 -> R^2?')">📐 Rank-Nullity Proof</button>
        </div>

        <div id="aiChatBody" class="ai-chat-body">
          <div class="ai-msg ai-msg-bot">
            <div class="ai-msg-bubble">
              👋 Hello! I am your <strong>23MA1302 LANA AI Tutor</strong>.<br>
              Touch any question or ask me to explain any equation, step, or proof line-by-line across Unit 1, Unit 2, and Unit 3!
            </div>
          </div>
        </div>

        <div class="ai-input-bar">
          <input type="text" id="aiInput" class="ai-input" placeholder="Ask a doubt or paste an equation..." />
          <button id="aiSendBtn" class="ai-send-btn">Send</button>
        </div>
      </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = tutorHTML;
    document.body.appendChild(div);
  }

  function setupEvents() {
    const btn = document.getElementById('aiTutorBtn');
    const drawer = document.getElementById('aiDrawer');
    const closeBtn = document.getElementById('aiCloseBtn');
    const sendBtn = document.getElementById('aiSendBtn');
    const input = document.getElementById('aiInput');
    const keyInput = document.getElementById('aiKeyInput');
    const modelSelect = document.getElementById('aiModelSelect');

    modelSelect.value = selectedModel;

    btn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      if (drawer.classList.contains('open')) input.focus();
    });

    closeBtn.addEventListener('click', () => drawer.classList.remove('open'));

    keyInput.addEventListener('change', (e) => {
      apiKey = e.target.value.trim();
      localStorage.setItem("lana_ai_key", apiKey);
    });

    modelSelect.addEventListener('change', (e) => {
      selectedModel = e.target.value;
      localStorage.setItem("lana_ai_model", selectedModel);
    });

    sendBtn.addEventListener('click', () => handleSend());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  async function handleSend() {
    const input = document.getElementById('aiInput');
    const query = input.value.trim();
    if (!query) return;

    appendMessage('user', query);
    input.value = '';

    const chatBody = document.getElementById('aiChatBody');
    const loadingId = 'loading-' + Date.now();
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'ai-msg ai-msg-bot';
    loadingDiv.id = loadingId;
    loadingDiv.innerHTML = '<div class="ai-msg-bubble"><em>Thinking & solving step-by-step...</em></div>';
    chatBody.appendChild(loadingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
      const response = await callAI(query);
      const target = document.getElementById(loadingId);
      if (target) {
        target.innerHTML = `<div class="ai-msg-bubble">${formatResponse(response)}</div>`;
        if (window.renderMathInElement) {
          renderMathInElement(target, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false }
            ]
          });
        }
      }
    } catch (err) {
      const target = document.getElementById(loadingId);
      if (target) {
        target.innerHTML = `<div class="ai-msg-bubble" style="color:#b91c1c;">⚠️ Error: ${err.message}. Please check your API key or model selection.</div>`;
      }
    }
    chatBody.scrollTop = chatBody.scrollHeight;
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
            { role: 'user', parts: [{ text: `${SYSTEM_PROMPT}\n\nStudent Query: ${userQuery}` }] }
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

  function appendMessage(role, text) {
    const chatBody = document.getElementById('aiChatBody');
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-msg ${role === 'user' ? 'ai-msg-user' : 'ai-msg-bot'}`;
    msgDiv.innerHTML = `<div class="ai-msg-bubble">${escapeHtml(text)}</div>`;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function formatResponse(text) {
    // Basic Markdown converter for bold, code, linebreaks
    let formatted = text
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return formatted;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function sendQuickPrompt(promptText) {
    const input = document.getElementById('aiInput');
    input.value = promptText;
    handleSend();
  }

  return { init, sendQuickPrompt };
})();

document.addEventListener('DOMContentLoaded', () => {
  window.AITutor.init();
});
