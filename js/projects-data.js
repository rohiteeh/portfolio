/**
 * Portfolio Projects & Skills Data for J. Rohit Rajan (@rohiteeh)
 * Grounded in Rohit's actual GitHub repositories and live deployments
 */

const portfolioProjects = [
  {
    id: "plateiq",
    title: "PlateIQ — Dietary AI Analyzer",
    subtitle: "Computer Vision & Multimodal Calorie & Macro Nutrition Recognition",
    badge: "⚡ AI Vision & Health",
    badgeClass: "badge-ai",
    cardClass: "featured-ai",
    image: "assets/images/project-calscan.jpg",
    stars: 28,
    description: "An AI-powered web camera scanner that recognizes food dishes, estimates portion weights, and instantly computes calories, protein, carbohydrates, and fats in real time. Designed to make healthy nutrition effortless.",
    impact: "⚡ Real-time Dish Classification • Instant Macro Breakdown • Mobile-First PWA",
    tech: ["HTML5", "CSS3", "JavaScript", "Vision AI Integration", "Chart.js"],
    liveUrl: "https://rohiteeh.github.io/PlateIQ/",
    githubUrl: "https://github.com/rohiteeh/PlateIQ",
    caseStudy: {
      overview: "PlateIQ tackles the friction of manual dietary logging by letting users snapshot a plate to identify food items, calculate nutritional breakdowns, and track caloric intake instantly.",
      keyFeatures: [
        "Visual dish segmentation detecting food items on a plate.",
        "Accurate nutritional estimation: computes calories, protein, fat, carbohydrates.",
        "Camera stream integration with fallback image upload for any device.",
        "Daily nutritional progress tracker and history logs."
      ],
      metrics: "Live deployment on GitHub Pages with sub-second visual inference response."
    }
  },
  {
    id: "cursed-energy",
    title: "RY0MEN — JJK Cursed Energy Visualizer",
    subtitle: "MediaPipe Hand Gesture Recognition & Three.js WebGL Particle Engine",
    badge: "🔥 Three.js & MediaPipe",
    badgeClass: "badge-ai",
    cardClass: "featured-ai",
    image: "assets/images/project-uyir.jpg",
    stars: 25,
    description: "An interactive WebGL cursed technique visualizer recreating Jujutsu Kaisen's King of Curses techniques using real-time webcam hand gesture recognition. Features Domain Expansion: Malevolent Shrine, Fuga Fire Arrow, and Cleave with synchronized sound design.",
    impact: "🔥 60FPS WebGL Particle Simulation • Sukuna Hand Sign Detection • Audio Sync",
    tech: ["HTML5", "JavaScript", "Three.js", "MediaPipe Hands", "Web Audio API"],
    liveUrl: "https://github.com/rohiteeh/cursed-energy-visualizer",
    githubUrl: "https://github.com/rohiteeh/cursed-energy-visualizer",
    caseStudy: {
      overview: "Combines modern computer vision (Google MediaPipe) with GPU-accelerated WebGL shaders to map real-world hand signs into anime cursed technique manifestations.",
      keyFeatures: [
        "Malevolent Shrine Domain Expansion: triggers on Sukuna hand sign gesture with ominous temple particle architecture and shrine audio.",
        "Kamino (Fuga) Fire Arrow: explosive vortex blasted outward via horizontal gun gesture.",
        "Cleave & Black Flash: high-density cutting slices adjusting to motion velocity.",
        "High-performance particle buffer rendering with low CPU overhead."
      ],
      metrics: "Seamless 60 FPS gesture tracking running client-side in the browser."
    }
  },
  {
    id: "skillmont",
    title: "SkillMint — Student Freelance Marketplace",
    subtitle: "3-Tier Platform with Socket.io Real-Time Messaging & RBAC Security",
    badge: "🚀 Full-Stack Marketplace",
    badgeClass: "badge-winner",
    cardClass: "featured-winner",
    image: "assets/images/project-next.jpg",
    stars: 24,
    description: "A production-grade freelance marketplace platform connecting college students and freshers with clients. Features complete project lifecycles, bidding with portfolio links, JWT role-based access control, and Socket.io direct messaging.",
    impact: "🌐 Live on Vercel • Socket.io Chat Rooms • 27 Automated Test Assertions",
    tech: ["Node.js", "Express.js", "Socket.io", "SQLite / MySQL", "JWT Auth", "REST APIs"],
    liveUrl: "https://skillmont.vercel.app",
    githubUrl: "https://github.com/rohiteeh/skillmont",
    caseStudy: {
      overview: "Engineered as an academic project to bridge the gap between talented college developers and clients seeking quality work, providing a secure, end-to-end freelancing hub.",
      keyFeatures: [
        "Authentication & RBAC: bcrypt password hashing, JWT sessions, and role authorization for Student, Client, and Admin.",
        "Project & Hiring Lifecycle: client posting, student bidding, proposal review, and project status progression.",
        "Real-Time Messaging: authenticated Socket.io rooms, typing indicators, read receipts, and offline message storage.",
        "Dual Database Support: pluggable SQLite for local zero-config testing and MySQL with relational indexes."
      ],
      metrics: "Deployed live on Vercel (https://skillmont.vercel.app) with comprehensive test coverage."
    }
  },
  {
    id: "uyir",
    title: "Uyir — Drug-Free Tamil Nadu",
    subtitle: "Civic Tech Healthcare Web Platform for Substance Abuse Prevention",
    badge: "🌱 Civic Tech Platform",
    badgeClass: "badge-winner",
    cardClass: "featured-winner",
    image: "assets/images/project-uyir.jpg",
    stars: 18,
    description: "A civic tech web initiative engineered to support Tamil Nadu's anti-substance mission. Features geo-located rehabilitation & counseling centers, 24/7 crisis helpline routing (104), secure anonymous reporting, and youth educational resources.",
    impact: "🌱 120+ Verified Centers Mapped • Leaflet GIS Map • Direct 104 Helpline Routing",
    tech: ["HTML5", "CSS3", "JavaScript", "Leaflet Maps API", "Civic Tech"],
    liveUrl: "https://github.com/rohiteeh/portfolio",
    githubUrl: "https://github.com/rohiteeh",
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
    id: "gesture-animation",
    title: "Gesture Animation System",
    subtitle: "Computer Vision Motion Framework for Interactive Web Interactions",
    badge: "⚡ Vision Interaction",
    badgeClass: "badge-ai",
    cardClass: "featured-ai",
    image: "assets/images/project-calscan.jpg",
    stars: 15,
    description: "A touchless web motion controller using browser camera input to navigate, trigger micro-interactions, and animate DOM elements without a physical mouse or keyboard.",
    impact: "✋ Touchless UI Control • Real-Time Spatial Tracking • Zero Hardware Extra",
    tech: ["HTML5", "CSS3", "JavaScript", "Camera API", "Canvas 2D"],
    liveUrl: "https://github.com/rohiteeh/gesture-animation-system",
    githubUrl: "https://github.com/rohiteeh/gesture-animation-system",
    caseStudy: {
      overview: "Investigating accessible, contact-free user interfaces by translating physical hand coordinates into fluid web events.",
      keyFeatures: [
        "Real-time webcam coordinate triangulation.",
        "Kinematic smoothing filters preventing jitter in DOM manipulation.",
        "Configurable action triggers for scroll, click, and swipe gestures."
      ],
      metrics: "High gesture accuracy with minimal CPU utilization in standard modern browsers."
    }
  },
  {
    id: "hotel-website",
    title: "Grand Horizon — Hotel Web Experience",
    subtitle: "Responsive Hospitality Suite with Interactive Room Booking & Showcase",
    badge: "🏨 Responsive Web Build",
    badgeClass: "badge-next",
    cardClass: "project-collaborative",
    image: "assets/images/project-next.jpg",
    stars: 10,
    description: "A luxury hotel and resort booking platform with interactive room exploration, seasonal dining menus, reservation inquiries, and mobile-optimized booking flow.",
    impact: "✨ 100% Mobile Responsive • Smooth Gallery Animations • Fast Load Time",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Flexbox/Grid"],
    liveUrl: "https://github.com/rohiteeh/hotel-website",
    githubUrl: "https://github.com/rohiteeh/hotel-website",
    caseStudy: {
      overview: "Built to demonstrate high aesthetic commercial web design, accessible semantic layout, and frictionless reservation workflows.",
      keyFeatures: [
        "Fluid responsive design with CSS Grid and modern clamp() typography.",
        "Interactive room amenity filters and carousel preview.",
        "Form validation and dynamic rate calculation."
      ],
      metrics: "Scored 99 on Google Lighthouse performance and accessibility audits."
    }
  }
];

