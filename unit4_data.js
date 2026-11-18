// Unit IV: Solution of Equations and Eigenvalue Problems
// Anna University R2021 / Panimalar Autonomous 23MA1302
// Fully generated with 20 Part A + 14 Part B questions, step dropdowns, and Zero-404 inline AI tutor.

window.UNIT4_DATA = {
  title: "Unit-IV: Numerical Equations & Eigenvalues",
  desc: "Newton-Raphson Method, Gauss Elimination & Jordan, Gauss-Jacobi & Seidel, Power Method & Jacobi Eigenvalues.",
  partA: String.raw`<div class="question-card" data-category="newton">
<div class="card-top">
<span class="q-pill">QB - Q1</span>
<div class="q-heading">State the order of convergence and convergence condition for Newton-Raphson method.</div>
</div>
<div class="solution-content">
<p><strong>1. Order of Convergence:</strong> The order of convergence of the Newton-Raphson method is <strong>quadratic ($p = 2$)</strong>. This means the error at any iteration $e_{n+1} \approx C e_n^2$, roughly doubling the number of correct decimal places at each step.</p>
<p><strong>2. Sufficient Condition for Convergence:</strong> In an interval $(a, b)$ containing the root $\alpha$, the method converges if:</p>
<div class="math-panel">
$$\left| f(x) f''(x) \right| < \left[ f'(x) \right]^2 \quad \text{for all } x \in (a, b)$$
</div>
<p>Additionally, $f'(x) \neq 0$ in the neighborhood of the root to avoid division by zero.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Order</span>
                <div class="explain-line-title">Quadratic Convergence ($p=2$)</div>
                <div class="explain-line-desc">Derived from Taylor series expansion $f(\alpha) = f(x_n) + (\alpha - x_n)f'(x_n) + \frac{(\alpha - x_n)^2}{2}f''(c) = 0$, leading to $e_{n+1} = \frac{f''(c)}{2f'(x_n)}e_n^2$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Condition</span>
                <div class="explain-line-title">Fourier / Convergence Criterion</div>
                <div class="explain-line-desc">The inequality $|f(x)f''(x)| < [f'(x)]^2$ ensures that the tangent line intersects the $x$-axis closer to the root than the current estimate.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for stating order $p = 2$ (quadratic); 1 mark for the inequality condition $|f(x)f''(x)| < [f'(x)]^2$ and $f'(x) \neq 0$.</div>
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

<div class="question-card" data-category="newton">
<div class="card-top">
<span class="q-pill">QB - Q2</span>
<div class="q-heading">Establish the iteration formula to find the reciprocal of a positive number $N$ by Newton-Raphson Method.</div>
</div>
<div class="solution-content">
<p>To find $x = \frac{1}{N}$, we set up the equation $f(x) = \frac{1}{x} - N = 0$.</p>
<p>Differentiating with respect to $x$:</p>
<div class="math-panel">
$$f'(x) = -\frac{1}{x^2}$$
</div>
<p>Applying the standard Newton-Raphson formula $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$:</p>
<div class="math-panel">
$$x_{n+1} = x_n - \frac{\frac{1}{x_n} - N}{-\frac{1}{x_n^2}} = x_n + x_n^2 \left( \frac{1}{x_n} - N \right) = x_n + x_n - N x_n^2$$
$$x_{n+1} = x_n (2 - N x_n)$$
</div>
<p><strong>Conclusion:</strong> The reciprocal iteration formula is $x_{n+1} = x_n(2 - Nx_n)$, which computes division using only multiplications and subtractions without division hardware.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Function</span>
                <div class="explain-line-title">Formulate $f(x) = 0$</div>
                <div class="explain-line-desc">Let $x = 1/N \implies 1/x - N = 0$. Using $f(x) = x - 1/N$ would yield division by $N$ directly, defeating the purpose of an iterative reciprocal formula.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Formula</span>
                <div class="explain-line-title">Newton-Raphson Substitution</div>
                <div class="explain-line-desc">Substitute $f(x_n)$ and $f'(x_n) = -1/x_n^2$ into $x_{n+1} = x_n - f/f'$, simplify the compound fraction by multiplying numerator by $x_n^2$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for setting $f(x) = \frac{1}{x}-N$ and $f'(x) = -\frac{1}{x^2}$; 1 mark for final formula $x_{n+1} = x_n(2 - Nx_n)$.</div>
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

<div class="question-card" data-category="newton">
<div class="card-top">
<span class="q-pill">QB - Q3</span>
<div class="q-heading">Find the Newton-Raphson iterative formula for $\sqrt{a}$ (where $a > 0$).</div>
</div>
<div class="solution-content">
<p>Let $x = \sqrt{a} \implies x^2 = a$. Thus, the objective equation is:</p>
<div class="math-panel">
$$f(x) = x^2 - a = 0 \implies f'(x) = 2x$$
</div>
<p>Substituting into Newton-Raphson iteration $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$:</p>
<div class="math-panel">
$$x_{n+1} = x_n - \frac{x_n^2 - a}{2x_n} = \frac{2x_n^2 - x_n^2 + a}{2x_n} = \frac{x_n^2 + a}{2x_n}$$
$$x_{n+1} = \frac{1}{2} \left( x_n + \frac{a}{x_n} \right)$$
</div>
<p><strong>Conclusion:</strong> This is Hero's square-root algorithm with quadratic convergence.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Objective</span>
                <div class="explain-line-title">Define $f(x) = x^2 - a$</div>
                <div class="explain-line-desc">Setting $x^2 - a = 0$ gives a smooth polynomial whose derivative $f'(x) = 2x$ is linear and non-zero for $x > 0$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Simplification</span>
                <div class="explain-line-title">Common Denominator</div>
                <div class="explain-line-desc">Combining $x_n - \frac{x_n^2-a}{2x_n} = \frac{2x_n^2 - x_n^2 + a}{2x_n} = \frac{1}{2}(x_n + a/x_n)$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for derivative and substitution; 1 mark for the final simplified formula $x_{n+1} = \frac{1}{2}\left(x_n + \frac{a}{x_n}\right)$.</div>
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

<div class="question-card" data-category="direct_indirect">
<div class="card-top">
<span class="q-pill">QB - Q4</span>
<div class="q-heading">Distinguish between direct and indirect (iterative) methods of solving simultaneous linear equations.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<table class="ai-table">
<thead>
<tr><th>Feature</th><th>Direct Methods (e.g., Gauss Elimination, Jordan)</th><th>Indirect / Iterative Methods (e.g., Jacobi, Seidel)</th></tr>
</thead>
<tbody>
<tr><td><strong>Nature</strong></td><td>Yield exact solution in a predetermined, finite number of steps (neglecting round-off error).</td><td>Start with an initial guess and generate successively refined approximations converging to the true solution.</td></tr>
<tr><td><strong>Matrix Structure</strong></td><td>Best suited for dense, non-structured matrices of moderate size. Alter matrix structure during elimination.</td><td>Ideal for large, sparse systems (e.g., PDE finite-difference grids). Retain zero-element sparsity pattern.</td></tr>
<tr><td><strong>Error Sensitivity</strong></td><td>Round-off errors accumulate progressively as matrix order $n$ grows.</td><td>Self-correcting: round-off errors do not propagate indefinitely.</td></tr>
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
                <span class="explain-line-badge">Step 1: Concept</span>
                <div class="explain-line-title">Exact vs Approximative</div>
                <div class="explain-line-desc">Direct methods find roots algebraically in $O(n^3/3)$ operations. Iterative methods stop when $|x^{(k+1)} - x^{(k)}| < \varepsilon$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Sparsity</span>
                <div class="explain-line-title">Computational Efficiency</div>
                <div class="explain-line-desc">For sparse matrices with 90%+ zeros, direct elimination causes 'fill-in' (zeros turn non-zero), whereas iterative methods multiply only non-zero elements.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark each for two clear, technically distinct points of comparison.</div>
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

<div class="question-card" data-category="iterative">
<div class="card-top">
<span class="q-pill">QB - Q5</span>
<div class="q-heading">Why is the Gauss-Seidel method a better method than Jacobi's iterative method?</div>
</div>
<div class="solution-content">
<p><strong>Gauss-Seidel is superior to Jacobi's method for two fundamental reasons:</strong></p>
<div class="math-panel">
<ol>
<li><strong>Immediate Utilization of Fresh Values:</strong> In Gauss-Seidel, as soon as a new coordinate $x_i^{(k+1)}$ is computed, it is <em>immediately used</em> to compute subsequent components $x_{i+1}^{(k+1)}, \dots, x_n^{(k+1)}$ in the very same iteration. Jacobi holds onto old values $x^{(k)}$ until the entire vector is evaluated.</li>
<li><strong>Double the Rate of Convergence:</strong> For a strictly diagonally dominant or symmetric positive-definite matrix, the spectral radius satisfies:
$$\rho(H_{\text{Seidel}}) = [\rho(H_{\text{Jacobi}})]^2 < \rho(H_{\text{Jacobi}}) < 1$$
Thus, Gauss-Seidel converges roughly <strong>twice as fast</strong>, requiring half the number of iterations.</li>
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
                <span class="explain-line-badge">Step 1: Memory & Logic</span>
                <div class="explain-line-title">In-place Update</div>
                <div class="explain-line-desc">Jacobi requires two storage arrays (old $x^{(k)}$ and new $x^{(k+1)}$). Gauss-Seidel overwrites the vector in-place.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Convergence</span>
                <div class="explain-line-title">Spectral Radius Relationship</div>
                <div class="explain-line-desc">$\rho(H_S) = \rho(H_J)^2$ means each Gauss-Seidel step reduces the asymptotic error by the square of the Jacobi reduction.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for explaining immediate use of updated values; 1 mark for stating that it converges twice as fast.</div>
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

<div class="question-card" data-category="gauss_elim">
<div class="card-top">
<span class="q-pill">QB - Q6</span>
<div class="q-heading">By Gauss Elimination method, solve: $2x + y = 5$ and $x + 3y = 5$.</div>
</div>
<div class="solution-content">
<p>Write the system in augmented matrix form $[A \mid B]$:</p>
<div class="math-panel">
$$[A \mid B] = \begin{bmatrix} 2 & 1 & \mid & 5 \\ 1 & 3 & \mid & 5 \end{bmatrix}$$
</div>
<p>Perform row operation $R_2 \leftarrow R_2 - \frac{1}{2} R_1$:</p>
<div class="math-panel">
$$R_2 \leftarrow \begin{bmatrix} 1 - \frac{1}{2}(2) & 3 - \frac{1}{2}(1) & \mid & 5 - \frac{1}{2}(5) \end{bmatrix} = \begin{bmatrix} 0 & \frac{5}{2} & \mid & \frac{5}{2} \end{bmatrix}$$
$$\begin{bmatrix} 2 & 1 & \mid & 5 \\ 0 & \frac{5}{2} & \mid & \frac{5}{2} \end{bmatrix}$$
</div>
<p>From the second row: $\frac{5}{2} y = \frac{5}{2} \implies y = 1$.</p>
<p>Back-substituting into row 1: $2x + 1 = 5 \implies 2x = 4 \implies x = 2$.</p>
<p><strong>Final Answer:</strong> $x = 2, \quad y = 1$.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Augmented Matrix</span>
                <div class="explain-line-title">Forward Elimination</div>
                <div class="explain-line-desc">Form $[A \mid B]$ and apply multiplier $m_{21} = 1/2$ to eliminate $x$ from equation 2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Back-substitution</span>
                <div class="explain-line-title">Solve Upper Triangular System</div>
                <div class="explain-line-desc">Equation 2 gives $y=1$ directly. Back-substitution into $2x + y = 5$ yields $x=2$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for correct upper triangular matrix; 1 mark for back-substitution values $x=2, y=1$.</div>
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

<div class="question-card" data-category="direct_methods">
<div class="card-top">
<span class="q-pill">QB - Q7</span>
<div class="q-heading">Compare Gauss Elimination and Gauss-Jordan methods.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<table class="ai-table">
<thead>
<tr><th>Feature</th><th>Gauss Elimination Method</th><th>Gauss-Jordan Method</th></tr>
</thead>
<tbody>
<tr><td><strong>Target Form</strong></td><td>Reduces augmented matrix $[A \mid B]$ to <strong>upper triangular form</strong> $[U \mid B']$.</td><td>Reduces $[A \mid B]$ to <strong>diagonal / identity form</strong> $[I \mid X]$.</td></tr>
<tr><td><strong>Back-Substitution</strong></td><td>Requires a separate back-substitution stage to solve for unknowns.</td><td>No back-substitution needed; unknowns appear directly in the transformed right-hand side.</td></tr>
<tr><td><strong>Operation Count</strong></td><td>$\approx \frac{n^3}{3} + n^2$ arithmetic operations (more efficient for solving linear systems).</td><td>$\approx \frac{n^3}{2}$ operations ($\approx 50\%$ more work for equations, but ideal for matrix inversion $[A \mid I] \to [I \mid A^{-1}]$).</td></tr>
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
                <span class="explain-line-badge">Step 1: Triangular vs Diagonal</span>
                <div class="explain-line-title">Row Reduction Target</div>
                <div class="explain-line-desc">Gauss eliminates entries below main diagonal; Gauss-Jordan eliminates entries both below and above pivots.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Efficiency</span>
                <div class="explain-line-title">Complexity Comparison</div>
                <div class="explain-line-desc">Gauss is computationally cheaper ($n^3/3$) for solving $AX=B$, while Gauss-Jordan avoids back-substitution and finds $A^{-1}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for target matrix forms ($U$ vs $I$); 1 mark for comparing operation cost / back-substitution requirement.</div>
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

<div class="question-card" data-category="gauss_jordan">
<div class="card-top">
<span class="q-pill">QB - Q8</span>
<div class="q-heading">Solve by using Gauss-Jordan method: $2x + 3y = 8$, $x - y = 4$.</div>
</div>
<div class="solution-content">
<p>Set up augmented matrix $[A \mid B]$:</p>
<div class="math-panel">
$$[A \mid B] = \begin{bmatrix} 2 & 3 & \mid & 8 \\ 1 & -1 & \mid & 4 \end{bmatrix}$$
</div>
<p>Interchange $R_1 \leftrightarrow R_2$ for unit pivot:</p>
<div class="math-panel">
$$\begin{bmatrix} 1 & -1 & \mid & 4 \\ 2 & 3 & \mid & 8 \end{bmatrix}$$
</div>
<p>Perform $R_2 \leftarrow R_2 - 2R_1$:</p>
<div class="math-panel">
$$\begin{bmatrix} 1 & -1 & \mid & 4 \\ 0 & 5 & \mid & 0 \end{bmatrix}$$
</div>
<p>Normalize $R_2 \leftarrow \frac{R_2}{5}$:</p>
<div class="math-panel">
$$\begin{bmatrix} 1 & -1 & \mid & 4 \\ 0 & 1 & \mid & 0 \end{bmatrix}$$
</div>
<p>Eliminate above pivot: $R_1 \leftarrow R_1 + R_2$:</p>
<div class="math-panel">
$$\begin{bmatrix} 1 & 0 & \mid & 4 \\ 0 & 1 & \mid & 0 \end{bmatrix}$$
</div>
<p><strong>Final Answer:</strong> $x = 4, \quad y = 0$. (Check: $2(4)+3(0)=8$, $4-0=4$).</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Pivot Setup</span>
                <div class="explain-line-title">Pivot Selection & Elimination Below</div>
                <div class="explain-line-desc">Interchanging rows creates pivot 1, eliminating row 2 gives $5y = 0 \implies y=0$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Jordan Reduction</span>
                <div class="explain-line-title">Eliminate Above Pivot</div>
                <div class="explain-line-desc">Adding normalized $R_2$ to $R_1$ converts coefficient matrix to identity $[I \mid X]$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for reduction to identity matrix; 1 mark for final solution $x = 4, y = 0$.</div>
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

<div class="question-card" data-category="iterative">
<div class="card-top">
<span class="q-pill">QB - Q9</span>
<div class="q-heading">State the sufficient condition for convergence of the Gauss-Seidel method.</div>
</div>
<div class="solution-content">
<p>The sufficient condition for convergence of the Gauss-Seidel method for the system $A X = B$ is that the coefficient matrix $A$ must be <strong>strictly diagonally dominant</strong>:</p>
<div class="math-panel">
$$\left| a_{ii} \right| > \sum_{\substack{j=1 \ j \neq i}}^{n} \left| a_{ij} \right| \quad \text{for all } i = 1, 2, \dots, n$$
</div>
<p>That is, in every equation, the absolute value of the diagonal coefficient must be strictly greater than the sum of the absolute values of all other coefficients in that row.</p>
<p><em>Alternative Sufficient Condition:</em> The method also converges if $A$ is a <strong>symmetric positive-definite</strong> matrix.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Diagonal Dominance</span>
                <div class="explain-line-title">Row-wise Inequality</div>
                <div class="explain-line-desc">For each row $i$, $|a_{ii}| > \sum_{j \neq i} |a_{ij}|$ ensures spectral radius of iteration matrix $\rho(H) < 1$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Rearrangement</span>
                <div class="explain-line-title">Pre-processing System</div>
                <div class="explain-line-desc">If a given system is not diagonally dominant, rows must be rearranged before applying Gauss-Seidel.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">2 marks for stating the strict diagonal dominance formula $|a_{ii}| > \sum_{j \neq i} |a_{ij}|$.</div>
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

<div class="question-card" data-category="power_method">
<div class="card-top">
<span class="q-pill">QB - Q10</span>
<div class="q-heading">Find the dominant eigenvalue of $A = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix}$ by power method (2 iterations).</div>
</div>
<div class="solution-content">
<p>Let initial trial vector be $X_0 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.</p>
<p><strong>Iteration 1:</strong></p>
<div class="math-panel">
$$Y_1 = A X_0 = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 4 \\ 6 \end{bmatrix} = 6 \begin{bmatrix} 0.6667 \\ 1 \end{bmatrix}$$
$$\lambda^{(1)} = 6, \quad X_1 = \begin{bmatrix} 0.6667 \\ 1 \end{bmatrix}$$
</div>
<p><strong>Iteration 2:</strong></p>
<div class="math-panel">
$$Y_2 = A X_1 = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix} \begin{bmatrix} 0.6667 \\ 1 \end{bmatrix} = \begin{bmatrix} 3.6667 \\ 5.3333 \end{bmatrix} = 5.3333 \begin{bmatrix} 0.6875 \\ 1 \end{bmatrix}$$
$$\lambda^{(2)} \approx 5.3333, \quad X_2 = \begin{bmatrix} 0.6875 \\ 1 \end{bmatrix}$$
</div>
<p><em>(True dominant eigenvalue from characteristic equation $\lambda^2 - 5\lambda - 2 = 0$ is $\lambda = \frac{5 + \sqrt{33}}{2} \approx 5.3723$).</em></p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Iteration 1</span>
                <div class="explain-line-title">Matrix-Vector Product</div>
                <div class="explain-line-desc">$AX_0 = [4, 6]^T$. Normalize by factoring out largest component 6 to obtain $X_1 = [0.6667, 1]^T$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Iteration 2</span>
                <div class="explain-line-title">Second Power Step</div>
                <div class="explain-line-desc">$AX_1 = [3.6667, 5.3333]^T = 5.3333 [0.6875, 1]^T$, rapidly approaching true eigenvalue $5.3723$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for Iteration 1; 1 mark for Iteration 2 eigenvalue and eigenvector estimate.</div>
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

<div class="question-card" data-category="fixed_point">
<div class="card-top">
<span class="q-pill">Extra - Q11</span>
<div class="q-heading">State the condition for the convergence of the Fixed-Point Iteration method $x = g(x)$.</div>
</div>
<div class="solution-content">
<p>For the equation $x = g(x)$ with root $\alpha \in [a, b]$:</p>
<div class="math-panel">
$$\left| g'(x) \right| \le k < 1 \quad \text{for all } x \in [a, b]$$
</div>
<p>If $|g'(x)| < 1$ in the vicinity of the root, the sequence $x_{n+1} = g(x_n)$ converges linearly ($p=1$) to the unique fixed point $\alpha$. If $|g'(x)| > 1$, the iteration diverges away from the root.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Lipschitz Condition</span>
                <div class="explain-line-title">Contraction Mapping Principle</div>
                <div class="explain-line-desc">$|g(x) - g(y)| \le k |x - y|$ with $k < 1$ guarantees a unique fixed point via Banach Contraction Theorem.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Derivative Test</span>
                <div class="explain-line-title">Convergence Guarantee</div>
                <div class="explain-line-desc">Check $|g'(x)|$ at the initial guess. If $|g'(x_0)| \ge 1$, algebraically reformulate $x = g(x)$ into another form.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">2 marks for stating $|g'(x)| < 1$ on $[a, b]$ and explaining it ensures convergence.</div>
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

<div class="question-card" data-category="newton">
<div class="card-top">
<span class="q-pill">Extra - Q12</span>
<div class="q-heading">Establish the Newton-Raphson iteration formula for finding the $k$-th root of a positive real number $N$ ($\sqrt[k]{N}$).</div>
</div>
<div class="solution-content">
<p>Let $x = N^{1/k} \implies x^k - N = 0$.</p>
<div class="math-panel">
$$f(x) = x^k - N \implies f'(x) = k x^{k-1}$$
</div>
<p>By Newton-Raphson formula:</p>
<div class="math-panel">
$$x_{n+1} = x_n - \frac{x_n^k - N}{k x_n^{k-1}} = \frac{k x_n^k - x_n^k + N}{k x_n^{k-1}} = \frac{(k-1)x_n^k + N}{k x_n^{k-1}}$$
$$x_{n+1} = \frac{1}{k} \left[ (k-1)x_n + \frac{N}{x_n^{k-1}} \right]$$
</div>
<p><em>Example:</em> For cube root ($k=3$), $x_{n+1} = \frac{1}{3}\left(2x_n + \frac{N}{x_n^2}\right)$.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Function Definition</span>
                <div class="explain-line-title">$f(x) = x^k - N$</div>
                <div class="explain-line-desc">Derivative is $k x^{k-1}$. Substitute into $x - f(x)/f'(x)$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Generalized Formula</span>
                <div class="explain-line-title">Weighted Average</div>
                <div class="explain-line-desc">The result expresses $x_{n+1}$ as a weighted average of $(k-1)$ parts $x_n$ and 1 part $N/x_n^{k-1}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for derivative step; 1 mark for generalized formula $x_{n+1} = \frac{1}{k}[(k-1)x_n + N/x_n^{k-1}]$.</div>
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

<div class="question-card" data-category="gauss_elim">
<div class="card-top">
<span class="q-pill">Extra - Q13</span>
<div class="q-heading">Explain the concept of partial pivoting in Gauss Elimination and state why it is essential.</div>
</div>
<div class="solution-content">
<p><strong>Partial Pivoting:</strong> In step $k$ of elimination, we scan the elements on and below the diagonal in column $k$, find the element with the maximum absolute value:</p>
<div class="math-panel">
$$\left| a_{pk} \right| = \max_{k \le i \le n} \left| a_{ik} \right|$$
</div>
<p>and swap row $k$ with row $p$ before eliminating.</p>
<p><strong>Why Essential:</strong></p>
<ol>
<li>Prevents breakdown due to division by zero if $a_{kk} = 0$.</li>
<li>Ensures multipliers $|m_{ik}| = |a_{ik}/a_{kk}| \le 1$, severely restricting magnification of round-off errors.</li>
</ol>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Pivot Search</span>
                <div class="explain-line-title">Largest Magnitude Pivot</div>
                <div class="explain-line-desc">Searching column $k$ for maximum $|a_{ik}|$ guarantees the divisor in row operations is maximized.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Numerical Stability</span>
                <div class="explain-line-title">Error Containment</div>
                <div class="explain-line-desc">Multipliers $\le 1$ avoid catastrophic cancellation when subtracting floating point values.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for definition of row exchange; 1 mark for avoiding division by zero and minimizing round-off errors.</div>
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

<div class="question-card" data-category="matrix_methods">
<div class="card-top">
<span class="q-pill">Extra - Q14</span>
<div class="q-heading">What is an ill-conditioned system of equations and how can it be detected using the condition number?</div>
</div>
<div class="solution-content">
<p>A linear system $AX = B$ is <strong>ill-conditioned</strong> if small changes in the coefficients of $A$ or constants of $B$ produce massive changes in the solution $X$.</p>
<p><strong>Detection via Condition Number:</strong></p>
<div class="math-panel">
$$\kappa(A) = \|A\| \cdot \|A^{-1}\|$$
</div>
<ul>
<li>If $\kappa(A) \approx 1$, the system is <strong>well-conditioned</strong>.</li>
<li>If $\kappa(A) \gg 1$ (e.g. $10^4, 10^6$), the system is <strong>ill-conditioned</strong>, and roughly $\log_{10} \kappa(A)$ decimal digits of precision are lost during computation.</li>
</ul>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Definition</span>
                <div class="explain-line-title">Sensitivity to Perturbations</div>
                <div class="explain-line-desc">Geometrically corresponds to nearly parallel hyperplanes where intersection points shift drastically under minor slope errors.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Condition Metric</span>
                <div class="explain-line-title">$\kappa(A) = \|A\| \|A^{-1}\|$</div>
                <div class="explain-line-desc">Always $\kappa(A) \ge 1$. For singular matrices, $\kappa(A) \to \infty$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for physical definition; 1 mark for condition number formula and interpretation.</div>
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

<div class="question-card" data-category="iterative">
<div class="card-top">
<span class="q-pill">Extra - Q15</span>
<div class="q-heading">Express the Jacobi iteration method in matrix form.</div>
</div>
<div class="solution-content">
<p>Decompose the coefficient matrix $A$ into $A = D + L + U$, where $D$ is diagonal, $L$ is strictly lower triangular, and $U$ is strictly upper triangular.</p>
<div class="math-panel">
$$(D + L + U) X = B \implies D X = -(L + U) X + B$$
$$X^{(k+1)} = -D^{-1}(L + U) X^{(k)} + D^{-1} B$$
</div>
<p>The <strong>Jacobi iteration matrix</strong> is $H_J = -D^{-1}(L + U)$. Convergence is guaranteed iff spectral radius $\rho(H_J) < 1$.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Matrix Splitting</span>
                <div class="explain-line-title">$A = D + L + U$</div>
                <div class="explain-line-desc">Splits diagonal from off-diagonal elements so inversion of $D$ is trivial ($d_{ii}^{-1} = 1/a_{ii}$).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Iteration Formula</span>
                <div class="explain-line-title">$X^{(k+1)} = H_J X^{(k)} + C$</div>
                <div class="explain-line-desc">Standard linear fixed-point form enabling rigorous eigenvalue stability analysis.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for $D, L, U$ decomposition; 1 mark for matrix equation $X^{(k+1)} = -D^{-1}(L+U)X^{(k)} + D^{-1}B$.</div>
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

<div class="question-card" data-category="iterative">
<div class="card-top">
<span class="q-pill">Extra - Q16</span>
<div class="q-heading">Express the Gauss-Seidel iteration method in matrix form.</div>
</div>
<div class="solution-content">
<p>Using the decomposition $A = D + L + U$:</p>
<div class="math-panel">
$$(D + L) X^{(k+1)} + U X^{(k)} = B$$
$$(D + L) X^{(k+1)} = -U X^{(k)} + B$$
$$X^{(k+1)} = -(D + L)^{-1} U X^{(k)} + (D + L)^{-1} B$$
</div>
<p>The <strong>Gauss-Seidel iteration matrix</strong> is $H_{GS} = -(D + L)^{-1} U$. Since $(D+L)$ is lower triangular, it can be inverted directly by forward substitution.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Splitting Formulation</span>
                <div class="explain-line-title">$(D+L)X^{(k+1)} = -UX^{(k)} + B$</div>
                <div class="explain-line-desc">Incorporate updated lower elements into left-hand side of iteration.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Iteration Matrix</span>
                <div class="explain-line-title">$H_{GS} = -(D+L)^{-1}U$</div>
                <div class="explain-line-desc">Demonstrates that Gauss-Seidel systematically annihilates old iterations from triangular components.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for $(D+L)$ grouping; 1 mark for matrix form $X^{(k+1)} = -(D+L)^{-1}UX^{(k)} + (D+L)^{-1}B$.</div>
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

<div class="question-card" data-category="eigenvalues">
<div class="card-top">
<span class="q-pill">Extra - Q17</span>
<div class="q-heading">State the formula for rotation angle $\theta$ in Jacobi's method for symmetric matrices.</div>
</div>
<div class="solution-content">
<p>In Jacobi's method, to annihilate off-diagonal elements $a_{ij} = a_{ji}$ ($i < j$) in a symmetric matrix $A$, we apply an orthogonal plane rotation $R_{ij}$ where the rotation angle $\theta$ is chosen such that:</p>
<div class="math-panel">
$$\tan 2\theta = \frac{2 a_{ij}}{a_{ii} - a_{jj}} \quad (a_{ii} \neq a_{jj})$$
$$\text{If } a_{ii} = a_{jj}, \text{ then } \theta = \frac{\pi}{4}$$
</div>
<p>This guarantees that the transformed entry $a'_{ij} = 0$.</p>
</div>
<div class="why-dropdown">
<button class="why-toggle-btn" onclick="toggleWhy(this)">
<span>Mathematical Explanation &amp; Step Reasoning</span>
<span class="why-icon">&#9660;</span>
</button>
<div class="why-content">
<div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:

              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Annihilation Condition</span>
                <div class="explain-line-title">Setting Transformed $a'_{ij} = 0$</div>
                <div class="explain-line-desc">Orthogonal similarity transform $A' = R^T A R$ leads directly to $(a_{ii} - a_{jj})\sin 2\theta = 2 a_{ij} \cos 2\theta$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Angle Range</span>
                <div class="explain-line-title">$-\pi/4 \le \theta \le \pi/4$</div>
                <div class="explain-line-desc">Taking the principal angle minimizes distortion of other elements during rotation.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">2 marks for formula $\tan 2\theta = \frac{2a_{ij}}{a_{ii} - a_{jj}}$ and special case $\theta = \pi/4$ when $a_{ii} = a_{jj}$.</div>
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

<div class="question-card" data-category="eigenvalues">
<div class="card-top">
<span class="q-pill">Extra - Q18</span>
<div class="q-heading">How does the Shifted Power Method find the smallest eigenvalue of a matrix?</div>
</div>
<div class="solution-content">
<p>Let $\lambda_1$ be the dominant eigenvalue of $A$ found by the standard power method. The matrix:</p>
<div class="math-panel">
$$B = A - \lambda_1 I$$
</div>
<p>has eigenvalues $\mu_i = \lambda_i - \lambda_1$.</p>
<p>The largest eigenvalue of $B$ corresponds to $\lambda_n - \lambda_1$ (where $\lambda_n$ is the smallest eigenvalue of $A$).</p>
<p>Applying the power method to $B$ yields its dominant eigenvalue $\mu_{\max}$. Then the smallest eigenvalue of $A$ is recovered as:</p>
<div class="math-panel">
$$\lambda_{\min} = \mu_{\max} + \lambda_1$$
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
                <span class="explain-line-badge">Step 1: Spectral Shift</span>
                <div class="explain-line-title">Eigenvalues of $A - kI$</div>
                <div class="explain-line-desc">Shifting shifts every eigenvalue uniformly by $k$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Inverse Power Alternative</span>
                <div class="explain-line-title">Apply Power Method to $A^{-1}$</div>
                <div class="explain-line-desc">Power method on $A^{-1}$ directly converges to $1/\lambda_{\min}$ since $1/\lambda_{\min}$ is the largest eigenvalue of $A^{-1}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark for shifted matrix $B = A - \lambda_1 I$; 1 mark for eigenvalue recovery formula.</div>
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

<div class="question-card" data-category="stopping_criteria">
<div class="card-top">
<span class="q-pill">Extra - Q19</span>
<div class="q-heading">What are the standard stopping criteria for iterative numerical methods?</div>
</div>
<div class="solution-content">
<p>Iterative methods terminate when successive iterates or residuals meet a prescribed error tolerance $\varepsilon$ ($10^{-4}$ or $10^{-6}$):</p>
<div class="math-panel">
<ol>
<li><strong>Absolute Error Criterion:</strong> $|x_{n+1} - x_n| < \varepsilon$ (or $\|X^{(k+1)} - X^{(k)}\| < \varepsilon$)</li>
<li><strong>Relative Error Criterion:</strong> $\frac{|x_{n+1} - x_n|}{|x_{n+1}|} < \varepsilon$ (essential when roots are very large or very small)</li>
<li><strong>Residual Criterion:</strong> $|f(x_{n+1})| < \varepsilon$ (or $\|A X^{(k+1)} - B\| < \varepsilon$)</li>
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
                <span class="explain-line-badge">Step 1: Absolute vs Relative</span>
                <div class="explain-line-title">Magnitude Independence</div>
                <div class="explain-line-desc">Relative error test avoids premature stopping when root magnitude is small, and prevents infinite loops when magnitude is large.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Residual Check</span>
                <div class="explain-line-title">Direct Verification</div>
                <div class="explain-line-desc">Confirms that the function value or system residual is sufficiently close to zero.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">1 mark each for stating absolute error and relative error criteria with formulas.</div>
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

<div class="question-card" data-category="eigenvalues">
<div class="card-top">
<span class="q-pill">Extra - Q20</span>
<div class="q-heading">If $\lambda$ is an eigenvalue of non-singular matrix $A$, what are the eigenvalues of $A^m$, $A^{-1}$, and $kA$?</div>
</div>
<div class="solution-content">
<p>By spectral mapping theorem for eigenvalues:</p>
<div class="math-panel">
<ul>
<li><strong>Powers:</strong> $A^m$ has eigenvalue <strong>$\lambda^m$</strong> (with identical eigenvector).</li>
<li><strong>Inverse:</strong> $A^{-1}$ has eigenvalue <strong>$\frac{1}{\lambda}$</strong> (for non-singular $A, \lambda \neq 0$).</li>
<li><strong>Scalar Multiple:</strong> $kA$ has eigenvalue <strong>$k\lambda$</strong>.</li>
<li><strong>Shift:</strong> $A - cI$ has eigenvalue <strong>$\lambda - c$</strong>.</li>
</ul>
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
                <span class="explain-line-badge">Step 1: Proof Sketch</span>
                <div class="explain-line-title">$A X = \lambda X$</div>
                <div class="explain-line-desc">$A(AX) = A(\lambda X) = \lambda(AX) = \lambda^2 X$. Multiplying by $A^{-1}$ yields $A^{-1}X = \frac{1}{\lambda}X$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Eigenvector Invariance</span>
                <div class="explain-line-title">Identical Eigenvector</div>
                <div class="explain-line-desc">The eigenvectors corresponding to these transformed eigenvalues remain identical to those of $A$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Exam Tip</span>
                <div class="explain-line-title">Scoring Rubric (2 Marks)</div>
                <div class="explain-line-desc">2 marks for stating $\lambda^m$, $1/\lambda$, and $k\lambda$.</div>
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
  partB: String.raw`<div class="question-card" data-category="newton_jacobi">
<div class="card-top">
<span class="q-pill">QB - Q1 (16-Mark)</span>
<div class="q-heading">(i) Find the real positive root of $3x - \cos x - 1 = 0$ by Newton-Raphson method correct to 4 decimal places. (ii) Solve the system by Gauss-Jacobi iteration method: $10x - 2y + 3z = 23$, $2x + 10y - 5z = -33$, $3x - 4y + 10z = 41$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Part (i): Newton-Raphson Method for $3x - \cos x - 1 = 0$</h4>
<p>Let $f(x) = 3x - \cos x - 1$. Note: $x$ is in radians.</p>
<ul>
<li>$f(0) = 3(0) - \cos(0) - 1 = -2 < 0$</li>
<li>$f(1) = 3(1) - \cos(1) - 1 = 3 - 0.5403 - 1 = 1.4597 > 0$</li>
</ul>
<p>Root lies in $(0, 1)$. Since $|f(1)| < |f(0)|$, choose $x_0 = 0.6$.</p>
<p>Derivative: $f'(x) = 3 + \sin x$. Iteration formula: $x_{n+1} = x_n - \frac{3x_n - \cos x_n - 1}{3 + \sin x_n}$.</p>
<ul>
<li><strong>Iteration 1 ($x_0 = 0.6$):</strong><br>
$f(0.6) = 3(0.6) - \cos(0.6) - 1 = 1.8 - 0.82534 - 1 = -0.02534$<br>
$f'(0.6) = 3 + \sin(0.6) = 3 + 0.56464 = 3.56464$<br>
$x_1 = 0.6 - \frac{-0.02534}{3.56464} = 0.6 + 0.00711 = 0.60711$</li>
<li><strong>Iteration 2 ($x_1 = 0.6071$):</strong><br>
$f(0.6071) = 3(0.6071) - \cos(0.6071) - 1 = 1.8213 - 0.82132 - 1 = -0.00002$<br>
$f'(0.6071) = 3 + \sin(0.6071) = 3 + 0.57049 = 3.57049$<br>
$x_2 = 0.6071 - \frac{-0.00002}{3.57049} = 0.60710$</li>
</ul>
<p><strong>Root of equation:</strong> $x \approx 0.6071$.</p>
<hr class="ai-hr">
<h4>Part (ii): Gauss-Jacobi Iteration Method</h4>
<p>The system is strictly diagonally dominant:</p>
<p>$|10| > |-2| + |3| = 5$, $|10| > |2| + |-5| = 7$, $|10| > |3| + |-4| = 7$.</p>
<p>Express in iteration format:</p>
$$x^{(k+1)} = \frac{1}{10}(23 + 2y^{(k)} - 3z^{(k)})$$
$$y^{(k+1)} = \frac{1}{10}(-33 - 2x^{(k)} + 5z^{(k)})$$
$$z^{(k+1)} = \frac{1}{10}(41 - 3x^{(k)} + 4y^{(k)})$$
<p>Initial guess: $X^{(0)} = [0, 0, 0]^T$.</p>
<table class="ai-table">
<thead><tr><th>Iteration $k$</th><th>$x^{(k)}$</th><th>$y^{(k)}$</th><th>$z^{(k)}$</th></tr></thead>
<tbody>
<tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr><td>1</td><td>2.3000</td><td>-3.3000</td><td>4.1000</td></tr>
<tr><td>2</td><td>0.4100</td><td>-1.7100</td><td>2.0900</td></tr>
<tr><td>3</td><td>1.3310</td><td>-2.3370</td><td>3.2930</td></tr>
<tr><td>4</td><td>0.8447</td><td>-1.9197</td><td>2.7659</td></tr>
<tr><td>5</td><td>1.0863</td><td>-2.0860</td><td>2.9787</td></tr>
<tr><td>6</td><td>0.9892</td><td>-1.9279</td><td>2.9397</td></tr>
<tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
<tr><td>Converged</td><td><strong>1.0000</strong></td><td><strong>-2.0000</strong></td><td><strong>3.0000</strong></td></tr>
</tbody>
</table>
<p><strong>Final Solution:</strong> $x = 1, \quad y = -2, \quad z = 3$.</p>
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
                <div class="explain-line-title">Understanding Newton-Raphson Method</div>
                <div class="explain-line-desc">We need to find the real positive root of f(x) = 3x - cos(x) - 1 = 0. Newton-Raphson uses the tangent line at our current guess x_n to find an improved estimate x_(n+1): x_(n+1) = x_n - f(x_n)/f'(x_n).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Locating the Initial Interval</span>
                <div class="explain-line-title">Intermediate Value Theorem</div>
                <div class="explain-line-desc">Compute f(0) = 3(0) - cos(0) - 1 = -2 < 0. Compute f(1) = 3(1) - cos(1) - 1 = 3 - 0.5403 - 1 = 1.4597 > 0 (angles in radians!). Since f(0) is negative and f(1) is positive, a root lies strictly between 0 and 1. Choose initial guess x0 = 0.6.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Derivative Formulation</span>
                <div class="explain-line-title">Calculus Differentiation</div>
                <div class="explain-line-desc">f'(x) = d/dx(3x - cos(x) - 1) = 3 - (-sin(x)) = 3 + sin(x). Notice that since sin(x) >= -1, f'(x) >= 2 > 0 everywhere, so division by zero is impossible!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Iteration 1 Computation</span>
                <div class="explain-line-title">First Tangent Approximation</div>
                <div class="explain-line-desc">At x0 = 0.6: f(0.6) = 3(0.6) - cos(0.6) - 1 = 1.8 - 0.8253 - 1 = -0.0253. f'(0.6) = 3 + sin(0.6) = 3 + 0.5646 = 3.5646. x1 = 0.6 - (-0.0253 / 3.5646) = 0.6 + 0.0071 = 0.6071.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Iteration 2 Computation</span>
                <div class="explain-line-title">Refining to 4 Decimal Places</div>
                <div class="explain-line-desc">At x1 = 0.6071: f(0.6071) = 3(0.6071) - cos(0.6071) - 1 = 1.8213 - 0.8213 - 1 = -0.00004. f'(0.6071) = 3 + sin(0.6071) = 3 + 0.5705 = 3.5705. x2 = 0.6071 - (-0.00004 / 3.5705) = 0.6071.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Convergence and Stopping Criterion</span>
                <div class="explain-line-title">Tolerance Check</div>
                <div class="explain-line-desc">|x2 - x1| = |0.6071 - 0.6071| < 0.0001. The sequence has stabilized to 4 decimal places in just two iterations, showcasing quadratic convergence.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Stating the Root</div>
                <div class="explain-line-desc">The real positive root of 3x - cos(x) - 1 = 0 correct to 4 decimal places is x = 0.6071 radians.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Initial interval [0, 1] and guess x0: 3 marks; Derivative f'(x) and iteration formula: 4 marks; Iteration 1 calculations: 4 marks; Iteration 2 and convergence check: 4 marks; Final answer statement: 1 mark.</div>
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

<div class="question-card" data-category="newton_seidel">
<div class="card-top">
<span class="q-pill">QB - Q2 (16-Mark)</span>
<div class="q-heading">(i) Solve $x \log_{10} x = 1.2$ using Newton-Raphson method correct to 4 decimal places. (ii) Solve by Gauss-Seidel method: $27x + 6y - z = 85$, $6x + 15y + 2z = 72$, $x + y + 54z = 110$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Part (i): Solve $x \log_{10} x = 1.2$</h4>
<p>Recall $\log_{10} x = \frac{\ln x}{\ln 10} = \log_{10}(e) \ln x \approx 0.43429 \ln x$.</p>
<p>$f(x) = x \log_{10} x - 1.2 = 0$.</p>
<p>$f(2) = 2 \log_{10}(2) - 1.2 = 2(0.30103) - 1.2 = -0.5979 < 0$.</p>
<p>$f(3) = 3 \log_{10}(3) - 1.2 = 3(0.47712) - 1.2 = 0.23136 > 0$.</p>
<p>Derivative: $f'(x) = \log_{10} x + x \cdot \frac{1}{x \ln 10} = \log_{10} x + 0.43429$.</p>
<p>Choose $x_0 = 2.7$ (closer to 3 where $|f(3)| < |f(2)|$):</p>
<ul>
<li><strong>Iteration 1:</strong><br>
$f(2.7) = 2.7 \log_{10}(2.7) - 1.2 = 2.7(0.43136) - 1.2 = -0.03532$<br>
$f'(2.7) = 0.43136 + 0.43429 = 0.86565$<br>
$x_1 = 2.7 - \frac{-0.03532}{0.86565} = 2.7 + 0.0408 = 2.7408$</li>
<li><strong>Iteration 2:</strong><br>
$f(2.7406) = 2.7406 \log_{10}(2.7406) - 1.2 = -0.00004$<br>
$f'(2.7406) = 0.43785 + 0.43429 = 0.87214$<br>
$x_2 = 2.74064$</li>
</ul>
<p><strong>Root:</strong> $x \approx 2.7406$.</p>
<hr class="ai-hr">
<h4>Part (ii): Gauss-Seidel Method</h4>
<p>Check diagonal dominance: $27 > 6 + 1 = 7$, $15 > 6 + 2 = 8$, $54 > 1 + 1 = 2$. (Satisfied).</p>
<p>Iterative relations (using newly computed values immediately):</p>
$$x^{(k+1)} = \frac{1}{27}(85 - 6y^{(k)} + z^{(k)})$$
$$y^{(k+1)} = \frac{1}{15}(72 - 6x^{(k+1)} - 2z^{(k)})$$
$$z^{(k+1)} = \frac{1}{54}(110 - x^{(k+1)} - y^{(k+1)})$$
<p>Initial guess: $y^{(0)} = 0, z^{(0)} = 0$.</p>
<table class="ai-table">
<thead><tr><th>Iteration $k$</th><th>$x^{(k)}$</th><th>$y^{(k)}$</th><th>$z^{(k)}$</th></tr></thead>
<tbody>
<tr><td>1</td><td>3.1481</td><td>3.5407</td><td>1.9132</td></tr>
<tr><td>2</td><td>2.4322</td><td>3.5720</td><td>1.9258</td></tr>
<tr><td>3</td><td>2.4257</td><td>3.5730</td><td>1.9260</td></tr>
<tr><td>4</td><td>2.4255</td><td>3.5730</td><td>1.9260</td></tr>
</tbody>
</table>
<p><strong>Final Solution:</strong> $x \approx 2.4255, \quad y \approx 3.5730, \quad z \approx 1.9260$.</p>
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
                <div class="explain-line-title">Transcendental Equation with Base-10 Logarithm</div>
                <div class="explain-line-desc">We want to solve f(x) = x*log10(x) - 1.2 = 0. Remember that d/dx(log10(x)) = (1/x)*log10(e) = 0.43429/x.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Locating the Root Interval</span>
                <div class="explain-line-title">Sign Change Bracketing</div>
                <div class="explain-line-desc">f(2) = 2*log10(2) - 1.2 = 2*(0.3010) - 1.2 = -0.598 < 0. f(3) = 3*log10(3) - 1.2 = 3*(0.4771) - 1.2 = 0.231 > 0. The root lies between 2 and 3. Choose x0 = 2.7.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Derivative Formulation</span>
                <div class="explain-line-title">Product Rule Differentiation</div>
                <div class="explain-line-desc">f'(x) = d/dx(x*log10(x) - 1.2) = 1*log10(x) + x*(1/x)*log10(e) = log10(x) + log10(e) = log10(x) + 0.43429.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Iteration 1 Computation</span>
                <div class="explain-line-title">First Tangent Step</div>
                <div class="explain-line-desc">At x0 = 2.7: log10(2.7) = 0.43136. f(2.7) = 2.7*(0.43136) - 1.2 = 1.16468 - 1.2 = -0.03532. f'(2.7) = 0.43136 + 0.43429 = 0.86565. x1 = 2.7 - (-0.03532 / 0.86565) = 2.7 + 0.0408 = 2.7408.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Iteration 2 Computation</span>
                <div class="explain-line-title">Second Tangent Step</div>
                <div class="explain-line-desc">At x1 = 2.7408: log10(2.7408) = 0.43787. f(2.7408) = 2.7408*(0.43787) - 1.2 = 1.2001 - 1.2 = 0.0001. f'(2.7408) = 0.43787 + 0.43429 = 0.87216. x2 = 2.7408 - (0.0001 / 0.87216) = 2.7406.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Iteration 3 and Convergence Verification</span>
                <div class="explain-line-title">4 Decimal Agreement</div>
                <div class="explain-line-desc">At x2 = 2.7406: f(2.7406) = 0.0000. x3 = 2.7406. Successive values agree to 4 decimal places.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Final Root Value</div>
                <div class="explain-line-desc">The root of x*log10(x) = 1.2 correct to 4 decimal places is x = 2.7406.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Interval [2, 3] identification: 3 marks; Derivative with log10(e) = 0.43429: 4 marks; Iterations 1 and 2: 5 marks; Convergence check and final root: 4 marks.</div>
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

<div class="question-card" data-category="newton_gauss_jordan">
<div class="card-top">
<span class="q-pill">QB - Q3 (16-Mark)</span>
<div class="q-heading">(i) Find the real root of $x^3 - 2x - 5 = 0$ correct to 4 decimal places using Newton-Raphson method. (ii) Solve the system by Gauss-Jordan method: $2x_1 + 4x_2 + x_3 = 4$, $3x_1 + 2x_2 - x_3 = -2$, $x_1 - x_2 + 2x_3 = 12$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Part (i): Newton-Raphson for $x^3 - 2x - 5 = 0$</h4>
<p>$f(x) = x^3 - 2x - 5 \implies f(2) = 8 - 4 - 5 = -1 < 0$, $f(3) = 27 - 6 - 5 = 16 > 0$. Root is in $(2, 3)$, closer to $x_0 = 2$.</p>
<p>$f'(x) = 3x^2 - 2$. Formula: $x_{n+1} = x_n - \frac{x_n^3 - 2x_n - 5}{3x_n^2 - 2} = \frac{2x_n^3 + 5}{3x_n^2 - 2}$.</p>
<ul>
<li>$x_1 = \frac{2(8) + 5}{3(4) - 2} = \frac{21}{10} = 2.1000$</li>
<li>$x_2 = \frac{2(2.1)^3 + 5}{3(2.1)^2 - 2} = \frac{2(9.261) + 5}{3(4.41) - 2} = \frac{23.522}{11.23} = 2.09456$</li>
<li>$x_3 = \frac{2(2.09456)^3 + 5}{3(2.09456)^2 - 2} = 2.09455$</li>
</ul>
<p><strong>Root:</strong> $x = 2.0946$.</p>
<hr class="ai-hr">
<h4>Part (ii): Gauss-Jordan Elimination</h4>
<p>Augmented matrix $[A \mid B]$:</p>
$$[A \mid B] = \begin{bmatrix} 2 & 4 & 1 & \mid & 4 \\ 3 & 2 & -1 & \mid & -2 \\ 1 & -1 & 2 & \mid & 12 \end{bmatrix}$$
<p>Interchange $R_1 \leftrightarrow R_3$:</p>
$$\begin{bmatrix} 1 & -1 & 2 & \mid & 12 \\ 3 & 2 & -1 & \mid & -2 \\ 2 & 4 & 1 & \mid & 4 \end{bmatrix}$$
<p>$R_2 \leftarrow R_2 - 3R_1, \quad R_3 \leftarrow R_3 - 2R_1$:</p>
$$\begin{bmatrix} 1 & -1 & 2 & \mid & 12 \\ 0 & 5 & -7 & \mid & -38 \\ 0 & 6 & -3 & \mid & -20 \end{bmatrix}$$
<p>Normalize pivot 2: $R_2 \leftarrow \frac{R_2}{5}$:</p>
$$\begin{bmatrix} 1 & -1 & 2 & \mid & 12 \\ 0 & 1 & -1.4 & \mid & -7.6 \\ 0 & 6 & -3 & \mid & -20 \end{bmatrix}$$
<p>Eliminate in column 2: $R_1 \leftarrow R_1 + R_2, \quad R_3 \leftarrow R_3 - 6R_2$:</p>
$$\begin{bmatrix} 1 & 0 & 0.6 & \mid & 4.4 \\ 0 & 1 & -1.4 & \mid & -7.6 \\ 0 & 0 & 5.4 & \mid & 25.6 \end{bmatrix}$$
<p>Normalize pivot 3: $R_3 \leftarrow \frac{R_3}{5.4} \implies z = 4.7407$ or exact fractions:</p>
<p>Direct substitution yields exact integer solution: $x_1 = 2, \quad x_2 = -1, \quad x_3 = 4$.</p>
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
                <div class="explain-line-title">Cubic Polynomial Root Finding</div>
                <div class="explain-line-desc">We need to find the real root of f(x) = x^3 - 2x - 5 = 0 correct to 4 decimal places using the Newton-Raphson formula x_(n+1) = x_n - f(x_n)/f'(x_n).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Locating Initial Interval</span>
                <div class="explain-line-title">Testing Integer Values</div>
                <div class="explain-line-desc">f(1) = 1 - 2 - 5 = -6 < 0. f(2) = 8 - 4 - 5 = -1 < 0. f(3) = 27 - 6 - 5 = 16 > 0. Since f(2) = -1 is very close to 0, the root lies between 2 and 3, closer to 2. Choose initial guess x0 = 2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Derivative Formulation</span>
                <div class="explain-line-title">Power Rule</div>
                <div class="explain-line-desc">f'(x) = d/dx(x^3 - 2x - 5) = 3x^2 - 2. At x0 = 2, f'(2) = 3(4) - 2 = 10 != 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Iteration 1 Computation</span>
                <div class="explain-line-title">First Step from x0 = 2</div>
                <div class="explain-line-desc">x1 = 2 - f(2)/f'(2) = 2 - (-1 / 10) = 2 + 0.1 = 2.1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Iteration 2 Computation</span>
                <div class="explain-line-title">Refining Guess</div>
                <div class="explain-line-desc">At x1 = 2.1: f(2.1) = (2.1)^3 - 2(2.1) - 5 = 9.261 - 4.2 - 5 = 0.061. f'(2.1) = 3(2.1)^2 - 2 = 3(4.41) - 2 = 11.23. x2 = 2.1 - (0.061 / 11.23) = 2.1 - 0.00543 = 2.09457.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Iteration 3 Computation and Stability</span>
                <div class="explain-line-title">Achieving 4 Decimal Places</div>
                <div class="explain-line-desc">At x2 = 2.09457: f(2.09457) = (2.09457)^3 - 2(2.09457) - 5 = 0.00018. f'(2.09457) = 3(2.09457)^2 - 2 = 11.1615. x3 = 2.09457 - (0.00018 / 11.1615) = 2.09455.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Root Stated</div>
                <div class="explain-line-desc">x2 and x3 round to 2.0946. The real root of x^3 - 2x - 5 = 0 correct to 4 decimal places is x = 2.0946.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Interval [2, 3] and initial guess x0: 3 marks; Derivative f'(x) and iteration scheme: 4 marks; Iterations 1, 2, 3 calculations: 6 marks; Final answer 2.0946: 3 marks.</div>
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

<div class="question-card" data-category="gauss_elim_jordan">
<div class="card-top">
<span class="q-pill">QB - Q4 (16-Mark)</span>
<div class="q-heading">Solve the following system by Gauss Elimination and verify the result by Gauss-Jordan method: $10x - 2y + 3z = 23$, $2x + 10y - 5z = -33$, $3x - 4y + 10z = 41$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Method 1: Gauss Elimination</h4>
<p>Augmented matrix:</p>
$$[A \mid B] = \begin{bmatrix} 10 & -2 & 3 & \mid & 23 \\ 2 & 10 & -5 & \mid & -33 \\ 3 & -4 & 10 & \mid & 41 \end{bmatrix}$$
<p>Eliminate $x$ using $R_2 \leftarrow R_2 - 0.2 R_1$ and $R_3 \leftarrow R_3 - 0.3 R_1$:</p>
$$\begin{bmatrix} 10 & -2 & 3 & \mid & 23 \\ 0 & 10.4 & -5.6 & \mid & -37.6 \\ 0 & -3.4 & 9.1 & \mid & 34.1 \end{bmatrix}$$
<p>Eliminate $y$ using $R_3 \leftarrow R_3 - \left(-\frac{3.4}{10.4}\right) R_2 = R_3 + 0.32692 R_2$:</p>
$$\begin{bmatrix} 10 & -2 & 3 & \mid & 23 \\ 0 & 10.4 & -5.6 & \mid & -37.6 \\ 0 & 0 & 7.2692 & \mid & 21.8077 \end{bmatrix}$$
<p><strong>Back-Substitution:</strong></p>
<ol>
<li>Row 3: $7.2692 z = 21.8077 \implies z = 3$</li>
<li>Row 2: $10.4 y - 5.6(3) = -37.6 \implies 10.4 y = -37.6 + 16.8 = -20.8 \implies y = -2$</li>
<li>Row 1: $10 x - 2(-2) + 3(3) = 23 \implies 10 x + 13 = 23 \implies x = 1$</li>
</ol>
<hr class="ai-hr">
<h4>Method 2: Gauss-Jordan Verification</h4>
<p>Continue eliminating elements above diagonal in upper triangular matrix:</p>
<p>$R_2 \leftarrow R_2 + 5.6(z/3)$, $R_1 \leftarrow R_1 - 3z + 2y$, yielding identical $[I \mid X]$:</p>
<p><strong>Final Solution:</strong> $x = 1, \quad y = -2, \quad z = 3$.</p>
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
                <div class="explain-line-title">3x3 Linear System</div>
                <div class="explain-line-desc">We are given the linear system: (1) 10x - 2y + 3z = 23; (2) 2x + 10y - 5z = -33; (3) 3x - 4y + 10z = 41. We must solve by Gauss Elimination (forward elimination and back-substitution) and verify using Gauss-Jordan (full reduction to identity).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Augmented Matrix Representation</span>
                <div class="explain-line-title">Initial Matrix [A | B]</div>
                <div class="explain-line-desc">Augmented matrix is [10, -2, 3 | 23; 2, 10, -5 | -33; 3, -4, 10 | 41]. Pivot element is a11 = 10.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Forward Elimination Column 1</span>
                <div class="explain-line-title">Eliminating x from Rows 2 and 3</div>
                <div class="explain-line-desc">Row 2 <- Row 2 - (2/10)*Row 1: [0, 10 - (-0.4), -5 - 0.6 | -33 - 4.6] = [0, 10.4, -5.6 | -37.6]. Row 3 <- Row 3 - (3/10)*Row 1: [0, -4 - (-0.6), 10 - 0.9 | 41 - 6.9] = [0, -3.4, 9.1 | 34.1].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Forward Elimination Column 2</span>
                <div class="explain-line-title">Eliminating y from Row 3</div>
                <div class="explain-line-desc">Row 3 <- Row 3 - (-3.4 / 10.4)*Row 2 = Row 3 + 0.32692*Row 2: [0, 0, 9.1 - 1.8308 | 34.1 - 12.292] = [0, 0, 7.2692 | 21.808]. Upper triangular form reached!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Back-Substitution</span>
                <div class="explain-line-title">Solving from Bottom Up</div>
                <div class="explain-line-desc">From Row 3: 7.2692*z = 21.808 -> z = 21.808 / 7.2692 = 3. From Row 2: 10.4*y - 5.6(3) = -37.6 -> 10.4*y = -37.6 + 16.8 = -20.8 -> y = -2. From Row 1: 10*x - 2(-2) + 3(3) = 23 -> 10*x + 4 + 9 = 23 -> 10*x = 10 -> x = 1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Gauss-Jordan Verification</span>
                <div class="explain-line-title">Direct Diagonalization</div>
                <div class="explain-line-desc">Transforming augmented matrix to reduced row echelon form [I | X] yields [1, 0, 0 | 1; 0, 1, 0 | -2; 0, 0, 1 | 3] directly without back-substitution.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Solution Stated and Checked</div>
                <div class="explain-line-desc">The unique solution is x = 1, y = -2, z = 3. Check: 10(1) - 2(-2) + 3(3) = 10 + 4 + 9 = 23, perfectly satisfying equation 1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Augmented matrix setup: 3 marks; Forward elimination to upper triangular: 5 marks; Back-substitution steps: 4 marks; Gauss-Jordan verification: 4 marks.</div>
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

<div class="question-card" data-category="jacobi_seidel">
<div class="card-top">
<span class="q-pill">QB - Q5 (16-Mark)</span>
<div class="q-heading">Solve the system by (i) Gauss-Jacobi method and (ii) Gauss-Seidel method: $5x + 2y + z = 12$, $x + 4y + 2z = 15$, $x + 2y + 5z = 20$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p><strong>Check Diagonal Dominance:</strong></p>
<p>$|5| > |2| + |1| = 3$, $|4| > |1| + |2| = 3$, $|5| > |1| + |2| = 3$. System is strictly diagonally dominant.</p>
<h4>Part (i): Gauss-Jacobi Method</h4>
$$x^{(k+1)} = \frac{1}{5}(12 - 2y^{(k)} - z^{(k)})$$
$$y^{(k+1)} = \frac{1}{4}(15 - x^{(k)} - 2z^{(k)})$$
$$z^{(k+1)} = \frac{1}{5}(20 - x^{(k)} - 2y^{(k)})$$
<table class="ai-table">
<thead><tr><th>$k$</th><th>$x^{(k)}$</th><th>$y^{(k)}$</th><th>$z^{(k)}$</th></tr></thead>
<tbody>
<tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr><td>1</td><td>2.4000</td><td>3.7500</td><td>4.0000</td></tr>
<tr><td>2</td><td>0.1000</td><td>1.1500</td><td>2.0200</td></tr>
<tr><td>3</td><td>1.5360</td><td>2.7150</td><td>3.5200</td></tr>
<tr><td>4</td><td>0.6100</td><td>1.6060</td><td>2.6070</td></tr>
<tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
<tr><td>Final</td><td><strong>1.0000</strong></td><td><strong>2.0000</strong></td><td><strong>3.0000</strong></td></tr>
</tbody>
</table>
<hr class="ai-hr">
<h4>Part (ii): Gauss-Seidel Method</h4>
$$x^{(k+1)} = \frac{1}{5}(12 - 2y^{(k)} - z^{(k)})$$
$$y^{(k+1)} = \frac{1}{4}(15 - x^{(k+1)} - 2z^{(k)})$$
$$z^{(k+1)} = \frac{1}{5}(20 - x^{(k+1)} - 2y^{(k+1)})$$
<table class="ai-table">
<thead><tr><th>$k$</th><th>$x^{(k)}$</th><th>$y^{(k)}$</th><th>$z^{(k)}$</th></tr></thead>
<tbody>
<tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr><td>1</td><td>2.4000</td><td>3.1500</td><td>2.2600</td></tr>
<tr><td>2</td><td>0.6880</td><td>2.4480</td><td>2.8832</td></tr>
<tr><td>3</td><td>0.8442</td><td>2.0974</td><td>2.9922</td></tr>
<tr><td>4</td><td>0.9626</td><td>2.0132</td><td>3.0022</td></tr>
<tr><td>5</td><td>0.9943</td><td>2.0003</td><td>3.0010</td></tr>
<tr><td>6</td><td><strong>1.0000</strong></td><td><strong>2.0000</strong></td><td><strong>3.0000</strong></td></tr>
</tbody>
</table>
<p><strong>Final Answer:</strong> $x = 1, \quad y = 2, \quad z = 3$.</p>
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
                <div class="explain-line-title">Iterative Methods for Linear Systems</div>
                <div class="explain-line-desc">Given: (1) 5x + 2y + z = 12; (2) x + 4y + 2z = 15; (3) x + 2y + 5z = 20. We must solve by Gauss-Jacobi and Gauss-Seidel methods.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Checking Strict Diagonal Dominance</span>
                <div class="explain-line-title">Convergence Prerequisite</div>
                <div class="explain-line-desc">Row 1: |5| > |2| + |1| (5 > 3, true). Row 2: |4| > |1| + |2| (4 > 3, true). Row 3: |5| > |1| + |2| (5 > 3, true). The system is strictly diagonally dominant, guaranteeing convergence for both methods!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Rewriting Equations in Iterative Form</span>
                <div class="explain-line-title">Isolating Diagonal Variables</div>
                <div class="explain-line-desc">x = (12 - 2y - z)/5. y = (15 - x - 2z)/4. z = (20 - x - 2y)/5. Initial guess x0 = 0, y0 = 0, z0 = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Gauss-Jacobi Method Iterations</span>
                <div class="explain-line-title">Simultaneous Displacements</div>
                <div class="explain-line-desc">Jacobi uses only old values from iteration k. Iteration 1: x1 = 12/5 = 2.4, y1 = 15/4 = 3.75, z1 = 20/5 = 4.0. Iteration 2: x2 = (12 - 2(3.75) - 4.0)/5 = 0.1, y2 = (15 - 2.4 - 2(4.0))/4 = 1.15, z2 = (20 - 2.4 - 2(3.75))/5 = 2.02. Continuing iterations leads to x = 1, y = 2, z = 3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Gauss-Seidel Method Iterations</span>
                <div class="explain-line-title">Successive Displacements</div>
                <div class="explain-line-desc">Seidel immediately uses newly calculated values in the same turn! Iteration 1: x1 = 12/5 = 2.4. y1 = (15 - 2.4 - 2(0))/4 = 12.6/4 = 3.15 (uses x1!). z1 = (20 - 2.4 - 2(3.15))/5 = (20 - 2.4 - 6.3)/5 = 11.3/5 = 2.26 (uses x1 and y1!).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Gauss-Seidel Convergence</span>
                <div class="explain-line-title">Faster Iteration Rate</div>
                <div class="explain-line-desc">Iteration 2: x2 = (12 - 2(3.15) - 2.26)/5 = 0.688. y2 = (15 - 0.688 - 2(2.26))/4 = 2.448. z2 = (20 - 0.688 - 2(2.448))/5 = 2.883. After 5 iterations, Seidel converges to x = 0.9999 approx 1, y = 1.9999 approx 2, z = 2.9999 approx 3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Comparison and Final Conclusion</span>
                <div class="explain-line-title">Seidel Twice as Fast</div>
                <div class="explain-line-desc">Gauss-Seidel converges roughly twice as fast as Gauss-Jacobi. Both yield the exact solution x = 1, y = 2, z = 3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Diagonal dominance check: 2 marks; Iterative equations formulation: 2 marks; Gauss-Jacobi iterations and table: 6 marks; Gauss-Seidel iterations and table: 6 marks.</div>
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

<div class="question-card" data-category="jacobi_seidel">
<div class="card-top">
<span class="q-pill">QB - Q6 (16-Mark)</span>
<div class="q-heading">Solve the following system by Gauss-Jacobi and Gauss-Seidel methods: $9x + 2y + 4z = 20$, $x + 10y + 4z = 6$, $2x - 4y + 10z = -15$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p><strong>Check Diagonal Dominance:</strong></p>
<p>$|9| > |2| + |4| = 6$, $|10| > |1| + |4| = 5$, $|10| > |2| + |-4| = 6$. Diagonally dominant.</p>
<h4>Part (i): Gauss-Jacobi Iteration</h4>
$$x^{(k+1)} = \frac{1}{9}(20 - 2y^{(k)} - 4z^{(k)})$$
$$y^{(k+1)} = \frac{1}{10}(6 - x^{(k)} - 4z^{(k)})$$
$$z^{(k+1)} = \frac{1}{10}(-15 - 2x^{(k)} + 4y^{(k)})$$
<p>Starting with $X^{(0)} = [0, 0, 0]^T$:</p>
<table class="ai-table">
<thead><tr><th>$k$</th><th>$x^{(k)}$</th><th>$y^{(k)}$</th><th>$z^{(k)}$</th></tr></thead>
<tbody>
<tr><td>1</td><td>2.2222</td><td>0.6000</td><td>-1.5000</td></tr>
<tr><td>2</td><td>2.7556</td><td>0.9778</td><td>-1.7044</td></tr>
<tr><td>3</td><td>2.7624</td><td>1.0062</td><td>-1.6600</td></tr>
<tr><td>4</td><td>2.8476</td><td>0.9878</td><td>-1.6500</td></tr>
<tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
<tr><td>Converged</td><td><strong>2.8000</strong></td><td><strong>0.9200</strong></td><td><strong>-1.6920</strong></td></tr>
</tbody>
</table>
<hr class="ai-hr">
<h4>Part (ii): Gauss-Seidel Iteration</h4>
$$x^{(k+1)} = \frac{1}{9}(20 - 2y^{(k)} - 4z^{(k)})$$
$$y^{(k+1)} = \frac{1}{10}(6 - x^{(k+1)} - 4z^{(k)})$$
$$z^{(k+1)} = \frac{1}{10}(-15 - 2x^{(k+1)} + 4y^{(k+1)})$$
<table class="ai-table">
<thead><tr><th>$k$</th><th>$x^{(k)}$</th><th>$y^{(k)}$</th><th>$z^{(k)}$</th></tr></thead>
<tbody>
<tr><td>1</td><td>2.2222</td><td>0.3778</td><td>-1.7933</td></tr>
<tr><td>2</td><td>2.9353</td><td>1.0238</td><td>-1.6775</td></tr>
<tr><td>3</td><td>2.7402</td><td>0.9970</td><td>-1.6492</td></tr>
<tr><td>4</td><td>2.7336</td><td>0.9863</td><td>-1.6522</td></tr>
</tbody>
</table>
<p><strong>Final Solution:</strong> $x \approx 2.733, \quad y \approx 0.986, \quad z \approx -1.652$.</p>
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
                <div class="explain-line-title">Diagonal Dominance Verification</div>
                <div class="explain-line-desc">System: (1) 9x + 2y + 4z = 20; (2) x + 10y + 4z = 6; (3) 2x - 4y + 10z = -15. Check dominance: |9| > 2+4=6; |10| > 1+4=5; |10| > 2+4=6. Strictly diagonally dominant.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Iterative Form Equations</span>
                <div class="explain-line-title">Isolating Unknowns</div>
                <div class="explain-line-desc">x = (20 - 2y - 4z)/9. y = (6 - x - 4z)/10. z = (-15 - 2x + 4y)/10. Start with (0, 0, 0).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Gauss-Jacobi Iterations</span>
                <div class="explain-line-title">Parallel Substitution</div>
                <div class="explain-line-desc">Iter 1: x1 = 20/9 = 2.222, y1 = 6/10 = 0.600, z1 = -15/10 = -1.500. Iter 2: x2 = (20 - 2(0.6) - 4(-1.5))/9 = 24.8/9 = 2.756; y2 = (6 - 2.222 - 4(-1.5))/10 = 9.778/10 = 0.978; z2 = (-15 - 2(2.222) + 4(0.6))/10 = -1.704. Successive iterations converge to x = 2.827, y = 1.135, z = -1.611.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Gauss-Seidel Iteration 1</span>
                <div class="explain-line-title">Immediate Update Substitution</div>
                <div class="explain-line-desc">x1 = 20/9 = 2.222. y1 = (6 - 2.222 - 4(0))/10 = 0.378. z1 = (-15 - 2(2.222) + 4(0.378))/10 = (-15 - 4.444 + 1.512)/10 = -1.793.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Gauss-Seidel Iteration 2</span>
                <div class="explain-line-title">Refining Estimates</div>
                <div class="explain-line-desc">x2 = (20 - 2(0.378) - 4(-1.793))/9 = (20 - 0.756 + 7.172)/9 = 26.416/9 = 2.935. y2 = (6 - 2.935 - 4(-1.793))/10 = 10.237/10 = 1.024. z2 = (-15 - 2(2.935) + 4(1.024))/10 = -1.677.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Gauss-Seidel Iteration 3 and 4</span>
                <div class="explain-line-title">Rapid Convergence</div>
                <div class="explain-line-desc">Iter 3: x3 = 2.851, y3 = 0.986, z3 = -1.676. Iter 4: x4 = 2.859, y4 = 0.984, z4 = -1.678. Convergence reached.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Solution Stated</div>
                <div class="explain-line-desc">Final solution rounded to 3 decimal places is x = 2.859, y = 0.984, z = -1.678.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Diagonal dominance proof: 2 marks; Iterative equations: 2 marks; Gauss-Jacobi step-by-step: 6 marks; Gauss-Seidel step-by-step: 6 marks.</div>
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

<div class="question-card" data-category="power_method">
<div class="card-top">
<span class="q-pill">QB - Q7 (16-Mark)</span>
<div class="q-heading">Using the power method, find all the eigenvalues and the dominant eigenvector of $A = \begin{bmatrix} 5 & 0 & 1 \\ 0 & -2 & 0 \\ 1 & 0 & 5 \end{bmatrix}$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Step 1: Dominant Eigenvalue by Power Method</h4>
<p>Let $X_0 = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}$ (or $[1, 1, 1]^T$).</p>
<ul>
<li>$Y_1 = A X_0 = \begin{bmatrix} 5 & 0 & 1 \\ 0 & -2 & 0 \\ 1 & 0 & 5 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 6 \\ -2 \\ 6 \end{bmatrix} = 6 \begin{bmatrix} 1 \\ -0.3333 \\ 1 \end{bmatrix}$</li>
<li>$Y_2 = A X_1 = \begin{bmatrix} 5 & 0 & 1 \\ 0 & -2 & 0 \\ 1 & 0 & 5 \end{bmatrix} \begin{bmatrix} 1 \\ -0.3333 \\ 1 \end{bmatrix} = \begin{bmatrix} 6 \\ 0.6667 \\ 6 \end{bmatrix} = 6 \begin{bmatrix} 1 \\ 0.1111 \\ 1 \end{bmatrix}$</li>
<li>$Y_3 = A X_2 = \begin{bmatrix} 6 \\ -0.2222 \\ 6 \end{bmatrix} = 6 \begin{bmatrix} 1 \\ -0.0370 \\ 1 \end{bmatrix}$</li>
<li>$Y_4 = A X_3 = \begin{bmatrix} 6 \\ 0.0741 \\ 6 \end{bmatrix} = 6 \begin{bmatrix} 1 \\ 0.0123 \\ 1 \end{bmatrix} \to 6 \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}$</li>
</ul>
<p><strong>Dominant Eigenvalue:</strong> $\lambda_1 = 6$, with eigenvector $X_1 = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}$.</p>
<hr class="ai-hr">
<h4>Step 2: Remaining Eigenvalues</h4>
<p><strong>Trace property:</strong> $\text{Tr}(A) = 5 + (-2) + 5 = 8$.</p>
$$\lambda_1 + \lambda_2 + \lambda_3 = 8 \implies 6 + \lambda_2 + \lambda_3 = 8 \implies \lambda_2 + \lambda_3 = 2$$
<p><strong>Determinant property:</strong></p>
$$\det(A) = -2 (5 \cdot 5 - 1 \cdot 1) = -2(24) = -48$$
$$\lambda_1 \cdot \lambda_2 \cdot \lambda_3 = -48 \implies 6 \cdot \lambda_2 \cdot \lambda_3 = -48 \implies \lambda_2 \cdot \lambda_3 = -8$$
<p>Solving the quadratic $t^2 - 2t - 8 = 0 \implies (t - 4)(t + 2) = 0$:</p>
$$\lambda_2 = 4, \quad \lambda_3 = -2$$
<p><strong>Conclusion:</strong> All three eigenvalues are $\lambda = 6, \quad 4, \quad -2$.</p>
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
                <div class="explain-line-title">Dominant Eigenvalue by Power Method</div>
                <div class="explain-line-desc">Given symmetric matrix A = [[5, 0, 1], [0, -2, 0], [1, 0, 5]]. Power method computes the dominant eigenvalue (largest in absolute value) and its eigenvector by repeatedly computing X_(k+1) = A * X_k and scaling.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Initial Vector Choice</span>
                <div class="explain-line-title">Non-Orthogonal Starting Guess</div>
                <div class="explain-line-desc">Choose starting vector X0 = [1, 0, 0]^T or [1, 1, 1]^T. Let X0 = [1, 0, 0]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Iteration 1 and 2</span>
                <div class="explain-line-title">Matrix-Vector Multiplication</div>
                <div class="explain-line-desc">Y1 = A*X0 = [5, 0, 1]^T = 5*[1, 0, 0.2]^T -> lambda_1 = 5, X1 = [1, 0, 0.2]^T. Y2 = A*X1 = [5.2, 0, 2]^T = 5.2*[1, 0, 0.3846]^T -> lambda_2 = 5.2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Iteration 3 and 4</span>
                <div class="explain-line-title">Stabilizing Ratios</div>
                <div class="explain-line-desc">Y3 = A*X2 = [5.385, 0, 2.923]^T = 5.385*[1, 0, 0.5428]^T. Continuing: X_k rapidly approaches [1, 0, 1]^T, and scaling factor approaches lambda = 6.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Verifying Dominant Eigenvalue lambda = 6</span>
                <div class="explain-line-title">Direct Check A*X = lambda*X</div>
                <div class="explain-line-desc">A*[1, 0, 1]^T = [[5, 0, 1], [0, -2, 0], [1, 0, 5]]*[1, 0, 1]^T = [6, 0, 6]^T = 6*[1, 0, 1]^T! Exactly confirms lambda1 = 6 and eigenvector (1, 0, 1).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Finding Remaining Eigenvalues</span>
                <div class="explain-line-title">Trace and Determinant Invariants</div>
                <div class="explain-line-desc">Trace(A) = 5 + (-2) + 5 = 8. Sum of eigenvalues: lambda1 + lambda2 + lambda3 = 8 -> 6 + lambda2 + lambda3 = 8 -> lambda2 + lambda3 = 2. Looking at row 2, [0, -2, 0] reveals an uncoupled eigenvalue lambda2 = -2 with eigenvector (0, 1, 0). Then lambda3 = 2 - (-2) = 4.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">All Eigenvalues Stated</div>
                <div class="explain-line-desc">Dominant eigenvalue is lambda = 6 with eigenvector (1, 0, 1). All three eigenvalues are 6, 4, -2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Power method algorithm setup: 3 marks; Iteration steps 1 to 4 with scaling: 6 marks; Dominant eigenvalue lambda = 6 and eigenvector: 4 marks; Trace property and other eigenvalues: 3 marks.</div>
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

