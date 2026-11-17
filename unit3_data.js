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

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 • Linearity</span>
                <div class="explain-line-title">Additivity and Homogeneity in first argument</div>
                <div class="explain-line-desc">$\langle u+v, w \rangle = \langle u, w \rangle + \langle v, w \rangle$ and $\langle cu, v \rangle = c\langle u, v \rangle$. This ensures the inner product behaves linearly with respect to vector operations.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Symmetry</span>
                <div class="explain-line-title">Conjugate Symmetry Property</div>
                <div class="explain-line-desc">$\langle u, v \rangle = \overline{\langle v, u \rangle}$ for complex spaces, and $\langle u, v \rangle = \langle v, u \rangle$ for real spaces, ensuring geometric consistency.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3 • Positive Definiteness</span>
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

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 • Orthogonality</span>
                <div class="explain-line-title">Zero Inner Product Condition</div>
                <div class="explain-line-desc">Two vectors $u$ and $v$ are orthogonal ($u \perp v$) if and only if $\langle u, v \rangle = 0$. Geometrically, the angle between them is $90^\circ$ ($\cos \theta = 0$).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Orthonormality</span>
                <div class="explain-line-title">Unit Length Requirement</div>
                <div class="explain-line-desc">A set is orthonormal if it is orthogonal AND every vector is a unit vector: $\langle v_i, v_j \rangle = \delta_{ij}$ (Kronecker delta: 1 if $i=j$, 0 if $i \neq j$).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for defining orthogonal ($\langle u, v angle = 0$), 1 mark for orthonormal ($\|u\|=1, \|v\|=1$).</div>
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

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 • Distance Formula</span>
                <div class="explain-line-title">Norm of Difference Vector</div>
                <div class="explain-line-desc">The distance between vectors is defined by $d(a, b) = \|a - b\| = \sqrt{\langle a - b, a - b \rangle}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Orthonormal Expansion</span>
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

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 • Definition</span>
                <div class="explain-line-title">Square Root of Self-Inner Product</div>
                <div class="explain-line-desc">$\|v\| = \sqrt{\langle v, v \rangle}$. The norm assigns a non-negative real length to every vector in $V$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Three Axioms</span>
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

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 • Theorem Statement</span>
                <div class="explain-line-title">Upper Bound on Inner Product</div>
                <div class="explain-line-desc">$|\langle u, v \rangle| \le \|u\| \|v\|$ for all $u, v \in V$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Equality Condition</span>
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

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 • Homogeneity Property</span>
                <div class="explain-line-title">Pulling out scalar reciprocal</div>
                <div class="explain-line-desc">$\|y\| = \|\frac{1}{\|x\|} x\| = |\frac{1}{\|x\|}| \|x\|$ by absolute scalar homogeneity.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Simplification</span>
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

              <div class="explain-line">
                <span class="explain-line-badge">Step 1 • Conjugate Operation</span>
                <div class="explain-line-title">Complex Conjugation of Entries</div>
                <div class="explain-line-desc">Replace each entry $a_{ij}$ with its complex conjugate $\overline{a_{ij}}$: $\overline{1-2i} = 1+2i, \overline{4i} = -4i, \overline{5+i} = 5-i$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Matrix Transpose</span>
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
                <span class="explain-line-badge">Step 1 • Definition</span>
                <div class="explain-line-title">Vectors Orthogonal to Entire Subspace</div>
                <div class="explain-line-desc">$W^\perp = \{v \in V \mid \langle v, w \rangle = 0 \text{ for all } w \in W\}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Subspace Property</span>
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
                <span class="explain-line-badge">Step 1 • Definition</span>
                <div class="explain-line-title">Vector with Unit Length</div>
                <div class="explain-line-desc">A vector $u \in V$ is called a unit vector if $\|u\| = 1$, or equivalently $\langle u, u \rangle = 1$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Normalization Process</span>
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
                <span class="explain-line-badge">Step 1 • Vector Operations</span>
                <div class="explain-line-title">Calculate Sum and Scalar Product</div>
                <div class="explain-line-desc">$u+v = (1+3, 1+2) = (4, 3)$ and $3w = 3(0, -1) = (0, -3)$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Weighted Inner Product</span>
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
                <span class="explain-line-badge">Step 1 • Statement</span>
                <div class="explain-line-title">Pythagorean Theorem in IPS</div>
                <div class="explain-line-desc">If $\langle u, v \rangle = 0$, then $\|u+v\|^2 = \|u\|^2 + \|v\|^2$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Proof</span>
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
                <span class="explain-line-badge">Step 1 • Projection</span>
                <div class="explain-line-title">Inner Product with Basis Vector</div>
                <div class="explain-line-desc">Take inner product of $\sum c_j v_j = 0$ with $v_i$: $\langle \sum c_j v_j, v_i \rangle = c_i \|v_i\|^2 = 0$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 • Conclusion</span>
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
          <button class="inline-ai-send-btn" onclick="window.AITutor.askInline(this)">Ask AI</button>
        </div>
      </div>

        </div>
      </div>
    </div>
