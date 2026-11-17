// UNIT 1: Vector Spaces (Part A: 16 Questions, Part B: 12 Full-Length 16-Mark Questions)
window.UNIT1_DATA = {
  title: "Unit-I: Vector Spaces",
  desc: "Complete Question Bank + Class Notes derivations with interactive step dropdowns and KaTeX math.",
  partA: String.raw`<div class="section-badge">Part 1: Official Question Bank 2-Marks (Compulsory Q1–Q10)</div>
<!-- Q1 -->
<div class="question-card" data-category="axioms">
<div class="card-top">
<span class="q-pill">QB • Q1</span>
<div class="q-heading">Define Vector Space.</div>
</div>
<div class="solution-content">
<p>A non-empty set $V$ is called a <strong>Vector Space</strong> over a field $F$, denoted $V(F)$, under vector addition ($+$) and scalar multiplication ($\cdot$), if for all $u, v, w \in V$ and $\alpha, \beta \in F$, the following 10 axioms hold:</p>
<div class="math-panel">
<div class="axiom-item"><span class="axiom-name">A1. Closure under Addition:</span> $u + v \in V$</div>
<div class="axiom-item"><span class="axiom-name">A2. Associative Law:</span> $(u + v) + w = u + (v + w)$</div>
<div class="axiom-item"><span class="axiom-name">A3. Additive Identity:</span> $\exists\, 0 \in V$ such that $u + 0 = 0 + u = u$</div>
<div class="axiom-item"><span class="axiom-name">A4. Additive Inverse:</span> $\exists\, -u \in V$ such that $u + (-u) = 0$</div>
<div class="axiom-item"><span class="axiom-name">A5. Commutative Law:</span> $u + v = v + u$</div>
<div class="axiom-item"><span class="axiom-name">M1. Closure under Scalar Mult:</span> $\alpha \cdot u \in V$</div>
<div class="axiom-item"><span class="axiom-name">M2. Distributive over Vector Addition:</span> $\alpha(u + v) = \alpha u + \alpha v$</div>
<div class="axiom-item"><span class="axiom-name">M3. Distributive over Scalar Addition:</span> $(\alpha + \beta)u = \alpha u + \beta u$</div>
<div class="axiom-item"><span class="axiom-name">M4. Scalar Associative Law:</span> $(\alpha \beta)u = \alpha(\beta u)$</div>
<div class="axiom-item"><span class="axiom-name">M5. Unit Scalar:</span> $1 \cdot u = u$ (where $1$ is unity of $F$).</div>
</div>

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
</div></div>
<!-- Q2 -->
<div class="question-card" data-category="axioms">
<div class="card-top">
<span class="q-pill">QB • Q2</span>
<div class="q-heading">State and prove the cancellation law for vector addition.</div>
</div>
<div class="solution-content">
<p><strong>Statement:</strong> In any vector space $V(F)$, if $x, y, z \in V$ such that $x + z = y + z$, then <strong>$x = y$</strong>.</p>
<div class="math-panel">
            $$\begin{aligned}
            x &amp;= x + 0 = x + (z + (-z)) &amp;&amp; (\text{Identity \&amp; Inverse}) \\
              &amp;= (x + z) + (-z) &amp;&amp; (\text{Associative Law}) \\
              &amp;= (y + z) + (-z) &amp;&amp; (\text{Given: } x + z = y + z) \\
              &amp;= y + (z + (-z)) = y + 0 = y
            \end{aligned}$$
          </div>
<div class="tag-result">Hence proved: $x = y$</div>

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
</div></div>
<!-- Q3 -->
<div class="question-card" data-category="subspace">
<div class="card-top">
<span class="q-pill">QB • Q3</span>
<div class="q-heading">If $V = \mathbb{R}^3$, verify whether $W = \{(a_1, a_2, a_3) \mid 2a_1 - 7a_2 + a_3 = 0\}$ is a subspace.</div>
</div>
<div class="solution-content">
<p><strong>Step 1 (Zero Vector Check):</strong> Put $(0,0,0)$: $2(0) - 7(0) + (0) = 0 \implies (0,0,0) \in W$.</p>
<p><strong>Step 2 (Linear Combination Check):</strong> Let $u, v \in W$. For any scalars $\alpha, \beta \in \mathbb{R}$:</p>
<div class="math-panel">
            $$\begin{aligned}
            &amp;2(\alpha a_1 + \beta b_1) - 7(\alpha a_2 + \beta b_2) + (\alpha a_3 + \beta b_3) \\
            &amp;= \alpha(2a_1 - 7a_2 + a_3) + \beta(2b_1 - 7b_2 + b_3) \\
            &amp;= \alpha(0) + \beta(0) = 0
            \end{aligned}$$
          </div>
<div class="tag-result">Conclusion: $W$ is a subspace of $\mathbb{R}^3$</div>
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
</div></div>
<!-- Q4 -->
<div class="question-card" data-category="subspace">
<div class="card-top">
<span class="q-pill">QB • Q4</span>
<div class="q-heading">Define Subspace.</div>
</div>
<div class="solution-content">
<p>Let $V$ be a vector space over field $F$. A non-empty subset $W \subseteq V$ is called a <strong>subspace</strong> of $V$ if $W$ is itself a vector space over $F$ under the operations of addition and scalar multiplication defined on $V$.</p>
<div class="math-panel">
<strong>Subspace Criterion:</strong> $W$ is a subspace iff:
            <br/>1. $0 \in W$
            <br/>2. $\alpha u + \beta v \in W$ for all $u, v \in W$ and $\alpha, \beta \in F$.
          </div>
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
</div></div>
<!-- Q5 -->
<div class="question-card" data-category="dependence">
<div class="card-top">
<span class="q-pill">QB • Q5</span>
<div class="q-heading">Define Linear Combination.</div>
</div>
<div class="solution-content">
<p>Let $V$ be a vector space over $F$ and $S = \{v_1, v_2, \dots, v_n\} \subseteq V$. A vector $v \in V$ is said to be a <strong>linear combination</strong> of $S$ if there exist scalars $c_1, c_2, \dots, c_n \in F$ such that:</p>
<div class="math-panel">
            $$v = c_1 v_1 + c_2 v_2 + \dots + c_n v_n = \sum_{i=1}^n c_i v_i$$
          </div>
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
</div></div>
<!-- Q6 -->
<div class="question-card" data-category="dependence">
<div class="card-top">
<span class="q-pill">QB • Q6</span>
<div class="q-heading">Check if $v_1=(1,-2,3), v_2=(5,6,-1), v_3=(3,2,1)$ are Linearly Dependent or Independent.</div>
</div>
<div class="solution-content">
<p>Form matrix $A$ and evaluate determinant:</p>
<div class="math-panel">
            $$|A| = \begin{vmatrix} 1 &amp; -2 &amp; 3 \\ 5 &amp; 6 &amp; -1 \\ 3 &amp; 2 &amp; 1 \end{vmatrix} = 1(6 + 2) + 2(5 + 3) + 3(10 - 18) = 8 + 16 - 24 = \mathbf{0}$$
          </div>
<div class="tag-result fail">Since $|A| = 0$, the set is Linearly Dependent (LD).</div>
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
</div></div>
<!-- Q7 -->
<div class="question-card" data-category="basis">
<div class="card-top">
<span class="q-pill">QB • Q7</span>
<div class="q-heading">Define Basis.</div>
</div>
<div class="solution-content">
<p>A subset $S$ of a vector space $V$ is called a <strong>basis</strong> of $V$ if:</p>
<div class="math-panel">
            1. $S$ is <strong>Linearly Independent</strong>.
            <br/>2. $S$ <strong>spans</strong> $V$ ($\operatorname{Span}(S) = V$).
          </div>
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
</div></div>
<!-- Q8 -->
<div class="question-card" data-category="basis">
<div class="card-top">
<span class="q-pill">QB • Q8</span>
<div class="q-heading">Find dimension of $W = \{(x_1, x_2, x_3) \mid x_1 + x_2 + x_3 = 0\}$.</div>
</div>
<div class="solution-content">
<p>Constraint gives $x_1 = -x_2 - x_3$. Any vector in $W$ is:</p>
<div class="math-panel">
            $$(x_1, x_2, x_3) = (-x_2 - x_3, x_2, x_3) = x_2(-1, 1, 0) + x_3(-1, 0, 1)$$
          </div>
<p>Basis is $B = \{(-1, 1, 0), (-1, 0, 1)\}$ (2 vectors).</p>
<div class="tag-result">Conclusion: $\dim(W) = 2$ (Formula: $3 - 1 = 2$)</div>
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
</div></div>
<!-- Q9 -->
<div class="question-card" data-category="dependence">
<div class="card-top">
<span class="q-pill">QB • Q9</span>
<div class="q-heading">Is $\{(1,2,1), (2,1,0), (1,-1,2)\}$ Linearly Independent or Dependent?</div>
</div>
<div class="solution-content">
<div class="math-panel">
            $$|A| = \begin{vmatrix} 1 &amp; 2 &amp; 1 \\ 2 &amp; 1 &amp; 0 \\ 1 &amp; -1 &amp; 2 \end{vmatrix} = 1(2 - 0) - 2(4 - 0) + 1(-2 - 1) = 2 - 8 - 3 = \mathbf{-9 \neq 0}$$
          </div>
<div class="tag-result">Since $|A| \neq 0$, the set is Linearly Independent (LI).</div>
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
</div></div>
<!-- Q10 -->
<div class="question-card" data-category="basis">
<div class="card-top">
<span class="q-pill">QB • Q10</span>
<div class="q-heading">If $V = A \oplus B$, show that $\dim V = \dim A + \dim B$.</div>
</div>
<div class="solution-content">
<p>By dimension formula: $\dim(A + B) = \dim A + \dim B - \dim(A \cap B)$.</p>
<div class="math-panel">
            Since $V = A \oplus B$ (Direct Sum):
            <br/>1. $A + B = V \implies \dim(A + B) = \dim V$
            <br/>2. $A \cap B = \{0\} \implies \dim(A \cap B) = 0$
            $$\dim V = \dim A + \dim B - 0 \implies \mathbf{\dim V = \dim A + \dim B}$$
          </div>
<div class="tag-result">Hence proved: $\dim V = \dim A + \dim B$</div>
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
</div></div>
<!-- EXTRA IMPORTANT 2-MARKS -->
<div class="section-badge">Part 2: Extra High-Yield 2-Marks (Class Notes &amp; Tough Exam Questions)</div>
<!-- Extra Q11 -->
<div class="question-card" data-category="subspace">
<div class="card-top">
<span class="q-pill extra">Extra • Q11</span>
<div class="q-heading">Verify whether $W = \{(x, y, z) \in \mathbb{R}^3 \mid x + 2y - 3z = 1\}$ is a subspace of $\mathbb{R}^3$.</div>
</div>
<div class="solution-content">
<p>Put $(x, y, z) = (0, 0, 0)$:</p>
<div class="math-panel">$$0 + 2(0) - 3(0) = 0 \neq 1 \implies (0,0,0) \notin W$$</div>
<div class="tag-result fail">Since zero vector $0 \notin W$, $W$ is NOT a subspace of $\mathbb{R}^3$.</div>

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
</div></div>
<!-- Extra Q12 -->
<div class="question-card" data-category="subspace">
<div class="card-top">
<span class="q-pill extra">Extra • Q12</span>
<div class="q-heading">What are all the possible subspaces of $\mathbb{R}^2$ and $\mathbb{R}^3$?</div>
</div>
<div class="solution-content">
<div class="math-panel">
<strong>Subspaces of $\mathbb{R}^2$:</strong>
<br/>1. The zero subspace $\{0\}$.
            <br/>2. Any straight line passing through the origin $(0,0)$.
            <br/>3. $\mathbb{R}^2$ itself.
            <br/><br/>
<strong>Subspaces of $\mathbb{R}^3$:</strong>
<br/>1. The zero subspace $\{0\}$.
            <br/>2. Any line passing through the origin.
            <br/>3. Any plane passing through the origin.
            <br/>4. $\mathbb{R}^3$ itself.
          </div>
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
</div></div>
<!-- Extra Q13 -->
<div class="question-card" data-category="basis">
<div class="card-top">
<span class="q-pill extra">Extra • Q13</span>
<div class="q-heading">Write the standard basis and dimension for $\mathbb{R}^n$, $P_n(\mathbb{R})$, and $M_{m \times n}(\mathbb{R})$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
            1. <strong>$\mathbb{R}^n$:</strong> Basis $S = \{e_1, e_2, \dots, e_n\} \implies \mathbf{\dim(\mathbb{R}^n) = n}$.
            <br/>2. <strong>$P_n(\mathbb{R})$</strong> (polynomials of degree $\le n$): Basis $S = \{1, x, x^2, \dots, x^n\} \implies \mathbf{\dim(P_n(\mathbb{R})) = n + 1}$.
            <br/>3. <strong>$M_{m \times n}(\mathbb{R})$</strong>: Matrices with single 1 and rest 0s $\implies \mathbf{\dim(M_{m \times n}) = mn}$.
          </div>
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
</div></div>
<!-- Extra Q14 -->
<div class="question-card" data-category="dependence">
<div class="card-top">
<span class="q-pill extra">Extra • Q14</span>
<div class="q-heading">For what value of $k$ will the set $\{(2,-1,3), (3,4,-1), (k,2,1)\}$ be linearly dependent?</div>
</div>
<div class="solution-content">
<p>Set determinant equal to zero:</p>
<div class="math-panel">
            $$\begin{vmatrix} 2 &amp; -1 &amp; 3 \\ 3 &amp; 4 &amp; -1 \\ k &amp; 2 &amp; 1 \end{vmatrix} = 2(4 + 2) + 1(3 + k) + 3(6 - 4k) = 0$$
            $$12 + 3 + k + 18 - 12k = 0 \implies 33 - 11k = 0 \implies \mathbf{k = 3}$$
          </div>
<div class="tag-result">Answer: $k = 3$</div>
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
</div></div>
<!-- Extra Q15 -->
<div class="question-card" data-category="axioms">
<div class="card-top">
<span class="q-pill extra">Extra • Q15</span>
<div class="q-heading">Is $\mathbb{R}$ a vector space over $\mathbb{C}$? Justify.</div>
</div>
<div class="solution-content">
<p><strong>Answer:</strong> <strong>No</strong>, $\mathbb{R}$ is not a vector space over $\mathbb{C}$.</p>
<div class="math-panel">
<strong>Reason:</strong> Scalar multiplication closure fails.
            <br/>Take scalar $i \in \mathbb{C}$ and vector $1 \in \mathbb{R}$. Then $i \cdot 1 = i \notin \mathbb{R}$.
          </div>
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
</div></div>
<!-- Extra Q16 -->
<div class="question-card" data-category="subspace">
<div class="card-top">
<span class="q-pill extra">Extra • Q16</span>
<div class="q-heading">Prove that the intersection of two subspaces $W_1$ and $W_2$ of $V$ is also a subspace of $V$.</div>
</div>
<div class="solution-content">
<p>Let $u, v \in W_1 \cap W_2$ and $\alpha, \beta \in F$.</p>
<div class="math-panel">
            1. Since $u, v \in W_1$ and $W_1$ is a subspace $\implies \alpha u + \beta v \in W_1$.
            <br/>2. Since $u, v \in W_2$ and $W_2$ is a subspace $\implies \alpha u + \beta v \in W_2$.
            <br/>Therefore, $\alpha u + \beta v \in W_1 \cap W_2$.
          </div>
<div class="tag-result">Hence $W_1 \cap W_2$ is a subspace of $V$.</div>
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
</div></div>
</div>
<!-- ================= PART B SECTION (ALL 10 COMPLETE QUESTIONS) ================= -->
<!-- ================= PART B SECTION (ALL 10 COMPLETE 16-MARK QUESTIONS) ================= -->`,
  partB: String.raw`

      <!-- Part B • Extra Q11 (16 Marks) -->
      <div class="question-card" data-category="subspace">
        <div class="card-top">
          <span class="q-pill">Part B • Extra Q11 (16 Marks)</span>
          <div class="q-heading">Let $V = M_{n \times n}(\mathbb{R})$ be the vector space of all $n \times n$ real matrices. Let $W_1$ be the set of symmetric matrices and $W_2$ be the set of skew-symmetric matrices. Prove that $W_1$ and $W_2$ are subspaces of $V$, that $V = W_1 \oplus W_2$, and find $\dim W_1$ and $\dim W_2$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> To prove $W_1$ and $W_2$ are subspaces, establish the direct sum $V = W_1 \oplus W_2$, and derive their dimensions.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Subspace Verification for $W_1$ and $W_2$</div>
            <p><strong>(a) Symmetric Matrices $W_1 = \{A \in M_{n \times n}(\mathbb{R}) \mid A^T = A\}$:</strong><br>
            • Zero matrix $O^T = O \implies O \in W_1 \neq \emptyset$.<br>
            • Let $A, B \in W_1$ and $\alpha, \beta \in \mathbb{R}$. Consider $(\alpha A + \beta B)^T$:
            $$(\alpha A + \beta B)^T = \alpha A^T + \beta B^T = \alpha A + \beta B$$
            Since $(\alpha A + \beta B)^T = \alpha A + \beta B$, we have $\alpha A + \beta B \in W_1$. Hence $W_1$ is a subspace.<br><br>
            <strong>(b) Skew-Symmetric Matrices $W_2 = \{A \in M_{n \times n}(\mathbb{R}) \mid A^T = -A\}$:</strong><br>
            • Zero matrix $O^T = -O \implies O \in W_2 \neq \emptyset$.<br>
            • For $A, B \in W_2$ and $\alpha, \beta \in \mathbb{R}$:
            $$(\alpha A + \beta B)^T = \alpha A^T + \beta B^T = \alpha (-A) + \beta (-B) = -(\alpha A + \beta B)$$
            Hence $\alpha A + \beta B \in W_2$. Thus $W_2$ is a subspace.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Proof of Direct Sum $V = W_1 \oplus W_2$</div>
            <p><strong>(a) Spanning $V = W_1 + W_2$:</strong><br>
            Every square matrix $A \in V$ can be identically decomposed as:
            $$A = \frac{A + A^T}{2} + \frac{A - A^T}{2}$$
            Let $A_1 = \frac{A + A^T}{2}$ and $A_2 = \frac{A - A^T}{2}$.<br>
            • $A_1^T = \left(\frac{A + A^T}{2}\right)^T = \frac{A^T + A}{2} = A_1 \implies A_1 \in W_1$.<br>
            • $A_2^T = \left(\frac{A - A^T}{2}\right)^T = \frac{A^T - A}{2} = -\frac{A - A^T}{2} = -A_2 \implies A_2 \in W_2$.<br>
            Therefore, $A = A_1 + A_2 \in W_1 + W_2 \implies V = W_1 + W_2$.<br><br>
            <strong>(b) Trivial Intersection $W_1 \cap W_2 = \{O\}$:</strong><br>
            Let $A \in W_1 \cap W_2$. Then $A^T = A$ (since $A \in W_1$) and $A^T = -A$ (since $A \in W_2$).<br>
            $$A = -A \implies 2A = O \implies A = O$$
            Hence $W_1 \cap W_2 = \{O\}$. Therefore, $V = W_1 \oplus W_2$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Dimensions of $W_1$ and $W_2$</div>
            <p>• For $A \in W_1$ ($A^T = A$), diagonal entries $a_{ii}$ can be chosen arbitrarily ($n$ entries). Upper triangular entries $a_{ij}$ ($i < j$) determine lower triangular entries:
            $$\dim W_1 = n + \frac{n(n-1)}{2} = \frac{n(n+1)}{2}$$
            • For $A \in W_2$ ($A^T = -A$), diagonal entries must be zero ($a_{ii} = -a_{ii} \implies a_{ii} = 0$). Only strictly upper triangular entries are free:
            $$\dim W_2 = \frac{n(n-1)}{2}$$
            • Check Dimension Theorem: $\dim W_1 + \dim W_2 = \frac{n^2+n}{2} + \frac{n^2-n}{2} = n^2 = \dim V$.</p>
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

      <!-- Part B • Extra Q12 (16 Marks) -->
      <div class="question-card" data-category="basis">
        <div class="card-top">
          <span class="q-pill">Part B • Extra Q12 (16 Marks)</span>
          <div class="q-heading">Let $S = \{(1, 0, 1, 0), (0, 1, 0, 1)\}$ be a linearly independent subset of $\mathbb{R}^4$. Extend $S$ to form a complete basis of $\mathbb{R}^4$, and find the coordinates of $v = (2, 3, -1, 4)$ with respect to this extended basis.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> To use the Basis Extension Theorem to augment $S$ with standard vectors into a basis of $\mathbb{R}^4$, then calculate coordinate scalars.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Basis Extension via Row Echelon Form</div>
            <p>Standard basis of $\mathbb{R}^4$ is $\{e_1, e_2, e_3, e_4\}$. Form matrix with $v_1, v_2$ followed by standard basis vectors:
            $$A = \begin{bmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$
            Applying Gaussian row reduction:<br>
            • $R_3 \to R_3 - R_1 = (0, 0, -1, 0) \to (0, 0, 1, 0)$ (Pivots in columns 1, 2, 3).<br>
            • Pivot 4 is obtained by choosing $e_4 = (0, 0, 0, 1)$ or $e_1 = (1, 0, 0, 0)$.<br>
            We choose extended vectors $v_3 = (0, 0, 1, 0)$ and $v_4 = (0, 0, 0, 1)$.<br>
            Extended set $B = \{v_1, v_2, v_3, v_4\} = \{(1,0,1,0), (0,1,0,1), (0,0,1,0), (0,0,0,1)\}$.<br>
            Determinant:
            $$\det \begin{bmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} = 1 \cdot 1 \cdot 1 \cdot 1 = 1 \neq 0$$
            Since the 4 vectors are linearly independent in 4D space $\mathbb{R}^4$, $B$ forms a Basis of $\mathbb{R}^4$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Coordinate Vector Computation for $v = (2, 3, -1, 4)$</div>
            <p>Set $v = c_1 v_1 + c_2 v_2 + c_3 v_3 + c_4 v_4$:
            $$(2, 3, -1, 4) = c_1(1,0,1,0) + c_2(0,1,0,1) + c_3(0,0,1,0) + c_4(0,0,0,1)$$
            Equating coordinates:<br>
            1. $c_1 = 2$<br>
            2. $c_2 = 3$<br>
            3. $c_1 + c_3 = -1 \implies 2 + c_3 = -1 \implies c_3 = -3$<br>
            4. $c_2 + c_4 = 4 \implies 3 + c_4 = 4 \implies c_4 = 1$<br><br>
            Coordinate vector: $[v]_B = \begin{bmatrix} 2 \\ 3 \\ -3 \\ 1 \end{bmatrix}$.</p>
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
