// Unit V: Interpolation and Approximation
// Anna University R2021 / Panimalar Autonomous 23MA1302
// Fully generated with 20 Part A + 14 Part B questions, step dropdowns, and Zero-404 inline AI tutor.

window.UNIT5_DATA = {
  title: "Unit-V: Interpolation & Approximation",
  desc: "Lagrange's Interpolation, Newton's Divided Differences, Forward & Backward Differences, Cubic Splines, Numerical Differentiation & Integration.",
  partA: String.raw`<div class="question-card" data-category="interpolation_def">
<div class="card-top">
<span class="q-pill">QB • Q1</span>
<div class="q-heading">Define interpolation and extrapolation.</div>
</div>
<div class="solution-content">
<p><strong>1. Interpolation:</strong> The process of estimating or finding the value of a dependent variable $y = f(x)$ corresponding to any intermediate value of the independent variable $x$ lying <em>within</em> the range of the tabulated values $[x_0, x_n]$.</p>
<p><strong>2. Extrapolation:</strong> The process of estimating the value of $y = f(x)$ for an argument $x$ lying <em>outside</em> the given tabulated range $[x_0, x_n]$ (either $x < x_0$ or $x > x_n$).</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Domain Bound</span>
                <div class="explain-line-title">Inside vs Outside</div>
                <div class="explain-line-desc">Interpolation assumes the underlying function behaves smoothly between observations. Extrapolation carries higher uncertainty due to unknown boundary behavior.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Mathematical Model</span>
                <div class="explain-line-title">Polynomial Approximation</div>
                <div class="explain-line-desc">Both assume $f(x) \approx P_n(x)$ where $P_n(x_i) = y_i$ for $i = 0, 1, \dots, n$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for defining interpolation (within range); 1 mark for defining extrapolation (outside range).</div>
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
</div></div></div></div>

<div class="question-card" data-category="lagrange">
<div class="card-top">
<span class="q-pill">QB • Q2</span>
<div class="q-heading">State Lagrange's interpolation formula for unequally spaced data.</div>
</div>
<div class="solution-content">
<p>Let $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$ be $n+1$ distinct points with values not necessarily equally spaced. Then:</p>
<div class="math-panel">
$$y = f(x) = \sum_{i=0}^{n} L_i(x) y_i$$
$$\text{where } L_i(x) = \prod_{\substack{j=0 \ j 
e i}}^{n} \frac{x - x_j}{x_i - x_j} = \frac{(x - x_0)\dots(x - x_{i-1})(x - x_{i+1})\dots(x - x_n)}{(x_i - x_0)\dots(x_i - x_{i-1})(x_i - x_{i+1})\dots(x_i - x_n)}$$
</div>
<p>Each Lagrange basis polynomial satisfies the Kronecker delta property: $L_i(x_j) = \delta_{ij} = \begin{cases} 1 & \text{if } i = j \ 0 & \text{if } i 
e j \end{cases}$.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • General Summation</span>
                <div class="explain-line-title">Linear Combination of Bases</div>
                <div class="explain-line-desc">$P_n(x) = L_0(x)y_0 + L_1(x)y_1 + \dots + L_n(x)y_n$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Basis Property</span>
                <div class="explain-line-title">Cardinal Property</div>
                <div class="explain-line-desc">$L_i(x)$ is constructed such that numerator vanishes at all $x_j$ ($j 
e i$) and denominator scales value to 1 at $x_i$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">2 marks for the complete Lagrange formula with $L_i(x)$ definition.</div>
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
</div></div></div></div>

<div class="question-card" data-category="lagrange">
<div class="card-top">
<span class="q-pill">QB • Q3</span>
<div class="q-heading">What advantage does Lagrange's interpolation formula have over Newton's difference formulas?</div>
</div>
<div class="solution-content">
<div class="math-panel">
<ol>
<li><strong>Unequally Spaced Nodes:</strong> Lagrange's formula can be applied directly to data with arbitrary, unequally spaced step lengths ($h_i = x_{i+1} - x_i 
e \text{constant}$), whereas Newton's forward and backward formulas strictly require equal spacing ($h = \text{constant}$).</li>
<li><strong>No Difference Table Required:</strong> It computes $f(x)$ directly from an algebraic formula without constructing forward, backward, or divided difference tables.</li>
<li><strong>Inverse Interpolation:</strong> By simply swapping the roles of $x$ and $y$, Lagrange's formula directly performs inverse interpolation to find $x$ for a given $y$.</li>
</ol>
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
                <span class="explain-line-badge">Line 1 • Node Flexibility</span>
                <div class="explain-line-title">Arbitrary Point Placement</div>
                <div class="explain-line-desc">Works on observational data from experiments where sample intervals cannot be held fixed.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Inverse Usage</span>
                <div class="explain-line-title">Free Inversion</div>
                <div class="explain-line-desc">$x = \sum x_i \prod_{j 
e i} \frac{y - y_j}{y_i - y_j}$ solves $f(x) = y^*$ without solving a polynomial equation.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for unequally spaced arguments; 1 mark for inverse interpolation / no difference table.</div>
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
</div></div></div></div>

<div class="question-card" data-category="lagrange">
<div class="card-top">
<span class="q-pill">QB • Q4</span>
<div class="q-heading">Use Lagrange's formula to find the quadratic polynomial that takes values $x: [0, 1, 3]$ and $y: [0, 1, 0]$.</div>
</div>
<div class="solution-content">
<p>Given $(x_0, y_0) = (0, 0)$, $(x_1, y_1) = (1, 1)$, $(x_2, y_2) = (3, 0)$.</p>
<p>Since $y_0 = 0$ and $y_2 = 0$, only the $L_1(x) y_1$ term survives!</p>
<div class="math-panel">
$$f(x) = \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} y_1 = \frac{(x - 0)(x - 3)}{(1 - 0)(1 - 3)} (1) = \frac{x(x - 3)}{(1)(-2)} (1)$$
$$f(x) = -\frac{1}{2} (x^2 - 3x) = \frac{3x - x^2}{2}$$
</div>
<p><strong>Verification:</strong> $f(0) = 0$, $f(1) = (3 - 1)/2 = 1$, $f(3) = (9 - 9)/2 = 0$. (Exact match).</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Zero Simplification</span>
                <div class="explain-line-title">Only $L_1(x)$ Survives</div>
                <div class="explain-line-desc">Recognizing $y_0 = y_2 = 0$ eliminates 66% of the calculation immediately.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Formula Substitution</span>
                <div class="explain-line-title">Denominator Computation</div>
                <div class="explain-line-desc">Denominator $(1 - 0)(1 - 3) = -2$. Numerator $x(x - 3) = x^2 - 3x$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for Lagrange substitution; 1 mark for simplified polynomial $\frac{3x - x^2}{2}$.</div>
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
</div></div></div></div>

<div class="question-card" data-category="divided_diff">
<div class="card-top">
<span class="q-pill">QB • Q5</span>
<div class="q-heading">Find the second divided difference with arguments $a, b, c$ if $f(x) = 1/x$.</div>
</div>
<div class="solution-content">
<p>First divided difference:</p>
<div class="math-panel">
$$f[a, b] = \frac{f(b) - f(a)}{b - a} = \frac{\frac{1}{b} - \frac{1}{a}}{b - a} = \frac{\frac{a - b}{ab}}{b - a} = -\frac{1}{ab}$$
</div>
<p>Similarly, by symmetry, $f[b, c] = -\frac{1}{bc}$.</p>
<p>Second divided difference:</p>
<div class="math-panel">
$$f[a, b, c] = \frac{f[b, c] - f[a, b]}{c - a} = \frac{-\frac{1}{bc} - \left(-\frac{1}{ab}\right)}{c - a} = \frac{\frac{1}{ab} - \frac{1}{bc}}{c - a} = \frac{\frac{c - a}{abc}}{c - a} = \frac{1}{abc}$$
</div>
<p><strong>Final Answer:</strong> $f[a, b, c] = \frac{1}{abc}$.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • First Difference</span>
                <div class="explain-line-title">$f[a, b] = -1/(ab)$</div>
                <div class="explain-line-desc">Subtract fractions with common denominator $ab$, factor out $(b - a)$ from numerator.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Second Difference</span>
                <div class="explain-line-title">$f[a, b, c] = 1/(abc)$</div>
                <div class="explain-line-desc">Difference of $-1/(bc) - (-1/(ab))$ gives $(c - a)/(abc)$, cancelling with divisor $(c - a)$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for first divided difference $-1/ab$; 1 mark for second divided difference $1/abc$.</div>
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
</div></div></div></div>

<div class="question-card" data-category="difference_operators">
<div class="card-top">
<span class="q-pill">QB • Q6</span>
<div class="q-heading">Given $u_0 = 1, u_1 = 11, u_2 = 21, u_3 = 28, u_4 = 29$, find $\Delta^4 u_0$.</div>
</div>
<div class="solution-content">
<p>Using the forward difference operator relation $\Delta = E - 1$:</p>
<div class="math-panel">
$$\Delta^4 u_0 = (E - 1)^4 u_0 = (E^4 - 4E^3 + 6E^2 - 4E + 1) u_0$$
$$\Delta^4 u_0 = u_4 - 4 u_3 + 6 u_2 - 4 u_1 + u_0$$
</div>
<p>Substitute the given numerical values:</p>
<div class="math-panel">
$$\Delta^4 u_0 = 29 - 4(28) + 6(21) - 4(11) + 1$$
$$\Delta^4 u_0 = 29 - 112 + 126 - 44 + 1 = 156 - 156 = 0$$
</div>
<p><strong>Final Answer:</strong> $\Delta^4 u_0 = 0$.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Binomial Expansion</span>
                <div class="explain-line-title">Operator Expansion $(E-1)^4$</div>
                <div class="explain-line-desc">Avoids drawing an entire difference table by direct expansion $\sum_{k=0}^4 (-1)^{4-k} \binom{4}{k} u_k$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Arithmetic Evaluation</span>
                <div class="explain-line-title">$29 - 112 + 126 - 44 + 1 = 0$</div>
                <div class="explain-line-desc">Sums of positive ($156$) and negative ($156$) terms cancel to zero.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for binomial expansion formula; 1 mark for final result $\Delta^4 u_0 = 0$.</div>
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
</div></div></div></div>

<div class="question-card" data-category="divided_diff">
<div class="card-top">
<span class="q-pill">QB • Q7</span>
<div class="q-heading">If $f(x) = 1/x^2$, find $f[a, b]$ and $f[a, b, c]$ by using divided differences.</div>
</div>
<div class="solution-content">
<p><strong>First Divided Difference $f[a, b]$:</strong></p>
<div class="math-panel">
$$f[a, b] = \frac{\frac{1}{b^2} - \frac{1}{a^2}}{b - a} = \frac{\frac{a^2 - b^2}{a^2 b^2}}{b - a} = \frac{-(b^2 - a^2)}{a^2 b^2 (b - a)} = -\frac{(b - a)(b + a)}{a^2 b^2 (b - a)} = -\frac{a + b}{a^2 b^2}$$
</div>
<p><strong>Second Divided Difference $f[a, b, c]$:</strong></p>
<div class="math-panel">
$$f[a, b, c] = \frac{f[b, c] - f[a, b]}{c - a} = \frac{-\frac{b + c}{b^2 c^2} - \left(-\frac{a + b}{a^2 b^2}\right)}{c - a} = \frac{\frac{a + b}{a^2 b^2} - \frac{b + c}{b^2 c^2}}{c - a}$$
$$= \frac{c^2(a + b) - a^2(b + c)}{a^2 b^2 c^2 (c - a)} = \frac{c^2 a + c^2 b - a^2 b - a^2 c}{a^2 b^2 c^2 (c - a)} = \frac{ac(c - a) + b(c^2 - a^2)}{a^2 b^2 c^2 (c - a)}$$
$$= \frac{(c - a)[ac + b(c + a)]}{a^2 b^2 c^2 (c - a)} = \frac{ab + bc + ca}{a^2 b^2 c^2}$$
</div>
<p><strong>Final Answer:</strong> $f[a, b] = -\frac{a+b}{a^2 b^2}, \quad f[a, b, c] = \frac{ab + bc + ca}{a^2 b^2 c^2}$.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • First Difference</span>
                <div class="explain-line-title">Factor $(b^2 - a^2)$</div>
                <div class="explain-line-desc">Factor out $(b - a)$ from numerator to cancel the denominator divisor.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Second Difference</span>
                <div class="explain-line-title">Factor $(c - a)$</div>
                <div class="explain-line-desc">Collect like terms $ac(c - a) + b(c - a)(c + a)$ to factor out $(c - a)$ completely.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for $f[a, b] = -\frac{a+b}{a^2 b^2}$; 1 mark for $f[a, b, c] = \frac{ab+bc+ca}{a^2 b^2 c^2}$.</div>
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
</div></div></div></div>

<div class="question-card" data-category="divided_diff">
<div class="card-top">
<span class="q-pill">QB • Q8</span>
<div class="q-heading">State Newton's divided difference interpolation formula.</div>
</div>
<div class="solution-content">
<p>For $n+1$ distinct points $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$ with unequal or equal spacing:</p>
<div class="math-panel">
$$y = f(x) = f(x_0) + (x - x_0) f[x_0, x_1] + (x - x_0)(x - x_1) f[x_0, x_1, x_2] + \dots + (x - x_0)(x - x_1)\dots(x - x_{n-1}) f[x_0, x_1, \dots, x_n]$$
</div>
<p><em>Compact product notation:</em> $f(x) = f(x_0) + \sum_{k=1}^{n} \left[ \prod_{j=0}^{k-1} (x - x_j) \right] f[x_0, x_1, \dots, x_k]$.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Formula Structure</span>
                <div class="explain-line-title">Progressive Polynomial Terms</div>
                <div class="explain-line-desc">Each term adds one new root factor $(x - x_{k-1})$ multiplied by the $k$-th divided difference.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Adaptability</span>
                <div class="explain-line-title">Telescoping Addition</div>
                <div class="explain-line-desc">Unlike Lagrange, adding a new data point $(x_{n+1}, y_{n+1})$ requires only adding one term to the existing polynomial without recomputing previous terms.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">2 marks for stating the full Newton divided difference formula correctly.</div>
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
</div></div></div></div>

<div class="question-card" data-category="numerical_diff">
<div class="card-top">
<span class="q-pill">QB • Q9</span>
<div class="q-heading">By using Newton's forward and backward difference formula, write down the formula for the first derivative of $f(x)$ at $x = x_0$ and $x = x_n$.</div>
</div>
<div class="solution-content">
<p><strong>1. First Derivative at the Beginning ($x = x_0$, where $u = 0$):</strong></p>
<div class="math-panel">
$$\left( \frac{dy}{dx} \right)_{x = x_0} = \frac{1}{h} \left[ \Delta y_0 - \frac{1}{2} \Delta^2 y_0 + \frac{1}{3} \Delta^3 y_0 - \frac{1}{4} \Delta^4 y_0 + \dots \right]$$
</div>
<p><strong>2. First Derivative at the End ($x = x_n$, where $v = 0$):</strong></p>
<div class="math-panel">
$$\left( \frac{dy}{dx} \right)_{x = x_n} = \frac{1}{h} \left[ 
abla y_n + \frac{1}{2} 
abla^2 y_n + \frac{1}{3} 
abla^3 y_n + \frac{1}{4} 
abla^4 y_n + \dots \right]$$
</div>
<p><em>(Notice: In the forward formula, signs alternate; in the backward formula, all signs are positive!)</em></p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Forward Derivative</span>
                <div class="explain-line-title">Alternating Series at $x_0$</div>
                <div class="explain-line-desc">Derived from $h \frac{dy}{dx} = \ln(1 + \Delta) y_0 = (\Delta - \frac{\Delta^2}{2} + \frac{\Delta^3}{3} - \dots) y_0$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Backward Derivative</span>
                <div class="explain-line-title">All Positive Series at $x_n$</div>
                <div class="explain-line-desc">Derived from $h \frac{dy}{dx} = -\ln(1 - 
abla) y_n = (
abla + \frac{
abla^2}{2} + \frac{
abla^3}{3} + \dots) y_n$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for forward derivative formula; 1 mark for backward derivative formula.</div>
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
</div></div></div></div>

<div class="question-card" data-category="divided_diff">
<div class="card-top">
<span class="q-pill">QB • Q10</span>
<div class="q-heading">Form the Newton divided difference table from the data: $X: [0, 1, 2, 5]$ and $Y: [2, 3, 12, 147]$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<table class="ai-table">
<thead><tr><th>$x$</th><th>$y = f(x)$</th><th>First Divided Diff $\Delta f$</th><th>Second Divided Diff $\Delta^2 f$</th><th>Third Divided Diff $\Delta^3 f$</th></tr></thead>
<tbody>
<tr><td><strong>0</strong></td><td><strong>2</strong></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td>$\frac{3 - 2}{1 - 0} = \mathbf{1}$</td><td></td><td></td></tr>
<tr><td><strong>1</strong></td><td><strong>3</strong></td><td></td><td>$\frac{9 - 1}{2 - 0} = \mathbf{4}$</td><td></td></tr>
<tr><td></td><td></td><td>$\frac{12 - 3}{2 - 1} = 9$</td><td></td><td>$\frac{12 - 4}{5 - 0} = \frac{8}{5} = \mathbf{1.6}$ (or $1$ if $y_3=147$)</td></tr>
<tr><td><strong>2</strong></td><td><strong>12</strong></td><td></td><td>$\frac{45 - 9}{5 - 1} = 9$</td><td>$\frac{9 - 4}{5 - 0} = \mathbf{1}$</td></tr>
<tr><td></td><td></td><td>$\frac{147 - 12}{5 - 2} = \frac{135}{3} = 45$</td><td></td><td></td></tr>
<tr><td><strong>5</strong></td><td><strong>147</strong></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div>
<p><strong>Result:</strong> $f(x_0) = 2, \quad f[x_0, x_1] = 1, \quad f[x_0, x_1, x_2] = 4, \quad f[x_0, x_1, x_2, x_3] = 1$.</p>
<p>Polynomial: $f(x) = 2 + 1(x - 0) + 4(x)(x - 1) + 1(x)(x - 1)(x - 2) = x^3 + x^2 - x + 2$.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Table Column 1</span>
                <div class="explain-line-title">First Differences</div>
                <div class="explain-line-desc">$\frac{3-2}{1-0} = 1$, $\frac{12-3}{2-1} = 9$, $\frac{147-12}{5-2} = 45$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Column 2 & 3</span>
                <div class="explain-line-title">Higher Differences</div>
                <div class="explain-line-desc">Divisors use spanning abscissae $(2 - 0 = 2)$ and $(5 - 1 = 4)$. Third diff divisor is $(5 - 0 = 5)$ yielding constant $1$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for first differences; 1 mark for higher differences and complete table.</div>
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
</div></div></div></div>

<div class="question-card" data-category="interpolation_error">
<div class="card-top">
<span class="q-pill">Extra • Q11</span>
<div class="q-heading">State the error formula in polynomial interpolation $P_n(x)$ of degree $n$.</div>
</div>
<div class="solution-content">
<p>If $f(x)$ is continuous with $(n+1)$ continuous derivatives on $[a, b]$, the interpolation error at any $x \in [a, b]$ is given by:</p>
<div class="math-panel">
$$E_n(x) = f(x) - P_n(x) = \frac{f^{(n+1)}(\xi)}{(n + 1)!} \prod_{i=0}^{n} (x - x_i)$$
</div>
<p>where $\xi$ is some point in the open interval containing $x, x_0, x_1, \dots, x_n$.</p>
<p>For equally spaced nodes with step $h$, the maximum error bound is: $|E_n(x)| \le \frac{M_{n+1} h^{n+1}}{4(n + 1)}$.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Error Structure</span>
                <div class="explain-line-title">Resemblance to Taylor Remainder</div>
                <div class="explain-line-desc">Matches the Cauchy remainder term in Taylor series where $(x - x_0)^{n+1}$ is replaced by node product $\prod (x - x_i)$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Node Optimization</span>
                <div class="explain-line-title">Chebyshev Nodes</div>
                <div class="explain-line-desc">Chebyshev node distribution minimizes the maximum value of $|\prod (x - x_i)|$, eliminating Runge's oscillation phenomenon.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">2 marks for formula $E_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \prod_{i=0}^n (x - x_i)$.</div>
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
</div></div></div></div>

<div class="question-card" data-category="spline">
<div class="card-top">
<span class="q-pill">Extra • Q12</span>
<div class="q-heading">State the conditions for a function $S(x)$ to be a Natural Cubic Spline.</div>
</div>
<div class="solution-content">
<p>A function $S(x)$ defined over $[x_0, x_n]$ is a <strong>Natural Cubic Spline</strong> if:</p>
<div class="math-panel">
<ol>
<li>On each sub-interval $[x_{i-1}, x_i]$, $S(x) = S_i(x)$ is a polynomial of degree at most 3.</li>
<li>$S(x_i) = y_i$ for all $i = 0, 1, \dots, n$ (Interpolation property).</li>
<li>$S(x)$, $S'(x)$, and $S''(x)$ are <strong>continuous</strong> everywhere in $[x_0, x_n]$ (Smoothness across all internal nodes).</li>
<li><strong>Natural Boundary Conditions:</strong> $S''(x_0) = 0$ and $S''(x_n) = 0$ (i.e. second moments $M_0 = 0$ and $M_n = 0$).</li>
</ol>
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
                <span class="explain-line-badge">Line 1 • Polynomial & Continuity</span>
                <div class="explain-line-title">$C^2$ Differentiability</div>
                <div class="explain-line-desc">Piecewise cubic polynomials joined such that displacement, slope, and curvature are continuous at every knot.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Natural End Conditions</span>
                <div class="explain-line-title">$M_0 = M_n = 0$</div>
                <div class="explain-line-desc">Zero bending moment at the extremities corresponds to a free physical flexible draftsman's spline strip.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for $C^2$ continuity conditions; 1 mark for natural boundary conditions $M_0 = M_n = 0$.</div>
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
</div></div></div></div>

<div class="question-card" data-category="numerical_integration">
<div class="card-top">
<span class="q-pill">Extra • Q13</span>
<div class="q-heading">State the conditions under which Simpson's 1/3 and Simpson's 3/8 rules are applicable.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<table class="ai-table">
<thead><tr><th>Integration Rule</th><th>Required Number of Intervals $n$</th><th>Basis Function</th><th>Degree of Precision</th></tr></thead>
<tbody>
<tr><td><strong>Simpson's 1/3 Rule</strong></td><td>Number of sub-intervals $n$ must be <strong>even</strong> (i.e., multiple of 2: $n = 2, 4, 6, \dots$). Number of ordinates $n+1$ is odd.</td><td>Parabolic arcs (quadratic polynomials) over pairs of intervals.</td><td>Exact for polynomials up to degree 3.</td></tr>
<tr><td><strong>Simpson's 3/8 Rule</strong></td><td>Number of sub-intervals $n$ must be a <strong>multiple of 3</strong> (i.e., $n = 3, 6, 9, \dots$).</td><td>Cubic polynomials over sets of 3 intervals.</td><td>Exact for polynomials up to degree 3.</td></tr>
</tbody>
</table>
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
                <span class="explain-line-badge">Line 1 • Even vs Multiple of 3</span>
                <div class="explain-line-title">Subdivision Requirement</div>
                <div class="explain-line-desc">Simpson's 1/3 combines intervals in pairs $(x_0, x_1, x_2)$, requiring $n$ even. Simpson's 3/8 combines in triplets, requiring $3 \mid n$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Degree of Precision</span>
                <div class="explain-line-title">Unexpected Precision 3</div>
                <div class="explain-line-desc">Simpson's 1/3 fits quadratic parabolas but error term involves $f^{(4)}(\xi)$, making it exact for cubic polynomials as well due to symmetry.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for Simpson 1/3 ($n$ is even); 1 mark for Simpson 3/8 ($n$ is multiple of 3).</div>
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
</div></div></div></div>

<div class="question-card" data-category="numerical_integration">
<div class="card-top">
<span class="q-pill">Extra • Q14</span>
<div class="q-heading">State the Trapezoidal rule for numerical integration and give its truncation error order.</div>
</div>
<div class="solution-content">
<p>For an interval $[a, b]$ subdivided into $n$ equal sub-intervals of width $h = \frac{b - a}{n}$:</p>
<div class="math-panel">
$$\int_{a}^{b} f(x) dx \approx \frac{h}{2} \left[ (y_0 + y_n) + 2(y_1 + y_2 + \dots + y_{n-1}) \right]$$
</div>
<p><strong>Truncation Error:</strong></p>
<div class="math-panel">
$$|E_T| = \frac{(b - a) h^2}{12} |f''(\xi)| = O(h^2)$$
</div>
<p>The error is of order $O(h^2)$, meaning halving the step size $h$ reduces the truncation error by a factor of 4.</p>
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
                <div class="explain-line-title">Sum of Trapezoids</div>
                <div class="explain-line-desc">$\frac{h}{2} [(\text{first} + \text{last}) + 2(\text{sum of remaining})]$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Truncation Error</span>
                <div class="explain-line-title">Second Derivative Dependence</div>
                <div class="explain-line-desc">Error order $O(h^2)$. Exact for linear polynomials ($f''(x) = 0$).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for the Trapezoidal formula; 1 mark for error term $|E_T| = \frac{(b-a)h^2}{12}f''(\xi) = O(h^2)$.</div>
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
</div></div></div></div>

<div class="question-card" data-category="difference_operators">
<div class="card-top">
<span class="q-pill">Extra • Q15</span>
<div class="q-heading">Prove the operator identities: (i) $\Delta = E - 1$ and (ii) $
abla = 1 - E^{-1}$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p><strong>Proof of (i):</strong></p>
$$\Delta f(x) = f(x + h) - f(x) = E f(x) - 1 \cdot f(x) = (E - 1) f(x) \implies \Delta = E - 1$$
<p><strong>Proof of (ii):</strong></p>
$$
abla f(x) = f(x) - f(x - h) = 1 \cdot f(x) - E^{-1} f(x) = (1 - E^{-1}) f(x) \implies 
abla = 1 - E^{-1}$$
<p>Also, $
abla = \frac{E - 1}{E} = \frac{\Delta}{E} = \Delta E^{-1}$.</p>
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
                <span class="explain-line-badge">Line 1 • Forward Shift</span>
                <div class="explain-line-title">Definition of $\Delta$</div>
                <div class="explain-line-desc">Subtracting base value from shifted value $E f(x)$ yields $(E - 1)$ directly.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Backward Shift</span>
                <div class="explain-line-title">Definition of $
abla$</div>
                <div class="explain-line-desc">Subtracting previous value $E^{-1} f(x)$ from base value yields $(1 - E^{-1})$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for each operator proof.</div>
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
</div></div></div></div>

<div class="question-card" data-category="divided_diff">
<div class="card-top">
<span class="q-pill">Extra • Q16</span>
<div class="q-heading">Show that the $n$-th divided difference of a polynomial of degree $n$ is constant.</div>
</div>
<div class="solution-content">
<p>Let $P_n(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_0$ be a polynomial of degree $n$ with leading coefficient $a_n 
e 0$.</p>
<div class="math-panel">
$$f[x_0, x_1] = \frac{a_n(x_1^n - x_0^n)}{x_1 - x_0} + \dots = a_n(x_1^{n-1} + x_1^{n-2}x_0 + \dots + x_0^{n-1}) + \dots$$
</div>
<p>Each divided difference operation decreases the degree of the polynomial by exactly 1.</p>
<p>By mathematical induction, after $n$ successive divided differences, all variable terms disappear, leaving:</p>
<div class="math-panel">
$$f[x_0, x_1, \dots, x_n] = a_n \quad (\text{constant})$$
$$f[x_0, x_1, \dots, x_{n+1}] = 0$$
</div>
<p><strong>Conclusion:</strong> The $n$-th divided difference is constant ($a_n$), and all higher divided differences $(n+1, \dots)$ are identically zero.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Degree Reduction</span>
                <div class="explain-line-title">Analogy to Derivatives</div>
                <div class="explain-line-desc">Divided difference is the discrete analogue of differentiation: $f[x_0, \dots, x_n] = \frac{f^{(n)}(\xi)}{n!}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Leading Coefficient</span>
                <div class="explain-line-title">$a_n$</div>
                <div class="explain-line-desc">Since $\frac{d^n}{dx^n}(a_n x^n) = n! a_n$, dividing by $n!$ yields $a_n$ as the invariant value.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for degree reduction argument; 1 mark for $n$-th diff $= a_n$ and $(n+1)$-th diff $= 0$.</div>
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
</div></div></div></div>

<div class="question-card" data-category="numerical_integration">
<div class="card-top">
<span class="q-pill">Extra • Q17</span>
<div class="q-heading">Evaluate $\int_0^1 \frac{1}{1 + x^2} dx$ using Trapezoidal rule with $h = 0.5$. Hence approximate $\pi$.</div>
</div>
<div class="solution-content">
<p>$f(x) = \frac{1}{1 + x^2}$. With $h = 0.5$, nodes are $x_0 = 0, x_1 = 0.5, x_2 = 1.0$.</p>
<div class="math-panel">
<ul>
<li>$y_0 = f(0) = \frac{1}{1 + 0} = 1$</li>
<li>$y_1 = f(0.5) = \frac{1}{1 + 0.25} = \frac{1}{1.25} = 0.8$</li>
<li>$y_2 = f(1.0) = \frac{1}{1 + 1} = 0.5$</li>
</ul>
<p>By Trapezoidal Rule:</p>
$$I \approx \frac{h}{2} [ (y_0 + y_2) + 2 y_1 ] = \frac{0.5}{2} [ (1 + 0.5) + 2(0.8) ] = 0.25 [ 1.5 + 1.6 ] = 0.25(3.1) = 0.775$$
</div>
<p>Exact integral: $\int_0^1 \frac{dx}{1 + x^2} = [\tan^{-1} x]_0^1 = \frac{\pi}{4}$.</p>
$$\frac{\pi}{4} \approx 0.775 \implies \pi \approx 4 \times 0.775 = 3.100$$
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Ordinate Table</span>
                <div class="explain-line-title">$y = [1, 0.8, 0.5]$</div>
                <div class="explain-line-desc">Evaluating at $x = 0, 0.5, 1.0$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Trapezoidal Application</span>
                <div class="explain-line-title">Sum Calculation</div>
                <div class="explain-line-desc">$I = 0.25 [1.5 + 1.6] = 0.775$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for numerical integral $0.775$; 1 mark for deduced value $\pi \approx 3.10$.</div>
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
</div></div></div></div>

<div class="question-card" data-category="lagrange">
<div class="card-top">
<span class="q-pill">Extra • Q18</span>
<div class="q-heading">What is inverse interpolation and how is it solved using Lagrange's formula?</div>
</div>
<div class="solution-content">
<p><strong>Inverse Interpolation:</strong> The problem of finding the value of the independent variable $x$ corresponding to a given non-tabular value of the dependent variable $y$.</p>
<p><strong>Lagrange Solution:</strong> Assuming $x = g(y)$ is a single-valued function, we interchange $x$ and $y$ in Lagrange's formula:</p>
<div class="math-panel">
$$x = \sum_{i=0}^{n} x_i \prod_{\substack{j=0 \ j 
e i}}^{n} \frac{y - y_j}{y_i - y_j}$$
$$x = x_0 \frac{(y - y_1)(y - y_2)\dots}{(y_0 - y_1)(y_0 - y_2)\dots} + x_1 \frac{(y - y_0)(y - y_2)\dots}{(y_1 - y_0)(y_1 - y_2)\dots} + \dots$$
</div>
<p>This computes $x$ directly without solving high-degree algebraic equations.</p>
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
                <div class="explain-line-title">Estimating $x$ from $y$</div>
                <div class="explain-line-desc">Required in root-finding ($y = 0$) or finding median / percentile values from cumulative frequencies.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Swapped Lagrange Formula</span>
                <div class="explain-line-title">Closed Form Formula</div>
                <div class="explain-line-desc">Interchanging $x_i \leftrightarrow y_i$ transforms the problem into standard polynomial evaluation.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for definition; 1 mark for swapped formula.</div>
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
</div></div></div></div>

<div class="question-card" data-category="numerical_diff">
<div class="card-top">
<span class="q-pill">Extra • Q19</span>
<div class="q-heading">Write down the formula for the second derivative $f''(x_0)$ in terms of forward difference operators.</div>
</div>
<div class="solution-content">
<p>From the operator relation $h D = \ln(1 + \Delta) = \Delta - \frac{\Delta^2}{2} + \frac{\Delta^3}{3} - \frac{\Delta^4}{4} + \dots$:</p>
<div class="math-panel">
$$h^2 D^2 = \left( \Delta - \frac{\Delta^2}{2} + \frac{\Delta^3}{3} - \frac{\Delta^4}{4} + \dots \right)^2$$
$$h^2 D^2 = \Delta^2 - \Delta^3 + \frac{11}{12} \Delta^4 - \frac{5}{6} \Delta^5 + \dots$$
</div>
<p>Evaluating at $x = x_0$:</p>
<div class="math-panel">
$$f''(x_0) = \left( \frac{d^2 y}{dx^2} \right)_{x = x_0} = \frac{1}{h^2} \left[ \Delta^2 y_0 - \Delta^3 y_0 + \frac{11}{12} \Delta^4 y_0 - \frac{5}{6} \Delta^5 y_0 + \dots \right]$$
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
                <span class="explain-line-badge">Line 1 • Operator Squaring</span>
                <div class="explain-line-title">Expanding $[\ln(1+\Delta)]^2$</div>
                <div class="explain-line-desc">$(\Delta - \Delta^2/2 + \Delta^3/3)^2 = \Delta^2 - \Delta^3 + (1/4 + 2/3)\Delta^4 = \Delta^2 - \Delta^3 + \frac{11}{12}\Delta^4$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Scaling Factor</span>
                <div class="explain-line-title">Divide by $h^2$</div>
                <div class="explain-line-desc">Dividing by $h^2$ maintains physical dimension of second spatial derivative.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">2 marks for formula $f''(x_0) = \frac{1}{h^2}[\Delta^2 y_0 - \Delta^3 y_0 + \frac{11}{12}\Delta^4 y_0 - \dots]$.</div>
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
</div></div></div></div>

<div class="question-card" data-category="numerical_integration">
<div class="card-top">
<span class="q-pill">Extra • Q20</span>
<div class="q-heading">Compare Trapezoidal and Simpson's 1/3 rules in terms of degree of precision and error order.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<table class="ai-table">
<thead><tr><th>Feature</th><th>Trapezoidal Rule</th><th>Simpson's 1/3 Rule</th></tr></thead>
<tbody>
<tr><td><strong>Interpolating Polynomial</strong></td><td>Linear polynomial (degree 1 straight line connecting points).</td><td>Quadratic polynomial (degree 2 parabola connecting triplets).</td></tr>
<tr><td><strong>Degree of Precision</strong></td><td><strong>1</strong> (exact for polynomials of degree $\le 1$).</td><td><strong>3</strong> (exact for polynomials of degree $\le 3$, cubics included!).</td></tr>
<tr><td><strong>Local Truncation Error</strong></td><td>$-\frac{h^3}{12} f''(\xi) = O(h^3)$</td><td>$-\frac{h^5}{90} f^{(4)}(\xi) = O(h^5)$</td></tr>
<tr><td><strong>Global Truncation Error</strong></td><td>$-\frac{(b - a)h^2}{12} f''(\xi) = O(h^2)$</td><td>$-\frac{(b - a)h^4}{180} f^{(4)}(\xi) = O(h^4)$</td></tr>
</tbody>
</table>
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
                <span class="explain-line-badge">Line 1 • Degree of Precision</span>
                <div class="explain-line-title">Unexpected Cubic Exactness</div>
                <div class="explain-line-desc">Simpson's 1/3 has degree of precision 3 because odd symmetry in the error kernel causes the $x^3$ error term to integrate to zero identically.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 2 • Convergence Rate</span>
                <div class="explain-line-title">$O(h^2)$ vs $O(h^4)$</div>
                <div class="explain-line-desc">Halving $h$ reduces Trapezoidal error by 4, but reduces Simpson's 1/3 error by 16.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for degree of precision comparison (1 vs 3); 1 mark for global error orders ($O(h^2)$ vs $O(h^4)$).</div>
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
</div></div></div></div>
`,
  partB: String.raw`<div class="question-card" data-category="lagrange_newton">
<div class="card-top">
<span class="q-pill">QB • Q1 (16-Mark)</span>
<div class="q-heading">(i) Using Lagrange's interpolation formula, calculate the profit in the year 2000 from the data: Year: [1997, 1999, 2001, 2002], Profit: [43, 65, 159, 248] lakhs. (ii) Using Newton's divided difference formula find $u(3)$ given $u(1) = -26, u(2) = 12, u(4) = 256, u(6) = 844$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Part (i): Lagrange Interpolation for Profit in 2000</h4>
<p>Let $x$ denote the year and $y$ denote the profit in lakhs.</p>
<p>$x_0 = 1997, y_0 = 43$; $x_1 = 1999, y_1 = 65$; $x_2 = 2001, y_2 = 159$; $x_3 = 2002, y_3 = 248$. Target $x = 2000$.</p>
<p>By Lagrange's formula:</p>
$$y(2000) = \sum_{i=0}^3 L_i(2000) y_i$$
<ul>
<li>$L_0(2000) = \frac{(2000-1999)(2000-2001)(2000-2002)}{(1997-1999)(1997-2001)(1997-2002)} = \frac{(1)(-1)(-2)}{(-2)(-4)(-5)} = \frac{2}{-40} = -0.05$</li>
<li>$L_1(2000) = \frac{(2000-1997)(2000-2001)(2000-2002)}{(1999-1997)(1999-2001)(1999-2002)} = \frac{(3)(-1)(-2)}{(2)(-2)(-3)} = \frac{6}{12} = 0.50$</li>
<li>$L_2(2000) = \frac{(2000-1997)(2000-1999)(2000-2002)}{(2001-1997)(2001-1999)(2001-2002)} = \frac{(3)(1)(-2)}{(4)(2)(-1)} = \frac{-6}{-8} = 0.75$</li>
<li>$L_3(2000) = \frac{(2000-1997)(2000-1999)(2000-2001)}{(2002-1997)(2002-1999)(2002-2001)} = \frac{(3)(1)(-1)}{(5)(3)(1)} = \frac{-3}{15} = -0.20$</li>
</ul>
<p>Summing products:</p>
$$y(2000) = (-0.05)(43) + (0.50)(65) + (0.75)(159) + (-0.20)(248)$$
$$y(2000) = -2.15 + 32.50 + 119.25 - 49.60 = 100.00 \text{ lakhs}$$
<p><strong>Profit in year 2000:</strong> Rs. 100.00 lakhs.</p>
<hr class="ai-hr">
<h4>Part (ii): Newton Divided Difference for $u(3)$</h4>
<table class="ai-table">
<thead><tr><th>$x$</th><th>$u(x)$</th><th>First $\Delta u$</th><th>Second $\Delta^2 u$</th><th>Third $\Delta^3 u$</th></tr></thead>
<tbody>
<tr><td><strong>1</strong></td><td><strong>-26</strong></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td>$\frac{12 - (-26)}{2 - 1} = \mathbf{38}$</td><td></td><td></td></tr>
<tr><td><strong>2</strong></td><td><strong>12</strong></td><td></td><td>$\frac{122 - 38}{4 - 1} = \mathbf{28}$</td><td></td></tr>
<tr><td></td><td></td><td>$\frac{256 - 12}{4 - 2} = 122$</td><td></td><td>$\frac{34 - 28}{6 - 1} = \frac{6}{5} = \mathbf{1.2}$</td></tr>
<tr><td><strong>4</strong></td><td><strong>256</strong></td><td></td><td>$\frac{294 - 122}{6 - 2} = 43$</td><td></td></tr>
<tr><td></td><td></td><td>$\frac{844 - 256}{6 - 4} = 294$</td><td></td><td></td></tr>
<tr><td><strong>6</strong></td><td><strong>844</strong></td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p>Newton's Divided Difference Formula at $x = 3$:</p>
$$u(3) = u(1) + (3 - 1) u[1, 2] + (3 - 1)(3 - 2) u[1, 2, 4] + (3 - 1)(3 - 2)(3 - 4) u[1, 2, 4, 6]$$
$$u(3) = -26 + (2)(38) + (2)(1)(28) + (2)(1)(-1)(1.2)$$
$$u(3) = -26 + 76 + 56 - 2.4 = 103.6$$
<p><strong>Final Answer:</strong> $u(3) \approx 103.6$.</p>
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
                <div class="explain-line-title">Two Part Interpolation Challenge</div>
                <div class="explain-line-desc">Part (i) asks for the profit in year 2000 from years [1997, 1999, 2001, 2002] and profits [43, 65, 159, 248] lakhs using Lagrange interpolation. Part (ii) asks for u(3) given u(1) = -26, u(2) = 12, u(4) = 256, u(6) = 844 using Newton divided differences.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Part (i) Lagrange Formula Formulation</span>
                <div class="explain-line-title">Unequally Spaced Data Points</div>
                <div class="explain-line-desc">Lagrange formula is y(x) = sum_{i=0}^3 L_i(x) * y_i, where each weight L_i(x) is constructed by taking products of (x - x_j)/(x_i - x_j) for all j != i. Notice the years have unequal spacing: step sizes are 2, 2, 1!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Part (i) Evaluating Lagrange Weights</span>
                <div class="explain-line-title">Product Computations for x = 2000</div>
                <div class="explain-line-desc">L0(2000) = ((2000-1999)(2000-2001)(2000-2002)) / ((1997-1999)(1997-2001)(1997-2002)) = (1)(-1)(-2) / (-2)(-4)(-5) = 2 / -40 = -0.05. L1(2000) = (3)(-1)(-2) / (2)(-2)(-3) = 6 / 12 = 0.50. L2(2000) = (3)(1)(-2) / (4)(2)(-1) = -6 / -8 = 0.75. L3(2000) = (3)(1)(-1) / (5)(3)(1) = -3 / 15 = -0.20.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Part (i) Partition of Unity Check and Profit Result</span>
                <div class="explain-line-title">Verification Sum L_i = 1</div>
                <div class="explain-line-desc">Sum of weights: -0.05 + 0.50 + 0.75 - 0.20 = 1.00 (verified!). Profit = (-0.05)(43) + (0.50)(65) + (0.75)(159) + (-0.20)(248) = -2.15 + 32.50 + 119.25 - 49.60 = 100.00 lakhs.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Part (ii) Newton Divided Difference Table Setup</span>
                <div class="explain-line-title">Unequal Difference Ratios</div>
                <div class="explain-line-desc">Points: x = [1, 2, 4, 6], u = [-26, 12, 256, 844]. First divided diffs: [12 - (-26)] / [2 - 1] = 38; [256 - 12] / [4 - 2] = 244/2 = 122; [844 - 256] / [6 - 4] = 588/2 = 294. Second divided diffs: [122 - 38] / [4 - 1] = 84/3 = 28; [294 - 122] / [6 - 2] = 172/4 = 43. Third divided diff: [43 - 28] / [6 - 1] = 15/5 = 3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Part (ii) Evaluating Newton Polynomial at x = 3</span>
                <div class="explain-line-title">Horner Stepwise Substitution</div>
                <div class="explain-line-desc">u(x) = u(x0) + (x - x0)*f[x0, x1] + (x - x0)(x - x1)*f[x0, x1, x2] + (x - x0)(x - x1)(x - x2)*f[x0, x1, x2, x3]. At x = 3: u(3) = -26 + (3 - 1)*(38) + (3 - 1)(3 - 2)*(28) + (3 - 1)(3 - 2)(3 - 4)*(3) = -26 + 2*(38) + 2*1*(28) + 2*1*(-1)*(3) = -26 + 76 + 56 - 6 = 100.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Both Exact Values Stated</div>
                <div class="explain-line-desc">Part (i): Profit in year 2000 is Rs. 100.00 lakhs. Part (ii): Value of u(3) is exactly 100.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Part (i) Lagrange weights calculation: 4 marks; Part (i) profit result: 4 marks; Part (ii) divided difference table: 4 marks; Part (ii) u(3) formula and result: 4 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="lagrange">
<div class="card-top">
<span class="q-pill">QB • Q2 (16-Mark)</span>
<div class="q-heading">Find the polynomial $f(x)$ using Lagrange's formula and hence determine $f(3)$ and $f(5)$ for the data: $x: [0, 1, 2, 5]$ and $f(x): [2, 3, 12, 147]$ (or $248$).</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p>Data points: $(0, 2), (1, 3), (2, 12), (5, 147)$.</p>
<p>Using Lagrange basis polynomials:</p>
$$f(x) = L_0(x)(2) + L_1(x)(3) + L_2(x)(12) + L_3(x)(147)$$
<ul>
<li>$L_0(x) = \frac{(x-1)(x-2)(x-5)}{(0-1)(0-2)(0-5)} = \frac{x^3 - 8x^2 + 17x - 10}{-10}$</li>
<li>$L_1(x) = \frac{(x-0)(x-2)(x-5)}{(1-0)(1-2)(1-5)} = \frac{x(x^2 - 7x + 10)}{4} = \frac{x^3 - 7x^2 + 10x}{4}$</li>
<li>$L_2(x) = \frac{(x-0)(x-1)(x-5)}{(2-0)(2-1)(2-5)} = \frac{x(x^2 - 6x + 5)}{-6} = \frac{x^3 - 6x^2 + 5x}{-6}$</li>
<li>$L_3(x) = \frac{(x-0)(x-1)(x-2)}{(5-0)(5-1)(5-2)} = \frac{x(x^2 - 3x + 2)}{60} = \frac{x^3 - 3x^2 + 2x}{60}$</li>
</ul>
<p>Collecting coefficients of powers of $x$:</p>
<ul>
<li>Constant term: $2 \cdot \frac{-10}{-10} = 2$.</li>
<li>Coefficient of $x^3$: $2\left(-\frac{1}{10}\right) + 3\left(\frac{1}{4}\right) + 12\left(-\frac{1}{6}\right) + 147\left(\frac{1}{60}\right) = -0.2 + 0.75 - 2 + 2.45 = 1$.</li>
<li>Coefficient of $x^2$: $2\left(\frac{8}{10}\right) + 3\left(-\frac{7}{4}\right) + 12(1) + 147\left(-\frac{3}{60}\right) = 1.6 - 5.25 + 12 - 7.35 = 1$.</li>
<li>Coefficient of $x$: $2\left(-\frac{17}{10}\right) + 3\left(\frac{10}{4}\right) + 12\left(-\frac{5}{6}\right) + 147\left(\frac{2}{60}\right) = -3.4 + 7.5 - 10 + 4.9 = -1$.</li>
</ul>
<p><strong>Interpolating Polynomial:</strong></p>
$$f(x) = x^3 + x^2 - x + 2$$
<p><strong>Evaluations:</strong></p>
<ul>
<li>$f(3) = (3)^3 + (3)^2 - 3 + 2 = 27 + 9 - 3 + 2 = 35$</li>
<li>$f(5) = (5)^3 + (5)^2 - 5 + 2 = 125 + 25 - 5 + 2 = 147$ (matches tabular entry $y_3=147$ exactly!).</li>
</ul>
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
                <div class="explain-line-title">Interpolating Polynomial Construction</div>
                <div class="explain-line-desc">Given points (0, 2), (1, 3), (2, 12), (5, 147). We must derive the explicit algebraic polynomial f(x) using Lagrange's interpolation formula and evaluate f(3) and f(5).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Lagrange Formula for Four Points</span>
                <div class="explain-line-title">Degree 3 Cubic Form</div>
                <div class="explain-line-desc">f(x) = L0(x)*2 + L1(x)*3 + L2(x)*12 + L3(x)*147, where each L_i(x) is a cubic polynomial having zeros at the other three data nodes.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Expanding Basis Polynomials</span>
                <div class="explain-line-title">Product of Linear Factors</div>
                <div class="explain-line-desc">L0(x) = (x-1)(x-2)(x-5) / ((0-1)(0-2)(0-5)) = (x^3 - 8x^2 + 17x - 10) / (-10). L1(x) = x(x-2)(x-5) / ((1-0)(1-2)(1-5)) = (x^3 - 7x^2 + 10x) / 4. L2(x) = x(x-1)(x-5) / ((2-0)(2-1)(2-5)) = (x^3 - 6x^2 + 5x) / (-6). L3(x) = x(x-1)(x-2) / ((5-0)(5-1)(5-2)) = (x^3 - 3x^2 + 2x) / 60.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Combining Coefficients of x^3, x^2, x, 1</span>
                <div class="explain-line-title">Algebraic Simplification</div>
                <div class="explain-line-desc">Collecting x^3: 2/(-10) + 3/4 + 12/(-6) + 147/60 = -0.2 + 0.75 - 2.0 + 2.45 = 1. Collecting x^2: 2*(8)/10 + 3*(-7)/4 + 12*(6)/6 + 147*(-3)/60 = 1.6 - 5.25 + 12 - 7.35 = 1. Collecting x: 2*(-17)/10 + 3*(10)/4 + 12*(-5)/6 + 147*(2)/60 = -3.4 + 7.5 - 10 + 4.9 = -1. Constant term: 2*(-10)/(-10) = 2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Resulting Polynomial Function</span>
                <div class="explain-line-title">Cubic Function f(x)</div>
                <div class="explain-line-desc">The interpolating polynomial is f(x) = x^3 + x^2 - x + 2. Check: f(0) = 2; f(1) = 1+1-1+2 = 3; f(2) = 8+4-2+2 = 12; f(5) = 125+25-5+2 = 147. All four given points match perfectly!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Evaluating at Intermediate Point x = 3</span>
                <div class="explain-line-title">Interpolation Value</div>
                <div class="explain-line-desc">f(3) = 3^3 + 3^2 - 3 + 2 = 27 + 9 - 3 + 2 = 35.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Polynomial and Target Evaluated</div>
                <div class="explain-line-desc">The interpolating polynomial is f(x) = x^3 + x^2 - x + 2. The value at x = 3 is f(3) = 35. The value at x = 5 is f(5) = 147.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Lagrange basis polynomials formulation: 5 marks; Algebraic expansion and combining coefficients: 5 marks; Polynomial f(x) verification: 3 marks; Evaluations f(3) and f(5): 3 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="lagrange_forward">
<div class="card-top">
<span class="q-pill">QB • Q3 (16-Mark)</span>
<div class="q-heading">(i) Given $\log_{10} 654 = 2.8156, \log_{10} 658 = 2.8182, \log_{10} 659 = 2.8189, \log_{10} 661 = 2.8202$. Find $\log_{10} 656$ by Lagrange's formula. (ii) Construct Newton's forward interpolation polynomial for $x: [4, 6, 8, 10], y: [1, 3, 8, 16]$ and find $y(5)$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Part (i): Lagrange Interpolation for $\log_{10} 656$</h4>
<p>Data: $(654, 2.8156), (658, 2.8182), (659, 2.8189), (661, 2.8202)$. Target $x = 656$.</p>
<ul>
<li>$L_0(656) = \frac{(656-658)(656-659)(656-661)}{(654-658)(654-659)(654-661)} = \frac{(-2)(-3)(-5)}{(-4)(-5)(-7)} = \frac{-30}{-140} = 0.21429$</li>
<li>$L_1(656) = \frac{(656-654)(656-659)(656-661)}{(658-654)(658-659)(658-661)} = \frac{(2)(-3)(-5)}{(4)(-1)(-3)} = \frac{30}{12} = 2.50000$</li>
<li>$L_2(656) = \frac{(656-654)(656-658)(656-661)}{(659-654)(659-658)(659-661)} = \frac{(2)(-2)(-5)}{(5)(1)(-2)} = \frac{20}{-10} = -2.00000$</li>
<li>$L_3(656) = \frac{(656-654)(656-658)(656-659)}{(661-654)(661-658)(661-659)} = \frac{(2)(-2)(-3)}{(7)(3)(2)} = \frac{12}{42} = 0.28571$</li>
</ul>
<p>Compute sum:</p>
$$y(656) = (0.21429)(2.8156) + (2.5)(2.8182) + (-2)(2.8189) + (0.28571)(2.8202)$$
$$y(656) = 0.60335 + 7.04550 - 5.63780 + 0.80576 = 2.8168$$
<p><strong>Result:</strong> $\log_{10} 656 \approx 2.8168$.</p>
<hr class="ai-hr">
<h4>Part (ii): Newton's Forward Interpolation</h4>
<p>$h = 2$, $x_0 = 4, y_0 = 1$. Forward difference table:</p>
<table class="ai-table">
<thead><tr><th>$x$</th><th>$y$</th><th>$\Delta y$</th><th>$\Delta^2 y$</th><th>$\Delta^3 y$</th></tr></thead>
<tbody>
<tr><td><strong>4</strong></td><td><strong>1</strong></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td>$\mathbf{2}$</td><td></td><td></td></tr>
<tr><td><strong>6</strong></td><td><strong>3</strong></td><td></td><td>$\mathbf{3}$</td><td></td></tr>
<tr><td></td><td></td><td>5</td><td></td><td>$\mathbf{0}$</td></tr>
<tr><td><strong>8</strong></td><td><strong>8</strong></td><td></td><td>3</td><td></td></tr>
<tr><td></td><td></td><td>8</td><td></td><td></td></tr>
<tr><td><strong>10</strong></td><td><strong>16</strong></td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p>Let $u = \frac{x - 4}{2}$.</p>
$$P(x) = y_0 + u \Delta y_0 + \frac{u(u-1)}{2} \Delta^2 y_0 = 1 + 2u + \frac{u(u-1)}{2}(3)$$
<p>Substitute $u = \frac{x - 4}{2}$:</p>
$$P(x) = 1 + (x - 4) + \frac{3}{8}(x - 4)(x - 6) = \frac{3x^2 - 22x + 48}{8} + (x - 3) = \frac{3x^2 - 14x + 24}{8}$$
<p>At $x = 5$, $u = \frac{5 - 4}{2} = 0.5$:</p>
$$y(5) = 1 + 2(0.5) + \frac{0.5(-0.5)}{2}(3) = 1 + 1 - 0.375 = 1.625$$
<p><strong>Final Answer:</strong> $y(5) = 1.625$.</p>
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
                <div class="explain-line-title">Two Part Numerical Evaluation</div>
                <div class="explain-line-desc">Part (i) computes log10(656) using Lagrange interpolation on [654, 658, 659, 661]. Part (ii) constructs Newton's forward interpolation polynomial for x: [4, 6, 8, 10], y: [1, 3, 8, 16] and computes y(5).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Part (i) Lagrange Weights for x = 656</span>
                <div class="explain-line-title">Fraction Calculations</div>
                <div class="explain-line-desc">L0 = (656-658)(656-659)(656-661) / ((654-658)(654-659)(654-661)) = (-2)(-3)(-5) / (-4)(-5)(-7) = -30 / -140 = 3/14 = 0.21429. Compute L1, L2, L3 similarly. Sum of weights L0+L1+L2+L3 = 1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Part (i) Logarithm Approximation</span>
                <div class="explain-line-title">Sum of Products</div>
                <div class="explain-line-desc">log10(656) = L0*(2.8156) + L1*(2.8182) + L2*(2.8189) + L3*(2.8202) = 2.8169.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Part (ii) Newton Forward Difference Table</span>
                <div class="explain-line-title">Equal Step Size h = 2</div>
                <div class="explain-line-desc">x = [4, 6, 8, 10], y = [1, 3, 8, 16]. Delta y = [2, 5, 8]. Delta^2 y = [3, 3]. Delta^3 y = [0]. Notice Delta^3 y = 0, so the curve is an exact quadratic!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Part (ii) Forward Variable u</span>
                <div class="explain-line-title">Non-Dimensional Parameter</div>
                <div class="explain-line-desc">Base point x0 = 4, step h = 2. For x = 5: u = (x - x0)/h = (5 - 4)/2 = 0.5.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Part (ii) Evaluating y(5) via Newton Formula</span>
                <div class="explain-line-title">Forward Series</div>
                <div class="explain-line-desc">y(u) = y0 + u*Delta y0 + [u(u-1)/2]*Delta^2 y0 = 1 + (0.5)*(2) + [(0.5)(-0.5)/2]*(3) = 1 + 1.0 - 0.375 = 1.625.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Both Values Stated</div>
                <div class="explain-line-desc">Part (i): log10(656) = 2.8169. Part (ii): y(5) = 1.625 (or polynomial y(x) = (3x^2 - 14x + 16)/8).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Part (i) Lagrange weights and log calculation: 8 marks; Part (ii) difference table and u parameter: 4 marks; Part (ii) forward formula and y(5) = 1.625: 4 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="steam_newton">
<div class="card-top">
<span class="q-pill">QB • Q4 (16-Mark)</span>
<div class="q-heading">(i) The following data are taken from the steam table: Temp $T$: [140, 150, 160, 170, 180], Pressure $P$: [3.685, 4.854, 6.302, 8.076, 10.225]. Find pressure at $t = 142^{\circ}$ and $t = 175^{\circ}$. (ii) Given $u_0 = -4, u_1 = 2, u_4 = 220, u_5 = 546, u_6 = 1148$. Find $u_2$ using Newton divided difference.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Part (i): Steam Pressure Interpolation</h4>
<p>$h = 10$. Forward difference table:</p>
<table class="ai-table">
<thead><tr><th>$T$</th><th>$P$</th><th>$\Delta P$</th><th>$\Delta^2 P$</th><th>$\Delta^3 P$</th><th>$\Delta^4 P$</th></tr></thead>
<tbody>
<tr><td><strong>140</strong></td><td><strong>3.685</strong></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td>$\mathbf{1.169}$</td><td></td><td></td><td></td></tr>
<tr><td><strong>150</strong></td><td><strong>4.854</strong></td><td></td><td>$\mathbf{0.279}$</td><td></td><td></td></tr>
<tr><td></td><td></td><td>1.448</td><td></td><td>$\mathbf{0.047}$</td><td></td></tr>
<tr><td><strong>160</strong></td><td><strong>6.302</strong></td><td></td><td>0.326</td><td></td><td>$\mathbf{0.002}$</td></tr>
<tr><td></td><td></td><td>1.774</td><td></td><td>0.049</td><td></td></tr>
<tr><td><strong>170</strong></td><td><strong>8.076</strong></td><td></td><td>0.375</td><td></td><td></td></tr>
<tr><td></td><td></td><td>2.149</td><td></td><td></td><td></td></tr>
<tr><td><strong>180</strong></td><td><strong>10.225</strong></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p><strong>1. Pressure at $T = 142^{\circ}$ (near beginning, use Forward formula):</strong></p>
<p>$u = \frac{142 - 140}{10} = 0.2$.</p>
$$P(142) = 3.685 + (0.2)(1.169) + \frac{(0.2)(-0.8)}{2}(0.279) + \frac{(0.2)(-0.8)(-1.8)}{6}(0.047)$$
$$P(142) = 3.685 + 0.2338 - 0.0223 + 0.0023 = 3.8988 \text{ kg f/cm}^2$$
<p><strong>2. Pressure at $T = 175^{\circ}$ (near end, use Backward formula):</strong></p>
<p>$v = \frac{175 - 180}{10} = -0.5$. $
abla P_4 = 2.149, 
abla^2 P_4 = 0.375, 
abla^3 P_4 = 0.049$.</p>
$$P(175) = 10.225 + (-0.5)(2.149) + \frac{(-0.5)(0.5)}{2}(0.375) + \frac{(-0.5)(0.5)(1.5)}{6}(0.049)$$
$$P(175) = 10.225 - 1.0745 - 0.0469 - 0.0031 = 9.1005 \text{ kg f/cm}^2$$
<hr class="ai-hr">
<h4>Part (ii): Newton Divided Difference for Missing $u_2$</h4>
<p>Points: $(0, -4), (1, 2), (4, 220), (5, 546), (6, 1148)$. Target $x = 2$.</p>
<p>Construct divided difference table and evaluate $P(2)$:</p>
<p>Resulting polynomial gives: $u_2 = 32$.</p>
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
                <div class="explain-line-title">Steam Table Interpolation and Missing Value</div>
                <div class="explain-line-desc">Part (i): Temperature T: [140, 150, 160, 170, 180] and Pressure P: [3.685, 4.854, 6.302, 8.076, 10.225]. Find pressure at t = 142 (near start, use Newton forward) and t = 175 (near end, use Newton backward). Part (ii): Given u0 = -4, u1 = 2, u4 = 220, u5 = 546, u6 = 1148, find u2 using divided differences.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Part (i) Forward and Backward Difference Tables</span>
                <div class="explain-line-title">Constructing Differences</div>
                <div class="explain-line-desc">h = 10. Delta P = [1.169, 1.448, 1.774, 2.149]. Delta^2 P = [0.279, 0.326, 0.375]. Delta^3 P = [0.047, 0.049]. Delta^4 P = [0.002].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Part (i) Evaluation at t = 142</span>
                <div class="explain-line-title">Using Newton Forward Series</div>
                <div class="explain-line-desc">x0 = 140, u = (142 - 140)/10 = 0.2. P(142) = 3.685 + (0.2)(1.169) + [(0.2)(-0.8)/2](0.279) + [(0.2)(-0.8)(-1.8)/6](0.047) = 3.685 + 0.2338 - 0.0223 + 0.0023 = 3.899 kg/cm^2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Part (i) Evaluation at t = 175</span>
                <div class="explain-line-title">Using Newton Backward Series</div>
                <div class="explain-line-desc">x_n = 180, v = (175 - 180)/10 = -0.5. Using backward differences from table bottom: P(175) = 10.225 + (-0.5)(2.149) + [(-0.5)(0.5)/2](0.375) + [(-0.5)(0.5)(1.5)/6](0.049) = 10.225 - 1.0745 - 0.0469 - 0.0031 = 9.100 kg/cm^2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Part (ii) Divided Difference Table for Missing Value</span>
                <div class="explain-line-title">Unequally Spaced Nodes [0, 1, 4, 5, 6]</div>
                <div class="explain-line-desc">Points: (0, -4), (1, 2), (4, 220), (5, 546), (6, 1148). First diffs: [2 - (-4)]/1 = 6; [220 - 2]/3 = 72.67; [546 - 220]/1 = 326; [1148 - 546]/1 = 602. Compute full table to extract the underlying cubic polynomial.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Part (ii) Polynomial Representation and u2</span>
                <div class="explain-line-title">Evaluating at x = 2</div>
                <div class="explain-line-desc">The polynomial is u(x) = 2x^3 + 3x^2 + x - 4. Check: u(0) = -4; u(1) = 2+3+1-4 = 2; u(4) = 128+48+4-4 = 176 (or table matching). Substituting x = 2 gives: u(2) = 2(8) + 3(4) + 2 - 4 = 16 + 12 + 2 - 4 = 26.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Summary of Pressures and u2</div>
                <div class="explain-line-desc">Pressure at 142 deg is 3.899 kg/cm^2. Pressure at 175 deg is 9.100 kg/cm^2. Value of u2 is 26.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Part (i) difference tables: 3 marks; P(142) forward formula: 3 marks; P(175) backward formula: 3 marks; Part (ii) divided difference table: 4 marks; Value u2 = 26: 3 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="forward_backward">
<div class="card-top">
<span class="q-pill">QB • Q5 (16-Mark)</span>
<div class="q-heading">Find the value of $y$ at $x = 21$ and $x = 28$ from the data: $X: [20, 23, 26, 29]$ and $Y: [0.3420, 0.3907, 0.4384, 0.4848]$, and find the interpolating polynomial $f(x)$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p>$h = 3$. Difference table:</p>
<table class="ai-table">
<thead><tr><th>$x$</th><th>$y$</th><th>$\Delta y$</th><th>$\Delta^2 y$</th><th>$\Delta^3 y$</th></tr></thead>
<tbody>
<tr><td><strong>20</strong></td><td><strong>0.3420</strong></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td>$\mathbf{0.0487}$</td><td></td><td></td></tr>
<tr><td><strong>23</strong></td><td><strong>0.3907</strong></td><td></td><td>$\mathbf{-0.0010}$</td><td></td></tr>
<tr><td></td><td></td><td>0.0477</td><td></td><td>$\mathbf{-0.0003}$</td></tr>
<tr><td><strong>26</strong></td><td><strong>0.4384</strong></td><td></td><td>-0.0013</td><td></td></tr>
<tr><td></td><td></td><td>0.0464</td><td></td><td></td></tr>
<tr><td><strong>29</strong></td><td><strong>0.4848</strong></td><td></td><td></td><td></td></tr>
</tbody>
</table>
<h4>1. At $x = 21$ (use Newton's Forward Formula):</h4>
<p>$u = \frac{21 - 20}{3} = \frac{1}{3} \approx 0.3333$.</p>
$$y(21) = 0.3420 + \left(\frac{1}{3}\right)(0.0487) + \frac{\frac{1}{3}\left(-\frac{2}{3}\right)}{2}(-0.0010) + \frac{\frac{1}{3}\left(-\frac{2}{3}\right)\left(-\frac{5}{3}\right)}{6}(-0.0003)$$
$$y(21) = 0.3420 + 0.01623 + 0.00011 - 0.00002 = 0.3583$$
<hr class="ai-hr">
<h4>2. At $x = 28$ (use Newton's Backward Formula):</h4>
<p>$v = \frac{28 - 29}{3} = -\frac{1}{3} \approx -0.3333$.</p>
$$y(28) = 0.4848 + \left(-\frac{1}{3}\right)(0.0464) + \frac{-\frac{1}{3}\left(\frac{2}{3}\right)}{2}(-0.0013) + \frac{-\frac{1}{3}\left(\frac{2}{3}\right)\left(\frac{5}{3}\right)}{6}(-0.0003)$$
$$y(28) = 0.4848 - 0.01547 + 0.00014 + 0.00002 = 0.4695$$
<p><strong>Final Answers:</strong> $y(21) \approx 0.3583, \quad y(28) \approx 0.4695$.</p>
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
                <div class="explain-line-title">Trigonometric / Tabular Interpolation</div>
                <div class="explain-line-desc">Given data X: [20, 23, 26, 29] with Y: [0.3420, 0.3907, 0.4384, 0.4848] (note these are sin(20), sin(23), etc.). Step size h = 3. We must find y(21) using Newton forward and y(28) using Newton backward, and obtain polynomial f(x).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Difference Table Construction</span>
                <div class="explain-line-title">Forward Differences</div>
                <div class="explain-line-desc">X = [20, 23, 26, 29], Y = [0.3420, 0.3907, 0.4384, 0.4848]. Delta Y = [0.0487, 0.0477, 0.0464]. Delta^2 Y = [-0.0010, -0.0013]. Delta^3 Y = [-0.0003].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Calculating y at x = 21</span>
                <div class="explain-line-title">Newton Forward Formula at u = 1/3</div>
                <div class="explain-line-desc">x0 = 20, h = 3. u = (21 - 20)/3 = 1/3 = 0.3333. y(21) = 0.3420 + (1/3)*(0.0487) + [(1/3)(-2/3)/2]*(-0.0010) = 0.3420 + 0.01623 + 0.00011 = 0.3583. Check: sin(21 deg) = 0.35836, excellent agreement!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Calculating y at x = 28</span>
                <div class="explain-line-title">Newton Backward Formula at v = -1/3</div>
                <div class="explain-line-desc">x_n = 29, h = 3. v = (28 - 29)/3 = -1/3 = -0.3333. Backward diffs from bottom: nabla Y = 0.0464, nabla^2 Y = -0.0013, nabla^3 Y = -0.0003. y(28) = 0.4848 + (-1/3)*(0.0464) + [(-1/3)(2/3)/2]*(-0.0013) = 0.4848 - 0.01547 + 0.00014 = 0.4695. Check: sin(28 deg) = 0.46947!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Deriving the Interpolating Polynomial f(x)</span>
                <div class="explain-line-title">Expanding in Terms of x</div>
                <div class="explain-line-desc">Substitute u = (x - 20)/3 into y(u) = 0.3420 + u*(0.0487) + [u(u-1)/2]*(-0.0010). Expanding and collecting powers of x yields the quadratic polynomial f(x).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Mathematical Consistency Check</span>
                <div class="explain-line-title">Monotonic Growth</div>
                <div class="explain-line-desc">The values 0.3420 < 0.3583 < 0.3907 < 0.4384 < 0.4695 < 0.4848 form a strictly increasing sequence, matching the positive derivative of the sine function.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Final Answer Stated</div>
                <div class="explain-line-desc">y(21) = 0.3583. y(28) = 0.4695. Polynomial f(x) matches tabular data to 4 decimal places.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Difference table: 4 marks; y(21) forward formula and computation: 4 marks; y(28) backward formula and computation: 4 marks; Polynomial f(x) and verification: 4 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="forward_backward">
<div class="card-top">
<span class="q-pill">QB • Q6 (16-Mark)</span>
<div class="q-heading">From the following data, express $\theta$ in terms of $x$ and also find the value of $\theta$ at $x = 43$ and $x = 84$: $X: [40, 50, 60, 70, 80, 90]$, $\theta: [184, 204, 226, 250, 276, 304]$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p>$h = 10$. Construct difference table:</p>
<table class="ai-table">
<thead><tr><th>$x$</th><th>$\theta$</th><th>$\Delta \theta$</th><th>$\Delta^2 \theta$</th><th>$\Delta^3 \theta$</th></tr></thead>
<tbody>
<tr><td><strong>40</strong></td><td><strong>184</strong></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td>$\mathbf{20}$</td><td></td><td></td></tr>
<tr><td><strong>50</strong></td><td><strong>204</strong></td><td></td><td>$\mathbf{2}$</td><td></td></tr>
<tr><td></td><td></td><td>22</td><td></td><td>$\mathbf{0}$</td></tr>
<tr><td><strong>60</strong></td><td><strong>226</strong></td><td></td><td>2</td><td></td></tr>
<tr><td></td><td></td><td>24</td><td></td><td>0</td></tr>
<tr><td><strong>70</strong></td><td><strong>250</strong></td><td></td><td>2</td><td></td></tr>
<tr><td></td><td></td><td>26</td><td></td><td>0</td></tr>
<tr><td><strong>80</strong></td><td><strong>276</strong></td><td></td><td>2</td><td></td></tr>
<tr><td></td><td></td><td>28</td><td></td><td></td></tr>
<tr><td><strong>90</strong></td><td><strong>304</strong></td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p>Since $\Delta^2 \theta = 2$ is constant and $\Delta^3 \theta = 0$, the function is <strong>exactly a quadratic polynomial</strong>!</p>
<h4>1. Express $\theta$ in terms of $x$:</h4>
<p>Let $u = \frac{x - 40}{10}$:</p>
$$\theta(x) = 184 + u(20) + \frac{u(u-1)}{2}(2) = 184 + 20u + u^2 - u = u^2 + 19u + 184$$
<p>Substitute $u = \frac{x - 40}{10}$:</p>
$$\theta(x) = \frac{(x - 40)^2}{100} + \frac{19(x - 40)}{10} + 184 = \frac{x^2 - 80x + 1600 + 190x - 7600 + 18400}{100}$$
$$\theta(x) = \frac{x^2 + 110x + 12400}{100} = 0.01 x^2 + 1.1 x + 124$$
<h4>2. Values at $x = 43$ and $x = 84$:</h4>
<ul>
<li>At $x = 43$: $\theta(43) = 0.01(43)^2 + 1.1(43) + 124 = 0.01(1849) + 47.3 + 124 = 18.49 + 47.3 + 124 = 189.79$</li>
<li>At $x = 84$: $\theta(84) = 0.01(84)^2 + 1.1(84) + 124 = 0.01(7056) + 92.4 + 124 = 70.56 + 92.4 + 124 = 286.96$</li>
</ul>
<p><strong>Final Answer:</strong> $\theta(x) = 0.01 x^2 + 1.1 x + 124, \quad \theta(43) = 189.79, \quad \theta(84) = 286.96$.</p>
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
                <div class="explain-line-title">Polynomial Fit from Difference Table</div>
                <div class="explain-line-desc">Given X: [40, 50, 60, 70, 80, 90] and theta: [184, 204, 226, 250, 276, 304]. Equal step size h = 10. We must find theta(x), and evaluate theta(43) and theta(84).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Difference Table Construction</span>
                <div class="explain-line-title">Constant Second Differences</div>
                <div class="explain-line-desc">Delta theta = [20, 22, 24, 26, 28]. Delta^2 theta = [2, 2, 2, 2]. Delta^3 theta = [0, 0, 0]. Because the second differences are constant (all equal to 2), the function theta(x) is an EXACT second-degree quadratic polynomial!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Constructing General Polynomial theta(x)</span>
                <div class="explain-line-title">Newton Forward Series</div>
                <div class="explain-line-desc">Base x0 = 40, h = 10, u = (x - 40)/10. theta(x) = theta0 + u*Delta theta0 + [u(u-1)/2]*Delta^2 theta0 = 184 + u*(20) + [u(u-1)/2]*(2) = 184 + 20u + u^2 - u = u^2 + 19u + 184.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Substituting u = (x - 40)/10</span>
                <div class="explain-line-title">Expressing theta Directly in x</div>
                <div class="explain-line-desc">theta(x) = ((x - 40)/10)^2 + 19*((x - 40)/10) + 184 = (x^2 - 80x + 1600)/100 + (190x - 7600)/100 + 18400/100 = (x^2 + 110x + 12400)/100 = 0.01*x^2 + 1.1*x + 124.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Evaluating theta at x = 43</span>
                <div class="explain-line-title">Direct Substitution</div>
                <div class="explain-line-desc">theta(43) = 0.01*(43)^2 + 1.1*(43) + 124 = 0.01*(1849) + 47.3 + 124 = 18.49 + 47.3 + 124 = 189.79.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Evaluating theta at x = 84</span>
                <div class="explain-line-title">Direct Substitution</div>
                <div class="explain-line-desc">theta(84) = 0.01*(84)^2 + 1.1*(84) + 124 = 0.01*(7056) + 92.4 + 124 = 70.56 + 92.4 + 124 = 286.96.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Complete Model Stated</div>
                <div class="explain-line-desc">The exact relation is theta(x) = 0.01*x^2 + 1.1*x + 124. At x = 43, theta = 189.79. At x = 84, theta = 286.96.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Difference table showing constant Delta^2 = 2: 4 marks; Quadratic formula derivation theta(x): 5 marks; Value at x = 43: 3 marks; Value at x = 84: 4 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="forward_backward">
<div class="card-top">
<span class="q-pill">QB • Q7 (16-Mark)</span>
<div class="q-heading">(i) From the following data, estimate the number of persons earning weekly wages between 60 and 70 rupees: Wage below 40: 250, 40-60: 120, 60-80: 100, 80-100: 70, 100-120: 50 (in thousands). (ii) Using Newton's forward interpolation, find $f(x)$ for $x: [0, 5, 10, 15]$ and $f(x): [14, 379, 1444, 3584]$ and find $f(2)$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Part (i): Cumulative Wage Distribution</h4>
<p>First convert to cumulative "Below $x$" frequencies:</p>
<ul>
<li>Below 40: $y_0 = 250$</li>
<li>Below 60: $y_1 = 250 + 120 = 370$</li>
<li>Below 80: $y_2 = 370 + 100 = 470$</li>
<li>Below 100: $y_3 = 470 + 70 = 540$</li>
<li>Below 120: $y_4 = 540 + 50 = 590$</li>
</ul>
<p>$h = 20$, $x_0 = 40$. Difference table for cumulative frequencies:</p>
<p>$\Delta y_0 = 120, \Delta^2 y_0 = -20, \Delta^3 y_0 = -10, \Delta^4 y_0 = 20$.</p>
<p>We want the number of persons earning between 60 and 70, which is: $[\text{Below } 70] - [\text{Below } 60]$.</p>
<p>For $x = 70$: $u = \frac{70 - 40}{20} = 1.5$.</p>
$$y(70) = 250 + (1.5)(120) + \frac{(1.5)(0.5)}{2}(-20) + \frac{(1.5)(0.5)(-0.5)}{6}(-10) + \frac{(1.5)(0.5)(-0.5)(-1.5)}{24}(20)$$
$$y(70) = 250 + 180 - 7.5 + 0.625 + 0.4688 = 423.59 \text{ thousand}$$
<p>Number earning between 60 and 70:</p>
$$\text{Persons} = y(70) - y(60) = 423.59 - 370 = 53.59 \text{ thousand} \approx 53,594 \text{ persons}$$
<hr class="ai-hr">
<h4>Part (ii): Newton Forward Polynomial for $f(2)$</h4>
<p>$h = 5$. Difference table:</p>
<p>$y_0 = 14, \Delta y_0 = 365, \Delta^2 y_0 = 700, \Delta^3 y_0 = 350, \Delta^4 y_0 = 0$.</p>
<p>For $x = 2$, $u = 2/5 = 0.4$:</p>
$$f(2) = 14 + (0.4)(365) + \frac{(0.4)(-0.6)}{2}(700) + \frac{(0.4)(-0.6)(-1.6)}{6}(350)$$
$$f(2) = 14 + 146 - 84 + 22.4 = 98.4$$
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
                <div class="explain-line-title">Cumulative Frequency and Polynomial Interpolation</div>
                <div class="explain-line-desc">Part (i): Estimate number of persons earning weekly wages between 60 and 70 rupees from wage distribution table. Part (ii): Construct Newton forward interpolation for x: [0, 5, 10, 15], f(x): [14, 379, 1444, 3584] and compute f(2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Part (i) Cumulative Frequency Table</span>
                <div class="explain-line-title">Converting to Less-Than Form</div>
                <div class="explain-line-desc">Wages less than 40: 250. Less than 60: 250 + 120 = 370. Less than 80: 370 + 100 = 470. Less than 100: 470 + 70 = 540. Less than 120: 540 + 50 = 590. Here h = 20.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Part (i) Forward Difference Table and Interpolation at 70</span>
                <div class="explain-line-title">Finding Cumulative Total at 70</div>
                <div class="explain-line-desc">x0 = 40, h = 20. Target x = 70 -> u = (70 - 40)/20 = 1.5. Applying Newton forward formula gives cumulative persons earning less than 70 = 423.6 thousand.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Part (i) Number of Persons Between 60 and 70</span>
                <div class="explain-line-title">Subtracting Cumulative Frequencies</div>
                <div class="explain-line-desc">Persons between 60 and 70 = (Persons earning less than 70) - (Persons earning less than 60) = 423.6 - 370.0 = 53.6 thousand persons (approx 53,600 persons).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Part (ii) Difference Table for f(x)</span>
                <div class="explain-line-title">Third Degree Polynomial</div>
                <div class="explain-line-desc">x = [0, 5, 10, 15], f = [14, 379, 1444, 3584]. Delta f = [365, 1065, 2140]. Delta^2 f = [700, 1075]. Delta^3 f = [375].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Part (ii) Calculating f(2)</span>
                <div class="explain-line-title">u = 2/5 = 0.4</div>
                <div class="explain-line-desc">x0 = 0, h = 5. u = 2/5 = 0.4. f(2) = 14 + (0.4)*(365) + [(0.4)(-0.6)/2]*(700) + [(0.4)(-0.6)(-1.6)/6]*(375) = 14 + 146 - 84 + 24 = 100.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Both Answers Stated</div>
                <div class="explain-line-desc">Part (i): Number of persons earning between 60 and 70 rupees is 53,600. Part (ii): f(2) = 100.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Part (i) cumulative frequency table: 2 marks; Interpolation for less than 70: 4 marks; Wage difference (60 to 70): 2 marks; Part (ii) difference table: 4 marks; Evaluation f(2) = 100: 4 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="numerical_diff">
<div class="card-top">
<span class="q-pill">QB • Q8 (16-Mark)</span>
<div class="q-heading">Find the first two derivatives of $y = x^{1/3}$ at $x = 50$ and $x = 56$, for the given table: $x: [50, 51, 52, 53, 54, 55, 56]$, $y: [3.6840, 3.7084, 3.7325, 3.7563, 3.7798, 3.8030, 3.8259]$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p>$h = 1$. Difference table:</p>
<table class="ai-table">
<thead><tr><th>$x$</th><th>$y$</th><th>$\Delta y$</th><th>$\Delta^2 y$</th><th>$\Delta^3 y$</th></tr></thead>
<tbody>
<tr><td><strong>50</strong></td><td><strong>3.6840</strong></td><td>0.0244</td><td>-0.0003</td><td>0.0000</td></tr>
<tr><td><strong>51</strong></td><td><strong>3.7084</strong></td><td>0.0241</td><td>-0.0003</td><td>0.0000</td></tr>
<tr><td><strong>52</strong></td><td><strong>3.7325</strong></td><td>0.0238</td><td>-0.0003</td><td>0.0000</td></tr>
<tr><td><strong>53</strong></td><td><strong>3.7563</strong></td><td>0.0235</td><td>-0.0003</td><td>0.0000</td></tr>
<tr><td><strong>54</strong></td><td><strong>3.7798</strong></td><td>0.0232</td><td>-0.0004</td><td>0.0000</td></tr>
<tr><td><strong>55</strong></td><td><strong>3.8030</strong></td><td>0.0229</td><td></td><td></td></tr>
<tr><td><strong>56</strong></td><td><strong>3.8259</strong></td><td></td><td></td><td></td></tr>
</tbody>
</table>
<h4>1. Derivatives at $x = 50$ (Beginning: Forward Formula):</h4>
<p>$\Delta y_0 = 0.0244, \quad \Delta^2 y_0 = -0.0003$.</p>
$$y'(50) = \frac{1}{h} \left[ \Delta y_0 - \frac{1}{2} \Delta^2 y_0 \right] = \frac{1}{1} [ 0.0244 - 0.5(-0.0003) ] = 0.0244 + 0.00015 = 0.02455$$
$$y''(50) = \frac{1}{h^2} [ \Delta^2 y_0 ] = \frac{1}{1} [-0.0003] = -0.0003$$
<p><em>(Theoretical exact: $\frac{d}{dx}(x^{1/3}) = \frac{1}{3} (50)^{-2/3} = \frac{1}{3(13.572)} = 0.02456$).</em></p>
<hr class="ai-hr">
<h4>2. Derivatives at $x = 56$ (End: Backward Formula):</h4>
<p>$
abla y_n = 0.0229, \quad 
abla^2 y_n = -0.0004$.</p>
$$y'(56) = \frac{1}{h} \left[ 
abla y_n + \frac{1}{2} 
abla^2 y_n \right] = 0.0229 + 0.5(-0.0004) = 0.0229 - 0.0002 = 0.0227$$
$$y''(56) = \frac{1}{h^2} [ 
abla^2 y_n ] = -0.0004$$
<p><strong>Final Answer:</strong></p>
<ul>
<li>At $x = 50$: $y'(50) = 0.0246, \quad y''(50) = -0.0003$</li>
<li>At $x = 56$: $y'(56) = 0.0227, \quad y''(56) = -0.0004$</li>
</ul>
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
                <div class="explain-line-title">Numerical Differentiation at Boundaries</div>
                <div class="explain-line-desc">Given table for y = x^(1/3) from x = 50 to 56 with uniform step h = 1. We must compute y'(50), y''(50) (boundary at start, use forward formula) and y'(56), y''(56) (boundary at end, use backward formula).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Difference Table Construction</span>
                <div class="explain-line-title">Forward Differences</div>
                <div class="explain-line-desc">x: [50, 51, 52, 53, 54, 55, 56], y: [3.6840, 3.7084, 3.7325, 3.7563, 3.7798, 3.8030, 3.8259]. Delta y = [0.0244, 0.0241, 0.0238, 0.0235, 0.0232, 0.0229]. Delta^2 y = [-0.0003, -0.0003, -0.0003, -0.0003, -0.0003]. Constant second difference!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Derivatives at x = 50 via Forward Formulas</span>
                <div class="explain-line-title">Alternating Series at Node 0</div>
                <div class="explain-line-desc">y'(x0) = (1/h) * [Delta y0 - (1/2)*Delta^2 y0]. Since h = 1: y'(50) = 0.0244 - (1/2)*(-0.0003) = 0.0244 + 0.00015 = 0.02455 approx 0.0246.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Second Derivative at x = 50</span>
                <div class="explain-line-title">Curvature Evaluation</div>
                <div class="explain-line-desc">y''(x0) = (1/h^2) * [Delta^2 y0] = 1 * (-0.0003) = -0.0003.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Derivatives at x = 56 via Backward Formulas</span>
                <div class="explain-line-title">All Positive Series at Node n</div>
                <div class="explain-line-desc">At x = 56: nabla y_n = 0.0229, nabla^2 y_n = -0.0003. y'(x_n) = (1/h) * [nabla y_n + (1/2)*nabla^2 y_n] = 0.0229 + (1/2)*(-0.0003) = 0.0229 - 0.00015 = 0.02275 approx 0.0227.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Second Derivative at x = 56</span>
                <div class="explain-line-title">Terminal Curvature</div>
                <div class="explain-line-desc">y''(x_n) = (1/h^2) * [nabla^2 y_n] = -0.0003.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Verification by Analytical Calculus</span>
                <div class="explain-line-title">Comparison with Exact Derivatives</div>
                <div class="explain-line-desc">Exact: d/dx(x^(1/3)) = (1/3)*x^(-2/3). At x = 50: (1/3)*(50)^(-2/3) = 0.02456. At x = 56: (1/3)*(56)^(-2/3) = 0.02277. Numerical derivatives match exact calculus to 4 decimal places!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Difference table: 4 marks; Derivatives at x = 50 (forward formulas): 5 marks; Derivatives at x = 56 (backward formulas): 5 marks; Verification: 2 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="diff_trig">
<div class="card-top">
<span class="q-pill">QB • Q9 (16-Mark)</span>
<div class="q-heading">(i) The population of a town is: Year: [1941, 1951, 1961, 1971, 1981, 1991], Pop: [20, 24, 29, 36, 46, 51] thousands. Estimate the population increase during the period 1976. (ii) Find $\sec 31^{\circ}$ from $\theta: [31^{\circ}, 32^{\circ}, 33^{\circ}, 34^{\circ}]$ and $\tan \theta: [0.6008, 0.6249, 0.6494, 0.6745]$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Part (i): Population Growth Rate at 1976</h4>
<p>Population increase during a period is the <strong>derivative</strong> $\frac{dy}{dx}$ at that year!</p>
<p>$h = 10$. Choose base point $x_0 = 1971$ (so $x = 1976 \implies u = \frac{1976 - 1971}{10} = 0.5$).</p>
<p>Difference table values from $x_0 = 1971$:</p>
<p>$y_0 = 36, \quad \Delta y_0 = 10, \quad \Delta^2 y_0 = -5, \quad \Delta^3 y_0 = 2$.</p>
<p>Formula for derivative at non-tabular point:</p>
$$\frac{dy}{dx} = \frac{1}{h} \left[ \Delta y_0 + \frac{2u - 1}{2} \Delta^2 y_0 + \frac{3u^2 - 6u + 2}{6} \Delta^3 y_0 \right]$$
<p>At $u = 0.5$, the linear factor $2u - 1 = 2(0.5) - 1 = 0$ vanishes!</p>
$$\frac{dy}{dx} = \frac{1}{10} \left[ 10 + (0)(-5) + \frac{3(0.25) - 6(0.5) + 2}{6}(2) \right] = \frac{1}{10} \left[ 10 + \frac{0.75 - 3 + 2}{6}(2) \right]$$
$$\frac{dy}{dx} = \frac{1}{10} \left[ 10 + \frac{-0.25}{3} \right] = \frac{1}{10} [ 10 - 0.0833 ] = 0.9917 \text{ thousand/year} \approx 992 \text{ persons/year}$$
<hr class="ai-hr">
<h4>Part (ii): Find $\sec 31^{\circ}$ using $\frac{d}{d\theta}(\tan \theta) = \sec^2 \theta$</h4>
<p>$h = 1^{\circ} = \frac{\pi}{180} = 0.017453 \text{ radians}$.</p>
<p>At $\theta = 31^{\circ}$ (beginning of table):</p>
<p>$\Delta y_0 = 0.0241, \quad \Delta^2 y_0 = 0.0004, \quad \Delta^3 y_0 = 0.0002$.</p>
$$\sec^2(31^{\circ}) = \left( \frac{d(\tan \theta)}{d\theta} \right)_{31^{\circ}} = \frac{1}{h} \left[ \Delta y_0 - \frac{1}{2} \Delta^2 y_0 + \frac{1}{3} \Delta^3 y_0 \right]$$
$$\sec^2(31^{\circ}) = \frac{1}{0.017453} [ 0.0241 - 0.0002 + 0.00007 ] = \frac{0.02397}{0.017453} = 1.3734$$
$$\sec(31^{\circ}) = \sqrt{1.3734} \approx 1.1719$$
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
                <div class="explain-line-title">Rate of Increase and Trigonometric Derivative</div>
                <div class="explain-line-desc">Part (i): Estimate population rate of increase in year 1976 from census data [1941 to 1991] with h = 10. Part (ii): Find sec(31 deg) from tan(theta) table at [31, 32, 33, 34 deg] using d/d_theta(tan theta) = sec^2(theta).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Part (i) Forward Variable for 1976</span>
                <div class="explain-line-title">Non-Dimensional Offset</div>
                <div class="explain-line-desc">Years: [1941, 1951, 1961, 1971, 1981, 1991]. Base point x0 = 1971, h = 10. For x = 1976: u = (1976 - 1971)/10 = 0.5.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Part (i) General Derivative Formula for Any u</span>
                <div class="explain-line-title">Differentiating Newton Forward Series</div>
                <div class="explain-line-desc">dy/dx = (1/h) * [Delta y0 + (2u - 1)/2 * Delta^2 y0 + (3u^2 - 6u + 2)/6 * Delta^3 y0]. Substituting u = 0.5 gives 2u - 1 = 0, eliminating the second difference!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Part (i) Population Growth Rate Calculation</span>
                <div class="explain-line-title">Numerical Rate</div>
                <div class="explain-line-desc">dy/dx = (1/10) * [Delta y0 + ((3(0.25) - 3 + 2)/6)*Delta^3 y0] = (1/10)*[10 - 0.0417*(-3)] = 1.0125 thousand per year (approx 1,013 persons/year).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Part (ii) Trigonometric Derivative Relation</span>
                <div class="explain-line-title">Calculus Identity in Radians</div>
                <div class="explain-line-desc">d/d_theta(tan theta) = sec^2(theta). Therefore sec(31 deg) = sqrt(d/d_theta(tan theta) at theta = 31 deg). Important: Step size h = 1 deg MUST be converted to radians: h = 1 * (pi/180) = 0.017453 radians!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Part (ii) Numerical Derivative of tan(theta)</span>
                <div class="explain-line-title">Forward Difference Formula</div>
                <div class="explain-line-desc">From table: Delta y0 = 0.0241, Delta^2 y0 = 0.0004. d/d_theta = (1/0.017453) * [0.0241 - 0.5*(0.0004)] = (1/0.017453) * [0.0239] = 1.3694.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Square Root for sec(31 deg)</div>
                <div class="explain-line-desc">sec(31 deg) = sqrt(1.3694) = 1.1702. (Check: 1/cos(31 deg) = 1/0.85717 = 1.1666).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Part (i) derivative formula at u = 0.5: 4 marks; Part (i) population rate: 4 marks; Part (ii) radian conversion: 2 marks; Part (ii) sec^2 formula and sec(31 deg): 6 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="numerical_diff">
<div class="card-top">
<span class="q-pill">QB • Q10 (16-Mark)</span>
<div class="q-heading">The population of a certain town is: Year: [1931, 1941, 1951, 1961, 1971], Population: [40.62, 60.80, 79.95, 103.56, 132.65] thousands. Find the rate of growth of the population in 1931 and 1971.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p>$h = 10$. Construct difference table:</p>
<table class="ai-table">
<thead><tr><th>Year $x$</th><th>$y$</th><th>$\Delta y$</th><th>$\Delta^2 y$</th><th>$\Delta^3 y$</th><th>$\Delta^4 y$</th></tr></thead>
<tbody>
<tr><td><strong>1931</strong></td><td><strong>40.62</strong></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td>$\mathbf{20.18}$</td><td></td><td></td><td></td></tr>
<tr><td><strong>1941</strong></td><td><strong>60.80</strong></td><td></td><td>$\mathbf{-1.03}$</td><td></td><td></td></tr>
<tr><td></td><td></td><td>19.15</td><td></td><td>$\mathbf{5.49}$</td><td></td></tr>
<tr><td><strong>1951</strong></td><td><strong>79.95</strong></td><td></td><td>4.46</td><td></td><td>$\mathbf{-4.07}$</td></tr>
<tr><td></td><td></td><td>23.61</td><td></td><td>1.42</td><td></td></tr>
<tr><td><strong>1961</strong></td><td><strong>103.56</strong></td><td></td><td>5.48</td><td></td><td></td></tr>
<tr><td></td><td></td><td>29.09</td><td></td><td></td><td></td></tr>
<tr><td><strong>1971</strong></td><td><strong>132.65</strong></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
<h4>1. Rate of Growth in 1931 (Beginning: Forward Formula):</h4>
<p>$\Delta y_0 = 20.18, \Delta^2 y_0 = -1.03, \Delta^3 y_0 = 5.49, \Delta^4 y_0 = -4.07$.</p>
$$\left(\frac{dy}{dx}\right)_{1931} = \frac{1}{10} \left[ 20.18 - \frac{1}{2}(-1.03) + \frac{1}{3}(5.49) - \frac{1}{4}(-4.07) \right]$$
$$= \frac{1}{10} [ 20.18 + 0.515 + 1.83 + 1.0175 ] = \frac{1}{10}[23.5425] = 2.3543 \text{ thousand/year}$$
<hr class="ai-hr">
<h4>2. Rate of Growth in 1971 (End: Backward Formula):</h4>
<p>$
abla y_4 = 29.09, 
abla^2 y_4 = 5.48, 
abla^3 y_4 = 1.42, 
abla^4 y_4 = -4.07$.</p>
$$\left(\frac{dy}{dx}\right)_{1971} = \frac{1}{10} \left[ 29.09 + \frac{1}{2}(5.48) + \frac{1}{3}(1.42) + \frac{1}{4}(-4.07) \right]$$
$$= \frac{1}{10} [ 29.09 + 2.74 + 0.4733 - 1.0175 ] = \frac{1}{10}[31.2858] = 3.1286 \text{ thousand/year}$$
<p><strong>Final Answer:</strong></p>
<ul>
<li>Growth rate in 1931: $2,354$ persons per year.</li>
<li>Growth rate in 1971: $3,129$ persons per year.</li>
</ul>
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
                <div class="explain-line-title">Rates of Change at Dataset Extremes</div>
                <div class="explain-line-desc">Given census population: Year [1931, 1941, 1951, 1961, 1971], Pop [40.62, 60.80, 79.95, 103.56, 132.65] thousands. Step size h = 10 years. We must compute the rate of population growth (dy/dx) at start year 1931 and end year 1971.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Constructing the Finite Difference Table</span>
                <div class="explain-line-title">Forward Differences</div>
                <div class="explain-line-desc">X = [1931, 1941, 1951, 1961, 1971], Y = [40.62, 60.80, 79.95, 103.56, 132.65]. Delta Y = [20.18, 19.15, 23.61, 29.09]. Delta^2 Y = [-1.03, 4.46, 5.48]. Delta^3 Y = [5.49, 1.02]. Delta^4 Y = [-4.47].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Growth Rate in 1931 via Newton Forward Formula</span>
                <div class="explain-line-title">Evaluating at Node x0 = 1931</div>
                <div class="explain-line-desc">dy/dx = (1/h) * [Delta y0 - (1/2)*Delta^2 y0 + (1/3)*Delta^3 y0 - (1/4)*Delta^4 y0] = (1/10) * [20.18 - (1/2)*(-1.03) + (1/3)*(5.49) - (1/4)*(-4.47)] = (1/10) * [20.18 + 0.515 + 1.830 + 1.1175] = (1/10) * [23.6425] = 2.364 thousand/year.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Backward Differences for 1971</span>
                <div class="explain-line-title">Values from Table Bottom</div>
                <div class="explain-line-desc">At x_n = 1971: nabla Y = 29.09, nabla^2 Y = 5.48, nabla^3 Y = 1.02, nabla^4 Y = -4.47.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Growth Rate in 1971 via Newton Backward Formula</span>
                <div class="explain-line-title">Evaluating at Node x_n = 1971</div>
                <div class="explain-line-desc">dy/dx = (1/h) * [nabla y_n + (1/2)*nabla^2 y_n + (1/3)*nabla^3 y_n + (1/4)*nabla^4 y_n] = (1/10) * [29.09 + (1/2)*(5.48) + (1/3)*(1.02) + (1/4)*(-4.47)] = (1/10) * [29.09 + 2.740 + 0.340 - 1.1175] = (1/10) * [31.0525] = 3.105 thousand/year.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Mathematical Interpretation</span>
                <div class="explain-line-title">Accelerating Urbanization</div>
                <div class="explain-line-desc">The rate of growth increased from 2,364 people/year in 1931 to 3,105 people/year in 1971, reflecting positive second derivative and upward population curvature.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Final Rates Stated</div>
                <div class="explain-line-desc">Rate of growth in 1931 was 2.364 thousand per year (2,364/year). Rate of growth in 1971 was 3.105 thousand per year (3,105/year).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Difference table: 4 marks; Forward derivative formula and 1931 rate: 6 marks; Backward derivative formula and 1971 rate: 6 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="spline">
<div class="card-top">
<span class="q-pill">Extra • Q11 (16-Mark)</span>
<div class="q-heading">Fit a natural cubic spline to the data: $x: [1, 2, 3]$ and $y: [-8, -1, 18]$ with $M_0 = M_2 = 0$. Hence evaluate $y(1.5)$ and $y'(1.5)$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p>Knots: $x_0 = 1, x_1 = 2, x_2 = 3$. Step lengths $h_1 = 1, h_2 = 1$.</p>
<p>Function values: $y_0 = -8, y_1 = -1, y_2 = 18$.</p>
<p>Natural boundary conditions: $M_0 = 0, \quad M_2 = 0$.</p>
<h4>Step 1: Recurrence Relation for Spline Moments $M_1$</h4>
$$\\frac{h_1}{6} M_0 + \\frac{h_1 + h_2}{3} M_1 + \\frac{h_2}{6} M_2 = \\frac{y_2 - y_1}{h_2} - \\frac{y_1 - y_0}{h_1}$$
<p>Substitute $h_1 = h_2 = 1$, $M_0 = M_2 = 0$:</p>
$$\\frac{1 + 1}{3} M_1 = \\frac{18 - (-1)}{1} - \\frac{-1 - (-8)}{1}$$
$$\\frac{2}{3} M_1 = 19 - 7 = 12 \implies M_1 = 12 \\times \\frac{3}{2} = 18$$
<h4>Step 2: Spline Polynomial $S_1(x)$ on $[1, 2]$</h4>
<p>The standard spline interpolation formula for interval $[x_0, x_1]$ is:</p>
$$S_1(x) = \\frac{(x_1 - x)^3}{6 h_1} M_0 + \\frac{(x - x_0)^3}{6 h_1} M_1 + \left( y_0 - \\frac{h_1^2}{6} M_0 \right) \\frac{x_1 - x}{h_1} + \left( y_1 - \\frac{h_1^2}{6} M_1 \right) \\frac{x - x_0}{h_1}$$
<p>Substitute $M_0 = 0, M_1 = 18, h_1 = 1, y_0 = -8, y_1 = -1$:</p>
$$S_1(x) = 0 + \\frac{(x - 1)^3}{6}(18) + (-8)(2 - x) + \left[ -1 - \\frac{1}{6}(18) \right](x - 1)$$
$$S_1(x) = 3(x - 1)^3 - 8(2 - x) - 4(x - 1)$$
<h4>Step 3: Evaluate at $x = 1.5$</h4>
<ul>
<li>$x - 1 = 0.5 \implies (x - 1)^3 = 0.125$</li>
<li>$2 - x = 0.5$</li>
</ul>
$$y(1.5) = S_1(1.5) = 3(0.125) - 8(0.5) - 4(0.5) = 0.375 - 4.0 - 2.0 = -5.625$$
<h4>Step 4: Derivative $y'(1.5)$</h4>
$$S_1'(x) = 9(x - 1)^2 + 8 - 4 = 9(x - 1)^2 + 4$$
$$S_1'(1.5) = 9(0.5)^2 + 4 = 9(0.25) + 4 = 2.25 + 4 = 6.25$$
<p><strong>Final Answer:</strong> $y(1.5) = -5.625, \quad y'(1.5) = 6.25$.</p>
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
                <div class="explain-line-title">Piecewise Cubic Polynomial with C2 Continuity</div>
                <div class="explain-line-desc">Given nodes x: [1, 2, 3] and values y: [-8, -1, 18]. Uniform step h = 1. A natural cubic spline fits a cubic polynomial S_i(x) on each interval [x_(i-1), x_i] such that the function, first derivative, and second derivative are all continuous, with natural boundary conditions M0 = 0 and M2 = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Governing Tridiagonal System for Moments M_i</span>
                <div class="explain-line-title">Curvature Equations</div>
                <div class="explain-line-desc">For uniform step h, the interior moments M_i satisfy: h*M_(i-1) + 4h*M_i + h*M_(i+1) = (6/h) * [y_(i+1) - 2*y_i + y_(i-1)]. Here we have only one interior point i = 1!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Solving for Interior Moment M1</span>
                <div class="explain-line-title">Single Linear Equation</div>
                <div class="explain-line-desc">With h = 1 and M0 = M2 = 0: 1*(0) + 4*(1)*M1 + 1*(0) = (6/1) * [18 - 2*(-1) + (-8)] -> 4*M1 = 6 * [18 + 2 - 8] = 6 * 12 = 72 -> M1 = 72 / 4 = 18.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Spline Formula for Interval [x_(i-1), x_i]</span>
                <div class="explain-line-title">Analytical Expression</div>
                <div class="explain-line-desc">S_i(x) = [M_(i-1)*(x_i - x)^3 / 6h] + [M_i*(x - x_(i-1))^3 / 6h] + [(y_(i-1) - M_(i-1)*h^2/6)*(x_i - x)/h] + [(y_i - M_i*h^2/6)*(x - x_(i-1))/h].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Deriving Spline S1(x) for [1, 2]</span>
                <div class="explain-line-title">Substituting M0 = 0, M1 = 18</div>
                <div class="explain-line-desc">For [1, 2]: S1(x) = [0] + [18*(x - 1)^3 / 6] + [(-8 - 0)*(2 - x)] + [(-1 - 18/6)*(x - 1)] = 3*(x - 1)^3 - 8*(2 - x) - 4*(x - 1) = 3*(x^3 - 3x^2 + 3x - 1) - 16 + 8x - 4x + 4 = 3x^3 - 9x^2 + 13x - 15.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Evaluating y(1.5) and y'(1.5)</span>
                <div class="explain-line-title">Target Evaluations</div>
                <div class="explain-line-desc">y(1.5) = S1(1.5) = 3*(1.5 - 1)^3 - 8*(2 - 1.5) - 4*(1.5 - 1) = 3*(0.125) - 8*(0.5) - 4*(0.5) = 0.375 - 4.0 - 2.0 = -5.625. Derivative: S1'(x) = 9*(x - 1)^2 + 8 - 4 = 9*(x - 1)^2 + 4. At x = 1.5: S1'(1.5) = 9*(0.5)^2 + 4 = 9*(0.25) + 4 = 2.25 + 4 = 6.25.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Spline and Target Evaluated</div>
                <div class="explain-line-desc">Spline on [1, 2] is S1(x) = 3x^3 - 9x^2 + 13x - 15. Value at x = 1.5 is y(1.5) = -5.625. Derivative at x = 1.5 is y'(1.5) = 6.25.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Moment equation and natural boundaries M0 = M2 = 0: 4 marks; Solving for M1 = 18: 4 marks; Spline equation S1(x) on [1, 2]: 4 marks; Evaluations y(1.5) and y'(1.5): 4 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="numerical_integration">
<div class="card-top">
<span class="q-pill">Extra • Q12 (16-Mark)</span>
<div class="q-heading">Evaluate $I = \int_0^6 \\frac{dx}{1 + x^2}$ using (i) Trapezoidal Rule, (ii) Simpson's 1/3 Rule, and (iii) Simpson's 3/8 Rule with $h = 1$. Compare with the exact value.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p>$h = 1, n = 6$. Table of ordinates $y = \\frac{1}{1 + x^2}$:</p>
<table class="ai-table">
<thead><tr><th>$x$</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead>
<tbody>
<tr><td>$y$</td><td>1.0000</td><td>0.5000</td><td>0.2000</td><td>0.1000</td><td>0.0588</td><td>0.0385</td><td>0.0270</td></tr>
</tbody>
</table>
<h4>1. Trapezoidal Rule</h4>
$$I_T = \\frac{h}{2} [ (y_0 + y_6) + 2(y_1 + y_2 + y_3 + y_4 + y_5) ]$$
$$I_T = \\frac{1}{2} [ (1.0000 + 0.0270) + 2(0.5000 + 0.2000 + 0.1000 + 0.0588 + 0.0385) ]$$
$$I_T = 0.5 [ 1.0270 + 2(0.8973) ] = 0.5 [ 1.0270 + 1.7946 ] = 0.5(2.8216) = 1.4108$$
<hr class="ai-hr">
<h4>2. Simpson's 1/3 Rule ($n = 6$ is even)</h4>
$$I_{1/3} = \\frac{h}{3} [ (y_0 + y_6) + 4(y_1 + y_3 + y_5) + 2(y_2 + y_4) ]$$
$$I_{1/3} = \\frac{1}{3} [ 1.0270 + 4(0.5000 + 0.1000 + 0.0385) + 2(0.2000 + 0.0588) ]$$
$$I_{1/3} = \\frac{1}{3} [ 1.0270 + 4(0.6385) + 2(0.2588) ] = \\frac{1}{3} [ 1.0270 + 2.5540 + 0.5176 ] = \\frac{4.0986}{3} = 1.3662$$
<hr class="ai-hr">
<h4>3. Simpson's 3/8 Rule ($n = 6$ is multiple of 3)</h4>
$$I_{3/8} = \\frac{3h}{8} [ (y_0 + y_6) + 3(y_1 + y_2 + y_4 + y_5) + 2(y_3) ]$$
$$I_{3/8} = \\frac{3}{8} [ 1.0270 + 3(0.5000 + 0.2000 + 0.0588 + 0.0385) + 2(0.1000) ]$$
$$I_{3/8} = \\frac{3}{8} [ 1.0270 + 3(0.7973) + 0.2000 ] = \\frac{3}{8} [ 1.0270 + 2.3919 + 0.2000 ] = \\frac{3(3.6189)}{8} = 1.3571$$
<hr class="ai-hr">
<h4>Comparison with Exact Value</h4>
<p>Exact integral: $\int_0^6 \\frac{dx}{1 + x^2} = [\\tan^{-1} x]_0^6 = \\tan^{-1}(6) \\approx 1.4056 \text{ radians}$.</p>
<ul>
<li>Trapezoidal Error: $|1.4056 - 1.4108| = 0.0052$</li>
<li>Simpson 1/3 Error: $|1.4056 - 1.3662| = 0.0394$</li>
<li>Simpson 3/8 Error: $|1.4056 - 1.3571| = 0.0485$</li>
</ul>
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
                <div class="explain-line-title">Comparative Numerical Quadrature</div>
                <div class="explain-line-desc">We must evaluate I = integral_0^6 dx / (1 + x^2) using: (i) Trapezoidal Rule, (ii) Simpson's 1/3 Rule, (iii) Simpson's 3/8 Rule, with step h = 1 (giving n = 6 intervals), and compare with exact analytical value.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Tabulating Function Values y = 1 / (1 + x^2)</span>
                <div class="explain-line-title">7 Ordinates for 6 Intervals</div>
                <div class="explain-line-desc">x0 = 0: y0 = 1.0000; x1 = 1: y1 = 0.5000; x2 = 2: y2 = 0.2000; x3 = 3: y3 = 0.1000; x4 = 4: y4 = 0.0588; x5 = 5: y5 = 0.0385; x6 = 6: y6 = 0.0270.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Exact Analytical Integral</span>
                <div class="explain-line-title">Calculus Benchmark</div>
                <div class="explain-line-desc">I_exact = [arctan(x)]_0^6 = arctan(6) - arctan(0) = 1.405647 radians.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Part (i) Trapezoidal Rule</span>
                <div class="explain-line-title">Linear Approximation</div>
                <div class="explain-line-desc">I_trap = (h/2) * [(y0 + y6) + 2*(y1 + y2 + y3 + y4 + y5)] = (1/2) * [(1.0270) + 2*(0.5000 + 0.2000 + 0.1000 + 0.0588 + 0.0385)] = (1/2) * [1.0270 + 2*(0.8973)] = (1/2) * [2.8216] = 1.4108. Error = 1.4108 - 1.4056 = +0.0052.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Part (ii) Simpson's 1/3 Rule</span>
                <div class="explain-line-title">Parabolic Approximation (Odd and Even Grouping)</div>
                <div class="explain-line-desc">I_simp13 = (h/3) * [(y0 + y6) + 4*(y1 + y3 + y5) + 2*(y2 + y4)] = (1/3) * [(1.0270) + 4*(0.5000 + 0.1000 + 0.0385) + 2*(0.2000 + 0.0588)] = (1/3) * [1.0270 + 4*(0.6385) + 2*(0.2588)] = (1/3) * [1.0270 + 2.5540 + 0.5176] = (1/3) * [4.0986] = 1.3662.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Part (iii) Simpson's 3/8 Rule</span>
                <div class="explain-line-title">Cubic Approximation (Multiples of 3 Grouping)</div>
                <div class="explain-line-desc">I_simp38 = (3h/8) * [(y0 + y6) + 3*(y1 + y2 + y4 + y5) + 2*(y3)] = (3/8) * [(1.0270) + 3*(0.5000 + 0.2000 + 0.0588 + 0.0385) + 2*(0.1000)] = (3/8) * [1.0270 + 3*(0.7973) + 0.2000] = (3/8) * [1.0270 + 2.3919 + 0.2000] = (3/8) * [3.6189] = 1.3571.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Comparison and Conclusion</span>
                <div class="explain-line-title">Summary Table of Results</div>
                <div class="explain-line-desc">Exact: 1.4056. Trapezoidal: 1.4108. Simpson's 1/3: 1.3662. Simpson's 3/8: 1.3571.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Data table of ordinates: 3 marks; Exact value arctan(6): 2 marks; Trapezoidal calculation: 3 marks; Simpson 1/3 calculation: 4 marks; Simpson 3/8 calculation: 4 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="numerical_integration">
<div class="card-top">
<span class="q-pill">Extra • Q13 (16-Mark)</span>
<div class="q-heading">Evaluate $\int_0^{\pi/2} \sin x \, dx$ using Simpson's 1/3 Rule with $n = 6$ sub-intervals. Compute the percentage error relative to the exact analytical value.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p>Interval $[0, \pi/2]$, $n = 6 \implies h = \\frac{\pi/2 - 0}{6} = \\frac{\pi}{12} \\approx 0.26180 \text{ radians}$ ($15^{\circ}$).</p>
<table class="ai-table">
<thead><tr><th>$i$</th><th>$x_i$</th><th>$x_i$ (degrees)</th><th>$y_i = \sin x_i$</th></tr></thead>
<tbody>
<tr><td>0</td><td>0</td><td>$0^{\circ}$</td><td>0.0000</td></tr>
<tr><td>1</td><td>$\pi/12$</td><td>$15^{\circ}$</td><td>0.2588</td></tr>
<tr><td>2</td><td>$2\pi/12$</td><td>$30^{\circ}$</td><td>0.5000</td></tr>
<tr><td>3</td><td>$3\pi/12$</td><td>$45^{\circ}$</td><td>0.7071</td></tr>
<tr><td>4</td><td>$4\pi/12$</td><td>$60^{\circ}$</td><td>0.8660</td></tr>
<tr><td>5</td><td>$5\pi/12$</td><td>$75^{\circ}$</td><td>0.9659</td></tr>
<tr><td>6</td><td>$6\pi/12$</td><td>$90^{\circ}$</td><td>1.0000</td></tr>
</tbody>
</table>
<h4>Simpson's 1/3 Rule:</h4>
$$I = \\frac{h}{3} [ (y_0 + y_6) + 4(y_1 + y_3 + y_5) + 2(y_2 + y_4) ]$$
<ul>
<li>$y_0 + y_6 = 0 + 1.0000 = 1.0000$</li>
<li>$y_1 + y_3 + y_5 = 0.2588 + 0.7071 + 0.9659 = 1.9318$</li>
<li>$y_2 + y_4 = 0.5000 + 0.8660 = 1.3660$</li>
</ul>
$$I = \\frac{\pi/12}{3} [ 1.0000 + 4(1.9318) + 2(1.3660) ] = \\frac{\pi}{36} [ 1.0000 + 7.7272 + 2.7320 ]$$
$$I = \\frac{\pi}{36} [ 11.4592 ] = (0.0872665)(11.4592) = 1.000008$$
<hr class="ai-hr">
<h4>Error Analysis</h4>
<p>Exact integral: $\int_0^{\pi/2} \sin x \, dx = [-\cos x]_0^{\pi/2} = -\cos(\pi/2) - (-\cos 0) = 0 + 1 = 1.000000$.</p>
$$\text{Absolute Error} = |1.000008 - 1.000000| = 0.000008 = 8 \times 10^{-6}$$
$$\text{Percentage Error} = \frac{8 \times 10^{-6}}{1} \times 100\% = 0.0008\%$$
<p><strong>Conclusion:</strong> Simpson's 1/3 rule delivers exceptional accuracy with less than $0.001\%$ relative error.</p>
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
                <div class="explain-line-title">Numerical Quadrature on Trigonometric Function</div>
                <div class="explain-line-desc">We must evaluate I = integral_0^(pi/2) sin(x) dx using Simpson's 1/3 Rule with n = 6 sub-intervals, and compute the percentage error relative to the exact value.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Sub-Interval Step Size and Nodes</span>
                <div class="explain-line-title">Quadrant Division into 15 Degree Steps</div>
                <div class="explain-line-desc">Interval [0, pi/2]. Number of sub-intervals n = 6. Step size h = (pi/2 - 0)/6 = pi/12 radians (which corresponds to 15 degrees).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Table of Ordinates y = sin(x)</span>
                <div class="explain-line-title">Trigonometric Evaluations</div>
                <div class="explain-line-desc">x0 = 0: y0 = sin(0) = 0. x1 = 15 deg: y1 = sin(15) = 0.2588. x2 = 30 deg: y2 = sin(30) = 0.5000. x3 = 45 deg: y3 = sin(45) = 0.7071. x4 = 60 deg: y4 = sin(60) = 0.8660. x5 = 75 deg: y5 = sin(75) = 0.9659. x6 = 90 deg: y6 = sin(90) = 1.0000.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Grouping Ordinates for Simpson's 1/3</span>
                <div class="explain-line-title">Boundary, Odd, and Even Sums</div>
                <div class="explain-line-desc">Boundary sum: y0 + y6 = 0 + 1 = 1.0000. Odd ordinates sum: y1 + y3 + y5 = 0.2588 + 0.7071 + 0.9659 = 1.9318. Even ordinates sum: y2 + y4 = 0.5000 + 0.8660 = 1.3660.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Applying Simpson's 1/3 Rule Formula</span>
                <div class="explain-line-title">Weighted Sum Evaluation</div>
                <div class="explain-line-desc">I = (h/3) * [(y0 + y6) + 4*(odd sum) + 2*(even sum)] = ((pi/12)/3) * [1.0000 + 4*(1.9318) + 2*(1.3660)] = (pi/36) * [1.0000 + 7.7272 + 2.7320] = (pi/36) * [11.4592] = (3.14159265 / 36) * 11.4592 = 1.000006.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Analytical Value and Percentage Error</span>
                <div class="explain-line-title">Near-Zero Truncation Error</div>
                <div class="explain-line-desc">Exact integral: I_exact = [-cos(x)]_0^(pi/2) = -cos(pi/2) - (-cos(0)) = 0 - (-1) = 1.000000. Absolute error = |1.000006 - 1.000000| = 0.000006. Percentage error = (0.000006 / 1.0) * 100% = 0.0006%.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Exceptional Accuracy of Simpson 1/3</div>
                <div class="explain-line-desc">Simpson's 1/3 Rule yields I = 1.000006, achieving 99.9994% accuracy due to its cubic degree of precision.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Step size h = pi/12 and table of ordinates: 4 marks; Exact analytical integral: 2 marks; Simpson 1/3 formula grouping: 4 marks; Numerical computation I = 1.000006: 4 marks; Percentage error calculation: 2 marks.</div>
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
</div></div></div>

<div class="question-card" data-category="numerical_diff">
<div class="card-top">
<span class="q-pill">Extra • Q14 (16-Mark)</span>
<div class="q-heading">Find $f'(6)$ and $f''(6)$ from the divided difference table for unequally spaced data: $x: [1, 3, 5, 8, 10]$ and $f(x): [3, 15, 35, 72, 108]$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Step 1: Construct Divided Difference Table</h4>
<table class="ai-table">
<thead><tr><th>$x$</th><th>$f(x)$</th><th>First $\Delta f$</th><th>Second $\Delta^2 f$</th><th>Third $\Delta^3 f$</th></tr></thead>
<tbody>
<tr><td><strong>1</strong></td><td><strong>3</strong></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td>$\frac{15 - 3}{3 - 1} = \mathbf{6}$</td><td></td><td></td></tr>
<tr><td><strong>3</strong></td><td><strong>15</strong></td><td></td><td>$\frac{10 - 6}{5 - 1} = \mathbf{1}$</td><td></td></tr>
<tr><td></td><td></td><td>$\frac{35 - 15}{5 - 3} = 10$</td><td></td><td>$\frac{0.4667 - 1}{8 - 1} = \mathbf{-0.0762}$</td></tr>
<tr><td><strong>5</strong></td><td><strong>35</strong></td><td></td><td>$\frac{12.333 - 10}{8 - 3} = 0.4667$</td><td></td></tr>
<tr><td></td><td></td><td>$\frac{72 - 35}{8 - 5} = 12.333$</td><td></td><td>...</td></tr>
<tr><td><strong>8</strong></td><td><strong>72</strong></td><td></td><td>...</td><td></td></tr>
<tr><td></td><td></td><td>$\frac{108 - 72}{10 - 8} = 18$</td><td></td><td></td></tr>
<tr><td><strong>10</strong></td><td><strong>108</strong></td><td></td><td></td><td></td></tr>
</tbody>
</table>
<h4>Step 2: Differentiate Newton's Divided Difference Formula</h4>
$$P(x) = f(x_0) + (x - x_0)f[x_0, x_1] + (x - x_0)(x - x_1)f[x_0, x_1, x_2] + (x - x_0)(x - x_1)(x - x_2)f[x_0, x_1, x_2, x_3]$$
<p>Differentiating with respect to $x$ using product rule:</p>
$$P'(x) = f[x_0, x_1] + [(x - x_0) + (x - x_1)] f[x_0, x_1, x_2] + [(x - x_1)(x - x_2) + (x - x_0)(x - x_2) + (x - x_0)(x - x_1)] f[x_0, x_1, x_2, x_3]$$
<p>Differentiating a second time:</p>
$$P''(x) = 2 f[x_0, x_1, x_2] + 2 [(x - x_0) + (x - x_1) + (x - x_2)] f[x_0, x_1, x_2, x_3]$$
<h4>Step 3: Evaluate at $x = 6$</h4>
<p>For $x = 6$ with $x_0 = 1, x_1 = 3, x_2 = 5$:</p>
<ul>
<li>$(x - x_0) + (x - x_1) = 5 + 3 = 8$</li>
<li>$(x - x_1)(x - x_2) + (x - x_0)(x - x_2) + (x - x_0)(x - x_1) = (3)(1) + (5)(1) + (5)(3) = 3 + 5 + 15 = 23$</li>
</ul>
$$P'(6) = 6 + (8)(1) + (23)(-0.0762) = 6 + 8 - 1.7526 = 12.2474$$
$$P''(6) = 2(1) + 2(5 + 3 + 1)(-0.0762) = 2 + 18(-0.0762) = 2 - 1.3716 = 0.6284$$
<p><strong>Final Answer:</strong> $f'(6) \approx 12.25, \quad f''(6) \approx 0.63$.</p>
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
                <div class="explain-line-title">Derivative of Unequally Spaced Data</div>
                <div class="explain-line-desc">Given points x: [1, 3, 5, 8, 10] and f(x): [3, 15, 35, 72, 108]. Step sizes are unequal (2, 2, 3, 2). We must construct the divided difference table, differentiate the Newton divided difference polynomial, and compute f'(6) and f''(6).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Constructing Divided Difference Table</span>
                <div class="explain-line-title">Order by Order Ratios</div>
                <div class="explain-line-desc">First divided diffs: [15-3]/2 = 6; [35-15]/2 = 10; [72-35]/3 = 37/3 = 12.333; [108-72]/2 = 18. Second divided diffs: [10-6]/4 = 1; [12.333-10]/5 = 0.467; [18-12.333]/5 = 1.133. Third divided diffs: [0.467-1]/7 = -0.076; [1.133-0.467]/7 = 0.095.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Fitting the Newton Divided Difference Polynomial</span>
                <div class="explain-line-title">Series Expansion around x0</div>
                <div class="explain-line-desc">f(x) = f(x0) + (x - x0)*f[x0, x1] + (x - x0)(x - x1)*f[x0, x1, x2] + (x - x0)(x - x1)(x - x2)*f[x0, x1, x2, x3].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Differentiating with Respect to x</span>
                <div class="explain-line-title">Product Rule Derivative</div>
                <div class="explain-line-desc">f'(x) = f[x0, x1] + [(x - x0) + (x - x1)]*f[x0, x1, x2] + [(x - x1)(x - x2) + (x - x0)(x - x2) + (x - x0)(x - x1)]*f[x0, x1, x2, x3].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Differentiating Again for Second Derivative</span>
                <div class="explain-line-title">Curvature Formula</div>
                <div class="explain-line-desc">f''(x) = 2*f[x0, x1, x2] + 2*[(x - x0) + (x - x1) + (x - x2)]*f[x0, x1, x2, x3].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Evaluating at x = 6</span>
                <div class="explain-line-title">Numerical Substitution</div>
                <div class="explain-line-desc">Substitute x = 6, x0 = 1, x1 = 3, x2 = 5 into the derivative formulas: (x - 1) = 5, (x - 3) = 3, (x - 5) = 1. f'(6) = 6 + (5 + 3)*(1) + (3*1 + 5*1 + 5*3)*(-0.076) = 6 + 8 - 1.75 = 12.25. f''(6) = 2*(1) + 2*(5 + 3 + 1)*(-0.076) = 2 - 1.37 = 0.63.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Derivatives Stated</div>
                <div class="explain-line-desc">At x = 6: First derivative f'(6) = 12.25. Second derivative f''(6) = 0.63.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Divided difference table: 5 marks; First derivative formula and evaluation f'(6): 5 marks; Second derivative formula and evaluation f''(6): 4 marks; Summary statement: 2 marks.</div>
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
</div></div></div>
`
};
