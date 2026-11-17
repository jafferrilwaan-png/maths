// UNIT 3: Inner Product Spaces
window.UNIT3_DATA = {
  title: "Unit-III: Inner Product Spaces",
  desc: "Complete Question Bank + Class Notes derivations for Inner Products, Norms, Gram-Schmidt Orthogonalization, Cauchy-Schwarz, and Orthogonal Complements.",
  partA: String.raw`
<div class="section-badge">Part 1: Official Question Bank 2-Marks (Unit III)</div>

      <!-- Q1 -->
      <div class="question-card" data-category="innerproduct">
        <div class="card-top">
          <span class="q-pill">QB • Q1</span>
          <div class="q-heading">Define an Inner Product and an Inner Product Space.</div>
        </div>
        <div class="solution-content">
          <p>Let $V$ be a vector space over $\mathbb{R}$ (or $\mathbb{C}$). An <strong>Inner Product</strong> on $V$ is a function $\langle \cdot, \cdot \rangle: V \times V \to \mathbb{R}$ satisfying for all $u, v, w \in V$ and $\alpha \in \mathbb{R}$:<br>
          1. <strong>Linearity in 1st argument:</strong> $\langle \alpha u + v, w \rangle = \alpha \langle u, w \rangle + \langle v, w \rangle$<br>
          2. <strong>Symmetry (Conjugate Symmetry):</strong> $\langle u, v \rangle = \langle v, u \rangle$<br>
          3. <strong>Positive Definiteness:</strong> $\langle u, u \rangle \ge 0$, and $\langle u, u \rangle = 0 \iff u = 0$.<br>
          A vector space $V$ equipped with an inner product is called an <strong>Inner Product Space (IPS)</strong>.</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <!-- Inline AI Explanation Section (Matrix Dot UI) -->
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
                      <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
                      <option value="gemini">Google Gemini API</option>
                      <option value="ollama">Ollama (Local Offline)</option>
                    </select>
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free)</option>
                      <option value="google/gemini-2.0-flash-thinking-exp:free">Gemini 2.0 Flash Thinking (Free)</option>
                      <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
                      <option value="deepseek/deepseek-r1:free">DeepSeek R1 (Free)</option>
                      <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
                      <option value="liquid/lfm-40b:free">Liquid LFM 40B (Free)</option>
                      <option value="mistralai/mistral-small-24b-instruct-2501:free">Mistral Small 24B (Free)</option>
                      <option value="mistralai/mistral-7b-instruct:free">Mistral 7B (Free)</option>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Q2 -->
</div>
<div class="question-card" data-category="orthogonality">
        <div class="card-top">
          <span class="q-pill">QB • Q2</span>
          <div class="q-heading">Let $P_2$ have the inner product $\langle p, q \rangle = \int_{-1}^1 p(x)q(x)\,dx$. Find the angle between $p = x$ and $q = x^2$.</div>
        </div>
        <div class="solution-content">
          <p>Angle formula: $\cos \theta = \frac{\langle p, q \rangle}{\|p\| \|q\|}$.<br>
          Compute the inner product:
          $$\langle p, q \rangle = \int_{-1}^1 (x)(x^2)\,dx = \int_{-1}^1 x^3\,dx$$
          Since $f(x) = x^3$ is an <strong>odd function</strong> and the integration interval $[-1, 1]$ is symmetric about the origin:
          $$\int_{-1}^1 x^3\,dx = 0 \implies \langle p, q \rangle = 0$$
          Therefore:
          $$\cos \theta = \frac{0}{\|p\| \|q\|} = 0 \implies \theta = \frac{\pi}{2} = 90^\circ$$
          <span class="tag-result">Conclusion: The angle is $90^\circ$ ($\frac{\pi}{2}$ radians). The polynomials are orthogonal.</span></p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <!-- Inline AI Explanation Section (Matrix Dot UI) -->
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
                      <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
                      <option value="gemini">Google Gemini API</option>
                      <option value="ollama">Ollama (Local Offline)</option>
                    </select>
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free)</option>
                      <option value="google/gemini-2.0-flash-thinking-exp:free">Gemini 2.0 Flash Thinking (Free)</option>
                      <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
                      <option value="deepseek/deepseek-r1:free">DeepSeek R1 (Free)</option>
                      <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
                      <option value="liquid/lfm-40b:free">Liquid LFM 40B (Free)</option>
                      <option value="mistralai/mistral-small-24b-instruct-2501:free">Mistral Small 24B (Free)</option>
                      <option value="mistralai/mistral-7b-instruct:free">Mistral 7B (Free)</option>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Q3 -->
</div>
<div class="question-card" data-category="orthogonality">
        <div class="card-top">
          <span class="q-pill">QB • Q3</span>
          <div class="q-heading">If $\{a, b\}$ is an orthonormal set, what is the distance between $a$ and $b$?</div>
        </div>
        <div class="solution-content">
          <p>Since $\{a, b\}$ is an orthonormal set, by definition:<br>
          • $\|a\| = 1$ and $\|b\| = 1$ (Unit vectors)<br>
          • $\langle a, b \rangle = 0$ (Orthogonal)<br><br>
          Distance formula: $d(a, b) = \|a - b\| = \sqrt{\langle a - b, a - b \rangle}$:
          $$\|a - b\|^2 = \langle a - b, a - b \rangle = \langle a, a \rangle - \langle a, b \rangle - \langle b, a \rangle + \langle b, b \rangle$$
          $$\|a - b\|^2 = \|a\|^2 - 2\langle a, b \rangle + \|b\|^2 = 1^2 - 2(0) + 1^2 = 2$$
          $$d(a, b) = \|a - b\| = \sqrt{2}$$
          <span class="tag-result">Final Answer: The distance is $\sqrt{2}$.</span></p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <!-- Inline AI Explanation Section (Matrix Dot UI) -->
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
                      <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
                      <option value="gemini">Google Gemini API</option>
                      <option value="ollama">Ollama (Local Offline)</option>
                    </select>
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free)</option>
                      <option value="google/gemini-2.0-flash-thinking-exp:free">Gemini 2.0 Flash Thinking (Free)</option>
                      <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
                      <option value="deepseek/deepseek-r1:free">DeepSeek R1 (Free)</option>
                      <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
                      <option value="liquid/lfm-40b:free">Liquid LFM 40B (Free)</option>
                      <option value="mistralai/mistral-small-24b-instruct-2501:free">Mistral Small 24B (Free)</option>
                      <option value="mistralai/mistral-7b-instruct:free">Mistral 7B (Free)</option>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Q4 -->
</div>
<div class="question-card" data-category="norm">
        <div class="card-top">
          <span class="q-pill">QB • Q4</span>
          <div class="q-heading">Define Norm and state its three defining properties.</div>
        </div>
        <div class="solution-content">
          <p>In an inner product space $V$, the <strong>Norm</strong> (or length) of a vector $u$, denoted by $\|u\|$, is defined as:
          $$\|u\| = \sqrt{\langle u, u \rangle}$$
          It satisfies the following 3 axioms for all $u, v \in V$ and $\alpha \in \mathbb{R}$:<br>
          1. <strong>Positivity:</strong> $\|u\| \ge 0$, and $\|u\| = 0 \iff u = 0$.<br>
          2. <strong>Homogeneity:</strong> $\|\alpha u\| = |\alpha| \|u\|$.<br>
          3. <strong>Triangle Inequality:</strong> $\|u + v\| \le \|u\| + \|v\|$.\n</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <!-- Inline AI Explanation Section (Matrix Dot UI) -->
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
                      <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
                      <option value="gemini">Google Gemini API</option>
                      <option value="ollama">Ollama (Local Offline)</option>
                    </select>
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free)</option>
                      <option value="google/gemini-2.0-flash-thinking-exp:free">Gemini 2.0 Flash Thinking (Free)</option>
                      <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
                      <option value="deepseek/deepseek-r1:free">DeepSeek R1 (Free)</option>
                      <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
                      <option value="liquid/lfm-40b:free">Liquid LFM 40B (Free)</option>
                      <option value="mistralai/mistral-small-24b-instruct-2501:free">Mistral Small 24B (Free)</option>
                      <option value="mistralai/mistral-7b-instruct:free">Mistral 7B (Free)</option>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Q5 -->
</div>
<div class="question-card" data-category="norm">
        <div class="card-top">
          <span class="q-pill">QB • Q5</span>
          <div class="q-heading">State the Cauchy-Schwarz Inequality and condition for equality.</div>
        </div>
        <div class="solution-content">
          <p><strong>Cauchy-Schwarz Inequality:</strong> Let $V$ be an inner product space. For any vectors $u, v \in V$:
          $$|\langle u, v \rangle| \le \|u\| \|v\|$$
          Furthermore, equality holds ($|\langle u, v \rangle| = \|u\| \|v\|$) <strong>if and only if</strong> $u$ and $v$ are linearly dependent (i.e., one is a scalar multiple of the other: $u = c v$).</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <!-- Inline AI Explanation Section (Matrix Dot UI) -->
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
                      <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
                      <option value="gemini">Google Gemini API</option>
                      <option value="ollama">Ollama (Local Offline)</option>
                    </select>
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free)</option>
                      <option value="google/gemini-2.0-flash-thinking-exp:free">Gemini 2.0 Flash Thinking (Free)</option>
                      <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
                      <option value="deepseek/deepseek-r1:free">DeepSeek R1 (Free)</option>
                      <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
                      <option value="liquid/lfm-40b:free">Liquid LFM 40B (Free)</option>
                      <option value="mistralai/mistral-small-24b-instruct-2501:free">Mistral Small 24B (Free)</option>
                      <option value="mistralai/mistral-7b-instruct:free">Mistral 7B (Free)</option>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Q6 -->
</div>
<div class="question-card" data-category="orthogonality">
        <div class="card-top">
          <span class="q-pill">QB • Q6</span>
          <div class="q-heading">For any non-zero vector $x \in V$, prove that $y = \frac{x}{\|x\|}$ is a unit vector.</div>
        </div>
        <div class="solution-content">
          <p>Let $x \in V$ with $x \neq 0 \implies \|x\| > 0$.<br>
          Consider $y = \frac{x}{\|x\|} = \frac{1}{\|x\|} x$. Here $\alpha = \frac{1}{\|x\|}$ is a real scalar.<br>
          Using the norm homogeneity property $\|\alpha x\| = |\alpha| \|x\|$:
          $$\|y\| = \left\| \frac{1}{\|x\|} x \right\| = \left| \frac{1}{\|x\|} \right| \|x\|$$
          Since $\|x\| > 0$, $\left| \frac{1}{\|x\|} \right| = \frac{1}{\|x\|}$:
          $$\|y\| = \frac{1}{\|x\|} \|x\| = 1$$
          <span class="tag-result">Hence proved: $y$ is a unit vector ($\|y\| = 1$).</span></p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <!-- Inline AI Explanation Section (Matrix Dot UI) -->
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
                      <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
                      <option value="gemini">Google Gemini API</option>
                      <option value="ollama">Ollama (Local Offline)</option>
                    </select>
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free)</option>
                      <option value="google/gemini-2.0-flash-thinking-exp:free">Gemini 2.0 Flash Thinking (Free)</option>
                      <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
                      <option value="deepseek/deepseek-r1:free">DeepSeek R1 (Free)</option>
                      <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
                      <option value="liquid/lfm-40b:free">Liquid LFM 40B (Free)</option>
                      <option value="mistralai/mistral-small-24b-instruct-2501:free">Mistral Small 24B (Free)</option>
                      <option value="mistralai/mistral-7b-instruct:free">Mistral 7B (Free)</option>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Q7 -->
</div>
<div class="question-card" data-category="innerproduct">
        <div class="card-top">
          <span class="q-pill">QB • Q7</span>
          <div class="q-heading">Let $\mathbb{R}^2$ have the weighted Euclidean inner product $\langle u, v \rangle = 2u_1 v_1 + 3u_2 v_2$. If $u = (1, 1), v = (3, 2), w = (0, -1)$, compute $\langle u + v, 3w \rangle$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Step 1: Compute vectors:</strong><br>
          • $u + v = (1+3, 1+2) = (4, 3)$<br>
          • $3w = 3(0, -1) = (0, -3)$<br><br>
          <strong>Step 2: Apply weighted inner product formula:</strong>
          $$\langle u + v, 3w \rangle = 2(u+v)_1 (3w)_1 + 3(u+v)_2 (3w)_2$$
          Substitute values:
          $$\langle u + v, 3w \rangle = 2(4)(0) + 3(3)(-3) = 0 + 3(-9) = -27$$
          <span class="tag-result">Final Answer: $\langle u + v, 3w \rangle = -27$</span></p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <!-- Inline AI Explanation Section (Matrix Dot UI) -->
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
                      <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
                      <option value="gemini">Google Gemini API</option>
                      <option value="ollama">Ollama (Local Offline)</option>
                    </select>
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free)</option>
                      <option value="google/gemini-2.0-flash-thinking-exp:free">Gemini 2.0 Flash Thinking (Free)</option>
                      <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
                      <option value="deepseek/deepseek-r1:free">DeepSeek R1 (Free)</option>
                      <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
                      <option value="liquid/lfm-40b:free">Liquid LFM 40B (Free)</option>
                      <option value="mistralai/mistral-small-24b-instruct-2501:free">Mistral Small 24B (Free)</option>
                      <option value="mistralai/mistral-7b-instruct:free">Mistral 7B (Free)</option>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  
  
    <!-- QB • Q8 -->
</div>
<div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">QB • Q8</span>
        <div class="q-heading">For any non-zero vector $x \in V$, prove that $y = rac{x}{\|x\|}$ is a unit vector, i.e., $\|y\| = 1$.</div>
      </div>
      <div class="solution-content">
        <p><strong>Proof:</strong><br>
        Let $x 
eq 0 \implies \|x\| > 0$. Consider the scalar $c = rac{1}{\|x\|} \in \mathbb{R}$.<br>
        By the scalar homogeneity property of norm:
        $$\|y\| = \left\| rac{1}{\|x\|} x 
ight\| = \left| rac{1}{\|x\|} 
ight| \|x\|$$
        Since $\|x\| > 0$, $\left| rac{1}{\|x\|} 
ight| = rac{1}{\|x\|}$:
        $$\|y\| = rac{1}{\|x\|} \cdot \|x\| = 1$$
        Hence, $y = rac{x}{\|x\|}$ is a unit vector. Q.E.D.</p>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
          <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 1</span>
            <div class="explain-line-title">Homogeneity Property of Norm</div>
            <div class="explain-line-desc">Recall that $\|c x\| = |c| \|x\|$ for any scalar $c \in F$ and vector $x \in V$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 2</span>
            <div class="explain-line-title">Positivity of Scalar Reciprocal</div>
            <div class="explain-line-desc">Because $x 
eq 0$, the norm $\|x\|$ is strictly positive, ensuring scalar factor is non-zero and absolute value is itself.</div>
          </div>
          
      <div class="inline-ai-section">
        <div class="inline-ai-header">
          <div class="inline-ai-title-wrap">
            <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
            <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
          </div>
          <div class="inline-ai-controls">
            <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
              <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
              <option value="gemini">Google Gemini API</option>
              <option value="ollama">Ollama (Local Offline)</option>
            </select>
            <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
              <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free - Recommended)</option>
              <option value="openrouter/free">OpenRouter Auto Free (Fallback)</option>
              <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
              <option value="deepseek/deepseek-r1:free">DeepSeek R1 Reasoning (Free)</option>
              <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
            </select>
          </div>
        </div>
        <div class="inline-ai-chat-history"></div>
        <div class="inline-ai-input-group">
          <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
        </div>
      </div>

        </div>
      </div>
    </div>

    <!-- QB • Q9 -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">QB • Q9</span>
        <div class="q-heading">Define Unit Vector and Norm of a vector in an Inner Product Space.</div>
      </div>
      <div class="solution-content">
        <p><strong>Norm (Length) of a vector:</strong> For any vector $x \in V$, the norm or length of $x$, denoted by $\|x\|$, is defined as the non-negative square root of its self-inner product:
        $$\|x\| = \sqrt{\langle x, x 
angle}$$</p>
        <p style="margin-top:6px;"><strong>Unit Vector:</strong> A vector $u \in V$ is called a <em>unit vector</em> if its norm is equal to 1, i.e., $\|u\| = 1$, or equivalently $\langle u, u 
angle = 1$.</p>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
          <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 1</span>
            <div class="explain-line-title">Geometric Length Generalization</div>
            <div class="explain-line-desc">Norm generalizes the Pythagorean length in Euclidean space to abstract vector spaces.</div>
          </div>
          
      <div class="inline-ai-section">
        <div class="inline-ai-header">
          <div class="inline-ai-title-wrap">
            <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
            <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
          </div>
          <div class="inline-ai-controls">
            <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
              <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
              <option value="gemini">Google Gemini API</option>
              <option value="ollama">Ollama (Local Offline)</option>
            </select>
            <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
              <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free - Recommended)</option>
              <option value="openrouter/free">OpenRouter Auto Free (Fallback)</option>
              <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
              <option value="deepseek/deepseek-r1:free">DeepSeek R1 Reasoning (Free)</option>
              <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
            </select>
          </div>
        </div>
        <div class="inline-ai-chat-history"></div>
        <div class="inline-ai-input-group">
          <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
        </div>
      </div>

        </div>
      </div>
    </div>

    <!-- QB • Q10 -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">QB • Q10</span>
        <div class="q-heading">Let $\mathbb{R}^2$ have the weighted Euclidean inner product $\langle u, v 
angle = 2u_1 v_1 + 3u_2 v_2$. Let $u = (1, 1), v = (3, 2), w = (0, -1)$. Compute the value of $\langle u+v, 3w 
angle$.</div>
      </div>
      <div class="solution-content">
        <p><strong>Step 1: Compute $u+v$ and $3w$:</strong><br>
        $$u + v = (1+3, 1+2) = (4, 3)$$
        $$3w = 3(0, -1) = (0, -3)$$</p>
        <p style="margin-top:6px;"><strong>Step 2: Apply Weighted Inner Product Formula:</strong><br>
        $$\langle (4, 3), (0, -3) 
angle = 2(4)(0) + 3(3)(-3) = 0 + (-27) = -27$$</p>
        <div class="tag-result">Result: $\langle u+v, 3w 
angle = -27$</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
          <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 1</span>
            <div class="explain-line-title">Vector Linear Combinations</div>
            <div class="explain-line-desc">Form componentwise sum $(1+3, 1+2)=(4,3)$ and scalar product $3(0,-1)=(0,-3)$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 2</span>
            <div class="explain-line-title">Weighted Bilinear Evaluation</div>
            <div class="explain-line-desc">Substitute weights $w_1 = 2$ and $w_2 = 3$ to yield $2(4)(0) + 3(3)(-3) = -27$.</div>
          </div>
          
      <div class="inline-ai-section">
        <div class="inline-ai-header">
          <div class="inline-ai-title-wrap">
            <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
            <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
          </div>
          <div class="inline-ai-controls">
            <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
              <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
              <option value="gemini">Google Gemini API</option>
              <option value="ollama">Ollama (Local Offline)</option>
            </select>
            <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
              <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free - Recommended)</option>
              <option value="openrouter/free">OpenRouter Auto Free (Fallback)</option>
              <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
              <option value="deepseek/deepseek-r1:free">DeepSeek R1 Reasoning (Free)</option>
              <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
            </select>
          </div>
        </div>
        <div class="inline-ai-chat-history"></div>
        <div class="inline-ai-input-group">
          <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
        </div>
      </div>

        </div>
      </div>
    </div>

    <!-- Extra • Q11 -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill extra">Extra • Q11</span>
        <div class="q-heading">State the Pythagorean Theorem in an Inner Product Space and prove it for orthogonal vectors.</div>
      </div>
      <div class="solution-content">
        <p><strong>Statement:</strong> If $u$ and $v$ are orthogonal vectors in a real inner product space $V$ ($\langle u, v 
angle = 0$), then:
        $$\|u + v\|^2 = \|u\|^2 + \|v\|^2$$</p>
        <p style="margin-top:6px;"><strong>Proof:</strong><br>
        By definition of norm:
        $$\|u + v\|^2 = \langle u + v, u + v 
angle = \langle u, u 
angle + \langle u, v 
angle + \langle v, u 
angle + \langle v, v 
angle$$
        Since $u \perp v$, $\langle u, v 
angle = \langle v, u 
angle = 0$:
        $$\|u + v\|^2 = \|u\|^2 + 0 + 0 + \|v\|^2 = \|u\|^2 + \|v\|^2$$
        Hence proved. Q.E.D.</p>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
          <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 1</span>
            <div class="explain-line-title">Inner Product Expansion</div>
            <div class="explain-line-desc">Expand $\|u+v\|^2 = \langle u+v, u+v 
angle$ bilinearly into four individual inner products.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 2</span>
            <div class="explain-line-title">Orthogonal Vanishing</div>
            <div class="explain-line-desc">The cross-terms $\langle u, v 
angle$ vanish identically by orthogonality.</div>
          </div>
          
      <div class="inline-ai-section">
        <div class="inline-ai-header">
          <div class="inline-ai-title-wrap">
            <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
            <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
          </div>
          <div class="inline-ai-controls">
            <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
              <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
              <option value="gemini">Google Gemini API</option>
              <option value="ollama">Ollama (Local Offline)</option>
            </select>
            <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
              <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free - Recommended)</option>
              <option value="openrouter/free">OpenRouter Auto Free (Fallback)</option>
              <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
              <option value="deepseek/deepseek-r1:free">DeepSeek R1 Reasoning (Free)</option>
              <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
            </select>
          </div>
        </div>
        <div class="inline-ai-chat-history"></div>
        <div class="inline-ai-input-group">
          <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
        </div>
      </div>

        </div>
      </div>
    </div>

    <!-- Extra • Q12 -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill extra">Extra • Q12</span>
        <div class="q-heading">Prove that every orthogonal set of non-zero vectors in an Inner Product Space is linearly independent.</div>
      </div>
      <div class="solution-content">
        <p><strong>Proof:</strong><br>
        Let $S = \{v_1, v_2, \dots, v_k\}$ be an orthogonal set of non-zero vectors in $V$.<br>
        Thus $\langle v_i, v_j 
angle = 0$ for $i 
eq j$, and $\langle v_i, v_i 
angle = \|v_i\|^2 > 0$.<br>
        Consider a scalar linear combination equal to the zero vector:
        $$c_1 v_1 + c_2 v_2 + \dots + c_k v_k = 0$$
        Take the inner product of both sides with $v_i$ (for any $1 \le i \le k$):
        $$\left\langle \sum_{j=1}^k c_j v_j, v_i 
ight
angle = \langle 0, v_i 
angle = 0$$
        By linearity in the first argument:
        $$\sum_{j=1}^k c_j \langle v_j, v_i 
angle = c_i \langle v_i, v_i 
angle + \sum_{j 
eq i} c_j (0) = c_i \|v_i\|^2 = 0$$
        Since $v_i 
eq 0 \implies \|v_i\|^2 
eq 0$, dividing by $\|v_i\|^2$ gives $c_i = 0$.<br>
        Since this holds for every $i \in \{1, \dots, k\}$, all $c_i = 0$. Hence $S$ is linearly independent. Q.E.D.</p>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
          <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 1</span>
            <div class="explain-line-title">Inner Product Projection</div>
            <div class="explain-line-desc">Project the linear dependency equation onto arbitrary basis vector $v_i$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 2</span>
            <div class="explain-line-title">Scalar Isolation</div>
            <div class="explain-line-desc">All orthogonal terms collapse to zero, isolating $c_i \|v_i\|^2 = 0$, forcing $c_i = 0$.</div>
          </div>
          
      <div class="inline-ai-section">
        <div class="inline-ai-header">
          <div class="inline-ai-title-wrap">
            <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
            <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
          </div>
          <div class="inline-ai-controls">
            <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
              <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
              <option value="gemini">Google Gemini API</option>
              <option value="ollama">Ollama (Local Offline)</option>
            </select>
            <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
              <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free - Recommended)</option>
              <option value="openrouter/free">OpenRouter Auto Free (Fallback)</option>
              <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
              <option value="deepseek/deepseek-r1:free">DeepSeek R1 Reasoning (Free)</option>
              <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
            </select>
          </div>
        </div>
        <div class="inline-ai-chat-history"></div>
        <div class="inline-ai-input-group">
          <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
        </div>
      </div>

        </div>
      </div>
    </div>
`,
  partB: String.raw`
<div class="question-card" data-category="orthogonality">
        <div class="card-top">
          <span class="q-pill">Part B • Q1 (16 Marks)</span>
          <div class="q-heading">State and prove the Gram-Schmidt Orthogonalization Theorem in an inner product space.</div>
        </div>
        <div class="solution-content">
          <p><strong>Theorem Statement:</strong> Let $V$ be an inner product space, and let $S = \{v_1, v_2, \dots, v_n\}$ be a linearly independent subset of $V$. Define $S' = \{w_1, w_2, \dots, w_n\}$ inductively by:
          $$w_1 = v_1$$
          $$w_k = v_k - \sum_{j=1}^{k-1} \frac{\langle v_k, w_j \rangle}{\|w_j\|^2} w_j \quad (2 \le k \le n)$$
          Then $S'$ is an <strong>orthogonal set</strong> of non-zero vectors such that $\operatorname{span}(S') = \operatorname{span}(S)$. Normalizing each vector $u_i = \frac{w_i}{\|w_i\|}$ yields an <strong>orthonormal set</strong> $\{u_1, \dots, u_n\}$.</p>

          <div class="partb-step">
            <div class="step-title">Proof: Mathematical Induction on $k$</div>
            <p><strong>Base Step ($k = 1$):</strong><br>
            $w_1 = v_1$. Since $S$ is linearly independent, $v_1 \neq 0 \implies w_1 \neq 0$.<br>
            A single non-zero vector is vacuously orthogonal, and $\operatorname{span}\{w_1\} = \operatorname{span}\{v_1\}$. Base step holds.<br><br>
            <strong>Inductive Hypothesis:</strong><br>
            Assume that for $k-1$ steps, $\{w_1, w_2, \dots, w_{k-1}\}$ is an orthogonal set of non-zero vectors spanning $\operatorname{span}\{v_1, \dots, v_{k-1}\}$.<br><br>
            <strong>Inductive Step for $w_k$:</strong><br>
            Define $w_k = v_k - \sum_{j=1}^{k-1} c_j w_j$, where $c_j = \frac{\langle v_k, w_j \rangle}{\|w_j\|^2}$.<br>
            We must show that $\langle w_k, w_i \rangle = 0$ for all $1 \le i \le k-1$:
            $$\langle w_k, w_i \rangle = \left\langle v_k - \sum_{j=1}^{k-1} c_j w_j, \; w_i \right\rangle = \langle v_k, w_i \rangle - \sum_{j=1}^{k-1} c_j \langle w_j, w_i \rangle$$
            By the induction hypothesis, $\{w_1, \dots, w_{k-1}\}$ is an orthogonal set, so $\langle w_j, w_i \rangle = 0$ whenever $j \neq i$, and $\langle w_i, w_i \rangle = \|w_i\|^2$ when $j = i$:
            $$\langle w_k, w_i \rangle = \langle v_k, w_i \rangle - c_i \|w_i\|^2$$
            Substituting $c_i = \frac{\langle v_k, w_i \rangle}{\|w_i\|^2}$:
            $$\langle w_k, w_i \rangle = \langle v_k, w_i \rangle - \left(\frac{\langle v_k, w_i \rangle}{\|w_i\|^2}\right) \|w_i\|^2 = \langle v_k, w_i \rangle - \langle v_k, w_i \rangle = 0$$
            Therefore, $w_k$ is orthogonal to every preceding vector $w_1, \dots, w_{k-1}$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Non-Zero and Spanning Verification</div>
            <p>• If $w_k = 0$, then $v_k = \sum_{j=1}^{k-1} c_j w_j \in \operatorname{span}\{w_1, \dots, w_{k-1}\} = \operatorname{span}\{v_1, \dots, v_{k-1}\}$. This contradicts the linear independence of $S$. Hence $w_k \neq 0$.<br>
            • By construction, $w_k \in \operatorname{span}\{v_1, \dots, v_k\}$ and $v_k = w_k + \sum c_j w_j \in \operatorname{span}\{w_1, \dots, w_k\}$.<br>
            Thus $\operatorname{span}\{w_1, \dots, w_k\} = \operatorname{span}\{v_1, \dots, v_k\}$. By induction, the theorem holds for all $n$.</p>
          </div>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <!-- Inline AI Explanation Section (Matrix Dot UI) -->
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
                      <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
                      <option value="gemini">Google Gemini API</option>
                      <option value="ollama">Ollama (Local Offline)</option>
                    </select>
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free)</option>
                      <option value="google/gemini-2.0-flash-thinking-exp:free">Gemini 2.0 Flash Thinking (Free)</option>
                      <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
                      <option value="deepseek/deepseek-r1:free">DeepSeek R1 (Free)</option>
                      <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
                      <option value="liquid/lfm-40b:free">Liquid LFM 40B (Free)</option>
                      <option value="mistralai/mistral-small-24b-instruct-2501:free">Mistral Small 24B (Free)</option>
                      <option value="mistralai/mistral-7b-instruct:free">Mistral 7B (Free)</option>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Part B Q2 -->
</div>
<div class="question-card" data-category="orthogonality">
        <div class="card-top">
          <span class="q-pill">Part B • Q2 (16 Marks)</span>
          <div class="q-heading">Apply the Gram-Schmidt orthogonalization process to the basis $B = \{v_1, v_2, v_3\}$ of $\mathbb{R}^3$, where $v_1 = (1,1,0), v_2 = (1,2,0), v_3 = (0,1,2)$. Find an orthonormal basis of $\mathbb{R}^3$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> To transform the linearly independent basis $\{v_1, v_2, v_3\}$ into an orthogonal basis $\{w_1, w_2, w_3\}$, then normalize each vector to obtain the orthonormal basis $\{u_1, u_2, u_3\}$.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Compute Vector $w_1$</div>
            <p>$$w_1 = v_1 = (1, 1, 0)$$
            Norm squared: $\|w_1\|^2 = 1^2 + 1^2 + 0^2 = 2$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Compute Vector $w_2$</div>
            <p>$$w_2 = v_2 - \frac{\langle v_2, w_1 \rangle}{\|w_1\|^2} w_1$$
            • Compute inner product: $\langle v_2, w_1 \rangle = (1)(1) + (2)(1) + (0)(0) = 1 + 2 + 0 = 3$.<br>
            • Calculate $w_2$:
            $$w_2 = (1, 2, 0) - \frac{3}{2}(1, 1, 0) = \left(1 - \frac{3}{2}, \; 2 - \frac{3}{2}, \; 0\right) = \left(-\frac{1}{2}, \; \frac{1}{2}, \; 0\right)$$
            Norm squared:
            $$\|w_2\|^2 = \left(-\frac{1}{2}\right)^2 + \left(\frac{1}{2}\right)^2 + 0^2 = \frac{1}{4} + \frac{1}{4} = \frac{2}{4} = \frac{1}{2}$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Compute Vector $w_3$</div>
            <p>$$w_3 = v_3 - \frac{\langle v_3, w_1 \rangle}{\|w_1\|^2} w_1 - \frac{\langle v_3, w_2 \rangle}{\|w_2\|^2} w_2$$
            • $\langle v_3, w_1 \rangle = (0)(1) + (1)(1) + (2)(0) = 1$<br>
            • $\langle v_3, w_2 \rangle = (0)\left(-\frac{1}{2}\right) + (1)\left(\frac{1}{2}\right) + (2)(0) = \frac{1}{2}$<br>
            Substitute into formula:
            $$w_3 = (0, 1, 2) - \frac{1}{2}(1, 1, 0) - \frac{1/2}{1/2}\left(-\frac{1}{2}, \frac{1}{2}, 0\right)$$
            $$w_3 = (0, 1, 2) - \left(\frac{1}{2}, \frac{1}{2}, 0\right) - \left(-\frac{1}{2}, \frac{1}{2}, 0\right)$$
            $$w_3 = \left(0 - \frac{1}{2} + \frac{1}{2}, \; 1 - \frac{1}{2} - \frac{1}{2}, \; 2 - 0 - 0\right) = (0, 0, 2)$$
            Norm squared: $\|w_3\|^2 = 0^2 + 0^2 + 2^2 = 4 \implies \|w_3\| = 2$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 4: Normalization into Orthonormal Basis $\{u_1, u_2, u_3\}$</div>
            <p>$$u_1 = \frac{w_1}{\|w_1\|} = \frac{(1, 1, 0)}{\sqrt{2}} = \left(\frac{1}{\sqrt{2}}, \; \frac{1}{\sqrt{2}}, \; 0\right)$$
            $$u_2 = \frac{w_2}{\|w_2\|} = \frac{\left(-\frac{1}{2}, \frac{1}{2}, 0\right)}{1/\sqrt{2}} = \left(-\frac{1}{\sqrt{2}}, \; \frac{1}{\sqrt{2}}, \; 0\right)$$
            $$u_3 = \frac{w_3}{\|w_3\|} = \frac{(0, 0, 2)}{2} = (0, 0, 1)$$
            <span class="tag-result">Orthonormal Basis: $\left\{ \left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0\right), \; \left(-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0\right), \; (0, 0, 1) \right\}$</span></p>
          </div>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <!-- Inline AI Explanation Section (Matrix Dot UI) -->
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
                      <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
                      <option value="gemini">Google Gemini API</option>
                      <option value="ollama">Ollama (Local Offline)</option>
                    </select>
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free)</option>
                      <option value="google/gemini-2.0-flash-thinking-exp:free">Gemini 2.0 Flash Thinking (Free)</option>
                      <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
                      <option value="deepseek/deepseek-r1:free">DeepSeek R1 (Free)</option>
                      <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
                      <option value="liquid/lfm-40b:free">Liquid LFM 40B (Free)</option>
                      <option value="mistralai/mistral-small-24b-instruct-2501:free">Mistral Small 24B (Free)</option>
                      <option value="mistralai/mistral-7b-instruct:free">Mistral 7B (Free)</option>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  


    <!-- Part B • Q3 (16 Marks) -->
</div>
<div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B • Q3 (16 Marks)</span>
        <div class="q-heading">Let the vector space $P_2([-1, 1])$ have the inner product $\langle p, q 
angle = \int_{-1}^1 p(x)q(x) dx$. Apply the Gram-Schmidt process to the standard basis $\{1, x, x^2\}$ to find an orthonormal basis (Legendre Polynomials).</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Transform standard monomial basis $\{v_1 = 1, v_2 = x, v_3 = x^2\}$ into an orthonormal basis $\{e_1, e_2, e_3\}$.</p>

        <div class="partb-step">
          <div class="step-title">Step 1: First Vector $u_1$ and Normalization $e_1$</div>
          <p>$$u_1 = v_1 = 1$$
          $$\|u_1\|^2 = \int_{-1}^1 (1)^2 dx = [x]_{-1}^1 = 2 \implies \|u_1\| = \sqrt{2}$$
          $$e_1 = rac{u_1}{\|u_1\|} = rac{1}{\sqrt{2}}$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 2: Second Vector $u_2$ and Normalization $e_2$</div>
          <p>$$u_2 = v_2 - rac{\langle v_2, u_1 
angle}{\|u_1\|^2} u_1 = x - rac{\int_{-1}^1 x(1) dx}{2} (1)$$
          Since $x$ is an odd function, $\int_{-1}^1 x dx = 0 \implies u_2 = x$.<br>
          $$\|u_2\|^2 = \int_{-1}^1 x^2 dx = \left[ rac{x^3}{3} 
ight]_{-1}^1 = rac{2}{3} \implies \|u_2\| = \sqrt{rac{2}{3}}$$
          $$e_2 = rac{u_2}{\|u_2\|} = \sqrt{rac{3}{2}} x$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 3: Third Vector $u_3$ and Normalization $e_3$</div>
          <p>$$u_3 = v_3 - rac{\langle v_3, u_1 
angle}{\|u_1\|^2} u_1 - rac{\langle v_3, u_2 
angle}{\|u_2\|^2} u_2$$
          $$\langle v_3, u_1 
angle = \int_{-1}^1 x^2(1) dx = rac{2}{3}, \quad \langle v_3, u_2 
angle = \int_{-1}^1 x^2(x) dx = \int_{-1}^1 x^3 dx = 0 	ext{ (odd)}$$
          $$u_3 = x^2 - rac{2/3}{2}(1) - 0 = x^2 - rac{1}{3}$$
          $$\|u_3\|^2 = \int_{-1}^1 \left(x^2 - rac{1}{3}
ight)^2 dx = \int_{-1}^1 \left(x^4 - rac{2}{3}x^2 + rac{1}{9}
ight) dx = \left[ rac{x^5}{5} - rac{2x^3}{9} + rac{x}{9} 
ight]_{-1}^1 = 2\left(rac{1}{5} - rac{2}{9} + rac{1}{9}
ight) = 2\left(rac{1}{5} - rac{1}{9}
ight) = rac{8}{45}$$
          $$e_3 = rac{u_3}{\|u_3\|} = rac{x^2 - 1/3}{\sqrt{8/45}} = rac{1}{2}\sqrt{rac{5}{2}} (3x^2 - 1)$$</p>
        </div>

        <div class="tag-result">Orthonormal Basis: $\left\{ rac{1}{\sqrt{2}}, \; \sqrt{rac{3}{2}}x, \; rac{1}{2}\sqrt{rac{5}{2}}(3x^2 - 1) 
ight\}$.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
          <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 1</span>
            <div class="explain-line-title">Odd-Even Parity Simplification</div>
            <div class="explain-line-desc">Integrals of odd integrand $x$ and $x^3$ across symmetric bounds $[-1,1]$ vanish identically to zero.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 2</span>
            <div class="explain-line-title">Legendre Normalization</div>
            <div class="explain-line-desc">Normalized orthogonal polynomials match classical $P_0(x), P_1(x), P_2(x)$ scaled by $\sqrt{rac{2n+1}{2}}$.</div>
          </div>
          
      <div class="inline-ai-section">
        <div class="inline-ai-header">
          <div class="inline-ai-title-wrap">
            <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
            <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
          </div>
          <div class="inline-ai-controls">
            <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
              <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
              <option value="gemini">Google Gemini API</option>
              <option value="ollama">Ollama (Local Offline)</option>
            </select>
            <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
              <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free - Recommended)</option>
              <option value="openrouter/free">OpenRouter Auto Free (Fallback)</option>
              <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
              <option value="deepseek/deepseek-r1:free">DeepSeek R1 Reasoning (Free)</option>
              <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
            </select>
          </div>
        </div>
        <div class="inline-ai-chat-history"></div>
        <div class="inline-ai-input-group">
          <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
        </div>
      </div>

        </div>
      </div>
    </div>

    <!-- Part B • Q4 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B • Q4 (16 Marks)</span>
        <div class="q-heading">State and prove Cauchy-Schwarz Inequality and Triangle Inequality in an Inner Product Space.</div>
      </div>
      <div class="solution-content">
        <p><strong>1. Cauchy-Schwarz Inequality:</strong> For all $u, v \in V$:
        $$|\langle u, v 
angle| \le \|u\| \|v\|$$
        with equality holding if and only if $u$ and $v$ are linearly dependent.</p>

        <div class="partb-step">
          <div class="step-title">Proof of Cauchy-Schwarz Inequality</div>
          <p>• If $u = 0$, then $\langle 0, v 
angle = 0$ and $\|0\|\|v\| = 0$. The equality $0 = 0$ trivially holds.<br>
          • Suppose $u 
eq 0 \implies \|u\| > 0$. For any scalar $t \in \mathbb{R}$, consider the vector $tu - v$.<br>
          By the non-negativity axiom of inner product:
          $$\|tu - v\|^2 \ge 0 \implies \langle tu - v, tu - v 
angle \ge 0$$
          $$t^2 \langle u, u 
angle - 2t \langle u, v 
angle + \langle v, v 
angle \ge 0$$
          $$t^2 \|u\|^2 - 2t \langle u, v 
angle + \|v\|^2 \ge 0$$
          This is a quadratic in $t$ of the form $At^2 + Bt + C \ge 0$ where $A = \|u\|^2 > 0, B = -2\langle u, v 
angle, C = \|v\|^2$.<br>
          For a quadratic to remain non-negative for all real $t$, its discriminant $B^2 - 4AC$ must be $\le 0$:
          $$(-2\langle u, v 
angle)^2 - 4 \|u\|^2 \|v\|^2 \le 0$$
          $$4 |\langle u, v 
angle|^2 \le 4 \|u\|^2 \|v\|^2 \implies |\langle u, v 
angle|^2 \le \|u\|^2 \|v\|^2$$
          Taking positive square roots on both sides:
          $$|\langle u, v 
angle| \le \|u\| \|v\| \quad 	ext{Q.E.D.}$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Proof of Triangle Inequality $\|u + v\| \le \|u\| + \|v\|$</div>
          <p>$$\|u + v\|^2 = \langle u + v, u + v 
angle = \|u\|^2 + 2\langle u, v 
angle + \|v\|^2$$
          Since $\langle u, v 
angle \le |\langle u, v 
angle| \le \|u\|\|v\|$ by Cauchy-Schwarz:
          $$\|u + v\|^2 \le \|u\|^2 + 2\|u\|\|v\| + \|v\|^2 = (\|u\| + \|v\|)^2$$
          Taking square roots: $\|u + v\| \le \|u\| + \|v\|$. Q.E.D.</p>
        </div>

        <div class="tag-result">Conclusion: Both fundamental inequalities proved rigorously using quadratic discriminant and norm expansion.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
          <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 1</span>
            <div class="explain-line-title">Real Quadratic Formulation</div>
            <div class="explain-line-desc">Expressing $\|tu-v\|^2 \ge 0$ yields a parabola with at most one real root, forcing $\Delta \le 0$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 2</span>
            <div class="explain-line-title">Chain to Triangle Inequality</div>
            <div class="explain-line-desc">Directly bound the cross term $2\langle u, v 
angle \le 2\|u\|\|v\|$ to complete the binomial square.</div>
          </div>
          
      <div class="inline-ai-section">
        <div class="inline-ai-header">
          <div class="inline-ai-title-wrap">
            <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
            <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
          </div>
          <div class="inline-ai-controls">
            <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
              <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
              <option value="gemini">Google Gemini API</option>
              <option value="ollama">Ollama (Local Offline)</option>
            </select>
            <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
              <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free - Recommended)</option>
              <option value="openrouter/free">OpenRouter Auto Free (Fallback)</option>
              <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
              <option value="deepseek/deepseek-r1:free">DeepSeek R1 Reasoning (Free)</option>
              <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
            </select>
          </div>
        </div>
        <div class="inline-ai-chat-history"></div>
        <div class="inline-ai-input-group">
          <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
        </div>
      </div>

        </div>
      </div>
    </div>


    <!-- Part B • Q5 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B • Q5 (16 Marks)</span>
        <div class="q-heading">Find the least squares line $y = ax + b$ and quadratic curve $y = ax^2 + bx + c$ to fit the experimental data points: $(1, 1), (2, 4), (3, 9), (4, 16)$.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Formulate the normal equations $A^T A \hat{x} = A^T b$ to find the optimal least-squares polynomial fits.</p>

        <div class="partb-step">
          <div class="step-title">Section I: Best Fit Line $y = ax + b$</div>
          <p>Normal equations for line $y = ax + b$:
          $$\begin{pmatrix} \sum x_i^2 &amp; \sum x_i \\ \sum x_i &amp; n \end{pmatrix} \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} \sum x_i y_i \\ \sum y_i \end{pmatrix}$$
          Data: $(1,1), (2,4), (3,9), (4,16)$ with $n = 4$.<br>
          • $\sum x_i = 1 + 2 + 3 + 4 = 10$<br>
          • $\sum x_i^2 = 1 + 4 + 9 + 16 = 30$<br>
          • $\sum y_i = 1 + 4 + 9 + 16 = 30$<br>
          • $\sum x_i y_i = 1(1) + 2(4) + 3(9) + 4(16) = 1 + 8 + 27 + 64 = 100$<br>
          Normal system:
          $$\begin{pmatrix} 30 &amp; 10 \\ 10 &amp; 4 \end{pmatrix} \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 100 \\ 30 \end{pmatrix}$$
          Dividing row 2 by 2: $5a + 2b = 15 \implies 2b = 15 - 5a$.<br>
          Substitute into row 1: $30a + 5(15 - 5a) = 100 \implies 5a + 75 = 100 \implies 5a = 25 \implies a = 5$.<br>
          Then $2b = 15 - 25 = -10 \implies b = -5$.<br>
          <strong>Least Squares Line:</strong> $y = 5x - 5$.</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Section II: Quadratic Fit $y = ax^2 + bx + c$</div>
          <p>Notice that for all data points: $1 = 1^2, 4 = 2^2, 9 = 3^2, 16 = 4^2$.<br>
          The data points lie <em>identically</em> on the parabola $y = x^2$.<br>
          Therefore, the quadratic least-squares error is strictly zero with parameters:
          $$a = 1, \quad b = 0, \quad c = 0 \implies y = x^2$$</p>
        </div>

        <div class="tag-result">Best Fits: Line $y = 5x - 5$ and Exact Parabola $y = x^2$.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
          <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 1</span>
            <div class="explain-line-title">Normal System Formulation</div>
            <div class="explain-line-desc">Set up Gauss normal equations by multiplying overdetermined matrix system $Ax = b$ by $A^T$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Step 2</span>
            <div class="explain-line-title">Zero Error Parabola Identification</div>
            <div class="explain-line-desc">Since experimental $y_i = x_i^2$ exactly, the quadratic least-squares solution is the exact interpolating polynomial.</div>
          </div>
          
      <div class="inline-ai-section">
        <div class="inline-ai-header">
          <div class="inline-ai-title-wrap">
            <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
            <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
          </div>
          <div class="inline-ai-controls">
            <select class="inline-ai-provider-select" onchange="window.AITutor.setProvider(this.value)">
              <option value="openrouter" selected>OpenRouter (Free Cloud)</option>
              <option value="gemini">Google Gemini API</option>
              <option value="ollama">Ollama (Local Offline)</option>
            </select>
            <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
              <option value="google/gemini-2.0-flash-exp:free">Gemini 2.0 Flash Exp (Free - Recommended)</option>
              <option value="openrouter/free">OpenRouter Auto Free (Fallback)</option>
              <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free)</option>
              <option value="deepseek/deepseek-r1:free">DeepSeek R1 Reasoning (Free)</option>
              <option value="qwen/qwen-2.5-coder-32b-instruct:free">Qwen 2.5 Coder 32B (Free)</option>
            </select>
          </div>
        </div>
        <div class="inline-ai-chat-history"></div>
        <div class="inline-ai-input-group">
          <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
        </div>
      </div>

        </div>
      </div>
    </div>
`
};
