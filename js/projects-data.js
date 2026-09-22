/**
 * Portfolio Projects & Skills Data for J. Rohit Rajan
 */

const portfolioProjects = [
  {
    id: "uyir",
    title: "Uyir - Drug-Free TN",
    subtitle: "Civic Web Platform for Substance Abuse Prevention & Community Support",
    badge: "🌱 Civic Tech Platform",
    badgeClass: "badge-winner",
    cardClass: "featured-winner",
    image: "assets/images/project-uyir.jpg",
    description: "A civic tech web platform engineered to support Tamil Nadu's anti-substance mission. Features geo-located rehabilitation & counseling centers, 24/7 crisis helpline routing (104), secure anonymous reporting, and youth educational resources.",
    impact: "🌱 120+ Verified Centers • Real-time 24/7 Helpline Routing • GIS Mapping",
    tech: ["HTML5", "CSS3", "JavaScript", "Leaflet Maps API", "Web Development"],
    liveUrl: "#project-modal-uyir",
    githubUrl: "https://github.com/rohitrajan/uyir-drug-free-tn",
    demoAction: "openLivePreviewModal",
    caseStudy: {
      overview: "Substance abuse poses severe challenges for youth. Uyir was built to address the lack of easily accessible, verified rehab centers and stigma-free reporting channels across Tamil Nadu.",
      keyFeatures: [
        "Interactive GIS Map with proximity filtering for 120+ accredited rehabilitation clinics.",
        "Secure Anonymous Reporting pipeline ensuring community safety without risk of retaliation.",
        "Direct one-click connection to the Government 104 and 14416 health helplines.",
        "Educational interactive modules and recovery stories designed to destigmatize seeking help."
      ],
      metrics: "Developed for high societal impact, clean architectural code, and intuitive mobile accessibility."
    }
  },
  {
    id: "calscan",
    title: "CalScan - Photo Calorie Counter",
    subtitle: "AI-Powered Computer Vision for Real-Time Dietary & Macro Tracking",
    badge: "⚡ AI & Computer Vision",
    badgeClass: "badge-ai",
    cardClass: "featured-ai",
    image: "assets/images/project-calscan.jpg",
    description: "An AI-powered web camera scanner that identifies food dishes, estimates portion weights, and instantly computes calories, protein, carbohydrates, and fats with high accuracy. Built to make healthy nutrition frictionless.",
    impact: "⚡ AI Vision Integration • Instant Macro Breakdown • Mobile-First Experience",
    tech: ["HTML5 Canvas", "CSS3", "JavaScript", "Vision AI Integration", "Chart.js"],
    liveUrl: "#project-modal-calscan",
    githubUrl: "https://github.com/rohitrajan/calscan-calorie-counter",
    demoAction: "openLivePreviewModal",
    caseStudy: {
      overview: "Tracking meals in traditional apps requires typing and portion guesswork. CalScan replaces manual entry with a simple camera snapshot using multimodal vision AI processing.",
      keyFeatures: [
        "Visual segmentation: detects food items on a plate.",
        "Accurate nutritional estimation: computes calories, protein, fat, carbohydrates.",
        "Interactive dietary progress tracking.",
        "Camera stream integration with fallback image upload for any device."
      ],
      metrics: "Tested across diverse culinary dishes with rapid inference time and clean responsive layout."
    }
  },
  {
    id: "next-project",
    title: "Your Next Project",
    subtitle: "Your Vision + Diligent Engineering = Next Breakthrough Solution",
    badge: "🚀 Let's Collaborate",
    badgeClass: "badge-next",
    cardClass: "project-collaborative",
    image: "assets/images/project-next.jpg",
    description: "Looking for an enthusiastic, fast-learning developer with strong foundations in C, C++, Java, HTML, CSS, and modern web development? Let's team up to build software that solves real-world challenges.",
    impact: "✨ Open to Entry-Level Developer, Web Dev, IT Support & Cybersecurity Roles",
    tech: ["HTML5 / CSS3", "C / C++", "Java", "Web Development", "Problem Solving"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/rohitrajan",
    demoAction: "scrollToContact",
    caseStudy: {
      overview: "Great software starts with passion, clean fundamentals, and the dedication to learn emerging technologies.",
      keyFeatures: [
        "Strong foundation in programming logic and structured problem solving.",
        "Responsive, accessible frontend development with HTML & CSS.",
        "Quick adaptability to new frameworks and tools.",
        "Active student of BCA at Hindusthan College of Science and Commerce."
      ],
      metrics: "Ready to contribute immediately to innovative development teams."
    }
  }
];

// Skills Data organized by category matching Rohit's resume
const skillsData = [
  { name: "HTML5 / Semantic Web", category: "frontend", icon: "🌐", level: "Foundation & Practice" },
  { name: "CSS3 / Responsive Styling", category: "frontend", icon: "🎨", level: "Foundation & Practice" },
  { name: "JavaScript Fundamentals", category: "frontend", icon: "⚡", level: "Active Learning" },
  { name: "Responsive Web Design", category: "frontend", icon: "📱", level: "Foundation" },
  
  { name: "C Programming", category: "backend", icon: "🔷", level: "Basic / Academic" },
  { name: "C++ (OOP Concepts)", category: "backend", icon: "💠", level: "Basic / Academic" },
  { name: "Java Fundamentals", category: "backend", icon: "☕", level: "Basic / Academic" },
  { name: "Logical Thinking & Algorithms", category: "backend", icon: "🧠", level: "Core Strength" },
  
  { name: "Cybersecurity Fundamentals", category: "ai-tools", icon: "🛡️", level: "Special Interest" },
  { name: "Microsoft Office Suite", category: "ai-tools", icon: "📊", level: "Proficient" },
  { name: "Git & VS Code", category: "ai-tools", icon: "🐙", level: "Tools" },
  { name: "Problem Solving & Adaptability", category: "ai-tools", icon: "💡", level: "Core Skill" }
];