`,
  
  partB: String.raw`
<!-- Part B • Q1 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B • Q1 (16 Marks)</span>
        <div class="q-heading">State and prove the Gram-Schmidt Orthogonalization Process theorem for constructing an orthonormal basis from an arbitrary basis in an inner product space.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Let $V$ be an inner product space over field $F$ and let $S = \{v_1, v_2, \dots, v_n\}$ be an ordered basis for $V$. Construct an orthogonal basis $\{u_1, u_2, \dots, u_n\}$ and an orthonormal basis $\{e_1, e_2, \dots, e_n\}$ such that $\text{span}\{u_1, \dots, u_k\} = \text{span}\{v_1, \dots, v_k\}$ for all $1 \le k \le n$.</p>

        <div class="partb-step">
          <div class="step-title">Step 1: Recursive Construction of Orthogonal Vectors $\{u_k\}$</div>
          <p>• <strong>Base Step:</strong> Choose the first vector directly:
          $$u_1 = v_1$$
          • <strong>Second Step:</strong> Subtract the orthogonal projection of $v_2$ onto $u_1$:
          $$u_2 = v_2 - \frac{\langle v_2, u_1 \rangle}{\|u_1\|^2} u_1$$
          Verify $\langle u_2, u_1 \rangle = 0$:
          $$\langle u_2, u_1 \rangle = \left\langle v_2 - \frac{\langle v_2, u_1 \rangle}{\|u_1\|^2} u_1, \; u_1 \right\rangle = \langle v_2, u_1 \rangle - \frac{\langle v_2, u_1 \rangle}{\|u_1\|^2} \langle u_1, u_1 \rangle = \langle v_2, u_1 \rangle - \langle v_2, u_1 \rangle = 0$$
          • <strong>General Induction Step:</strong> For $k = 3, \dots, n$:
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
            <span class="explain-line-badge">Line 1 • Projection Formula</span>
            <div class="explain-line-title">Subtracting Vector Shadow</div>
            <div class="explain-line-desc">The term $\frac{\langle v_k, u_j \rangle}{\|u_j\|^2} u_j$ represents the orthogonal vector projection of $v_k$ onto $u_j$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Line 2 • Induction Argument</span>
            <div class="explain-line-title">Kronecker Delta Collapse</div>
            <div class="explain-line-desc">Orthogonality of previous vectors collapses the summation to only the $j=i$ term, producing perfect mathematical cancellation.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Exam Tip • Scoring Rubric</span>
            <div class="explain-line-title">Full 16 Marks University Guarantee</div>
            <div class="explain-line-desc">Awarded: 4 marks for formula setup, 8 marks for mutual orthogonality proof by induction, 4 marks for normalization.</div>
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

    <!-- Part B • Q2 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B • Q2 (16 Marks)</span>
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
            <span class="explain-line-badge">Line 1 • Projection 1</span>
            <div class="explain-line-title">Coordinate Elimination</div>
            <div class="explain-line-desc">Subtracting $\frac{3}{2}(1,1,0)$ removes the parallel projection along $u_1$, isolating the orthogonal difference.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Line 2 • Projection 2</span>
            <div class="explain-line-title">Pure Z-Axis Isolation</div>
            <div class="explain-line-desc">Because both $u_1$ and $u_2$ lie in the xy-plane, subtracting both projections isolates the pure z-axis vector $(0,0,2)$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Exam Tip • Verification</span>
            <div class="explain-line-title">Check Dot Products</div>
            <div class="explain-line-desc">Quickly verify $e_1 \cdot e_2 = -\frac{1}{2} + \frac{1}{2} = 0$, $e_1 \cdot e_3 = 0$, $e_2 \cdot e_3 = 0$ to guarantee full marks.</div>
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

    <!-- Part B • Q3 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B • Q3 (16 Marks)</span>
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
            <span class="explain-line-badge">Line 1 • Definite Integration</span>
            <div class="explain-line-title">Evaluation on $[0,1]$</div>
            <div class="explain-line-desc">Integral of monomials $\int_0^1 x^k dx = \frac{1}{k+1}$ gives simple harmonic fractions.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Line 2 • Shifted Legendre</span>
            <div class="explain-line-title">Polynomial Orthogonality</div>
            <div class="explain-line-desc">These orthogonal polynomials are the classical shifted Legendre polynomials $P_n^*(x)$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Exam Tip • Verification</span>
            <div class="explain-line-title">Check Orthogonality</div>
            <div class="explain-line-desc">Verify $\int_0^1 (1)(x - 1/2) dx = [x^2/2 - x/2]_0^1 = 0$. Guaranteed full credit!</div>
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
        $$|\langle u, v \rangle| \le \|u\| \|v\|$$
        with equality holding if and only if $u$ and $v$ are linearly dependent.</p>

        <div class="partb-step">
          <div class="step-title">Proof of Cauchy-Schwarz Inequality</div>
          <p>• If $u = 0$, then $\langle 0, v \rangle = 0$ and $\|0\|\|v\| = 0$. The equality $0 = 0$ holds trivially.<br>
          • Suppose $u \neq 0 \implies \|u\| > 0$. For any scalar $t \in \mathbb{R}$, consider the vector $tu - v$.<br>
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
            <span class="explain-line-badge">Line 1 • Quadratic Form</span>
            <div class="explain-line-title">Real Parameter $t$</div>
            <div class="explain-line-desc">Forming $\|tu-v\|^2 \ge 0$ creates a parabola touching or above the t-axis, enforcing $\Delta \le 0$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Line 2 • Binomial Expansion</span>
            <div class="explain-line-title">Completing the Square</div>
            <div class="explain-line-desc">Substituting the Cauchy-Schwarz bound into the middle term gives the exact perfect square $(\|u\|+\|v\|)^2$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Exam Tip • Marks Distribution</span>
            <div class="explain-line-title">Scoring Scheme</div>
            <div class="explain-line-desc">10 marks for Cauchy-Schwarz discriminant proof, 6 marks for Triangle Inequality deduction.</div>
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
            <span class="explain-line-badge">Line 1 • Gram-Schmidt Steps</span>
            <div class="explain-line-title">Systematic Projection Subtraction</div>
            <div class="explain-line-desc">Each orthogonal vector subtracts components along all previously calculated vectors.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Line 2 • Fourier Coefficients</span>
            <div class="explain-line-title">Orthonormal Expansion Formula</div>
            <div class="explain-line-desc">Because the basis is orthonormal, coordinates $c_i = \langle x, e_i \rangle$ are found by direct dot products without matrix inversion.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Exam Tip • Verification</span>
            <div class="explain-line-title">Check Coordinate Reconstruction</div>
            <div class="explain-line-desc">$\frac{3}{2}(1,0,1) + \frac{1}{2}(-1,2,1) = (1,1,2) = x$. Full 16 marks guaranteed!</div>
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

    <!-- Part B • Q6 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B • Q6 (16 Marks)</span>
        <div class="q-heading">Find the least squares approximation to find the best fit: (a) a linear function $y = ax + b$ (b) a quadratic function $y = ax^2 + bx + c$ for the data points: $(1, 1), (2, 4), (3, 9), (4, 16)$.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Apply the normal equations of least squares $A^T A \hat{x} = A^T y$ to find the optimal polynomial models.</p>

        <div class="partb-step">
          <div class="step-title">Section I: Linear Fit $y = ax + b$</div>
          <p>Normal equations for line $y = ax + b$:
          $$\begin{pmatrix} \sum x_i^2 & \sum x_i \\ \sum x_i & n \end{pmatrix} \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} \sum x_i y_i \\ \sum y_i \end{pmatrix}$$
          Data: $(1,1), (2,4), (3,9), (4,16)$ with $n = 4$.<br>
          • $\sum x_i = 1 + 2 + 3 + 4 = 10$<br>
          • $\sum x_i^2 = 1 + 4 + 9 + 16 = 30$<br>
          • $\sum y_i = 1 + 4 + 9 + 16 = 30$<br>
          • $\sum x_i y_i = 1(1) + 2(4) + 3(9) + 4(16) = 1 + 8 + 27 + 64 = 100$<br>
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
            <span class="explain-line-badge">Line 1 • Normal Equations</span>
            <div class="explain-line-title">Gaussian Normal System</div>
            <div class="explain-line-desc">Setting the gradient of sum of squared residuals to zero yields $A^TA\hat{x} = A^Ty$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Line 2 • Zero Residual Recognition</span>
            <div class="explain-line-title">Exact Quadratic Interpolation</div>
            <div class="explain-line-desc">Recognizing that $y_i = x_i^2$ exactly eliminates solving a 3x3 normal system.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Exam Tip • University Scoring</span>
            <div class="explain-line-title">Mark Allocation</div>
            <div class="explain-line-desc">8 marks for linear fit equations and solution, 8 marks for quadratic analysis.</div>
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

    <!-- Part B • Q7 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B • Q7 (16 Marks)</span>
        <div class="q-heading">Find the least squares approximation to find the best fit: (a) a linear function $y = ax + b$ (b) a quadratic function $y = ax^2 + bx + c$ for the data points: $(1, 2), (2, 3), (3, 5), (4, 7)$.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Solve normal systems for line and parabola fitting for the dataset $(1,2), (2,3), (3,5), (4,7)$.</p>

        <div class="partb-step">
          <div class="step-title">Section I: Best Fit Line $y = ax + b$</div>
          <p>• $n = 4$<br>
          • $\sum x_i = 1 + 2 + 3 + 4 = 10$<br>
          • $\sum x_i^2 = 1 + 4 + 9 + 16 = 30$<br>
          • $\sum y_i = 2 + 3 + 5 + 7 = 17$<br>
          • $\sum x_i y_i = 1(2) + 2(3) + 3(5) + 4(7) = 2 + 6 + 15 + 28 = 51$<br>
          Normal Equations:
          $$\begin{pmatrix} 30 & 10 \\ 10 & 4 \end{pmatrix} \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 51 \\ 17 \end{pmatrix}$$
          Multiply row 2 by 3: $30a + 12b = 51$.<br>
          Subtract row 1: $(30a + 12b) - (30a + 10b) = 51 - 51 \implies 2b = 0 \implies b = 0$.<br>
          Substitute $b = 0$ into row 2: $10a + 0 = 17 \implies a = 1.7$.<br>
          <strong>Best Fit Line:</strong> $y = 1.7x$.</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Section II: Best Fit Quadratic $y = ax^2 + bx + c$</div>
          <p>• $\sum x_i^3 = 1 + 8 + 27 + 64 = 100$<br>
          • $\sum x_i^4 = 1 + 16 + 81 + 256 = 354$<br>
          • $\sum x_i^2 y_i = 1(2) + 4(3) + 9(5) + 16(7) = 2 + 12 + 45 + 112 = 171$<br>
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
            <span class="explain-line-badge">Line 1 • Summary Table</span>
            <div class="explain-line-title">Column Sums Calculation</div>
            <div class="explain-line-desc">Form tabular summation of $x, y, x^2, x^3, x^4, xy, x^2y$ to populate Gaussian matrix entries.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Line 2 • Linear Elimination</span>
            <div class="explain-line-title">Clean Solution $b=0$</div>
            <div class="explain-line-desc">Multiplying row 2 by 3 cancels the RHS constant immediately, yielding $b = 0$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Exam Tip • Verification</span>
            <div class="explain-line-title">Error Check</div>
            <div class="explain-line-desc">For $x=1, y=1.7 \approx 2$; for $x=4, y=6.8 \approx 7$. Residuals are minimal!</div>
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

    <!-- Part B • Q8 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B • Q8 (16 Marks)</span>
        <div class="q-heading">Find the least squares approximation to find the best fit: (a) a linear function (b) a quadratic function for the data points: $(-3, 9), (-2, 6), (0, 2), (1, 1)$ and compute the error.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Compute least-squares line $y = ax + b$ and quadratic curve $y = ax^2 + bx + c$, and compute total squared residual error $E = \sum (y_i - f(x_i))^2$.</p>

        <div class="partb-step">
          <div class="step-title">Step 1: Compute Table of Sums</div>
          <p>Points: $(-3, 9), (-2, 6), (0, 2), (1, 1)$ with $n = 4$.<br>
          • $\sum x_i = -3 - 2 + 0 + 1 = -4$<br>
          • $\sum x_i^2 = 9 + 4 + 0 + 1 = 14$<br>
          • $\sum y_i = 9 + 6 + 2 + 1 = 18$<br>
          • $\sum x_i y_i = (-3)(9) + (-2)(6) + 0(2) + 1(1) = -27 - 12 + 0 + 1 = -38$</p>
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
          <p>• At $x = -3$: $y_{\text{calc}} = -2(-3) + 2.5 = 8.5 \implies e_1 = 9 - 8.5 = 0.5 \implies e_1^2 = 0.25$<br>
          • At $x = -2$: $y_{\text{calc}} = -2(-2) + 2.5 = 6.5 \implies e_2 = 6 - 6.5 = -0.5 \implies e_2^2 = 0.25$<br>
          • At $x = 0$: $y_{\text{calc}} = 2.5 \implies e_3 = 2 - 2.5 = -0.5 \implies e_3^2 = 0.25$<br>
          • At $x = 1$: $y_{\text{calc}} = -2(1) + 2.5 = 0.5 \implies e_4 = 1 - 0.5 = 0.5 \implies e_4^2 = 0.25$<br>
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
            <span class="explain-line-badge">Line 1 • Matrix Setup</span>
            <div class="explain-line-title">Gaussian Normal System</div>
            <div class="explain-line-desc">The coefficient matrix $\begin{pmatrix} 14 & -4 \\ -4 & 4 \end{pmatrix}$ has determinant $56 - 16 = 40 \neq 0$, ensuring unique solution.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Line 2 • Symmetric Residuals</span>
            <div class="explain-line-title">Residual Symmetry</div>
            <div class="explain-line-desc">Notice every error is exactly $\pm 0.5$, indicating optimal least-squares balance across negative and positive domains.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Exam Tip • Verification</span>
            <div class="explain-line-title">Zero Sum of Residuals</div>
            <div class="explain-line-desc">$\sum e_i = 0.5 - 0.5 - 0.5 + 0.5 = 0$. Sum of residuals for linear regression with intercept is always zero!</div>
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

    <!-- Part B • Q9 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B • Q9 (16 Marks)</span>
        <div class="q-heading">(i) Let $V$ be the vector space of polynomials with inner product $\langle f, g \rangle = \int_0^1 f(t)g(t) dt$. For $f(t) = t^2 + t - 4$ and $g(t) = t - 1$, find $\langle f, g \rangle, \|f\|$, and $\|g\|$. (ii) If $\alpha = (1, 2, 3, 4)$ and $\beta = (2, 0, -3, 1)$ in $\mathbb{R}^4$, compute $\|\alpha\|, \|\beta\|, \|\alpha + \beta\|$, and $\langle \alpha, \beta \rangle$.</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Compute functional inner products and norms in polynomial space $P(t)$ and Euclidean 4-space $\mathbb{R}^4$.</p>

        <div class="partb-step">
          <div class="step-title">Section I: Polynomial Inner Product &amp; Norms</div>
          <p>• $f(t)g(t) = (t^2 + t - 4)(t - 1) = t^3 - t^2 + t^2 - t - 4t + 4 = t^3 - 5t + 4$.
          $$\langle f, g \rangle = \int_0^1 (t^3 - 5t + 4) dt = \left[ \frac{t^4}{4} - \frac{5t^2}{2} + 4t \right]_0^1 = \frac{1}{4} - \frac{5}{2} + 4 = \frac{1 - 10 + 16}{4} = \frac{7}{4}$$
          • $\|g\|^2 = \int_0^1 (t - 1)^2 dt = \left[ \frac{(t-1)^3}{3} \right]_0^1 = 0 - \left(-\frac{1}{3}\right) = \frac{1}{3} \implies \|g\| = \frac{1}{\sqrt{3}}$<br>
          • $\|f\|^2 = \int_0^1 (t^2 + t - 4)^2 dt = \int_0^1 (t^4 + t^2 + 16 + 2t^3 - 8t^2 - 8t) dt = \int_0^1 (t^4 + 2t^3 - 7t^2 - 8t + 16) dt$
          $$= \frac{1}{5} + \frac{2}{4} - \frac{7}{3} - \frac{8}{2} + 16 = \frac{1}{5} + \frac{1}{2} - \frac{7}{3} - 4 + 16 = \frac{1}{5} + \frac{1}{2} - \frac{7}{3} + 12 = \frac{6 + 15 - 70 + 360}{30} = \frac{311}{30}$$
          $$\|f\| = \sqrt{\frac{311}{30}}$$</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Section II: 4D Euclidean Vector Norms and Inner Product</div>
          <p>Vectors: $\alpha = (1, 2, 3, 4)$ and $\beta = (2, 0, -3, 1)$.<br>
          • $\|\alpha\|^2 = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30 \implies \|\alpha\| = \sqrt{30}$<br>
          • $\|\beta\|^2 = 2^2 + 0^2 + (-3)^2 + 1^2 = 4 + 0 + 9 + 1 = 14 \implies \|\beta\| = \sqrt{14}$<br>
          • $\alpha + \beta = (1+2, 2+0, 3-3, 4+1) = (3, 2, 0, 5)$<br>
          $$\|\alpha + \beta\|^2 = 3^2 + 2^2 + 0^2 + 5^2 = 9 + 4 + 0 + 25 = 38 \implies \|\alpha + \beta\| = \sqrt{38}$$
          • $\langle \alpha, \beta \rangle = 1(2) + 2(0) + 3(-3) + 4(1) = 2 + 0 - 9 + 4 = -3$</p>
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
            <span class="explain-line-badge">Line 1 • Polynomial Expansion</span>
            <div class="explain-line-title">Term-by-term Integration</div>
            <div class="explain-line-desc">Expand trinomial product carefully before integrating using power rule $\int t^n dt = \frac{t^{n+1}}{n+1}$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Line 2 • Euclidean Metric</span>
            <div class="explain-line-title">Pythagorean Metric in $\mathbb{R}^4$</div>
            <div class="explain-line-desc">Sum of squared components gives exact vector norm; dot product cross-check confirms $\|\alpha+\beta\|^2 = 30 + 14 + 2(-3) = 38$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Exam Tip • Verification</span>
            <div class="explain-line-title">Pythagorean Cross-Check</div>
            <div class="explain-line-desc">$\|\alpha+\beta\|^2 = \|\alpha\|^2 + \|\beta\|^2 + 2\langle \alpha, \beta \rangle = 30 + 14 - 6 = 38$. Verified!</div>
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

    <!-- Part B • Q10 (16 Marks) -->
    <div class="question-card" data-category="orthogonality">
      <div class="card-top">
        <span class="q-pill">Part B • Q10 (16 Marks)</span>
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
            <span class="explain-line-badge">Line 1 • Trace Properties</span>
            <div class="explain-line-title">Transpose Invariance of Trace</div>
            <div class="explain-line-desc">Using $\text{tr}(M) = \text{tr}(M^T)$ proves symmetry $\langle A, B \rangle = \langle B, A \rangle$ without expanding indices.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Line 2 • Sum of Squares</span>
            <div class="explain-line-title">Componentwise Frobenius Norm</div>
            <div class="explain-line-desc">$(A^TA)_{ii}$ equals the dot product of column $i$ of $A$ with itself, proving $\text{tr}(A^TA) = \sum_{i,j} a_{ij}^2 \ge 0$.</div>
          </div>
          <div class="explain-line">
            <span class="explain-line-badge">Exam Tip • University Scoring</span>
            <div class="explain-line-title">Full 16 Marks Rubric</div>
            <div class="explain-line-desc">10 marks for verifying all 4 axioms rigorously, 6 marks for Triangle Inequality proof.</div>
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
