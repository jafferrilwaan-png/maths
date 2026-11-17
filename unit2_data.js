// UNIT 2: Linear Transformations & Diagonalizations
window.UNIT2_DATA = {
  title: "Unit-II: Linear Transformations & Diagonalizations",
  desc: "Complete Question Bank + Class Notes derivations for Kernel, Range, Rank-Nullity Theorem, Matrix Representations, Eigenvalues & Diagonalization.",
  partA: String.raw`
      <div class="section-badge">Part 1: Official Question Bank 2-Marks (Unit II)</div>

      <!-- Q1 -->
      <div class="question-card" data-category="transformation">
        <div class="card-top">
          <span class="q-pill">QB • Q1</span>
          <div class="q-heading">Define Ordered Basis.</div>
        </div>
        <div class="solution-content">
          <p>An <strong>Ordered Basis</strong> for a finite-dimensional vector space $V$ of dimension $n$ is a basis endowed with a specific sequence (order) of elements, written as a tuple:
          $$\beta = (v_1, v_2, \dots, v_n)$$
          Unlike a standard set $\{v_1, v_2, \dots, v_n\}$, changing the order of vectors in an ordered basis changes the corresponding coordinate vector $[x]_\beta$ of an element $x \in V$.</p>

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
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">QB • Q2</span>
          <div class="q-heading">Define Null Space (Kernel) and Nullity.</div>
        </div>
        <div class="solution-content">
          <p>Let $T: V \to W$ be a linear transformation. The <strong>Null Space</strong> (or <strong>Kernel</strong>) of $T$, denoted by $N(T)$ or $\ker(T)$, is the set of all vectors in $V$ that map to the zero vector in $W$:
          $$N(T) = \{x \in V \mid T(x) = 0_W\}$$
          The dimension of $N(T)$ is called the <strong>Nullity</strong> of $T$, denoted $\operatorname{nullity}(T) = \dim N(T)$.</p>

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
      <div class="question-card" data-category="transformation">
        <div class="card-top">
          <span class="q-pill">QB • Q3</span>
          <div class="q-heading">Verify whether $T: \mathbb{R}^3 \to \mathbb{R}$ defined by $T(u) = \|u\|$ is a linear transformation or not.</div>
        </div>
        <div class="solution-content">
          <p>For $T$ to be linear, it must satisfy scalar homogeneity: $T(k u) = k T(u)$ for all $k \in \mathbb{R}$ and $u \in \mathbb{R}^3$.<br>
          Consider $u = (1, 0, 0) \in \mathbb{R}^3$ and scalar $k = -1 \in \mathbb{R}$:<br>
          • $\text{LHS} = T(-1 \cdot u) = T(-1, 0, 0) = \|(-1, 0, 0)\| = \sqrt{(-1)^2 + 0^2 + 0^2} = 1$<br>
          • $\text{RHS} = k T(u) = -1 \cdot \|(1, 0, 0)\| = -1 \cdot 1 = -1$<br>
          Since $\text{LHS} = 1 \neq -1 = \text{RHS}$, $T(ku) \neq k T(u)$.<br>
          <span class="tag-result fail">Conclusion: $T$ is NOT a linear transformation.</span></p>

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
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill">QB • Q4</span>
          <div class="q-heading">Define Algebraic Multiplicity and Geometric Multiplicity of an Eigenvalue.</div>
        </div>
        <div class="solution-content">
          <p>Let $A$ be an $n \times n$ matrix with eigenvalue $\lambda$:<br>
          <strong>1. Algebraic Multiplicity (AM):</strong> The multiplicity of $\lambda$ as a root of the characteristic polynomial $\det(A - \lambda I) = 0$.<br>
          <strong>2. Geometric Multiplicity (GM):</strong> The dimension of the eigenspace corresponding to $\lambda$:
          $$\operatorname{GM}(\lambda) = \dim E_\lambda = \operatorname{nullity}(A - \lambda I) = n - \operatorname{rank}(A - \lambda I)$$
          <em>Note:</em> Always $1 \le \operatorname{GM}(\lambda) \le \operatorname{AM}(\lambda)$. $A$ is diagonalizable if and only if $\operatorname{GM}(\lambda) = \operatorname{AM}(\lambda)$ for every eigenvalue.</p>

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
      <div class="question-card" data-category="transformation">
        <div class="card-top">
          <span class="q-pill">QB • Q5</span>
          <div class="q-heading">Is there a linear transformation $T: \mathbb{R}^3 \to \mathbb{R}^2$ such that $T(1,0,3) = (1,1)$ and $T(-2,0,-6) = (2,1)$?</div>
        </div>
        <div class="solution-content">
          <p>Notice that the vector $(-2, 0, -6) = -2 \cdot (1, 0, 3)$.<br>
          If $T$ were a linear transformation, by scalar linearity:
          $$T(-2, 0, -6) = T(-2 \cdot (1, 0, 3)) = -2 \cdot T(1, 0, 3) = -2 \cdot (1, 1) = (-2, -2)$$
          However, the problem gives $T(-2, 0, -6) = (2, 1)$.<br>
          Since $(-2, -2) \neq (2, 1)$, linearity is violated.<br>
          <span class="tag-result fail">Conclusion: NO such linear transformation exists.</span></p>

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
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">QB • Q6</span>
          <div class="q-heading">Prove that a linear transformation $T: V \to W$ is one-to-one (injective) if and only if $N(T) = \{0\}$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Proof:</strong><br>
          <strong>($\Rightarrow$) Assume $T$ is one-one:</strong><br>
          Let $x \in N(T) \implies T(x) = 0_W$. Since $T$ is linear, we also know $T(0_V) = 0_W$.<br>
          Thus $T(x) = T(0_V)$. Since $T$ is one-one, $x = 0_V$. Therefore, $N(T) = \{0_V\}$.<br><br>
          <strong>($\Leftarrow$) Assume $N(T) = \{0\}$:</strong><br>
          Let $x, y \in V$ such that $T(x) = T(y)$.<br>
          $$T(x) - T(y) = 0_W \implies T(x - y) = 0_W \quad (\because T \text{ is linear})$$
          This means $(x - y) \in N(T)$. Since $N(T) = \{0\}$, we must have $x - y = 0 \implies x = y$.<br>
          Therefore, $T$ is one-one.</p>

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
      <div class="question-card" data-category="transformation">
        <div class="card-top">
          <span class="q-pill">QB • Q7</span>
          <div class="q-heading">Check whether $T: \mathbb{R}^2 \to \mathbb{R}^2$ defined by $T(a_1, a_2) = (2a_1 + a_2, a_1)$ is linear.</div>
        </div>
        <div class="solution-content">
          <p>Let $u = (a_1, a_2), v = (b_1, b_2) \in \mathbb{R}^2$ and $\alpha, \beta \in \mathbb{R}$.<br>
          Form linear combination: $\alpha u + \beta v = (\alpha a_1 + \beta b_1, \alpha a_2 + \beta b_2)$.<br>
          Applying $T$:
          $$T(\alpha u + \beta v) = (2(\alpha a_1 + \beta b_1) + (\alpha a_2 + \beta b_2), \; \alpha a_1 + \beta b_1)$$
          $$= (\alpha(2a_1 + a_2) + \beta(2b_1 + b_2), \; \alpha a_1 + \beta b_1)$$
          $$= \alpha(2a_1 + a_2, a_1) + \beta(2b_1 + b_2, b_1) = \alpha T(u) + \beta T(v)$$
          <span class="tag-result">Conclusion: $T$ IS a linear transformation.</span></p>

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

      <!-- Q8 -->
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">QB • Q8</span>
          <div class="q-heading">Verify the Dimension Theorem for $T: \mathbb{R}^3 \to \mathbb{R}^2$ defined by $T(a_1, a_2, a_3) = (a_1 - a_2, 2a_3)$.</div>
        </div>
        <div class="solution-content">
          <p><strong>1. Null Space $N(T)$:</strong> $T(a_1, a_2, a_3) = (0, 0) \implies a_1 - a_2 = 0 \implies a_1 = a_2$, and $2a_3 = 0 \implies a_3 = 0$.<br>
          Vector form: $(a_1, a_2, a_3) = (a_2, a_2, 0) = a_2(1, 1, 0)$.<br>
          Basis for $N(T) = \{(1, 1, 0)\} \implies \operatorname{Nullity}(T) = 1$.<br><br>
          <strong>2. Range Space $R(T)$:</strong> Matrix of $T$ has rows $(1, -1, 0)$ and $(0, 0, 2)$, which are 2 linearly independent rows in $\mathbb{R}^2 \implies \operatorname{Rank}(T) = 2$.<br><br>
          <strong>3. Dimension Theorem:</strong>
          $$\operatorname{Rank}(T) + \operatorname{Nullity}(T) = 2 + 1 = 3 = \dim(\text{Domain } \mathbb{R}^3)$$
          <span class="tag-result">Hence, Dimension Theorem is verified.</span></p>

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

      <!-- Q9 -->
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">QB • Q9</span>
          <div class="q-heading">Define Range Space and Rank of a Linear Transformation.</div>
        </div>
        <div class="solution-content">
          <p>Let $T: V \to W$ be a linear transformation.<br>
          <strong>1. Range Space:</strong> The set of all image vectors in $W$ produced by $T$:
          $$R(T) = \{T(x) \in W \mid x \in V\}$$
          $R(T)$ is a subspace of the codomain $W$.<br>
          <strong>2. Rank:</strong> The dimension of the range space:
          $$\operatorname{rank}(T) = \dim R(T)$$</p>

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

      <!-- Q10 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill">QB • Q10</span>
          <div class="q-heading">Test whether the matrix $A = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} \in M_{2\times 2}(\mathbb{R})$ is diagonalizable.</div>
        </div>
        <div class="solution-content">
          <p>Characteristic equation: $\det(A - \lambda I) = 0$:
          $$\begin{vmatrix} 1 - \lambda & 1 \\ 1 & 1 - \lambda \end{vmatrix} = (1 - \lambda)^2 - 1 = \lambda^2 - 2\lambda = \lambda(\lambda - 2) = 0$$
          The eigenvalues are $\lambda_1 = 0$ and $\lambda_2 = 2$.<br>
          Since $A$ is a $2 \times 2$ matrix with <strong>2 distinct real eigenvalues</strong> ($\lambda_1 \neq \lambda_2$), it has 2 linearly independent eigenvectors.<br>
          <span class="tag-result">Conclusion: $A$ IS diagonalizable.</span></p>

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
  `,
  partB: String.raw`
      <div class="section-badge">Part B: Complete 16-Mark University Exam Questions (Unit II)</div>

      <!-- Part B Q1 -->
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">Part B • Q1 (16 Marks)</span>
          <div class="q-heading">Let $T: \mathbb{R}^3 \to \mathbb{R}^2$ be defined by $T(a_1, a_2, a_3) = (a_1 - a_2, 2a_3)$. Find the basis and dimension for $N(T)$ and $R(T)$. Determine whether $T$ is one-to-one or onto, and verify the Dimension Theorem.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> To rigorously compute the Null space $N(T)$, Range space $R(T)$, check injectivity/surjectivity, and verify $\operatorname{rank}(T) + \operatorname{nullity}(T) = \dim(\text{domain})$.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Determine Null Space $N(T)$ and Nullity</div>
            <p>By definition, $N(T) = \{x \in \mathbb{R}^3 \mid T(x) = (0, 0)\}$.
            $$T(a_1, a_2, a_3) = (a_1 - a_2, 2a_3) = (0, 0)$$
            This yields the simultaneous system:<br>
            1. $a_1 - a_2 = 0 \implies a_1 = a_2$<br>
            2. $2a_3 = 0 \implies a_3 = 0$<br>
            Variable $a_2$ is a free parameter. Any vector in $N(T)$ can be written as:
            $$(a_1, a_2, a_3) = (a_2, a_2, 0) = a_2(1, 1, 0)$$
            • **Basis for $N(T)$:** $\{(1, 1, 0)\}$.<br>
            • **Nullity of $T$:** $\operatorname{nullity}(T) = \dim N(T) = 1$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Determine Range Space $R(T)$ and Rank</div>
            <p>Apply $T$ to the standard basis of $\mathbb{R}^3$, $\{e_1=(1,0,0), e_2=(0,1,0), e_3=(0,0,1)\}$:
            $$T(e_1) = T(1,0,0) = (1, 0)$$
            $$T(e_2) = T(0,1,0) = (-1, 0)$$
            $$T(e_3) = T(0,0,1) = (0, 2)$$
            The range space is spanned by $\{T(e_1), T(e_2), T(e_3)\} = \{(1, 0), (-1, 0), (0, 2)\}$.<br>
            Notice $(1, 0)$ and $(0, 2)$ are linearly independent vectors in $\mathbb{R}^2$ since:
            $$\begin{vmatrix} 1 & 0 \\ 0 & 2 \end{vmatrix} = 2 \neq 0$$
            • **Basis for $R(T)$:** $\{(1, 0), (0, 1)\}$ (or $\{(1,0), (0,2)\}$).<br>
            • **Rank of $T$:** $\operatorname{rank}(T) = \dim R(T) = 2$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Verification of One-to-One and Onto</div>
            <p>• **One-to-One (Injective):** A linear map is 1-1 if and only if $N(T) = \{0\}$. Here $N(T) \neq \{0\}$ ($\operatorname{nullity}(T) = 1 > 0$). Hence, **$T$ is NOT one-to-one**.<br>
            • **Onto (Surjective):** A linear map is onto if $R(T) = \text{Codomain } \mathbb{R}^2$. Here $\operatorname{rank}(T) = 2 = \dim(\mathbb{R}^2)$. Hence, **$T$ IS onto**.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 4: Dimension Theorem (Rank-Nullity) Verification</div>
            <p>$$\operatorname{Rank}(T) + \operatorname{Nullity}(T) = 2 + 1 = 3 = \dim(\text{Domain } \mathbb{R}^3)$$
            <span class="tag-result">The Dimension Theorem is verified with complete mathematical rigor.</span></p>
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
      <div class="question-card" data-category="transformation">
        <div class="card-top">
          <span class="q-pill">Part B • Q2 (16 Marks)</span>
          <div class="q-heading">Consider the basis $S = \{v_1, v_2, v_3\}$ for $\mathbb{R}^3$, where $v_1 = (1,1,1), v_2 = (1,1,0), v_3 = (1,0,0)$. Let $T: \mathbb{R}^3 \to \mathbb{R}^2$ be the linear transformation such that $T(v_1) = (1,0), T(v_2) = (2,-1)$, and $T(v_3) = (4,3)$. Find the general formula for $T(x_1, x_2, x_3)$ and compute $T(2, -3, 5)$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> To express any vector $(x_1, x_2, x_3) \in \mathbb{R}^3$ as a linear combination of basis vectors $S$, apply linearity of $T$, derive the closed formula, and evaluate at $(2, -3, 5)$.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Express $(x_1, x_2, x_3)$ in terms of the basis $S$</div>
            <p>Set $(x_1, x_2, x_3) = c_1 v_1 + c_2 v_2 + c_3 v_3$:
            $$(x_1, x_2, x_3) = c_1(1, 1, 1) + c_2(1, 1, 0) + c_3(1, 0, 0)$$
            Equating components:<br>
            • $c_1 + c_2 + c_3 = x_1$ &emsp; (Eq. 1)<br>
            • $c_1 + c_2 = x_2$ &emsp;&emsp;&emsp;&emsp; (Eq. 2)<br>
            • $c_1 = x_3$ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (Eq. 3)<br><br>
            Solving by back-substitution:<br>
            1. $c_1 = x_3$<br>
            2. From Eq. 2: $x_3 + c_2 = x_2 \implies c_2 = x_2 - x_3$<br>
            3. From Eq. 1: $(c_1 + c_2) + c_3 = x_1 \implies x_2 + c_3 = x_1 \implies c_3 = x_1 - x_2$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Apply Linearity to Find $T(x_1, x_2, x_3)$</div>
            <p>$$T(x_1, x_2, x_3) = c_1 T(v_1) + c_2 T(v_2) + c_3 T(v_3)$$
            Substitute $c_1, c_2, c_3$ and given values $T(v_1) = (1, 0), T(v_2) = (2, -1), T(v_3) = (4, 3)$:
            $$T(x_1, x_2, x_3) = x_3 (1, 0) + (x_2 - x_3)(2, -1) + (x_1 - x_2)(4, 3)$$
            Distribute coordinates:<br>
            • First component: $1(x_3) + 2(x_2 - x_3) + 4(x_1 - x_2) = x_3 + 2x_2 - 2x_3 + 4x_1 - 4x_2 = 4x_1 - 2x_2 - x_3$<br>
            • Second component: $0(x_3) - 1(x_2 - x_3) + 3(x_1 - x_2) = -x_2 + x_3 + 3x_1 - 3x_2 = 3x_1 - 4x_2 + x_3$<br><br>
            <strong>General Formula:</strong>
            $$T(x_1, x_2, x_3) = (4x_1 - 2x_2 - x_3, \; 3x_1 - 4x_2 + x_3)$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Compute $T(2, -3, 5)$</div>
            <p>Substitute $x_1 = 2, x_2 = -3, x_3 = 5$:<br>
            • Component 1: $4(2) - 2(-3) - 5 = 8 + 6 - 5 = 9$<br>
            • Component 2: $3(2) - 4(-3) + 5 = 6 + 12 + 5 = 23$<br><br>
            <span class="tag-result">Final Answer: $T(2, -3, 5) = (9, 23)$</span></p>
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

      <!-- Part B Q3 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill">Part B • Q3 (16 Marks)</span>
          <div class="q-heading">State and prove the Dimension Theorem (Rank-Nullity Theorem) for finite-dimensional vector spaces.</div>
        </div>
        <div class="solution-content">
          <p><strong>Theorem Statement:</strong> Let $V$ and $W$ be vector spaces over a field $F$, and let $V$ be finite-dimensional. If $T: V \to W$ is a linear transformation, then:
          $$\operatorname{nullity}(T) + \operatorname{rank}(T) = \dim V$$
          that is, $\dim N(T) + \dim R(T) = \dim V$.</p>

          <div class="partb-step">
            <div class="step-title">Proof: Step 1 — Setup Basis for Kernel $N(T)$</div>
            <p>Let $\dim V = n$ and let $\dim N(T) = k$, where $k \le n$.<br>
            Let $\{v_1, v_2, \dots, v_k\}$ be an ordered basis for $N(T)$.<br>
            Since $\{v_1, \dots, v_k\}$ is linearly independent in $V$, by the <strong>Basis Extension Theorem</strong>, we can extend it to a full basis of $V$:
            $$\beta = \{v_1, v_2, \dots, v_k, u_1, u_2, \dots, u_{n-k}\}$$
            Here there are $k + (n-k) = n$ basis vectors.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Proof: Step 2 — Construct Spanning Set for $R(T)$</div>
            <p>We claim that the set $S = \{T(u_1), T(u_2), \dots, T(u_{n-k})\}$ is a basis for $R(T)$.<br>
            <strong>Part (a): $S$ Spans $R(T)$:</strong><br>
            Let $w \in R(T)$. Then $w = T(v)$ for some $v \in V$.<br>
            Since $\beta$ is a basis for $V$, express $v$ as:
            $$v = \sum_{i=1}^k a_i v_i + \sum_{j=1}^{n-k} b_j u_j$$
            Applying $T$:
            $$T(v) = \sum_{i=1}^k a_i T(v_i) + \sum_{j=1}^{n-k} b_j T(u_j)$$
            Since $v_i \in N(T)$, $T(v_i) = 0$ for all $1 \le i \le k$:
            $$w = T(v) = 0 + \sum_{j=1}^{n-k} b_j T(u_j) = \sum_{j=1}^{n-k} b_j T(u_j)$$
            Therefore, $S$ spans $R(T)$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Proof: Step 3 — Linear Independence of $S$</div>
            <p>Suppose $c_1 T(u_1) + c_2 T(u_2) + \dots + c_{n-k} T(u_{n-k}) = 0_W$.<br>
            By linearity of $T$:
            $$T(c_1 u_1 + c_2 u_2 + \dots + c_{n-k} u_{n-k}) = 0_W$$
            This implies that the vector $z = \sum_{j=1}^{n-k} c_j u_j \in N(T)$.<br>
            Since $\{v_1, \dots, v_k\}$ is a basis for $N(T)$, $z$ can be written as:
            $$\sum_{j=1}^{n-k} c_j u_j = \sum_{i=1}^k d_i v_i \implies \sum_{i=1}^k (-d_i) v_i + \sum_{j=1}^{n-k} c_j u_j = 0$$
            Since $\beta = \{v_1, \dots, v_k, u_1, \dots, u_{n-k}\}$ is a basis for $V$, all its elements are linearly independent. Thus all coefficients must be zero:
            $$c_1 = c_2 = \dots = c_{n-k} = 0$$
            Hence, $S = \{T(u_1), \dots, T(u_{n-k})\}$ is linearly independent.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Conclusion</div>
            <p>Since $S$ spans $R(T)$ and is linearly independent, $S$ is a basis for $R(T)$.<br>
            Therefore, $\operatorname{rank}(T) = \dim R(T) = n - k$.<br>
            Adding both dimensions:
            $$\operatorname{nullity}(T) + \operatorname{rank}(T) = k + (n - k) = n = \dim V$$
            <span class="tag-result">Q.E.D. Proof is completely verified.</span></p>
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
  `
};
