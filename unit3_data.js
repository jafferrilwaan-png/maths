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
              <span>💡 Touch for Line-by-Line Explanation &amp; Mathematical Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Generalization of Dot Product</span>
                <div class="explain-line-title">Why inner products exist</div>
                <div class="explain-line-desc">The inner product is the abstract algebraic generalization of the geometric dot product, allowing concepts of angle, length, and orthogonality in function spaces and matrices.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Q2 -->
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
              <span>💡 Touch for Line-by-Line Explanation &amp; Mathematical Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Odd Symmetry Shortcut</span>
                <div class="explain-line-title">Why we don't need to compute $\|p\|$ and $\|q\|$</div>
                <div class="explain-line-desc">Because the numerator $\langle p, q \rangle = \int_{-1}^1 x^3 dx$ evaluates to 0 (integral of odd power over $[-a, a]$), $\cos \theta = 0$ immediately, saving 3 minutes of calculus!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Q3 -->
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
              <span>💡 Touch for Line-by-Line Explanation &amp; Mathematical Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Geometric Intuition</span>
                <div class="explain-line-title">Pythagorean theorem in 2D</div>
                <div class="explain-line-desc">Two unit vectors at right angles form the legs of a right triangle of lengths 1 and 1. The distance between their tips is the hypotenuse $\sqrt{1^2 + 1^2} = \sqrt{2}$.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Q4 -->
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
              <span>💡 Touch for Line-by-Line Explanation &amp; Mathematical Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Absolute Value in Homogeneity</span>
                <div class="explain-line-title">Notice $|\alpha|$ not $\alpha$</div>
                <div class="explain-line-desc">Because length must be strictly non-negative, scaling by $-5$ increases length by $|-5| = 5$, not $-5$.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Q5 -->
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
              <span>💡 Touch for Line-by-Line Explanation &amp; Mathematical Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Bounded Angles</span>
                <div class="explain-line-title">Why Cauchy-Schwarz guarantees $\cos \theta \in [-1, 1]$</div>
                <div class="explain-line-desc">Dividing by $\|u\| \|v\|$ gives $\left|\frac{\langle u, v \rangle}{\|u\| \|v\|}\right| \le 1$, which proves that the cosine of an angle is always mathematically valid!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Q6 -->
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
              <span>💡 Touch for Line-by-Line Explanation &amp; Mathematical Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Normalization Principle</span>
                <div class="explain-line-title">Why dividing by length produces a unit vector</div>
                <div class="explain-line-desc">Dividing a vector by its own scalar magnitude preserves its spatial direction while rescaling its length to exactly 1.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Q7 -->
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
              <span>💡 Touch for Line-by-Line Explanation &amp; Mathematical Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Weights Matter</span>
                <div class="explain-line-title">Why weights (2 and 3) must be multiplied</div>
                <div class="explain-line-desc">Do not use standard dot product $(u \cdot v = u_1 v_1 + u_2 v_2)$. Always apply the specified coefficients $2$ and $3$.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `,
  partB: String.raw`
      <div class="section-badge">Part B: Complete 16-Mark University Exam Questions (Unit III)</div>

      <!-- Part B Q1 -->
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
              <span>💡 Touch for Line-by-Line Explanation &amp; Mathematical Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Projection Subtraction</span>
                <div class="explain-line-title">Geometric meaning of Gram-Schmidt formula</div>
                <div class="explain-line-desc">$\frac{\langle v_k, w_j \rangle}{\|w_j\|^2} w_j$ is the orthogonal projection of $v_k$ along direction $w_j$. Subtracting all projections leaves only the perpendicular component!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Part B Q2 -->
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
              <span>💡 Touch for Line-by-Line Explanation &amp; Mathematical Reasoning</span>
              <span class="why-icon">▼</span>
            </button>
            <div class="why-content">
              <div class="explain-intro">Step-by-step breakdown of equations, operations, and exam marks:</div>
              <div class="explain-line">
                <span class="explain-line-badge">Line 1 • Verification Check</span>
                <div class="explain-line-title">How to quickly verify your answers in exam</div>
                <div class="explain-line-desc">Take dot products: $u_1 \cdot u_2 = -\frac{1}{2} + \frac{1}{2} + 0 = 0$. $u_1 \cdot u_3 = 0$. $u_2 \cdot u_3 = 0$. All mutual dot products are zero, guaranteeing full 16/16 marks!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `
};
