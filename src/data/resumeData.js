import columbiaLogo from '../assets/logos/columbia.png';
import leadsquaredLogo from '../assets/logos/leadsquared.png';
import isroLogo from '../assets/logos/isro.png';
import csirLogo from '../assets/logos/csir.png';
import githubProjectImage from '../assets/projects/systemic-ai-github.png';
import circleShotImage from '../assets/projects/circle-shot.jpg';

export const profile = {
  name: "Srishti Chauhan",
  title: "Risk Analytics & AI Enthusiast",
  location: "New York, NY",
  email: "sc5824@columbia.edu",
  phone: "+1 (332) 260-1923",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  tagline:
    "Enterprise Risk Management graduate student blending financial risk modeling with AI, machine learning, and full-stack product development.",
  intro:
    "Hey, I'm Srishti — someone who's into risk management but just as obsessed with AI and tech. I come from a tech background and love coding and turning data into decisions. I've studied financial and operational risk, gotten hands-on exposure to third-party risk management, and even ran my own startup, Circle, back in 2023. I'm a curious mind who's always willing to learn something new — exploring emerging technology while keeping up with the financial markets. (Yes, WSJ is basically my morning coffee, haha.)",
};

export const education = [
  {
    slug: "columbia-university",
    school: "Columbia University",
    logo: columbiaLogo,
    isAlmaMater: true,
    location: "New York, United States",
    degree: "Master of Science, Enterprise Risk Management",
    note: "F-1, Three-Year STEM OPT Eligible",
    period: "2025 - 2026",
    summary: "Graduate coursework spanning financial risk, quantitative analytics, and regulatory frameworks.",
    coursework: [
      "Financial Risk Management",
      "Financial Modeling",
      "Capital Markets and Investments",
      "Portfolio Management",
      "Operational Risk",
      "Quantitative Risk Analytics",
      "IT Risk",
      "Regulatory Reporting",
    ],
    certifications: [
      "Bloomberg Market Concepts (BMC)",
      "Financial Markets, Yale University (Coursera)",
      "Statistics for Data Science with Python, IBM",
    ],
  },
  {
    slug: "srm-institute",
    school: "SRM Institute of Science and Technology",
    logo: null,
    isAlmaMater: false,
    location: "Chennai, India",
    degree: "Bachelor of Technology, Computer Science and Information Technology",
    note: "CGPA 3.5 (Dean's List)",
    period: "2020 - 2024",
    summary: "Undergraduate degree focused on machine learning, AI modeling, and statistical methods.",
    coursework: [
      "Machine Learning",
      "AI Modeling",
      "Predictive Modeling",
      "Generative AI",
      "NLP and LLMs",
      "Statistical Modeling",
    ],
    certifications: [],
  },
];

export const experience = [
  {
    company: "ABFinance",
    logo: null,
    location: "New York, USA",
    role: "Platform Risk Intern",
    period: "May 2026 - Jun 2026",
    bullets: [
      "Served as Platform Risk Intern, leading risk strategy and controls design with the team in support of the U.S. market entry and September 2026 launch.",
      "Executed RCSA across core platform functions, identifying operational risk exposures, documenting control gaps, and driving remediation aligned with ERM standards.",
      "Led risk control design and implementation, defining control objectives, testing effectiveness, and ensuring alignment with regulatory and operational risk frameworks.",
      "Conducted TPRM assessments, evaluating vendor SOC 2 compliance, code quality standards, and third-party infrastructure dependencies including bridges and cloud providers.",
      "Assessed and quantified third-party concentration risk, applying TPRM frameworks to map exposure and develop targeted mitigation strategies.",
      "Developed real-time risk dashboards enabling the risk team to track, monitor, and escalate platform risk exposure with structured reporting to senior leadership.",
    ],
  },
  {
    company: "Leadsquared",
    logo: leadsquaredLogo,
    location: "Bangalore, India",
    role: "Business Analyst",
    period: "Jun 2024 - May 2025",
    bullets: [
      "Led 5+ end-to-end enterprise CRM implementations (including Physics Wallah) by developing automated workflow controls that reduced operational risk by 30% and minimized data-entry errors across high-volume accounts.",
      "Mitigated credit and churn risk for distressed accounts through structured resolution frameworks and custom API integrations, restoring client satisfaction and preventing revenue loss.",
      "Built real-time SQL dashboards and CRM reporting tools to improve lead lifecycle visibility, increasing conversion rates by 25% for sales leadership.",
      "Executed 5+ HIPAA-compliant healthcare implementations, ensuring workflows met regulatory and security requirements while onboarding 10+ U.S. enterprise accounts.",
    ],
  },
  {
    company: "Indian Space Research Organisation (ISRO)",
    logo: isroLogo,
    location: "Remote, India",
    role: "Data Analyst Intern",
    period: "Jan 2023 - Sep 2023",
    bullets: [
      "Built a remote-sensing predictive framework using JavaScript and Google Earth Engine (GEE), improving agricultural risk forecasting accuracy by 15% with Sentinel-2 satellite imagery.",
      "Applied supervised ML models to NDVI and multi-year temporal datasets for crop yield forecasting and commodity risk analysis.",
    ],
  },
  {
    company: "Council of Scientific and Industrial Research (CSIR)",
    logo: csirLogo,
    location: "Palampur, India",
    role: "Machine Learning Intern",
    period: "Aug 2022 - Sep 2022",
    bullets: [
      "Designed deep learning models to detect protein-ligand interactions, improving drug discovery prediction accuracy by 30%.",
      "Applied ML algorithms to high-dimensional biological datasets, streamlining research workflows and accelerating analysis pipelines.",
    ],
  },
];