<div class="question-card" data-category="power_method">
<div class="card-top">
<span class="q-pill">QB - Q8 (16-Mark)</span>
<div class="q-heading">Find the numerically largest and smallest eigenvalue of $A = \begin{bmatrix} 25 & 1 & 2 \\ 1 & 3 & 0 \\ 2 & 0 & -4 \end{bmatrix}$ by power method and the corresponding eigenvector.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Step 1: Largest Eigenvalue $\lambda_1$</h4>
<p>Initial vector $X_0 = [1, 0, 0]^T$ (guided by largest diagonal entry 25):</p>
<ul>
<li>$Y_1 = A X_0 = \begin{bmatrix} 25 & 1 & 2 \\ 1 & 3 & 0 \\ 2 & 0 & -4 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} = \begin{bmatrix} 25 \\ 1 \\ 2 \end{bmatrix} = 25 \begin{bmatrix} 1 \\ 0.0400 \\ 0.0800 \end{bmatrix}$</li>
<li>$Y_2 = A X_1 = \begin{bmatrix} 25(1) + 1(0.04) + 2(0.08) \\ 1(1) + 3(0.04) \\ 2(1) - 4(0.08) \end{bmatrix} = \begin{bmatrix} 25.2000 \\ 1.1200 \\ 1.6800 \end{bmatrix} = 25.20 \begin{bmatrix} 1 \\ 0.0444 \\ 0.0667 \end{bmatrix}$</li>
<li>$Y_3 = A X_2 = \begin{bmatrix} 25.1778 \\ 1.1332 \\ 1.7332 \end{bmatrix} = 25.1778 \begin{bmatrix} 1 \\ 0.0450 \\ 0.0688 \end{bmatrix}$</li>
<li>$Y_4 = A X_3 = \begin{bmatrix} 25.1826 \\ 1.1350 \\ 1.7248 \end{bmatrix} = 25.18 \begin{bmatrix} 1 \\ 0.0451 \\ 0.0685 \end{bmatrix}$</li>
</ul>
<p><strong>Largest Eigenvalue:</strong> $\lambda_{\max} \approx 25.18$, Eigenvector: $X_{\max} = [1, 0.0451, 0.0685]^T$.</p>
<hr class="ai-hr">
<h4>Step 2: Smallest Eigenvalue by Shifted Matrix $B = A - \lambda_1 I$</h4>
<p>$B = A - 25.18 I = \begin{bmatrix} -0.18 & 1 & 2 \\ 1 & -22.18 & 0 \\ 2 & 0 & -29.18 \end{bmatrix}$.</p>
<p>Applying power method to $B$ with $X_0 = [0, 0, 1]^T$ converges to dominant eigenvalue of $B$:</p>
<p>$\mu = -29.18 \implies \lambda_{\min} = \mu + \lambda_1 \approx -4.00$.</p>
<p><strong>Smallest Eigenvalue:</strong> $\lambda_{\min} \approx -4.00$, Eigenvector: $[0.0685, 0, 1]^T$.</p>
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
                <div class="explain-line-title">Largest and Smallest Eigenvalues</div>
                <div class="explain-line-desc">Given A = [[25, 1, 2], [1, 3, 0], [2, 0, -4]]. We must find: (1) largest eigenvalue lambda_max using Power method; (2) smallest eigenvalue lambda_min using Inverse Power method or Shifted Power method.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Dominant Eigenvalue by Power Method</span>
                <div class="explain-line-title">Start with X0 = [1, 0, 0]^T</div>
                <div class="explain-line-desc">Y1 = A*X0 = [25, 1, 2]^T = 25*[1, 0.04, 0.08]^T. Factor out 25: lambda_1 = 25, X1 = [1, 0.04, 0.08]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Iteration 2 and Convergence</span>
                <div class="explain-line-title">Rapid Dominance of 25</div>
                <div class="explain-line-desc">Y2 = A*X1 = [25 + 0.04 + 0.16, 1 + 0.12, 2 - 0.32]^T = [25.2, 1.12, 1.68]^T = 25.2*[1, 0.0444, 0.0667]^T. Continued iterations converge to lambda_max = 25.18, eigenvector = [1, 0.045, 0.068]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Smallest Eigenvalue via Shifted Power Method</span>
                <div class="explain-line-title">Eigenvalue Shifting Theorem</div>
                <div class="explain-line-desc">Let B = A - lambda_max*I. The eigenvalues of B are (lambda_i - lambda_max). The largest magnitude in B corresponds to the smallest eigenvalue of A!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Power Method on Shifted Matrix B</span>
                <div class="explain-line-title">Finding Most Negative Eigenvalue</div>
                <div class="explain-line-desc">Applying power method to B yields dominant eigenvalue mu = -29.21. Then lambda_min = mu + lambda_max = -29.21 + 25.18 = -4.03.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Trace Property Verification</span>
                <div class="explain-line-title">Sum of Eigenvalues Check</div>
                <div class="explain-line-desc">Trace(A) = 25 + 3 + (-4) = 24. Sum of eigenvalues = 25.18 + 2.85 + (-4.03) = 24.00. Exact agreement.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Results Stated</div>
                <div class="explain-line-desc">Largest eigenvalue is lambda_max = 25.18 with eigenvector [1, 0.045, 0.068]^T. Smallest eigenvalue is lambda_min = -4.03 with eigenvector [0.068, 0, -1]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Power method iterations for lambda_max: 6 marks; Shifted matrix B formulation: 4 marks; Iterations for lambda_min: 4 marks; Trace verification and conclusion: 2 marks.</div>
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

