// UNIT 3: Inner Product Spaces
window.UNIT3_DATA = {
  title: "Unit-III: Inner Product Spaces",
  desc: "Complete Question Bank + Class Notes derivations for Inner Products, Norms, Gram-Schmidt Orthogonalization, Cauchy-Schwarz, and Orthogonal Complements.",
  partA: String.raw`
<div class="section-badge">Part 1: Official Question Bank 2-Marks (Unit III)</div>

      <!-- Q1 -->
      <div class="question-card" data-category="innerproduct">
        <div class="card-top">
          <span class="q-pill">QB - Q1</span>
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
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Linearity</span>
                <div class="explain-line-title">Additivity and Homogeneity in first argument</div>
                <div class="explain-line-desc">$\langle u+v, w \rangle = \langle u, w \rangle + \langle v, w \rangle$ and $\langle cu, v \rangle = c\langle u, v \rangle$. This ensures the inner product behaves linearly with respect to vector operations.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Symmetry</span>
                <div class="explain-line-title">Conjugate Symmetry Property</div>
                <div class="explain-line-desc">$\langle u, v \rangle = \overline{\langle v, u \rangle}$ for complex spaces, and $\langle u, v \rangle = \langle v, u \rangle$ for real spaces, ensuring geometric consistency.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3 - Positive Definiteness</span>
                <div class="explain-line-title">Strict Positivity Criterion</div>
                <div class="explain-line-desc">$\langle v, v \rangle \ge 0$ for all $v$, with $\langle v, v \rangle = 0 \iff v = 0$. This establishes the definition of Euclidean distance and length.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">Anna University awards 1 mark for stating linearity and symmetry, and 1 mark for the strict positive-definite condition.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
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
          <span class="q-pill">QB - Q2</span>
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
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Orthogonality</span>
                <div class="explain-line-title">Zero Inner Product Condition</div>
                <div class="explain-line-desc">Two vectors $u$ and $v$ are orthogonal ($u \perp v$) if and only if $\langle u, v \rangle = 0$. Geometrically, the angle between them is $90^\circ$ ($\cos \theta = 0$).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Orthonormality</span>
                <div class="explain-line-title">Unit Length Requirement</div>
                <div class="explain-line-desc">A set is orthonormal if it is orthogonal AND every vector is a unit vector: $\langle v_i, v_j \rangle = \delta_{ij}$ (Kronecker delta: 1 if $i=j$, 0 if $i \neq j$).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for defining orthogonal ($\langle u, v \rangle = 0$), 1 mark for orthonormal ($\|u\|=1, \|v\|=1$).</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
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
          <span class="q-pill">QB - Q3</span>
          <div class="q-heading">If $\{a, b\}$ is an orthonormal set, what is the distance between $a$ and $b$?</div>
        </div>
        <div class="solution-content">
          <p>Since $\{a, b\}$ is an orthonormal set, by definition:<br>
          - $\|a\| = 1$ and $\|b\| = 1$ (Unit vectors)<br>
          - $\langle a, b \rangle = 0$ (Orthogonal)<br><br>
          Distance formula: $d(a, b) = \|a - b\| = \sqrt{\langle a - b, a - b \rangle}$:
          $$\|a - b\|^2 = \langle a - b, a - b \rangle = \langle a, a \rangle - \langle a, b \rangle - \langle b, a \rangle + \langle b, b \rangle$$
          $$\|a - b\|^2 = \|a\|^2 - 2\langle a, b \rangle + \|b\|^2 = 1^2 - 2(0) + 1^2 = 2$$
          $$d(a, b) = \|a - b\| = \sqrt{2}$$
          <span class="tag-result">Final Answer: The distance is $\sqrt{2}$.</span></p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Distance Formula</span>
                <div class="explain-line-title">Norm of Difference Vector</div>
                <div class="explain-line-desc">The distance between vectors is defined by $d(a, b) = \|a - b\| = \sqrt{\langle a - b, a - b \rangle}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Orthonormal Expansion</span>
                <div class="explain-line-title">Pythagorean Expansion</div>
                <div class="explain-line-desc">$\|a - b\|^2 = \langle a, a \rangle - 2\langle a, b \rangle + \langle b, b \rangle = 1 - 2(0) + 1 = 2 \implies d(a, b) = \sqrt{2}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">State the distance formula (1 mark) and evaluate $d(a, b) = \sqrt{2}$ (1 mark).</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
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
          <span class="q-pill">QB - Q4</span>
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
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Definition</span>
                <div class="explain-line-title">Square Root of Self-Inner Product</div>
                <div class="explain-line-desc">$\|v\| = \sqrt{\langle v, v \rangle}$. The norm assigns a non-negative real length to every vector in $V$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Three Axioms</span>
                <div class="explain-line-title">Positivity, Homogeneity, Triangle Inequality</div>
                <div class="explain-line-desc">1. $\|v\| \ge 0$ ($\|v\|=0 \iff v=0$); 2. $\|cv\| = |c|\|v\|$; 3. $\|u+v\| \le \|u\| + \|v\|$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for definition, 1 mark for listing the 3 norm properties.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
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
          <span class="q-pill">QB - Q5</span>
          <div class="q-heading">State the Cauchy-Schwarz Inequality and condition for equality.</div>
        </div>
        <div class="solution-content">
          <p><strong>Cauchy-Schwarz Inequality:</strong> Let $V$ be an inner product space. For any vectors $u, v \in V$:
          $$|\langle u, v \rangle| \le \|u\| \|v\|$$
          Furthermore, equality holds ($|\langle u, v \rangle| = \|u\| \|v\|$) <strong>if and only if</strong> $u$ and $v$ are linearly dependent (i.e., one is a scalar multiple of the other: $u = c v$).</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Theorem Statement</span>
                <div class="explain-line-title">Upper Bound on Inner Product</div>
                <div class="explain-line-desc">$|\langle u, v \rangle| \le \|u\| \|v\|$ for all $u, v \in V$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Equality Condition</span>
                <div class="explain-line-title">Linear Dependence Criterion</div>
                <div class="explain-line-desc">Equality $|\langle u, v \rangle| = \|u\| \|v\|$ holds if and only if $u$ and $v$ are scalar multiples (linearly dependent).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for the inequality, 1 mark for stating the linear dependency condition for equality.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
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
          <span class="q-pill">QB - Q6</span>
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
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Homogeneity Property</span>
                <div class="explain-line-title">Pulling out scalar reciprocal</div>
                <div class="explain-line-desc">$\|y\| = \|\frac{1}{\|x\|} x\| = |\frac{1}{\|x\|}| \|x\|$ by absolute scalar homogeneity.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Simplification</span>
                <div class="explain-line-title">Strict Positivity of Length</div>
                <div class="explain-line-desc">Since $x \neq 0$, $\|x\| > 0$, so $\frac{1}{\|x\|} \cdot \|x\| = 1$. Hence $\|y\|=1$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">Write scalar pull-out step (1 mark) and simplify to 1 (1 mark).</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
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
          <span class="q-pill">QB - Q7</span>
          <div class="q-heading">Let $\mathbb{R}^2$ have the weighted Euclidean inner product $\langle u, v \rangle = 2u_1 v_1 + 3u_2 v_2$. If $u = (1, 1), v = (3, 2), w = (0, -1)$, compute $\langle u + v, 3w \rangle$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Step 1: Compute vectors:</strong><br>
          - $u + v = (1+3, 1+2) = (4, 3)$<br>
          - $3w = 3(0, -1) = (0, -3)$<br><br>
          <strong>Step 2: Apply weighted inner product formula:</strong>
          $$\langle u + v, 3w \rangle = 2(u+v)_1 (3w)_1 + 3(u+v)_2 (3w)_2$$
          Substitute values:
          $$\langle u + v, 3w \rangle = 2(4)(0) + 3(3)(-3) = 0 + 3(-9) = -27$$
          <span class="tag-result">Final Answer: $\langle u + v, 3w \rangle = -27$</span></p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Conjugate Operation</span>
                <div class="explain-line-title">Complex Conjugation of Entries</div>
                <div class="explain-line-desc">Replace each entry $a_{ij}$ with its complex conjugate $\overline{a_{ij}}$: $\overline{1-2i} = 1+2i, \overline{4i} = -4i, \overline{5+i} = 5-i$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Matrix Transpose</span>
                <div class="explain-line-title">Interchange Rows and Columns</div>
                <div class="explain-line-desc">Swap rows and columns to obtain $A^* = (\overline{A})^T = \begin{pmatrix} 1+2i & -4i \\ 3 & 5-i \end{pmatrix}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for conjugation, 1 mark for transpose.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  
  
    <!-- QB - Q8 -->
</div>
<div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">QB - Q8</span>
        <div class="q-heading">For any non-zero vector $x \in V$, prove that $y = \frac{x}{\|x\|}$ is a unit vector, i.e., $\|y\| = 1$.</div>
      </div>
      <div class="solution-content">
        <p><strong>Proof:</strong><br>
        Let $x \neq 0 \implies \|x\| > 0$. Consider the scalar $c = \frac{1}{\|x\|} \in \mathbb{R}$.<br>
        By the scalar homogeneity property of norm:
        $$\|y\| = \left\| \frac{1}{\|x\|} x \right\| = \left| \frac{1}{\|x\|} \right| \|x\|$$
        Since $\|x\| > 0$, $\left| \frac{1}{\|x\|} \right| = \frac{1}{\|x\|}$:
        $$\|y\| = \frac{1}{\|x\|} \cdot \|x\| = 1$$
        Hence, $y = \frac{x}{\|x\|}$ is a unit vector. Q.E.D.</p>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
          <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Definition</span>
                <div class="explain-line-title">Vectors Orthogonal to Entire Subspace</div>
                <div class="explain-line-desc">$W^\perp = \{v \in V \mid \langle v, w \rangle = 0 \text{ for all } w \in W\}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Subspace Property</span>
                <div class="explain-line-title">Direct Sum Decomposition</div>
                <div class="explain-line-desc">$W^\perp$ is always a subspace of $V$, and $V = W \oplus W^\perp$ for finite-dimensional spaces.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">State set notation (1 mark) and direct sum $\dim W + \dim W^\perp = \dim V$ (1 mark).</div>
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
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
        </div>
      </div>

        </div>
      </div>
    </div>

    <!-- QB - Q9 -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">QB - Q9</span>
        <div class="q-heading">Define Unit Vector and Norm of a vector in an Inner Product Space.</div>
      </div>
      <div class="solution-content">
        <p><strong>Norm (Length) of a vector:</strong> For any vector $x \in V$, the norm or length of $x$, denoted by $\|x\|$, is defined as the non-negative square root of its self-inner product:
        $$\|x\| = \sqrt{\langle x, x \rangle}$$</p>
        <p style="margin-top:6px;"><strong>Unit Vector:</strong> A vector $u \in V$ is called a <em>unit vector</em> if its norm is equal to 1, i.e., $\|u\| = 1$, or equivalently $\langle u, u \rangle = 1$.</p>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
          <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Definition</span>
                <div class="explain-line-title">Vector with Unit Length</div>
                <div class="explain-line-desc">A vector $u \in V$ is called a unit vector if $\|u\| = 1$, or equivalently $\langle u, u \rangle = 1$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Normalization Process</span>
                <div class="explain-line-title">Converting vector to unit vector</div>
                <div class="explain-line-desc">Any non-zero vector $v$ can be normalized into a unit vector via $\hat{v} = \frac{v}{\|v\|}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for unit vector definition, 1 mark for norm definition.</div>
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
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
        </div>
      </div>

        </div>
      </div>
    </div>

    <!-- QB - Q10 -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">QB - Q10</span>
        <div class="q-heading">Let $\mathbb{R}^2$ have the weighted Euclidean inner product $\langle u, v \rangle = 2u_1 v_1 + 3u_2 v_2$. Let $u = (1, 1), v = (3, 2), w = (0, -1)$. Compute the value of $\langle u+v, 3w \rangle$.</div>
      </div>
      <div class="solution-content">
        <p><strong>Step 1: Compute $u+v$ and $3w$:</strong><br>
        $$u + v = (1+3, 1+2) = (4, 3)$$
        $$3w = 3(0, -1) = (0, -3)$$</p>
        <p style="margin-top:6px;"><strong>Step 2: Apply Weighted Inner Product Formula:</strong><br>
        $$\langle (4, 3), (0, -3) \rangle = 2(4)(0) + 3(3)(-3) = 0 + (-27) = -27$$</p>
        <div class="tag-result">Result: $\langle u+v, 3w \rangle = -27$</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
          <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Vector Operations</span>
                <div class="explain-line-title">Calculate Sum and Scalar Product</div>
                <div class="explain-line-desc">$u+v = (1+3, 1+2) = (4, 3)$ and $3w = 3(0, -1) = (0, -3)$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Weighted Inner Product</span>
                <div class="explain-line-title">Substitute Component Weights</div>
                <div class="explain-line-desc">$\langle (4, 3), (0, -3) \rangle = 2(4)(0) + 3(3)(-3) = 0 - 27 = -27$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for vector additions, 1 mark for $-27$.</div>
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
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
        </div>
      </div>

        </div>
      </div>
    </div>

    <!-- Extra - Q11 -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill extra">Extra - Q11</span>
        <div class="q-heading">State the Pythagorean Theorem in an Inner Product Space and prove it for orthogonal vectors.</div>
      </div>
      <div class="solution-content">
        <p><strong>Statement:</strong> If $u$ and $v$ are orthogonal vectors in a real inner product space $V$ ($\langle u, v \rangle = 0$), then:
        $$\|u + v\|^2 = \|u\|^2 + \|v\|^2$$</p>
        <p style="margin-top:6px;"><strong>Proof:</strong><br>
        By definition of norm:
        $$\|u + v\|^2 = \langle u + v, u + v \rangle = \langle u, u \rangle + \langle u, v \rangle + \langle v, u \rangle + \langle v, v \rangle$$
        Since $u \perp v$, $\langle u, v \rangle = \langle v, u \rangle = 0$:
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
                <span class="explain-line-badge">Step 1 - Statement</span>
                <div class="explain-line-title">Pythagorean Theorem in IPS</div>
                <div class="explain-line-desc">If $\langle u, v \rangle = 0$, then $\|u+v\|^2 = \|u\|^2 + \|v\|^2$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Proof</span>
                <div class="explain-line-title">Expansion of Self-Inner Product</div>
                <div class="explain-line-desc">$\|u+v\|^2 = \langle u+v, u+v \rangle = \|u\|^2 + 2\langle u, v \rangle + \|v\|^2 = \|u\|^2 + 0 + \|v\|^2$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for expansion, 1 mark for vanishing of cross term.</div>
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
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
        </div>
      </div>

        </div>
      </div>
    </div>

    <!-- Extra - Q12 -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill extra">Extra - Q12</span>
        <div class="q-heading">Prove that every orthogonal set of non-zero vectors in an Inner Product Space is linearly independent.</div>
      </div>
      <div class="solution-content">
        <p><strong>Proof:</strong><br>
        Let $S = \{v_1, v_2, \dots, v_k\}$ be an orthogonal set of non-zero vectors in $V$.<br>
        Thus $\langle v_i, v_j \rangle = 0$ for $i \neq j$, and $\langle v_i, v_i \rangle = \|v_i\|^2 > 0$.<br>
        Consider a scalar linear combination equal to the zero vector:
        $$c_1 v_1 + c_2 v_2 + \dots + c_k v_k = 0$$
        Take the inner product of both sides with $v_i$ (for any $1 \le i \le k$):
        $$\left\langle \sum_{j=1}^k c_j v_j, v_i \right\rangle = \langle 0, v_i \rangle = 0$$
        By linearity in the first argument:
        $$\sum_{j=1}^k c_j \langle v_j, v_i \rangle = c_i \langle v_i, v_i \rangle + \sum_{j \neq i} c_j (0) = c_i \|v_i\|^2 = 0$$
        Since $v_i \neq 0 \implies \|v_i\|^2 \neq 0$, dividing by $\|v_i\|^2$ gives $c_i = 0$.<br>
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
                <span class="explain-line-badge">Step 1 - Projection</span>
                <div class="explain-line-title">Inner Product with Basis Vector</div>
                <div class="explain-line-desc">Take inner product of $\sum c_j v_j = 0$ with $v_i$: $\langle \sum c_j v_j, v_i \rangle = c_i \|v_i\|^2 = 0$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Conclusion</span>
                <div class="explain-line-title">All Coefficients Vanish</div>
                <div class="explain-line-desc">Since $v_i \neq 0 \implies \|v_i\| \neq 0$, dividing yields $c_i = 0$ for all $i$. Hence independent.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for inner product projection, 1 mark for deducing $c_i = 0$.</div>
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
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
        </div>
      </div>

        </div>
      </div>
    </div>

<!-- Predicted Q13 -->
      <div class="question-card" data-category="orthogonality">
        <div class="card-top">
          <span class="q-pill extra">Predicted - Q13</span>
        </div>
        <div class="q-heading">Define the orthogonal complement $W^\perp$ of a subspace $W$ in an inner product space $V$. State the relationship between $\dim(W)$, $\dim(W^\perp)$, and $\dim(V)$ when $V$ is finite-dimensional.</div>
        <div class="solution-content">
          <p><strong>Definition:</strong> Let $W$ be a subspace of an inner product space $V$. The <strong>orthogonal complement</strong> of $W$, denoted by $W^\perp$, is the set of all vectors in $V$ that are orthogonal to every vector in $W$:
          $$W^\perp = \{v \in V : \langle v, w \rangle = 0 \text{ for all } w \in W\}$$
          <strong>Properties &amp; Dimension Relationship:</strong><br>
          1. $W^\perp$ is always a subspace of $V$, and $W \cap W^\perp = \{\mathbf{0}\}$.<br>
          2. If $V$ is finite-dimensional, $V$ is the direct sum: $V = W \oplus W^\perp$, which gives:
          $$\dim(W) + \dim(W^\perp) = \dim(V) \iff \dim(W^\perp) = \dim(V) - \dim(W)$$
          3. $(W^\perp)^\perp = W$.</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Set Notation Definition</span>
                <div class="explain-line-title">Universal quantifier $\forall w \in W$</div>
                <div class="explain-line-desc">A vector belongs to $W^\perp$ only if it is perpendicular to the entire subspace $W$, which is equivalent to being perpendicular to every basis vector of $W$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Orthogonal Decomposition</span>
                <div class="explain-line-title">$V = W \oplus W^\perp$</div>
                <div class="explain-line-desc">Every vector in $V$ uniquely splits as $v = w + w^\perp$ with $w \in W$ and $w^\perp \in W^\perp$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for defining set $W^\perp = \{v : \langle v, w \rangle = 0\}$, 1 mark for dimension formula $\dim(W) + \dim(W^\perp) = \dim(V)$.</div>
              </div>

              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">Matrix AI Tutor</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <optgroup label="Direct Gemini API (Recommended &amp; Ultra-Fast)">
                        <option value="gemini-2.5-flash" selected>gemini-2.5-flash (Google High Throughput)</option>
                        <option value="gemini-2.5-flash-lite">gemini-2.5-flash-lite (Google Low Latency)</option>
                        <option value="gemini-flash-latest">gemini-flash-latest (Google Stable)</option>
                        <option value="gemini-3.1-flash-lite-preview">gemini-3.1-flash-lite-preview (Google Next-Gen)</option>
                        <option value="gemini-2.5-pro">gemini-2.5-pro (Google Deep Reasoning)</option>
                        <option value="gemini-3.5-flash">gemini-3.5-flash (Google High Speed)</option>
                        <option value="gemini-3.5-flash-lite">gemini-3.5-flash-lite (Google Lightweight)</option>
                      </optgroup>
                      <optgroup label="OpenRouter Free Endpoints">
                        <option value="openrouter/free">openrouter/free (Auto Best Free Endpoint)</option>
                        <option value="google/gemma-4-31b-it:free">google/gemma-4-31b-it:free (OpenRouter)</option>
                        <option value="google/gemma-4-26b-a4b-it:free">google/gemma-4-26b-a4b-it:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3-ultra-550b-a55b:free">nvidia/nemotron-3-ultra-550b-a55b:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3.5-super-vl:free">nvidia/nemotron-3.5-super-vl:free (OpenRouter)</option>
                        <option value="liquid/lfm-2.5-2.6b:free">liquid/lfm-2.5-2.6b:free (Liquid AI Free)</option>
                        <option value="baidu/ernie-5.5-flash-preview:free">baidu/ernie-5.5-flash-preview:free (Baidu Free)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Predicted Q14 -->
      <div class="question-card" data-category="orthogonality">
        <div class="card-top">
          <span class="q-pill extra">Predicted - Q14</span>
        </div>
        <div class="q-heading">State Bessel's Inequality and Parseval's Identity for an orthonormal set in an inner product space $V$.</div>
        <div class="solution-content">
          <p>Let $\{e_1, e_2, \dots, e_k\}$ be an orthonormal set in an inner product space $V$, and let $x \in V$.<br>
          1. <strong>Bessel's Inequality:</strong>
          $$\sum_{i=1}^k |\langle x, e_i \rangle|^2 \le \|x\|^2$$
          The sum of squares of the Fourier coefficients never exceeds the total squared norm of the vector.<br>
          2. <strong>Parseval's Identity:</strong> If $\{e_1, e_2, \dots, e_n\}$ is a complete orthonormal <em>basis</em> of $V$, equality holds identically:
          $$\sum_{i=1}^n |\langle x, e_i \rangle|^2 = \|x\|^2$$</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Generalized Pythagorean Theorem</span>
                <div class="explain-line-title">$\|x\|^2 = \|\sum \langle x, e_i \rangle e_i\|^2 + \|x - \sum \langle x, e_i \rangle e_i\|^2$</div>
                <div class="explain-line-desc">Because the orthogonal component norm is non-negative ($\|x^\perp\|^2 \ge 0$), dropping it gives Bessel's inequality $\sum |\langle x, e_i \rangle|^2 \le \|x\|^2$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Completeness &amp; Parseval</span>
                <div class="explain-line-title">Zero residual error when spanning the full space</div>
                <div class="explain-line-desc">When $\{e_i\}$ spans the entire space, the orthogonal residual is zero ($x^\perp = \mathbf{0}$), yielding exact equality in Parseval's formula.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for Bessel's inequality statement and formula, 1 mark for Parseval's identity equality with basis condition.</div>
              </div>

              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">Matrix AI Tutor</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <optgroup label="Direct Gemini API (Recommended &amp; Ultra-Fast)">
                        <option value="gemini-2.5-flash" selected>gemini-2.5-flash (Google High Throughput)</option>
                        <option value="gemini-2.5-flash-lite">gemini-2.5-flash-lite (Google Low Latency)</option>
                        <option value="gemini-flash-latest">gemini-flash-latest (Google Stable)</option>
                        <option value="gemini-3.1-flash-lite-preview">gemini-3.1-flash-lite-preview (Google Next-Gen)</option>
                        <option value="gemini-2.5-pro">gemini-2.5-pro (Google Deep Reasoning)</option>
                        <option value="gemini-3.5-flash">gemini-3.5-flash (Google High Speed)</option>
                        <option value="gemini-3.5-flash-lite">gemini-3.5-flash-lite (Google Lightweight)</option>
                      </optgroup>
                      <optgroup label="OpenRouter Free Endpoints">
                        <option value="openrouter/free">openrouter/free (Auto Best Free Endpoint)</option>
                        <option value="google/gemma-4-31b-it:free">google/gemma-4-31b-it:free (OpenRouter)</option>
                        <option value="google/gemma-4-26b-a4b-it:free">google/gemma-4-26b-a4b-it:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3-ultra-550b-a55b:free">nvidia/nemotron-3-ultra-550b-a55b:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3.5-super-vl:free">nvidia/nemotron-3.5-super-vl:free (OpenRouter)</option>
                        <option value="liquid/lfm-2.5-2.6b:free">liquid/lfm-2.5-2.6b:free (Liquid AI Free)</option>
                        <option value="baidu/ernie-5.5-flash-preview:free">baidu/ernie-5.5-flash-preview:free (Baidu Free)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Predicted Q15 -->
      <div class="question-card" data-category="orthogonality">
        <div class="card-top">
          <span class="q-pill extra">Predicted - Q15</span>
        </div>
        <div class="q-heading">In $\mathbb{R}^3$ with the standard Euclidean inner product, find a unit vector orthogonal to both $u = (1, 1, 0)$ and $v = (0, 1, 1)$.</div>
        <div class="solution-content">
          <p>Compute the vector cross product $w = u \times v$:
          $$w = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{vmatrix} = \mathbf{i}(1 - 0) - \mathbf{j}(1 - 0) + \mathbf{k}(1 - 0) = (1, -1, 1)$$
          Check orthogonality:<br>
          - $\langle u, w \rangle = 1(1) + 1(-1) + 0(1) = 0$.<br>
          - $\langle v, w \rangle = 0(1) + 1(-1) + 1(1) = 0$.<br>
          Norm of $w$: $\|w\| = \sqrt{1^2 + (-1)^2 + 1^2} = \sqrt{3}$.<br>
          <strong>Unit Orthogonal Vector:</strong>
          $$\hat{w} = \frac{w}{\|w\|} = \frac{1}{\sqrt{3}}(1, -1, 1) = \left(\frac{1}{\sqrt{3}}, -\frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}\right)$$</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Cross Product Orthogonality</span>
                <div class="explain-line-title">$u \times v$ is orthogonal to both $u$ and $v$ in $\mathbb{R}^3$</div>
                <div class="explain-line-desc">Evaluating the $3 \times 3$ determinant $(1, -1, 1)$ directly constructs an orthogonal vector without solving simultaneous linear equations.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Normalization to Unit Length</span>
                <div class="explain-line-title">$\hat{w} = \frac{w}{\|w\|}$</div>
                <div class="explain-line-desc">Dividing by length $\sqrt{3}$ ensures the final vector has unit norm $\|\hat{w}\| = 1$. Both $\pm \hat{w}$ are valid unit vectors.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for orthogonal vector $(1, -1, 1)$, 1 mark for normalizing to unit length $\frac{1}{\sqrt{3}}(1, -1, 1)$.</div>
              </div>

              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">Matrix AI Tutor</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <optgroup label="Direct Gemini API (Recommended &amp; Ultra-Fast)">
                        <option value="gemini-2.5-flash" selected>gemini-2.5-flash (Google High Throughput)</option>
                        <option value="gemini-2.5-flash-lite">gemini-2.5-flash-lite (Google Low Latency)</option>
                        <option value="gemini-flash-latest">gemini-flash-latest (Google Stable)</option>
                        <option value="gemini-3.1-flash-lite-preview">gemini-3.1-flash-lite-preview (Google Next-Gen)</option>
                        <option value="gemini-2.5-pro">gemini-2.5-pro (Google Deep Reasoning)</option>
                        <option value="gemini-3.5-flash">gemini-3.5-flash (Google High Speed)</option>
                        <option value="gemini-3.5-flash-lite">gemini-3.5-flash-lite (Google Lightweight)</option>
                      </optgroup>
                      <optgroup label="OpenRouter Free Endpoints">
                        <option value="openrouter/free">openrouter/free (Auto Best Free Endpoint)</option>
                        <option value="google/gemma-4-31b-it:free">google/gemma-4-31b-it:free (OpenRouter)</option>
                        <option value="google/gemma-4-26b-a4b-it:free">google/gemma-4-26b-a4b-it:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3-ultra-550b-a55b:free">nvidia/nemotron-3-ultra-550b-a55b:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3.5-super-vl:free">nvidia/nemotron-3.5-super-vl:free (OpenRouter)</option>
                        <option value="liquid/lfm-2.5-2.6b:free">liquid/lfm-2.5-2.6b:free (Liquid AI Free)</option>
                        <option value="baidu/ernie-5.5-flash-preview:free">baidu/ernie-5.5-flash-preview:free (Baidu Free)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Predicted Q16 -->
      <div class="question-card" data-category="innerproduct">
        <div class="card-top">
          <span class="q-pill extra">Predicted - Q16</span>
        </div>
        <div class="q-heading">State the Parallelogram Law in an inner product space $V$. What is its geometric significance regarding norms?</div>
        <div class="solution-content">
          <p><strong>Parallelogram Law:</strong> For all vectors $u, v \in V$:
          $$\|u + v\|^2 + \|u - v\|^2 = 2\|u\|^2 + 2\|v\|^2$$
          <strong>Geometric Significance:</strong><br>
          1. <strong>Euclidean Geometry:</strong> In any parallelogram, the sum of the squares of the lengths of the two diagonals ($u+v$ and $u-v$) equals the sum of the squares of the lengths of all four sides ($2\|u\|^2 + 2\|v\|^2$).<br>
          2. <strong>Jordan-von Neumann Theorem:</strong> A normed linear space $(V, \|\cdot\|)$ is derived from an inner product ($\|x\| = \sqrt{\langle x, x \rangle}$) if and only if the norm satisfies the Parallelogram Law.</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Inner Product Expansion Proof</span>
                <div class="explain-line-title">$\|u+v\|^2 = \|u\|^2 + 2\text{Re}\langle u, v \rangle + \|v\|^2$</div>
                <div class="explain-line-desc">Adding $\|u-v\|^2 = \|u\|^2 - 2\text{Re}\langle u, v \rangle + \|v\|^2$ cancels the inner product cross-terms, yielding $2\|u\|^2 + 2\|v\|^2$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Test for Inner Product Norms</span>
                <div class="explain-line-title">Distinguishes Hilbert spaces from general Banach spaces</div>
                <div class="explain-line-desc">Norms like the $\ell_1$ norm ($\|x\|_1 = |x_1| + |x_2|$) fail the parallelogram law, proving they cannot be generated by any inner product.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for the exact statement $\|u+v\|^2 + \|u-v\|^2 = 2\|u\|^2 + 2\|v\|^2$, 1 mark for geometric significance (sum of squares of diagonals = sum of squares of sides).</div>
              </div>

              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">Matrix AI Tutor</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <optgroup label="Direct Gemini API (Recommended &amp; Ultra-Fast)">
                        <option value="gemini-2.5-flash" selected>gemini-2.5-flash (Google High Throughput)</option>
                        <option value="gemini-2.5-flash-lite">gemini-2.5-flash-lite (Google Low Latency)</option>
                        <option value="gemini-flash-latest">gemini-flash-latest (Google Stable)</option>
                        <option value="gemini-3.1-flash-lite-preview">gemini-3.1-flash-lite-preview (Google Next-Gen)</option>
                        <option value="gemini-2.5-pro">gemini-2.5-pro (Google Deep Reasoning)</option>
                        <option value="gemini-3.5-flash">gemini-3.5-flash (Google High Speed)</option>
                        <option value="gemini-3.5-flash-lite">gemini-3.5-flash-lite (Google Lightweight)</option>
                      </optgroup>
                      <optgroup label="OpenRouter Free Endpoints">
                        <option value="openrouter/free">openrouter/free (Auto Best Free Endpoint)</option>
                        <option value="google/gemma-4-31b-it:free">google/gemma-4-31b-it:free (OpenRouter)</option>
                        <option value="google/gemma-4-26b-a4b-it:free">google/gemma-4-26b-a4b-it:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3-ultra-550b-a55b:free">nvidia/nemotron-3-ultra-550b-a55b:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3.5-super-vl:free">nvidia/nemotron-3.5-super-vl:free (OpenRouter)</option>
                        <option value="liquid/lfm-2.5-2.6b:free">liquid/lfm-2.5-2.6b:free (Liquid AI Free)</option>
                        <option value="baidu/ernie-5.5-flash-preview:free">baidu/ernie-5.5-flash-preview:free (Baidu Free)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
`,
  
  partB: String.raw`
<!-- Part B - Q1 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B - Q1 (16 Marks)</span>
        <div class="q-heading">State and prove the Gram-Schmidt Orthogonalization Process theorem for constructing an orthonormal basis from an arbitrary basis in an inner product space.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Let $V$ be an inner product space over field $F$ and let $S = \{v_1, v_2, \dots, v_n\}$ be an ordered basis for $V$. Construct an orthogonal basis $\{u_1, u_2, \dots, u_n\}$ and an orthonormal basis $\{e_1, e_2, \dots, e_n\}$ such that $\text{span}\{u_1, \dots, u_k\} = \text{span}\{v_1, \dots, v_k\}$ for all $1 \le k \le n$.</p>

        <div class="partb-step">
          <div class="step-title">Step 1: Recursive Construction of Orthogonal Vectors $\{u_k\}$</div>
          <p>- <strong>Base Step:</strong> Choose the first vector directly:
          $$u_1 = v_1$$
          - <strong>Second Step:</strong> Subtract the orthogonal projection of $v_2$ onto $u_1$:
          $$u_2 = v_2 - \frac{\langle v_2, u_1 \rangle}{\|u_1\|^2} u_1$$
          Verify $\langle u_2, u_1 \rangle = 0$:
          $$\langle u_2, u_1 \rangle = \left\langle v_2 - \frac{\langle v_2, u_1 \rangle}{\|u_1\|^2} u_1, \; u_1 \right\rangle = \langle v_2, u_1 \rangle - \frac{\langle v_2, u_1 \rangle}{\|u_1\|^2} \langle u_1, u_1 \rangle = \langle v_2, u_1 \rangle - \langle v_2, u_1 \rangle = 0$$
          - <strong>General Induction Step:</strong> For $k = 3, \dots, n$:
          $$u_k = v_k - \sum_{j=1}^{k-1} \frac{\langle v_k, u_j \rangle}{\|u_j\|^2} u_j$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 2: Proof of Mutual Orthogonality by Induction</div>
          <p>For any $1 \le i < k$, take the inner product of $u_k$ with $u_i$:
          $$\langle u_k, u_i \rangle = \left\langle v_k - \sum_{j=1}^{k-1} \frac{\langle v_k, u_j \rangle}{\|u_j\|^2} u_j, \; u_i \right\rangle = \langle v_k, u_i \rangle - \sum_{j=1}^{k-1} \frac{\langle v_k, u_j \rangle}{\|u_j\|^2} \langle u_j, u_i \rangle$$
          By induction hypothesis, $\langle u_j, u_i \rangle = 0$ whenever $j \neq i$. The sum collapses to a single non-zero term when $j = i$:
          $$\langle u_k, u_i \rangle = \langle v_k, u_i \rangle - \frac{\langle v_k, u_i \rangle}{\|u_i\|^2} \langle u_i, u_i \rangle = \langle v_k, u_i \rangle - \langle v_k, u_i \rangle = 0$$
          Hence, $\langle u_k, u_i \rangle = 0$ for all $i \neq k$.</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 3: Normalization to Orthonormal Basis</div>
          <p>Since each $u_k \neq 0$ (otherwise $v_k$ would be a linear combination of previous vectors, contradicting independence of basis $S$), divide each orthogonal vector by its Euclidean length:
          $$e_k = \frac{u_k}{\|u_k\|} \quad (k = 1, 2, \dots, n)$$
          Then $\langle e_i, e_j \rangle = \delta_{ij}$. Thus $\{e_1, e_2, \dots, e_n\}$ is an orthonormal basis. Q.E.D.</p>
        </div>

        <div class="tag-result">Conclusion: Complete mathematical induction proof of Gram-Schmidt Orthogonalization. Q.E.D.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Understanding the Gram-Schmidt Goal</div>
                <div class="explain-line-desc">In an inner product space, we often start with an ordinary basis {v1, v2, ..., vn} where vectors are at arbitrary angles to each other and have arbitrary lengths. The Gram-Schmidt process transforms this basis into an orthogonal basis {u1, u2, ..., un} where every pair of vectors is perpendicular (<ui, uj> = 0 for i != j), and then into an orthonormal basis {e1, e2, ..., en} where each vector also has length 1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Projection Formula Intuition</span>
                <div class="explain-line-title">Subtracting the Shadow</div>
                <div class="explain-line-desc">When you project a vector v onto a direction u, the projection is (<v, u> / <u, u>) * u. To make v perpendicular to u, we simply subtract this shadow: v - (<v, u> / <u, u>) * u. The remainder is strictly perpendicular to u!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Base Step Induction</span>
                <div class="explain-line-title">Choosing First Vector</div>
                <div class="explain-line-desc">Set u1 = v1. Since u1 is non-zero (v1 is from a basis), <u1, u1> > 0. Clearly {u1} is an orthogonal set and span{u1} = span{v1}.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Inductive Step for uk</span>
                <div class="explain-line-title">General Recursive Construction</div>
                <div class="explain-line-desc">Assume we have constructed an orthogonal set {u1, ..., u_(k-1)}. We define: uk = vk - sum_{j=1}^{k-1} (<vk, uj> / <uj, uj>) * uj.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Proving Orthogonality <uk, um> = 0</span>
                <div class="explain-line-title">Inner Product Cancellation</div>
                <div class="explain-line-desc">Take the inner product of uk with any previous vector um (where m < k): <uk, um> = <vk, um> - sum_{j=1}^{k-1} (<vk, uj>/<uj, uj>) * <uj, um>. Because earlier vectors are already orthogonal, <uj, um> = 0 for all j != m, and <um, um> for j = m. The sum collapses to <vk, um> - (<vk, um>/<um, um>)*<um, um> = <vk, um> - <vk, um> = 0!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Proving uk is Non-Zero and Spanning</span>
                <div class="explain-line-title">Linear Independence Inheritance</div>
                <div class="explain-line-desc">If uk = 0, then vk would be a linear combination of u1, ..., u_(k-1), and therefore of v1, ..., v_(k-1), which contradicts the linear independence of the original basis! Hence uk is non-zero, and span{u1, ..., uk} = span{v1, ..., vk}.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Normalization to Orthonormal Basis</span>
                <div class="explain-line-title">Dividing by Vector Norms</div>
                <div class="explain-line-desc">To obtain unit-length vectors, divide each orthogonal vector by its Euclidean norm: ei = ui / ||ui||. The resulting set {e1, e2, ..., en} is an orthonormal basis.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Theorem statement and projection formula: 3 marks; Base step and recursive definition: 4 marks; Orthogonality proof via inner product cancellation: 5 marks; Non-zero proof and normalization: 4 marks.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>
        </div>
      </div>
    </div>

    <!-- Part B - Q2 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B - Q2 (16 Marks)</span>
        <div class="q-heading">Apply the Gram-Schmidt orthogonalization process to the basis $B = \{v_1 = (1, 1, 0), v_2 = (1, 2, 0), v_3 = (0, 1, 2)\}$ for $\mathbb{R}^3$ with standard Euclidean inner product to obtain an orthonormal basis.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Transform basis $B$ into an orthonormal basis $\{e_1, e_2, e_3\}$.</p>

        <div class="partb-step">
          <div class="step-title">Step 1: First Vector $u_1$ and Unit Vector $e_1$</div>
          <p>$$u_1 = v_1 = (1, 1, 0)$$
          $$\|u_1\|^2 = 1^2 + 1^2 + 0^2 = 2 \implies \|u_1\| = \sqrt{2}$$
          $$e_1 = \frac{u_1}{\|u_1\|} = \left( \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0 \right)$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 2: Second Vector $u_2$ and Unit Vector $e_2$</div>
          <p>$$\langle v_2, u_1 \rangle = (1)(1) + (2)(1) + (0)(0) = 3$$
          $$u_2 = v_2 - \frac{\langle v_2, u_1 \rangle}{\|u_1\|^2} u_1 = (1, 2, 0) - \frac{3}{2}(1, 1, 0) = \left( 1 - \frac{3}{2}, 2 - \frac{3}{2}, 0 \right) = \left( -\frac{1}{2}, \frac{1}{2}, 0 \right)$$
          $$\|u_2\|^2 = \left(-\frac{1}{2}\right)^2 + \left(\frac{1}{2}\right)^2 + 0^2 = \frac{1}{4} + \frac{1}{4} = \frac{1}{2} \implies \|u_2\| = \frac{1}{\sqrt{2}}$$
          $$e_2 = \frac{u_2}{\|u_2\|} = \sqrt{2}\left( -\frac{1}{2}, \frac{1}{2}, 0 \right) = \left( -\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0 \right)$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 3: Third Vector $u_3$ and Unit Vector $e_3$</div>
          <p>$$\langle v_3, u_1 \rangle = (0)(1) + (1)(1) + (2)(0) = 1$$
          $$\langle v_3, u_2 \rangle = (0)\left(-\frac{1}{2}\right) + (1)\left(\frac{1}{2}\right) + (2)(0) = \frac{1}{2}$$
          $$u_3 = v_3 - \frac{\langle v_3, u_1 \rangle}{\|u_1\|^2} u_1 - \frac{\langle v_3, u_2 \rangle}{\|u_2\|^2} u_2$$
          $$u_3 = (0, 1, 2) - \frac{1}{2}(1, 1, 0) - \frac{1/2}{1/2}\left(-\frac{1}{2}, \frac{1}{2}, 0\right)$$
          $$u_3 = (0, 1, 2) - \left(\frac{1}{2}, \frac{1}{2}, 0\right) - \left(-\frac{1}{2}, \frac{1}{2}, 0\right) = \left( 0 - \frac{1}{2} + \frac{1}{2}, \; 1 - \frac{1}{2} - \frac{1}{2}, \; 2 - 0 - 0 \right) = (0, 0, 2)$$
          $$\|u_3\| = 2 \implies e_3 = \frac{u_3}{\|u_3\|} = (0, 0, 1)$$</p>
        </div>

        <div class="tag-result">Orthonormal Basis: $\left\{ \left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0\right), \; \left(-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0\right), \; (0, 0, 1) \right\}$.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Orthogonalizing a Concrete Basis in R3</div>
                <div class="explain-line-desc">We are given the basis B = {v1 = (1,1,0), v2 = (1,2,0), v3 = (0,1,2)} in R3 under standard Euclidean dot product. We must construct an orthogonal basis {u1, u2, u3} and normalize to obtain orthonormal basis {e1, e2, e3}.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Step 1 Choice of u1</span>
                <div class="explain-line-title">First Basis Vector</div>
                <div class="explain-line-desc">Set u1 = v1 = (1, 1, 0). Compute its squared norm: <u1, u1> = 1^2 + 1^2 + 0^2 = 2. Norm ||u1|| = sqrt(2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Step 2 Computing u2</span>
                <div class="explain-line-title">Removing Projection along u1</div>
                <div class="explain-line-desc">u2 = v2 - (<v2, u1>/<u1, u1>)*u1. Compute dot product: <v2, u1> = 1*1 + 2*1 + 0*0 = 3. Projection = (3/2)*(1, 1, 0) = (3/2, 3/2, 0). u2 = (1, 2, 0) - (3/2, 3/2, 0) = (-1/2, 1/2, 0). To simplify fractions, we can keep u2 = (-1/2, 1/2, 0) or scale to (-1, 1, 0). Let u2 = (-1/2, 1/2, 0). Compute <u2, u2> = 1/4 + 1/4 = 1/2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Step 3 Computing u3</span>
                <div class="explain-line-title">Removing Projections along u1 and u2</div>
                <div class="explain-line-desc">u3 = v3 - (<v3, u1>/<u1, u1>)*u1 - (<v3, u2>/<u2, u2>)*u2. <v3, u1> = 0*1 + 1*1 + 2*0 = 1. First projection = (1/2)*(1, 1, 0) = (1/2, 1/2, 0). <v3, u2> = 0*(-1/2) + 1*(1/2) + 2*0 = 1/2. Second projection = ((1/2)/(1/2))*(-1/2, 1/2, 0) = (-1/2, 1/2, 0).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Subtracting Both Projections</span>
                <div class="explain-line-title">Isolating Third Orthogonal Vector</div>
                <div class="explain-line-desc">u3 = (0, 1, 2) - (1/2, 1/2, 0) - (-1/2, 1/2, 0) = (0 - 1/2 + 1/2, 1 - 1/2 - 1/2, 2 - 0 - 0) = (0, 0, 2). Squared norm: <u3, u3> = 0 + 0 + 4 = 4. Norm ||u3|| = 2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Mutual Orthogonality Check</span>
                <div class="explain-line-title">Verifying Zero Dot Products</div>
                <div class="explain-line-desc"><u1, u2> = 1*(-1/2) + 1*(1/2) + 0 = 0. <u1, u3> = 1*0 + 1*0 + 0*2 = 0. <u2, u3> = (-1/2)*0 + (1/2)*0 + 0*2 = 0. All three vectors are mutually perpendicular.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Normalizing to Orthonormal Basis</span>
                <div class="explain-line-title">Unit Vector Construction</div>
                <div class="explain-line-desc">e1 = u1/||u1|| = (1/sqrt(2), 1/sqrt(2), 0). e2 = u2/||u2|| = ((-1/2)/(1/sqrt(2)), (1/2)/(1/sqrt(2)), 0) = (-1/sqrt(2), 1/sqrt(2), 0). e3 = u3/||u3|| = (0, 0, 2)/2 = (0, 0, 1).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">u1 and its norm: 3 marks; u2 derivation and inner products: 5 marks; u3 derivation and double projection subtraction: 5 marks; Orthonormal basis e1, e2, e3: 3 marks.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>
        </div>
      </div>
    </div>

    <!-- Part B - Q3 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B - Q3 (16 Marks)</span>
        <div class="q-heading">Let the vector space $P_2([0, 1])$ have the inner product $\langle p, q \rangle = \int_0^1 p(x)q(x) dx$. Apply the Gram-Schmidt process to transform the standard basis $S = \{1, x, x^2\}$ into an orthogonal basis.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Construct orthogonal polynomials $\{u_1, u_2, u_3\}$ on the unit interval $[0, 1]$.</p>

        <div class="partb-step">
          <div class="step-title">Step 1: First Polynomial $u_1(x)$</div>
          <p>$$u_1(x) = v_1(x) = 1$$
          $$\|u_1\|^2 = \int_0^1 (1)^2 dx = 1$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 2: Second Polynomial $u_2(x)$</div>
          <p>$$\langle v_2, u_1 \rangle = \int_0^1 x(1) dx = \left[ \frac{x^2}{2} \right]_0^1 = \frac{1}{2}$$
          $$u_2(x) = x - \frac{\langle v_2, u_1 \rangle}{\|u_1\|^2} u_1 = x - \frac{1/2}{1}(1) = x - \frac{1}{2}$$
          $$\|u_2\|^2 = \int_0^1 \left(x - \frac{1}{2}\right)^2 dx = \left[ \frac{(x - 1/2)^3}{3} \right]_0^1 = \frac{(1/2)^3}{3} - \frac{(-1/2)^3}{3} = \frac{1/8 + 1/8}{3} = \frac{1}{12}$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 3: Third Polynomial $u_3(x)$</div>
          <p>$$\langle v_3, u_1 \rangle = \int_0^1 x^2(1) dx = \frac{1}{3}$$
          $$\langle v_3, u_2 \rangle = \int_0^1 x^2\left(x - \frac{1}{2}\right) dx = \int_0^1 \left(x^3 - \frac{1}{2}x^2\right) dx = \frac{1}{4} - \frac{1}{6} = \frac{1}{12}$$
          $$u_3(x) = x^2 - \frac{1/3}{1}(1) - \frac{1/12}{1/12}\left(x - \frac{1}{2}\right) = x^2 - \frac{1}{3} - \left(x - \frac{1}{2}\right) = x^2 - x + \frac{1}{6}$$</p>
        </div>

        <div class="tag-result">Orthogonal Basis: $\left\{ 1, \; x - \frac{1}{2}, \; x^2 - x + \frac{1}{6} \right\}$.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Continuous Polynomial Inner Product Space</div>
                <div class="explain-line-desc">We consider P2([0, 1]) under the integral inner product <p, q> = integral from 0 to 1 of p(x)*q(x) dx. We must apply Gram-Schmidt to the standard basis {v1 = 1, v2 = x, v3 = x^2} to find an orthogonal basis {u1, u2, u3}.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Step 1 First Polynomial u1</span>
                <div class="explain-line-title">Base Function Integration</div>
                <div class="explain-line-desc">Set u1(x) = v1 = 1. Compute squared norm: <u1, u1> = integral_0^1 (1)^2 dx = [x]_0^1 = 1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Step 2 Computing u2(x)</span>
                <div class="explain-line-title">Subtracting Average Projection</div>
                <div class="explain-line-desc">u2(x) = v2 - (<v2, u1>/<u1, u1>)*u1. <v2, u1> = integral_0^1 x*(1) dx = [x^2/2]_0^1 = 1/2. Projection = (1/2 / 1)*1 = 1/2. Thus u2(x) = x - 1/2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Computing Norm of u2</span>
                <div class="explain-line-title">Evaluating Integral of Square</div>
                <div class="explain-line-desc"><u2, u2> = integral_0^1 (x - 1/2)^2 dx = [(x - 1/2)^3 / 3]_0^1 = (1/8 - (-1/8))/3 = (1/4)/3 = 1/12.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Step 3 Computing Inner Products for u3(x)</span>
                <div class="explain-line-title">Projecting x^2 onto u1 and u2</div>
                <div class="explain-line-desc"><v3, u1> = integral_0^1 x^2*(1) dx = [x^3/3]_0^1 = 1/3. <v3, u2> = integral_0^1 x^2*(x - 1/2) dx = integral_0^1 (x^3 - x^2/2) dx = [x^4/4 - x^3/6]_0^1 = 1/4 - 1/6 = 1/12.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Subtracting Projections to Find u3(x)</span>
                <div class="explain-line-title">Eliminating Linear Components</div>
                <div class="explain-line-desc">u3(x) = x^2 - (<v3, u1>/<u1, u1>)*u1 - (<v3, u2>/<u2, u2>)*u2 = x^2 - (1/3 / 1)*(1) - (1/12 / (1/12))*(x - 1/2) = x^2 - 1/3 - 1*(x - 1/2) = x^2 - x + (1/2 - 1/3) = x^2 - x + 1/6.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Verification of Orthogonality</span>
                <div class="explain-line-title">Direct Integral Check</div>
                <div class="explain-line-desc"><u1, u2> = integral_0^1 1*(x - 1/2) dx = [x^2/2 - x/2]_0^1 = 1/2 - 1/2 = 0. <u1, u3> = integral_0^1 (x^2 - x + 1/6) dx = 1/3 - 1/2 + 1/6 = 0. Orthogonal basis is {1, x - 1/2, x^2 - x + 1/6}.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Integral inner product setup and u1: 3 marks; u2 derivation and norm <u2, u2> = 1/12: 5 marks; u3 projection integrals and derivation: 5 marks; Orthogonality verification: 3 marks.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>
        </div>
      </div>
    </div>

    <!-- Part B - Q4 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B - Q4 (16 Marks)</span>
        <div class="q-heading">State and prove Cauchy-Schwarz Inequality and Triangle Inequality in an Inner Product Space.</div>
      </div>
      <div class="solution-content">
        <p><strong>1. Cauchy-Schwarz Inequality:</strong> For all $u, v \in V$:
        $$|\langle u, v \rangle| \le \|u\| \|v\|$$
        with equality holding if and only if $u$ and $v$ are linearly dependent.</p>

        <div class="partb-step">
          <div class="step-title">Proof of Cauchy-Schwarz Inequality</div>
          <p>- If $u = 0$, then $\langle 0, v \rangle = 0$ and $\|0\|\|v\| = 0$. The equality $0 = 0$ holds trivially.<br>
          - Suppose $u \neq 0 \implies \|u\| > 0$. For any scalar $t \in \mathbb{R}$, consider the vector $tu - v$.<br>
          By the non-negativity axiom of inner product:
          $$\|tu - v\|^2 \ge 0 \implies \langle tu - v, tu - v \rangle \ge 0$$
          $$t^2 \langle u, u \rangle - 2t \langle u, v \rangle + \langle v, v \rangle \ge 0$$
          $$t^2 \|u\|^2 - 2t \langle u, v \rangle + \|v\|^2 \ge 0$$
          This is a quadratic in $t$ of the form $At^2 + Bt + C \ge 0$ where $A = \|u\|^2 > 0, B = -2\langle u, v \rangle, C = \|v\|^2$.<br>
          For a quadratic to remain non-negative for all real $t$, its discriminant $B^2 - 4AC$ must be $\le 0$:
          $$(-2\langle u, v \rangle)^2 - 4 \|u\|^2 \|v\|^2 \le 0$$
          $$4 |\langle u, v \rangle|^2 \le 4 \|u\|^2 \|v\|^2 \implies |\langle u, v \rangle|^2 \le \|u\|^2 \|v\|^2$$
          Taking positive square roots on both sides:
          $$|\langle u, v \rangle| \le \|u\| \|v\| \quad \text{Q.E.D.}$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Proof of Triangle Inequality $\|u + v\| \le \|u\| + \|v\|$</div>
          <p>$$\|u + v\|^2 = \langle u + v, u + v \rangle = \|u\|^2 + 2\langle u, v \rangle + \|v\|^2$$
          Since $\langle u, v \rangle \le |\langle u, v \rangle| \le \|u\|\|v\|$ by Cauchy-Schwarz:
          $$\|u + v\|^2 \le \|u\|^2 + 2\|u\|\|v\| + \|v\|^2 = (\|u\| + \|v\|)^2$$
          Taking square roots: $\|u + v\| \le \|u\| + \|v\|$. Q.E.D.</p>
        </div>

        <div class="tag-result">Conclusion: Both fundamental inequalities proved rigorously. Q.E.D.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Fundamental Inequalities of Geometry</div>
                <div class="explain-line-desc">We must state and prove two cornerstone theorems in inner product spaces: (1) Cauchy-Schwarz Inequality: |<u, v>| <= ||u|| * ||v||, with equality if and only if u and v are linearly dependent; (2) Triangle Inequality: ||u + v|| <= ||u|| + ||v||.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Cauchy-Schwarz Proof Strategy</span>
                <div class="explain-line-title">Non-Negativity of Quadratic Norm</div>
                <div class="explain-line-desc">If v = 0, both sides equal 0 and the inequality holds trivially. Assume v != 0. For any real scalar t, the norm of u - t*v is always non-negative: ||u - t*v||^2 >= 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Expanding Quadratic in t</span>
                <div class="explain-line-title">Inner Product Axiom Properties</div>
                <div class="explain-line-desc">0 <= <u - t*v, u - t*v> = <u, u> - t*<v, u> - t*<u, v> + t^2*<v, v> = ||u||^2 - 2t*<u, v> + t^2*||v||^2. This is a real quadratic polynomial At^2 + Bt + C >= 0, where A = ||v||^2 > 0, B = -2<u, v>, and C = ||u||^2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Discriminant Analysis</span>
                <div class="explain-line-title">Non-Positive Discriminant Criterion</div>
                <div class="explain-line-desc">Because the quadratic expression is always >= 0 for all real t, it cannot have two distinct real roots. Its discriminant must be non-positive: Delta = B^2 - 4AC <= 0. (-2<u, v>)^2 - 4*||v||^2*||u||^2 <= 0 -> 4<u, v>^2 <= 4*||u||^2*||v||^2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Concluding Cauchy-Schwarz</span>
                <div class="explain-line-title">Taking Square Root</div>
                <div class="explain-line-desc">Dividing by 4 and taking square root gives: |<u, v>| <= ||u|| * ||v||. Equality holds if and only if ||u - t*v|| = 0, meaning u = t*v (u and v are collinear).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Triangle Inequality Proof Setup</span>
                <div class="explain-line-title">Expanding ||u + v||^2</div>
                <div class="explain-line-desc">||u + v||^2 = <u + v, u + v> = <u, u> + <u, v> + <v, u> + <v, v> = ||u||^2 + 2*Re<u, v> + ||v||^2 <= ||u||^2 + 2*|<u, v>| + ||v||^2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Applying Cauchy-Schwarz to Triangle Inequality</span>
                <div class="explain-line-title">Factoring Perfect Square</div>
                <div class="explain-line-desc">By Cauchy-Schwarz, |<u, v>| <= ||u||*||v||. Therefore: ||u + v||^2 <= ||u||^2 + 2*||u||*||v|| + ||v||^2 = (||u|| + ||v||)^2. Taking square root of both sides gives ||u + v|| <= ||u|| + ||v||.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Cauchy-Schwarz theorem statement and quadratic setup: 3 marks; Expansion and discriminant condition: 5 marks; Cauchy-Schwarz conclusion: 2 marks; Triangle inequality expansion and proof: 6 marks.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>
        </div>
      </div>
    </div>

    <!-- Part B - Q5 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B - Q5 (16 Marks)</span>
        <div class="q-heading">Apply the Gram-Schmidt orthogonalization process to the subset $S = \{(1, 0, 1), (0, 1, 1), (1, 3, 3)\}$ of $\mathbb{R}^3$ to obtain an orthonormal basis, and express $x = (1, 1, 2)$ in terms of this basis.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Construct orthonormal vectors $\{e_1, e_2, e_3\}$ and find coordinates of $x$.</p>

        <div class="partb-step">
          <div class="step-title">Step 1: First Vector $u_1$ and Unit Vector $e_1$</div>
          <p>$$u_1 = v_1 = (1, 0, 1)$$
          $$\|u_1\|^2 = 1^2 + 0^2 + 1^2 = 2 \implies \|u_1\| = \sqrt{2}$$
          $$e_1 = \left( \frac{1}{\sqrt{2}}, 0, \frac{1}{\sqrt{2}} \right)$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 2: Second Vector $u_2$ and Unit Vector $e_2$</div>
          <p>$$\langle v_2, u_1 \rangle = (0)(1) + (1)(0) + (1)(1) = 1$$
          $$u_2 = v_2 - \frac{\langle v_2, u_1 \rangle}{\|u_1\|^2} u_1 = (0, 1, 1) - \frac{1}{2}(1, 0, 1) = \left( -\frac{1}{2}, 1, \frac{1}{2} \right)$$
          $$\|u_2\|^2 = \frac{1}{4} + 1 + \frac{1}{4} = \frac{6}{4} = \frac{3}{2} \implies \|u_2\| = \sqrt{\frac{3}{2}}$$
          $$e_2 = \sqrt{\frac{2}{3}}\left( -\frac{1}{2}, 1, \frac{1}{2} \right) = \left( -\frac{1}{\sqrt{6}}, \frac{2}{\sqrt{6}}, \frac{1}{\sqrt{6}} \right)$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 3: Third Vector $u_3$ and Unit Vector $e_3$</div>
          <p>$$\langle v_3, u_1 \rangle = 1(1) + 3(0) + 3(1) = 4$$
          $$\langle v_3, u_2 \rangle = 1(-1/2) + 3(1) + 3(1/2) = -1/2 + 3 + 3/2 = 4$$
          $$u_3 = v_3 - \frac{4}{2}u_1 - \frac{4}{3/2}u_2 = (1, 3, 3) - 2(1, 0, 1) - \frac{8}{3}\left(-\frac{1}{2}, 1, \frac{1}{2}\right)$$
          $$u_3 = (1, 3, 3) - (2, 0, 2) - \left(-\frac{4}{3}, \frac{8}{3}, \frac{4}{3}\right) = \left( 1 - 2 + \frac{4}{3}, \; 3 - 0 - \frac{8}{3}, \; 3 - 2 - \frac{4}{3} \right) = \left( \frac{1}{3}, \frac{1}{3}, -\frac{1}{3} \right)$$
          $$\|u_3\| = \sqrt{\frac{1}{9} + \frac{1}{9} + \frac{1}{9}} = \frac{\sqrt{3}}{3} = \frac{1}{\sqrt{3}}$$
          $$e_3 = \sqrt{3}\left( \frac{1}{3}, \frac{1}{3}, -\frac{1}{3} \right) = \left( \frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}, -\frac{1}{\sqrt{3}} \right)$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 4: Coordinate Representation of $x = (1, 1, 2)$</div>
          <p>$$c_1 = \langle x, e_1 \rangle = 1\left(\frac{1}{\sqrt{2}}\right) + 0 + 2\left(\frac{1}{\sqrt{2}}\right) = \frac{3}{\sqrt{2}}$$
          $$c_2 = \langle x, e_2 \rangle = 1\left(-\frac{1}{\sqrt{6}}\right) + 1\left(\frac{2}{\sqrt{6}}\right) + 2\left(\frac{1}{\sqrt{6}}\right) = \frac{3}{\sqrt{6}}$$
          $$c_3 = \langle x, e_3 \rangle = 1\left(\frac{1}{\sqrt{3}}\right) + 1\left(\frac{1}{\sqrt{3}}\right) + 2\left(-\frac{1}{\sqrt{3}}\right) = 0$$
          $$x = \frac{3}{\sqrt{2}} e_1 + \frac{3}{\sqrt{6}} e_2 + 0 e_3$$</p>
        </div>

        <div class="tag-result">Result: Orthonormal Basis $\{e_1, e_2, e_3\}$ and $[x] = \left(\frac{3}{\sqrt{2}}, \frac{3}{\sqrt{6}}, 0\right)^T$.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Subspace Basis and Fourier Expansion</div>
                <div class="explain-line-desc">Given S = {v1 = (1,0,1), v2 = (0,1,1), v3 = (1,3,3)} in R3. We must apply Gram-Schmidt to get an orthonormal basis {e1, e2, e3}, and then express the target vector x = (1, 1, 2) as an orthonormal linear combination x = sum <x, ei> * ei.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Step 1 First Orthogonal Vector u1</span>
                <div class="explain-line-title">Base Vector</div>
                <div class="explain-line-desc">u1 = v1 = (1, 0, 1). Squared norm: <u1, u1> = 1^2 + 0^2 + 1^2 = 2. Norm ||u1|| = sqrt(2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Step 2 Computing u2</span>
                <div class="explain-line-title">Subtracting u1 Projection</div>
                <div class="explain-line-desc"><v2, u1> = 0*1 + 1*0 + 1*1 = 1. u2 = (0, 1, 1) - (1/2)*(1, 0, 1) = (-1/2, 1, 1/2). Squared norm: <u2, u2> = 1/4 + 1 + 1/4 = 3/2. Norm ||u2|| = sqrt(3/2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Step 3 Computing u3</span>
                <div class="explain-line-title">Subtracting u1 and u2 Projections</div>
                <div class="explain-line-desc"><v3, u1> = 1*1 + 3*0 + 3*1 = 4. First projection = (4/2)*(1, 0, 1) = (2, 0, 2). <v3, u2> = 1*(-1/2) + 3*(1) + 3*(1/2) = -1/2 + 3 + 3/2 = 4. Second projection = (4 / (3/2))*(-1/2, 1, 1/2) = (8/3)*(-1/2, 1, 1/2) = (-4/3, 8/3, 4/3).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Evaluating u3</span>
                <div class="explain-line-title">Orthogonal Residue</div>
                <div class="explain-line-desc">u3 = (1, 3, 3) - (2, 0, 2) - (-4/3, 8/3, 4/3) = (1 - 2 + 4/3, 3 - 0 - 8/3, 3 - 2 - 4/3) = (1/3, 1/3, -1/3). Squared norm: <u3, u3> = 1/9 + 1/9 + 1/9 = 3/9 = 1/3. Norm ||u3|| = 1/sqrt(3).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Normalizing to Orthonormal Basis</span>
                <div class="explain-line-title">Dividing by Norms</div>
                <div class="explain-line-desc">e1 = (1/sqrt(2), 0, 1/sqrt(2)). e2 = (-1/sqrt(6), 2/sqrt(6), 1/sqrt(6)). e3 = (1/sqrt(3), 1/sqrt(3), -1/sqrt(3)).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Expressing x = (1, 1, 2) in Orthonormal Basis</span>
                <div class="explain-line-title">Fourier Coefficients <x, ei></div>
                <div class="explain-line-desc"><x, e1> = (1*1 + 0 + 2*1)/sqrt(2) = 3/sqrt(2). <x, e2> = (-1 + 2 + 2)/sqrt(6) = 3/sqrt(6). <x, e3> = (1 + 1 - 2)/sqrt(3) = 0. Therefore x = (3/sqrt(2))*e1 + (3/sqrt(6))*e2 + 0*e3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">u1 and u2 derivations: 4 marks; u3 derivation and double projection: 5 marks; Orthonormal basis e1, e2, e3: 4 marks; Coordinate expansion of x = (1, 1, 2): 3 marks.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>
        </div>
      </div>
    </div>

    <!-- Part B - Q6 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B - Q6 (16 Marks)</span>
        <div class="q-heading">Find the least squares approximation to find the best fit: (a) a linear function $y = ax + b$ (b) a quadratic function $y = ax^2 + bx + c$ for the data points: $(1, 1), (2, 4), (3, 9), (4, 16)$.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Apply the normal equations of least squares $A^T A \hat{x} = A^T y$ to find the optimal polynomial models.</p>

        <div class="partb-step">
          <div class="step-title">Section I: Linear Fit $y = ax + b$</div>
          <p>Normal equations for line $y = ax + b$:
          $$\begin{pmatrix} \sum x_i^2 & \sum x_i \\ \sum x_i & n \end{pmatrix} \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} \sum x_i y_i \\ \sum y_i \end{pmatrix}$$
          Data: $(1,1), (2,4), (3,9), (4,16)$ with $n = 4$.<br>
          - $\sum x_i = 1 + 2 + 3 + 4 = 10$<br>
          - $\sum x_i^2 = 1 + 4 + 9 + 16 = 30$<br>
          - $\sum y_i = 1 + 4 + 9 + 16 = 30$<br>
          - $\sum x_i y_i = 1(1) + 2(4) + 3(9) + 4(16) = 1 + 8 + 27 + 64 = 100$<br>
          Normal system:
          $$\begin{pmatrix} 30 & 10 \\ 10 & 4 \end{pmatrix} \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 100 \\ 30 \end{pmatrix}$$
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
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Overdetermined Linear System</div>
                <div class="explain-line-desc">We are given experimental data points (xi, yi). We want to find the line of best fit y = mx + c that minimizes the sum of squared vertical errors sum (yi - (m*xi + c))^2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Normal Equations Derivation</span>
                <div class="explain-line-title">Orthogonality of Residuals</div>
                <div class="explain-line-desc">In matrix form, A*[c, m]^T = Y, where A has a column of 1s and a column of x values. The least squares solution satisfies the Normal Equations: A^T * A * [c, m]^T = A^T * Y.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Writing the Normal Equations in Summation Form</span>
                <div class="explain-line-title">Two Linear Equations in Two Unknowns</div>
                <div class="explain-line-desc">Equation 1: n*c + m*sum(x) = sum(y). Equation 2: c*sum(x) + m*sum(x^2) = sum(xy), where n is the number of data points.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Computing Data Summations</span>
                <div class="explain-line-title">Constructing the Summary Table</div>
                <div class="explain-line-desc">Compute n, sum(x), sum(y), sum(x^2), and sum(xy) from the given table of points. Ensure all arithmetic additions are checked twice.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Solving the 2x2 Linear System</span>
                <div class="explain-line-title">Matrix Elimination or Cramer Rule</div>
                <div class="explain-line-desc">Substitute the calculated sums into Equations 1 and 2. Use substitution or elimination to solve uniquely for the slope m and intercept c.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Residual Analysis and Goodness of Fit</span>
                <div class="explain-line-title">Checking Error Minimization</div>
                <div class="explain-line-desc">Compute predicted values y_hat = m*xi + c and verify that the sum of residuals sum(yi - y_hat) equals zero identically (a mathematical property of least squares regression).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Stating the Equation of Best Fit</div>
                <div class="explain-line-desc">State the final linear equation y = mx + c clearly with coefficients rounded to the requested precision.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Normal equations formulation: 4 marks; Summary calculation table: 4 marks; Solving for m and c: 5 marks; Residual verification and final equation: 3 marks.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>
        </div>
      </div>
    </div>

    <!-- Part B - Q7 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B - Q7 (16 Marks)</span>
        <div class="q-heading">Find the least squares approximation to find the best fit: (a) a linear function $y = ax + b$ (b) a quadratic function $y = ax^2 + bx + c$ for the data points: $(1, 2), (2, 3), (3, 5), (4, 7)$.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Solve normal systems for line and parabola fitting for the dataset $(1,2), (2,3), (3,5), (4,7)$.</p>

        <div class="partb-step">
          <div class="step-title">Section I: Best Fit Line $y = ax + b$</div>
          <p>- $n = 4$<br>
          - $\sum x_i = 1 + 2 + 3 + 4 = 10$<br>
          - $\sum x_i^2 = 1 + 4 + 9 + 16 = 30$<br>
          - $\sum y_i = 2 + 3 + 5 + 7 = 17$<br>
          - $\sum x_i y_i = 1(2) + 2(3) + 3(5) + 4(7) = 2 + 6 + 15 + 28 = 51$<br>
          Normal Equations:
          $$\begin{pmatrix} 30 & 10 \\ 10 & 4 \end{pmatrix} \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 51 \\ 17 \end{pmatrix}$$
          Multiply row 2 by 3: $30a + 12b = 51$.<br>
          Subtract row 1: $(30a + 12b) - (30a + 10b) = 51 - 51 \implies 2b = 0 \implies b = 0$.<br>
          Substitute $b = 0$ into row 2: $10a + 0 = 17 \implies a = 1.7$.<br>
          <strong>Best Fit Line:</strong> $y = 1.7x$.</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Section II: Best Fit Quadratic $y = ax^2 + bx + c$</div>
          <p>- $\sum x_i^3 = 1 + 8 + 27 + 64 = 100$<br>
          - $\sum x_i^4 = 1 + 16 + 81 + 256 = 354$<br>
          - $\sum x_i^2 y_i = 1(2) + 4(3) + 9(5) + 16(7) = 2 + 12 + 45 + 112 = 171$<br>
          Normal system:
          $$\begin{pmatrix} 354 & 100 & 30 \\ 100 & 30 & 10 \\ 30 & 10 & 4 \end{pmatrix} \begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} 171 \\ 51 \\ 17 \end{pmatrix}$$
          Solving by elimination: $a = 0.05, b = 1.45, c = 0.3$.<br>
          <strong>Best Fit Quadratic:</strong> $y = 0.05x^2 + 1.45x + 0.3$.</p>
        </div>

        <div class="tag-result">Result: Line $y = 1.7x$ and Quadratic $y = 0.05x^2 + 1.45x + 0.3$.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Quadratic Curve Fitting</div>
                <div class="explain-line-desc">We are given data points (xi, yi) and need to fit the second-degree parabola y = ax^2 + bx + c minimizing the total squared error.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Normal Equations for Parabola</span>
                <div class="explain-line-title">Three Equations in Three Unknowns</div>
                <div class="explain-line-desc">Differentiating the sum of squared errors E = sum(yi - (ax_i^2 + bx_i + c))^2 with respect to c, b, and a yields the 3 Normal Equations: (1) n*c + b*sum(x) + a*sum(x^2) = sum(y); (2) c*sum(x) + b*sum(x^2) + a*sum(x^3) = sum(xy); (3) c*sum(x^2) + b*sum(x^3) + a*sum(x^4) = sum(x^2*y).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Constructing Summary Table</span>
                <div class="explain-line-title">Tabulating Powers and Cross Products</div>
                <div class="explain-line-desc">Build a table with columns: x, y, x^2, x^3, x^4, xy, x^2*y. Sum each column to obtain n, sum(x), sum(y), sum(x^2), sum(x^3), sum(x^4), sum(xy), sum(x^2*y).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Assembling the 3x3 Linear System</span>
                <div class="explain-line-title">Symmetric Coefficient Matrix</div>
                <div class="explain-line-desc">Substitute the column sums into the 3 equations to form the symmetric linear system [A][c, b, a]^T = [Y].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Solving via Gaussian Elimination</span>
                <div class="explain-line-title">Systematic Row Elimination</div>
                <div class="explain-line-desc">Eliminate c from equations 2 and 3 using equation 1. Then eliminate b from equation 3 to obtain an upper triangular system. Solve for a, then b, then c by back-substitution.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Mathematical Consistency Verification</span>
                <div class="explain-line-title">Checking Symmetry and Trends</div>
                <div class="explain-line-desc">Verify that the leading coefficient a matches the visual curvature of the data (positive for concave up, negative for concave down).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Parabolic Model Stated</div>
                <div class="explain-line-desc">Write down the resulting equation y = ax^2 + bx + c with all coefficients clearly specified.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Normal equations derivation: 4 marks; Calculation table of powers: 5 marks; Solving 3x3 system: 5 marks; Final parabolic equation: 2 marks.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>
        </div>
      </div>
    </div>

    <!-- Part B - Q8 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B - Q8 (16 Marks)</span>
        <div class="q-heading">Find the least squares approximation to find the best fit: (a) a linear function (b) a quadratic function for the data points: $(-3, 9), (-2, 6), (0, 2), (1, 1)$ and compute the error.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Compute least-squares line $y = ax + b$ and quadratic curve $y = ax^2 + bx + c$, and compute total squared residual error $E = \sum (y_i - f(x_i))^2$.</p>

        <div class="partb-step">
          <div class="step-title">Step 1: Compute Table of Sums</div>
          <p>Points: $(-3, 9), (-2, 6), (0, 2), (1, 1)$ with $n = 4$.<br>
          - $\sum x_i = -3 - 2 + 0 + 1 = -4$<br>
          - $\sum x_i^2 = 9 + 4 + 0 + 1 = 14$<br>
          - $\sum y_i = 9 + 6 + 2 + 1 = 18$<br>
          - $\sum x_i y_i = (-3)(9) + (-2)(6) + 0(2) + 1(1) = -27 - 12 + 0 + 1 = -38$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 2: Linear Fit $y = ax + b$</div>
          <p>$$\begin{pmatrix} 14 & -4 \\ -4 & 4 \end{pmatrix} \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} -38 \\ 18 \end{pmatrix}$$
          From row 2: $-4a + 4b = 18 \implies -a + b = 4.5 \implies b = a + 4.5$.<br>
          Substitute into row 1: $14a - 4(a + 4.5) = -38 \implies 10a - 18 = -38 \implies 10a = -20 \implies a = -2$.<br>
          Then $b = -2 + 4.5 = 2.5$.<br>
          <strong>Least Squares Line:</strong> $y = -2x + 2.5$.</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 3: Residual Error Calculation for Line</div>
          <p>- At $x = -3$: $y_{\text{calc}} = -2(-3) + 2.5 = 8.5 \implies e_1 = 9 - 8.5 = 0.5 \implies e_1^2 = 0.25$<br>
          - At $x = -2$: $y_{\text{calc}} = -2(-2) + 2.5 = 6.5 \implies e_2 = 6 - 6.5 = -0.5 \implies e_2^2 = 0.25$<br>
          - At $x = 0$: $y_{\text{calc}} = 2.5 \implies e_3 = 2 - 2.5 = -0.5 \implies e_3^2 = 0.25$<br>
          - At $x = 1$: $y_{\text{calc}} = -2(1) + 2.5 = 0.5 \implies e_4 = 1 - 0.5 = 0.5 \implies e_4^2 = 0.25$<br>
          <strong>Total Squared Error:</strong> $E = 0.25 + 0.25 + 0.25 + 0.25 = 1.0$.</p>
        </div>

        <div class="tag-result">Result: Line $y = -2x + 2.5$ with Total Squared Error $E = 1.0$.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Nonlinear Model Linearization</div>
                <div class="explain-line-desc">When data follows an exponential law y = a * e^(bx) or power law y = a * x^b, we linearize the equation using natural or base-10 logarithms before applying standard least squares.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Logarithmic Transformation</span>
                <div class="explain-line-title">Mapping to Straight Line Form</div>
                <div class="explain-line-desc">Taking natural log: ln(y) = ln(a) + b*x. Let Y = ln(y), A = ln(a), and B = b. The model becomes the linear relation Y = A + B*x.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Normal Equations for Transformed Variables</span>
                <div class="explain-line-title">Standard Linear Regression in Log Space</div>
                <div class="explain-line-desc">The normal equations are: n*A + B*sum(x) = sum(Y), and A*sum(x) + B*sum(x^2) = sum(x*Y).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Computing Transformed Data Table</span>
                <div class="explain-line-title">Calculating Y = ln(y)</div>
                <div class="explain-line-desc">Create columns for x, y, Y = ln(y), x^2, and x*Y. Compute the sum of each column across all n data points.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Solving for Transformed Parameters A and B</span>
                <div class="explain-line-title">Linear Elimination</div>
                <div class="explain-line-desc">Substitute the sums into the normal equations and solve simultaneously for A and B.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Inverting Transformation to Original Parameters</span>
                <div class="explain-line-title">Exponentiation for a</div>
                <div class="explain-line-desc">Once A is found, compute the original amplitude: a = e^A. The parameter b = B directly.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Stating Exponential Model</div>
                <div class="explain-line-desc">Write the final non-linear equation y = a * e^(bx) with numerical constants a and b.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Log transformation and linearized model: 3 marks; Normal equations setup: 4 marks; Data computation table: 4 marks; Solving for A, B and inverting to a, b: 5 marks.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>
        </div>
      </div>
    </div>

    <!-- Part B - Q9 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B - Q9 (16 Marks)</span>
        <div class="q-heading">(i) Let $V$ be the vector space of polynomials with inner product $\langle f, g \rangle = \int_0^1 f(t)g(t) dt$. For $f(t) = t^2 + t - 4$ and $g(t) = t - 1$, find $\langle f, g \rangle, \|f\|$, and $\|g\|$. (ii) If $\alpha = (1, 2, 3, 4)$ and $\beta = (2, 0, -3, 1)$ in $\mathbb{R}^4$, compute $\|\alpha\|, \|\beta\|, \|\alpha + \beta\|$, and $\langle \alpha, \beta \rangle$.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Compute functional inner products and norms in polynomial space $P(t)$ and Euclidean 4-space $\mathbb{R}^4$.</p>

        <div class="partb-step">
          <div class="step-title">Section I: Polynomial Inner Product &amp; Norms</div>
          <p>- $f(t)g(t) = (t^2 + t - 4)(t - 1) = t^3 - t^2 + t^2 - t - 4t + 4 = t^3 - 5t + 4$.
          $$\langle f, g \rangle = \int_0^1 (t^3 - 5t + 4) dt = \left[ \frac{t^4}{4} - \frac{5t^2}{2} + 4t \right]_0^1 = \frac{1}{4} - \frac{5}{2} + 4 = \frac{1 - 10 + 16}{4} = \frac{7}{4}$$
          - $\|g\|^2 = \int_0^1 (t - 1)^2 dt = \left[ \frac{(t-1)^3}{3} \right]_0^1 = 0 - \left(-\frac{1}{3}\right) = \frac{1}{3} \implies \|g\| = \frac{1}{\sqrt{3}}$<br>
          - $\|f\|^2 = \int_0^1 (t^2 + t - 4)^2 dt = \int_0^1 (t^4 + t^2 + 16 + 2t^3 - 8t^2 - 8t) dt = \int_0^1 (t^4 + 2t^3 - 7t^2 - 8t + 16) dt$
          $$= \frac{1}{5} + \frac{2}{4} - \frac{7}{3} - \frac{8}{2} + 16 = \frac{1}{5} + \frac{1}{2} - \frac{7}{3} - 4 + 16 = \frac{1}{5} + \frac{1}{2} - \frac{7}{3} + 12 = \frac{6 + 15 - 70 + 360}{30} = \frac{311}{30}$$
          $$\|f\| = \sqrt{\frac{311}{30}}$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Section II: 4D Euclidean Vector Norms and Inner Product</div>
          <p>Vectors: $\alpha = (1, 2, 3, 4)$ and $\beta = (2, 0, -3, 1)$.<br>
          - $\|\alpha\|^2 = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30 \implies \|\alpha\| = \sqrt{30}$<br>
          - $\|\beta\|^2 = 2^2 + 0^2 + (-3)^2 + 1^2 = 4 + 0 + 9 + 1 = 14 \implies \|\beta\| = \sqrt{14}$<br>
          - $\alpha + \beta = (1+2, 2+0, 3-3, 4+1) = (3, 2, 0, 5)$<br>
          $$\|\alpha + \beta\|^2 = 3^2 + 2^2 + 0^2 + 5^2 = 9 + 4 + 0 + 25 = 38 \implies \|\alpha + \beta\| = \sqrt{38}$$
          - $\langle \alpha, \beta \rangle = 1(2) + 2(0) + 3(-3) + 4(1) = 2 + 0 - 9 + 4 = -3$</p>
        </div>

        <div class="tag-result">Results: $\langle f, g \rangle = \frac{7}{4}, \|g\| = \frac{1}{\sqrt{3}}, \|f\| = \sqrt{\frac{311}{30}}$; $\|\alpha\| = \sqrt{30}, \|\beta\| = \sqrt{14}, \|\alpha+\beta\| = \sqrt{38}, \langle \alpha, \beta \rangle = -3$.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Symmetric Interval Integral Inner Product</div>
                <div class="explain-line-desc">We consider the polynomial space over [-1, 1] with inner product <p, q> = integral from -1 to 1 of p(t)*q(t) dt. We must verify inner product axioms and construct orthogonal Legendre polynomials.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Verifying Inner Product Axioms</span>
                <div class="explain-line-title">The Four Defining Properties</div>
                <div class="explain-line-desc">1. Linearity: <a*p + b*q, r> = integral (a*p + b*q)*r dt = a*<p, r> + b*<q, r>. 2. Symmetry: <p, q> = integral p*q dt = integral q*p dt = <q, p>. 3. Positivity: <p, p> = integral p^2 dt >= 0. 4. Definiteness: integral p^2 dt = 0 for continuous p implies p(t) = 0 identically.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Applying Gram-Schmidt to {1, t, t^2}</span>
                <div class="explain-line-title">Even and Odd Function Symmetry</div>
                <div class="explain-line-desc">On symmetric interval [-1, 1], the integral of any odd function is automatically ZERO! This drastically simplifies all inner products.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Step 1 Choice of u1</span>
                <div class="explain-line-title">First Basis Element</div>
                <div class="explain-line-desc">Set u1(t) = 1. Squared norm: <u1, u1> = integral_-1^1 1 dt = [t]_-1^1 = 2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Step 2 Computing u2</span>
                <div class="explain-line-title">Odd Function Vanishing</div>
                <div class="explain-line-desc">u2 = t - (<t, 1>/<1, 1>)*1. <t, 1> = integral_-1^1 t dt = 0 because t is odd! Therefore u2(t) = t directly! Norm <u2, u2> = integral_-1^1 t^2 dt = [t^3/3]_-1^1 = 2/3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Step 3 Computing u3</span>
                <div class="explain-line-title">Projecting t^2</div>
                <div class="explain-line-desc"><t^2, u1> = integral_-1^1 t^2 dt = 2/3. <t^2, u2> = integral_-1^1 t^3 dt = 0 (odd function!). u3 = t^2 - (<t^2, 1>/<1, 1>)*1 = t^2 - ((2/3)/2)*1 = t^2 - 1/3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Legendre Polynomials Identified</div>
                <div class="explain-line-desc">The resulting orthogonal polynomials are {1, t, t^2 - 1/3}, which are precisely the unnormalized Legendre polynomials P0(t), P1(t), and (2/3)*P2(t).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Axioms verification: 4 marks; u1 and norm computation: 3 marks; u2 derivation using odd function symmetry: 4 marks; u3 derivation and Legendre conclusion: 5 marks.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>
        </div>
      </div>
    </div>

    <!-- Part B - Q10 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B - Q10 (16 Marks)</span>
        <div class="q-heading">(i) Let $V = M_{n \times n}(\mathbb{R})$ and define $\langle A, B \rangle = \text{tr}(B^T A)$ for $A, B \in V$. Verify whether it is an inner product on $V$. (ii) Verify the Triangle Inequality $\|A + B\| \le \|A\| + \|B\|$ for this space.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Rigorously prove the 4 inner product axioms for the Frobenius (trace) inner product and derive the Triangle Inequality.</p>

        <div class="partb-step">
          <div class="step-title">Section I: Verification of 4 Inner Product Axioms</div>
          <p><strong>1. Linearity in First Argument ($I_1$):</strong> Let $A_1, A_2, B \in M_{n \times n}$ and $c \in \mathbb{R}$.
          $$\langle c A_1 + A_2, B \rangle = \text{tr}\left(B^T (c A_1 + A_2)\right) = \text{tr}\left(c B^T A_1 + B^T A_2\right) = c \, \text{tr}(B^T A_1) + \text{tr}(B^T A_2) = c\langle A_1, B \rangle + \langle A_2, B \rangle$$
          <strong>2. Symmetry ($I_2$):</strong>
          $$\langle B, A \rangle = \text{tr}(A^T B)$$
          Since the trace of a matrix equals the trace of its transpose, $\text{tr}(M) = \text{tr}(M^T)$:
          $$\text{tr}(A^T B) = \text{tr}\left((A^T B)^T\right) = \text{tr}(B^T (A^T)^T) = \text{tr}(B^T A) = \langle A, B \rangle$$
          Hence $\langle A, B \rangle = \langle B, A \rangle$.<br><br>
          <strong>3. Positive Definiteness ($I_3$):</strong>
          $$\langle A, A \rangle = \text{tr}(A^T A) = \sum_{i=1}^n (A^T A)_{ii} = \sum_{i=1}^n \sum_{j=1}^n (A^T)_{ij} A_{ji} = \sum_{i=1}^n \sum_{j=1}^n A_{ji}^2 = \sum_{i,j} a_{ij}^2$$
          Since the sum of squares of real numbers is non-negative:
          $$\langle A, A \rangle = \sum_{i,j} a_{ij}^2 \ge 0$$
          Furthermore, $\langle A, A \rangle = 0 \iff \sum_{i,j} a_{ij}^2 = 0 \iff a_{ij} = 0 \text{ for all } i, j \iff A = O$.<br>
          Therefore, $\langle A, B \rangle = \text{tr}(B^T A)$ is a <strong>valid inner product (Frobenius Inner Product)</strong>.</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Section II: Verification of Triangle Inequality</div>
          <p>Frobenius norm: $\|A\| = \sqrt{\text{tr}(A^T A)} = \sqrt{\sum a_{ij}^2}$.
          $$\|A + B\|^2 = \langle A + B, A + B \rangle = \|A\|^2 + 2\langle A, B \rangle + \|B\|^2$$
          By the Cauchy-Schwarz inequality for inner product spaces, $\langle A, B \rangle \le |\langle A, B \rangle| \le \|A\| \|B\|$:
          $$\|A + B\|^2 \le \|A\|^2 + 2\|A\| \|B\| + \|B\|^2 = (\|A\| + \|B\|)^2$$
          Taking positive square roots on both sides:
          $$\|A + B\| \le \|A\| + \|B\| \quad \text{Q.E.D.}$$</p>
        </div>

        <div class="tag-result">Conclusion: Frobenius trace form strictly satisfies all 4 inner product axioms and Triangle Inequality. Q.E.D.</div>
      </div>
      <div class="why-dropdown">
        <button class="why-toggle-btn" onclick="toggleWhy(this)">
          <span>Mathematical Explanation &amp; Step Reasoning</span>
          <span class="why-icon">&#9660;</span>
        </button>
        <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Frobenius Inner Product on Matrix Space</div>
                <div class="explain-line-desc">Let V = Mn x n(R). Define <A, B> = tr(B^T * A). We must prove this defines a valid inner product on matrix space, find the norm of a matrix, and test orthogonality of given matrices.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Component Interpretation</span>
                <div class="explain-line-title">Element-Wise Summation</div>
                <div class="explain-line-desc">Notice that entry (i, i) of B^T * A is sum_k (B^T)_ik * A_ki = sum_k B_ki * A_ki. Therefore tr(B^T * A) = sum_{i, k} A_ki * B_ki. This is simply the standard Euclidean dot product of all n^2 matrix elements!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Proof of Linearity</span>
                <div class="explain-line-title">Trace Linearity Property</div>
                <div class="explain-line-desc"><alpha*A1 + beta*A2, B> = tr(B^T * (alpha*A1 + beta*A2)) = alpha*tr(B^T * A1) + beta*tr(B^T * A2) = alpha*<A1, B> + beta*<A2, B>.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Proof of Symmetry</span>
                <div class="explain-line-title">Trace Cyclic Property</div>
                <div class="explain-line-desc"><B, A> = tr(A^T * B) = tr((A^T * B)^T) = tr(B^T * (A^T)^T) = tr(B^T * A) = <A, B>.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Proof of Positivity and Definiteness</span>
                <div class="explain-line-title">Sum of Squares</div>
                <div class="explain-line-desc"><A, A> = tr(A^T * A) = sum_{i, j} a_ij^2 >= 0. Furthermore, sum a_ij^2 = 0 if and only if each individual entry a_ij = 0, which means A is the zero matrix.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Matrix Norm and Distance</span>
                <div class="explain-line-title">Frobenius Norm Formulation</div>
                <div class="explain-line-desc">The induced norm is the Frobenius norm ||A|| = sqrt(<A, A>) = sqrt(sum a_ij^2). Two matrices are orthogonal if <A, B> = tr(B^T * A) = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Valid Inner Product Space</div>
                <div class="explain-line-desc">All 4 inner product axioms are rigorously satisfied. Mn x n equipped with Frobenius trace product is a complete inner product space.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Component expansion formulation: 3 marks; Linearity proof: 4 marks; Symmetry proof via transpose trace: 4 marks; Positivity and definiteness proof: 5 marks.</div>
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
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>
        </div>
      </div>
    </div>

<!-- Part B Extra Q11 -->
      <div class="question-card" data-category="gram_schmidt">
        <div class="card-top">
          <span class="q-pill extra">Part B - Extra Q11 (16 Marks)</span>
        </div>
        <div class="q-heading">
          Using the Gram-Schmidt Orthogonalization Process, find the $QR$ decomposition of the matrix:
          $$A = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix}$$
          where $Q$ is an orthogonal matrix ($Q^T Q = I$) and $R$ is an upper triangular invertible matrix with positive diagonal entries.
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Apply Gram-Schmidt to the columns of $A$ to obtain orthonormal columns of $Q$, then compute upper triangular matrix $R = Q^T A$ such that $A = QR$.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Extract Columns and Orthonormalize First Vector $a_1$</div>
            <p>Let columns of $A$ be $a_1 = (1, 1, 0)^T, \; a_2 = (1, 0, 1)^T, \; a_3 = (0, 1, 1)^T$.<br>
            - First orthogonal vector:
            $$u_1 = a_1 = \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix}, \quad \|u_1\| = \sqrt{1^2 + 1^2 + 0^2} = \sqrt{2}$$
            - First orthonormal column of $Q$:
            $$q_1 = \frac{u_1}{\|u_1\|} = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1/\sqrt{2} \\ 1/\sqrt{2} \\ 0 \end{bmatrix}$$
            $r_{11} = \|u_1\| = \sqrt{2}$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Orthogonalize Second Vector $a_2$</div>
            <p>- Component of $a_2$ along $q_1$:
            $$r_{12} = q_1^T a_2 = \frac{1}{\sqrt{2}}(1 \cdot 1 + 1 \cdot 0 + 0 \cdot 1) = \frac{1}{\sqrt{2}}$$
            - Subtract projection:
            $$u_2 = a_2 - r_{12} q_1 = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} - \frac{1}{\sqrt{2}} \begin{bmatrix} 1/\sqrt{2} \\ 1/\sqrt{2} \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} - \begin{bmatrix} 1/2 \\ 1/2 \\ 0 \end{bmatrix} = \begin{bmatrix} 1/2 \\ -1/2 \\ 1 \end{bmatrix}$$
            - Norm: $\|u_2\| = \sqrt{(1/2)^2 + (-1/2)^2 + 1^2} = \sqrt{1/4 + 1/4 + 1} = \sqrt{6/4} = \frac{\sqrt{6}}{2}$.<br>
            $r_{22} = \|u_2\| = \frac{\sqrt{6}}{2}$.<br>
            - Second orthonormal column:
            $$q_2 = \frac{u_2}{\|u_2\|} = \frac{2}{\sqrt{6}} \begin{bmatrix} 1/2 \\ -1/2 \\ 1 \end{bmatrix} = \frac{1}{\sqrt{6}} \begin{bmatrix} 1 \\ -1 \\ 2 \end{bmatrix}$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Orthogonalize Third Vector $a_3$</div>
            <p>- Projection components:
            $$r_{13} = q_1^T a_3 = \frac{1}{\sqrt{2}}(1 \cdot 0 + 1 \cdot 1 + 0 \cdot 1) = \frac{1}{\sqrt{2}}$$
            $$r_{23} = q_2^T a_3 = \frac{1}{\sqrt{6}}(1 \cdot 0 + (-1) \cdot 1 + 2 \cdot 1) = \frac{1}{\sqrt{6}}$$
            - Subtract projections:
            $$u_3 = a_3 - r_{13} q_1 - r_{23} q_2 = \begin{bmatrix} 0 \\ 1 \\ 1 \end{bmatrix} - \frac{1}{2} \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix} - \frac{1}{6} \begin{bmatrix} 1 \\ -1 \\ 2 \end{bmatrix}$$
            - Component 1: $0 - 1/2 - 1/6 = -4/6 = -2/3$.<br>
            - Component 2: $1 - 1/2 - (-1/6) = 1/2 + 1/6 = 4/6 = 2/3$.<br>
            - Component 3: $1 - 0 - 2/6 = 4/6 = 2/3$.<br>
            $$u_3 = \begin{bmatrix} -2/3 \\ 2/3 \\ 2/3 \end{bmatrix} = \frac{2}{3} \begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix}$$
            - Norm: $\|u_3\| = \frac{2}{3}\sqrt{(-1)^2 + 1^2 + 1^2} = \frac{2\sqrt{3}}{3} = \frac{2}{\sqrt{3}}$.<br>
            $r_{33} = \|u_3\| = \frac{2}{\sqrt{3}}$.<br>
            - Third orthonormal column:
            $$q_3 = \frac{u_3}{\|u_3\|} = \frac{\sqrt{3}}{2} \cdot \frac{2}{3} \begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix} = \frac{1}{\sqrt{3}} \begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix}$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 4: Assembling $Q$ and $R$ and Verification</div>
            <p>The orthonormal matrix $Q = [q_1 \; q_2 \; q_3]$:
            $$Q = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} & -\frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\ 0 & \frac{2}{\sqrt{6}} & \frac{1}{\sqrt{3}} \end{bmatrix}$$
            The upper triangular matrix $R$:
            $$R = \begin{bmatrix} r_{11} & r_{12} & r_{13} \\ 0 & r_{22} & r_{23} \\ 0 & 0 & r_{33} \end{bmatrix} = \begin{bmatrix} \sqrt{2} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ 0 & \frac{\sqrt{6}}{2} & \frac{1}{\sqrt{6}} \\ 0 & 0 & \frac{2}{\sqrt{3}} \end{bmatrix}$$
            Verification of $QR$:
            $$QR = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} & -\frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\ 0 & \frac{2}{\sqrt{6}} & \frac{1}{\sqrt{3}} \end{bmatrix} \begin{bmatrix} \sqrt{2} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ 0 & \frac{\sqrt{6}}{2} & \frac{1}{\sqrt{6}} \\ 0 & 0 & \frac{2}{\sqrt{3}} \end{bmatrix} = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix} = A$$
            The $QR$ decomposition is verified!</p>
          </div>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Matrix Factorization A = QR</div>
                <div class="explain-line-desc">Given a matrix A with linearly independent columns a1, a2, ..., an. We must factor A into A = Q*R, where Q is an orthogonal matrix with orthonormal columns and R is an upper triangular invertible matrix.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Connection to Gram-Schmidt</span>
                <div class="explain-line-title">Column Orthonormalization</div>
                <div class="explain-line-desc">The columns of Q are precisely the orthonormal vectors q1, q2, ..., qn obtained by applying the Gram-Schmidt process to the columns of A!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Deriving Entries of Upper Triangular Matrix R</span>
                <div class="explain-line-title">Projection Coefficients</div>
                <div class="explain-line-desc">From Gram-Schmidt: a1 = r11*q1, a2 = r12*q1 + r22*q2, and in general aj = sum_{i=1}^j rij*qi. Therefore rij = <aj, qi> for i < j, and rjj = ||uj|| is the norm of the unnormalized vector.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Stepwise Execution of Gram-Schmidt on Columns</span>
                <div class="explain-line-title">Computing q1, q2, q3</div>
                <div class="explain-line-desc">u1 = a1, r11 = ||u1||, q1 = u1/r11. r12 = <a2, q1>, u2 = a2 - r12*q1, r22 = ||u2||, q2 = u2/r22. r13 = <a3, q1>, r23 = <a3, q2>, u3 = a3 - r13*q1 - r23*q2, r33 = ||u3||, q3 = u3/r33.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Assembling Matrix Q and Matrix R</span>
                <div class="explain-line-title">Structural Verification</div>
                <div class="explain-line-desc">Q has columns [q1, q2, q3]. R is upper triangular with r11, r22, r33 on the diagonal and rij above the diagonal.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Verification by Matrix Multiplication Q*R</span>
                <div class="explain-line-title">Multiplying Factors</div>
                <div class="explain-line-desc">Multiply Q by R directly and verify that the product recovers matrix A with zero numerical error.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Application in Least Squares</div>
                <div class="explain-line-desc">The QR factorization A = QR decouples linear systems into R*x = Q^T*b, which can be solved instantly by back-substitution without computing matrix inverses.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">QR theorem formulation: 3 marks; Gram-Schmidt orthogonalization on columns: 5 marks; Calculation of R matrix entries: 4 marks; Product verification Q*R = A: 4 marks.</div>
              </div>
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">Matrix AI Tutor</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <optgroup label="Direct Gemini API (Recommended &amp; Ultra-Fast)">
                        <option value="gemini-2.5-flash" selected>gemini-2.5-flash (Google High Throughput)</option>
                        <option value="gemini-2.5-flash-lite">gemini-2.5-flash-lite (Google Low Latency)</option>
                        <option value="gemini-flash-latest">gemini-flash-latest (Google Stable)</option>
                        <option value="gemini-3.1-flash-lite-preview">gemini-3.1-flash-lite-preview (Google Next-Gen)</option>
                        <option value="gemini-2.5-pro">gemini-2.5-pro (Google Deep Reasoning)</option>
                        <option value="gemini-3.5-flash">gemini-3.5-flash (Google High Speed)</option>
                        <option value="gemini-3.5-flash-lite">gemini-3.5-flash-lite (Google Lightweight)</option>
                      </optgroup>
                      <optgroup label="OpenRouter Free Endpoints">
                        <option value="openrouter/free">openrouter/free (Auto Best Free Endpoint)</option>
                        <option value="google/gemma-4-31b-it:free">google/gemma-4-31b-it:free (OpenRouter)</option>
                        <option value="google/gemma-4-26b-a4b-it:free">google/gemma-4-26b-a4b-it:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3-ultra-550b-a55b:free">nvidia/nemotron-3-ultra-550b-a55b:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3.5-super-vl:free">nvidia/nemotron-3.5-super-vl:free (OpenRouter)</option>
                        <option value="liquid/lfm-2.5-2.6b:free">liquid/lfm-2.5-2.6b:free (Liquid AI Free)</option>
                        <option value="baidu/ernie-5.5-flash-preview:free">baidu/ernie-5.5-flash-preview:free (Baidu Free)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Part B Extra Q12 -->
      <div class="question-card" data-category="inner_product">
        <div class="card-top">
          <span class="q-pill extra">Part B - Extra Q12 (16 Marks)</span>
        </div>
        <div class="q-heading">
          Let $W$ be the subspace of $\mathbb{R}^4$ spanned by $v_1 = (1, 2, 0, -1)$ and $v_2 = (2, 0, 1, 1)$. Given vector $x = (1, 3, -2, 2) \in \mathbb{R}^4$:<br>
          (a) Find an orthogonal basis for $W$.<br>
          (b) Find the orthogonal projection $\text{proj}_W(x)$ of $x$ onto $W$.<br>
          (c) Find the component $x^\perp = x - \text{proj}_W(x)$ orthogonal to $W$.<br>
          (d) Compute the minimum distance from $x$ to subspace $W$.
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Construct an orthogonal basis $\{u_1, u_2\}$ for $W$, evaluate orthogonal projection $\hat{x}$, orthogonal complement component $x^\perp$, and the Euclidean distance $\|x - \hat{x}\|$.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Orthogonal Basis for $W$</div>
            <p>Apply Gram-Schmidt to $\{v_1, v_2\}$:<br>
            - First vector:
            $$u_1 = v_1 = (1, 2, 0, -1)$$
            $\|u_1\|^2 = 1^2 + 2^2 + 0^2 + (-1)^2 = 1 + 4 + 0 + 1 = 6$.<br>
            - Second vector:
            $$\langle v_2, u_1 \rangle = (2)(1) + (0)(2) + (1)(0) + (1)(-1) = 2 - 1 = 1$$
            $$u_2 = v_2 - \frac{\langle v_2, u_1 \rangle}{\|u_1\|^2} u_1 = (2, 0, 1, 1) - \frac{1}{6}(1, 2, 0, -1)$$
            $$u_2 = \left(2 - \frac{1}{6}, \; 0 - \frac{2}{6}, \; 1 - 0, \; 1 - \left(-\frac{1}{6}\right)\right) = \left(\frac{11}{6}, -\frac{1}{3}, 1, \frac{7}{6}\right)$$
            Clearing fractions, scale by $6$ (orthogonal basis direction is preserved):
            $$u_2' = (11, -2, 6, 7)$$
            Check orthogonality: $\langle u_1, u_2' \rangle = (1)(11) + (2)(-2) + (0)(6) + (-1)(7) = 11 - 4 - 7 = 0$. Orthogonal!</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Orthogonal Projection $\text{proj}_W(x)$</div>
            <p>Using the orthogonal basis $\{u_1, u_2'\}$:
            $$\hat{x} = \text{proj}_W(x) = \frac{\langle x, u_1 \rangle}{\|u_1\|^2} u_1 + \frac{\langle x, u_2' \rangle}{\|u_2'\|^2} u_2'$$
            1. For $u_1 = (1, 2, 0, -1)$:
            $$\langle x, u_1 \rangle = (1)(1) + (3)(2) + (-2)(0) + (2)(-1) = 1 + 6 + 0 - 2 = 5$$
            $$\|u_1\|^2 = 6 \implies \text{proj}_{u_1}(x) = \frac{5}{6}(1, 2, 0, -1) = \left(\frac{5}{6}, \frac{5}{3}, 0, -\frac{5}{6}\right)$$
            2. For $u_2' = (11, -2, 6, 7)$:
            $$\langle x, u_2' \rangle = (1)(11) + (3)(-2) + (-2)(6) + (2)(7) = 11 - 6 - 12 + 14 = 7$$
            $$\|u_2'\|^2 = 11^2 + (-2)^2 + 6^2 + 7^2 = 121 + 4 + 36 + 49 = 210$$
            $$\text{proj}_{u_2'}(x) = \frac{7}{210} u_2' = \frac{1}{30}(11, -2, 6, 7) = \left(\frac{11}{30}, -\frac{1}{15}, \frac{1}{5}, \frac{7}{30}\right)$$
            3. Sum of projections:
            $$\hat{x} = \left(\frac{25}{30} + \frac{11}{30}, \; \frac{50}{30} - \frac{2}{30}, \; 0 + \frac{6}{30}, \; -\frac{25}{30} + \frac{7}{30}\right) = \left(\frac{36}{30}, \frac{48}{30}, \frac{6}{30}, -\frac{18}{30}\right) = \left(\frac{6}{5}, \frac{8}{5}, \frac{1}{5}, -\frac{3}{5}\right)$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Orthogonal Component $x^\perp$</div>
            <p>$$x^\perp = x - \hat{x} = (1, 3, -2, 2) - \left(\frac{6}{5}, \frac{8}{5}, \frac{1}{5}, -\frac{3}{5}\right)$$
            $$x^\perp = \left(1 - \frac{6}{5}, \; 3 - \frac{8}{5}, \; -2 - \frac{1}{5}, \; 2 - \left(-\frac{3}{5}\right)\right) = \left(-\frac{1}{5}, \frac{7}{5}, -\frac{11}{5}, \frac{13}{5}\right) = \frac{1}{5}(-1, 7, -11, 13)$$
            Verify orthogonality to $u_1$:
            $$\langle x^\perp, u_1 \rangle = \frac{1}{5}[(-1)(1) + (7)(2) + (-11)(0) + (13)(-1)] = \frac{1}{5}[-1 + 14 - 13] = 0$$
            Verify orthogonality to $v_2 = (2, 0, 1, 1)$:
            $$\langle x^\perp, v_2 \rangle = \frac{1}{5}[(-1)(2) + (7)(0) + (-11)(1) + (13)(1)] = \frac{1}{5}[-2 - 11 + 13] = 0$$
            Orthogonality to entire subspace $W$ holds!</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 4: Shortest Distance from $x$ to $W$</div>
            <p>By the Best Approximation Theorem, the minimum distance is the Euclidean norm of the orthogonal component $\|x^\perp\|$:
            $$d(x, W) = \|x - \hat{x}\| = \|x^\perp\|$$
            $$\|x^\perp\| = \frac{1}{5} \sqrt{(-1)^2 + 7^2 + (-11)^2 + 13^2} = \frac{1}{5} \sqrt{1 + 49 + 121 + 169} = \frac{1}{5} \sqrt{340} = \frac{2\sqrt{85}}{5} \approx 3.6878$$</p>
          </div>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Projection and Minimum Distance in R4</div>
                <div class="explain-line-desc">Given subspace W of R4 spanned by vectors v1, v2, and a target point y. We must find the orthogonal projection proj_W(y) of y onto W, and compute the minimum Euclidean distance from y to W.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Orthogonal Decomposition Theorem</span>
                <div class="explain-line-title">Direct Sum Splitting</div>
                <div class="explain-line-desc">Every vector y in R4 can be uniquely decomposed as y = y_hat + z, where y_hat is in W and z is in W_perp (perpendicular to every vector in W). The vector y_hat is the unique closest point in W to y.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Constructing Orthonormal Basis for W</span>
                <div class="explain-line-title">Gram-Schmidt on Subspace</div>
                <div class="explain-line-desc">Apply Gram-Schmidt to {v1, v2} to obtain an orthonormal basis {u1, u2} for the subspace W.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Formula for Orthogonal Projection</span>
                <div class="explain-line-title">Sum of Projections on Orthonormal Basis</div>
                <div class="explain-line-desc">proj_W(y) = <y, u1>*u1 + <y, u2>*u2. (Or if {v1, v2} are orthogonal: proj_W(y) = (<y, v1>/<v1, v1>)*v1 + (<y, v2>/<v2, v2>)*v2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Calculating Projected Vector y_hat</span>
                <div class="explain-line-title">Component-Wise Evaluation</div>
                <div class="explain-line-desc">Compute the inner products and sum the vector components to find the explicit coordinates of y_hat.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Calculating Error Vector z = y - y_hat</span>
                <div class="explain-line-title">Orthogonal Residue</div>
                <div class="explain-line-desc">Compute z = y - y_hat. Verify that <z, v1> = 0 and <z, v2> = 0, confirming that the error vector is strictly perpendicular to the entire subspace W.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Minimum Distance Computation</span>
                <div class="explain-line-title">Norm of Error Vector</div>
                <div class="explain-line-desc">The minimum distance from y to the subspace W is the length of the perpendicular error vector: dist(y, W) = ||z|| = sqrt(z1^2 + z2^2 + z3^2 + z4^2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Orthogonal decomposition theorem: 3 marks; Subspace basis orthogonalization: 4 marks; Projection vector y_hat computation: 5 marks; Error vector z and minimum distance: 4 marks.</div>
              </div>
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">Matrix AI Tutor</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <optgroup label="Direct Gemini API (Recommended &amp; Ultra-Fast)">
                        <option value="gemini-2.5-flash" selected>gemini-2.5-flash (Google High Throughput)</option>
                        <option value="gemini-2.5-flash-lite">gemini-2.5-flash-lite (Google Low Latency)</option>
                        <option value="gemini-flash-latest">gemini-flash-latest (Google Stable)</option>
                        <option value="gemini-3.1-flash-lite-preview">gemini-3.1-flash-lite-preview (Google Next-Gen)</option>
                        <option value="gemini-2.5-pro">gemini-2.5-pro (Google Deep Reasoning)</option>
                        <option value="gemini-3.5-flash">gemini-3.5-flash (Google High Speed)</option>
                        <option value="gemini-3.5-flash-lite">gemini-3.5-flash-lite (Google Lightweight)</option>
                      </optgroup>
                      <optgroup label="OpenRouter Free Endpoints">
                        <option value="openrouter/free">openrouter/free (Auto Best Free Endpoint)</option>
                        <option value="google/gemma-4-31b-it:free">google/gemma-4-31b-it:free (OpenRouter)</option>
                        <option value="google/gemma-4-26b-a4b-it:free">google/gemma-4-26b-a4b-it:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3-ultra-550b-a55b:free">nvidia/nemotron-3-ultra-550b-a55b:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3.5-super-vl:free">nvidia/nemotron-3.5-super-vl:free (OpenRouter)</option>
                        <option value="liquid/lfm-2.5-2.6b:free">liquid/lfm-2.5-2.6b:free (Liquid AI Free)</option>
                        <option value="baidu/ernie-5.5-flash-preview:free">baidu/ernie-5.5-flash-preview:free (Baidu Free)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

<!-- Predicted Part B Q13 -->
      <div class="question-card" data-category="gram_schmidt">
        <div class="card-top">
          <span class="q-pill extra">Part B - Predicted Q13 (16 Marks)</span>
        </div>
        <div class="q-heading">
          In the inner product space $P_2[0, 1]$ with inner product defined by $\langle f, g \rangle = \int_0^1 f(t)g(t)dt$:<br>
          (a) Apply the Gram-Schmidt process to the standard basis $\{1, t, t^2\}$ to obtain an orthonormal basis $\{q_0(t), q_1(t), q_2(t)\}$.<br>
          (b) Find the best first-degree polynomial approximation $p_1(t) = at + b$ to the function $f(t) = e^t$ on $[0, 1]$.<br>
          (c) Compute the mean square approximation error $\|e^t - p_1(t)\|$.
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Construct an orthonormal polynomial basis on $[0, 1]$, determine the best linear approximation of $e^t$ using orthogonal projection, and evaluate the residual approximation error.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Gram-Schmidt Orthonormal Basis on $[0, 1]$</div>
            <p>Let $v_0 = 1, \; v_1 = t, \; v_2 = t^2$.<br>
            - <strong>First basis vector:</strong>
            $$u_0 = v_0 = 1, \quad \|u_0\|^2 = \int_0^1 1^2 dt = 1 \implies q_0(t) = 1$$
            - <strong>Second basis vector:</strong>
            $$\langle v_1, q_0 \rangle = \int_0^1 t \cdot 1 \, dt = \left[\frac{t^2}{2}\right]_0^1 = \frac{1}{2}$$
            $$u_1 = v_1 - \langle v_1, q_0 \rangle q_0 = t - \frac{1}{2}$$
            $$\|u_1\|^2 = \int_0^1 \left(t - \frac{1}{2}\right)^2 dt = \left[\frac{(t - 1/2)^3}{3}\right]_0^1 = \frac{1/8 - (-1/8)}{3} = \frac{1/4}{3} = \frac{1}{12}$$
            $$q_1(t) = \frac{u_1}{\|u_1\|} = \sqrt{12}\left(t - \frac{1}{2}\right) = 2\sqrt{3}\left(t - \frac{1}{2}\right) = \sqrt{3}(2t - 1)$$
            - <strong>Third basis vector:</strong>
            $$\langle v_2, q_0 \rangle = \int_0^1 t^2 \cdot 1 \, dt = \frac{1}{3}$$
            $$\langle v_2, q_1 \rangle = \int_0^1 t^2 \sqrt{3}(2t - 1) dt = \sqrt{3} \int_0^1 (2t^3 - t^2) dt = \sqrt{3}\left(\frac{2}{4} - \frac{1}{3}\right) = \sqrt{3}\left(\frac{1}{2} - \frac{1}{3}\right) = \frac{\sqrt{3}}{6}$$
            $$u_2 = v_2 - \langle v_2, q_0 \rangle q_0 - \langle v_2, q_1 \rangle q_1 = t^2 - \frac{1}{3}(1) - \frac{\sqrt{3}}{6}[\sqrt{3}(2t - 1)] = t^2 - \frac{1}{3} - \frac{1}{2}(2t - 1) = t^2 - t + \frac{1}{6}$$
            $$\|u_2\|^2 = \int_0^1 \left(t^2 - t + \frac{1}{6}\right)^2 dt = \frac{1}{180}$$
            $$q_2(t) = \sqrt{180}\left(t^2 - t + \frac{1}{6}\right) = 6\sqrt{5}\left(t^2 - t + \frac{1}{6}\right) = \sqrt{5}(6t^2 - 6t + 1)$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Best First-Degree Polynomial Approximation of $e^t$</div>
            <p>The best linear approximation $p_1(t) \in P_1[0, 1]$ is the orthogonal projection onto $\text{span}\{q_0, q_1\}$:
            $$p_1(t) = \langle e^t, q_0 \rangle q_0(t) + \langle e^t, q_1 \rangle q_1(t)$$
            1. First Fourier coefficient:
            $$\langle e^t, q_0 \rangle = \int_0^1 e^t \cdot 1 \, dt = e - 1 \approx 1.71828$$
            2. Second Fourier coefficient:
            $$\langle e^t, q_1 \rangle = \int_0^1 e^t \sqrt{3}(2t - 1) dt = \sqrt{3} \left[2 \int_0^1 t e^t dt - \int_0^1 e^t dt\right]$$
            Using integration by parts: $\int_0^1 t e^t dt = [t e^t - e^t]_0^1 = (e - e) - (0 - 1) = 1$.<br>
            $$\langle e^t, q_1 \rangle = \sqrt{3}[2(1) - (e - 1)] = \sqrt{3}(3 - e) \approx 0.4879$$
            3. Synthesize projection:
            $$p_1(t) = (e - 1)(1) + \sqrt{3}(3 - e) [\sqrt{3}(2t - 1)] = (e - 1) + 3(3 - e)(2t - 1)$$
            $$p_1(t) = (e - 1) + (18 - 6e)t - (9 - 3e) = (18 - 6e)t + (4e - 10)$$
            $$p_1(t) \approx (18 - 16.3097)t + (10.8731 - 10) = 1.6903t + 0.8731$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Mean Square Approximation Error</div>
            <p>By Parseval's identity / Pythagorean theorem:
            $$\|e^t - p_1(t)\|^2 = \|e^t\|^2 - |\langle e^t, q_0 \rangle|^2 - |\langle e^t, q_1 \rangle|^2$$
            1. Norm of $e^t$:
            $$\|e^t\|^2 = \int_0^1 (e^t)^2 dt = \int_0^1 e^{2t} dt = \left[\frac{e^{2t}}{2}\right]_0^1 = \frac{e^2 - 1}{2} \approx \frac{7.38906 - 1}{2} = 3.19453$$
            2. Squared coefficients:
            $$|\langle e^t, q_0 \rangle|^2 = (e - 1)^2 \approx (1.71828)^2 \approx 2.95251$$
            $$|\langle e^t, q_1 \rangle|^2 = 3(3 - e)^2 \approx 3(0.28172)^2 \approx 3(0.07936) \approx 0.23810$$
            3. Error evaluation:
            $$\|e^t - p_1(t)\|^2 = 3.19453 - 2.95251 - 0.23810 = 0.00392$$
            $$\|e^t - p_1(t)\| = \sqrt{0.00392} \approx 0.0626$$
            The maximum mean square error is less than 0.063, demonstrating remarkable approximation fidelity!</p>
          </div>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Shifted Legendre Polynomials</div>
                <div class="explain-line-desc">In the inner product space P2([0, 1]) with inner product <f, g> = integral_0^1 f(x)*g(x) dx, we must construct the first three shifted Legendre polynomials and verify their orthogonality.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Gram-Schmidt Process on {1, x, x^2}</span>
                <div class="explain-line-title">Stepwise Orthogonalization</div>
                <div class="explain-line-desc">Let v0 = 1, v1 = x, v2 = x^2. We apply Gram-Schmidt to convert {v0, v1, v2} into orthogonal polynomials {P0, P1, P2}.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Degree 0 Polynomial P0(x)</span>
                <div class="explain-line-title">Constant Polynomial</div>
                <div class="explain-line-desc">P0(x) = v0 = 1. Squared norm: <P0, P0> = integral_0^1 1 dx = 1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Degree 1 Polynomial P1(x)</span>
                <div class="explain-line-title">Linear Polynomial</div>
                <div class="explain-line-desc">P1(x) = x - (<x, P0>/<P0, P0>)*P0. <x, P0> = integral_0^1 x dx = 1/2. Thus P1(x) = x - 1/2. Check: <P0, P1> = integral_0^1 (x - 1/2) dx = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Degree 2 Polynomial P2(x)</span>
                <div class="explain-line-title">Quadratic Polynomial</div>
                <div class="explain-line-desc">P2(x) = x^2 - (<x^2, P0>/<P0, P0>)*P0 - (<x^2, P1>/<P1, P1>)*P1. <x^2, P0> = 1/3. <P1, P1> = integral_0^1 (x - 1/2)^2 dx = 1/12. <x^2, P1> = integral_0^1 (x^3 - x^2/2) dx = 1/4 - 1/6 = 1/12. Projection on P1 = (1/12 / 1/12)*(x - 1/2) = x - 1/2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Simplifying P2(x)</span>
                <div class="explain-line-title">Collecting Terms</div>
                <div class="explain-line-desc">P2(x) = x^2 - 1/3 - (x - 1/2) = x^2 - x + (1/2 - 1/3) = x^2 - x + 1/6.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Verification and Standard Normalization</span>
                <div class="explain-line-title">Checking Inner Products</div>
                <div class="explain-line-desc"><P0, P2> = integral_0^1 (x^2 - x + 1/6) dx = 1/3 - 1/2 + 1/6 = 0. <P1, P2> = integral_0^1 (x - 1/2)*(x^2 - x + 1/6) dx = 0. The polynomials {1, x - 1/2, x^2 - x + 1/6} form an orthogonal basis.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Inner product definition and P0: 3 marks; P1 derivation and integration: 4 marks; P2 derivation and projections: 6 marks; Orthogonality verification: 3 marks.</div>
              </div>
              <div class="inline-ai-section">
                <div class="inline-ai-header">
                  <div class="inline-ai-title-wrap">
                    <span class="inline-ai-title">Matrix AI Tutor</span>
                    <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
                  </div>
                  <div class="inline-ai-controls">
                    <select class="inline-ai-model-select" onchange="window.AITutor.setModel(this.value)">
                      <optgroup label="Direct Gemini API (Recommended &amp; Ultra-Fast)">
                        <option value="gemini-2.5-flash" selected>gemini-2.5-flash (Google High Throughput)</option>
                        <option value="gemini-2.5-flash-lite">gemini-2.5-flash-lite (Google Low Latency)</option>
                        <option value="gemini-flash-latest">gemini-flash-latest (Google Stable)</option>
                        <option value="gemini-3.1-flash-lite-preview">gemini-3.1-flash-lite-preview (Google Next-Gen)</option>
                        <option value="gemini-2.5-pro">gemini-2.5-pro (Google Deep Reasoning)</option>
                        <option value="gemini-3.5-flash">gemini-3.5-flash (Google High Speed)</option>
                        <option value="gemini-3.5-flash-lite">gemini-3.5-flash-lite (Google Lightweight)</option>
                      </optgroup>
                      <optgroup label="OpenRouter Free Endpoints">
                        <option value="openrouter/free">openrouter/free (Auto Best Free Endpoint)</option>
                        <option value="google/gemma-4-31b-it:free">google/gemma-4-31b-it:free (OpenRouter)</option>
                        <option value="google/gemma-4-26b-a4b-it:free">google/gemma-4-26b-a4b-it:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3-ultra-550b-a55b:free">nvidia/nemotron-3-ultra-550b-a55b:free (OpenRouter)</option>
                        <option value="nvidia/nemotron-3.5-super-vl:free">nvidia/nemotron-3.5-super-vl:free (OpenRouter)</option>
                        <option value="liquid/lfm-2.5-2.6b:free">liquid/lfm-2.5-2.6b:free (Liquid AI Free)</option>
                        <option value="baidu/ernie-5.5-flash-preview:free">baidu/ernie-5.5-flash-preview:free (Baidu Free)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div class="inline-ai-chat-history"></div>
                <div class="inline-ai-input-group">
                  <input type="text" class="inline-ai-input" placeholder="Ask a doubt about this step..." onkeypress="window.AITutor.handleKey(event, this)">
                  <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)" aria-label="Send" title="Send"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

`
};
