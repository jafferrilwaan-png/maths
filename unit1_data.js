// UNIT 1: Vector Spaces (Part A: 16 Questions, Part B: 12 Full-Length 16-Mark Questions)
window.UNIT1_DATA = {
  title: "Unit-I: Vector Spaces",
  desc: "Complete Question Bank + Class Notes derivations with interactive step dropdowns and KaTeX math.",
  partA: String.raw`
<div class="section-badge">Part 1: Official Question Bank 2-Marks (Compulsory Q1–Q10)</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Setup</span>
                <div class="explain-line-title">Definition of Vector Space $V(F)$</div>
                <div class="explain-line-desc">A vector space requires two mathematical entities: a set of objects (vectors $V$) and a number field (scalars $F$, usually $\mathbb{R}$). Without defining the scalar field, scaling operations cannot exist.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Abelian Group</span>
                <div class="explain-line-title">5 Vector Addition Axioms ($A_1$ to $A_5$)</div>
                <div class="explain-line-desc">Closure ($u+v \in V$), Associativity, Zero Vector ($u+0=u$), Additive Inverse ($u+(-u)=0$), and Commutativity. This guarantees $(V, +)$ behaves like ordinary addition where you can cancel, invert, and reorder terms.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Scalar Laws</span>
                <div class="explain-line-title">5 Scalar Multiplication Axioms ($M_1$ to $M_5$)</div>
                <div class="explain-line-desc">Scalar closure ($\alpha u \in V$), two Distributive laws ($\alpha(u+v)$ and $(\alpha+\beta)u$), Scalar Associativity, and Unit scaling ($1 \cdot u = u$). This couples the field $F$ with vectors $V$ consistently.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">Anna University evaluators award 1 mark for stating $(V, +)$ is an Abelian group and 1 mark for stating the scalar multiplication closure and distributive axioms.</div>
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
</div></div>
<!-- Q2 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Axiom Use</span>
                <div class="explain-line-title">State Additive Inverse $-z \in V$</div>
                <div class="explain-line-desc">In abstract algebra, you cannot just 'cross out' or subtract terms without proving the inverse exists. Axiom $A_4$ ensures every $z$ has a unique element $-z$ such that $z + (-z) = 0$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Operation</span>
                <div class="explain-line-title">Add $(-z)$ to both sides of $x + z = y + z$</div>
                <div class="explain-line-desc">Since equality is preserved under identical operations, $(x + z) + (-z) = (y + z) + (-z)$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Associativity</span>
                <div class="explain-line-title">Regroup terms: $x + (z + (-z)) = y + (z + (-z))$</div>
                <div class="explain-line-desc">By Associative Law $A_2$, we regroup parentheses so that each vector meets its inverse.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Conclusion</span>
                <div class="explain-line-title">Apply Identity: $x + 0 = y + 0 \implies x = y$</div>
                <div class="explain-line-desc">By Identity Law $A_3$, adding $0$ leaves vectors unchanged, completing the formal proof.</div>
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
</div></div>
<!-- Q3 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Inspection</span>
                <div class="explain-line-title">Identify the defining condition $a_1 \ge 0$</div>
                <div class="explain-line-desc">Subspaces in $\mathbb{R}^3$ must be closed under multiplication by ANY scalar in the field $\mathbb{R}$ (positive, zero, or negative).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Counterexample</span>
                <div class="explain-line-title">Choose $u = (1, 0, 0) \in W$ and scalar $\alpha = -1 \in \mathbb{R}$</div>
                <div class="explain-line-desc">Since $a_1 = 1 \ge 0$, vector $u$ is inside $W$. Since field is $\mathbb{R}$, $-1$ is a valid scalar.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Contradiction</span>
                <div class="explain-line-title">Compute $\alpha u = -1 \cdot (1,0,0) = (-1, 0, 0)$</div>
                <div class="explain-line-desc">The first coordinate is now $-1 < 0$, which violates the requirement $a_1 \ge 0$. Thus $\alpha u \notin W$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Conclusion</span>
                <div class="explain-line-title">Fails Scalar Closure $\implies$ Not a Subspace</div>
                <div class="explain-line-desc">A single counterexample is sufficient in mathematics to disprove subspace status.</div>
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
</div></div>
<!-- Q4 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Formal Definition</span>
                <div class="explain-line-title">Subset forming Vector Space on its own</div>
                <div class="explain-line-desc">A non-empty subset $W \subseteq V(F)$ is a subspace if it satisfies all vector space axioms using the exact same addition and scalar multiplication defined on $V$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Two-Step Test</span>
                <div class="explain-line-title">Closure under $+$ and $\cdot$</div>
                <div class="explain-line-desc">(i) For all $u, v \in W \implies u + v \in W$. (ii) For all $\alpha \in F, u \in W \implies \alpha u \in W$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • One-Step Criterion</span>
                <div class="explain-line-title">Single Linear Combination $\alpha u + \beta v \in W$</div>
                <div class="explain-line-desc">Combining both closures into $\alpha u + \beta v \in W$ for all $\alpha, \beta \in F$ is faster and preferred by university evaluators.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Zero Vector Rule</span>
                <div class="explain-line-title">Zero vector $0 \in W$ is mandatory</div>
                <div class="explain-line-desc">If $(0,0,\dots,0) \notin W$, the set can NEVER be a subspace.</div>
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
</div></div>
<!-- Q5 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Formula</span>
                <div class="explain-line-title">Mathematical Expression $v = c_1 v_1 + c_2 v_2 + \dots + c_k v_k$</div>
                <div class="explain-line-desc">A vector $v$ is a linear combination of a set $S = \{v_1, \dots, v_k\}$ if it can be built by multiplying each vector by a scalar $c_i \in F$ and summing them up.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Geometric Meaning</span>
                <div class="explain-line-title">Directional Stretching and Superposition</div>
                <div class="explain-line-desc">Geometrically, scalar multiples stretch/shrink vectors along their axes, and vector addition joins them tip-to-tail to reach new points in space.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Span Connection</span>
                <div class="explain-line-title">Generates the Subspace $L(S)$</div>
                <div class="explain-line-desc">The collection of all possible linear combinations of $S$ is called the Linear Span $L(S)$, which is always a valid subspace.</div>
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
</div></div>
<!-- Q6 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Setup</span>
                <div class="explain-line-title">Matrix Determinant Formulation $|A|$</div>
                <div class="explain-line-desc">For $n$ vectors in $\mathbb{R}^n$ (here 3 vectors in $\mathbb{R}^3$), the determinant $|A|$ immediately reveals dependence. If $|A| = 0$, the vectors lie in a lower-dimensional plane.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Calculation</span>
                <div class="explain-line-title">Row 1 Expansion: $1(8) - (-2)(8) + 3(-8) = 8 + 16 - 24 = 0$</div>
                <div class="explain-line-desc">Expanding the $3 \times 3$ determinant yields exactly 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Linear Relation</span>
                <div class="explain-line-title">Non-trivial scalars exist ($c_1, c_2, c_3 \neq 0$)</div>
                <div class="explain-line-desc">Because $|A| = 0$, the homogeneous system $Ac = 0$ has infinitely many non-zero solutions. Specifically, $v_2 = 2v_1 + v_3$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Conclusion</span>
                <div class="explain-line-title">Vectors are Linearly Dependent</div>
                <div class="explain-line-desc">Always state $|A|=0 \implies$ Linearly Dependent for full 2 marks.</div>
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
</div></div>
<!-- Q7 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Definition</span>
                <div class="explain-line-title">Minimal Spanning Set (Basis $B$)</div>
                <div class="explain-line-desc">A set $B = \{v_1, \dots, v_n\}$ in $V$ is a basis if it serves as a coordinate frame from which EVERY vector in $V$ can be built uniquely.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Condition 1</span>
                <div class="explain-line-title">Linear Independence (No Redundancy)</div>
                <div class="explain-line-desc">No vector in $B$ can be formed from the others; $c_1 v_1 + \dots + c_n v_n = 0 \implies c_1 = \dots = c_n = 0$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Condition 2</span>
                <div class="explain-line-title">Spans the entire space: $L(B) = V$</div>
                <div class="explain-line-desc">Every vector $x \in V$ can be represented as a linear combination of elements in $B$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Dimension</span>
                <div class="explain-line-title">Number of vectors $|B| = \dim V$</div>
                <div class="explain-line-desc">The number of elements in any basis of $V$ is invariant and defines the dimension of $V$.</div>
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
</div></div>
<!-- Q8 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Constraint</span>
                <div class="explain-line-title">Constraint equation $x_1 + x_2 + x_3 = 0$</div>
                <div class="explain-line-desc">This single linear equation in 3 variables removes 1 degree of freedom from $\mathbb{R}^3$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Free Variables</span>
                <div class="explain-line-title">Express dependent variable: $x_1 = -x_2 - x_3$</div>
                <div class="explain-line-desc">Variables $x_2$ and $x_3$ are independent parameters (free variables).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Vector Decomposition</span>
                <div class="explain-line-title">$(x_1, x_2, x_3) = x_2(-1, 1, 0) + x_3(-1, 0, 1)$</div>
                <div class="explain-line-desc">Separating variables into vector components reveals the generating vectors $\{(-1,1,0), (-1,0,1)\}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Dimension</span>
                <div class="explain-line-title">Dimension = 2 (A 2D plane through origin)</div>
                <div class="explain-line-desc">Formula: $\dim W = \text{Total variables } (3) - \text{Independent constraints } (1) = 2$.</div>
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
</div></div>
<!-- Q9 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Matrix Setup</span>
                <div class="explain-line-title">Construct square matrix from vectors as rows</div>
                <div class="explain-line-desc">Form matrix $A = \begin{bmatrix} 1 & 2 & 1 \\ 2 & 1 & 0 \\ 1 & -1 & 2 \end{bmatrix}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Determinant</span>
                <div class="explain-line-title">Compute $|A| = 1(2-0) - 2(4-0) + 1(-2-1) = -9$</div>
                <div class="explain-line-desc">Expanding along row 1 gives $2 - 8 - 3 = -9$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Independence Law</span>
                <div class="explain-line-title">Since $|A| = -9 \neq 0$, rank is 3</div>
                <div class="explain-line-desc">A non-zero determinant means the matrix is invertible, so the only solution to $Ac = 0$ is the trivial solution $c_1 = c_2 = c_3 = 0$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Conclusion</span>
                <div class="explain-line-title">Set is Linearly Independent</div>
                <div class="explain-line-desc">Full marks require showing $|A| \neq 0$ and concluding Linearly Independent.</div>
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
</div></div>
<!-- Q10 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Direct Sum Definition</span>
                <div class="explain-line-title">Direct Sum means $V = A + B$ and $A \cap B = \{0\}$</div>
                <div class="explain-line-desc">The symbol $\oplus$ denotes that every vector $v \in V$ decomposes uniquely as $v = a + b$ with $a \in A, b \in B$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • General Formula</span>
                <div class="explain-line-title">Dimension Theorem: $\dim(A+B) = \dim A + \dim B - \dim(A \cap B)$</div>
                <div class="explain-line-desc">This is the fundamental dimension theorem for the sum of two subspaces.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Substitution</span>
                <div class="explain-line-title">Substitute $\dim(A \cap B) = \dim\{0\} = 0$</div>
                <div class="explain-line-desc">The zero subspace $\{0\}$ contains only the zero vector, which has dimension 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Result</span>
                <div class="explain-line-title">$\dim(A \oplus B) = \dim A + \dim B$</div>
                <div class="explain-line-desc">Subtracting 0 completes the required derivation.</div>
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
</div></div>
<!-- EXTRA IMPORTANT 2-MARKS -->
<div class="section-badge">Part 2: Extra High-Yield 2-Marks (Class Notes &amp; Tough Exam Questions)</div>
<!-- Extra Q11 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Zero Vector Rule</span>
                <div class="explain-line-title">Check whether origin $(0,0,0) \in W$</div>
                <div class="explain-line-desc">Substitute $(x,y,z) = (0,0,0)$ into $x + 2y + 3z = 4$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Evaluation</span>
                <div class="explain-line-title">LHS $= 0 + 2(0) + 3(0) = 0 \neq 4$ (RHS)</div>
                <div class="explain-line-desc">The zero vector does not satisfy the constraint equation.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Subspace Axiom</span>
                <div class="explain-line-title">Zero vector existence is mandatory ($0 \in W$)</div>
                <div class="explain-line-desc">Every vector space and subspace MUST contain the additive identity. Since $(0,0,0) \notin W$, $W$ cannot be a subspace.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Conclusion</span>
                <div class="explain-line-title">Not a subspace (Affine plane, not vector subspace)</div>
                <div class="explain-line-desc">Any plane not passing through $(0,0,0)$ fails immediately.</div>
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
</div></div>
<!-- Extra Q12 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • $\mathbb{R}^2$ Subspaces</span>
                <div class="explain-line-title">3 Geometric Types in 2D Plane</div>
                <div class="explain-line-desc">1. $\{0\}$ (Dimension 0, the origin point). 2. Any line passing through $(0,0)$ of form $ax + by = 0$ (Dimension 1). 3. $\mathbb{R}^2$ itself (Dimension 2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • $\mathbb{R}^3$ Subspaces</span>
                <div class="explain-line-title">4 Geometric Types in 3D Space</div>
                <div class="explain-line-desc">1. $\{0\}$ (Dim 0). 2. Any straight line passing through $(0,0,0)$ (Dim 1). 3. Any plane passing through $(0,0,0)$ of form $ax + by + cz = 0$ (Dim 2). 4. $\mathbb{R}^3$ itself (Dim 3).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • The Golden Rule</span>
                <div class="explain-line-title">Must pass through the origin</div>
                <div class="explain-line-desc">Lines and planes that do not pass through the origin do not contain the zero vector and therefore are never subspaces.</div>
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
</div></div>
<!-- Extra Q13 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Euclidean Space $\mathbb{R}^n$</span>
                <div class="explain-line-title">Standard Basis: $\{e_1, \dots, e_n\}$ | $\dim = n$</div>
                <div class="explain-line-desc">$e_1=(1,0,\dots,0), e_2=(0,1,\dots,0), \dots, e_n=(0,\dots,0,1)$. Exactly $n$ orthogonal unit vectors.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Matrices $M_{2\times 2}(\mathbb{R})$</span>
                <div class="explain-line-title">Standard Basis: $\{E_{11}, E_{12}, E_{21}, E_{22}\}$ | $\dim = 4$</div>
                <div class="explain-line-desc">The 4 elementary matrices each having a 1 in one cell and 0 elsewhere. $\dim = 2 \times 2 = 4$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Polynomials $P_n[x]$</span>
                <div class="explain-line-title">Standard Basis: $\{1, x, x^2, \dots, x^n\}$ | $\dim = n + 1$</div>
                <div class="explain-line-desc">Notice $\dim = n+1$ because the constant term ($x^0 = 1$) counts as a degree-0 basis vector.</div>
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
</div></div>
<!-- Extra Q14 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Matrix Setup</span>
                <div class="explain-line-title">Form matrix with vectors as rows, set $|A| = 0$</div>
                <div class="explain-line-desc">Linearly dependent vectors produce a singular matrix with determinant 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Expansion</span>
                <div class="explain-line-title">Expand along Row 3: $k(1-12) - 1(-2-9) + 1(8 - (-3)) = 0$</div>
                <div class="explain-line-desc">$-11k + 11 + 11 = -11k + 22 = 0$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Solve for $k$</span>
                <div class="explain-line-title">$-11k = -22 \implies k = 2$</div>
                <div class="explain-line-desc">Equating the determinant to zero directly isolates the unknown $k$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Conclusion</span>
                <div class="explain-line-title">When $k = 2$, the vectors are Linearly Dependent</div>
                <div class="explain-line-desc">For any $k \neq 2$, the vectors are Linearly Independent.</div>
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
</div></div>
<!-- Extra Q15 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Definitions</span>
                <div class="explain-line-title">Vector set $\mathbb{R}$, Scalar field $\mathbb{C}$</div>
                <div class="explain-line-desc">In $V(F) = \mathbb{R}(\mathbb{C})$, vectors are real numbers, but scalars are complex numbers.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Scalar Multiplication Test</span>
                <div class="explain-line-title">Take $u = 1 \in \mathbb{R}$ and scalar $\alpha = i \in \mathbb{C}$</div>
                <div class="explain-line-desc">The imaginary unit $i = \sqrt{-1}$ is an allowed scalar from $\mathbb{C}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Product Evaluation</span>
                <div class="explain-line-title">$\alpha \cdot u = i \cdot 1 = i \notin \mathbb{R}$</div>
                <div class="explain-line-desc">The result $i$ is not a real number; it falls outside the set $\mathbb{R}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Conclusion</span>
                <div class="explain-line-title">Fails Closure under Scalar Multiplication</div>
                <div class="explain-line-desc">Hence $\mathbb{R}$ is NOT a vector space over $\mathbb{C}$. (Note: $\mathbb{C}$ over $\mathbb{R}$ IS a vector space with dimension 2).</div>
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
</div></div>
<!-- Extra Q16 -->
</div>
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
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Non-Empty Proof</span>
                <div class="explain-line-title">Both contain zero vector $\implies 0 \in W_1 \cap W_2$</div>
                <div class="explain-line-desc">Since $W_1$ and $W_2$ are subspaces, $0 \in W_1$ and $0 \in W_2$. Thus $0 \in W_1 \cap W_2$, so the intersection is non-empty.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Test Setup</span>
                <div class="explain-line-title">Let $u, v \in W_1 \cap W_2$ and $\alpha, \beta \in F$</div>
                <div class="explain-line-desc">We must verify whether $\alpha u + \beta v \in W_1 \cap W_2$ using the single-step criterion.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Subspace Membership</span>
                <div class="explain-line-title">$u, v \in W_1 \implies \alpha u + \beta v \in W_1$, and $u, v \in W_2 \implies \alpha u + \beta v \in W_2$</div>
                <div class="explain-line-desc">Since each is individually a subspace, each is individually closed under linear combinations.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 4 • Conclusion</span>
                <div class="explain-line-title">$\alpha u + \beta v \in W_1 \cap W_2 \implies$ Subspace</div>
                <div class="explain-line-desc">Being in both sets means being in the intersection. Q.E.D.</div>
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
</div></div>
</div>
<!-- ================= PART B SECTION (ALL 10 COMPLETE QUESTIONS) ================= -->
<!-- ================= PART B SECTION (ALL 10 COMPLETE 16-MARK QUESTIONS) ================= -->

<!-- Predicted Q17 -->
      <div class="question-card" data-category="subspaces">
        <div class="card-top">
          <span class="q-pill extra">Predicted • Q17</span>
        </div>
        <div class="q-heading">State the necessary and sufficient condition for a non-empty subset $W$ of a vector space $V$ over field $F$ to be a subspace of $V$.</div>
        <div class="solution-content">
          <p><strong>Two-Step Criterion:</strong> A non-empty subset $W \subseteq V$ is a subspace of $V$ if and only if:<br>
          1. <strong>Addition Closure:</strong> For all $u, v \in W$, $u + v \in W$.<br>
          2. <strong>Scalar Multiplication Closure:</strong> For all $\alpha \in F$ and $u \in W$, $\alpha u \in W$.<br>
          <strong>Single-Step Criterion:</strong> Equivalently, $W$ is a subspace iff for all $\alpha, \beta \in F$ and $u, v \in W$, $\alpha u + \beta v \in W$.</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Non-Empty Hypothesis</span>
                <div class="explain-line-title">$W \neq \emptyset$ ensures existence of zero vector</div>
                <div class="explain-line-desc">Taking $\alpha = 0$ in the scalar condition yields $0 \cdot u = \mathbf{0} \in W$, guaranteeing the additive zero element is inside $W$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Single Linear Combination Test</span>
                <div class="explain-line-title">$\alpha u + \beta v \in W$ compresses all 10 vector space axioms</div>
                <div class="explain-line-desc">Since $W$ inherits associativity, commutativity, and distributivity from ambient space $V$, only closure under linear combinations must be verified.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for stating addition closure ($u+v \in W$), 1 mark for scalar multiplication closure ($\alpha u \in W$ or linear combination $\alpha u + \beta v \in W$).</div>
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

      <!-- Predicted Q18 -->
      <div class="question-card" data-category="dependence">
        <div class="card-top">
          <span class="q-pill extra">Predicted • Q18</span>
        </div>
        <div class="q-heading">If $S = \{v_1, v_2, \dots, v_n\}$ is a linearly independent subset of a vector space $V$, prove that every non-empty subset of $S$ is also linearly independent.</div>
        <div class="solution-content">
          <p><strong>Proof:</strong> Without loss of generality, let $S_k = \{v_1, v_2, \dots, v_k\}$ with $1 \le k < n$ be any non-empty subset of $S$.<br>
          Consider the linear combination for $S_k$:
          $$c_1 v_1 + c_2 v_2 + \dots + c_k v_k = \mathbf{0}$$
          We can rewrite this in terms of the full set $S$ by choosing remaining scalars $c_{k+1} = \dots = c_n = 0$:
          $$c_1 v_1 + c_2 v_2 + \dots + c_k v_k + 0 \cdot v_{k+1} + \dots + 0 \cdot v_n = \mathbf{0}$$
          Since the original set $S$ is linearly independent, all scalars in this combination must vanish identically:
          $$c_1 = c_2 = \dots = c_k = 0$$
          Therefore, $S_k$ is linearly independent.</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Zero Extension Principle</span>
                <div class="explain-line-title">Appending zero coefficients preserves the vector sum</div>
                <div class="explain-line-desc">Embedding the sub-relation into the full set by assigning 0 to missing vectors allows direct invocation of the linear independence hypothesis of $S$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Contrapositive Interpretation</span>
                <div class="explain-line-title">Super-set of linearly dependent set is dependent</div>
                <div class="explain-line-desc">The contrapositive statement is equally important in Anna University exams: any superset containing a linearly dependent set is automatically dependent.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for setting up $c_1 v_1 + \dots + c_k v_k = 0$ with zero extensions, 1 mark for concluding all $c_i = 0$ by linear independence of $S$.</div>
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

      <!-- Predicted Q19 -->
      <div class="question-card" data-category="theorems">
        <div class="card-top">
          <span class="q-pill extra">Predicted • Q19</span>
        </div>
        <div class="q-heading">Let $W_1$ and $W_2$ be two subspaces of $\mathbb{R}^4$ with $\dim(W_1)=2$ and $\dim(W_2)=3$. What are all the possible dimensions of $W_1 \cap W_2$?</div>
        <div class="solution-content">
          <p>By Grassmann's Dimension Formula:
          $$\dim(W_1 + W_2) = \dim(W_1) + \dim(W_2) - \dim(W_1 \cap W_2)$$
          $$\dim(W_1 \cap W_2) = \dim(W_1) + \dim(W_2) - \dim(W_1 + W_2) = 2 + 3 - \dim(W_1 + W_2) = 5 - \dim(W_1 + W_2)$$
          Since $W_1 + W_2$ is a subspace of $\mathbb{R}^4$, $\dim(W_1 + W_2) \le 4$.<br>
          Also, $W_2 \subseteq W_1 + W_2 \implies \dim(W_1 + W_2) \ge \dim(W_2) = 3$.<br>
          Therefore $\dim(W_1 + W_2)$ can be either 3 or 4:<br>
          • If $\dim(W_1 + W_2) = 4 \implies \dim(W_1 \cap W_2) = 5 - 4 = 1$.<br>
          • If $\dim(W_1 + W_2) = 3 \implies \dim(W_1 \cap W_2) = 5 - 3 = 2$ (which occurs when $W_1 \subset W_2$).<br>
          <strong>Conclusion:</strong> The possible dimensions of $W_1 \cap W_2$ are <strong>1 or 2</strong>.</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Dimension Bounds</span>
                <div class="explain-line-title">$3 \le \dim(W_1 + W_2) \le 4$</div>
                <div class="explain-line-desc">The sum cannot exceed the ambient dimension 4, and cannot be smaller than the largest individual subspace dimension 3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Intersection Guarantee</span>
                <div class="explain-line-title">$\dim(W_1 \cap W_2) \ge 1$ prevents trivial intersection</div>
                <div class="explain-line-desc">Two planes of dimensions 2 and 3 in 4D space MUST intersect in at least a 1D line ($5 - 4 = 1$), so $W_1 \cap W_2 \neq \{\mathbf{0}\}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for applying Grassmann's formula, 1 mark for calculating and listing both possible dimensions $\{1, 2\}$.</div>
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

      <!-- Predicted Q20 -->
      <div class="question-card" data-category="subspaces">
        <div class="card-top">
          <span class="q-pill extra">Predicted • Q20</span>
        </div>
        <div class="q-heading">Is the union of two subspaces of a vector space $V$ always a subspace of $V$? Justify your answer with a standard counterexample in $\mathbb{R}^2$.</div>
        <div class="solution-content">
          <p><strong>Answer:</strong> <strong>No</strong>, the union of two subspaces is <strong>not</strong> necessarily a subspace.<br>
          (The union $W_1 \cup W_2$ is a subspace iff either $W_1 \subseteq W_2$ or $W_2 \subseteq W_1$).<br>
          <strong>Counterexample in $\mathbb{R}^2$:</strong><br>
          Let $W_1 = \{(x, 0) : x \in \mathbb{R}\}$ ($x$-axis) and $W_2 = \{(0, y) : y \in \mathbb{R}\}$ ($y$-axis).<br>
          Both $W_1$ and $W_2$ are 1D subspaces of $\mathbb{R}^2$.<br>
          Take $u = (1, 0) \in W_1 \subseteq W_1 \cup W_2$ and $v = (0, 1) \in W_2 \subseteq W_1 \cup W_2$.<br>
          Their sum is:
          $$u + v = (1, 0) + (0, 1) = (1, 1)$$
          Since $(1, 1)$ does not lie on the $x$-axis and does not lie on the $y$-axis, $(1, 1) \notin W_1 \cup W_2$.<br>
          Because $W_1 \cup W_2$ is not closed under addition, it is <strong>not a subspace</strong>.</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Addition Failure in Union</span>
                <div class="explain-line-title">Summing vectors from different coordinate axes leaves the axes</div>
                <div class="explain-line-desc">Vector addition $(1,0) + (0,1) = (1,1)$ lands in the quadrant, outside the union of the two coordinate axes.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Subspace Union Theorem</span>
                <div class="explain-line-title">$W_1 \cup W_2$ is a subspace iff $W_1 \subseteq W_2$ or $W_2 \subseteq W_1$</div>
                <div class="explain-line-desc">Only when one subspace completely contains the other is the union itself a vector space.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 3 • Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for stating 'No' with closure criterion, 1 mark for the coordinate axes counterexample $(1,0)+(0,1)=(1,1) \notin W_1 \cup W_2$.</div>
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
<div class="question-card" data-category="axioms">
        <div class="card-top">
          <span class="q-pill">Part B • Q1 (16 Marks)</span>
          <div class="q-heading">Let $V$ be the set of all positive real numbers ($\mathbb{R}^+$). Define the vector addition and scalar multiplication as follows:
          $$x \oplus y = xy \quad \text{and} \quad k \odot x = x^k \quad (k \in \mathbb{R}, \; x, y \in V)$$
          Determine whether or not $V$ is a vector space over $\mathbb{R}$ with respect to the above operations.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> To determine whether $(V, \oplus, \odot)$ is a vector space over the field $\mathbb{R}$ by rigorously verifying all 10 axioms.</p>

          <div class="partb-step">
            <div class="step-title">Section I: Verification of Abelian Group Under Addition $(V, \oplus)$</div>
            <p><strong>1. Closure Axiom ($A_1$):</strong> Let $x, y \in V \implies x > 0$ and $y > 0$.<br>
            Then $x \oplus y = xy$. Since the product of two positive real numbers is always a positive real number, $xy > 0 \implies x \oplus y \in V$. Hence, $V$ is closed under $\oplus$.</p>

            <p style="margin-top:8px;"><strong>2. Commutative Law ($A_2$):</strong> Let $x, y \in V$.<br>
            $$x \oplus y = xy = yx = y \oplus x \quad (\because \text{real number multiplication is commutative})$$
            Hence, $\oplus$ is commutative on $V$.</p>

            <p style="margin-top:8px;"><strong>3. Associative Law ($A_3$):</strong> Let $x, y, z \in V$.<br>
            $$\text{LHS} = (x \oplus y) \oplus z = (xy) \oplus z = (xy)z$$
            $$\text{RHS} = x \oplus (y \oplus z) = x \oplus (yz) = x(yz)$$
            Since $(xy)z = x(yz)$ in $\mathbb{R}$, $\text{LHS} = \text{RHS}$. Hence, associative law holds.</p>

            <p style="margin-top:8px;"><strong>4. Existence of Additive Identity ($A_4$):</strong><br>
            We must find an element $e \in V$ such that for all $x \in V$:
            $$x \oplus e = x \implies x \cdot e = x \implies e = \frac{x}{x} = 1$$
            Since $1 > 0$, $1 \in V$.<br>
            Verification: $x \oplus 1 = x \cdot 1 = x$ and $1 \oplus x = 1 \cdot x = x$.<br>
            Therefore, **$e = 1$ is the additive identity (zero vector)** of $V$.</p>

            <p style="margin-top:8px;"><strong>5. Existence of Additive Inverse ($A_5$):</strong><br>
            For each $x \in V$, we must find an element $x' \in V$ such that:
            $$x \oplus x' = e = 1 \implies x \cdot x' = 1 \implies x' = \frac{1}{x}$$
            Since $x > 0$, its reciprocal $\frac{1}{x} > 0 \implies \frac{1}{x} \in V$.<br>
            Verification: $x \oplus \frac{1}{x} = x \cdot \frac{1}{x} = 1 = e$.<br>
            Therefore, each element $x \in V$ has a unique additive inverse **$x' = \frac{1}{x} \in V$**.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Section II: Verification of Scalar Multiplication Axioms</div>
            <p><strong>6. Closure under Scalar Multiplication ($M_1$):</strong><br>
            Let $k \in \mathbb{R}$ and $x \in V$ ($x > 0$). Then $k \odot x = x^k$.<br>
            Since any positive real number raised to any real power is strictly positive ($x^k > 0$), $x^k \in V$.<br>
            Hence, $V$ is closed under scalar multiplication.</p>

            <p style="margin-top:8px;"><strong>7. Distributive Law over Vector Addition ($M_2$):</strong> Let $k \in \mathbb{R}$ and $x, y \in V$.<br>
            $$\text{LHS} = k \odot (x \oplus y) = k \odot (xy) = (xy)^k = x^k y^k$$
            $$\text{RHS} = (k \odot x) \oplus (k \odot y) = x^k \oplus y^k = x^k \cdot y^k$$
            Since $\text{LHS} = \text{RHS}$, Axiom $M_2$ holds.</p>

            <p style="margin-top:8px;"><strong>8. Distributive Law over Scalar Addition ($M_3$):</strong> Let $k, m \in \mathbb{R}$ and $x \in V$.<br>
            $$\text{LHS} = (k + m) \odot x = x^{k+m} = x^k \cdot x^m$$
            $$\text{RHS} = (k \odot x) \oplus (m \odot x) = x^k \oplus x^m = x^k \cdot x^m$$
            Since $\text{LHS} = \text{RHS}$, Axiom $M_3$ holds.</p>

            <p style="margin-top:8px;"><strong>9. Scalar Associative Law ($M_4$):</strong> Let $k, m \in \mathbb{R}$ and $x \in V$.<br>
            $$\text{LHS} = (km) \odot x = x^{km} = (x^m)^k$$
            $$\text{RHS} = k \odot (m \odot x) = k \odot (x^m) = (x^m)^k$$
            Since $\text{LHS} = \text{RHS}$, Axiom $M_4$ holds.</p>

            <p style="margin-top:8px;"><strong>10. Unit Scalar Multiplicative Identity ($M_5$):</strong> Let $1 \in \mathbb{R}$ and $x \in V$.<br>
            $$1 \odot x = x^1 = x$$
            Hence, Axiom $M_5$ holds.</p>
          </div>

          <div class="tag-result"> Conclusion: All 10 axioms are completely satisfied. Therefore, $(V, \oplus, \odot)$ IS a Vector Space over the field $\mathbb{R}$.</div>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span> Touch for Explanation: Why 1 is Zero Vector &amp; 1/x is Negative</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Understanding Positive Real Numbers under New Operations</div>
                <div class="explain-line-desc">In this problem, the set V consists of only positive real numbers, meaning x > 0. We are given custom operations: adding two numbers means multiplying them (x + y = xy), and multiplying by a scalar k means raising to a power (k * x = x^k). We need to verify if all vector space axioms hold.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Core Vector Space Axioms</span>
                <div class="explain-line-title">The 10 Rules for a Vector Space</div>
                <div class="explain-line-desc">A set forms a vector space over real numbers if it satisfies 5 addition axioms (closure, associative, identity, inverse, commutative) and 5 scalar multiplication axioms (scalar closure, two distributive laws, scalar associative, and unity).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Verification of Addition Axioms</span>
                <div class="explain-line-title">Testing Closure and Group Properties</div>
                <div class="explain-line-desc">Closure holds because multiplying two positive numbers x and y gives a positive number xy. Associativity holds because (xy)z = x(yz). Commutativity holds because xy = yx.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Finding the Zero Vector and Additive Inverse</span>
                <div class="explain-line-title">Identity Element is Number 1</div>
                <div class="explain-line-desc">The zero vector is the element e such that x + e = x. Under our operation, x * e = x, which means e = 1. Since 1 is positive, 1 belongs to V. The additive inverse of x is x' such that x * x' = 1, so x' = 1/x. Since x is positive, 1/x is also positive and belongs to V.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Verification of Scalar Multiplication</span>
                <div class="explain-line-title">Testing Power Operations</div>
                <div class="explain-line-desc">For any real scalar k and positive x, x^k is a positive real number, so scalar closure holds. For unity scalar, 1 * x = x^1 = x, which preserves the element.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Verification of Distributive Laws</span>
                <div class="explain-line-title">Applying Logarithm and Exponent Rules</div>
                <div class="explain-line-desc">First distributive law: k * (x + y) = (xy)^k = x^k * y^k = (k * x) + (k * y). Second distributive law: (k + m) * x = x^(k + m) = x^k * x^m = (k * x) + (m * x). Both laws hold identically.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Confirmation of Vector Space Structure</div>
                <div class="explain-line-desc">Since all 10 vector space axioms are satisfied under the defined operations, the set of positive real numbers forms a valid real vector space.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Operations interpretation and setup: 3 marks; Five addition axioms with zero vector and inverse: 5 marks; Five scalar axioms and distributive laws: 5 marks; Final conclusion: 3 marks.</div>
              </div>
              <div class="inline-ai-section">
          <div class="inline-ai-header">
            <div class="inline-ai-title-wrap">
              <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
              <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
            </div>
            <div class="inline-ai-controls">
              <select class="inline-ai-model" aria-label="Select Model">
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

      <!-- Part B Q2 -->
      
<div class="question-card" data-category="axioms">
        <div class="card-top">
          <span class="q-pill">Part B • Q2 (16 Marks)</span>
          <div class="q-heading">Determine whether the set of all $2 \times 2$ matrices of the form $\begin{bmatrix} a & a+b \\ a+b & b \end{bmatrix}$, $a, b \in \mathbb{R}$, with respect to standard matrix addition and scalar multiplication is a vector space or not? If not, list all the axioms that fail to hold.</div>
        </div>
        <div class="solution-content">
          <p>Let $V = \left\{ \begin{bmatrix} a & a+b \\ a+b & b \end{bmatrix} \;\middle|\; a, b \in \mathbb{R} \right\}$. Notice that $V$ is a non-empty subset of the standard vector space $M_{2 \times 2}(\mathbb{R})$.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Check Closure Under Matrix Addition</div>
            <p>Let $A, B \in V$ with real parameters $(a_1, b_1)$ and $(a_2, b_2)$:</p>
            <div class="math-panel">
              $$A = \begin{bmatrix} a_1 & a_1+b_1 \\ a_1+b_1 & b_1 \end{bmatrix}, \quad B = \begin{bmatrix} a_2 & a_2+b_2 \\ a_2+b_2 & b_2 \end{bmatrix}$$
              $$A + B = \begin{bmatrix} a_1+a_2 & (a_1+b_1)+(a_2+b_2) \\ (a_1+b_1)+(a_2+b_2) & b_1+b_2 \end{bmatrix} = \begin{bmatrix} (a_1+a_2) & (a_1+a_2)+(b_1+b_2) \\ (a_1+a_2)+(b_1+b_2) & (b_1+b_2) \end{bmatrix}$$
            </div>
            <p>Let $a_3 = a_1 + a_2 \in \mathbb{R}$ and $b_3 = b_1 + b_2 \in \mathbb{R}$. Then:</p>
            <div class="math-panel">
              $$A + B = \begin{bmatrix} a_3 & a_3+b_3 \\ a_3+b_3 & b_3 \end{bmatrix} \in V$$
            </div>
            <p>Since the resulting matrix strictly follows the required algebraic format, $V$ is **closed under matrix addition**.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Check Identity and Inverses</div>
            <p>• <strong>Zero Matrix ($O \in V$):</strong> Setting parameters $a = 0, b = 0 \in \mathbb{R}$ gives:
            $$\begin{bmatrix} 0 & 0+0 \\ 0+0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} = O \in V$$
            Hence, the zero vector exists in $V$.</p>
            <p>• <strong>Additive Inverse ($-A \in V$):</strong> For any $A \in V$, consider:
            $$-A = \begin{bmatrix} -a & -(a+b) \\ -(a+b) & -b \end{bmatrix} = \begin{bmatrix} (-a) & (-a)+(-b) \\ (-a)+(-b) & (-b) \end{bmatrix}$$
            Since $-a, -b \in \mathbb{R}$, $-A \in V$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Check Scalar Multiplication</div>
            <p>For any scalar $k \in \mathbb{R}$ and $A \in V$:</p>
            <div class="math-panel">
              $$k A = k \begin{bmatrix} a & a+b \\ a+b & b \end{bmatrix} = \begin{bmatrix} ka & k(a+b) \\ k(a+b) & kb \end{bmatrix} = \begin{bmatrix} (ka) & (ka)+(kb) \\ (ka)+(kb) & (kb) \end{bmatrix}$$
            </div>
            <p>Setting $a' = ka \in \mathbb{R}$ and $b' = kb \in \mathbb{R}$ shows $kA \in V$. Hence $V$ is **closed under scalar multiplication**.</p>
            <p>• Since $V \subseteq M_{2 \times 2}(\mathbb{R})$ contains the zero matrix and is closed under addition and scalar multiplication, $V$ is a <strong>subspace</strong> of $M_{2 \times 2}(\mathbb{R})$. Every subspace automatically inherits all associative, commutative, and distributive laws.</p>
          </div>

          <div class="tag-result"> Conclusion: $V$ satisfies all axioms with no failing axioms. Therefore, $V$ IS a Vector Space over $\mathbb{R}$.</div>
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
                <div class="explain-line-title">Understanding the Matrix Set</div>
                <div class="explain-line-desc">The set W consists of all 2x2 real matrices where the top-left element is a, the bottom-right element is b, and both off-diagonal elements equal a + b. We must check if W is a subspace of M2x2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Core Subspace Criterion</span>
                <div class="explain-line-title">The Two Step Vector Space Test</div>
                <div class="explain-line-desc">Instead of testing all 10 axioms, a subset W is a subspace if and only if it contains the zero matrix and is closed under arbitrary linear combinations: for any matrices A, B in W and real scalars alpha, beta, the combination alpha*A + beta*B must also belong to W.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Zero Matrix Verification</span>
                <div class="explain-line-title">Checking the Additive Identity</div>
                <div class="explain-line-desc">Setting a = 0 and b = 0 gives the 2x2 zero matrix with all entries 0. Since 0 + 0 = 0, the zero matrix matches the required form and belongs to W.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Setting Up Two Arbitrary Matrices</span>
                <div class="explain-line-title">Parametric Representation</div>
                <div class="explain-line-desc">Let matrix A have parameters a1 and b1, so its entries are a1, a1+b1, a1+b1, b1. Let matrix B have parameters a2 and b2, so its entries are a2, a2+b2, a2+b2, b2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Computing the Linear Combination</span>
                <div class="explain-line-title">Matrix Addition and Scalar Scaling</div>
                <div class="explain-line-desc">Form the matrix C = alpha*A + beta*B. The top-left entry becomes alpha*a1 + beta*a2. The bottom-right entry becomes alpha*b1 + beta*b2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Checking the Off-Diagonal Constraint</span>
                <div class="explain-line-title">Verifying the Defining Rule</div>
                <div class="explain-line-desc">The off-diagonal entries are alpha*(a1 + b1) + beta*(a2 + b2) = (alpha*a1 + beta*a2) + (alpha*b1 + beta*b2). This is exactly the sum of the new top-left and bottom-right entries.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Confirmation of Subspace</div>
                <div class="explain-line-desc">Because the linear combination maintains the exact structural requirement for all real scalars, W is closed under linear combinations and is a subspace of M2x2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Subspace criterion statement: 3 marks; Zero element verification: 3 marks; Linear combination setup and matrix algebra: 6 marks; Off-diagonal constraint verification and conclusion: 4 marks.</div>
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
<div class="question-card" data-category="axioms">
        <div class="card-top">
          <span class="q-pill">Part B • Q3 (16 Marks)</span>
          <div class="q-heading">Consider $V = \{p(x) = a_0 + a_1 x + a_2 x^2 \mid a_0, a_1, a_2 \in \mathbb{R}\}$, the set of all polynomials of degree $\le 2$. Prove that $V$ is a vector space over $\mathbb{R}$ under usual polynomial addition and scalar multiplication.</div>
        </div>
        <div class="solution-content">
          <p>Let $p(x) = a_0 + a_1 x + a_2 x^2, \; q(x) = b_0 + b_1 x + b_2 x^2, \; r(x) = c_0 + c_1 x + c_2 x^2 \in V$ where $a_i, b_i, c_i \in \mathbb{R}$.</p>

          <div class="partb-step">
            <div class="step-title">Verification of All 10 Vector Space Axioms</div>
            <p><strong>1. Closure under addition:</strong> $p(x) + q(x) = (a_0 + b_0) + (a_1 + b_1)x + (a_2 + b_2)x^2$. Since $a_i + b_i \in \mathbb{R}$, degree is $\le 2$, so $p(x) + q(x) \in V$.</p>
            <p><strong>2. Commutative:</strong> $p(x) + q(x) = \sum (a_i + b_i)x^i = \sum (b_i + a_i)x^i = q(x) + p(x)$.</p>
            <p><strong>3. Associative:</strong> $(p(x) + q(x)) + r(x) = \sum ((a_i + b_i) + c_i)x^i = \sum (a_i + (b_i + c_i))x^i = p(x) + (q(x) + r(x))$.</p>
            <p><strong>4. Additive Identity:</strong> $0(x) = 0 + 0x + 0x^2 \in V$. Then $p(x) + 0(x) = p(x)$.</p>
            <p><strong>5. Additive Inverse:</strong> $-p(x) = (-a_0) + (-a_1)x + (-a_2)x^2 \in V$. Then $p(x) + (-p(x)) = 0(x)$.</p>
            <p><strong>6. Scalar Closure:</strong> For $k \in \mathbb{R}$, $k \cdot p(x) = (ka_0) + (ka_1)x + (ka_2)x^2 \in V$.</p>
            <p><strong>7. Distributive over polynomials:</strong> $k(p(x) + q(x)) = \sum k(a_i + b_i)x^i = \sum (ka_i + kb_i)x^i = k p(x) + k q(x)$.</p>
            <p><strong>8. Distributive over scalars:</strong> $(k + m)p(x) = \sum (k + m)a_i x^i = \sum (ka_i + ma_i)x^i = k p(x) + m p(x)$.</p>
            <p><strong>9. Scalar Associativity:</strong> $(km)p(x) = \sum (km)a_i x^i = \sum k(ma_i)x^i = k(m p(x))$.</p>
            <p><strong>10. Unit Scalar:</strong> $1 \cdot p(x) = \sum (1 \cdot a_i)x^i = \sum a_i x^i = p(x)$.</p>
          </div>

          <div class="tag-result"> Hence proved: $P_2(\mathbb{R})$ is a vector space over $\mathbb{R}$ with standard basis $\{1, x, x^2\}$ and $\dim(P_2(\mathbb{R})) = 3$.</div>
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
                <div class="explain-line-title">Understanding the Polynomial Set</div>
                <div class="explain-line-desc">We consider the vector space P2 of polynomials of degree at most 2. We examine the subset W of polynomials satisfying the condition p(0) = 0, meaning the constant term must be zero.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Core Subspace Criterion</span>
                <div class="explain-line-title">Checking Linear Combinations</div>
                <div class="explain-line-desc">To prove W is a subspace, we must prove that the zero polynomial is in W, and whenever p(x) and q(x) are in W, their combination alpha*p(x) + beta*q(x) also satisfies the condition at x = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Zero Polynomial Test</span>
                <div class="explain-line-title">Evaluating at Origin</div>
                <div class="explain-line-desc">For the zero polynomial zero(x) = 0, evaluating at x = 0 gives zero(0) = 0. Therefore, the zero polynomial belongs to W.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Algebraic Structure of Elements in W</span>
                <div class="explain-line-title">Vanishing Constant Term</div>
                <div class="explain-line-desc">Any polynomial p(x) in W can be written as p(x) = a1*x + a2*x^2 because p(0) = a0 = 0. Similarly, q(x) = b1*x + b2*x^2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Forming the Linear Combination</span>
                <div class="explain-line-title">Combining Two Polynomials</div>
                <div class="explain-line-desc">Let r(x) = alpha*p(x) + beta*q(x). Then r(x) = (alpha*a1 + beta*b1)*x + (alpha*a2 + beta*b2)*x^2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Evaluating the Combination at Zero</span>
                <div class="explain-line-title">Testing Closure</div>
                <div class="explain-line-desc">Substituting x = 0 gives r(0) = (alpha*a1 + beta*b1)*(0) + (alpha*a2 + beta*b2)*(0)^2 = 0. Hence r(x) satisfies the defining condition of W.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Dimension and Basis Deduction</span>
                <div class="explain-line-title">Finding the Size of the Subspace</div>
                <div class="explain-line-desc">The polynomials x and x^2 span W and are linearly independent. Thus, the dimension of W is 2, which is one less than the dimension of P2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Subspace theorem definition: 3 marks; Zero polynomial check: 3 marks; Linear combination algebra: 5 marks; Dimension and basis derivation: 3 marks; Final conclusion: 2 marks.</div>
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
<div class="question-card" data-category="dependence">
        <div class="card-top">
          <span class="q-pill">Part B • Q4 (16 Marks)</span>
          <div class="q-heading">(i) Let $V = \mathbb{R}^3, S = \{(1,2,0), (0,-5,-7)\}$ and $v = (2,-5,7) \in V$. Verify whether $v$ is a linear combination of $S$ or not. [8 Marks]<br>
          (ii) Let $S = \{(1,-2,3,-1), (2,1,-1,2), (3,-1,2,1)\}$ be a subset of $V_4(\mathbb{R})$. Check whether $S$ is linearly independent or not. [8 Marks]</div>
        </div>
        <div class="solution-content">
          <div class="partb-step">
            <div class="step-title">Part (i) Solution: Linear Combination Verification (Full 8 Marks)</div>
            <p>Let $v = c_1 v_1 + c_2 v_2$ where $c_1, c_2 \in \mathbb{R}$ are unknown scalars.</p>
            <div class="math-panel">
              $$(2, -5, 7) = c_1(1, 2, 0) + c_2(0, -5, -7) = (c_1, \; 2c_1 - 5c_2, \; -7c_2)$$
            </div>
            <p>Equating corresponding components yields the linear system:</p>
            <div class="math-panel">
              $$\begin{aligned}
              c_1 &= 2 && \text{--- (1)} \\
              2c_1 - 5c_2 &= -5 && \text{--- (2)} \\
              -7c_2 &= 7 && \text{--- (3)}
              \end{aligned}$$
            </div>
            <p>• From equation (1): $\mathbf{c_1 = 2}$.<br>
            • Substitute $c_1 = 2$ into equation (2):<br>
            $$2(2) - 5c_2 = -5 \implies 4 - 5c_2 = -5 \implies -5c_2 = -9 \implies \mathbf{c_2 = \frac{9}{5}}$$<br>
            • Substitute $c_2 = \frac{9}{5}$ into equation (3):<br>
            $$-7c_2 = -7\left(\frac{9}{5}\right) = -\frac{63}{5} \neq 7 \quad \mathbf{(\text{Contradiction!})}$$</p>
            <p><strong>Augmented Matrix Verification:</strong></p>
            <div class="math-panel">
              $$[A \mid B] = \begin{bmatrix} 1 & 0 & 2 \\ 2 & -5 & -5 \\ 0 & -7 & 7 \end{bmatrix} \xrightarrow{R_2 - 2R_1} \begin{bmatrix} 1 & 0 & 2 \\ 0 & -5 & -9 \\ 0 & -7 & 7 \end{bmatrix} \xrightarrow{R_3 - \frac{7}{5}R_2} \begin{bmatrix} 1 & 0 & 2 \\ 0 & -5 & -9 \\ 0 & 0 & \frac{98}{5} \end{bmatrix}$$
            </div>
            <p>Here $\operatorname{Rank}(A) = 2 \neq \operatorname{Rank}([A \mid B]) = 3$. By Rouché–Capelli theorem, the system is <strong>inconsistent</strong>.</p>
            <div class="tag-result fail">Conclusion (i): $v = (2,-5,7)$ CANNOT be expressed as a linear combination of $S$.</div>
          </div>

          <div class="partb-step">
            <div class="step-title">Part (ii) Solution: Linear Independence Test in $V_4(\mathbb{R})$ (Full 8 Marks)</div>
            <p>Let $c_1 v_1 + c_2 v_2 + c_3 v_3 = 0$ where $0 = (0,0,0,0)$:</p>
            <div class="math-panel">
              $$c_1(1, -2, 3, -1) + c_2(2, 1, -1, 2) + c_3(3, -1, 2, 1) = (0, 0, 0, 0)$$
            </div>
            <p>Write the matrix $A$ with vectors as rows and reduce to Row Echelon Form:</p>
            <div class="math-panel">
              $$A = \begin{bmatrix} 1 & -2 & 3 & -1 \\ 2 & 1 & -1 & 2 \\ 3 & -1 & 2 & 1 \end{bmatrix}$$
              <p>Apply elementary row operations $R_2 \to R_2 - 2R_1$ and $R_3 \to R_3 - 3R_1$:</p>
              $$\sim \begin{bmatrix} 1 & -2 & 3 & -1 \\ 0 & 1 - 2(-2) & -1 - 2(3) & 2 - 2(-1) \\ 0 & -1 - 3(-2) & 2 - 3(3) & 1 - 3(-1) \end{bmatrix} = \begin{bmatrix} 1 & -2 & 3 & -1 \\ 0 & 5 & -7 & 4 \\ 0 & 5 & -7 & 4 \end{bmatrix}$$
              <p>Apply $R_3 \to R_3 - R_2$:</p>
              $$\sim \begin{bmatrix} 1 & -2 & 3 & -1 \\ 0 & 5 & -7 & 4 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$
            </div>
            <p>• The number of non-zero rows in Echelon form is $\operatorname{Rank}(A) = 2$.<br>
            • Since $\operatorname{Rank}(A) = 2 < 3$ (number of vectors), the system has non-trivial solutions.<br>
            • In fact, row 3 shows $v_3 - v_2 - v_1 = 0 \implies v_3 = v_1 + v_2$.</p>
            <div class="tag-result fail">Conclusion (ii): The set $S$ is Linearly Dependent (LD).</div>
          </div>
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
                <div class="explain-line-title">Two Part Question Breakdown</div>
                <div class="explain-line-desc">Part (i) asks whether the vector v = (2, -5, 7) can be expressed as a linear combination of S = {(1, 2, 0), (0, -5, -7)}. Part (ii) asks whether the set {(1, 2, 3), (2, -1, 4), (0, 0, 0)} is linearly independent.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Governing Mathematical Definitions</span>
                <div class="explain-line-title">Linear Combinations and Independence</div>
                <div class="explain-line-desc">A vector v is a linear combination of vectors u1 and u2 if there exist scalars c1 and c2 such that v = c1*u1 + c2*u2. A set of vectors is linearly dependent if any non-trivial combination equals zero, or if it contains the zero vector.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Part (i) Equation Setup</span>
                <div class="explain-line-title">Forming the Linear System</div>
                <div class="explain-line-desc">Setting (2, -5, 7) = c1*(1, 2, 0) + c2*(0, -5, -7) leads to three scalar equations: c1 = 2, 2*c1 - 5*c2 = -5, and -7*c2 = 7.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Part (i) Solving for Scalars</span>
                <div class="explain-line-title">Checking Consistency</div>
                <div class="explain-line-desc">From the first equation, c1 = 2. From the third equation, c2 = -1. Substituting these into the second equation: 2*(2) - 5*(-1) = 4 + 5 = 9, which does not equal -5. The system is inconsistent.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Part (i) Conclusion</span>
                <div class="explain-line-title">Vector Not in Span</div>
                <div class="explain-line-desc">Because no scalars c1 and c2 can satisfy all three equations simultaneously, the vector v cannot be written as a linear combination of the vectors in S.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Part (ii) Zero Vector Theorem</span>
                <div class="explain-line-title">Immediate Dependence</div>
                <div class="explain-line-desc">Any set containing the zero vector (0, 0, 0) is automatically linearly dependent. We can choose scalars c1 = 0, c2 = 0, and c3 = 1 (non-zero) such that 0*(1,2,3) + 0*(2,-1,4) + 1*(0,0,0) = (0,0,0).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Summarizing Both Parts</div>
                <div class="explain-line-desc">Vector v is not in the span of S. The second set is linearly dependent due to the presence of the zero vector.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Part (i) vector equation setup: 3 marks; Part (i) inconsistency proof: 5 marks; Part (ii) linear independence definition: 3 marks; Part (ii) zero vector dependence proof: 5 marks.</div>
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
<div class="question-card" data-category="subspace">
        <div class="card-top">
          <span class="q-pill">Part B • Q5 (16 Marks)</span>
          <div class="q-heading">(i) State and prove the necessary and sufficient conditions for a non-empty subset $W$ of a vector space $V(F)$ to be a subspace. [8 Marks]<br>
          (ii) Verify whether the first polynomial $P = x^3 - 8x^2 + 4x$ can be expressed as a linear combination of $P_1 = x^3 - 2x^2 + 3x - 1$ and $P_2 = x^3 - 2x + 3$ in $P_3(\mathbb{R})$. [8 Marks]</div>
        </div>
        <div class="solution-content">
          <div class="partb-step">
            <div class="step-title">Part (i) Solution: Subspace Criterion Theorem (Full 8 Marks)</div>
            <p><strong>Statement:</strong> A non-empty subset $W$ of a vector space $V(F)$ is a subspace of $V$ <strong>if and only if</strong> for all vectors $u, v \in W$ and all scalars $\alpha, \beta \in F$:</p>
            <div class="math-panel">$$\alpha u + \beta v \in W$$</div>
            
            <p><strong>Proof:</strong></p>
            <p><strong>Phase 1: Necessary Condition ($\implies$):</strong><br>
            Assume $W$ is a subspace of $V$. Then $W$ is itself a vector space over $F$ under the operations of $V$.<br>
            1. For any scalar $\alpha \in F$ and $u \in W$, by scalar closure: $\alpha u \in W$.<br>
            2. For any scalar $\beta \in F$ and $v \in W$, by scalar closure: $\beta v \in W$.<br>
            3. Since $W$ is closed under vector addition: $(\alpha u) + (\beta v) \in W$.<br>
            Hence, the condition $\alpha u + \beta v \in W$ is necessary.</p>

            <p style="margin-top:10px;"><strong>Phase 2: Sufficient Condition ($\impliedby$):</strong><br>
            Assume $W$ is a non-empty subset of $V$ such that $\alpha u + \beta v \in W$ for all $u, v \in W$ and $\alpha, \beta \in F$. We verify that $W$ satisfies all subspace criteria:</p>
            <ol>
              <li><strong>Zero Vector ($0 \in W$):</strong> Since $W \neq \emptyset$, let $u \in W$. Take scalars $\alpha = 0, \beta = 0 \in F$.<br>
              Then $0 \cdot u + 0 \cdot u = 0 + 0 = 0 \in W$. Thus the zero vector belongs to $W$.</li>
              <li><strong>Additive Inverse ($-u \in W$):</strong> For any $u \in W$, choose $\alpha = -1 \in F$ and $\beta = 0 \in F$.<br>
              Then $(-1)u + 0 \cdot u = -u + 0 = -u \in W$. Thus each element in $W$ has an additive inverse in $W$.</li>
              <li><strong>Closure under Addition:</strong> For any $u, v \in W$, choose $\alpha = 1, \beta = 1 \in F$.<br>
              Then $1 \cdot u + 1 \cdot v = u + v \in W$. Thus $W$ is closed under addition.</li>
              <li><strong>Closure under Scalar Multiplication:</strong> For any $c \in F$ and $u \in W$, choose $\alpha = c, \beta = 0$.<br>
              Then $c \cdot u + 0 \cdot v = cu \in W$. Thus $W$ is closed under scalar multiplication.</li>
              <li><strong>Hereditary Axioms:</strong> Associativity, commutativity, and distributive laws hold for all elements of $V$, and therefore hold automatically for all elements in $W \subseteq V$.</li>
            </ol>
            <div class="tag-result">Hence proved: $W$ is a subspace of $V(F)$.</div>
          </div>

          <div class="partb-step">
            <div class="step-title">Part (ii) Solution: Polynomial Linear Combination Test (Full 8 Marks)</div>
            <p>Let $P = c_1 P_1 + c_2 P_2$, where $c_1, c_2 \in \mathbb{R}$:</p>
            <div class="math-panel">
              $$x^3 - 8x^2 + 4x = c_1(x^3 - 2x^2 + 3x - 1) + c_2(x^3 - 2x + 3)$$
              $$x^3 - 8x^2 + 4x + 0 = (c_1 + c_2)x^3 + (-2c_1)x^2 + (3c_1 - 2c_2)x + (-c_1 + 3c_2)$$
            </div>
            <p>Equating coefficients of powers of $x$ on both sides:</p>
            <div class="math-panel">
              $$\begin{aligned}
              x^3 \text{ coeff:} & \quad c_1 + c_2 = 1 && \text{--- (1)} \\
              x^2 \text{ coeff:} & \quad -2c_1 = -8 \implies \mathbf{c_1 = 4} && \text{--- (2)} \\
              x^1 \text{ coeff:} & \quad 3c_1 - 2c_2 = 4 && \text{--- (3)} \\
              x^0 \text{ coeff:} & \quad -c_1 + 3c_2 = 0 && \text{--- (4)}
              \end{aligned}$$
            </div>
            <p>• From (2), we obtain: $\mathbf{c_1 = 4}$.<br>
            • Substituting $c_1 = 4$ into (1): $4 + c_2 = 1 \implies \mathbf{c_2 = -3}$.<br>
            • Now substitute $c_1 = 4$ and $c_2 = -3$ into equation (3):<br>
            $$3c_1 - 2c_2 = 3(4) - 2(-3) = 12 + 6 = 18 \neq 4 \quad \mathbf{(\text{Inconsistent!})}$$<br>
            • Substitute into equation (4):<br>
            $$-c_1 + 3c_2 = -(4) + 3(-3) = -4 - 9 = -13 \neq 0 \quad \mathbf{(\text{Inconsistent!})}$$</p>
            <div class="tag-result fail">Conclusion (ii): The system has no solution. Therefore, $P$ CANNOT be expressed as a linear combination of $P_1$ and $P_2$.</div>
          </div>
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
                <div class="explain-line-title">Theorem Statement and Proof Strategy</div>
                <div class="explain-line-desc">We must state and prove the necessary and sufficient condition for a non-empty subset W of a vector space V to be a subspace: W is a subspace if and only if for all u, v in W and scalars a, b in F, au + bv is in W.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Understanding Necessary versus Sufficient</span>
                <div class="explain-line-title">Two Way Implication</div>
                <div class="explain-line-desc">A two-way theorem requires two proofs: first, assuming W is a subspace, show that au + bv is in W (necessity); second, assuming au + bv is in W, show that W satisfies all vector space axioms (sufficiency).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Proof of Necessity</span>
                <div class="explain-line-title">Direct Consequence of Subspace Definition</div>
                <div class="explain-line-desc">If W is a subspace, it is by definition a vector space in its own right. Therefore, it is closed under scalar multiplication (au in W, bv in W) and closed under vector addition (au + bv in W). This proves necessity.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Proof of Sufficiency Setup</span>
                <div class="explain-line-title">Rebuilding Vector Space Axioms</div>
                <div class="explain-line-desc">Assume au + bv is in W for all u, v in W and all scalars a, b in F. We must verify that W satisfies the vector space axioms.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Establishing Zero Vector and Inverse</span>
                <div class="explain-line-title">Specializing the Scalars</div>
                <div class="explain-line-desc">Taking a = 0 and b = 0 gives 0*u + 0*v = 0 in W, so the zero vector exists. Taking a = -1 and b = 0 gives (-1)*u = -u in W, so additive inverses exist.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Establishing Addition and Scalar Closures</span>
                <div class="explain-line-title">Verifying Group Operations</div>
                <div class="explain-line-desc">Taking a = 1 and b = 1 gives 1*u + 1*v = u + v in W, proving closure under addition. Taking b = 0 gives a*u in W, proving closure under scalar multiplication.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Inherited Axioms and Final Conclusion</span>
                <div class="explain-line-title">Inheritance from Parent Space</div>
                <div class="explain-line-desc">Associativity, commutativity, and distributive laws hold automatically because all elements of W are elements of V. Hence W is a subspace.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Theorem statement: 2 marks; Necessity proof: 4 marks; Sufficiency zero vector and inverse derivation: 5 marks; Sufficiency closure and inherited laws: 5 marks.</div>
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
<div class="question-card" data-category="subspace">
        <div class="card-top">
          <span class="q-pill">Part B • Q6 (16 Marks)</span>
          <div class="q-heading">(i) If $W_1$ and $W_2$ are subspaces of $V$, prove that $W_1 \cup W_2$ is a subspace of $V$ if and only if $W_1 \subseteq W_2$ or $W_2 \subseteq W_1$. [8 Marks]<br>
          (ii) Verify whether any set of 5 matrices in $M_{2 \times 2}$ is linearly dependent or not. [8 Marks]</div>
        </div>
        <div class="solution-content">
          <div class="partb-step">
            <div class="step-title">Part (i) Solution: Union of Subspaces Theorem (Full 8 Marks)</div>
            <p><strong>Proof in Two Directions:</strong></p>
            <p><strong>Case 1: Sufficient Condition ($\impliedby$):</strong><br>
            Assume $W_1 \subseteq W_2$ or $W_2 \subseteq W_1$.<br>
            • If $W_1 \subseteq W_2$, then $W_1 \cup W_2 = W_2$. Since $W_2$ is a subspace, $W_1 \cup W_2$ is a subspace.<br>
            • If $W_2 \subseteq W_1$, then $W_1 \cup W_2 = W_1$. Since $W_1$ is a subspace, $W_1 \cup W_2$ is a subspace.<br>
            Hence the condition is sufficient.</p>

            <p style="margin-top:10px;"><strong>Case 2: Necessary Condition by Contradiction ($\implies$):</strong><br>
            Assume $W_1 \cup W_2$ is a subspace of $V$.<br>
            Suppose on the contrary that $W_1 \not\subseteq W_2$ and $W_2 \not\subseteq W_1$.<br>
            1. Since $W_1 \not\subseteq W_2$, there exists a vector $x \in W_1$ such that $x \notin W_2$.<br>
            2. Since $W_2 \not\subseteq W_1$, there exists a vector $y \in W_2$ such that $y \notin W_1$.<br>
            3. Since $x \in W_1 \implies x \in W_1 \cup W_2$, and $y \in W_2 \implies y \in W_1 \cup W_2$.<br>
            4. Because $W_1 \cup W_2$ is assumed to be a subspace, it must be closed under addition:<br>
            $$x + y \in W_1 \cup W_2 \implies x + y \in W_1 \quad \text{or} \quad x + y \in W_2$$<br>
            • <strong>Sub-case A:</strong> Suppose $x + y \in W_1$. Since $x \in W_1$ and $W_1$ is a subspace, $(-x) \in W_1$.<br>
            Therefore, $y = (x + y) + (-x) \in W_1$. This directly contradicts our hypothesis that $y \notin W_1$!<br>
            • <strong>Sub-case B:</strong> Suppose $x + y \in W_2$. Since $y \in W_2$ and $W_2$ is a subspace, $(-y) \in W_2$.<br>
            Therefore, $x = (x + y) + (-y) \in W_2$. This directly contradicts our hypothesis that $x \notin W_2$!<br>
            5. In both cases, we arrive at an impossible contradiction. Hence our supposition was false.</p>
            <div class="tag-result">Hence proved: $W_1 \cup W_2$ is a subspace iff $W_1 \subseteq W_2$ or $W_2 \subseteq W_1$.</div>
          </div>

          <div class="partb-step">
            <div class="step-title">Part (ii) Solution: Dimension Bound on $M_{2 \times 2}(\mathbb{R})$ (Full 8 Marks)</div>
            <p><strong>Theorem:</strong> In any finite-dimensional vector space $V$ of dimension $n$, any set of $m$ vectors where $m > n$ is always Linearly Dependent.</p>
            <p>1. The vector space $M_{2 \times 2}(\mathbb{R})$ of all $2 \times 2$ matrices over $\mathbb{R}$ has standard basis:
            $$E_{11} = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, \quad E_{12} = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \quad E_{21} = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, \quad E_{22} = \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}$$</p>
            <p>2. Therefore, $\dim(M_{2 \times 2}(\mathbb{R})) = 2 \times 2 = 4$.</p>
            <p>3. Let $S = \{A_1, A_2, A_3, A_4, A_5\}$ be any set of 5 matrices in $M_{2 \times 2}(\mathbb{R})$.<br>
            Consider the equation $c_1 A_1 + c_2 A_2 + c_3 A_3 + c_4 A_4 + c_5 A_5 = O$.<br>
            Comparing entries produces a system of 4 linear equations in 5 unknowns ($c_1, c_2, c_3, c_4, c_5$).</p>
            <p>4. Since the number of unknowns ($5$) exceeds the number of equations ($4$), by the Rank Theorem, the system has infinitely many non-trivial solutions ($\ge 5 - 4 = 1$ free variable).</p>
            <div class="tag-result fail">Conclusion (ii): Any set of 5 matrices in $M_{2 \times 2}(\mathbb{R})$ is strictly Linearly Dependent.</div>
          </div>
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
                <div class="explain-line-title">Two Part Subspace Operation Theorem</div>
                <div class="explain-line-desc">Part (i) asks to prove that the intersection of two subspaces W1 and W2 is always a subspace. Part (ii) asks to prove that the union of two subspaces is a subspace if and only if one is contained in the other.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Intersection Setup</span>
                <div class="explain-line-title">Definition of Intersection</div>
                <div class="explain-line-desc">Let u, v belong to W1 intersection W2, and let a, b be scalars. By definition of intersection, u, v belong to W1 and u, v belong to W2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Intersection Proof</span>
                <div class="explain-line-title">Simultaneous Closure</div>
                <div class="explain-line-desc">Since W1 is a subspace, au + bv is in W1. Since W2 is a subspace, au + bv is in W2. Therefore, au + bv belongs to W1 intersection W2, proving it is a subspace.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Union Theorem Setup</span>
                <div class="explain-line-title">One Contained in the Other</div>
                <div class="explain-line-desc">We must prove that W1 union W2 is a subspace if and only if W1 is a subset of W2 or W2 is a subset of W1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Union Sufficiency Proof</span>
                <div class="explain-line-title">Trivial Direction</div>
                <div class="explain-line-desc">If W1 is a subset of W2, then W1 union W2 = W2, which is already a subspace. Similarly if W2 is a subset of W1, W1 union W2 = W1, which is a subspace.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Union Necessity Proof by Contradiction</span>
                <div class="explain-line-title">Constructing the Counterexample</div>
                <div class="explain-line-desc">Assume neither is contained in the other. Pick u in W1 not in W2, and v in W2 not in W1. Consider w = u + v. If w is in W1, then v = w - u must be in W1, contradiction. If w is in W2, then u = w - v must be in W2, contradiction.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Subspace Closure Failure for Union</div>
                <div class="explain-line-desc">Because w cannot belong to either W1 or W2, the union is not closed under addition unless one subspace completely contains the other.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Intersection theorem setup and proof: 6 marks; Union sufficiency proof: 3 marks; Union necessity contradiction proof: 7 marks.</div>
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
<div class="question-card" data-category="dependence">
        <div class="card-top">
          <span class="q-pill">Part B • Q7 (16 Marks)</span>
          <div class="q-heading">(i) For which values of $k$ will the vector $V = (1,-2,k)$ in $\mathbb{R}^3$ be a linear combination of $U = (3,0,-2)$ and $W = (2,-1,-5)$? [8 Marks]<br>
          (ii) Determine whether $\operatorname{span}\{(1,-1,0), (0,1,1), (3,-5,-2)\} = \mathbb{R}^3$. [8 Marks]</div>
        </div>
        <div class="solution-content">
          <div class="partb-step">
            <div class="step-title">Part (i) Solution: Determining Scalar $k$ (Full 8 Marks)</div>
            <p>Let $V = c_1 U + c_2 W$:</p>
            <div class="math-panel">
              $$(1, -2, k) = c_1(3, 0, -2) + c_2(2, -1, -5) = (3c_1 + 2c_2, \; -c_2, \; -2c_1 - 5c_2)$$
            </div>
            <p>Equating corresponding components:</p>
            <div class="math-panel">
              $$\begin{aligned}
              3c_1 + 2c_2 &= 1 && \text{--- (1)} \\
              -c_2 &= -2 \implies \mathbf{c_2 = 2} && \text{--- (2)} \\
              -2c_1 - 5c_2 &= k && \text{--- (3)}
              \end{aligned}$$
            </div>
            <p>• From (2), $\mathbf{c_2 = 2}$.<br>
            • Substitute $c_2 = 2$ into (1):<br>
            $$3c_1 + 2(2) = 1 \implies 3c_1 + 4 = 1 \implies 3c_1 = -3 \implies \mathbf{c_1 = -1}$$<br>
            • Now substitute $c_1 = -1$ and $c_2 = 2$ into equation (3):<br>
            $$k = -2c_1 - 5c_2 = -2(-1) - 5(2) = 2 - 10 = \mathbf{-8}$$</p>
            <div class="tag-result">Part (i) Answer: $k = -8$</div>
          </div>

          <div class="partb-step">
            <div class="step-title">Part (ii) Solution: Spanning Test of $\mathbb{R}^3$ (Full 8 Marks)</div>
            <p>Let $S = \{v_1=(1,-1,0), v_2=(0,1,1), v_3=(3,-5,-2)\}$. We test if $\operatorname{Span}(S) = \mathbb{R}^3$.<br>
            Since $\dim(\mathbb{R}^3) = 3$ and $|S| = 3$, $S$ spans $\mathbb{R}^3$ if and only if the determinant of the matrix formed by the vectors is non-zero ($|A| \neq 0$).</p>
            <div class="math-panel">
              $$|A| = \begin{vmatrix} 1 & -1 & 0 \\ 0 & 1 & 1 \\ 3 & -5 & -2 \end{vmatrix}$$
              $$\begin{aligned}
              |A| &= 1[1(-2) - 1(-5)] - (-1)[0(-2) - 1(3)] + 0[0(-5) - 1(3)] \\
                  &= 1(-2 + 5) + 1(0 - 3) + 0 \\
                  &= 1(3) + 1(-3) = 3 - 3 = \mathbf{0}
              \end{aligned}$$
            </div>
            <p>• Since $|A| = 0$, the vectors are <strong>Linearly Dependent</strong>.<br>
            • Row operations show $v_3 = 3v_1 - 2v_2$. The rank is $\rho(A) = 2 < 3$.<br>
            • Therefore, $\operatorname{Span}(S)$ is only a 2-dimensional plane passing through the origin in $\mathbb{R}^3$.</p>
            <div class="tag-result fail">Conclusion (ii): $\operatorname{span}\{(1,-1,0), (0,1,1), (3,-5,-2)\} \neq \mathbb{R}^3$ (Does NOT span $\mathbb{R}^3$).</div>
          </div>
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
                <div class="explain-line-title">Finding the Unknown Parameter</div>
                <div class="explain-line-desc">We are given vectors u1 = (1, -1, 3), u2 = (2, 4, 0), u3 = (3, 3, 3) and target vector V = (1, -2, k). We need to determine the value of k such that V is a linear combination of u1, u2, u3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Vector Equation Modeling</span>
                <div class="explain-line-title">Setting Up Linear Combination</div>
                <div class="explain-line-desc">We set V = c1*u1 + c2*u2 + c3*u3. Expanding component-wise gives: c1 + 2*c2 + 3*c3 = 1, -c1 + 4*c2 + 3*c3 = -2, and 3*c1 + 0*c2 + 3*c3 = k.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Forming the Augmented Matrix</span>
                <div class="explain-line-title">Setting Up Gaussian Elimination</div>
                <div class="explain-line-desc">The augmented matrix is [1, 2, 3 | 1; -1, 4, 3 | -2; 3, 0, 3 | k]. We perform elementary row operations to reduce it to row echelon form.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Row Operations Execution</span>
                <div class="explain-line-title">Eliminating Leading Entries</div>
                <div class="explain-line-desc">Row 2 becomes Row 2 + Row 1: [0, 6, 6 | -1]. Row 3 becomes Row 3 - 3*Row 1: [0, -6, -6 | k - 3].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Second Elimination Step</span>
                <div class="explain-line-title">Detecting Consistency Condition</div>
                <div class="explain-line-desc">Row 3 becomes Row 3 + Row 2: [0, 0, 0 | k - 3 - 1] = [0, 0, 0 | k - 4].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Consistency Criterion</span>
                <div class="explain-line-title">Equating the Zero Row</div>
                <div class="explain-line-desc">For the linear system to have a solution, the bottom row must not produce an impossible equation 0 = non-zero. Therefore, the right side must equal zero: k - 4 = 0, which yields k = 4.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Verification and Final Answer</span>
                <div class="explain-line-title">Back-Substitution Check</div>
                <div class="explain-line-desc">When k = 4, the system is consistent with infinitely many solutions for c1, c2, c3. The vector V = (1, -2, 4) lies in the span of the three given vectors.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Vector equation setup: 3 marks; Augmented matrix representation: 3 marks; Row reduction steps: 5 marks; Consistency condition and final value k = 4: 5 marks.</div>
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
<div class="question-card" data-category="basis">
        <div class="card-top">
          <span class="q-pill">Part B • Q8 (16 Marks)</span>
          <div class="q-heading">(i) Find the dimension and basis of $W = \{(a,b,c) \in \mathbb{R}^3 \mid 2a + 3b = c, \; 7c + 2b = a\}$. [8 Marks]<br>
          (ii) Let $S = \{v_1, v_2, v_3\}$ where $v_1=(2,1,0), v_2=(-3,-3,1), v_3=(-2,1,-1)$. Show that $S$ is a basis of $\mathbb{R}^3$. [8 Marks]</div>
        </div>
        <div class="solution-content">
          <div class="partb-step">
            <div class="step-title">Part (i) Solution: Basis and Dimension of Subspace $W$ (Full 8 Marks)</div>
            <p>The subspace $W$ is defined by the homogeneous system:</p>
            <div class="math-panel">
              $$\begin{aligned}
              2a + 3b - c &= 0 && \text{--- (1)} \\
              -a + 2b + 7c &= 0 \implies a = 2b + 7c && \text{--- (2)}
              \end{aligned}$$
            </div>
            <p>Substitute equation (2) into equation (1):</p>
            <div class="math-panel">
              $$2(2b + 7c) + 3b - c = 0 \implies 4b + 14c + 3b - c = 0 \implies 7b + 13c = 0 \implies \mathbf{b = -\frac{13}{7}c}$$
            </div>
            <p>Substitute $b$ back into equation (2) to find $a$ in terms of $c$:</p>
            <div class="math-panel">
              $$a = 2\left(-\frac{13}{7}c\right) + 7c = -\frac{26}{7}c + \frac{49}{7}c = \mathbf{\frac{23}{7}c}$$
            </div>
            <p>Any vector $(a, b, c) \in W$ can be expressed as:</p>
            <div class="math-panel">
              $$(a, b, c) = \left(\frac{23}{7}c, \; -\frac{13}{7}c, \; c\right) = \frac{c}{7}(23, -13, 7)$$
            </div>
            <p>Setting $t = \frac{c}{7}$ (free parameter): $(a, b, c) = t(23, -13, 7)$.</p>
            <div class="tag-result">Part (i) Result: Basis of $W$ is $B = \{(23, -13, 7)\}$ and $\mathbf{\dim(W) = 1}$.</div>
          </div>

          <div class="partb-step">
            <div class="step-title">Part (ii) Solution: Proving Basis of $\mathbb{R}^3$ (Full 8 Marks)</div>
            <p>To prove $S = \{v_1, v_2, v_3\}$ is a basis of $\mathbb{R}^3$, we must show:<br>
            1. $S$ is <strong>Linearly Independent</strong>.<br>
            2. $S$ <strong>spans</strong> $\mathbb{R}^3$.</p>
            
            <p><strong>1. Linear Independence Test via Determinant:</strong></p>
            <div class="math-panel">
              $$|A| = \begin{vmatrix} 2 & 1 & 0 \\ -3 & -3 & 1 \\ -2 & 1 & -1 \end{vmatrix}$$
              $$\begin{aligned}
              |A| &= 2[(-3)(-1) - (1)(1)] - 1[(-3)(-1) - (1)(-2)] + 0 \\
                  &= 2(3 - 1) - 1(3 + 2) + 0 \\
                  &= 2(2) - 1(5) = 4 - 5 = \mathbf{-1 \neq 0}
              \end{aligned}$$
            </div>
            <p>Since $|A| = -1 \neq 0$, the set $S$ is **Linearly Independent**.</p>

            <p style="margin-top:10px;"><strong>2. Spanning Property:</strong><br>
            Let $(x, y, z) \in \mathbb{R}^3$ be any arbitrary vector. Consider $c_1 v_1 + c_2 v_2 + c_3 v_3 = (x, y, z)$.<br>
            This matrix equation $A^T C = X$ has determinant $|A^T| = |A| = -1 \neq 0$.<br>
            By Cramer's Rule, since $|A| \neq 0$, unique scalar solutions $(c_1, c_2, c_3)$ exist for every vector $(x,y,z) \in \mathbb{R}^3$. Hence $\operatorname{Span}(S) = \mathbb{R}^3$.</p>
            <div class="tag-result"> Since $S$ is linearly independent and spans $\mathbb{R}^3$, $S$ is a Basis of $\mathbb{R}^3$.</div>
          </div>
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
                <div class="explain-line-title">Equation-Constrained Subspace in R3</div>
                <div class="explain-line-desc">We consider the subspace W of R3 consisting of all vectors (a, b, c) that satisfy the linear constraint a + b + c = 0. We need to find a basis and the dimension of W.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Dimension Formula for Hyperplanes</span>
                <div class="explain-line-title">Degrees of Freedom Principle</div>
                <div class="explain-line-desc">The ambient space R3 has dimension 3. The subspace is defined by 1 independent linear constraint. Therefore, the dimension of W is expected to be 3 - 1 = 2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Expressing Dependent Variables</span>
                <div class="explain-line-title">Parametric Representation</div>
                <div class="explain-line-desc">From the constraint a + b + c = 0, we can express a in terms of the free variables b and c: a = -b - c. Here b and c can take any real value independently.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Vector Decomposition</span>
                <div class="explain-line-title">Splitting into Free Parameters</div>
                <div class="explain-line-desc">Any vector in W has the form (-b - c, b, c). Decomposing this vector by factoring out b and c gives: b*(-1, 1, 0) + c*(-1, 0, 1).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Proving the Spanning Property</span>
                <div class="explain-line-title">Every Element Generated</div>
                <div class="explain-line-desc">Since any vector in W can be written as a linear combination of v1 = (-1, 1, 0) and v2 = (-1, 0, 1), the set B = {(-1, 1, 0), (-1, 0, 1)} spans W.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Proving Linear Independence</span>
                <div class="explain-line-title">Checking Proportionality</div>
                <div class="explain-line-desc">To verify independence, set c1*(-1, 1, 0) + c2*(-1, 0, 1) = (0, 0, 0). The second component gives c1 = 0, and the third component gives c2 = 0. Hence the vectors are linearly independent.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Basis and Dimension State</div>
                <div class="explain-line-desc">The set {(-1, 1, 0), (-1, 0, 1)} forms a basis for W, and the dimension of W is exactly 2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Subspace constraint and free variables: 3 marks; Vector parametric decomposition: 4 marks; Spanning proof: 3 marks; Linear independence proof: 3 marks; Dimension statement: 3 marks.</div>
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
<div class="question-card" data-category="basis">
        <div class="card-top">
          <span class="q-pill">Part B • Q9 (16 Marks)</span>
          <div class="q-heading">(i) Show that the following vectors form a basis for $V_3(\mathbb{R}) = \{(1,1,0), (0,1,1), (1,0,1)\}$. [8 Marks]<br>
          (ii) Determine the basis and dimension of the solution space of the linear homogeneous system:
          $$x + y - z = 0; \quad -2x - y + 2z = 0; \quad -x + z = 0 \quad [8 \text{ Marks}]$$</div>
        </div>
        <div class="solution-content">
          <div class="partb-step">
            <div class="step-title">Part (i) Solution: Basis of $V_3(\mathbb{R})$ (Full 8 Marks)</div>
            <p>Let $v_1 = (1,1,0), v_2 = (0,1,1), v_3 = (1,0,1)$.</p>
            <div class="math-panel">
              $$|A| = \begin{vmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{vmatrix} = 1(1 - 0) - 1(0 - 1) + 0 = 1(1) - 1(-1) = 1 + 1 = \mathbf{2 \neq 0}$$
            </div>
            <p>• Since $|A| = 2 \neq 0$, the vectors are <strong>Linearly Independent</strong>.<br>
            • Let $(x, y, z) \in \mathbb{R}^3$ be arbitrary. Setting $c_1(1,1,0) + c_2(0,1,1) + c_3(1,0,1) = (x, y, z)$ gives:<br>
            $$c_1 + c_3 = x, \quad c_1 + c_2 = y, \quad c_2 + c_3 = z$$<br>
            Solving yields: $c_1 = \frac{x+y-z}{2}, \; c_2 = \frac{-x+y+z}{2}, \; c_3 = \frac{x-y+z}{2}$.<br>
            Since unique scalars exist for every vector in $V_3(\mathbb{R})$, $S$ spans $V_3(\mathbb{R})$.</p>
            <div class="tag-result">Part (i) Result: $S$ forms a Basis for $V_3(\mathbb{R})$.</div>
          </div>

          <div class="partb-step">
            <div class="step-title">Part (ii) Solution: Solution Space (Null Space) Basis &amp; Dimension (Full 8 Marks)</div>
            <p>Write the homogeneous system in matrix form $AX = 0$:</p>
            <div class="math-panel">
              $$A = \begin{bmatrix} 1 & 1 & -1 \\ -2 & -1 & 2 \\ -1 & 0 & 1 \end{bmatrix}$$
              <p>Apply row operations $R_2 \to R_2 + 2R_1$ and $R_3 \to R_3 + R_1$:</p>
              $$\sim \begin{bmatrix} 1 & 1 & -1 \\ 0 & -1 + 2(1) & 2 + 2(-1) \\ 0 & 0 + 1(1) & 1 + 1(-1) \end{bmatrix} = \begin{bmatrix} 1 & 1 & -1 \\ 0 & 1 & 0 \\ 0 & 1 & 0 \end{bmatrix}$$
              <p>Apply $R_3 \to R_3 - R_2$:</p>
              $$\sim \begin{bmatrix} 1 & 1 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$
            </div>
            <p>• The matrix is in Row Echelon Form with $\operatorname{Rank}(A) = r = 2$.<br>
            • Number of unknowns is $n = 3$.<br>
            • By Rank-Nullity Theorem: $\text{Dimension of Solution Space} = n - r = 3 - 2 = \mathbf{1}$.<br>
            • From row 2: $\mathbf{y = 0}$.<br>
            • From row 1: $x + y - z = 0 \implies x + 0 - z = 0 \implies \mathbf{x = z}$.<br>
            • Setting $z = t$ (free parameter), the general solution vector is:</p>
            <div class="math-panel">
              $$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} t \\ 0 \\ t \end{bmatrix} = t \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}$$
            </div>
            <div class="tag-result">Part (ii) Result: Basis of Solution Space is $\left\{ \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} \right\}$ and $\mathbf{\dim(\text{Solution Space}) = 1}$.</div>
          </div>
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
                <div class="explain-line-title">Testing a Basis in 3-Dimensional Space</div>
                <div class="explain-line-desc">We are given three vectors in R3: v1 = (1, 2, 1), v2 = (2, 1, 0), and v3 = (1, -1, 2). We must prove that this set forms a basis for R3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Core Basis Theorem</span>
                <div class="explain-line-title">Dimension Equivalence Property</div>
                <div class="explain-line-desc">Since the dimension of R3 is 3 and we are given exactly 3 vectors, the vectors form a basis if and only if they are linearly independent, which is equivalent to showing their determinant is non-zero.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Determinant Matrix Setup</span>
                <div class="explain-line-title">Placing Vectors into Matrix</div>
                <div class="explain-line-desc">Form the 3x3 matrix A whose rows are the three vectors: Row 1 = [1, 2, 1], Row 2 = [2, 1, 0], Row 3 = [1, -1, 2].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Determinant Expansion Calculation</span>
                <div class="explain-line-title">Cofactor Expansion</div>
                <div class="explain-line-desc">Expand along Row 2 or Column 3. Expanding along Row 2: det(A) = -2*(2*2 - 1*(-1)) + 1*(1*2 - 1*1) - 0 = -2*(4 + 1) + 1*(2 - 1) = -2*(5) + 1*(1) = -10 + 1 = -9.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Interpretation of Non-Zero Determinant</span>
                <div class="explain-line-title">Full Rank Implication</div>
                <div class="explain-line-desc">Because det(A) = -9 is not equal to zero, the matrix has full rank 3. This proves that no vector is a linear combination of the other two.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Spanning Property Consequence</span>
                <div class="explain-line-title">Automatic Spanning in Dimension n</div>
                <div class="explain-line-desc">By the basis theorem, any linearly independent set of n vectors in an n-dimensional vector space automatically spans the space. Therefore, {v1, v2, v3} spans R3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Basis Formally Established</div>
                <div class="explain-line-desc">Having proved both linear independence and the spanning property, the set {(1, 2, 1), (2, 1, 0), (1, -1, 2)} forms a valid basis for R3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Basis criteria definition: 3 marks; Matrix determinant setup: 4 marks; Determinant evaluation step-by-step: 5 marks; Full rank and basis conclusion: 4 marks.</div>
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
<div class="question-card" data-category="basis">
        <div class="card-top">
          <span class="q-pill">Part B • Q10 (16 Marks)</span>
          <div class="q-heading">Show that the vectors $\{(2,-3,1), (0,1,2), (1,1,2)\}$ form a basis for $V_3(\mathbb{R})$. [16 Marks]</div>
        </div>
        <div class="solution-content">
          <p>Let $S = \{v_1=(2,-3,1), v_2=(0,1,2), v_3=(1,1,2)\}$.</p>
          <div class="partb-step">
            <div class="step-title">Step 1: Test for Linear Independence</div>
            <p>Consider the vector equation: $c_1 v_1 + c_2 v_2 + c_3 v_3 = 0$ where $c_1, c_2, c_3 \in \mathbb{R}$.<br>
            Form the $3 \times 3$ matrix $A$ with vectors as rows and evaluate its determinant:</p>
            <div class="math-panel">
              $$|A| = \begin{vmatrix} 2 & -3 & 1 \\ 0 & 1 & 2 \\ 1 & 1 & 2 \end{vmatrix}$$
              $$\begin{aligned}
              |A| &= 2[1(2) - 2(1)] - (-3)[0(2) - 2(1)] + 1[0(1) - 1(1)] \\
                  &= 2(2 - 2) + 3(0 - 2) + 1(0 - 1) \\
                  &= 2(0) + 3(-2) + 1(-1) \\
                  &= 0 - 6 - 1 = \mathbf{-7 \neq 0}
              \end{aligned}$$
            </div>
            <p>Since the determinant $|A| = -7 \neq 0$, the only solution to $c_1 v_1 + c_2 v_2 + c_3 v_3 = 0$ is the trivial solution $c_1 = 0, c_2 = 0, c_3 = 0$.<br>
            Hence, the set $S$ is **Linearly Independent**.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Test for Spanning Property of $V_3(\mathbb{R})$</div>
            <p>Let $(x, y, z)$ be any arbitrary vector in $V_3(\mathbb{R})$. We show there exist scalars $c_1, c_2, c_3$ such that:
            $$(x, y, z) = c_1(2, -3, 1) + c_2(0, 1, 2) + c_3(1, 1, 2)$$</p>
            <div class="math-panel">
              $$\begin{aligned}
              2c_1 + 0c_2 + c_3 &= x && \text{--- (1)} \\
              -3c_1 + c_2 + c_3 &= y && \text{--- (2)} \\
              c_1 + 2c_2 + 2c_3 &= z && \text{--- (3)}
              \end{aligned}$$
            </div>
            <p>In matrix notation: $\begin{bmatrix} 2 & 0 & 1 \\ -3 & 1 & 1 \\ 1 & 2 & 2 \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \\ c_3 \end{bmatrix} = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$.<br>
            The coefficient matrix has determinant:
            $$\det = 2(2 - 2) - 0 + 1(-6 - 1) = -7 \neq 0$$
            By Cramer's Rule, because the coefficient determinant is non-zero ($-7 \neq 0$), a **unique solution** for $(c_1, c_2, c_3)$ exists for every possible vector $(x, y, z) \in V_3(\mathbb{R})$.<br>
            Therefore, $\operatorname{Span}(S) = V_3(\mathbb{R})$.</p>
          </div>

          <div class="tag-result"> Conclusion: Since $S$ is linearly independent and spans $V_3(\mathbb{R})$, the set $S = \{(2,-3,1), (0,1,2), (1,1,2)\}$ is a complete Basis of $V_3(\mathbb{R})$.</div>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span> Touch for Explanation: The Basis Theorem Shortcut</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Verifying Three Vectors in R3</div>
                <div class="explain-line-desc">We are given the three vectors v1 = (2, -3, 1), v2 = (0, 1, 2), and v3 = (1, 1, 2). We must show that they form a basis for R3 and express a general vector (x, y, z) in terms of this basis.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Determinant Test for Independence</span>
                <div class="explain-line-title">Matrix Formulation</div>
                <div class="explain-line-desc">Assemble the matrix with vectors as columns or rows: A = [2, -3, 1; 0, 1, 2; 1, 1, 2]. Compute det(A) to check if the vectors are linearly independent.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Evaluating the Determinant</span>
                <div class="explain-line-title">Stepwise Arithmetic</div>
                <div class="explain-line-desc">det(A) = 2*(1*2 - 2*1) - (-3)*(0*2 - 2*1) + 1*(0*1 - 1*1) = 2*(0) + 3*(-2) + 1*(-1) = 0 - 6 - 1 = -7. Since -7 is non-zero, the vectors are linearly independent.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Setting Up General Coordinate Representation</span>
                <div class="explain-line-title">Finding Coordinate Vector</div>
                <div class="explain-line-desc">Let (x, y, z) = c1*(2, -3, 1) + c2*(0, 1, 2) + c3*(1, 1, 2). This gives: 2*c1 + c3 = x, -3*c1 + c2 + c3 = y, and c1 + 2*c2 + 2*c3 = z.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Solving for Scalars c1, c2, c3</span>
                <div class="explain-line-title">Matrix Inversion or Elimination</div>
                <div class="explain-line-desc">Using Cramer rule or row elimination with determinant -7, we find unique scalar formulas for c1, c2, and c3 in terms of x, y, and z.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Coordinate Solution Expressions</span>
                <div class="explain-line-title">Explicit Scalar Formulas</div>
                <div class="explain-line-desc">c1 = (0*x + 2*y - c3)/denominator, leading to unique values for every point (x, y, z) in R3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Confirmed Basis and Unique Representation</div>
                <div class="explain-line-desc">Since the vectors are independent and span R3, they form a basis. Every vector has a unique coordinate representation.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Linear independence determinant test: 6 marks; Linear combination system setup: 4 marks; Coordinate formulas solution: 4 marks; Final conclusion: 2 marks.</div>
              </div>
              <div class="inline-ai-section">
          <div class="inline-ai-header">
            <div class="inline-ai-title-wrap">
              <span class="inline-ai-title">AI Assistant &amp; Step Inquiries</span>
              <span class="inline-ai-desc">Ask doubts, request alternative derivations, or verify calculations for this problem</span>
            </div>
            <div class="inline-ai-controls">
              <select class="inline-ai-model" aria-label="Select Model">
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
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Matrix Space Decomposition</div>
                <div class="explain-line-desc">Let V = Mn x n be the vector space of all n x n real matrices. Let W1 be the subspace of symmetric matrices (A^T = A) and W2 be the subspace of skew-symmetric matrices (A^T = -A). We must prove V is the direct sum of W1 and W2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Direct Sum Criteria</span>
                <div class="explain-line-title">The Two Requirements for Direct Sum</div>
                <div class="explain-line-desc">A vector space V is the direct sum of W1 and W2 (written V = W1 direct-sum W2) if and only if two conditions hold: first, W1 + W2 = V (every matrix can be written as a sum), and second, W1 intersection W2 = {0} (the sum is unique).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Additive Decomposition of a Matrix</span>
                <div class="explain-line-title">Symmetric and Anti-Symmetric Parts</div>
                <div class="explain-line-desc">For any matrix A in V, we can write: A = (1/2)*(A + A^T) + (1/2)*(A - A^T). Let S = (1/2)*(A + A^T) and K = (1/2)*(A - A^T). Clearly S + K = A.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Proving S is Symmetric</span>
                <div class="explain-line-title">Testing Transpose Property</div>
                <div class="explain-line-desc">Compute S^T: S^T = ((1/2)*(A + A^T))^T = (1/2)*(A^T + (A^T)^T) = (1/2)*(A^T + A) = S. Since S^T = S, the matrix S belongs to W1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Proving K is Skew-Symmetric</span>
                <div class="explain-line-title">Testing Negation Property</div>
                <div class="explain-line-desc">Compute K^T: K^T = ((1/2)*(A - A^T))^T = (1/2)*(A^T - A) = -(1/2)*(A - A^T) = -K. Since K^T = -K, the matrix K belongs to W2. Thus V = W1 + W2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Proving Zero Intersection</span>
                <div class="explain-line-title">Testing Common Elements</div>
                <div class="explain-line-desc">Let matrix M belong to W1 intersection W2. Since M is in W1, M^T = M. Since M is in W2, M^T = -M. Therefore, M = -M, which implies 2*M = 0, so M = 0. The intersection contains only the zero matrix.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Direct Sum Established</div>
                <div class="explain-line-desc">Because every matrix decomposes into symmetric and skew-symmetric parts and their intersection is only the zero matrix, V = W1 direct-sum W2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Direct sum definition: 2 marks; Matrix decomposition formula: 4 marks; Proof of symmetry and skew-symmetry: 4 marks; Proof of zero intersection: 4 marks; Final conclusion: 2 marks.</div>
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
            • $R_3 \to R_3 - R_1 = (0, 0, -1, 0) \to (0, 0, 1, 0)$ (Piv\dots in columns 1, 2, 3).<br>
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
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
<div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Problem Setup</span>
                <div class="explain-line-title">Extending Independent Vectors in R4</div>
                <div class="explain-line-desc">We are given a linearly independent set S = {(1, 0, 1, 0), (0, 1, 0, 1)} in R4. We must extend this set to form a complete basis for R4.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Basis Extension Theorem</span>
                <div class="explain-line-title">Steinitz Exchange Principle</div>
                <div class="explain-line-desc">The ambient space R4 has dimension 4. Any linearly independent set of k vectors (where k < 4) can be extended to a basis of 4 vectors by selecting vectors from the standard basis that are not in the span of the given set.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Standard Basis Selection</span>
                <div class="explain-line-title">Testing Candidate Vectors</div>
                <div class="explain-line-desc">The standard basis of R4 is e1 = (1, 0, 0, 0), e2 = (0, 1, 0, 0), e3 = (0, 0, 1, 0), and e4 = (0, 0, 0, 1). We test appending e1 and e2 to S.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Matrix Formulation for Independence</span>
                <div class="explain-line-title">Forming the 4x4 Matrix</div>
                <div class="explain-line-desc">Assemble the matrix with vectors as rows: Row 1 = [1, 0, 1, 0], Row 2 = [0, 1, 0, 1], Row 3 = [1, 0, 0, 0], Row 4 = [0, 1, 0, 0].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Row Reduction to Echelon Form</span>
                <div class="explain-line-title">Gaussian Elimination Steps</div>
                <div class="explain-line-desc">Subtract Row 3 from Row 1: [0, 0, 1, 0]. Subtract Row 4 from Row 2: [0, 0, 0, 1]. Rearranging rows gives the 4x4 identity matrix.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Rank and Independence Verification</span>
                <div class="explain-line-title">Full Rank 4 Established</div>
                <div class="explain-line-desc">Since the matrix row-reduces to the identity matrix, its determinant is non-zero (+1 or -1) and its rank is 4. Therefore, the 4 vectors are linearly independent.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Extended Basis Stated</div>
                <div class="explain-line-desc">The set {(1, 0, 1, 0), (0, 1, 0, 1), (1, 0, 0, 0), (0, 1, 0, 0)} forms a complete basis for R4.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Basis extension theorem statement: 3 marks; Candidate vectors selection: 3 marks; Matrix row reduction: 5 marks; Rank verification and basis conclusion: 5 marks.</div>
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


    <!-- Part B • Tough Challenge Q13 (16 Marks) -->

<div class="question-card" data-category="subspace">
      <div class="card-top">
        <span class="q-pill">Part B • Tough Challenge Q13 (16 Marks)</span>
        <div class="q-heading">Let $W_1$ and $W_2$ be two subspaces of $\mathbb{R}^4$ defined by:
        $$W_1 = \{(x_1, x_2, x_3, x_4) \in \mathbb{R}^4 \mid x_1 + x_2 - x_3 = 0, \; x_2 - x_4 = 0\}$$
        $$W_2 = \{(x_1, x_2, x_3, x_4) \in \mathbb{R}^4 \mid x_1 - x_2 + x_4 = 0, \; x_3 + x_4 = 0\}$$
        Find the basis and dimension for $W_1$, $W_2$, $W_1 \cap W_2$, and $W_1 + W_2$, and verify the dimension formula:
        $$\dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2)$$</div>
      </div>
      <div class="solution-content">
        <p><strong>Aim:</strong> Rigorously determine bases and dimensions of subspaces, their intersection, and their sum, and verify the dimension theorem for subspaces.</p>

        <div class="partb-step">
          <div class="step-title">Step 1: Basis and Dimension of $W_1$</div>
          <p>For $x \in W_1$, the constraints are $x_3 = x_1 + x_2$ and $x_4 = x_2$. The free variables are $x_1$ and $x_2$:
          $$\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} x_1 \\ x_2 \\ x_1 + x_2 \\ x_2 \end{pmatrix} = x_1 \begin{pmatrix} 1 \\ 0 \\ 1 \\ 0 \end{pmatrix} + x_2 \begin{pmatrix} 0 \\ 1 \\ 1 \\ 1 \end{pmatrix}$$
          Basis for $W_1$: $B_1 = \left\{ (1, 0, 1, 0), (0, 1, 1, 1) \right\}$.<br>
          Therefore, <strong>$\dim W_1 = 2$</strong>.</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 2: Basis and Dimension of $W_2$</div>
          <p>For $x \in W_2$, constraints are $x_1 = x_2 - x_4$ and $x_3 = -x_4$. Free variables are $x_2$ and $x_4$:
          $$\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} x_2 - x_4 \\ x_2 \\ -x_4 \\ x_4 \end{pmatrix} = x_2 \begin{pmatrix} 1 \\ 1 \\ 0 \\ 0 \end{pmatrix} + x_4 \begin{pmatrix} -1 \\ 0 \\ -1 \\ 1 \end{pmatrix}$$
          Basis for $W_2$: $B_2 = \left\{ (1, 1, 0, 0), (-1, 0, -1, 1) \right\}$.<br>
          Therefore, <strong>$\dim W_2 = 2$</strong>.</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 3: Basis and Dimension of Intersection $W_1 \cap W_2$</div>
          <p>Vectors in $W_1 \cap W_2$ satisfy all 4 linear equations simultaneously:
          $$\begin{cases}
          x_1 + x_2 - x_3 = 0 \\
          x_2 - x_4 = 0 \implies x_4 = x_2 \\
          x_1 - x_2 + x_4 = 0 \implies x_1 - x_2 + x_2 = 0 \implies x_1 = 0 \\
          x_3 + x_4 = 0 \implies x_3 = -x_4 = -x_2
          \end{cases}$$
          Substitute $x_1 = 0, x_3 = -x_2$ into equation 1: $0 + x_2 - (-x_2) = 0 \implies 2x_2 = 0 \implies x_2 = 0$.<br>
          Consequently, $x_1 = x_2 = x_3 = x_4 = 0$.<br>
          Therefore, $W_1 \cap W_2 = \{(0, 0, 0, 0)\} \implies$ <strong>$\dim(W_1 \cap W_2) = 0$</strong>.</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 4: Basis and Dimension of Sum $W_1 + W_2$</div>
          <p>$W_1 + W_2 = \text{span}(B_1 \cup B_2)$. Assemble the 4 basis vectors into a matrix and compute the determinant:
          $$\det \begin{pmatrix} 1 & 0 & 1 & -1 \\ 0 & 1 & 1 & 0 \\ 1 & 1 & 0 & -1 \\ 0 & 1 & 0 & 1 \end{pmatrix} = -2 \neq 0$$
          Since the determinant is non-zero, the 4 vectors are linearly independent in $\mathbb{R}^4$.<br>
          Hence, <strong>$\dim(W_1 + W_2) = 4$</strong>, and $W_1 \oplus W_2 = \mathbb{R}^4$.</p>
        </div>

        <div class="partb-step">
          <div class="step-title">Step 5: Verification of Subspace Dimension Formula</div>
          <p>$$\text{LHS} = \dim(W_1 + W_2) = 4$$
          $$\text{RHS} = \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2) = 2 + 2 - 0 = 4$$
          $$\text{LHS} = \text{RHS} = 4 \quad \text{Verified!}$$</p>
        </div>

        <div class="tag-result">Conclusion: $\dim W_1 = 2$, $\dim W_2 = 2$, $\dim(W_1 \cap W_2) = 0$, $\dim(W_1 + W_2) = 4$. Verified!</div>
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
                <div class="explain-line-title">Subspaces in R4 and Dimension Theorem</div>
                <div class="explain-line-desc">We are given two subspaces W1 and W2 in R4 defined by linear homogeneous equations. We must find bases and dimensions for W1, W2, W1 intersection W2, and verify dim(W1 + W2) = dim(W1) + dim(W2) - dim(W1 intersection W2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Dimension Theorem for Subspaces</span>
                <div class="explain-line-title">Core Dimension Formula</div>
                <div class="explain-line-desc">For any two finite-dimensional subspaces W1 and W2, the dimension of their sum equals the sum of their individual dimensions minus the dimension of their intersection.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Finding Dimension and Basis of W1</span>
                <div class="explain-line-title">Solving Defining Constraint</div>
                <div class="explain-line-desc">Let W1 be defined by x1 + x2 = 0. Free variables are x2, x3, x4. Dimension of W1 = 4 - 1 = 3. Basis vectors are (-1, 1, 0, 0), (0, 0, 1, 0), (0, 0, 0, 1).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Finding Dimension and Basis of W2</span>
                <div class="explain-line-title">Solving Defining Constraint</div>
                <div class="explain-line-desc">Let W2 be defined by x3 - x4 = 0. Free variables are x1, x2, x4. Dimension of W2 = 4 - 1 = 3. Basis vectors are (1, 0, 0, 0), (0, 1, 0, 0), (0, 0, 1, 1).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Finding the Intersection W1 and W2</span>
                <div class="explain-line-title">Simultaneous Constraints</div>
                <div class="explain-line-desc">Vectors in W1 intersection W2 must satisfy both x1 + x2 = 0 and x3 - x4 = 0. Free variables are x2 and x4. Dimension of intersection = 4 - 2 = 2. Basis is {(-1, 1, 0, 0), (0, 0, 1, 1)}.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Computing the Sum W1 + W2</span>
                <div class="explain-line-title">Spanning the Entire Ambient Space</div>
                <div class="explain-line-desc">The union of their bases spans all 4 unit vectors, so W1 + W2 = R4, which means dim(W1 + W2) = 4.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Dimension Formula Verification</span>
                <div class="explain-line-title">Exact Numerical Equality</div>
                <div class="explain-line-desc">Left side: dim(W1 + W2) = 4. Right side: dim(W1) + dim(W2) - dim(W1 intersection W2) = 3 + 3 - 2 = 4. The theorem is completely verified.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Dimension theorem statement: 2 marks; W1 basis and dimension: 4 marks; W2 basis and dimension: 4 marks; Intersection basis and dimension: 3 marks; Theorem verification: 3 marks.</div>
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

<!-- Predicted Part B Q14 -->
      <div class="question-card" data-category="theorems">
        <div class="card-top">
          <span class="q-pill extra">Part B • Predicted Q14 (16 Marks)</span>
        </div>
        <div class="q-heading">
          Let $W_1$ and $W_2$ be subspaces of $\mathbb{R}^4$ defined by:<br>
          $W_1 = \{(x_1, x_2, x_3, x_4) \in \mathbb{R}^4 : x_1 + 2x_2 - x_3 = 0 \text{ and } x_2 + x_4 = 0\}$<br>
          $W_2 = \text{span}\{(1, -1, 1, 1), (0, 1, 2, -1)\}$.<br>
          (a) Find bases and dimensions for $W_1$, $W_2$, $W_1 \cap W_2$, and $W_1 + W_2$.<br>
          (b) Verify the dimension theorem: $\dim(W_1 + W_2) = \dim(W_1) + \dim(W_2) - \dim(W_1 \cap W_2)$.<br>
          (c) Determine whether $\mathbb{R}^4$ is the direct sum $W_1 \oplus W_2$.
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Solve linear homogeneous systems to find bases and dimensions of subspaces $W_1, W_2$, their intersection $W_1 \cap W_2$, their sum $W_1 + W_2$, verify Grassmann's formula, and assess the direct sum condition.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Basis and Dimension of $W_1$</div>
            <p>From the defining equations:
            $$x_3 = x_1 + 2x_2, \quad x_4 = -x_2$$
            Any vector in $W_1$ is given by:
            $$(x_1, x_2, x_3, x_4) = (x_1, x_2, x_1 + 2x_2, -x_2) = x_1(1, 0, 1, 0) + x_2(0, 1, 2, -1)$$
            Vectors $u_1 = (1, 0, 1, 0)$ and $u_2 = (0, 1, 2, -1)$ are clearly linearly independent.<br>
            <strong>Basis for $W_1$:</strong> $B_1 = \{(1, 0, 1, 0), (0, 1, 2, -1)\} \implies \dim(W_1) = 2$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Basis and Dimension of $W_2$</div>
            <p>$W_2$ is spanned by $v_1 = (1, -1, 1, 1)$ and $v_2 = (0, 1, 2, -1)$.<br>
            If $c_1(1, -1, 1, 1) + c_2(0, 1, 2, -1) = (0, 0, 0, 0) \implies c_1 = 0 \implies c_2 = 0$.<br>
            Since the spanning vectors are linearly independent:<br>
            <strong>Basis for $W_2$:</strong> $B_2 = \{(1, -1, 1, 1), (0, 1, 2, -1)\} \implies \dim(W_2) = 2$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Basis and Dimension of Intersection $W_1 \cap W_2$</div>
            <p>Let $x \in W_1 \cap W_2$. Since $x \in W_2$:
            $$x = c_1(1, -1, 1, 1) + c_2(0, 1, 2, -1) = (c_1, -c_1 + c_2, c_1 + 2c_2, c_1 - c_2)$$
            Since $x \in W_1$, its coordinates must satisfy the defining equations of $W_1$:<br>
            1. $x_1 + 2x_2 - x_3 = 0$:
            $$c_1 + 2(-c_1 + c_2) - (c_1 + 2c_2) = c_1 - 2c_1 + 2c_2 - c_1 - 2c_2 = -2c_1 = 0 \implies c_1 = 0$$
            2. $x_2 + x_4 = 0$:
            $$(-c_1 + c_2) + (c_1 - c_2) = 0 \quad (\text{satisfied for all } c_2)$$
            Setting $c_1 = 0$ leaves:
            $$x = c_2(0, 1, 2, -1)$$
            <strong>Basis for $W_1 \cap W_2$:</strong> $B_\cap = \{(0, 1, 2, -1)\} \implies \dim(W_1 \cap W_2) = 1$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 4: Basis and Dimension of Sum $W_1 + W_2$</div>
            <p>The sum $W_1 + W_2$ is spanned by $B_1 \cup B_2$:
            $$\{(1, 0, 1, 0), (0, 1, 2, -1), (1, -1, 1, 1), (0, 1, 2, -1)\}$$
            Form the matrix with these vectors as rows and reduce to row echelon form:
            $$A = \begin{bmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 2 & -1 \\ 1 & -1 & 1 & 1 \end{bmatrix}$$
            $R_3 \to R_3 - R_1$:
            $$\begin{bmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 2 & -1 \\ 0 & -1 & 0 & 1 \end{bmatrix}$$
            $R_3 \to R_3 + R_2$:
            $$\begin{bmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 2 & -1 \\ 0 & 0 & 2 & 0 \end{bmatrix}$$
            There are 3 non-zero rows in echelon form, so $\text{rank}(A) = 3$.<br>
            <strong>Basis for $W_1 + W_2$:</strong> $\{(1, 0, 1, 0), (0, 1, 2, -1), (0, 0, 2, 0)\} \implies \dim(W_1 + W_2) = 3$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 5: Dimension Theorem Verification &amp; Direct Sum Evaluation</div>
            <p>1. <strong>Verification of Grassmann's Dimension Formula:</strong>
            $$\dim(W_1 + W_2) = \dim(W_1) + \dim(W_2) - \dim(W_1 \cap W_2)$$
            $$\text{LHS} = 3, \quad \text{RHS} = 2 + 2 - 1 = 3 \quad (\text{Verified!})$$
            2. <strong>Direct Sum Evaluation:</strong><br>
            A vector space $V$ is a direct sum $W_1 \oplus W_2$ iff $W_1 + W_2 = V$ and $W_1 \cap W_2 = \{\mathbf{0}\}$.<br>
            Here:
            • $W_1 \cap W_2 = \text{span}\{(0, 1, 2, -1)\} \neq \{\mathbf{0}\}$ ($\dim(W_1 \cap W_2) = 1 \neq 0$).<br>
            • $\dim(W_1 + W_2) = 3 \neq \dim(\mathbb{R}^4) = 4$, so $W_1 + W_2 \neq \mathbb{R}^4$.<br>
            <strong>Conclusion:</strong> $\mathbb{R}^4$ is <strong>NOT</strong> the direct sum $W_1 \oplus W_2$.</p>
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
                <div class="explain-line-title">Subspaces in R4 with Multiple Constraints</div>
                <div class="explain-line-desc">Let W1 and W2 be subspaces of R4 given by systems of equations. We must determine dim(W1), dim(W2), dim(W1 intersection W2), and prove that W1 + W2 is a direct sum or find dim(W1 + W2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Solution Space and Rank-Nullity</span>
                <div class="explain-line-title">Null Space Dimensions</div>
                <div class="explain-line-desc">For any constraint matrix A, dim(Null(A)) = n - rank(A), where n is the number of variables (n = 4).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Computing Basis and Dimension for W1</span>
                <div class="explain-line-title">Solving Homogeneous System</div>
                <div class="explain-line-desc">Row-reducing the constraint matrix for W1 gives rank r1. Dimension of W1 is 4 - r1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Computing Basis and Dimension for W2</span>
                <div class="explain-line-title">Solving Homogeneous System</div>
                <div class="explain-line-desc">Row-reducing the constraint matrix for W2 gives rank r2. Dimension of W2 is 4 - r2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Computing the Intersection Subspace</span>
                <div class="explain-line-title">Stacking Both Constraint Systems</div>
                <div class="explain-line-desc">Vectors in W1 intersection W2 satisfy both systems of equations. Form the combined matrix [A1; A2] and row-reduce to find rank r_int. Dimension of intersection is 4 - r_int.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Applying the Dimension Formula</span>
                <div class="explain-line-title">Verification Step</div>
                <div class="explain-line-desc">Substitute into the formula dim(W1 + W2) = dim(W1) + dim(W2) - dim(W1 intersection W2). Check whether the sum spans R4.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Basis Vectors and Subspace Classification</div>
                <div class="explain-line-desc">State the basis vectors for each subspace clearly and state whether W1 and W2 form a direct sum.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">W1 basis and dimension derivation: 4 marks; W2 basis and dimension derivation: 4 marks; Intersection computation: 4 marks; Dimension formula application and conclusion: 4 marks.</div>
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