export const projects = [
  {
    slug: "systemic-ai-exposure-risk",
    title: "Systemic AI Exposure Risk in Diversified Equity Portfolios",
    period: "2025 - 2026",
    tech: ["Python", "Pandas", "Scikit-learn", "SQL", "Tableau"],
    link: "https://github.com/SrishtiCodeGit/AI-as-a-Systemic-Factor-in-Portfolio-Risk",
    linkLabel: "GitHub",
    domain: "github.com · Systemic AI Risk",
    image: githubProjectImage,
    graphic: "network",
    tagline: "Mapping hidden AI concentration risk across the S&P 500.",
    bullets: [
      "Analyzed real-time S&P 500 data across sectors to identify hidden AI-driven concentration and cross-sector dependency risks in equity portfolios.",
      "Conducted correlation analysis and built Python visualizations to measure systemic exposure to shared AI infrastructure providers.",
      "Modeled AI shock and crisis scenarios, estimating portfolio downside exposure of up to 69% despite sector diversification.",
    ],
    longDescription: [
      "Most portfolio diversification models assume sector spread is enough to limit downside risk — this project asked what happens when the AI infrastructure underneath every sector is the same handful of providers.",
      "Using real-time S&P 500 constituent data, I mapped which companies share AI infrastructure dependencies (cloud compute, foundation models, chip supply) and ran correlation analysis to surface concentration that standard sector-diversification metrics miss entirely.",
      "The scenario models estimate that a shock to shared AI infrastructure providers could produce downside exposure of up to 69%, even in portfolios that look well-diversified on paper — a finding aimed at risk teams evaluating systemic, cross-sector dependencies rather than just single-stock risk.",
    ],
  },
  {
    slug: "el-nino-financial-risk-dashboard",
    title: "El Niño Financial Risk Dashboard",
    period: "2025 - 2026",
    tech: ["Python", "NumPy", "Matplotlib", "Streamlit", "JavaScript", "Node.js", "NOAA/ERA5 Data"],
    link: "https://elnino-financial-dashboardgit-bunlcerb4vkrcyhaqfmbaf.streamlit.app",
    linkLabel: "Streamlit App",
    domain: "streamlit.app · El Niño Dashboard",
    graphic: "climate",
    tagline: "Turning climate cycles into quantified financial exposure.",
    bullets: [
      "Built an interactive Streamlit dashboard to model and visualize financial risk implications of El Niño climate cycles using NOAA and ERA5 geospatial datasets.",
      "Applied ML models and statistical risk frameworks to forecast climate-driven economic impacts, enabling scenario-based risk analysis across commodity and agricultural sectors with quantified financial exposure estimates.",
    ],
    longDescription: [
      "Climate cycles like El Niño move real money — agricultural yields, commodity prices, insurance exposure — but that risk rarely shows up in a format finance teams can act on. This dashboard closes that gap.",
      "It pulls live ENSO (El Niño-Southern Oscillation) status alongside NOAA Climate Prediction Center and ERA5 geospatial data, then runs statistical and ML models to translate climate signals into scenario-based financial exposure across commodities, agriculture, and insurance/banking.",
      "The live app tracks current ENSO status in real time and lets you drill into financial markets, commodities, and cryptocurrency views to see how a given climate regime propagates through each sector.",
    ],
  },
  {
    slug: "circle",
    title: "Circle — B2C Platform for Independent Music & Artist Collaboration",
    period: "2023 - 2024",
    tech: ["React", "HTML", "CSS", "JavaScript", "Figma"],
    link: "https://the-circle-liard.vercel.app",
    linkLabel: "Live App",
    domain: "vercel.app · Circle",
    image: circleShotImage,
    graphic: "social",
    isCircle: true,
    tagline: "Where independent artists find their people.",
    bullets: [
      "Founded and built Circle end-to-end: designed in Figma, developed core features in React, HTML, CSS, and JavaScript.",
      "Created creator-economy monetization models, demonstrating full-stack product development and entrepreneurial execution.",
    ],
    longDescription: [
      "Circle is a platform I founded to connect independent musicians worldwide — for discovery, collaboration, gigs, and sustainable income, without the traditional label gatekeepers.",
      "I designed the full product in Figma and built it end-to-end in React, covering artist discovery, gig listings, and collaboration tools, alongside creator-economy monetization models so artists could actually get paid for the connections the platform enabled.",
      "It's live today, connecting thousands of independent artists across dozens of countries for paid collaborations and gigs.",
    ],
  },
  {
    slug: "ctc-nlp-speech-models",
    title: "CTC-Based NLP Speech Models",
    period: "2023 - 2024",
    tech: ["NLP", "Deep Learning", "CTC Models"],
    link: "#",
    linkLabel: "SAMSUNG",
    graphic: "speech",
    tagline: "Boosting transcription accuracy for unstructured speech.",
    bullets: [
      "Developed and optimized CTC-based NLP speech models that improved transcription accuracy by 25% for large-scale unstructured text.",
      "Applications in financial transcript analysis and sentiment analytics.",
    ],
    longDescription: [
      "Built during a research collaboration with Samsung, this project focused on Connectionist Temporal Classification (CTC) based speech models for transcribing large volumes of unstructured audio.",
      "Model tuning and architecture optimization improved transcription accuracy by 25% over the baseline, with a specific eye toward downstream use cases like financial transcript analysis and sentiment analytics — where transcription errors directly distort the signal analysts depend on.",
    ],
  },
];

