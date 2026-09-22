/**
 * Resume Modal and Download Logic for J. Rohit Rajan
 * Formats a clean executive CV with one-click print-to-PDF or HTML resume download
 */

const resumeData = {
  name: "J. Rohit Rajan",
  title: "BCA Student | Aspiring Software Developer & Web Developer",
  email: "rohitrajan1436@gmail.com",
  phone: "+91 8248064014",
  location: "Erode, Tamil Nadu, India",
  linkedin: "linkedin.com/in/rohitrajan",
  summary: "Motivated Bachelor of Computer Applications (BCA) student with a strong foundation in programming, web development, and problem-solving. Passionate about learning emerging technologies and building practical software solutions. Quick learner with strong communication and teamwork skills, seeking an entry-level Software Developer, Web Developer, IT Support, or Cybersecurity role.",
  
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Hindusthan College of Science and Commerce",
      date: "2024 – 2027"
    },
    {
      degree: "Higher Secondary (Class XII)",
      institution: "Perundurai Boys School",
      date: "2024"
    },
    {
      degree: "SSLC (Class X)",
      institution: "The Shree Ganga School",
      date: "2022"
    }
  ],

  technicalSkills: {
    programming: ["C (Basic)", "C++ (Basic)", "Java (Basic)"],
    web: ["HTML5", "CSS3", "JavaScript Fundamentals", "Responsive Web Design"],
    tools: ["Microsoft Office", "Git", "VS Code"],
    core: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Continuous Learning"]
  },

  academicProfile: [
    "Learning programming fundamentals using C, C++, and Java.",
    "Building a strong foundation in HTML and CSS for modern web development.",
    "Developing problem-solving and logical thinking skills through academic coursework.",
    "Continuously improving technical knowledge through hands-on practice and self-learning."
  ],

  projects: [
    {
      title: "Uyir - Drug-Free TN",
      tagline: "State Hackathon Winner Project",
      bullets: [
        "Civic web platform developed to raise substance abuse awareness and provide direct access to verified rehabilitation centers across Tamil Nadu.",
        "Integrated interactive locator map and emergency health helpline routing (104).",
        "Awarded 1st place for impactful societal application and clean user interface."
      ]
    },
    {
      title: "CalScan - Photo Calorie Counter",
      tagline: "Multimodal AI Vision Prototype",
      bullets: [
        "Computer vision nutrition assistant that detects meals and calculates calories and macronutrients instantly.",
        "Engineered accessible, mobile-first interface with interactive nutrition tracking charts."
      ]
    }
  ],

  strengths: [
    "Quick Learner",
    "Positive Attitude",
    "Strong Communication Skills",
    "Team Player",
    "Self-Motivated",
    "Adaptable to New Technologies"
  ],

  languages: ["English", "Tamil"],

  interests: [
    "Software Development",
    "Cybersecurity",
    "Learning New Technologies",
    "Programming",
    "Technology Trends"
  ],

  personalDetails: {
    fullName: "J. Rohit Rajan",
    dob: "21 June 2007",
    nationality: "Indian"
  }
};