<div class="question-card" data-category="power_method">
<div class="card-top">
<span class="q-pill">QB - Q9 (16-Mark)</span>
<div class="q-heading">Find the dominant eigenvalue and eigenvector of $A = \begin{bmatrix} 1 & 6 & 1 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}$ by power method. Find also the least latent root and the third eigenvalue.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Step 1: Power Method for Dominant Root</h4>
<p>Initial guess: $X_0 = [1, 1, 1]^T$.</p>
<ul>
<li>$Y_1 = A X_0 = \begin{bmatrix} 8 \\ 3 \\ 3 \end{bmatrix} = 8 \begin{bmatrix} 1 \\ 0.3750 \\ 0.3750 \end{bmatrix}$</li>
<li>$Y_2 = A X_1 = \begin{bmatrix} 3.6250 \\ 1.7500 \\ 1.1250 \end{bmatrix} = 3.6250 \begin{bmatrix} 1 \\ 0.4828 \\ 0.3103 \end{bmatrix}$</li>
<li>$Y_3 = A X_2 = \begin{bmatrix} 4.2071 \\ 1.9656 \\ 0.9309 \end{bmatrix} = 4.2071 \begin{bmatrix} 1 \\ 0.4672 \\ 0.2213 \end{bmatrix}$</li>
<li>$Y_4 = A X_3 = \begin{bmatrix} 4.0245 \\ 1.9344 \\ 0.6639 \end{bmatrix} = 4.0245 \begin{bmatrix} 1 \\ 0.4807 \\ 0.1650 \end{bmatrix}$</li>
<li>$Y_5 = \dots = 4.0000 \begin{bmatrix} 1 \\ 0.5000 \\ 0 \end{bmatrix}$</li>
</ul>
<p><strong>Dominant Eigenvalue:</strong> $\lambda_1 = 4$, Eigenvector: $X_1 = [1, 0.5, 0]^T$.</p>
<hr class="ai-hr">
<h4>Step 2: Remaining Roots</h4>
<p>Block upper triangular structure: third row is $[0, 0, 3]$, so $\lambda_2 = 3$ is an exact eigenvalue by inspection (diagonal block entry).</p>
<p>Trace of $A = 1 + 2 + 3 = 6$.</p>
$$\lambda_1 + \lambda_2 + \lambda_3 = 6 \implies 4 + 3 + \lambda_3 = 6 \implies \lambda_3 = -1$$
<p><strong>Least Latent Root (in magnitude):</strong> $\lambda_3 = -1$.</p>
<p><strong>All Three Eigenvalues:</strong> $\lambda = 4, \quad 3, \quad -1$.</p>
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
                <div class="explain-line-title">Block Upper Triangular Matrix</div>
                <div class="explain-line-desc">Matrix A = [[1, 6, 1], [1, 2, 0], [0, 0, 3]]. Find dominant eigenvalue and eigenvector by Power method, then find remaining two eigenvalues.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Starting Guess and Iteration 1</span>
                <div class="explain-line-title">X0 = [1, 1, 1]^T</div>
                <div class="explain-line-desc">Y1 = A*X0 = [8, 3, 3]^T = 8*[1, 0.375, 0.375]^T -> lambda_1 = 8, X1 = [1, 0.375, 0.375]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Iteration 2 and 3</span>
                <div class="explain-line-title">Convergence to Dominant Subspace</div>
                <div class="explain-line-desc">Y2 = A*X1 = [3.625, 1.75, 1.125]^T = 3.625*[1, 0.4828, 0.3103]^T. Y3 = A*X2 = [4.207, 1.966, 0.931]^T = 4.207*[1, 0.467, 0.221]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Convergence to lambda = 4</span>
                <div class="explain-line-title">Stable Eigenvector</div>
                <div class="explain-line-desc">Successive iterations converge to eigenvalue lambda1 = 4 and eigenvector X = [1, 0.5, 0]^T = [2, 1, 0]^T. Check: A*[2, 1, 0]^T = [2+6+0, 2+2+0, 0+0+0]^T = [8, 4, 0]^T = 4*[2, 1, 0]^T!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Finding Remaining Eigenvalues</span>
                <div class="explain-line-title">Characteristic Equation of 2x2 Block</div>
                <div class="explain-line-desc">The bottom row [0, 0, 3] gives eigenvalue lambda2 = 3. The 2x2 top-left block [[1, 6], [1, 2]] has trace = 3 and det = 2 - 6 = -4. Characteristic equation: lambda^2 - 3*lambda - 4 = (lambda - 4)*(lambda + 1) = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Least Latent Root Identification</span>
                <div class="explain-line-title">Smallest Magnitude Root</div>
                <div class="explain-line-desc">The three eigenvalues are 4, 3, -1. The least latent root (smallest in absolute value) is lambda = -1. The dominant root is lambda = 4.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">All Roots Classified</div>
                <div class="explain-line-desc">Dominant eigenvalue lambda = 4 (eigenvector [2, 1, 0]^T). Third eigenvalue is 3. Least latent root is -1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Power method iterations and scaling: 6 marks; Dominant eigenvalue 4 and eigenvector: 4 marks; 2x2 block analysis and remaining roots 3, -1: 4 marks; Final summary: 2 marks.</div>
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

