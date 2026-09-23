/**
 * Main Portfolio Application Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  initNameCustomizer();
  initNavbar();
  renderProjects();
  renderSkills("all");
  initSkillsFilter();
  initContactForm();
  initProjectModals();
  initResumeModal();
  initThemeToggle();
  initScrollSpy();
  initTypewriter();
  initScrollProgressBar();
  initAmbientCanvas();
  initCardSpotlightAndTilt();
  initClickSparkle();
});

/* --------------------------------------------------------------------------
   1. Dynamic Name Customizer
   -------------------------------------------------------------------------- */
const DEFAULT_NAME = "J. Rohit Rajan";

function initNameCustomizer() {
  let savedName = localStorage.getItem("portfolio_user_name");
  if (!savedName || savedName === "Alex Chen" || savedName === "Developer") {
    savedName = DEFAULT_NAME;
    localStorage.setItem("portfolio_user_name", DEFAULT_NAME);
  }
  updateAllNameInstances(savedName);

  // Name click in Hero
  const nameHighlight = document.getElementById("hero-name-target");
  if (nameHighlight) {
    nameHighlight.addEventListener("click", () => openNameModal());
  }

  // Edit Name button in Navbar
  const btnEditName = document.getElementById("btn-edit-name");
  if (btnEditName) {
    btnEditName.addEventListener("click", () => openNameModal());
  }

  // Name Modal Form
  const nameForm = document.getElementById("name-form");
  if (nameForm) {
    nameForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("name-modal-input");
      if (input && input.value.trim()) {
        const newName = input.value.trim();
        localStorage.setItem("portfolio_user_name", newName);
        updateAllNameInstances(newName);
        closeNameModal();
        showToast(`✨ Portfolio personalized for: ${newName}`);
      }
    });
  }

  // Close Name Modal
  const closeBtn = document.getElementById("close-name-modal");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeNameModal);
  }
}

function updateAllNameInstances(name) {
  const heroTarget = document.getElementById("hero-name-target");
  if (heroTarget) heroTarget.textContent = name;

  const brandTarget = document.getElementById("brand-name-target");
  if (brandTarget) brandTarget.textContent = name;

  const footerTarget = document.getElementById("footer-name-target");
  if (footerTarget) footerTarget.textContent = name;

  const avatarInitials = document.getElementById("avatar-initials");
  if (avatarInitials) {
    const initials = name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
    avatarInitials.textContent = initials || "AC";
  }

  // Also update resume content if loaded
  if (typeof renderResumeContent === "function") {
    renderResumeContent(name);
  }
}

function openNameModal() {
  const modal = document.getElementById("name-modal");
  const input = document.getElementById("name-modal-input");
  const current = localStorage.getItem("portfolio_user_name") || DEFAULT_NAME;
  if (input) input.value = current;
  if (modal) modal.classList.add("active");
}

function closeNameModal() {
  const modal = document.getElementById("name-modal");
  if (modal) modal.classList.remove("active");
}

/* --------------------------------------------------------------------------
   2. Navbar, Mobile Drawer & Scroll Spy
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
      mobileToggle.textContent = navLinks.classList.contains("mobile-open") ? "✕" : "☰";
    });

    // Close on link click
    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
        mobileToggle.textContent = "☰";
      });
    });
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Render Projects
   -------------------------------------------------------------------------- */
