// UNIT 2: Linear Transformations & Diagonalizations
window.UNIT2_DATA = {
  title: "Unit-II: Linear Transformations & Diagonalizations",
  desc: "Complete Question Bank + Class Notes derivations for Kernel, Range, Rank-Nullity Theorem, Matrix Representations, Eigenvalues & Diagonalization.",
  partA: String.raw`<div class="section-badge">Part 1: Official Question Bank 2-Marks (Unit II)</div>

      <!-- Card A1 -->
      <div class="question-card" data-category="transformation">
        <div class="card-top">
          <span class="q-pill">QB - Q1</span>
          <div class="q-heading">Define Ordered Basis.</div>
        </div>
        <div class="solution-content">
          <p>An <strong>Ordered Basis</strong> for a finite-dimensional vector space $V$ of dimension $n$ is a basis endowed with a specific sequence (order) of elements, written as an ordered $n$-tuple:
     $$\beta = (v_1, v_2, \dots, v_n)$$
     Unlike an ordinary unordered basis set $\{v_1, v_2, \dots, v_n\}$, changing the order of vectors in an ordered basis changes the corresponding coordinate vector $[x]_\beta$ of an element $x \in V$.</p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Definition</span>
                <div class="explain-line-title">Sequence vs Set</div>
                <div class="explain-line-desc">A set {v1, v2} = {v2, v1}, but ordered tuple (v1, v2) ≠ (v2, v1). The coordinate vector depends strictly on the indexed position.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Exam Key Point</span>
                <div class="explain-line-title">Coordinate Vector Representation</div>
                <div class="explain-line-desc">If x = c1 v1 + ... + cn vn, then [x]_β = (c1, ..., cn)^T. Full marks require mentioning that the sequence uniquely fixes the column vector.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A2 -->
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">QB - Q2</span>
          <div class="q-heading">Define Null Space (Kernel) and Nullity.</div>
        </div>
        <div class="solution-content">
          <p>Let $V$ and $W$ be vector spaces over a field $F$, and let $T: V \to W$ be a linear transformation.<br>
     1. The <strong>Null Space (or Kernel)</strong> of $T$, denoted by $N(T)$ or $\ker(T)$, is the set of all vectors in $V$ that map to the zero vector in $W$:
     $$N(T) = \{v \in V \mid T(v) = 0_W\}$$
     2. The <strong>Nullity</strong> of $T$ is the dimension of the null space:
     $$\operatorname{nullity}(T) = \dim(N(T))$$</p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Subspace Property</span>
                <div class="explain-line-title">N(T) is a Subspace of V</div>
                <div class="explain-line-desc">N(T) contains 0_V since T(0_V) = 0_W, and is closed under addition and scalar multiplication.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Exam Criterion</span>
                <div class="explain-line-title">Nullity Definition</div>
                <div class="explain-line-desc">State nullity(T) = dim(N(T)). In university exams, writing both the set builder notation and the dimension formula gets 2 full marks.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A3 -->
      <div class="question-card" data-category="transformation">
        <div class="card-top">
          <span class="q-pill">QB - Q3</span>
          <div class="q-heading">Verify whether $T: \mathbb{R}^3 \to \mathbb{R}$ defined by $T(u) = \|u\|$ is a linear transformation.</div>
        </div>
        <div class="solution-content">
          <p><strong>Condition for Linearity:</strong> $T(c u) = c T(u)$ for all $c \in \mathbb{R}$ and $u \in \mathbb{R}^3$.<br>
     Let $u = (1, 0, 0)$ and scalar $c = -1$.<br>
     - $T(c u) = T(-1, 0, 0) = \|(-1, 0, 0)\| = \sqrt{(-1)^2 + 0^2 + 0^2} = \sqrt{1} = 1$<br>
     - $c T(u) = (-1) T(1, 0, 0) = (-1)(1) = -1$<br>
     Since $T(-u) = 1 \neq -1 = -T(u)$, $T$ fails scalar homogeneity.<br>
     <span class="tag-result fail">Conclusion: $T(u) = \|u\|$ is NOT a linear transformation.</span></p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Homogeneity Test</span>
                <div class="explain-line-title">Scalar pull-out fails for negative scalars</div>
                <div class="explain-line-desc">The norm ||cu|| = |c| ||u||. For c = -1, ||-u|| = ||u|| ≠ -||u||.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Additivity Test</span>
                <div class="explain-line-title">Triangle Inequality</div>
                <div class="explain-line-desc">||u + v|| ≤ ||u|| + ||v|| with strict inequality for non-collinear vectors, so T(u+v) ≠ T(u) + T(v).</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A4 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill">QB - Q4</span>
          <div class="q-heading">Define Algebraic Multiplicity and Geometric Multiplicity of an Eigenvalue.</div>
        </div>
        <div class="solution-content">
          <p>Let $A$ be an $n \times n$ matrix with eigenvalue $\lambda_0$.<br>
     1. <strong>Algebraic Multiplicity (AM):</strong> The multiplicity of $\lambda_0$ as a root of the characteristic polynomial $p(\lambda) = \det(A - \lambda I) = 0$.<br>
     2. <strong>Geometric Multiplicity (GM):</strong> The dimension of the eigenspace corresponding to $\lambda_0$:
     $$\operatorname{GM}(\lambda_0) = \dim(E_{\lambda_0}) = \dim(N(A - \lambda_0 I)) = n - \operatorname{rank}(A - \lambda_0 I)$$
     <em>Fundamental Property:</em> For every eigenvalue, $1 \le \operatorname{GM}(\lambda_0) \le \operatorname{AM}(\lambda_0)$.</p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Core Inequality</span>
                <div class="explain-line-title">1 <= GM <= AM</div>
                <div class="explain-line-desc">Geometric multiplicity never exceeds algebraic multiplicity. Diagonalizability holds iff GM = AM for all eigenvalues.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - University Key</span>
                <div class="explain-line-title">Eigenspace Dimension</div>
                <div class="explain-line-desc">GM is the number of linearly independent eigenvectors associated with lambda_0.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A5 -->
      <div class="question-card" data-category="transformation">
        <div class="card-top">
          <span class="q-pill">QB - Q5</span>
          <div class="q-heading">Is there a linear transformation $T: \mathbb{R}^3 \to \mathbb{R}^2$ such that $T(1,0,3) = (1,1)$ and $T(-2,0,-6) = (2,1)$?</div>
        </div>
        <div class="solution-content">
          <p>Notice the relation between the input vectors:<br>
     $$(-2, 0, -6) = -2 (1, 0, 3)$$
     If $T$ were a linear transformation, scalar multiplication must be preserved:<br>
     $$T(-2, 0, -6) = T(-2(1, 0, 3)) = -2 T(1, 0, 3) = -2 (1, 1) = (-2, -2)$$
     However, the question specifies $T(-2, 0, -6) = (2, 1) \neq (-2, -2)$.<br>
     <span class="tag-result fail">Conclusion: NO such linear transformation can exist.</span></p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Linear Dependency</span>
                <div class="explain-line-title">Scalar multiple of input must yield same multiple of output</div>
                <div class="explain-line-desc">u2 = -2 u1 implies T(u2) must equal -2 T(u1).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Contradiction</span>
                <div class="explain-line-title">(2, 1) ≠ (-2, -2)</div>
                <div class="explain-line-desc">Linearity is fundamentally violated by the contradictory output assignments.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A6 -->
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">QB - Q6</span>
          <div class="q-heading">Prove that a linear transformation $T: V \to W$ is one-to-one (injective) if and only if $N(T) = \{0\}$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Proof:</strong><br>
     <strong>($\implies$) Suppose $T$ is 1-1:</strong> Let $x \in N(T)$. Then $T(x) = 0$. Since $T$ is linear, $T(0) = 0$.<br>
     Thus $T(x) = T(0)$. Because $T$ is 1-1, $x = 0$. Therefore, $N(T) = \{0\}$.<br><br>
     <strong>($\impliedby$) Suppose $N(T) = \{0\}$:</strong> Let $T(u) = T(v)$.<br>
     By linearity, $T(u) - T(v) = 0 \implies T(u - v) = 0$.<br>
     This means $(u - v) \in N(T)$. Since $N(T) = \{0\}$, we must have $u - v = 0 \implies u = v$.<br>
     <span class="tag-result">Hence $T$ is one-to-one.</span></p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Necessary Condition</span>
                <div class="explain-line-title">If T is 1-1, Ker(T) = {0}</div>
                <div class="explain-line-desc">T(x) = T(0) implies x = 0 by injectivity.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Sufficient Condition</span>
                <div class="explain-line-title">If Ker(T) = {0}, T(u) = T(v) implies u = v</div>
                <div class="explain-line-desc">T(u - v) = 0 puts (u - v) into kernel. With trivial kernel, u - v must be 0.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A7 -->
      <div class="question-card" data-category="transformation">
        <div class="card-top">
          <span class="q-pill">QB - Q7</span>
          <div class="q-heading">Check whether $T: \mathbb{R}^2 \to \mathbb{R}^2$ defined by $T(a_1, a_2) = (2a_1 + a_2, a_1)$ is linear.</div>
        </div>
        <div class="solution-content">
          <p>Let $u = (a_1, a_2), v = (b_1, b_2) \in \mathbb{R}^2$ and $c \in \mathbb{R}$.<br>
     1. <strong>Additivity:</strong> $u + v = (a_1 + b_1, a_2 + b_2)$.<br>
     $T(u + v) = (2(a_1+b_1) + (a_2+b_2), a_1+b_1) = (2a_1+a_2, a_1) + (2b_1+b_2, b_1) = T(u) + T(v)$.<br>
     2. <strong>Homogeneity:</strong> $c u = (c a_1, c a_2)$.<br>
     $T(c u) = (2(c a_1) + c a_2, c a_1) = c (2a_1+a_2, a_1) = c T(u)$.<br>
     <span class="tag-result">Conclusion: $T$ is a Linear Transformation.</span></p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Additivity</span>
                <div class="explain-line-title">Direct expansion</div>
                <div class="explain-line-desc">Both coordinate components are linear polynomials without constant offsets.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Homogeneity</span>
                <div class="explain-line-title">Scalar factoring</div>
                <div class="explain-line-desc">Scalar c factors out of both output coordinates cleanly.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A8 -->
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">QB - Q8</span>
          <div class="q-heading">Verify the Dimension Theorem for $T: \mathbb{R}^3 \to \mathbb{R}^2$ defined by $T(a_1, a_2, a_3) = (a_1 - a_2, 2a_3)$.</div>
        </div>
        <div class="solution-content">
          <p><strong>1. Null Space $N(T)$ and Nullity:</strong><br>
     $T(a_1, a_2, a_3) = (0, 0) \implies a_1 - a_2 = 0 \implies a_2 = a_1$, and $2a_3 = 0 \implies a_3 = 0$.<br>
     A generic vector in $N(T)$ is $(a_1, a_1, 0) = a_1(1, 1, 0)$. Basis: $\{(1, 1, 0)\}$.<br>
     $$\operatorname{nullity}(T) = \dim N(T) = 1$$
     <strong>2. Range Space $R(T)$ and Rank:</strong><br>
     $T(a_1, a_2, a_3) = a_1(1, 0) + a_2(-1, 0) + a_3(0, 2)$. Spanning vectors $(1, 0)$ and $(0, 2)$ span all of $\mathbb{R}^2$.<br>
     $$\operatorname{rank}(T) = \dim R(T) = 2$$
     <strong>3. Verification:</strong><br>
     $$\operatorname{nullity}(T) + \operatorname{rank}(T) = 1 + 2 = 3 = \dim(\mathbb{R}^3)$$
     <span class="tag-result">Dimension Theorem Verified ($1 + 2 = 3$).</span></p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Solve Kernel System</span>
                <div class="explain-line-title">a2 = a1, a3 = 0</div>
                <div class="explain-line-desc">One free variable a1 gives nullity = 1 with basis (1, 1, 0).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Check Rank-Nullity Sum</span>
                <div class="explain-line-title">1 + 2 = 3</div>
                <div class="explain-line-desc">Sum of nullity (1) and rank (2) matches domain dimension dim(R^3) = 3.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A9 -->
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">QB - Q9</span>
          <div class="q-heading">Define Range Space and Rank of a Linear Transformation.</div>
        </div>
        <div class="solution-content">
          <p>Let $V$ and $W$ be vector spaces over field $F$ and $T: V \to W$ be linear.<br>
     1. The <strong>Range Space (or Image)</strong> of $T$, denoted $R(T)$ or $\operatorname{im}(T)$, is the set of all image vectors under $T$:
     $$R(T) = \{w \in W \mid \exists v \in V \text{ such that } T(v) = w\} = \{T(v) \mid v \in V\}$$
     2. The <strong>Rank</strong> of $T$ is the dimension of its range space:
     $$\operatorname{rank}(T) = \dim(R(T))$$</p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Subspace Property</span>
                <div class="explain-line-title">R(T) is a Subspace of W</div>
                <div class="explain-line-desc">If {v1, ..., vn} spans V, then {T(v1), ..., T(vn)} spans R(T).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Exam Key Point</span>
                <div class="explain-line-title">Rank Definition</div>
                <div class="explain-line-desc">rank(T) = dim(R(T)). For matrices, it equals the number of pivot columns.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A10 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill">QB - Q10</span>
          <div class="q-heading">Test whether the matrix $A = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}$ is diagonalizable.</div>
        </div>
        <div class="solution-content">
          <p><strong>1. Characteristic Equation:</strong><br>
     $$\det(A - \lambda I) = \det\begin{bmatrix} 1-\lambda & 1 \\ 1 & 1-\lambda \end{bmatrix} = (1-\lambda)^2 - 1 = \lambda^2 - 2\lambda = \lambda(\lambda - 2) = 0$$
     Eigenvalues: $\lambda_1 = 0, \quad \lambda_2 = 2$.<br><br>
     <strong>2. Diagonalizability Condition:</strong><br>
     Since $A$ is a $2 \times 2$ matrix having $2$ <strong>distinct real eigenvalues</strong> ($\lambda_1 \neq \lambda_2$), its eigenvectors are linearly independent.<br>
     <span class="tag-result">Conclusion: $A$ is DIAGONALIZABLE with diagonal form $D = \begin{bmatrix} 0 & 0 \\ 0 & 2 \end{bmatrix}$.</span></p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Distinct Eigenvalues Theorem</span>
                <div class="explain-line-title">Distinct ro\dots guarantee diagonalizability</div>
                <div class="explain-line-desc">For an n x n matrix, if it has n distinct eigenvalues, it is automatically diagonalizable.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Diagonal Form</span>
                <div class="explain-line-title">D = diag(0, 2)</div>
                <div class="explain-line-desc">The diagonal entries of D are the eigenvalues 0 and 2.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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
<div class="section-badge" style="margin-top:28px;">Part 2: Extra High-Yield University 2-Marks (Unit II)</div>

      <!-- Card A11 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill extra">Extra - Q11</span>
          <div class="q-heading">State Cayley-Hamilton Theorem and how to compute $A^{-1}$ using it.</div>
        </div>
        <div class="solution-content">
          <p><strong>Cayley-Hamilton Theorem:</strong> Every square matrix $A \in M_{n \times n}(\mathbb{R})$ satisfies its own characteristic equation.<br>
     If $\det(A - \lambda I) = (-1)^n \lambda^n + c_{n-1} \lambda^{n-1} + \dots + c_1 \lambda + c_0 = 0$, then:
     $$(-1)^n A^n + c_{n-1} A^{n-1} + \dots + c_1 A + c_0 I = O$$
     <strong>Computation of $A^{-1}$ (if $\det(A) \neq 0$, so $c_0 \neq 0$):</strong><br>
     Multiply by $A^{-1}$ and isolate $I$:
     $$A^{-1} = -\frac{1}{c_0} \left[ (-1)^n A^{n-1} + c_{n-1} A^{n-2} + \dots + c_1 I \right]$$</p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Statement</span>
                <div class="explain-line-title">Matrix satisfies characteristic polynomial</div>
                <div class="explain-line-desc">Replace lambda by A and scalar constant by c0 * I.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Inverse Formula</span>
                <div class="explain-line-title">Multiply by A^-1</div>
                <div class="explain-line-desc">Allows calculating inverse directly using powers of A rather than calculating n^2 cofactors.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A12 -->
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill extra">Extra - Q12</span>
          <div class="q-heading">State the Dimension Theorem (Rank-Nullity Theorem) for linear transformations.</div>
        </div>
        <div class="solution-content">
          <p><strong>Statement:</strong> Let $V$ and $W$ be vector spaces over a field $F$, and let $V$ be finite-dimensional. If $T: V \to W$ is a linear transformation, then:
     $$\operatorname{nullity}(T) + \operatorname{rank}(T) = \dim(V)$$
     Equivalently:
     $$\dim(N(T)) + \dim(R(T)) = \dim(V)$$
     <em>Consequence:</em> If $\dim(V) = \dim(W) < \infty$, then $T$ is one-to-one $\iff$ $T$ is onto $\iff$ $T$ is an isomorphism.</p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Dimension Conservation</span>
                <div class="explain-line-title">Domain dimension splits into two parts</div>
                <div class="explain-line-desc">The dimension of the domain V is preserved: part collapsed to zero (nullity) + part surviving (rank).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Finite Dimension Condition</span>
                <div class="explain-line-title">V must be finite dimensional</div>
                <div class="explain-line-desc">In exams, remember to state that V is finite-dimensional to get full marks.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A13 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill extra">Extra - Q13</span>
          <div class="q-heading">If $\lambda$ is an eigenvalue of an invertible linear operator $T$, prove that $\lambda^{-1}$ is an eigenvalue of $T^{-1}$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Proof:</strong><br>
     Let $\lambda$ be an eigenvalue of $T$ with non-zero eigenvector $v$. Then:
     $$T(v) = \lambda v$$
     Since $T$ is invertible, $\lambda \neq 0$ (otherwise $T(v)=0$ for $v \neq 0$, implying $N(T) \neq \{0\}$, contradiction).<br>
     Applying $T^{-1}$ to both sides:
     $$T^{-1}(T(v)) = T^{-1}(\lambda v) \implies v = \lambda T^{-1}(v)$$
     Dividing by non-zero scalar $\lambda$:
     $$T^{-1}(v) = \lambda^{-1} v = \frac{1}{\lambda} v$$
     <span class="tag-result">Hence $\lambda^{-1}$ is an eigenvalue of $T^{-1}$ with the same eigenvector $v$.</span></p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Non-zero Eigenvalue</span>
                <div class="explain-line-title">Invertible implies lambda ≠ 0</div>
                <div class="explain-line-desc">An operator is invertible iff 0 is NOT an eigenvalue.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Invert operator</span>
                <div class="explain-line-title">Apply T^-1 to both sides</div>
                <div class="explain-line-desc">T^-1(T(v)) = v, and linearity pulls lambda out, yielding T^-1(v) = (1/lambda)v.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A14 -->
      <div class="question-card" data-category="transformation">
        <div class="card-top">
          <span class="q-pill extra">Extra - Q14</span>
          <div class="q-heading">Let $T: V \to W$ be linear. Show that $T(0_V) = 0_W$ and $T(-v) = -T(v)$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Proof:</strong><br>
     1. In $V$, we know $0_V + 0_V = 0_V$. Applying $T$:
     $$T(0_V) = T(0_V + 0_V) = T(0_V) + T(0_V)$$
     Adding the additive inverse $-T(0_V)$ of $T(0_V) \in W$ to both sides gives:
     $$0_W = T(0_V)$$
     2. For any $v \in V$, $v + (-v) = 0_V$. Applying $T$:
     $$T(v + (-v)) = T(0_V) \implies T(v) + T(-v) = 0_W \implies T(-v) = -T(v)$$</p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Zero mapping</span>
                <div class="explain-line-title">T(0) = 0</div>
                <div class="explain-line-desc">Essential first step in verifying if any mapping is linear. If T(0) ≠ 0, mapping is immediately non-linear.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Negative vector</span>
                <div class="explain-line-title">T(-v) = -T(v)</div>
                <div class="explain-line-desc">Follows either from additivity with additive inverse or scalar homogeneity with c = -1.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A15 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill extra">Extra - Q15</span>
          <div class="q-heading">State the necessary and sufficient condition for a linear operator $T$ on a finite-dimensional space $V$ to be diagonalizable.</div>
        </div>
        <div class="solution-content">
          <p>A linear operator $T$ on an $n$-dimensional vector space $V$ is <strong>Diagonalizable</strong> if and only if both of the following conditions hold:<br>
     1. The characteristic polynomial of $T$ splits completely into linear factors over the field $F$:
     $$p(\lambda) = (-1)^n (\lambda - \lambda_1)^{d_1} (\lambda - \lambda_2)^{d_2} \dots (\lambda - \lambda_k)^{d_k}$$
     2. For each distinct eigenvalue $\lambda_i$, the <strong>Geometric Multiplicity equals the Algebraic Multiplicity</strong>:
     $$\operatorname{GM}(\lambda_i) = \dim(E_{\lambda_i}) = d_i = \operatorname{AM}(\lambda_i)$$
     Equivalently, $V$ has a basis consisting entirely of eigenvectors of $T$.</p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Condition 1</span>
                <div class="explain-line-title">Splits completely</div>
                <div class="explain-line-desc">All ro\dots of characteristic polynomial must lie in the working field F.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Condition 2</span>
                <div class="explain-line-title">GM = AM for every eigenvalue</div>
                <div class="explain-line-desc">No defective eigenspaces; total number of linearly independent eigenvectors must equal dim(V).</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card A16 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill extra">Extra - Q16</span>
          <div class="q-heading">Show that eigenvectors corresponding to distinct eigenvalues of a linear operator are linearly independent.</div>
        </div>
        <div class="solution-content">
          <p><strong>Proof (by induction on $k$):</strong><br>
     Let $v_1, \dots, v_k$ be eigenvectors with distinct eigenvalues $\lambda_1, \dots, \lambda_k$.<br>
     Suppose $c_1 v_1 + c_2 v_2 + \dots + c_k v_k = 0$ (Eq 1).<br>
     Apply $T$:
     $$c_1 \lambda_1 v_1 + c_2 \lambda_2 v_2 + \dots + c_k \lambda_k v_k = 0 \quad (\text{Eq 2})$$
     Multiply Eq 1 by $\lambda_k$ and subtract from Eq 2:
     $$c_1 (\lambda_1 - \lambda_k) v_1 + c_2 (\lambda_2 - \lambda_k) v_2 + \dots + c_{k-1} (\lambda_{k-1} - \lambda_k) v_{k-1} = 0$$
     By induction hypothesis, $v_1, \dots, v_{k-1}$ are linearly independent.<br>
     Since $\lambda_i - \lambda_k \neq 0$ for $i < k$, all $c_1 = c_2 = \dots = c_{k-1} = 0$.<br>
     Then Eq 1 gives $c_k v_k = 0 \implies c_k = 0$ (since $v_k \neq 0$).<br>
     <span class="tag-result">Therefore, $\{v_1, v_2, \dots, v_k\}$ is Linearly Independent.</span></p>
          
          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1 - Induction Principle</span>
                <div class="explain-line-title">Base case k = 1</div>
                <div class="explain-line-desc">v1 ≠ 0, so c1 v1 = 0 implies c1 = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2 - Inductive Step</span>
                <div class="explain-line-title">Elimination using eigenvalue difference</div>
                <div class="explain-line-desc">Multiplying by lambda_k eliminates v_k and leaves non-zero coefficients (lambda_i - lambda_k) ≠ 0.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

<!-- Predicted Q17 -->
      <div class="question-card" data-category="theorems">
        <div class="card-top">
          <span class="q-pill extra">Predicted - Q17</span>
        </div>
        <div class="q-heading">State the Rank-Nullity Theorem (Dimension Theorem) for linear transformations. State its corollary when $\dim(V) = \dim(W)$.</div>
        <div class="solution-content">
          <p><strong>Rank-Nullity Theorem:</strong> Let $V$ and $W$ be vector spaces over a field $F$, where $V$ is finite-dimensional. If $T: V \to W$ is a linear transformation, then:
          $$\text{nullity}(T) + \text{rank}(T) = \dim(V)$$
          $$\dim(N(T)) + \dim(R(T)) = \dim(V)$$
          <strong>Corollary:</strong> If $\dim(V) = \dim(W)$, then $T$ is one-to-one $\iff$ $T$ is onto $\iff$ $T$ is an isomorphism ($\text{rank}(T) = \dim(V)$).</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Domain Dimension Conservation</span>
                <div class="explain-line-title">Degrees of freedom in $V$ divide between collapsed and preserved</div>
                <div class="explain-line-desc">Nullity counts vectors collapsed to zero; rank counts vectors preserved in the output image space. Their sum always equals the domain dimension.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Finite Equal Dimensions Corollary</span>
                <div class="explain-line-title">Injective implies surjective when $\dim(V) = \dim(W)$</div>
                <div class="explain-line-desc">If $\text{nullity}(T) = 0$, then $\text{rank}(T) = \dim(V) = \dim(W)$, which automatically forces $R(T) = W$, making $T$ onto.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for the exact Rank-Nullity formula $\text{nullity}(T) + \text{rank}(T) = \dim(V)$, 1 mark for the equal dimension corollary.</div>
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
      <div class="question-card" data-category="linear_trans">
        <div class="card-top">
          <span class="q-pill extra">Predicted - Q18</span>
        </div>
        <div class="q-heading">If $T: V \to W$ is a linear transformation and $\dim(V) > \dim(W)$, can $T$ be one-to-one? Justify your answer using the Dimension Theorem.</div>
        <div class="solution-content">
          <p><strong>Answer:</strong> <strong>No</strong>, $T$ cannot be one-to-one.<br>
          <strong>Justification:</strong> By the Dimension Theorem:
          $$\text{nullity}(T) = \dim(V) - \text{rank}(T)$$
          Since the range space $R(T)$ is a subspace of $W$, we must have $\text{rank}(T) \le \dim(W)$.<br>
          Therefore:
          $$\text{nullity}(T) \ge \dim(V) - \dim(W)$$
          Since $\dim(V) > \dim(W)$, we have $\dim(V) - \dim(W) > 0$, which implies:
          $$\text{nullity}(T) \ge 1 > 0 \implies N(T) \neq \{\mathbf{0}\}$$
          Since $N(T)$ contains non-zero vectors, $T$ cannot be one-to-one.</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Range Subspace Bound</span>
                <div class="explain-line-title">$\text{rank}(T) \le \dim(W)$</div>
                <div class="explain-line-desc">The dimension of the image cannot exceed the dimension of the target codomain.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Pigeonhole Principle for Vector Spaces</span>
                <div class="explain-line-title">Compressing a larger space into a smaller space forces non-trivial kernel</div>
                <div class="explain-line-desc">At least $\dim(V) - \dim(W)$ dimensions must collapse into the zero vector.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for stating 'No', 1 mark for the mathematical justification $\text{nullity}(T) \ge \dim(V) - \dim(W) > 0$.</div>
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
      <div class="question-card" data-category="diagonalization">
        <div class="card-top">
          <span class="q-pill extra">Predicted - Q19</span>
        </div>
        <div class="q-heading">The eigenvalues of a $3 \times 3$ matrix $A$ are $1, 2, -3$. Find the eigenvalues of $A^{-1}$, $A^3$, and $2A + 3I$.</div>
        <div class="solution-content">
          <p>By the spectral mapping properties of eigenvalues for any eigenvalue $\lambda$ of matrix $A$:<br>
          1. <strong>Eigenvalues of $A^{-1}$</strong> are $\frac{1}{\lambda}$:<br>
          $$\frac{1}{1} = 1, \quad \frac{1}{2}, \quad \frac{1}{-3} = -\frac{1}{3}$$
          2. <strong>Eigenvalues of $A^3$</strong> are $\lambda^3$:<br>
          $$1^3 = 1, \quad 2^3 = 8, \quad (-3)^3 = -27$$
          3. <strong>Eigenvalues of $2A + 3I$</strong> are $2\lambda + 3$:<br>
          $$2(1) + 3 = 5, \quad 2(2) + 3 = 7, \quad 2(-3) + 3 = -3$$</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Invariant Eigenvector Property</span>
                <div class="explain-line-title">$AX = \lambda X \implies A^k X = \lambda^k X$</div>
                <div class="explain-line-desc">Applying matrix powers or polynomials leaves the eigenvector unchanged while transforming the scalar eigenvalue identically.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Inverse Multiplicative Rule</span>
                <div class="explain-line-title">$A X = \lambda X \implies A^{-1} X = \frac{1}{\lambda} X$</div>
                <div class="explain-line-desc">Because all eigenvalues are non-zero ($1, 2, -3 \neq 0$), $\det(A) = -6 \neq 0$, guaranteeing $A^{-1}$ exists.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for $A^{-1}$ values $\{1, 1/2, -1/3\}$, 1 mark for $A^3$ and polynomial values.</div>
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
      <div class="question-card" data-category="diagonalization">
        <div class="card-top">
          <span class="q-pill extra">Predicted - Q20</span>
        </div>
        <div class="q-heading">State the necessary and sufficient condition for a square matrix $A$ of order $n$ to be diagonalizable in terms of its algebraic and geometric multiplicities.</div>
        <div class="solution-content">
          <p>A square matrix $A \in M_{n \times n}(F)$ is <strong>diagonalizable</strong> if and only if:<br>
          1. The characteristic polynomial of $A$ <strong>splits completely</strong> into linear factors over field $F$:
          $$p(\lambda) = (-1)^n (\lambda - \lambda_1)^{d_1} (\lambda - \lambda_2)^{d_2} \dots (\lambda - \lambda_k)^{d_k} \quad \text{where } \sum_{i=1}^k d_i = n$$
          2. For each distinct eigenvalue $\lambda_i$, its <strong>Geometric Multiplicity equals its Algebraic Multiplicity</strong>:
          $$\text{GM}(\lambda_i) = \text{nullity}(A - \lambda_i I) = n - \text{rank}(A - \lambda_i I) = d_i = \text{AM}(\lambda_i)$$
          Equivalently, $A$ possesses $n$ linearly independent eigenvectors that form a basis for $F^n$.</p>

          <div class="why-dropdown">
            <button class="why-toggle-btn" onclick="toggleWhy(this)">
              <span>Mathematical Explanation &amp; Step Reasoning</span>
              <span class="why-icon">&#9660;</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-Step Pedagogical Logic &amp; University Scoring Breakdown:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 1: Splitting Criterion</span>
                <div class="explain-line-title">All $n$ roots must lie in the working scalar field $F$</div>
                <div class="explain-line-desc">If a real matrix has complex eigenvalues with non-zero imaginary parts, it cannot be diagonalized over $\mathbb{R}$.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Zero Eigenspace Defect</span>
                <div class="explain-line-title">$\text{Defect}(\lambda_i) = \text{AM}(\lambda_i) - \text{GM}(\lambda_i) = 0$</div>
                <div class="explain-line-desc">A matrix fails to diagonalize only when the eigenspace is deficient ($\text{GM} < \text{AM}$). When defect is zero for all eigenvalues, a full modal matrix $P$ exists.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Scoring Rubric (2 Marks)</span>
                <div class="explain-line-title">University Evaluation Breakdown</div>
                <div class="explain-line-desc">1 mark for stating characteristic polynomial splits, 1 mark for equating geometric multiplicity to algebraic multiplicity ($\text{GM} = \text{AM}$) for each eigenvalue.</div>
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
  partB: String.raw`<div class="section-badge">Part B: Compulsory 16-Mark University Questions (Unit II)</div>

      <!-- Card B1 -->
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">Part B - Q1 (16 Marks)</span>
          <div class="q-heading">Let $T: \mathbb{R}^3 \to \mathbb{R}^2$ be defined by $T(a_1, a_2, a_3) = (a_1 - a_2, 2a_3)$. Find $N(T)$, $R(T)$, check if $T$ is 1-1 or onto, and verify the Dimension Theorem.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Compute kernel $N(T)$, range $R(T)$, analyze injectivity/surjectivity, and verify $\operatorname{nullity}(T) + \operatorname{rank}(T) = \dim(\mathbb{R}^3) = 3$.</p>
     <div class="partb-step">
       <div class="step-title">Step 1: Compute Null Space $N(T)$ and Nullity</div>
       <p>Set $T(a_1, a_2, a_3) = (0, 0) \implies a_1 - a_2 = 0 \implies a_2 = a_1$, and $2a_3 = 0 \implies a_3 = 0$.<br>
       Vector in $N(T)$ is $(a_1, a_1, 0) = a_1 (1, 1, 0)$.<br>
       - <strong>Basis for $N(T)$:</strong> $\{(1, 1, 0)\}$.<br>
       - <strong>Nullity:</strong> $\operatorname{nullity}(T) = \dim N(T) = 1$.</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 2: Compute Range Space $R(T)$ and Rank</div>
       <p>Evaluate $T$ on standard basis $\{e_1, e_2, e_3\}$ of $\mathbb{R}^3$:<br>
       $T(1, 0, 0) = (1, 0), \quad T(0, 1, 0) = (-1, 0), \quad T(0, 0, 1) = (0, 2)$.<br>
       The vectors $(1, 0)$ and $(0, 2)$ are linearly independent and span $\mathbb{R}^2$.<br>
       - <strong>Basis for $R(T)$:</strong> $\{(1, 0), (0, 1)\}$.<br>
       - <strong>Rank:</strong> $\operatorname{rank}(T) = \dim R(T) = 2$.</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 3: Verification of 1-1, Onto, and Dimension Theorem</div>
       <p>- <strong>One-to-One:</strong> Since $\operatorname{nullity}(T) = 1 > 0$, $N(T) \neq \{0\} \implies T$ is <strong>NOT one-to-one</strong>.<br>
       - <strong>Onto:</strong> Since $\operatorname{rank}(T) = 2 = \dim(\mathbb{R}^2)$, $T$ is <strong>ONTO (surjective)</strong>.<br>
       - <strong>Dimension Theorem:</strong>
       $$\operatorname{nullity}(T) + \operatorname{rank}(T) = 1 + 2 = 3 = \dim(\mathbb{R}^3)$$
       <span class="tag-result">Dimension Theorem Verified ($1 + 2 = 3$).</span></p>
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
                <div class="explain-line-title">Understanding the Linear Map from R3 to R2</div>
                <div class="explain-line-desc">We have a function T that takes a 3D coordinate vector (a1, a2, a3) and transforms it into a 2D coordinate vector (a1 - a2, 2a3). We must find its Null space (all inputs crushed to zero), its Range space (all possible outputs), check if it is injective (one-to-one) or surjective (onto), and verify the Rank-Nullity Theorem.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Defining Null Space and Kernel</span>
                <div class="explain-line-title">Inputs that Produce Zero Vector</div>
                <div class="explain-line-desc">The null space N(T) contains all vectors (a1, a2, a3) such that T(a1, a2, a3) = (0, 0). This gives two scalar equations: a1 - a2 = 0 and 2*a3 = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Solving for Null Space Vectors</span>
                <div class="explain-line-title">Parametric Solution of Kernel</div>
                <div class="explain-line-desc">From 2*a3 = 0 we get a3 = 0. From a1 - a2 = 0 we get a1 = a2. The coordinate a2 can be any real number t. Thus every vector in N(T) looks like (t, t, 0) = t*(1, 1, 0). The basis for N(T) is {(1, 1, 0)}, so nullity(T) = 1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Defining Range Space and Image</span>
                <div class="explain-line-title">All Attainable 2D Outputs</div>
                <div class="explain-line-desc">The range R(T) is the set of all outputs T(a1, a2, a3) = (a1 - a2, 2a3). We can decompose this as a1*(1, 0) + a2*(-1, 0) + a3*(0, 2). The vectors (1, 0) and (0, 2) span R2. Since they are independent, basis for R(T) is {(1, 0), (0, 1)}, and rank(T) = 2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Testing One-to-One Property</span>
                <div class="explain-line-title">Injective Map Condition</div>
                <div class="explain-line-desc">A linear transformation is one-to-one if and only if its null space contains only the zero vector (nullity = 0). Here nullity is 1, so distinct inputs like (1, 1, 0) and (0, 0, 0) produce the same output (0, 0). Therefore, T is NOT one-to-one.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Testing Onto Property</span>
                <div class="explain-line-title">Surjective Map Condition</div>
                <div class="explain-line-desc">A linear transformation is onto if its range equals the target space R2 (rank = dim(R2)). Here rank(T) = 2, which equals dim(R2) = 2. Therefore, T IS onto.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Verifying the Dimension Theorem</span>
                <div class="explain-line-title">Rank-Nullity Balance Check</div>
                <div class="explain-line-desc">Dimension Theorem states: dim(domain) = nullity(T) + rank(T). Domain is R3, so dim(domain) = 3. Right side: nullity(T) + rank(T) = 1 + 2 = 3. Left side equals right side, so the theorem is completely verified.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Null space derivation and nullity: 4 marks; Range space derivation and rank: 4 marks; 1-1 and onto analysis: 4 marks; Dimension theorem verification and conclusion: 4 marks.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card B2 -->
      <div class="question-card" data-category="transformation">
        <div class="card-top">
          <span class="q-pill">Part B - Q2 (16 Marks)</span>
          <div class="q-heading">Consider the basis $S = \{v_1, v_2, v_3\}$ for $\mathbb{R}^3$, where $v_1 = (1,1,1), v_2 = (1,1,0), v_3 = (1,0,0)$. Let $T: \mathbb{R}^3 \to \mathbb{R}^2$ be the linear transformation such that $T(v_1) = (1,0), T(v_2) = (2,-1), T(v_3) = (4,3)$. Find the formula for $T(x_1, x_2, x_3)$, and compute $T(2,-3,5)$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Express generic vector $(x_1, x_2, x_3)$ as a linear combination of $S$, use linearity of $T$, and evaluate at $(2, -3, 5)$.</p>
     <div class="partb-step">
       <div class="step-title">Step 1: Express $(x_1, x_2, x_3)$ in terms of basis $S$</div>
       <p>$$(x_1, x_2, x_3) = c_1 (1, 1, 1) + c_2 (1, 1, 0) + c_3 (1, 0, 0)$$
       Equating coordinates:<br>
       1. $c_1 = x_3$<br>
       2. $c_1 + c_2 = x_2 \implies c_2 = x_2 - x_3$<br>
       3. $c_1 + c_2 + c_3 = x_1 \implies c_3 = x_1 - (c_1 + c_2) = x_1 - x_2$</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 2: Apply Linearity to Find $T(x_1, x_2, x_3)$</div>
       <p>$$T(x_1, x_2, x_3) = c_1 T(v_1) + c_2 T(v_2) + c_3 T(v_3)$$
       $$= x_3 (1, 0) + (x_2 - x_3) (2, -1) + (x_1 - x_2) (4, 3)$$
       Grouping coordinates:<br>
       - First coordinate: $x_3 + 2(x_2 - x_3) + 4(x_1 - x_2) = 4x_1 - 2x_2 - x_3$<br>
       - Second coordinate: $0 - 1(x_2 - x_3) + 3(x_1 - x_2) = 3x_1 - 4x_2 + x_3$<br><br>
       $$\mathbf{T(x_1, x_2, x_3) = (4x_1 - 2x_2 - x_3, \; 3x_1 - 4x_2 + x_3)}$$</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 3: Compute $T(2, -3, 5)$</div>
       <p>Substitute $x_1 = 2, x_2 = -3, x_3 = 5$:<br>
       - First component: $4(2) - 2(-3) - 5 = 8 + 6 - 5 = 9$<br>
       - Second component: $3(2) - 4(-3) + 5 = 6 + 12 + 5 = 23$<br>
       <span class="tag-result">T(2, -3, 5) = (9, 23)</span></p>
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
                <div class="explain-line-title">Transformation Defined on a Non-Standard Basis</div>
                <div class="explain-line-desc">We are given a basis S = {v1 = (1,1,1), v2 = (1,1,0), v3 = (1,0,0)} of R3, and their images under T: T(v1) = (1, 0), T(v2) = (2, -1), T(v3) = (4, 3). We need to find the general formula for T(x1, x2, x3) and evaluate T(2, -3, 5).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Linear Extension Principle</span>
                <div class="explain-line-title">Coordinates in Basis S</div>
                <div class="explain-line-desc">Because S is a basis, any arbitrary vector (x1, x2, x3) can be uniquely expressed as c1*v1 + c2*v2 + c3*v3. Then by linearity of T, T(x1, x2, x3) = c1*T(v1) + c2*T(v2) + c3*T(v3).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Setting Up System for Coordinates c1, c2, c3</span>
                <div class="explain-line-title">Vector Component Equations</div>
                <div class="explain-line-desc">(x1, x2, x3) = c1*(1, 1, 1) + c2*(1, 1, 0) + c3*(1, 0, 0). Equating components gives: c1 = x3, c1 + c2 = x2, and c1 + c2 + c3 = x1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Solving for Coefficients</span>
                <div class="explain-line-title">Back-Substitution Steps</div>
                <div class="explain-line-desc">From third component, c1 = x3. From second component, c2 = x2 - c1 = x2 - x3. From first component, c3 = x1 - (c1 + c2) = x1 - x2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Applying Linearity of T</span>
                <div class="explain-line-title">Linear Combination of Output Vectors</div>
                <div class="explain-line-desc">T(x1, x2, x3) = x3*(1, 0) + (x2 - x3)*(2, -1) + (x1 - x2)*(4, 3). Expanding component-wise gives: First component = x3 + 2*x2 - 2*x3 + 4*x1 - 4*x2 = 4*x1 - 2*x2 - x3. Second component = 0 - x2 + x3 + 3*x1 - 3*x2 = 3*x1 - 4*x2 + x3.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: General Formula Established</span>
                <div class="explain-line-title">Checking Result</div>
                <div class="explain-line-desc">Formula is T(x1, x2, x3) = (4*x1 - 2*x2 - x3, 3*x1 - 4*x2 + x3). Checking with v1 = (1, 1, 1): (4 - 2 - 1, 3 - 4 + 1) = (1, 0), matching T(v1) perfectly.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Evaluating at Target Vector (2, -3, 5)</span>
                <div class="explain-line-title">Specific Numerical Substitution</div>
                <div class="explain-line-desc">Substitute x1 = 2, x2 = -3, x3 = 5: First component = 4*(2) - 2*(-3) - 5 = 8 + 6 - 5 = 9. Second component = 3*(2) - 4*(-3) + 5 = 6 + 12 + 5 = 23. Thus T(2, -3, 5) = (9, 23).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Coordinate equations setup: 4 marks; Solving for c1, c2, c3: 4 marks; Linearity expansion for general formula: 5 marks; Evaluation at (2, -3, 5): 3 marks.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card B3 -->
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">Part B - Q3 (16 Marks)</span>
          <div class="q-heading">Let $T: M_{2 \times 3}(F) \to M_{2 \times 2}(F)$ be defined by $T\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \end{pmatrix} = \begin{pmatrix} 2a_{11} - a_{12} & a_{13} + 2a_{12} \\ 0 & 0 \end{pmatrix}$. Find $N(T)$, $R(T)$, check if $T$ is 1-1 or onto, and verify the Dimension Theorem.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Find bases for $N(T)$ and $R(T)$, and verify $\operatorname{nullity}(T) + \operatorname{rank}(T) = \dim(M_{2 \times 3}(F)) = 6$.</p>
     <div class="partb-step">
       <div class="step-title">Step 1: Compute Null Space $N(T)$ and Nullity</div>
       <p>Set $T(A) = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$:<br>
       $$2a_{11} - a_{12} = 0 \implies a_{12} = 2a_{11}$$
       $$a_{13} + 2a_{12} = 0 \implies a_{13} = -2(2a_{11}) = -4a_{11}$$
       Entries $a_{21}, a_{22}, a_{23}$ do not appear, so they are free.<br>
       Four free parameters: $a_{11}, a_{21}, a_{22}, a_{23}$.<br>
       - <strong>Basis for $N(T)$:</strong>
       $$\left\{ \begin{pmatrix} 1 & 2 & -4 \\ 0 & 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} \right\}$$
       - <strong>Nullity:</strong> $\operatorname{nullity}(T) = 4$.</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 2: Compute Range Space $R(T)$ and Rank</div>
       <p>Every matrix in $R(T)$ has the form:
       $$\begin{pmatrix} 2a_{11}-a_{12} & a_{13}+2a_{12} \\ 0 & 0 \end{pmatrix} = \alpha \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + \beta \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$$
       - <strong>Basis for $R(T)$:</strong> $\left\{ \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \right\}$.<br>
       - <strong>Rank:</strong> $\operatorname{rank}(T) = 2$.</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 3: Verification</div>
       <p>- <strong>One-to-One:</strong> $\operatorname{nullity}(T) = 4 > 0 \implies$ NOT one-to-one.<br>
       - <strong>Onto:</strong> Codomain dimension is $\dim(M_{2 \times 2}) = 4$. Since $\operatorname{rank}(T) = 2 < 4 \implies$ NOT onto.<br>
       - <strong>Dimension Theorem:</strong>
       $$\operatorname{nullity}(T) + \operatorname{rank}(T) = 4 + 2 = 6 = \dim(M_{2 \times 3}(F))$$
       <span class="tag-result">Dimension Theorem Verified ($4 + 2 = 6$).</span></p>
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
                <div class="explain-line-title">Matrix Space Transformation</div>
                <div class="explain-line-desc">T takes a 2x3 matrix A and maps it to a 2x2 matrix whose top row is (2*a11 - a12, a13 + 2*a12) and bottom row is (0, 0). Domain is M2x3 (dimension = 6), and codomain is M2x2 (dimension = 4).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Null Space Formulation</span>
                <div class="explain-line-title">Equations for Zero Output Matrix</div>
                <div class="explain-line-desc">T(A) equals the 2x2 zero matrix if and only if 2*a11 - a12 = 0 and a13 + 2*a12 = 0. Notice that a21, a22, and a23 do not appear in the output at all!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Free Variables and Nullity</span>
                <div class="explain-line-title">Counting Degrees of Freedom</div>
                <div class="explain-line-desc">From the two equations: a12 = 2*a11, and a13 = -2*a12 = -4*a11. The entry a11 is free. Furthermore, the entire bottom row entries a21, a22, a23 are completely free (can take any real value). Total free variables = 1 + 3 = 4. Hence nullity(T) = 4.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Basis of Null Space</span>
                <div class="explain-line-title">Explicit Parametric Matrices</div>
                <div class="explain-line-desc">Setting one free parameter to 1 and the others to 0 yields 4 basis matrices for N(T). Thus nullity(T) = 4.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Range Space and Rank</span>
                <div class="explain-line-title">Dimension of Attainable Output Matrices</div>
                <div class="explain-line-desc">The output matrix has zero in the entire bottom row. The top row can take any arbitrary values (u, v) by choosing a11, a12, a13 appropriately. Hence R(T) is spanned by [[1, 0], [0, 0]] and [[0, 1], [0, 0]]. Rank(T) = 2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Injectivity and Surjectivity</span>
                <div class="explain-line-title">Testing 1-1 and Onto</div>
                <div class="explain-line-desc">Since nullity(T) = 4 > 0, T is NOT one-to-one. Since rank(T) = 2 < dim(M2x2) = 4, T is NOT onto (bottom row can never be non-zero).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Verifying Dimension Theorem</span>
                <div class="explain-line-title">Sum Equality Check</div>
                <div class="explain-line-desc">dim(domain) = dim(M2x3) = 2*3 = 6. Nullity(T) + Rank(T) = 4 + 2 = 6. Equality holds, fully confirming the Dimension Theorem.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Null space system setup and nullity = 4: 5 marks; Range space span and rank = 2: 4 marks; 1-1 and onto testing: 3 marks; Dimension theorem verification: 4 marks.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card B4 -->
      <div class="question-card" data-category="kernel">
        <div class="card-top">
          <span class="q-pill">Part B - Q4 (16 Marks)</span>
          <div class="q-heading">State and prove the Dimension Theorem (Rank-Nullity Theorem) for linear transformations.</div>
        </div>
        <div class="solution-content">
          <p><strong>Statement:</strong> Let $V$ and $W$ be vector spaces over field $F$ with $\dim(V) = n$. If $T: V \to W$ is a linear transformation, then:
     $$\operatorname{nullity}(T) + \operatorname{rank}(T) = \dim(V)$$</p>
     <div class="partb-step">
       <div class="step-title">Proof — Step 1: Set up Basis for $N(T)$</div>
       <p>Let $\operatorname{nullity}(T) = \dim(N(T)) = k$.<br>
       Let $\{v_1, v_2, \dots, v_k\}$ be a basis for $N(T)$.<br>
       Since $N(T)$ is a subspace of finite-dimensional space $V$, by the <em>Basis Extension Theorem</em>, we can extend this basis to a basis of $V$:
       $$\beta = \{v_1, \dots, v_k, \; u_1, \dots, u_m\}$$
       where $k + m = n = \dim(V)$.</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Proof — Step 2: Show $S = \{T(u_1), \dots, T(u_m)\}$ Spans $R(T)$</div>
       <p>Let $w \in R(T)$. Then $\exists v \in V$ such that $T(v) = w$.<br>
       Express $v$ in basis $\beta$:
       $$v = \sum_{i=1}^k a_i v_i + \sum_{j=1}^m b_j u_j$$
       Applying linear transformation $T$:
       $$w = T(v) = \sum_{i=1}^k a_i T(v_i) + \sum_{j=1}^m b_j T(u_j)$$
       Since $v_i \in N(T)$, $T(v_i) = 0$. Thus:
       $$w = \sum_{j=1}^m b_j T(u_j)$$
       Therefore, $S$ spans $R(T)$.</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Proof — Step 3: Show $S$ is Linearly Independent</div>
       <p>Suppose $\sum_{j=1}^m c_j T(u_j) = 0$. By linearity:
       $$T\left( \sum_{j=1}^m c_j u_j \right) = 0 \implies \sum_{j=1}^m c_j u_j \in N(T)$$
       Since $\{v_1, \dots, v_k\}$ is a basis for $N(T)$, there exist scalars $d_1, \dots, d_k$ such that:
       $$\sum_{j=1}^m c_j u_j = \sum_{i=1}^k d_i v_i \implies \sum_{i=1}^k d_i v_i - \sum_{j=1}^m c_j u_j = 0$$
       Since $\beta = \{v_1, \dots, v_k, u_1, \dots, u_m\}$ is linearly independent in $V$, all coefficients must be zero:
       $$c_1 = c_2 = \dots = c_m = 0$$
       Hence $S$ is linearly independent and forms a basis for $R(T)$.<br>
       Thus $\operatorname{rank}(T) = \dim(R(T)) = m$.<br><br>
       $$\operatorname{nullity}(T) + \operatorname{rank}(T) = k + m = n = \dim(V)$$
       <span class="tag-result">Hence the Dimension Theorem is proved.</span></p>
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
                <div class="explain-line-title">Statement of the Fundamental Theorem</div>
                <div class="explain-line-desc">Let V and W be vector spaces over a field F, with V finite-dimensional. Let T: V -> W be a linear transformation. Then: dim(V) = nullity(T) + rank(T), where nullity(T) = dim(N(T)) and rank(T) = dim(R(T)).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Proof Strategy and Setup</span>
                <div class="explain-line-title">Extending a Basis of the Kernel</div>
                <div class="explain-line-desc">Let dim(V) = n, and let nullity(T) = k (where k <= n). Let {v1, v2, ..., vk} be a basis for the null space N(T). By the Basis Extension Theorem, we can extend this to a complete basis for V: B = {v1, ..., vk, u1, ..., u_(n-k)}.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Constructing Candidate Basis for Range Space</span>
                <div class="explain-line-title">Images of the Extension Vectors</div>
                <div class="explain-line-desc">Consider the set S' = {T(u1), T(u2), ..., T(u_(n-k))} in W. Notice that T(v1) = ... = T(vk) = 0 because vi are in the null space! We must prove S' is a basis for R(T).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Proving S' Spans R(T)</span>
                <div class="explain-line-title">Every Output Expressed as Combination</div>
                <div class="explain-line-desc">Any w in R(T) is T(x) for some x in V. Write x = sum(ai*vi) + sum(bj*uj). Then T(x) = sum(ai*T(vi)) + sum(bj*T(uj)) = 0 + sum(bj*T(uj)). Therefore S' spans R(T).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Proving S' is Linearly Independent</span>
                <div class="explain-line-title">Setting Combination to Zero</div>
                <div class="explain-line-desc">Assume c1*T(u1) + ... + c_(n-k)*T(u_(n-k)) = 0. By linearity, T(c1*u1 + ... + c_(n-k)*u_(n-k)) = 0. This means the vector z = c1*u1 + ... + c_(n-k)*u_(n-k) belongs to the null space N(T)!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Applying Null Space Basis Expansion</span>
                <div class="explain-line-title">Extracting Zero Coefficients</div>
                <div class="explain-line-desc">Since z is in N(T), z can be written as d1*v1 + ... + dk*vk. Equating: c1*u1 + ... + c_(n-k)*u_(n-k) - (d1*v1 + ... + dk*vk) = 0. Since {v1..vk, u1..u_(n-k)} is a basis for V, all coefficients must be zero: c1 = ... = c_(n-k) = 0. Thus S' is linearly independent.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Rank Equals n - k</div>
                <div class="explain-line-desc">Since S' is linearly independent and spans R(T), it forms a basis for R(T). Thus rank(T) = dim(R(T)) = n - k. Adding nullity(T): nullity(T) + rank(T) = k + (n - k) = n = dim(V).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Theorem statement and basis extension setup: 4 marks; Proof that S' spans R(T): 4 marks; Proof that S' is linearly independent: 6 marks; Final dimension equality: 2 marks.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card B5 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill">Part B - Q5 (16 Marks)</span>
          <div class="q-heading">Let $L: \mathbb{R}^3 \to \mathbb{R}^3$ be a linear transformation whose matrix representation $A$ with respect to the standard basis is given by $A = \begin{pmatrix} 2 & 1 & 1 \\ 2 & 3 & 2 \\ 1 & 1 & 2 \end{pmatrix}$. Find the eigenvalues of $L$ and a basis of eigenvectors.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Find characteristic ro\dots of $A$, determine their eigenspaces, and find 3 linearly independent eigenvectors.</p>
     <div class="partb-step">
       <div class="step-title">Step 1: Characteristic Equation</div>
       <p>$$\det(A - \lambda I) = 0 \implies \lambda^3 - S_1 \lambda^2 + S_2 \lambda - S_3 = 0$$
       - $S_1 = \operatorname{tr}(A) = 2 + 3 + 2 = 7$<br>
       - $S_2 = \text{Sum of minors of diagonal elements} = \det\begin{pmatrix} 3 & 2 \\ 1 & 2 \end{pmatrix} + \det\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} + \det\begin{pmatrix} 2 & 1 \\ 2 & 3 \end{pmatrix} = (6-2) + (4-1) + (6-2) = 4 + 3 + 4 = 11$<br>
       - $S_3 = \det(A) = 2(6-2) - 1(4-2) + 1(2-3) = 8 - 2 - 1 = 5$<br><br>
       Characteristic Equation:
       $$\lambda^3 - 7\lambda^2 + 11\lambda - 5 = 0$$
       Testing $\lambda = 1$: $1 - 7 + 11 - 5 = 0$ (root).<br>
       Dividing: $(\lambda - 1)(\lambda^2 - 6\lambda + 5) = (\lambda - 1)^2 (\lambda - 5) = 0$.<br>
       - <strong>Eigenvalues:</strong> $\lambda_1 = 1$ (multiplicity 2), $\quad \lambda_2 = 5$ (multiplicity 1).</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 2: Eigenvectors for $\lambda = 5$</div>
       <p>$$(A - 5I)X = 0 \implies \begin{pmatrix} -3 & 1 & 1 \\ 2 & -2 & 2 \\ 1 & 1 & -3 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$
       Using equations 1 & 2 by cross-multiplication:<br>
       $\frac{x_1}{1(2) - 1(-2)} = \frac{x_2}{1(2) - (-3)(2)} = \frac{x_3}{(-3)(-2) - 1(2)} \implies \frac{x_1}{4} = \frac{x_2}{8} = \frac{x_3}{4} \implies \frac{x_1}{1} = \frac{x_2}{2} = \frac{x_3}{1}$.<br>
       - <strong>Eigenvector $X_1$:</strong> $\begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$.</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 3: Eigenvectors for $\lambda = 1$</div>
       <p>$$(A - 1I)X = 0 \implies \begin{pmatrix} 1 & 1 & 1 \\ 2 & 2 & 2 \\ 1 & 1 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$
       All three rows are identical: $x_1 + x_2 + x_3 = 0 \implies x_1 = -x_2 - x_3$.<br>
       Here $x_2$ and $x_3$ are two independent free variables:<br>
       - Setting $x_2 = 1, x_3 = 0 \implies X_2 = \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}$.<br>
       - Setting $x_2 = 0, x_3 = 1 \implies X_3 = \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$.<br><br>
       <span class="tag-result">Basis of Eigenvectors: $\left\{ \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}, \; \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}, \; \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} \right\}$</span></p>
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
                <div class="explain-line-title">Understanding Characteristic Roots and Vectors</div>
                <div class="explain-line-desc">Given the 3x3 matrix A = [[2, 1, 1], [2, 3, 2], [1, 1, 2]], we must find all eigenvalues lambda from det(A - lambda*I) = 0, and for each eigenvalue, solve (A - lambda*I)x = 0 to find a basis of eigenvectors.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Forming Characteristic Equation</span>
                <div class="explain-line-title">Polynomial Expansion</div>
                <div class="explain-line-desc">The characteristic equation is det(A - lambda*I) = 0, which expands to lambda^3 - s1*lambda^2 + s2*lambda - s3 = 0, where s1 = trace(A), s2 = sum of principal minors, and s3 = det(A).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Calculating Invariants s1, s2, s3</span>
                <div class="explain-line-title">Direct Matrix Computations</div>
                <div class="explain-line-desc">s1 = 2 + 3 + 2 = 7. s2 = det[[3,2],[1,2]] + det[[2,1],[1,2]] + det[[2,1],[2,3]] = (6-2) + (4-1) + (6-2) = 4 + 3 + 4 = 11. s3 = det(A) = 2*(6-2) - 1*(4-2) + 1*(2-3) = 8 - 2 - 1 = 5. Equation: lambda^3 - 7*lambda^2 + 11*lambda - 5 = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Solving for Eigenvalues</span>
                <div class="explain-line-title">Synthetic Division</div>
                <div class="explain-line-desc">Testing lambda = 1: 1 - 7 + 11 - 5 = 0, so lambda = 1 is a root. Dividing: (lambda - 1)*(lambda^2 - 6*lambda + 5) = (lambda - 1)*(lambda - 1)*(lambda - 5) = 0. The eigenvalues are lambda = 1 (repeated twice) and lambda = 5 (distinct).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Eigenvector for Distinct Root lambda = 5</span>
                <div class="explain-line-title">Solving Homogeneous System</div>
                <div class="explain-line-desc">For lambda = 5, [A - 5*I]x = 0 gives: [[-3, 1, 1], [2, -2, 2], [1, 1, -3]]x = 0. Cross-multiplying coefficients gives eigenvector X1 = (1, 2, 1). Check: A*X1 = (5, 10, 5) = 5*X1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Eigenvectors for Repeated Root lambda = 1</span>
                <div class="explain-line-title">Checking Geometric Multiplicity</div>
                <div class="explain-line-desc">For lambda = 1, [A - I]x = 0 gives: [[1, 1, 1], [2, 2, 2], [1, 1, 1]]x = 0. Notice that all three rows are identical multiples of x1 + x2 + x3 = 0! This is a single equation with 2 free variables! Setting x2 = 1, x3 = 0 gives X2 = (-1, 1, 0). Setting x2 = 0, x3 = 1 gives X3 = (-1, 0, 1).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Eigenbasis and Diagonalizability</div>
                <div class="explain-line-desc">Because the repeated root lambda = 1 produces 2 linearly independent eigenvectors, the geometric multiplicity equals the algebraic multiplicity (2 = 2). Thus A has 3 independent eigenvectors and is diagonalizable.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Characteristic polynomial s1, s2, s3 derivation: 4 marks; Eigenvalues computation: 3 marks; Eigenvector for lambda = 5: 3 marks; Eigenvectors for lambda = 1 (2 free variables): 4 marks; Conclusion on diagonalizability: 2 marks.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card B6 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill">Part B - Q6 (16 Marks)</span>
          <div class="q-heading">Let $T: P_2(\mathbb{R}) \to P_2(\mathbb{R})$ be defined by $T(f(x)) = f(x) + (x+1)f'(x)$. Find the matrix of $T$ with respect to standard basis $\beta = \{1, x, x^2\}$, and compute its eigenvalues and eigenvectors.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Form matrix $[T]_\beta$ through standard basis images, find characteristic ro\dots, and compute eigenspaces in $P_2(\mathbb{R})$.</p>
     <div class="partb-step">
       <div class="step-title">Step 1: Construct Matrix Representation $[T]_\beta$</div>
       <p>Standard basis is $\{1, x, x^2\}$:<br>
       - $T(1) = 1 + (x+1)(0) = 1 = 1(1) + 0(x) + 0(x^2) \implies [T(1)]_\beta = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$<br>
       - $T(x) = x + (x+1)(1) = 2x + 1 = 1(1) + 2(x) + 0(x^2) \implies [T(x)]_\beta = \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix}$<br>
       - $T(x^2) = x^2 + (x+1)(2x) = 3x^2 + 2x = 0(1) + 2(x) + 3(x^2) \implies [T(x^2)]_\beta = \begin{bmatrix} 0 \\ 2 \\ 3 \end{bmatrix}$<br><br>
       $$A = [T]_\beta = \begin{bmatrix} 1 & 1 & 0 \\ 0 & 2 & 2 \\ 0 & 0 & 3 \end{bmatrix}$$</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 2: Eigenvalues</div>
       <p>Since $A$ is <strong>upper triangular</strong>, its eigenvalues are the diagonal entries:
       $$\lambda_1 = 1, \quad \lambda_2 = 2, \quad \lambda_3 = 3$$</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 3: Eigenvectors</div>
       <p>- <strong>For $\lambda = 1$:</strong> $(A - I)X = 0 \implies c_2 = c_3 = 0, c_1 \neq 0 \implies X_1 = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} \implies p_1(x) = 1$.<br>
       - <strong>For $\lambda = 2$:</strong> $(A - 2I)X = 0 \implies c_3 = 0, -c_1 + c_2 = 0 \implies c_1 = c_2 \implies X_2 = \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix} \implies p_2(x) = 1 + x$.<br>
       - <strong>For $\lambda = 3$:</strong> $(A - 3I)X = 0 \implies -2c_1 + c_2 = 0, -c_2 + 2c_3 = 0 \implies c_2 = 2c_3, c_1 = c_3 \implies X_3 = \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix} \implies p_3(x) = (x+1)^2$.<br><br>
       <span class="tag-result">Basis of Eigenvectors: $\{1, \; x+1, \; (x+1)^2\}$</span></p>
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
                <div class="explain-line-title">Linear Operator on Polynomial Space</div>
                <div class="explain-line-desc">The operator T acts on polynomials of degree at most 2: T(f(x)) = f(x) + (x + 1)*f'(x). We must find its matrix with respect to standard basis beta = {1, x, x^2}, find eigenvalues, and find eigenvectors.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Operating on Basis Polynomials</span>
                <div class="explain-line-title">Computing Column Images</div>
                <div class="explain-line-desc">For basis element 1: f(x) = 1, f'(x) = 0. T(1) = 1 + (x + 1)*0 = 1 = 1*(1) + 0*(x) + 0*(x^2). Column 1 = [1, 0, 0]^T. For element x: f(x) = x, f'(x) = 1. T(x) = x + (x + 1)*1 = 1 + 2x = 1*(1) + 2*(x) + 0*(x^2). Column 2 = [1, 2, 0]^T. For element x^2: f(x) = x^2, f'(x) = 2x. T(x^2) = x^2 + (x + 1)*2x = 2x + 3x^2 = 0*(1) + 2*(x) + 3*(x^2). Column 3 = [0, 2, 3]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Matrix Representation [T]_beta</span>
                <div class="explain-line-title">Upper Triangular Structure</div>
                <div class="explain-line-desc">Assembling the columns gives: A = [[1, 1, 0], [0, 2, 2], [0, 0, 3]]. Notice that this matrix is upper triangular!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Finding Eigenvalues Directly</span>
                <div class="explain-line-title">Diagonal Entries of Triangular Matrix</div>
                <div class="explain-line-desc">For any triangular matrix, the eigenvalues are simply the diagonal entries! Therefore, lambda1 = 1, lambda2 = 2, lambda3 = 3. All three eigenvalues are distinct.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Eigenvector for lambda = 1</span>
                <div class="explain-line-title">Constant Polynomial</div>
                <div class="explain-line-desc">Solving (A - 1*I)v = 0: row 1 is [0, 1, 0]v = 0 -> v2 = 0; row 2 is [0, 1, 2]v = 0 -> v3 = 0. v1 is free. Eigenvector is [1, 0, 0]^T, which corresponds to the constant polynomial p1(x) = 1.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Eigenvectors for lambda = 2 and lambda = 3</span>
                <div class="explain-line-title">First and Second Degree Polynomials</div>
                <div class="explain-line-desc">For lambda = 2: solving (A - 2*I)v = 0 gives v = [1, 1, 0]^T, corresponding to p2(x) = 1 + x. For lambda = 3: solving (A - 3*I)v = 0 gives v = [1, 2, 1]^T, corresponding to p3(x) = 1 + 2x + x^2 = (x + 1)^2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Verification and Final Answer</span>
                <div class="explain-line-title">Direct Derivative Check</div>
                <div class="explain-line-desc">Check p3(x) = (x+1)^2: T((x+1)^2) = (x+1)^2 + (x+1)*2(x+1) = (x+1)^2 + 2(x+1)^2 = 3*(x+1)^2 = 3*p3(x). The eigenvalue 3 is confirmed.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Images of basis vectors: 4 marks; Matrix representation assembly: 3 marks; Eigenvalues determination: 3 marks; Three polynomial eigenvectors: 5 marks; Verification: 1 mark.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card B7 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill">Part B - Q7 (16 Marks)</span>
          <div class="q-heading">Let $T$ be the linear operator on $V_3(\mathbb{R})$ defined by $T(a_1, a_2, a_3) = (4a_1 + a_3, \; 2a_1 + 3a_2 + 2a_3, \; a_1 + 4a_3)$ and $\beta$ be the standard basis. Determine the eigenspaces of $T$ corresponding to each eigenvalue.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Find matrix $[T]_\beta$, eigenvalues, and determine the eigenspace $E_\lambda = \{v \mid (A - \lambda I)v = 0\}$ for each eigenvalue.</p>
     <div class="partb-step">
       <div class="step-title">Step 1: Matrix Representation $[T]_\beta$</div>
       <p>$$A = \begin{pmatrix} 4 & 0 & 1 \\ 2 & 3 & 2 \\ 1 & 0 & 4 \end{pmatrix}$$
       Characteristic Equation:
       $$\det(A - \lambda I) = (3 - \lambda) \left[ (4-\lambda)^2 - 1 \right] = (3 - \lambda)(\lambda - 3)(\lambda - 5) = -(\lambda - 3)^2 (\lambda - 5) = 0$$
       - <strong>Eigenvalues:</strong> $\lambda_1 = 3$ (multiplicity 2), $\quad \lambda_2 = 5$ (multiplicity 1).</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 2: Eigenspace for $\lambda = 3$</div>
       <p>$$(A - 3I)X = 0 \implies \begin{pmatrix} 1 & 0 & 1 \\ 2 & 0 & 2 \\ 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$
       All three equations reduce to $x_1 + x_3 = 0 \implies x_3 = -x_1$.<br>
       Notice $x_2$ does not appear in the equation, so $x_2$ is free!<br>
       A generic vector in $E_3$ is:
       $$\begin{pmatrix} x_1 \\ x_2 \\ -x_1 \end{pmatrix} = x_1 \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} + x_2 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$$
       - <strong>Eigenspace $E_3$:</strong> $\operatorname{span}\left\{ \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}, \; \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \right\}$ with $\dim(E_3) = 2$.</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 3: Eigenspace for $\lambda = 5$</div>
       <p>$$(A - 5I)X = 0 \implies \begin{pmatrix} -1 & 0 & 1 \\ 2 & -2 & 2 \\ 1 & 0 & -1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$
       From row 1: $x_1 = x_3$.<br>
       From row 2: $2x_1 - 2x_2 + 2x_1 = 0 \implies 4x_1 = 2x_2 \implies x_2 = 2x_1$.<br>
       - <strong>Eigenspace $E_5$:</strong> $\operatorname{span}\left\{ \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix} \right\}$ with $\dim(E_5) = 1$.<br><br>
       <span class="tag-result">Total independent eigenvectors = $2 + 1 = 3 = \dim(V_3(\mathbb{R})) \implies T$ is Diagonalizable.</span></p>
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
                <div class="explain-line-title">Linear Operator in R3</div>
                <div class="explain-line-desc">Given T(a1, a2, a3) = (4*a1 + a3, 2*a1 + 3*a2 + 2*a3, a1 + 4*a3). We must find the matrix representation, characteristic equation, eigenvalues, and full basis for each eigenspace E_lambda.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Matrix with Respect to Standard Basis</span>
                <div class="explain-line-title">Reading Off Coefficients</div>
                <div class="explain-line-desc">Row 1: [4, 0, 1]. Row 2: [2, 3, 2]. Row 3: [1, 0, 4]. Matrix A = [[4, 0, 1], [2, 3, 2], [1, 0, 4]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Computing Characteristic Equation</span>
                <div class="explain-line-title">Block Matrix Determinant</div>
                <div class="explain-line-desc">det(A - lambda*I) = (3 - lambda)*det[[4 - lambda, 1], [1, 4 - lambda]] = (3 - lambda)*((4 - lambda)^2 - 1) = (3 - lambda)*(lambda^2 - 8*lambda + 15) = (3 - lambda)*(lambda - 3)*(lambda - 5) = -(lambda - 3)^2 * (lambda - 5) = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Identifying Eigenvalues and Multiplicities</span>
                <div class="explain-line-title">Repeated and Simple Roots</div>
                <div class="explain-line-desc">Eigenvalues are lambda = 5 (algebraic multiplicity 1) and lambda = 3 (algebraic multiplicity 2, repeated).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Eigenspace for lambda = 5</span>
                <div class="explain-line-title">One-Dimensional Eigenspace</div>
                <div class="explain-line-desc">Solve [A - 5*I]x = 0: [[-1, 0, 1], [2, -2, 2], [1, 0, -1]]x = 0. From row 1: x3 = x1. From row 2: 2*x1 - 2*x2 + 2*x1 = 0 -> x2 = 2*x1. Setting x1 = 1 gives eigenvector X1 = (1, 2, 1). E5 = span{(1, 2, 1)}.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Eigenspace for lambda = 3</span>
                <div class="explain-line-title">Two-Dimensional Eigenspace</div>
                <div class="explain-line-desc">Solve [A - 3*I]x = 0: [[1, 0, 1], [2, 0, 2], [1, 0, 1]]x = 0. All three rows reduce to a single equation: x1 + x3 = 0, with x2 completely unrestricted! Free variables: x2 and x3. Setting x2 = 1, x3 = 0 gives X2 = (0, 1, 0). Setting x2 = 0, x3 = 1 gives X3 = (-1, 0, 1). E3 = span{(0, 1, 0), (-1, 0, 1)}.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Complete Eigenspace Decomposition</div>
                <div class="explain-line-desc">Since the geometric multiplicity of lambda = 3 is 2, the eigenspaces provide 3 linearly independent eigenvectors. R3 decomposes into the direct sum of E3 and E5.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Matrix representation: 3 marks; Characteristic equation and roots: 4 marks; Eigenspace for lambda = 5: 3 marks; Eigenspace for lambda = 3 (2 eigenvectors): 5 marks; Summary conclusion: 1 mark.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card B8 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill">Part B - Q8 (16 Marks)</span>
          <div class="q-heading">Let $T$ be the linear operator on $P_2(\mathbb{R})$ defined by $T(f(x)) = f(1) + [f'(0)]x + [f'(0) + f''(0)]x^2$ and $\beta = \{1, x, x^2\}$ be the standard basis. Test the diagonalizability of $T$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Find $[T]_\beta$, eigenvalues, and check whether $\operatorname{GM}(\lambda) = \operatorname{AM}(\lambda)$ for all eigenvalues.</p>
     <div class="partb-step">
       <div class="step-title">Step 1: Construct Matrix Representation $[T]_\beta$</div>
       <p>Standard basis is $v_1 = 1, v_2 = x, v_3 = x^2$.<br>
       - For $f(x) = 1$: $f(1) = 1, f'(0) = 0, f''(0) = 0 \implies T(1) = 1 + 0x + 0x^2 = 1 \implies [T(1)]_\beta = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$<br>
       - For $f(x) = x$: $f(1) = 1, f'(0) = 1, f''(0) = 0 \implies T(x) = 1 + 1x + 1x^2 \implies [T(x)]_\beta = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$<br>
       - For $f(x) = x^2$: $f(1) = 1, f'(0) = 0, f''(0) = 2 \implies T(x^2) = 1 + 0x + 2x^2 \implies [T(x^2)]_\beta = \begin{bmatrix} 1 \\ 0 \\ 2 \end{bmatrix}$<br><br>
       Matrix of $T$ with respect to $\beta$:
       $$A = [T]_\beta = \begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 0 \\ 0 & 1 & 2 \end{bmatrix}$$</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 2: Characteristic Equation and Eigenvalues</div>
       <p>$$\det(A - \lambda I) = \det\begin{bmatrix} 1-\lambda & 1 & 1 \\ 0 & 1-\lambda & 0 \\ 0 & 1 & 2-\lambda \end{bmatrix} = (1-\lambda) \cdot (1-\lambda)(2-\lambda) = (1-\lambda)^2 (2-\lambda) = 0$$
       - <strong>Eigenvalues:</strong> $\lambda_1 = 1$ (Algebraic Multiplicity $\operatorname{AM} = 2$), $\quad \lambda_2 = 2$ ($\operatorname{AM} = 1$).</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 3: Geometric Multiplicity of Repeated Eigenvalue $\lambda = 1$</div>
       <p>Substitute $\lambda = 1$ into $(A - I)X = 0$:
       $$(A - I) = \begin{bmatrix} 0 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 1 & 1 \end{bmatrix}$$
       Row reducing $(A - I)$:
       $$\begin{bmatrix} 0 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$
       The rank of $(A - I)$ is $1$.<br>
       Therefore, the Geometric Multiplicity is:
       $$\operatorname{GM}(\lambda = 1) = 3 - \operatorname{rank}(A - I) = 3 - 1 = 2$$
       Since $\operatorname{GM}(\lambda = 1) = \operatorname{AM}(\lambda = 1) = 2$, and $\operatorname{GM}(\lambda = 2) = 1 = \operatorname{AM}(\lambda = 2)$:<br>
       <span class="tag-result">Conclusion: $T$ is DIAGONALIZABLE.</span></p>
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
                <div class="explain-line-title">Operator Diagonalizability Condition</div>
                <div class="explain-line-desc">Given T(f(x)) = f(1) + [f'(0)]*x + [f'(0) + f''(0)]*x^2 on P2. We must determine if T is diagonalizable. An operator is diagonalizable if and only if the sum of dimensions of its eigenspaces equals the dimension of the space (here 3).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Images of Standard Basis beta = {1, x, x^2}</span>
                <div class="explain-line-title">Evaluating at 1 and 0</div>
                <div class="explain-line-desc">For 1: f(1)=1, f'(0)=0, f''(0)=0 -> T(1) = 1. Column 1 = [1, 0, 0]^T. For x: f(1)=1, f'(0)=1, f''(0)=0 -> T(x) = 1 + x + x^2. Column 2 = [1, 1, 1]^T. For x^2: f(1)=1, f'(0)=0, f''(0)=2 -> T(x^2) = 1 + 2x^2. Column 3 = [1, 0, 2]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Assembling Matrix A</span>
                <div class="explain-line-title">Matrix of Transformation</div>
                <div class="explain-line-desc">Matrix A = [[1, 1, 1], [0, 1, 0], [0, 1, 2]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Characteristic Equation and Eigenvalues</span>
                <div class="explain-line-title">Triangular Block Expansion</div>
                <div class="explain-line-desc">det(A - lambda*I) = (1 - lambda)*(1 - lambda)*(2 - lambda) = (1 - lambda)^2 * (2 - lambda) = 0. Eigenvalues are lambda = 2 (multiplicity 1) and lambda = 1 (multiplicity 2, repeated).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Testing Geometric Multiplicity of lambda = 1</span>
                <div class="explain-line-title">Crucial Defect Check</div>
                <div class="explain-line-desc">Solve [A - 1*I]v = 0: [[0, 1, 1], [0, 0, 0], [0, 1, 1]]v = 0. This reduces to the single equation v2 + v3 = 0, so v3 = -v2. Notice v1 does not appear, so v1 is free! Free variables: v1 and v2. Geometric multiplicity = 2!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Eigenvectors Computation</span>
                <div class="explain-line-title">Extracting Basis of Eigenvectors</div>
                <div class="explain-line-desc">For lambda = 1, setting v1 = 1, v2 = 0 gives V1 = [1, 0, 0]^T. Setting v1 = 0, v2 = 1 gives V2 = [0, 1, -1]^T. For lambda = 2, solving [A - 2*I]v = 0 gives V3 = [1, 0, 1]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Diagonalizability Confirmed</div>
                <div class="explain-line-desc">Since algebraic multiplicity equals geometric multiplicity for every eigenvalue (2 = 2 and 1 = 1), T has a full set of 3 independent eigenvectors and is diagonalizable.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Matrix representation: 4 marks; Characteristic equation and eigenvalues: 4 marks; Multiplicity analysis for lambda = 1: 4 marks; Eigenvectors and diagonalizability conclusion: 4 marks.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card B9 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill">Part B - Q9 (16 Marks)</span>
          <div class="q-heading">Test the matrix $A = \begin{pmatrix} 0 & 1 \\ -2 & 3 \end{pmatrix}$ for diagonalizability, find the invertible matrix $Q$ such that $Q^{-1}AQ = D$, and find $A^n$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Diagonalize $2 \times 2$ matrix $A$, determine transition matrix $Q$, and compute general power $A^n = Q D^n Q^{-1}$.</p>
     <div class="partb-step">
       <div class="step-title">Step 1: Eigenvalues of $A$</div>
       <p>$$\det(A - \lambda I) = \det\begin{pmatrix} -\lambda & 1 \\ -2 & 3-\lambda \end{pmatrix} = -\lambda(3-\lambda) - (-2) = \lambda^2 - 3\lambda + 2 = (\lambda - 1)(\lambda - 2) = 0$$
       - <strong>Eigenvalues:</strong> $\lambda_1 = 1, \quad \lambda_2 = 2$ (distinct real eigenvalues $\implies A$ is diagonalizable!).</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 2: Eigenvectors and Matrix $Q$</div>
       <p>- <strong>For $\lambda = 1$:</strong> $(A - I)X = 0 \implies \begin{pmatrix} -1 & 1 \\ -2 & 2 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = 0 \implies x_1 = x_2 \implies X_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.<br>
       - <strong>For $\lambda = 2$:</strong> $(A - 2I)X = 0 \implies \begin{pmatrix} -2 & 1 \\ -2 & 1 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = 0 \implies 2x_1 = x_2 \implies X_2 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$.<br><br>
       Modal matrix $Q$ and diagonal matrix $D$:
       $$Q = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}, \quad D = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$$
       Inverse of $Q$: $\det(Q) = 2 - 1 = 1 \implies Q^{-1} = \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}$.</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 3: Compute $A^n$</div>
       <p>Using $A = Q D Q^{-1} \implies A^n = Q D^n Q^{-1}$:
       $$A^n = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 1^n & 0 \\ 0 & 2^n \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2^n \\ 1 & 2 \cdot 2^n \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}$$
       $$A^n = \begin{pmatrix} 2 - 2^n & -1 + 2^n \\ 2 - 2^{n+1} & -1 + 2^{n+1} \end{pmatrix}$$
       <span class="tag-result">Formula verified: for $n=1$, $A^1 = \begin{pmatrix} 0 & 1 \\ -2 & 3 \end{pmatrix} = A$.</span></p>
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
                <div class="explain-line-title">Diagonalization and Matrix Powers</div>
                <div class="explain-line-desc">Given the 2x2 matrix A = [[0, 1], [-2, 3]]. We must test for diagonalizability, construct the modal matrix Q and diagonal matrix D such that Q^(-1)*A*Q = D, and use D to compute A^n for any positive integer n.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Characteristic Equation and Eigenvalues</span>
                <div class="explain-line-title">Quadratic Characteristic Polynomial</div>
                <div class="explain-line-desc">det(A - lambda*I) = (0 - lambda)*(3 - lambda) - (1)*(-2) = lambda^2 - 3*lambda + 2 = (lambda - 1)*(lambda - 2) = 0. The eigenvalues are lambda1 = 1 and lambda2 = 2. Since they are distinct, A is guaranteed to be diagonalizable!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Eigenvector for lambda1 = 1</span>
                <div class="explain-line-title">Solving (A - I)x = 0</div>
                <div class="explain-line-desc">[[-1, 1], [-2, 2]]x = 0 -> -x1 + x2 = 0 -> x2 = x1. Setting x1 = 1 gives eigenvector X1 = (1, 1).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Eigenvector for lambda2 = 2</span>
                <div class="explain-line-title">Solving (A - 2*I)x = 0</div>
                <div class="explain-line-desc">[[-2, 1], [-2, 1]]x = 0 -> -2*x1 + x2 = 0 -> x2 = 2*x1. Setting x1 = 1 gives eigenvector X2 = (1, 2).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Constructing Modal Matrix Q and Q Inverse</span>
                <div class="explain-line-title">Matrix Inversion Formula</div>
                <div class="explain-line-desc">Place eigenvectors into columns: Q = [[1, 1], [1, 2]]. Determinant det(Q) = 1*2 - 1*1 = 1. The inverse is Q^(-1) = [[2, -1], [-1, 1]]. Diagonal matrix D = [[1, 0], [0, 2]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Computing A^n via Spectral Power Formula</span>
                <div class="explain-line-title">Decoupling Matrix Powers</div>
                <div class="explain-line-desc">A = Q*D*Q^(-1) implies A^n = Q * D^n * Q^(-1). Since D is diagonal, D^n = [[1^n, 0], [0, 2^n]] = [[1, 0], [0, 2^n]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Multiplying Matrices for A^n</span>
                <div class="explain-line-title">Final Closed-Form Expression</div>
                <div class="explain-line-desc">A^n = [[1, 1], [1, 2]] * [[1, 0], [0, 2^n]] * [[2, -1], [-1, 1]] = [[1, 2^n], [1, 2*2^n]] * [[2, -1], [-1, 1]] = [[2 - 2^n, -1 + 2^n], [2 - 2^(n+1), -1 + 2^(n+1)]]. Verification: at n = 1, [[2-2, -1+2], [2-4, -1+4]] = [[0, 1], [-2, 3]] = A.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Eigenvalues derivation: 3 marks; Eigenvectors X1 and X2: 4 marks; Matrices Q and Q^(-1): 3 marks; Power formula A^n = Q D^n Q^(-1): 4 marks; Final closed-form matrix: 2 marks.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

      <!-- Card B10 -->
      <div class="question-card" data-category="eigen">
        <div class="card-top">
          <span class="q-pill">Part B - Q10 (16 Marks)</span>
          <div class="q-heading">Test for diagonalizability of the matrix $A = \begin{pmatrix} -7 & -4 & 0 \\ 8 & 5 & 0 \\ 6 & 6 & 0 \end{pmatrix}$, and if $A$ is diagonalizable, find the invertible matrix $Q$ such that $Q^{-1}AQ = D$.</div>
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Check characteristic equation of $3 \times 3$ matrix $A$, verify geometric multiplicity of repeated ro\dots, and construct diagonalizing matrix $Q$.</p>
     <div class="partb-step">
       <div class="step-title">Step 1: Characteristic Equation and Eigenvalues</div>
       <p>Expand along column 3 (since two entries are 0):
       $$\det(A - \lambda I) = -\lambda \det\begin{pmatrix} -7-\lambda & -4 \\ 8 & 5-\lambda \end{pmatrix} = -\lambda \left[ (-7-\lambda)(5-\lambda) - (-32) \right]$$
       $$= -\lambda (\lambda^2 + 2\lambda - 35 + 32) = -\lambda (\lambda^2 + 2\lambda - 3) = -\lambda(\lambda + 3)(\lambda - 1) = 0$$
       - <strong>Eigenvalues:</strong> $\lambda_1 = 0, \quad \lambda_2 = 1, \quad \lambda_3 = -3$.<br>
       Since $A$ has <strong>3 distinct real eigenvalues</strong>, $A$ is <strong>strictly DIAGONALIZABLE</strong>.</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 2: Eigenvector for each Eigenvalue</div>
       <p>- <strong>1. For $\lambda = 0$:</strong> $(A - 0I)X = 0 \implies -7x_1 - 4x_2 = 0, \; 6x_1 + 6x_2 = 0 \implies x_1 = x_2 = 0, \; x_3 \text{ free}$.<br>
       $$X_1 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$$<br>
       - <strong>2. For $\lambda = 1$:</strong> $(A - I)X = 0$:
       $$\begin{pmatrix} -8 & -4 & 0 \\ 8 & 4 & 0 \\ 6 & 6 & -1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = 0 \implies 2x_1 + x_2 = 0 \implies x_2 = -2x_1$$
       Row 3: $6x_1 + 6(-2x_1) - x_3 = 0 \implies -6x_1 - x_3 = 0 \implies x_3 = -6x_1$.<br>
       Setting $x_1 = 1 \implies X_2 = \begin{pmatrix} 1 \\ -2 \\ -6 \end{pmatrix}$.<br><br>
       - <strong>3. For $\lambda = -3$:</strong> $(A + 3I)X = 0$:
       $$\begin{pmatrix} -4 & -4 & 0 \\ 8 & 8 & 0 \\ 6 & 6 & 3 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = 0 \implies x_1 + x_2 = 0 \implies x_2 = -x_1$$
       Row 3: $6x_1 + 6(-x_1) + 3x_3 = 0 \implies 3x_3 = 0 \implies x_3 = 0$.<br>
       Setting $x_1 = 1 \implies X_3 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$.</p>
     </div>
     <div class="partb-step">
       <div class="step-title">Step 3: Construct $Q$ and Diagonal Matrix $D$</div>
       <p>The transition matrix $Q$ having eigenvectors as columns is:
       $$Q = \begin{pmatrix} 0 & 1 & 1 \\ 0 & -2 & -1 \\ 1 & -6 & 0 \end{pmatrix}$$
       The corresponding diagonal matrix is:
       $$D = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -3 \end{pmatrix}$$
       <span class="tag-result">Diagonalization complete: $Q^{-1} A Q = D$</span></p>
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
                <div class="explain-line-title">Testing Diagonalizability of 3x3 Matrix</div>
                <div class="explain-line-desc">Given A = [[-7, -4, 0], [8, 5, 0], [6, 6, 0]]. We must find eigenvalues, determine if A is diagonalizable, and find the transforming matrix Q such that Q^(-1)*A*Q = D.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Characteristic Equation by Column 3 Expansion</span>
                <div class="explain-line-title">Taking Advantage of Zero Column</div>
                <div class="explain-line-desc">Expanding along column 3: det(A - lambda*I) = -lambda * det[[-7 - lambda, -4], [8, 5 - lambda]] = -lambda * ((-7 - lambda)*(5 - lambda) - (-32)) = -lambda * (lambda^2 + 2*lambda - 35 + 32) = -lambda * (lambda^2 + 2*lambda - 3) = -lambda * (lambda + 3) * (lambda - 1) = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Three Distinct Eigenvalues</span>
                <div class="explain-line-title">Automatic Diagonalizability</div>
                <div class="explain-line-desc">The eigenvalues are lambda1 = 0, lambda2 = 1, lambda3 = -3. Because all 3 eigenvalues are completely distinct, A is automatically diagonalizable!</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Eigenvector for lambda = 0</span>
                <div class="explain-line-title">Kernel of Matrix</div>
                <div class="explain-line-desc">Solve A*x = 0: row 3 is 6*x1 + 6*x2 = 0 -> x2 = -x1. Row 1: -7*x1 - 4*(-x1) = -3*x1 = 0 -> x1 = 0, x2 = 0. x3 is free! Eigenvector X1 = (0, 0, 1).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Eigenvector for lambda = 1</span>
                <div class="explain-line-title">Solving (A - I)x = 0</div>
                <div class="explain-line-desc">[[-8, -4, 0], [8, 4, 0], [6, 6, -1]]x = 0. Row 1 gives 2*x1 + x2 = 0 -> x2 = -2*x1. Row 3: 6*x1 + 6*(-2*x1) - x3 = 0 -> x3 = -6*x1. Setting x1 = 1 gives X2 = (1, -2, -6).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Eigenvector for lambda = -3</span>
                <div class="explain-line-title">Solving (A + 3*I)x = 0</div>
                <div class="explain-line-desc">[[-4, -4, 0], [8, 8, 0], [6, 6, 3]]x = 0. Row 1 gives x1 + x2 = 0 -> x2 = -x1. Row 3: 6*x1 + 6*(-x1) + 3*x3 = 0 -> x3 = 0. Setting x1 = 1 gives X3 = (1, -1, 0).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Forming Matrix Q and Diagonal Matrix D</span>
                <div class="explain-line-title">Modal Assembly</div>
                <div class="explain-line-desc">Assemble Q = [[0, 1, 1], [0, -2, -1], [1, -6, 0]]. The corresponding diagonal matrix is D = [[0, 0, 0], [0, 1, 0], [0, 0, -3]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Characteristic equation and eigenvalues: 4 marks; Eigenvector X1 (lambda = 0): 3 marks; Eigenvector X2 (lambda = 1): 3 marks; Eigenvector X3 (lambda = -3): 3 marks; Modal matrix Q and conclusion: 3 marks.</div>
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
                      <option value="openrouter/free">OpenRouter Auto Free (Zero-404)</option>
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

<!-- Part B Extra Q11 -->
      <div class="question-card" data-category="diagonalization">
        <div class="card-top">
          <span class="q-pill extra">Part B - Extra Q11 (16 Marks)</span>
        </div>
        <div class="q-heading">
          Find the eigenvalues and eigenvectors of the matrix $A = \begin{bmatrix} 2 & 2 & 1 \\ 1 & 3 & 1 \\ 1 & 2 & 2 \end{bmatrix}$. Hence determine whether $A$ is diagonalizable. If diagonalizable, find the modal matrix $P$ and the diagonal matrix $D$ such that $P^{-1} A P = D$.
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Compute the characteristic polynomial, eigenvalues, algebraic and geometric multiplicities, linearly independent eigenvectors, and diagonalize $A$ via similarity transformation.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Characteristic Equation of Matrix $A$</div>
            <p>The characteristic equation is $\lambda^3 - s_1 \lambda^2 + s_2 \lambda - s_3 = 0$:<br>
            $s_1 = \text{tr}(A) = 2 + 3 + 2 = 7$.<br>
            $s_2 = \text{Sum of leading principal minors} = \begin{vmatrix} 3 & 1 \\ 2 & 2 \end{vmatrix} + \begin{vmatrix} 2 & 1 \\ 1 & 2 \end{vmatrix} + \begin{vmatrix} 2 & 2 \\ 1 & 3 \end{vmatrix} = (6 - 2) + (4 - 1) + (6 - 2) = 4 + 3 + 4 = 11$.<br>
            $s_3 = \det(A) = 2(6 - 2) - 2(2 - 1) + 1(2 - 3) = 2(4) - 2(1) + 1(-1) = 8 - 2 - 1 = 5$.<br>
            $$\lambda^3 - 7\lambda^2 + 11\lambda - 5 = 0$$
            Factoring: $(\lambda - 1)(\lambda^2 - 6\lambda + 5) = (\lambda - 1)(\lambda - 1)(\lambda - 5) = (\lambda - 1)^2 (\lambda - 5) = 0$.<br>
            The eigenvalues are $\lambda_1 = 1$ (repeated, Algebraic Multiplicity $\text{AM} = 2$) and $\lambda_2 = 5$ (simple, $\text{AM} = 1$).</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Eigenvectors for Repeated Root $\lambda = 1$</div>
            <p>Solve $(A - 1 \cdot I)X = 0$:
            $$\begin{bmatrix} 1 & 2 & 1 \\ 1 & 2 & 1 \\ 1 & 2 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$
            All three row equations are identical: $x_1 + 2x_2 + x_3 = 0 \implies x_1 = -2x_2 - x_3$.<br>
            Here Rank = 1, so the number of free variables is $3 - 1 = 2$ (Geometric Multiplicity $\text{GM} = 2 = \text{AM}$).<br>
            1. Setting $x_2 = 1, x_3 = 0 \implies x_1 = -2$. Eigenvector $X_1 = \begin{bmatrix} -2 \\ 1 \\ 0 \end{bmatrix}$.<br>
            2. Setting $x_2 = 0, x_3 = 1 \implies x_1 = -1$. Eigenvector $X_2 = \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}$.<br>
            $X_1$ and $X_2$ are clearly linearly independent.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Eigenvector for $\lambda = 5$</div>
            <p>Solve $(A - 5I)X = 0$:
            $$\begin{bmatrix} -3 & 2 & 1 \\ 1 & -2 & 1 \\ 1 & 2 & -3 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$
            Using cross-multiplication on equations 1 and 2:
            $$\frac{x_1}{2(1) - 1(-2)} = \frac{x_2}{1(1) - (-3)(1)} = \frac{x_3}{(-3)(-2) - 2(1)}$$
            $$\frac{x_1}{4} = \frac{x_2}{4} = \frac{x_3}{4} \implies \frac{x_1}{1} = \frac{x_2}{1} = \frac{x_3}{1}$$
            Eigenvector $X_3 = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 4: Diagonalization Matrix $P$ and Verification</div>
            <p>Since $\text{GM}(\lambda) = \text{AM}(\lambda)$ for all eigenvalues, $A$ possesses 3 linearly independent eigenvectors and is <strong>diagonalizable</strong>.<br>
            Form modal matrix $P = [X_1 \; X_2 \; X_3]$:
            $$P = \begin{bmatrix} -2 & -1 & 1 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix}$$
            $\det(P) = -2(0 - 1) - (-1)(1 - 0) + 1(1 - 0) = 2 + 1 + 1 = 4 \neq 0$ (confirming $P$ is invertible).<br>
            The corresponding diagonal matrix is:
            $$D = P^{-1} A P = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 5 \end{bmatrix}$$</p>
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
                <div class="explain-line-title">Diagonalizing a 3x3 Matrix with Repeated Root</div>
                <div class="explain-line-desc">Given matrix A = [[2, 2, 1], [1, 3, 1], [1, 2, 2]]. We must find eigenvalues and eigenvectors, test diagonalizability, and find modal matrix P and diagonal matrix D.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Characteristic Invariants s1, s2, s3</span>
                <div class="explain-line-title">Evaluating Polynomial</div>
                <div class="explain-line-desc">s1 = 2 + 3 + 2 = 7. s2 = det[[3,1],[2,2]] + det[[2,1],[1,2]] + det[[2,2],[1,3]] = (6-2) + (4-1) + (6-2) = 4 + 3 + 4 = 11. s3 = det(A) = 2*(6-2) - 2*(2-1) + 1*(2-3) = 8 - 2 - 1 = 5. Characteristic equation: lambda^3 - 7*lambda^2 + 11*lambda - 5 = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Solving for Eigenvalues</span>
                <div class="explain-line-title">Roots Factorization</div>
                <div class="explain-line-desc">Roots are lambda = 1 (repeated twice) and lambda = 5 (simple).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Eigenvector for lambda = 5</span>
                <div class="explain-line-title">One-Dimensional Eigenspace</div>
                <div class="explain-line-desc">Solve [A - 5*I]x = 0: [[-3, 2, 1], [1, -2, 1], [1, 2, -3]]x = 0. Cross-multiplying rows 1 and 2: x1/(2*1 - (-2)*1) = x2/(1*1 - (-3)*1) = x3/((-3)*(-2) - 2*1) -> x1/4 = x2/4 = x3/4 -> (1, 1, 1). Eigenvector X1 = (1, 1, 1).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Eigenvectors for Repeated Root lambda = 1</span>
                <div class="explain-line-title">Two-Dimensional Eigenspace</div>
                <div class="explain-line-desc">Solve [A - 1*I]x = 0: [[1, 2, 1], [1, 2, 1], [1, 2, 1]]x = 0. All three rows reduce to the single plane equation: x1 + 2*x2 + x3 = 0! Setting x2 = 1, x3 = 0 gives x1 = -2 -> X2 = (-2, 1, 0). Setting x2 = 0, x3 = 1 gives x1 = -1 -> X3 = (-1, 0, 1).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Verifying Linear Independence of Eigenvectors</span>
                <div class="explain-line-title">Forming Modal Matrix P</div>
                <div class="explain-line-desc">The three eigenvectors are linearly independent because det(P) = det[[1, -2, -1], [1, 1, 0], [1, 0, 1]] = 1*(1) - (-2)*(1) + (-1)*(-1) = 1 + 2 + 1 = 4 non-zero. Modal matrix P = [[1, -2, -1], [1, 1, 0], [1, 0, 1]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Diagonalization Relation</div>
                <div class="explain-line-desc">Because geometric multiplicity of lambda = 1 is 2, A has 3 independent eigenvectors and is diagonalizable with D = [[5, 0, 0], [0, 1, 0], [0, 0, 1]] such that P^(-1)*A*P = D.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Characteristic polynomial and roots: 4 marks; Eigenvector X1 (lambda = 5): 3 marks; Two independent eigenvectors for lambda = 1: 5 marks; Modal matrix P and diagonal matrix D: 4 marks.</div>
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
      <div class="question-card" data-category="matrix_rep">
        <div class="card-top">
          <span class="q-pill extra">Part B - Extra Q12 (16 Marks)</span>
        </div>
        <div class="q-heading">
          Let $T: \mathbb{R}^3 \to \mathbb{R}^3$ be the linear operator defined by $T(x_1, x_2, x_3) = (x_1 - x_2 + x_3, \; 2x_1 + 3x_2 - x_3, \; x_1 + x_2 + 2x_3)$. Find the matrix $[T]_B$ representing $T$ with respect to the non-standard ordered basis $B = \{v_1 = (1, 1, 0), \; v_2 = (1, 0, 1), \; v_3 = (0, 1, 1)\}$. Hence verify that $[T]_B [v]_B = [T(v)]_B$ for $v = (2, 1, 3)$.
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Compute image vectors $T(v_1), T(v_2), T(v_3)$, express them as linear combinations of basis $B$, build matrix $[T]_B$, and verify coordinate multiplication.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Compute Images of Basis Vectors under $T$</div>
            <p>1. $T(v_1) = T(1, 1, 0) = (1 - 1 + 0, \; 2(1) + 3(1) - 0, \; 1 + 1 + 0) = (0, 5, 2)$.<br>
            2. $T(v_2) = T(1, 0, 1) = (1 - 0 + 1, \; 2(1) + 0 - 1, \; 1 + 0 + 2(1)) = (2, 1, 3)$.<br>
            3. $T(v_3) = T(0, 1, 1) = (0 - 1 + 1, \; 0 + 3(1) - 1, \; 0 + 1 + 2(1)) = (0, 2, 3)$.</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Express Images in Coordinates of Basis $B$</div>
            <p>For an arbitrary vector $(a, b, c) \in \mathbb{R}^3$, express as $c_1 v_1 + c_2 v_2 + c_3 v_3$:
            $$\begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \\ c_3 \end{bmatrix} = \begin{bmatrix} a \\ b \\ c \end{bmatrix}$$
            Inverting the transition matrix: $\det = 1(0 - 1) - 1(1 - 0) = -2 \neq 0$.<br>
            Solving yields the coordinate formulas:
            $$c_1 = \frac{a + b - c}{2}, \quad c_2 = \frac{a - b + c}{2}, \quad c_3 = \frac{-a + b + c}{2}$$
            Now substitute each image vector:<br>
            - For $T(v_1) = (0, 5, 2)$:
            $$c_1 = \frac{0 + 5 - 2}{2} = \frac{3}{2}, \quad c_2 = \frac{0 - 5 + 2}{2} = -\frac{3}{2}, \quad c_3 = \frac{0 + 5 + 2}{2} = \frac{7}{2}$$
            - For $T(v_2) = (2, 1, 3)$:
            $$c_1 = \frac{2 + 1 - 3}{2} = 0, \quad c_2 = \frac{2 - 1 + 3}{2} = 2, \quad c_3 = \frac{-2 + 1 + 3}{2} = 1$$
            - For $T(v_3) = (0, 2, 3)$:
            $$c_1 = \frac{0 + 2 - 3}{2} = -\frac{1}{2}, \quad c_2 = \frac{0 - 2 + 3}{2} = \frac{1}{2}, \quad c_3 = \frac{0 + 2 + 3}{2} = \frac{5}{2}$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Construct the Representation Matrix $[T]_B$</div>
            <p>Assembling the coordinate columns:
            $$[T]_B = \begin{bmatrix} \frac{3}{2} & 0 & -\frac{1}{2} \\ -\frac{3}{2} & 2 & \frac{1}{2} \\ \frac{7}{2} & 1 & \frac{5}{2} \end{bmatrix} = \frac{1}{2} \begin{bmatrix} 3 & 0 & -1 \\ -3 & 4 & 1 \\ 7 & 2 & 5 \end{bmatrix}$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 4: Verification for $v = (2, 1, 3)$</div>
            <p>1. Find $[v]_B$:
            $$c_1 = \frac{2 + 1 - 3}{2} = 0, \quad c_2 = \frac{2 - 1 + 3}{2} = 2, \quad c_3 = \frac{-2 + 1 + 3}{2} = 1 \implies [v]_B = \begin{bmatrix} 0 \\ 2 \\ 1 \end{bmatrix}$$
            2. Compute $[T]_B [v]_B$:
            $$\frac{1}{2} \begin{bmatrix} 3 & 0 & -1 \\ -3 & 4 & 1 \\ 7 & 2 & 5 \end{bmatrix} \begin{bmatrix} 0 \\ 2 \\ 1 \end{bmatrix} = \frac{1}{2} \begin{bmatrix} -1 \\ 9 \\ 9 \end{bmatrix} = \begin{bmatrix} -1/2 \\ 9/2 \\ 9/2 \end{bmatrix}$$
            3. Directly evaluate $T(v)$:
            $$T(2, 1, 3) = (2 - 1 + 3, \; 2(2) + 3(1) - 3, \; 2 + 1 + 2(3)) = (4, 4, 9)$$
            Coordinates of $(4, 4, 9)$ with respect to $B$:
            $$c_1 = \frac{4 + 4 - 9}{2} = -\frac{1}{2}, \quad c_2 = \frac{4 - 4 + 9}{2} = \frac{9}{2}, \quad c_3 = \frac{-4 + 4 + 9}{2} = \frac{9}{2}$$
            Hence $[T(v)]_B = \begin{bmatrix} -1/2 \\ 9/2 \\ 9/2 \end{bmatrix} = [T]_B [v]_B$. Verified!</p>
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
                <div class="explain-line-title">Transformation Matrix with Non-Standard Basis</div>
                <div class="explain-line-desc">Given T(x1, x2, x3) = (x1 - x2 + x3, 2*x1 + 3*x2 - x3, x1 + x2 + 2*x3) and non-standard basis B = {v1 = (1,1,0), v2 = (1,0,1), v3 = (0,1,1)}. We must find the matrix [T]_B and verify [T]_B * [v]_B = [T(v)]_B for v = (2, 1, 3).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Images of Basis Vectors in Standard Coordinates</span>
                <div class="explain-line-title">Evaluating T on v1, v2, v3</div>
                <div class="explain-line-desc">T(v1) = T(1, 1, 0) = (1-1+0, 2+3-0, 1+1+0) = (0, 5, 2). T(v2) = T(1, 0, 1) = (1-0+1, 2+0-1, 1+0+2) = (2, 1, 3). T(v3) = T(0, 1, 1) = (0-1+1, 0+3-1, 0+1+2) = (0, 2, 3).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Finding Coordinates with Respect to Basis B</span>
                <div class="explain-line-title">Solving Transition Systems</div>
                <div class="explain-line-desc">For any vector w = (y1, y2, y3), we write w = c1*(1,1,0) + c2*(1,0,1) + c3*(0,1,1). Solving gives: c1 = (y1 + y2 - y3)/2, c2 = (y1 - y2 + y3)/2, c3 = (-y1 + y2 + y3)/2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Computing Columns of [T]_B</span>
                <div class="explain-line-title">Substituting Images into Coordinate Formula</div>
                <div class="explain-line-desc">Column 1 [T(v1)]_B: w = (0, 5, 2) -> c1 = (0+5-2)/2 = 3/2, c2 = (0-5+2)/2 = -3/2, c3 = (-0+5+2)/2 = 7/2. Column 2 [T(v2)]_B: w = (2, 1, 3) -> c1 = (2+1-3)/2 = 0, c2 = (2-1+3)/2 = 2, c3 = (-2+1+3)/2 = 1. Column 3 [T(v3)]_B: w = (0, 2, 3) -> c1 = (0+2-3)/2 = -1/2, c2 = (0-2+3)/2 = 1/2, c3 = (-0+2+3)/2 = 5/2.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Assembling Matrix [T]_B</span>
                <div class="explain-line-title">Matrix Representation Result</div>
                <div class="explain-line-desc">[T]_B = [[3/2, 0, -1/2], [-3/2, 2, 1/2], [7/2, 1, 5/2]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Finding Coordinates of v = (2, 1, 3)</span>
                <div class="explain-line-title">Input Coordinate Vector</div>
                <div class="explain-line-desc">[v]_B: c1 = (2+1-3)/2 = 0, c2 = (2-1+3)/2 = 2, c3 = (-2+1+3)/2 = 1. So [v]_B = [0, 2, 1]^T.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Verifying Matrix-Vector Multiplication</span>
                <div class="explain-line-title">Exact Numerical Match</div>
                <div class="explain-line-desc">[T]_B * [v]_B = [[3/2, 0, -1/2], [-3/2, 2, 1/2], [7/2, 1, 5/2]] * [0, 2, 1]^T = [-1/2, 4 + 1/2, 2 + 5/2]^T = [-1/2, 9/2, 9/2]^T. Direct calculation: T(v) = T(2, 1, 3) = (2-1+3, 4+3-3, 2+1+6) = (4, 4, 9). Its B-coordinates are c1 = (4+4-9)/2 = -1/2, c2 = (4-4+9)/2 = 9/2, c3 = (-4+4+9)/2 = 9/2. Both match identically.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Images T(v1), T(v2), T(v3): 3 marks; General B-coordinate conversion formulas: 4 marks; Matrix [T]_B assembly: 4 marks; Coordinate vector [v]_B: 2 marks; Verification [T]_B [v]_B = [T(v)]_B: 3 marks.</div>
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

      <!-- Part B Challenge Q13 -->
      <div class="question-card" data-category="theorems">
        <div class="card-top">
          <span class="q-pill extra">Part B - Challenge Q13 (16 Marks)</span>
        </div>
        <div class="q-heading">
          Verify Cayley-Hamilton Theorem for the matrix $A = \begin{bmatrix} 1 & 0 & 3 \\ 2 & 1 & -1 \\ 1 & -1 & 1 \end{bmatrix}$. Hence evaluate the matrix polynomial expression:
          $$P(A) = A^8 - 3A^7 - A^6 + 9A^5 - 4A^4 - 3A^3 - 2A^2 + A - 2I$$
          Also compute $A^{-1}$ and $A^4$.
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Verify $A^3 - s_1 A^2 + s_2 A - s_3 I = O$, perform polynomial division to simplify $P(A)$, and compute $A^{-1}$ and $A^4$.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Characteristic Equation of $A$</div>
            <p>Calculate coefficients for $\lambda^3 - s_1 \lambda^2 + s_2 \lambda - s_3 = 0$:<br>
            $s_1 = \text{tr}(A) = 1 + 1 + 1 = 3$.<br>
            $s_2 = \begin{vmatrix} 1 & -1 \\ -1 & 1 \end{vmatrix} + \begin{vmatrix} 1 & 3 \\ 1 & 1 \end{vmatrix} + \begin{vmatrix} 1 & 0 \\ 2 & 1 \end{vmatrix} = (1 - 1) + (1 - 3) + (1 - 0) = 0 - 2 + 1 = -1$.<br>
            $s_3 = \det(A) = 1(1 - 1) - 0 + 3(-2 - 1) = 0 - 9 = -9$.<br>
            Characteristic equation is:
            $$\lambda^3 - 3\lambda^2 - \lambda + 9 = 0$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Verification of Cayley-Hamilton Theorem</div>
            <p>Compute powers of $A$:
            $$A^2 = \begin{bmatrix} 1 & 0 & 3 \\ 2 & 1 & -1 \\ 1 & -1 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 3 \\ 2 & 1 & -1 \\ 1 & -1 & 1 \end{bmatrix} = \begin{bmatrix} 4 & -3 & 6 \\ 3 & 2 & 4 \\ 0 & -2 & 5 \end{bmatrix}$$
            $$A^3 = A^2 \cdot A = \begin{bmatrix} 4 & -3 & 6 \\ 3 & 2 & 4 \\ 0 & -2 & 5 \end{bmatrix} \begin{bmatrix} 1 & 0 & 3 \\ 2 & 1 & -1 \\ 1 & -1 & 1 \end{bmatrix} = \begin{bmatrix} 4 & -9 & 21 \\ 11 & -2 & 11 \\ 1 & -7 & 7 \end{bmatrix}$$
            Substitute into the matrix polynomial:
            $$A^3 - 3A^2 - A + 9I = \begin{bmatrix} 4 & -9 & 21 \\ 11 & -2 & 11 \\ 1 & -7 & 7 \end{bmatrix} - 3\begin{bmatrix} 4 & -3 & 6 \\ 3 & 2 & 4 \\ 0 & -2 & 5 \end{bmatrix} - \begin{bmatrix} 1 & 0 & 3 \\ 2 & 1 & -1 \\ 1 & -1 & 1 \end{bmatrix} + \begin{bmatrix} 9 & 0 & 0 \\ 0 & 9 & 0 \\ 0 & 0 & 9 \end{bmatrix}$$
            - Entry (1,1): $4 - 12 - 1 + 9 = 0$.<br>
            - Entry (1,2): $-9 - (-9) - 0 + 0 = 0$.<br>
            - Entry (1,3): $21 - 18 - 3 + 0 = 0$.<br>
            - Entry (2,1): $11 - 9 - 2 + 0 = 0$.<br>
            - Entry (2,2): $-2 - 6 - 1 + 9 = 0$.<br>
            - Entry (2,3): $11 - 12 - (-1) + 0 = 0$.<br>
            - Entry (3,1): $1 - 0 - 1 + 0 = 0$.<br>
            - Entry (3,2): $-7 - (-6) - (-1) + 0 = 0$.<br>
            - Entry (3,3): $7 - 15 - 1 + 9 = 0$.<br>
            Hence $A^3 - 3A^2 - A + 9I = O$. The Cayley-Hamilton Theorem is completely verified!</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Evaluation of High Degree Polynomial $P(A)$</div>
            <p>Using long division, divide $f(\lambda) = \lambda^8 - 3\lambda^7 - \lambda^6 + 9\lambda^5 - 4\lambda^4 - 3\lambda^3 - 2\lambda^2 + \lambda - 2$ by $g(\lambda) = \lambda^3 - 3\lambda^2 - \lambda + 9$:<br>
            Notice: $\lambda^8 - 3\lambda^7 - \lambda^6 + 9\lambda^5 = \lambda^5 (\lambda^3 - 3\lambda^2 - \lambda + 9) = 0$.<br>
            Next terms: $-4\lambda^4 - 3\lambda^3 - 2\lambda^2 + \lambda - 2$.<br>
            Divide: $-4\lambda(\lambda^3 - 3\lambda^2 - \lambda + 9) = -4\lambda^4 + 12\lambda^3 + 4\lambda^2 - 36\lambda$.<br>
            Subtracting leaves: $(-3 - 12)\lambda^3 + (-2 - 4)\lambda^2 + (1 - (-36))\lambda - 2 = -15\lambda^3 - 6\lambda^2 + 37\lambda - 2$.<br>
            Divide: $-15(\lambda^3 - 3\lambda^2 - \lambda + 9) = -15\lambda^3 + 45\lambda^2 + 15\lambda - 135$.<br>
            Remainder $R(\lambda) = (-6 - 45)\lambda^2 + (37 - 15)\lambda + (-2 - (-135)) = -51\lambda^2 + 22\lambda + 133$.<br>
            Therefore:
            $$P(A) = -51 A^2 + 22 A + 133 I$$
            $$P(A) = -51\begin{bmatrix} 4 & -3 & 6 \\ 3 & 2 & 4 \\ 0 & -2 & 5 \end{bmatrix} + 22\begin{bmatrix} 1 & 0 & 3 \\ 2 & 1 & -1 \\ 1 & -1 & 1 \end{bmatrix} + 133\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} -49 & 153 & -240 \\ -109 & 53 & -226 \\ 22 & 80 & -100 \end{bmatrix}$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 4: Computation of $A^{-1}$ and $A^4$</div>
            <p>1. Multiply $A^3 - 3A^2 - A + 9I = O$ by $A^{-1}$:
            $$A^2 - 3A - I + 9A^{-1} = O \implies A^{-1} = -\frac{1}{9}(A^2 - 3A - I)$$
            $$A^2 - 3A - I = \begin{bmatrix} 4 & -3 & 6 \\ 3 & 2 & 4 \\ 0 & -2 & 5 \end{bmatrix} - \begin{bmatrix} 3 & 0 & 9 \\ 6 & 3 & -3 \\ 3 & -3 & 3 \end{bmatrix} - \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & -3 & -3 \\ -3 & -2 & 7 \\ -3 & 1 & 1 \end{bmatrix}$$
            $$A^{-1} = -\frac{1}{9}\begin{bmatrix} 0 & -3 & -3 \\ -3 & -2 & 7 \\ -3 & 1 & 1 \end{bmatrix} = \frac{1}{9}\begin{bmatrix} 0 & 3 & 3 \\ 3 & 2 & -7 \\ 3 & -1 & -1 \end{bmatrix}$$
            2. Compute $A^4$:
            $$A^3 = 3A^2 + A - 9I \implies A^4 = 3A^3 + A^2 - 9A = 3(3A^2 + A - 9I) + A^2 - 9A = 10A^2 - 6A - 27I$$
            $$A^4 = 10\begin{bmatrix} 4 & -3 & 6 \\ 3 & 2 & 4 \\ 0 & -2 & 5 \end{bmatrix} - 6\begin{bmatrix} 1 & 0 & 3 \\ 2 & 1 & -1 \\ 1 & -1 & 1 \end{bmatrix} - 27\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 7 & -30 & 42 \\ 18 & -13 & 46 \\ -6 & -14 & 17 \end{bmatrix}$$</p>
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
                <div class="explain-line-title">Cayley-Hamilton Verification and Application</div>
                <div class="explain-line-desc">Given matrix A = [[1, 0, 3], [2, 1, -1], [1, -1, 1]]. We must verify Cayley-Hamilton Theorem: every square matrix satisfies its own characteristic equation, A^3 - s1*A^2 + s2*A - s3*I = 0. Then evaluate high degree polynomial P(A), compute A^(-1), and compute A^4.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Characteristic Equation of A</span>
                <div class="explain-line-title">Invariants Computation</div>
                <div class="explain-line-desc">s1 = 1 + 1 + 1 = 3. s2 = det[[1,-1],[-1,1]] + det[[1,3],[1,1]] + det[[1,0],[2,1]] = 0 + (1-3) + (1-0) = -2 + 1 = -1. s3 = det(A) = 1*(1 - 1) - 0 + 3*(-2 - 1) = -9. Characteristic equation: lambda^3 - 3*lambda^2 - lambda + 9 = 0.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Direct Verification A^3 - 3*A^2 - A + 9*I = 0</span>
                <div class="explain-line-title">Matrix Arithmetic Verification</div>
                <div class="explain-line-desc">Compute A^2: Row 1 = [4, -3, 6], Row 2 = [3, 2, 4], Row 3 = [0, -2, 5]. Compute A^3 = A^2 * A = [4, 6, 21], [11, -2, 11], [-1, -7, 7]. Direct substitution: A^3 - 3*A^2 - A + 9*I produces the 3x3 zero matrix [0]. Theorem is verified.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Computing Inverse A^(-1) via Theorem</span>
                <div class="explain-line-title">Multiplying by A^(-1)</div>
                <div class="explain-line-desc">From A^3 - 3*A^2 - A + 9*I = 0, multiply by A^(-1): A^2 - 3*A - I + 9*A^(-1) = 0 -> A^(-1) = -(1/9)*(A^2 - 3*A - I). Substituting A^2 and 3*A gives A^(-1) = (1/9) * [[0, 3, 3], [3, 2, -7], [3, -1, -1]]. Check: A * A^(-1) = I.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Long Division of High Degree Polynomial</span>
                <div class="explain-line-title">Eliminating Multiples of Characteristic Polynomial</div>
                <div class="explain-line-desc">We divide P(A) = A^8 - 3*A^7 - A^6 + 9*A^5 - 4*A^4 - 3*A^3 - 2*A^2 + A - 2*I by (A^3 - 3*A^2 - A + 9*I). By polynomial long division, the quotient leaves a small remainder: P(A) = Q(A)*(A^3 - 3*A^2 - A + 9*I) + R(A).</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Evaluating the Remainder Matrix</span>
                <div class="explain-line-title">Zero Cancellation</div>
                <div class="explain-line-desc">Since A^3 - 3*A^2 - A + 9*I = 0, P(A) simplifies strictly to R(A) = -A^2 + A - 2*I.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Computation of P(A) and A^4</span>
                <div class="explain-line-title">Matrix Arithmetic</div>
                <div class="explain-line-desc">Substitute A^2, A, and I into -A^2 + A - 2*I to find the final matrix P(A). Compute A^4 = A*(3*A^2 + A - 9*I) = 3*A^3 + A^2 - 9*A.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Characteristic equation: 3 marks; Verification A^3 - 3*A^2 - A + 9*I = 0: 4 marks; Inverse computation A^(-1): 3 marks; Polynomial division and P(A) evaluation: 4 marks; Computation of A^4: 2 marks.</div>
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

<!-- Predicted Part B Q14 -->
      <div class="question-card" data-category="matrix_rep">
        <div class="card-top">
          <span class="q-pill extra">Part B - Predicted Q14 (16 Marks)</span>
        </div>
        <div class="q-heading">
          Let $T: \mathbb{R}^2 \to \mathbb{R}^2$ be the linear transformation defined by $T(x, y) = (2x - y, \; x + 3y)$.<br>
          Let $B = \{u_1 = (1, 1), u_2 = (-1, 1)\}$ and $B' = \{v_1 = (2, 1), v_2 = (1, 0)\}$ be two ordered bases of $\mathbb{R}^2$.<br>
          (a) Find the matrix $[T]_B$ representing $T$ with respect to basis $B$.<br>
          (b) Find the change of basis transition matrix $P$ from basis $B'$ to basis $B$.<br>
          (c) Find the matrix $[T]_{B'}$ representing $T$ with respect to basis $B'$.<br>
          (d) Verify the similarity transformation relation: $[T]_{B'} = P^{-1} [T]_B P$.
        </div>
        <div class="solution-content">
          <p><strong>Aim:</strong> Construct representation matrices $[T]_B$ and $[T]_{B'}$, determine the transition change-of-basis matrix $P$, compute $P^{-1}$, and verify the similarity relation $[T]_{B'} = P^{-1} [T]_B P$.</p>

          <div class="partb-step">
            <div class="step-title">Step 1: Compute Matrix $[T]_B$ with Respect to Basis $B$</div>
            <p>1. Compute images of $B = \{u_1=(1,1), u_2=(-1,1)\}$ under $T$:<br>
            - $T(u_1) = T(1, 1) = (2(1) - 1, \; 1 + 3(1)) = (1, 4)$.<br>
            - $T(u_2) = T(-1, 1) = (2(-1) - 1, \; -1 + 3(1)) = (-3, 2)$.<br>
            2. Express $(a, b)$ in coordinates of $B = \{u_1, u_2\}$:
            $$c_1(1, 1) + c_2(-1, 1) = (a, b) \implies \begin{cases} c_1 - c_2 = a \\ c_1 + c_2 = b \end{cases} \implies c_1 = \frac{a+b}{2}, \quad c_2 = \frac{b-a}{2}$$
            - For $T(u_1) = (1, 4)$: $c_1 = \frac{1+4}{2} = \frac{5}{2}, \quad c_2 = \frac{4-1}{2} = \frac{3}{2}$.<br>
            - For $T(u_2) = (-3, 2)$: $c_1 = \frac{-3+2}{2} = -\frac{1}{2}, \quad c_2 = \frac{2 - (-3)}{2} = \frac{5}{2}$.<br>
            Writing coordinate columns:
            $$[T]_B = \begin{bmatrix} 5/2 & -1/2 \\ 3/2 & 5/2 \end{bmatrix} = \frac{1}{2} \begin{bmatrix} 5 & -1 \\ 3 & 5 \end{bmatrix}$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 2: Transition Matrix $P$ from $B'$ to $B$</div>
            <p>The transition matrix $P$ expresses vectors of $B' = \{v_1=(2,1), v_2=(1,0)\}$ in terms of basis $B$:<br>
            - For $v_1 = (2, 1)$: $c_1 = \frac{2+1}{2} = \frac{3}{2}, \quad c_2 = \frac{1-2}{2} = -\frac{1}{2}$.<br>
            - For $v_2 = (1, 0)$: $c_1 = \frac{1+0}{2} = \frac{1}{2}, \quad c_2 = \frac{0-1}{2} = -\frac{1}{2}$.<br>
            $$P = \begin{bmatrix} 3/2 & 1/2 \\ -1/2 & -1/2 \end{bmatrix} = \frac{1}{2} \begin{bmatrix} 3 & 1 \\ -1 & -1 \end{bmatrix}$$
            $\det(P) = \left(\frac{3}{2}\right)\left(-\frac{1}{2}\right) - \left(\frac{1}{2}\right)\left(-\frac{1}{2}\right) = -\frac{3}{4} + \frac{1}{4} = -\frac{2}{4} = -\frac{1}{2} \neq 0$.<br>
            Compute $P^{-1}$:
            $$P^{-1} = \frac{1}{-1/2} \begin{bmatrix} -1/2 & -1/2 \\ 1/2 & 3/2 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ -1 & -3 \end{bmatrix}$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 3: Direct Computation of Matrix $[T]_{B'}$</div>
            <p>1. Images of $B' = \{v_1=(2,1), v_2=(1,0)\}$:<br>
            - $T(v_1) = T(2, 1) = (2(2) - 1, \; 2 + 3(1)) = (3, 5)$.<br>
            - $T(v_2) = T(1, 0) = (2(1) - 0, \; 1 + 0) = (2, 1)$.<br>
            2. Express $(a, b)$ in coordinates of $B' = \{v_1=(2,1), v_2=(1,0)\}$:
            $$d_1(2, 1) + d_2(1, 0) = (a, b) \implies \begin{cases} 2d_1 + d_2 = a \\ d_1 = b \end{cases} \implies d_1 = b, \quad d_2 = a - 2b$$
            - For $T(v_1) = (3, 5)$: $d_1 = 5, \quad d_2 = 3 - 2(5) = -7$.<br>
            - For $T(v_2) = (2, 1)$: $d_1 = 1, \quad d_2 = 2 - 2(1) = 0$.<br>
            Writing coordinate columns:
            $$[T]_{B'} = \begin{bmatrix} 5 & 1 \\ -7 & 0 \end{bmatrix}$$</p>
          </div>

          <div class="partb-step">
            <div class="step-title">Step 4: Verification of Similarity Relation $[T]_{B'} = P^{-1} [T]_B P$</div>
            <p>1. Compute $[T]_B P$:
            $$[T]_B P = \left(\frac{1}{2} \begin{bmatrix} 5 & -1 \\ 3 & 5 \end{bmatrix}\right) \left(\frac{1}{2} \begin{bmatrix} 3 & 1 \\ -1 & -1 \end{bmatrix}\right) = \frac{1}{4} \begin{bmatrix} 15 + 1 & 5 + 1 \\ 9 - 5 & 3 - 5 \end{bmatrix} = \frac{1}{4} \begin{bmatrix} 16 & 6 \\ 4 & -2 \end{bmatrix} = \begin{bmatrix} 4 & 3/2 \\ 1 & -1/2 \end{bmatrix}$$
            2. Compute $P^{-1} ([T]_B P)$:
            $$P^{-1} ([T]_B P) = \begin{bmatrix} 1 & 1 \\ -1 & -3 \end{bmatrix} \begin{bmatrix} 4 & 3/2 \\ 1 & -1/2 \end{bmatrix} = \begin{bmatrix} 1(4) + 1(1) & 1(3/2) + 1(-1/2) \\ -1(4) - 3(1) & -1(3/2) - 3(-1/2) \end{bmatrix}$$
            $$= \begin{bmatrix} 5 & 1 \\ -7 & -3/2 + 3/2 \end{bmatrix} = \begin{bmatrix} 5 & 1 \\ -7 & 0 \end{bmatrix} = [T]_{B'}$$
            The similarity relationship $[T]_{B'} = P^{-1} [T]_B P$ is verified!</p>
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
                <div class="explain-line-title">Transformation under Two Different Bases</div>
                <div class="explain-line-desc">Given T(x, y) = (2x - y, x + 3y) on R2, with bases B = {u1 = (1,1), u2 = (-1,1)} and B' = {v1 = (2,1), v2 = (1,0)}. We must find [T]_B, transition matrix P from B' to B, matrix [T]_B', and verify similarity [T]_B' = P^(-1) * [T]_B * P.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 2: Matrix [T]_B with Respect to Basis B</span>
                <div class="explain-line-title">Operating on u1 and u2</div>
                <div class="explain-line-desc">T(u1) = T(1, 1) = (1, 4). Write (1, 4) = a*(1, 1) + b*(-1, 1) -> a - b = 1, a + b = 4 -> a = 5/2, b = 3/2. Column 1 = [5/2, 3/2]^T. T(u2) = T(-1, 1) = (-3, 2). Write (-3, 2) = a*(1, 1) + b*(-1, 1) -> a - b = -3, a + b = 2 -> a = -1/2, b = 5/2. Column 2 = [-1/2, 5/2]^T. [T]_B = [[5/2, -1/2], [3/2, 5/2]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 3: Transition Matrix P from B' to B</span>
                <div class="explain-line-title">Expressing v1, v2 in Terms of Basis B</div>
                <div class="explain-line-desc">v1 = (2, 1) = a*(1, 1) + b*(-1, 1) -> a - b = 2, a + b = 1 -> a = 3/2, b = -1/2. Column 1 of P = [3/2, -1/2]^T. v2 = (1, 0) = a*(1, 1) + b*(-1, 1) -> a - b = 1, a + b = 0 -> a = 1/2, b = -1/2. Column 2 of P = [1/2, -1/2]^T. P = [[3/2, 1/2], [-1/2, -1/2]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 4: Computing Inverse Transition Matrix P^(-1)</span>
                <div class="explain-line-title">2x2 Matrix Inversion</div>
                <div class="explain-line-desc">det(P) = (3/2)*(-1/2) - (1/2)*(-1/2) = -3/4 + 1/4 = -1/2. P^(-1) = (1/(-1/2)) * [[-1/2, -1/2], [1/2, 3/2]] = [[1, 1], [-1, -3]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 5: Direct Computation of [T]_B'</span>
                <div class="explain-line-title">Operating on v1 and v2</div>
                <div class="explain-line-desc">T(v1) = T(2, 1) = (3, 5). Write (3, 5) = c1*(2, 1) + c2*(1, 0) -> 2*c1 + c2 = 3, c1 = 5 -> c2 = 3 - 10 = -7. Column 1 = [5, -7]^T. T(v2) = T(1, 0) = (2, 1) = 1*(2, 1) + 0*(1, 0). Column 2 = [1, 0]^T. [T]_B' = [[5, 1], [-7, 0]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 6: Computing Product P^(-1) * [T]_B * P</span>
                <div class="explain-line-title">Similarity Matrix Multiplication</div>
                <div class="explain-line-desc">First multiply [T]_B * P: [[5/2, -1/2], [3/2, 5/2]] * [[3/2, 1/2], [-1/2, -1/2]] = [[4, 3/2], [1, -1/2]]. Now multiply by P^(-1) = [[1, 1], [-1, -3]]: [[1, 1], [-1, -3]] * [[4, 3/2], [1, -1/2]] = [[4+1, 3/2 - 1/2], [-4 - 3, -3/2 + 3/2]] = [[5, 1], [-7, 0]].</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 7: Final Conclusion</span>
                <div class="explain-line-title">Similarity Identity Verified</div>
                <div class="explain-line-desc">Since P^(-1) * [T]_B * P = [[5, 1], [-7, 0]] which matches [T]_B' identically, the similarity transformation relation [T]_B' = P^(-1) * [T]_B * P is completely verified.</div>
              </div>
              <div class="explain-line">
                <span class="explain-line-badge">Step 8: University Scoring Rubric</span>
                <div class="explain-line-title">16 Marks Distribution</div>
                <div class="explain-line-desc">Matrix [T]_B calculation: 4 marks; Transition matrix P and P^(-1): 4 marks; Matrix [T]_B' calculation: 4 marks; Similarity verification product and conclusion: 4 marks.</div>
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