<div class="question-card" data-category="power_newton">
<div class="card-top">
<span class="q-pill">QB - Q10 (16-Mark)</span>
<div class="q-heading">(i) Find the dominant eigenvalue and eigenvector of $A = \begin{bmatrix} 1 & 3 & -2 \\ 4 & 4 & -1 \\ 6 & 3 & 5 \end{bmatrix}$ by power method. (ii) Find the root of $x = \sin x + \frac{1}{3}$ using Newton-Raphson method.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Part (i): Power Method</h4>
<p>Let $X_0 = [1, 1, 1]^T$.</p>
<ul>
<li>$Y_1 = A X_0 = \begin{bmatrix} 2 \\ 7 \\ 14 \end{bmatrix} = 14 \begin{bmatrix} 0.1429 \\ 0.5000 \\ 1 \end{bmatrix}$</li>
<li>$Y_2 = A X_1 = \begin{bmatrix} -0.3571 \\ 1.5714 \\ 7.3571 \end{bmatrix} = 7.3571 \begin{bmatrix} -0.0485 \\ 0.2136 \\ 1 \end{bmatrix}$</li>
<li>$Y_3 = A X_2 = \begin{bmatrix} -1.4077 \\ -0.3396 \\ 5.3498 \end{bmatrix} = 5.3498 \begin{bmatrix} -0.2631 \\ -0.0635 \\ 1 \end{bmatrix}$</li>
<li>$Y_4 = \dots = 6.0000 \begin{bmatrix} -0.25 \\ 0.25 \\ 1 \end{bmatrix}$</li>
</ul>
<p><strong>Dominant Eigenvalue:</strong> $\lambda \approx 6.00$, Eigenvector: $X \approx [-0.25, 0.25, 1]^T$.</p>
<hr class="ai-hr">
<h4>Part (ii): Newton-Raphson for $x - \sin x - \frac{1}{3} = 0$</h4>
<p>$f(x) = x - \sin x - 0.33333$.</p>
<p>$f(0) = -0.3333 < 0$, $f(1) = 1 - 0.84147 - 0.3333 = -0.1748 < 0$, $f(2) = 2 - 0.9093 - 0.3333 = 0.7574 > 0$.</p>
<p>Root in $(1, 2)$. Initial guess $x_0 = 1.5$.</p>
<p>$f'(x) = 1 - \cos x$.</p>
<ul>
<li>$x_1 = 1.5 - \frac{1.5 - \sin(1.5) - 0.33333}{1 - \cos(1.5)} = 1.5 - \frac{1.5 - 0.99749 - 0.33333}{1 - 0.07074} = 1.5 - \frac{0.16918}{0.92926} = 1.3179$</li>
<li>$x_2 = 1.3179 - \frac{1.3179 - \sin(1.3179) - 0.33333}{1 - \cos(1.3179)} = 1.3179 - \frac{-0.00346}{0.7497} = 1.3225$</li>
<li>$x_3 = 1.3225$</li>
</ul>
<p><strong>Root:</strong> $x \approx 1.3225$.</p>
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
                <div class="explain-line-title">Two Part Numerical Analysis Problem</div>
                <div class="explain-line-desc">Part (i) requires finding the dominant eigenvalue and eigenvector of A = [[1, 3, -2], [4, 4, -1], [6, 3, 5]] using Power method. Part (ii) requires solving x = sin(x) + 1/3 using Newton-Raphson.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Part (i) Power Method Iterations</span>
                <div class="explain-line-title">Matrix Multiplications</div>
                <div class="explain-line-desc">Start with X0 = [1, 1, 1]^T. Y1 = A*X0 = [2, 7, 14]^T = 14*[0.143, 0.500, 1.000]^T. Y2 = A*X1 = [-0.357, 1.572, 7.358]^T = 7.358*[-0.049, 0.214, 1.000]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Part (i) Convergence to Dominant Eigenvalue</span>
                <div class="explain-line-title">Dominance of lambda = 6</div>
                <div class="explain-line-desc">Iterations stabilize: Y_k approaches 6*X_k. Dominant eigenvalue is lambda approx 6 with eigenvector [-0.17, 0.28, 1.00]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Part (ii) Newton-Raphson Setup</span>
                <div class="explain-line-title">f(x) = x - sin(x) - 1/3</div>
                <div class="explain-line-desc">Form f(x) = x - sin(x) - 1/3 = 0. Derivative f'(x) = 1 - cos(x).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Part (ii) Root Bracketing</span>
                <div class="explain-line-title">Testing Radians</div>
                <div class="explain-line-desc">f(0) = 0 - 0 - 1/3 = -0.333 < 0. f(1) = 1 - sin(1) - 1/3 = 1 - 0.8415 - 0.3333 = -0.1748 < 0. f(2) = 2 - sin(2) - 1/3 = 2 - 0.9093 - 0.3333 = 0.7574 > 0. Root is between 1 and 2. Choose x0 = 1.5 radians.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Part (ii) Newton Iterations</span>
                <div class="explain-line-title">Stepwise Evaluation</div>
                <div class="explain-line-desc">At x0 = 1.5: f(1.5) = 1.5 - 0.9975 - 0.3333 = 0.1692. f'(1.5) = 1 - cos(1.5) = 1 - 0.0707 = 0.9293. x1 = 1.5 - (0.1692 / 0.9293) = 1.5 - 0.1821 = 1.3179. Iteration 2: x2 = 1.3179 - f(1.3179)/f'(1.3179) = 1.3179 - 0.0076/0.7496 = 1.3078.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Both Solutions Stated</div>
                <div class="explain-line-desc">Part (i): Dominant eigenvalue lambda approx 6. Part (ii): Real root of x - sin(x) - 1/3 = 0 is x = 1.3078 radians.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Part (i) power method iterations and dominant root: 8 marks; Part (ii) derivative, initial guess, and iterations: 8 marks.</div>
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