export const leadership = [
  "Top 5 Finalist, PRMIA Risk Essay Competition",
  "Treasurer, Columbia Investment and Finance Society (CIFS) — Oversee budgeting and financial planning for club operations and events.",
  "Portfolio Project, CIFS — Student-managed equity portfolio covering stock screening, investment thesis development, and index benchmarking.",
  "External Relations Manager, Columbia Risk Management Club — Lead industry outreach and engagement with risk and finance professionals.",
  "President, Association for Computing Machinery (ACM) — Increased member engagement by 25% through structured initiatives and programming.",
];

export const skills = [
  {
    category: "Programming & Data",
    items: ["Python", "SQL", "JavaScript", "Java", "R", "VBA", "HTML/CSS", "React", "Tableau", "Data Visualization"],
  },
  {
    category: "AI & Analytics",
    items: [
      "Machine Learning", "Deep Learning", "NLP", "Generative AI", "LLMs", "PyTorch", "TensorFlow",
      "LangChain", "RAG Pipelines", "HuggingFace", "Fine-tuning LLMs", "Prompt Engineering",
      "Predictive Modeling", "Statistical Analysis", "Big Data Analytics", "Compliance Monitoring",
    ],
  },
  {
    category: "Risk & Frameworks",
    items: [
      "Financial Modeling", "IT Risk", "RCSA", "TPRM", "Control Design and Testing", "Risk Registers",
      "SOC 2", "Business Continuity Planning", "Stress Testing", "Regulatory Reporting",
      "NIST CSF", "NIST SP 800-53", "COBIT", "COSO", "GDPR",
    ],
  },
];