function renderResumeContent(name) {
  const resumeContainer = document.getElementById("resume-content-target");
  if (!resumeContainer) return;

  const currentName = name || resumeData.name;

  resumeContainer.innerHTML = `
    <div class="resume-paper" id="printable-resume">
      <!-- Header -->
      <header class="resume-header">
        <div>
          <h1 class="resume-name">${currentName}</h1>
          <p class="resume-title">${resumeData.title}</p>
        </div>
        <div class="resume-contact-info">
          <div>📧 <a href="mailto:${resumeData.email}" style="color: inherit; text-decoration: underline;">${resumeData.email}</a></div>
          <div>📱 ${resumeData.phone}</div>
          <div>📍 ${resumeData.location}</div>
          <div>💼 ${resumeData.linkedin}</div>
        </div>
      </header>

      <!-- Professional Summary -->
      <section class="resume-section">
        <h2 class="resume-section-title">Professional Summary</h2>
        <p style="font-size: 0.92rem; line-height: 1.6; color: #334155;">${resumeData.summary}</p>
      </section>

      <!-- Education -->
      <section class="resume-section">
        <h2 class="resume-section-title">Education</h2>
        ${resumeData.education.map(edu => `
          <div class="resume-entry" style="margin-bottom: 0.6rem;">
            <div class="resume-entry-header">
              <span class="resume-entry-title">${edu.degree}</span>
              <span class="resume-entry-date">${edu.date}</span>
            </div>
            <div class="resume-entry-subtitle" style="color: #475569; font-weight: 500;">${edu.institution}</div>
          </div>
        `).join('')}
      </section>

      <!-- Technical Skills -->
      <section class="resume-section">
        <h2 class="resume-section-title">Technical Skills</h2>
        <div style="font-size: 0.9rem; line-height: 1.7; color: #334155;">
          <div><strong>• Programming:</strong> ${resumeData.technicalSkills.programming.join(', ')}</div>
          <div><strong>• Web Technologies:</strong> ${resumeData.technicalSkills.web.join(', ')}</div>
          <div><strong>• Tools:</strong> ${resumeData.technicalSkills.tools.join(', ')}</div>
          <div><strong>• Core Skills:</strong> ${resumeData.technicalSkills.core.join(', ')}</div>
        </div>
      </section>

      <!-- Featured Projects & Experience -->
      <section class="resume-section">
        <h2 class="resume-section-title">Featured Projects</h2>
        ${resumeData.projects.map(proj => `
          <div class="resume-entry" style="margin-bottom: 0.8rem;">
            <div class="resume-entry-header">
              <span class="resume-entry-title">${proj.title}</span>
              <span class="resume-entry-date">${proj.tagline}</span>
            </div>
            <ul class="resume-bullets">
              ${proj.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </section>

      <!-- Academic Profile -->
      <section class="resume-section">
        <h2 class="resume-section-title">Academic Profile</h2>
        <ul class="resume-bullets">
          ${resumeData.academicProfile.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </section>

      <!-- Two Column: Strengths & Personal Details -->
      <section class="resume-section">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
          <div>
            <h2 class="resume-section-title">Strengths</h2>
            <ul class="resume-bullets">
              ${resumeData.strengths.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
          <div>
            <h2 class="resume-section-title">Personal Details & Languages</h2>
            <div style="font-size: 0.88rem; line-height: 1.7; color: #334155;">
              <div><strong>Date of Birth:</strong> ${resumeData.personalDetails.dob}</div>
              <div><strong>Nationality:</strong> ${resumeData.personalDetails.nationality}</div>
              <div><strong>Languages:</strong> ${resumeData.languages.join(', ')}</div>
              <div><strong>Interests:</strong> ${resumeData.interests.join(', ')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

// Function to trigger clean resume print or PDF download
function triggerResumeDownload() {
  const currentName = localStorage.getItem("portfolio_user_name") || resumeData.name;
  const origTitle = document.title;
  document.title = `${currentName.replace(/\s+/g, '_')}_Resume`;
  window.print();
  document.title = origTitle;
  
  if (typeof showToast === 'function') {
    showToast("📄 Print / PDF dialog opened for J. Rohit Rajan's Resume!");
  }
}

// Direct HTML Resume download file generator
function triggerDirectHtmlDownload() {
  const currentName = localStorage.getItem("portfolio_user_name") || resumeData.name;
  const resumeElement = document.getElementById("printable-resume");
  if (!resumeElement) return;

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${currentName} - Resume</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 30px auto; max-width: 800px; color: #0f172a; line-height: 1.5; padding: 20px; }
    h1 { margin-bottom: 4px; font-size: 26px; }
    h2 { border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 20px; font-size: 15px; text-transform: uppercase; color: #0f172a; }
    .header-row { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 16px; }
    .contact-info { text-align: right; font-size: 13px; color: #475569; }
    .entry-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 14px; }
    .entry-subtitle { color: #2563eb; font-size: 13px; margin-bottom: 4px; }
    ul { padding-left: 20px; font-size: 13px; color: #334155; margin-top: 4px; }
    li { margin-bottom: 3px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  </style>
</head>
<body>
  ${resumeElement.innerHTML}
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${currentName.replace(/[\s.]+/g, '_')}_Resume.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  if (typeof showToast === 'function') {
    showToast("💾 Resume file downloaded successfully!");
  }
}