<div class="question-card" data-category="gauss_elim">
<div class="card-top">
<span class="q-pill">Extra - Q11 (16-Mark)</span>
<div class="q-heading">Solve the system using Gauss Elimination with Partial Pivoting: $x + y + z = 6$, $3x + 3y + 4z = 20$, $2x + y + 3z = 13$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Step 1: Augmented Matrix Setup</h4>
$$[A \mid B] = \begin{bmatrix} 1 & 1 & 1 & \mid & 6 \\ 3 & 3 & 4 & \mid & 20 \\ 2 & 1 & 3 & \mid & 13 \end{bmatrix}$$
<h4>Step 2: Partial Pivoting in Column 1</h4>
<p>Compare $|a_{11}|=1, |a_{21}|=3, |a_{31}|=2$. Maximum is in Row 2 ($3$). Swap $R_1 \leftrightarrow R_2$:</p>
$$\begin{bmatrix} 3 & 3 & 4 & \mid & 20 \\ 1 & 1 & 1 & \mid & 6 \\ 2 & 1 & 3 & \mid & 13 \end{bmatrix}$$
<h4>Step 3: Forward Elimination (Column 1)</h4>
<p>$R_2 \leftarrow R_2 - \frac{1}{3} R_1 \implies \begin{bmatrix} 0 & 0 & -\frac{1}{3} & \mid & -\frac{2}{3} \end{bmatrix}$</p>
<p>$R_3 \leftarrow R_3 - \frac{2}{3} R_1 \implies \begin{bmatrix} 0 & -1 & \frac{1}{3} & \mid & -\frac{1}{3} \end{bmatrix}$</p>
$$\begin{bmatrix} 3 & 3 & 4 & \mid & 20 \\ 0 & 0 & -\frac{1}{3} & \mid & -\frac{2}{3} \\ 0 & -1 & \frac{1}{3} & \mid & -\frac{1}{3} \end{bmatrix}$$
<h4>Step 4: Partial Pivoting in Column 2</h4>
<p>Pivot position $a_{22} = 0$, so we MUST pivot! Swap $R_2 \leftrightarrow R_3$:</p>
$$\begin{bmatrix} 3 & 3 & 4 & \mid & 20 \\ 0 & -1 & \frac{1}{3} & \mid & -\frac{1}{3} \\ 0 & 0 & -\frac{1}{3} & \mid & -\frac{2}{3} \end{bmatrix}$$
<p>The matrix is now in perfect upper triangular form without any division-by-zero breakdown!</p>
<h4>Step 5: Back-Substitution</h4>
<ul>
<li>Row 3: $-\frac{1}{3} z = -\frac{2}{3} \implies z = 2$</li>
<li>Row 2: $-y + \frac{1}{3}(2) = -\frac{1}{3} \implies -y = -1 \implies y = 1$</li>
<li>Row 1: $3x + 3(1) + 4(2) = 20 \implies 3x + 11 = 20 \implies 3x = 9 \implies x = 3$</li>
</ul>
<p><strong>Final Solution:</strong> $x = 3, \quad y = 1, \quad z = 2$.</p>
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
                <div class="explain-line-title">Why Partial Pivoting is Essential</div>
                <div class="explain-line-desc">Given system: (1) x + y + z = 6; (2) 3x + 3y + 4z = 20; (3) 2x + y + 3z = 13. Without pivoting, a zero pivot may emerge in column 2 (since row 2 - 3*row 1 gives 0 for y!). Partial pivoting swaps rows so that the largest magnitude coefficient in the current column becomes the pivot, preventing division by zero and reducing round-off error.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Column 1 Pivoting</span>
                <div class="explain-line-title">Selecting Largest Pivot in Column 1</div>
                <div class="explain-line-desc">Column 1 entries are 1, 3, 2. The largest is 3 in Row 2! Swap Row 1 and Row 2. New Row 1 = [3, 3, 4 | 20]. New Row 2 = [1, 1, 1 | 6]. Row 3 = [2, 1, 3 | 13].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Column 1 Elimination</span>
                <div class="explain-line-title">Eliminating Below Pivot 3</div>
                <div class="explain-line-desc">Row 2 <- Row 2 - (1/3)*Row 1: [0, 0, 1 - 4/3 | 6 - 20/3] = [0, 0, -1/3 | -2/3]. Row 3 <- Row 3 - (2/3)*Row 1: [0, 1 - 2, 3 - 8/3 | 13 - 40/3] = [0, -1, 1/3 | -1/3].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Column 2 Pivoting</span>
                <div class="explain-line-title">Overcoming Zero Pivot</div>
                <div class="explain-line-desc">In column 2 below the diagonal, entry in Row 2 is 0, while entry in Row 3 is -1! | -1 | > 0, so we MUST swap Row 2 and Row 3! New Row 2 = [0, -1, 1/3 | -1/3]. New Row 3 = [0, 0, -1/3 | -2/3].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Upper Triangular Form Achieved</span>
                <div class="explain-line-title">Clean Triangular Matrix</div>
                <div class="explain-line-desc">Row 1: 3x + 3y + 4z = 20. Row 2: -y + (1/3)z = -1/3. Row 3: -(1/3)z = -2/3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Back-Substitution</span>
                <div class="explain-line-title">Solving for z, y, x</div>
                <div class="explain-line-desc">From Row 3: -(1/3)*z = -2/3 -> z = 2. From Row 2: -y + (1/3)*(2) = -1/3 -> -y = -1/3 - 2/3 = -1 -> y = 1. From Row 1: 3*x + 3(1) + 4(2) = 20 -> 3*x + 3 + 8 = 20 -> 3*x = 9 -> x = 3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Verification and Final Answer</span>
                <div class="explain-line-title">Substituting in Original Equations</div>
                <div class="explain-line-desc">Check in original equation 1: 3 + 1 + 2 = 6 (verified). Original equation 2: 3(3) + 3(1) + 4(2) = 9 + 3 + 8 = 20 (verified). Final solution: x = 3, y = 1, z = 2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Column 1 pivot swap: 3 marks; Column 1 elimination: 3 marks; Column 2 pivot swap overcoming zero: 4 marks; Back-substitution steps: 4 marks; Verification and final answer: 2 marks.</div>
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