// Skills Data organized by category matching Rohit's technical stack
const skillsData = [
  { name: "HTML5 / Semantic Web", category: "frontend", icon: "🌐", level: "Foundation & Practice" },
  { name: "CSS3 / Modern Responsive", category: "frontend", icon: "🎨", level: "Foundation & Practice" },
  { name: "JavaScript (ES6+)", category: "frontend", icon: "⚡", level: "Active Development" },
  { name: "Three.js / WebGL", category: "frontend", icon: "🔮", level: "Creative Exploration" },
  
  { name: "Node.js & Express.js", category: "backend", icon: "🟢", level: "Full-Stack Implementation" },
  { name: "Socket.io (Real-Time)", category: "backend", icon: "💬", level: "WebSocket Architecture" },
  { name: "MySQL & SQLite", category: "backend", icon: "🗄️", level: "Database Modeling" },
  { name: "C & C++ Programming", category: "backend", icon: "💠", level: "Academic Foundations" },
  
  { name: "MediaPipe / Vision AI", category: "ai-tools", icon: "👁️", level: "Computer Vision" },
  { name: "Gemini API Multimodal", category: "ai-tools", icon: "✨", level: "AI Integration" },
  { name: "Git, GitHub & Vercel", category: "ai-tools", icon: "🐙", level: "Deployment & CI" },
  { name: "Cybersecurity Fundamentals", category: "ai-tools", icon: "🛡️", level: "Core Interest" }
];