function renderProjects() {
  const container = document.getElementById("projects-grid-target");
  if (!container || typeof portfolioProjects === "undefined") return;

  container.innerHTML = portfolioProjects.map(project => `
    <article class="project-card ${project.cardClass || ''}">
      <div class="project-image-box">
        <span class="project-badge-overlay">
          <span class="badge ${project.badgeClass}">${project.badge}</span>
        </span>
        <img src="${project.image}" alt="${project.title} Preview" loading="lazy" />
      </div>
      
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        
        <div class="project-impact">
          <span>${project.impact}</span>
        </div>

        <div class="tech-tags">
          ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-links">
          ${project.id === "next-project" ? `
            <a href="#contact" class="project-link-btn primary">
              <span>🚀 Start Collaboration</span>
            </a>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          ` : `
            <button type="button" class="project-link-btn primary" onclick="openCaseStudyModal('${project.id}')">
              <span>⚡ Live Demo</span>
            </button>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View Source on GitHub">
              <span>GitHub</span> ↗
            </a>
            <button type="button" class="project-link-btn" onclick="openCaseStudyModal('${project.id}')" title="Read Case Study Details">
              <span>Details</span> 🔍
            </button>
          `}
        </div>
      </div>
    </article>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. Render Skills & Filters
   -------------------------------------------------------------------------- */
function renderSkills(category) {
  const container = document.getElementById("skills-grid-target");
  if (!container || typeof skillsData === "undefined") return;

  const filtered = category === "all" 
    ? skillsData 
    : skillsData.filter(s => s.category === category);

  container.innerHTML = filtered.map(skill => `
    <div class="skill-card">
      <div class="skill-icon-box">${skill.icon}</div>
      <div class="skill-info">
        <div class="skill-name">${skill.name}</div>
        <div class="skill-category">${skill.level} Proficiency</div>
      </div>
    </div>
  `).join('');
}

function initSkillsFilter() {
  const tabButtons = document.querySelectorAll(".skill-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderSkills(category);
    });
  });
}

/* --------------------------------------------------------------------------
   5. Project Case Study & Live Preview Modals
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("close-project-modal");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  }

  // Click outside to close
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
}

function openCaseStudyModal(projectId) {
  const modal = document.getElementById("project-modal");
  const contentTarget = document.getElementById("project-modal-content-target");
  if (!modal || !contentTarget || typeof portfolioProjects === "undefined") return;

  const project = portfolioProjects.find(p => p.id === projectId);
  if (!project) return;

  contentTarget.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="border-radius: var(--radius-md); overflow: hidden; max-height: 320px;">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>

      <div>
        <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.5rem;">
          <span class="badge ${project.badgeClass}">${project.badge}</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.4rem; color: var(--text-main);">${project.title}</h2>
        <p style="color: var(--accent-cyan); font-weight: 500;">${project.subtitle}</p>
      </div>

      <div>
        <h4 style="color: var(--text-main); font-size: 1.1rem; margin-bottom: 0.5rem;">Project Background</h4>
        <p style="color: var(--text-muted); line-height: 1.7;">${project.caseStudy.overview}</p>
      </div>

      <div>
        <h4 style="color: var(--text-main); font-size: 1.1rem; margin-bottom: 0.5rem;">Key Engineering Feats</h4>
        <ul style="padding-left: 1.2rem; color: var(--text-muted); line-height: 1.7;">
          ${project.caseStudy.keyFeatures.map(f => `<li style="margin-bottom: 0.4rem;">${f}</li>`).join('')}
        </ul>
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); padding: 1rem; border-radius: var(--radius-sm); color: #34d399;">
        <strong>Impact:</strong> ${project.caseStudy.metrics}
      </div>

      <div style="display: flex; gap: 1rem; margin-top: 1rem;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex: 1;">
          View Repository on GitHub ↗
        </a>
        <button type="button" class="btn btn-primary" style="flex: 1;" onclick="simulateLiveInteraction('${project.title}')">
          Interactive Simulated Demo 🚀
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function simulateLiveInteraction(projectTitle) {
  showToast(`🚀 Initializing live preview environment for ${projectTitle}...`);
}

/* --------------------------------------------------------------------------
   6. Resume Modal Setup
   -------------------------------------------------------------------------- */
function initResumeModal() {
  const modal = document.getElementById("resume-modal");
  const btnOpen = document.querySelectorAll(".btn-open-resume");
  const btnClose = document.getElementById("close-resume-modal");
  const btnPrint = document.getElementById("btn-print-resume");
  const btnHtmlDownload = document.getElementById("btn-download-resume-html");

  btnOpen.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentName = localStorage.getItem("portfolio_user_name") || DEFAULT_NAME;
      renderResumeContent(currentName);
      if (modal) modal.classList.add("active");
    });
  });

  if (btnClose && modal) {
    btnClose.addEventListener("click", () => modal.classList.remove("active"));
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  if (btnPrint) {
    btnPrint.addEventListener("click", triggerResumeDownload);
  }

  if (btnHtmlDownload) {
    btnHtmlDownload.addEventListener("click", triggerDirectHtmlDownload);
  }
}

/* --------------------------------------------------------------------------
   7. Contact Form Handler
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();
    const submitBtn = document.getElementById("contact-submit-btn");

    if (!name || !email || !message) {
      showToast("⚠️ Please fill in all required fields.");
      return;
    }

    // Button loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "<span>Sending Message...</span> ⏳";
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();
      showToast(`🎉 Message sent! Thank you ${name}, I'll reply to ${email} shortly.`);
    }, 1200);
  });
}

/* --------------------------------------------------------------------------
   8. Theme Toggle (Obsidian Dark / Crisp Light)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem("portfolio_theme") || "dark";
  if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("portfolio_theme", isLight ? "light" : "dark");
    toggleBtn.textContent = isLight ? "☀️" : "🌙";
    showToast(`Switched to ${isLight ? 'Light' : 'Obsidian Dark'} Theme`);
  });
}

/* --------------------------------------------------------------------------
   9. Toast Notification System
   -------------------------------------------------------------------------- */
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Copy to clipboard helper
function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`📋 Copied ${label} to clipboard!`);
  }).catch(() => {
    showToast(`Could not auto-copy, details: ${text}`);
  });
}

/* --------------------------------------------------------------------------
   10. ULTRA-COOL UI/UX IMPLEMENTATIONS
   -------------------------------------------------------------------------- */