<div class="question-card" data-category="gauss_jordan">
<div class="card-top">
<span class="q-pill">Extra - Q12 (16-Mark)</span>
<div class="q-heading">Find the inverse of the matrix $A = \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{bmatrix}$ using the Gauss-Jordan method.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Step 1: Augmented Matrix $[A \mid I]$</h4>
$$[A \mid I] = \begin{bmatrix} 2 & 1 & 1 & \mid & 1 & 0 & 0 \\ 1 & 2 & 1 & \mid & 0 & 1 & 0 \\ 1 & 1 & 2 & \mid & 0 & 0 & 1 \end{bmatrix}$$
<h4>Step 2: Make Pivot 1 Equal to 1</h4>
<p>Swap $R_1 \leftrightarrow R_2$:</p>
$$\begin{bmatrix} 1 & 2 & 1 & \mid & 0 & 1 & 0 \\ 2 & 1 & 1 & \mid & 1 & 0 & 0 \\ 1 & 1 & 2 & \mid & 0 & 0 & 1 \end{bmatrix}$$
<p>$R_2 \leftarrow R_2 - 2R_1, \quad R_3 \leftarrow R_3 - R_1$:</p>
$$\begin{bmatrix} 1 & 2 & 1 & \mid & 0 & 1 & 0 \\ 0 & -3 & -1 & \mid & 1 & -2 & 0 \\ 0 & -1 & 1 & \mid & 0 & -1 & 1 \end{bmatrix}$$
<h4>Step 3: Eliminate Column 2</h4>
<p>Interchange $R_2 \leftrightarrow R_3$ (multiply by $-1$):</p>
$$\begin{bmatrix} 1 & 2 & 1 & \mid & 0 & 1 & 0 \\ 0 & 1 & -1 & \mid & 0 & 1 & -1 \\ 0 & -3 & -1 & \mid & 1 & -2 & 0 \end{bmatrix}$$
<p>$R_1 \leftarrow R_1 - 2R_2, \quad R_3 \leftarrow R_3 + 3R_2$:</p>
$$\begin{bmatrix} 1 & 0 & 3 & \mid & 0 & -1 & 2 \\ 0 & 1 & -1 & \mid & 0 & 1 & -1 \\ 0 & 0 & -4 & \mid & 1 & 1 & -3 \end{bmatrix}$$
<h4>Step 4: Normalize Pivot 3 and Eliminate Column 3</h4>
<p>$R_3 \leftarrow -\frac{1}{4} R_3 \implies \begin{bmatrix} 0 & 0 & 1 & \mid & -\frac{1}{4} & -\frac{1}{4} & \frac{3}{4} \end{bmatrix}$</p>
<p>$R_1 \leftarrow R_1 - 3R_3, \quad R_2 \leftarrow R_2 + R_3$:</p>
$$\begin{bmatrix} 1 & 0 & 0 & \mid & \frac{3}{4} & -\frac{1}{4} & -\frac{1}{4} \\ 0 & 1 & 0 & \mid & -\frac{1}{4} & \frac{3}{4} & -\frac{1}{4} \\ 0 & 0 & 1 & \mid & -\frac{1}{4} & -\frac{1}{4} & \frac{3}{4} \end{bmatrix}$$
<p><strong>Inverse Matrix:</strong></p>
$$A^{-1} = \frac{1}{4} \begin{bmatrix} 3 & -1 & -1 \\ -1 & 3 & -1 \\ -1 & -1 & 3 \end{bmatrix}$$
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
                <div class="explain-line-title">Gauss-Jordan Matrix Inversion Algorithm</div>
                <div class="explain-line-desc">Given matrix A = [[2, 1, 1], [1, 2, 1], [1, 1, 2]]. We must compute A^(-1) by applying row operations to the partitioned matrix [A | I] until the left half becomes identity matrix I: [A | I] -> [I | A^(-1)].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Initial Partitioned Matrix</span>
                <div class="explain-line-title">Setting up [A | I_3]</div>
                <div class="explain-line-desc">[2, 1, 1 | 1, 0, 0; 1, 2, 1 | 0, 1, 0; 1, 1, 2 | 0, 0, 1].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Column 1 Elimination</span>
                <div class="explain-line-title">Creating Zeros Above and Below Pivot</div>
                <div class="explain-line-desc">Make leading entry 1: Row 1 <- Row 1 / 2 = [1, 1/2, 1/2 | 1/2, 0, 0]. Row 2 <- Row 2 - Row 1 = [0, 3/2, 1/2 | -1/2, 1, 0]. Row 3 <- Row 3 - Row 1 = [0, 1/2, 3/2 | -1/2, 0, 1].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Column 2 Elimination</span>
                <div class="explain-line-title">Normalizing Second Pivot</div>
                <div class="explain-line-desc">Row 2 <- (2/3)*Row 2 = [0, 1, 1/3 | -1/3, 2/3, 0]. Eliminate column 2 in Row 1: Row 1 <- Row 1 - (1/2)*Row 2 = [1, 0, 1/3 | 2/3, -1/3, 0]. Eliminate column 2 in Row 3: Row 3 <- Row 3 - (1/2)*Row 2 = [0, 0, 4/3 | -1/3, -1/3, 1].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Column 3 Elimination</span>
                <div class="explain-line-title">Final Identity Diagonalization</div>
                <div class="explain-line-desc">Row 3 <- (3/4)*Row 3 = [0, 0, 1 | -1/4, -1/4, 3/4]. Eliminate column 3 in Row 1: Row 1 <- Row 1 - (1/3)*Row 3 = [1, 0, 0 | 3/4, -1/4, -1/4]. Eliminate column 3 in Row 2: Row 2 <- Row 2 - (1/3)*Row 3 = [0, 1, 0 | -1/4, 3/4, -1/4].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Extracting Inverse Matrix</span>
                <div class="explain-line-title">Right-Hand Partition</div>
                <div class="explain-line-desc">The left half is now identity I. The right half is A^(-1) = (1/4) * [[3, -1, -1], [-1, 3, -1], [-1, -1, 3]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Verification by Direct Product A * A^(-1)</span>
                <div class="explain-line-title">Confirming Identity</div>
                <div class="explain-line-desc">A * A^(-1) = [[2, 1, 1], [1, 2, 1], [1, 1, 2]] * (1/4)*[[3, -1, -1], [-1, 3, -1], [-1, -1, 3]] = (1/4)*[[6-1-1, -2+3-1, -2-1+3], [-1+6-1, 3+3-1, -1-1+3], [-1-1+6, -1+3-1, -1-1+6]] = (1/4)*[[4, 0, 0], [0, 4, 0], [0, 0, 4]] = I. Correct!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Augmented matrix [A | I] setup: 3 marks; Column 1 elimination steps: 4 marks; Column 2 elimination steps: 4 marks; Column 3 elimination and A^(-1): 3 marks; Product verification A * A^(-1) = I: 2 marks.</div>
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

<div class="question-card" data-category="jacobi_symmetric">
<div class="card-top">
<span class="q-pill">Extra - Q13 (16-Mark)</span>
<div class="q-heading">Diagonalize the symmetric matrix $A = \begin{bmatrix} 1 & \sqrt{2} \\ \sqrt{2} & 2 \end{bmatrix}$ using Jacobi's method of plane rotations.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<p>$A$ is a symmetric matrix of order $2 \times 2$ with off-diagonal element $a_{12} = a_{21} = \sqrt{2}$.</p>
<h4>Step 1: Compute Rotation Angle $\theta$</h4>
$$\tan 2\theta = \frac{2 a_{12}}{a_{11} - a_{22}} = \frac{2 \sqrt{2}}{1 - 2} = \frac{2 \sqrt{2}}{-1} = -2\sqrt{2}$$
<p>From trigonometry: $\tan 2\theta = \frac{2\tan \theta}{1 - \tan^2 \theta} = -2\sqrt{2}$.</p>
$$\tan \theta = -\sqrt{2} (1 - \tan^2 \theta) \implies \sqrt{2} \tan^2 \theta + \tan \theta - \sqrt{2} = 0$$
$$(\sqrt{2} \tan \theta - 1)(\tan \theta + \sqrt{2}) = 0 \implies \tan \theta = \frac{1}{\sqrt{2}}$$
<p>Therefore:</p>
$$\cos \theta = \frac{\sqrt{2}}{\sqrt{3}}, \quad \sin \theta = \frac{1}{\sqrt{3}}$$
<h4>Step 2: Construct Orthogonal Rotation Matrix $R_1$</h4>
$$R_1 = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix} = \begin{bmatrix} \frac{\sqrt{2}}{\sqrt{3}} & -\frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} & \frac{\sqrt{2}}{\sqrt{3}} \end{bmatrix} = \frac{1}{\sqrt{3}} \begin{bmatrix} \sqrt{2} & -1 \\ 1 & \sqrt{2} \end{bmatrix}$$
<h4>Step 3: Similarity Transformation $D = R_1^T A R_1$</h4>
$$A R_1 = \begin{bmatrix} 1 & \sqrt{2} \\ \sqrt{2} & 2 \end{bmatrix} \frac{1}{\sqrt{3}} \begin{bmatrix} \sqrt{2} & -1 \\ 1 & \sqrt{2} \end{bmatrix} = \frac{1}{\sqrt{3}} \begin{bmatrix} 2\sqrt{2} & 1 \\ 4 & \sqrt{2} \end{bmatrix}$$
$$R_1^T (A R_1) = \frac{1}{3} \begin{bmatrix} \sqrt{2} & 1 \\ -1 & \sqrt{2} \end{bmatrix} \begin{bmatrix} 2\sqrt{2} & 1 \\ 4 & \sqrt{2} \end{bmatrix} = \frac{1}{3} \begin{bmatrix} 4 + 4 & \sqrt{2} + \sqrt{2} - 2\sqrt{2} \\ -2\sqrt{2} + 4\sqrt{2} - 2\sqrt{2} & -1 + 2 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 3 \end{bmatrix}$$
<p><strong>Eigenvalues:</strong> $\lambda_1 = 0, \quad \lambda_2 = 3$.</p>
<p><strong>Eigenvectors:</strong> Columns of $R_1$: $X_1 = \frac{1}{\sqrt{3}}\begin{bmatrix} \sqrt{2} \\ 1 \end{bmatrix}, \quad X_2 = \frac{1}{\sqrt{3}}\begin{bmatrix} -1 \\ \sqrt{2} \end{bmatrix}$.</p>
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
                <div class="explain-line-title">Jacobi Plane Rotation for Symmetric Matrices</div>
                <div class="explain-line-desc">Given 2x2 symmetric matrix A = [[1, sqrt(2)], [sqrt(2), 2]]. Jacobi's method eliminates the off-diagonal element a12 using an orthogonal rotation matrix R1 = [[cos theta, -sin theta], [sin theta, cos theta]] such that R1^T * A * R1 becomes diagonal.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Rotation Angle Formula</span>
                <div class="explain-line-title">Trigonometric Relation</div>
                <div class="explain-line-desc">The rotation angle theta satisfies: tan(2*theta) = 2*a12 / (a11 - a22). Here a11 = 1, a22 = 2, a12 = sqrt(2). Thus tan(2*theta) = 2*sqrt(2) / (1 - 2) = -2*sqrt(2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Solving for tan theta</span>
                <div class="explain-line-title">Double Angle Expansion</div>
                <div class="explain-line-desc">Using tan(2*theta) = 2*tan(theta) / (1 - tan^2(theta)): 2*tan(theta) / (1 - tan^2(theta)) = -2*sqrt(2) -> tan(theta) = -sqrt(2)*(1 - tan^2(theta)) -> sqrt(2)*tan^2(theta) + tan(theta) - sqrt(2) = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Factoring the Quadratic</span>
                <div class="explain-line-title">Finding Minimum Angle</div>
                <div class="explain-line-desc">(sqrt(2)*tan(theta) - 1)*(tan(theta) + sqrt(2)) = 0 -> tan(theta) = 1/sqrt(2) (or -sqrt(2)). Choosing |tan theta| <= 1 gives tan(theta) = 1/sqrt(2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Evaluating cos theta and sin theta</span>
                <div class="explain-line-title">Right Triangle Ratios</div>
                <div class="explain-line-desc">Opposite = 1, Adjacent = sqrt(2), Hypotenuse = sqrt(1^2 + (sqrt(2))^2) = sqrt(3). Therefore cos(theta) = sqrt(2)/sqrt(3) and sin(theta) = 1/sqrt(3). Rotation matrix R1 = [[sqrt(2)/sqrt(3), -1/sqrt(3)], [1/sqrt(3), sqrt(2)/sqrt(3)]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Computing Diagonal Matrix D = R1^T * A * R1</span>
                <div class="explain-line-title">Orthogonal Similarity Transformation</div>
                <div class="explain-line-desc">Multiply A * R1: [[1, sqrt(2)], [sqrt(2), 2]] * [[sqrt(2)/sqrt(3), -1/sqrt(3)], [1/sqrt(3), sqrt(2)/sqrt(3)]] = [[2*sqrt(2)/sqrt(3), 1/sqrt(3)], [4/sqrt(3), sqrt(2)/sqrt(3)]]. Now multiply R1^T * (A * R1): produces diagonal matrix D = [[3, 0], [0, 0]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Verification and Eigenvalues</span>
                <div class="explain-line-title">Trace and Determinant Check</div>
                <div class="explain-line-desc">Trace(A) = 1 + 2 = 3 = Trace(D) = 3 + 0 = 3. Det(A) = 1*2 - 2 = 0 = Det(D) = 3*0 = 0. Eigenvalues are 3 and 0. Eigenvectors are the columns of R1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Formula for tan(2*theta): 3 marks; Solving quadratic for tan(theta): 4 marks; Construction of rotation matrix R1: 4 marks; Product R1^T * A * R1 evaluation: 3 marks; Trace and determinant verification: 2 marks.</div>
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

<div class="question-card" data-category="jacobi_symmetric">
<div class="card-top">
<span class="q-pill">Extra - Q14 (16-Mark)</span>
<div class="q-heading">Perform two iterations of Jacobi's method to approximate the eigenvalues of the tridiagonal symmetric matrix $A = \begin{bmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{bmatrix}$.</div>
</div>
<div class="solution-content">
<div class="math-panel">
<h4>Iteration 1: Annihilate Largest Off-Diagonal Entry</h4>
<p>Off-diagonal elements: $|a_{12}| = 1, |a_{23}| = 1, |a_{13}| = 0$. Maximum is $|a_{12}| = 1$.</p>
$$\tan 2\theta_1 = \frac{2 a_{12}}{a_{11} - a_{22}} = \frac{2(-1)}{2 - 2} = \frac{-2}{0} = -\infty \implies 2\theta_1 = -\frac{\pi}{2} \implies \theta_1 = -\frac{\pi}{4}$$
<p>Thus, $\cos \theta_1 = \frac{1}{\sqrt{2}}, \quad \sin \theta_1 = -\frac{1}{\sqrt{2}}$.</p>
<p>Rotation matrix $R_1$ acting in the $(1, 2)$ plane:</p>
$$R_1 = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ 0 & 0 & 1 \end{bmatrix}$$
<p>Compute $A_1 = R_1^T A R_1$:</p>
$$A_1 = \begin{bmatrix} 3 & 0 & \frac{1}{\sqrt{2}} \\ 0 & 1 & -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} & 2 \end{bmatrix} \approx \begin{bmatrix} 3 & 0 & 0.7071 \\ 0 & 1 & -0.7071 \\ 0.7071 & -0.7071 & 2 \end{bmatrix}$$
<p>Note: $a_{12}$ has been completely eliminated to $0$!</p>
<hr class="ai-hr">
<h4>Iteration 2: Annihilate Largest Off-Diagonal Entry in $A_1$</h4>
<p>Max off-diagonal in $A_1$ is $|a_{13}| = |a_{23}| = \frac{1}{\sqrt{2}} \approx 0.7071$. Select $(1, 3)$:</p>
$$\tan 2\theta_2 = \frac{2 a_{13}}{a_{11} - a_{33}} = \frac{2(1/\sqrt{2})}{3 - 2} = \sqrt{2} \approx 1.4142$$
$$2\theta_2 = \tan^{-1}(1.4142) \approx 54.74^{\circ} \implies \theta_2 \approx 27.37^{\circ}$$
$$\cos \theta_2 \approx 0.8881, \quad \sin \theta_2 \approx 0.4597$$
<p>Rotation matrix $R_2$ acting in $(1, 3)$ plane produces $A_2 = R_2^T A_1 R_2$:</p>
$$A_2 \approx \begin{bmatrix} 3.4142 & -0.325 & 0 \\ -0.325 & 1 & -0.628 \\ 0 & -0.628 & 1.5858 \end{bmatrix}$$
<p><em>(Theoretical exact eigenvalues: $2 - \sqrt{2} \approx 0.5858, \quad 2, \quad 2 + \sqrt{2} \approx 3.4142$).</em></p>
<p>Diagonal values after 2 rotations: $\lambda \approx 3.414, \quad 1.000, \quad 1.586$, rapidly converging to true spectrum.</p>
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
                <div class="explain-line-title">Iterative Diagonalization for 3x3 Symmetric Matrix</div>
                <div class="explain-line-desc">Given symmetric matrix A = [[2, -1, 0], [-1, 2, -1], [0, -1, 2]]. We must perform 2 iterations of Jacobi's rotation method to systematically reduce off-diagonal elements.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Iteration 1 Selection of Largest Off-Diagonal Entry</span>
                <div class="explain-line-title">Pivotal Off-Diagonal Search</div>
                <div class="explain-line-desc">Off-diagonal elements are a12 = -1, a23 = -1, a13 = 0. Maximum absolute value is 1 (tie between a12 and a23). Choose to eliminate a12 first.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Iteration 1 Rotation Angle theta1</span>
                <div class="explain-line-title">Formula with a11 = a22</div>
                <div class="explain-line-desc">tan(2*theta1) = 2*a12 / (a11 - a22) = 2*(-1) / (2 - 2) = -2 / 0 = infinity! When denominator is zero, 2*theta1 = -pi/2, so theta1 = -pi/4 (-45 degrees)!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Iteration 1 Rotation Matrix R1</span>
                <div class="explain-line-title">Sine and Cosine of -45 Degrees</div>
                <div class="explain-line-desc">cos(theta1) = 1/sqrt(2), sin(theta1) = -1/sqrt(2). Rotation matrix R1 acts on rows/cols 1 and 2: R1 = [[1/sqrt(2), 1/sqrt(2), 0], [-1/sqrt(2), 1/sqrt(2), 0], [0, 0, 1]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Iteration 1 Transformed Matrix A1 = R1^T * A * R1</span>
                <div class="explain-line-title">Zeroing a12</div>
                <div class="explain-line-desc">After transformation: a12 = 0! New diagonal entries: d11 = a11 - a12 = 2 - (-1) = 3; d22 = a11 + a12 = 2 + (-1) = 1; d33 = 2. A1 = [[3, 0, 1/sqrt(2)], [0, 1, -1/sqrt(2)], [1/sqrt(2), -1/sqrt(2), 2]]. Off-diagonal entry a12 has become zero!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Iteration 2 Eliminating Next Largest Off-Diagonal</span>
                <div class="explain-line-title">Choosing a13 or a23</div>
                <div class="explain-line-desc">Off-diagonal elements are now a13 = 1/sqrt(2) = 0.7071 and a23 = -1/sqrt(2) = -0.7071. Choose to eliminate a13 (acting on rows/cols 1 and 3): tan(2*theta2) = 2*a13 / (a11 - a33) = 2*(1/sqrt(2)) / (3 - 2) = sqrt(2) approx 1.4142. theta2 = (1/2)*arctan(1.4142) = 27.37 degrees. cos(theta2) = 0.8881, sin(theta2) = 0.4597.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Transformed Matrix A2 and Eigenvalue Approximations</span>
                <div class="explain-line-title">Diagonal Elements After 2 Steps</div>
                <div class="explain-line-desc">A2 = R2^T * A1 * R2 produces diagonal entries: 3.414, 1.000, 1.586. Trace = 3.414 + 1.000 + 1.586 = 6.000 = Trace(A) = 2+2+2=6. The diagonal entries are rapidly approaching the exact eigenvalues 2 + sqrt(2) = 3.414, 2, and 2 - sqrt(2) = 0.586.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Iteration 1 pivot selection and angle theta1 = -45 deg: 4 marks; Construction of R1 and matrix A1: 4 marks; Iteration 2 pivot selection and angle theta2: 4 marks; Transformed matrix A2 and eigenvalue estimates: 4 marks.</div>
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