/* A. Dynamic Typewriter Effect in Hero */
function initTypewriter() {
  const target = document.getElementById("typing-target");
  if (!target) return;

  const phrases = [
    "help people.",
    "solve real-world challenges.",
    "save lives (Uyir Civic Platform).",
    "track nutrition with AI (CalScan).",
    "turn ambitious ideas into reality."
  ];

  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      target.textContent = currentPhrase.substring(0, charIndex);
      typingSpeed = 40;
    } else {
      charIndex++;
      target.textContent = currentPhrase.substring(0, charIndex);
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 350;
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 1500);
}

/* B. Scroll Progress Bar */
function initScrollProgressBar() {
  const progressBar = document.getElementById("scroll-progress-bar");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });
}

/* C. Interactive Ambient Particle Constellation Canvas */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 30), 45);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? "rgba(0, 242, 254, " : "rgba(121, 40, 202, "
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.18;
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Update and draw particles
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.fillStyle = `${p.color}0.7)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* D. Card Mouse Spotlight & 3D Interactive Tilt */
function initCardSpotlightAndTilt() {
  function applyCardInteractions() {
    const cards = document.querySelectorAll(
      ".project-card, .skill-card, .philosophy-card, .contact-info-card, .contact-form-card"
    );

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        // Subtle 3D Tilt for project cards
        if (card.classList.contains("project-card")) {
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5;
          const rotateY = ((x - centerX) / centerX) * 5;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        }
      });

      card.addEventListener("mouseleave", () => {
        if (card.classList.contains("project-card")) {
          card.style.transform = "";
        }
      });
    });
  }

  // Initial call and observe DOM changes
  applyCardInteractions();
  setTimeout(applyCardInteractions, 300);
}

/* E. Click Sparkle / Ripple Aura */
function initClickSparkle() {
  document.addEventListener("click", (e) => {
    // Avoid creating ripple over inputs or textareas
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    const ripple = document.createElement("div");
    ripple.className = "click-ripple";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

/* F. Interactive Developer Terminal Widget Handler */
window.runTerminalCmd = function (cmd) {
  const outputTarget = document.getElementById("terminal-output-target");
  if (!outputTarget) return;

  const cmdOutputs = {
    whoami: `👋 J. Rohit Rajan | BCA Student @ Hindusthan College of Science & Commerce
🎯 Aspiring Software Developer • Web Developer • Cybersecurity Enthusiast
📍 Erode, Tamil Nadu, India
🌱 Motto: "I build websites that help people."`,

    skills: `{
  "programming": ["C (Basic)", "C++ (Basic)", "Java (Basic)"],
  "web": ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  "tools": ["Git", "VS Code", "Microsoft Office"],
  "coreStrengths": ["Problem Solving", "Team Collaboration", "Quick Learner"]
}`,

    education: `🎓 Hindusthan College of Science and Commerce
   Degree: Bachelor of Computer Applications (BCA) [2024 - 2027]
🏫 Perundurai Boys School
   Higher Secondary (Class XII) [2024]
🏫 The Shree Ganga School
   SSLC (Class X) [2022]`,

    uyir: `🌱 [CIVIC TECH PROJECT] Uyir - Drug-Free Tamil Nadu
- Civic Tech Platform for Community Healthcare
- Mapped 120+ verified rehabilitation clinics with Leaflet GIS
- Direct 104 helpline routing + secure reporting pipeline`,

    hackathon: `🌱 [CIVIC TECH PROJECT] Uyir - Drug-Free Tamil Nadu
- Civic Tech Platform for Community Healthcare
- Mapped 120+ verified rehabilitation clinics with Leaflet GIS
- Direct 104 helpline routing + secure reporting pipeline`,

    contact: `📬 Contact J. Rohit Rajan:
- Email: rohitrajan1436@gmail.com
- Phone: +91 8248064014
- LinkedIn: linkedin.com/in/rohitrajan
- GitHub: github.com/rohiteeh`,

    clear: ""
  };

  if (cmd === "clear") {
    outputTarget.innerHTML = `
      <div class="terminal-prompt-line">
        <span class="terminal-prompt-user">rohit@portfolio:~$</span>
        <span>clear</span>
      </div>
      <div class="terminal-output" style="color: var(--text-muted);">Terminal screen cleared. Ready for next command.</div>
    `;
    return;
  }

  const result = cmdOutputs[cmd] || `command not found: ${cmd}. Try whoami, skills, education, hackathon, or contact.`;

  outputTarget.innerHTML += `
    <div class="terminal-prompt-line" style="margin-top: 0.8rem;">
      <span class="terminal-prompt-user">rohit@portfolio:~$</span>
      <span>${cmd}</span>
    </div>
    <div class="terminal-output">${result}</div>
  `;

  outputTarget.scrollTop = outputTarget.scrollHeight;
};
