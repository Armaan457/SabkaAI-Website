// Configuration for IndiaAI Impact Hackathon

export const HACKATHON_CONFIG = {
  // Registration
  GOOGLE_FORM_URL: "https://innovation-challenge-2026.devpost.com/",
  
  // Event Details
  EVENT_NAME: "IndiaAI Impact Hackathon",
  EVENT_TAGLINE: "Empowering Innovation through AI for Social Good and National Development",
  
  // Dates (Update these when finalized)
  REGISTRATION_OPENS: "TBD",
  REGISTRATION_CLOSES: "TBD", 
  HACKATHON_START: "TBD",
  HACKATHON_END: "TBD",
  
  // Prizes
  TOTAL_PRIZE_POOL: "₹10,00,000+",
  FIRST_PRIZE: "₹5,00,000",
  SECOND_PRIZE: "₹3,00,000", 
  THIRD_PRIZE: "₹2,00,000",
  
  // Contact
  CONTACT_EMAIL: "contact@indiaai-impact.com", // Update with actual email
  
  // Social Media (Add when available)
  SOCIAL_LINKS: {
    twitter: "",
    linkedin: "",
    instagram: "",
    website: ""
  }
};

export const PROBLEM_TRACKS = [
  {
    id: "healthcare",
    title: "AI for Healthcare & Wellness",
    description: "Develop AI solutions for early disease detection, telemedicine, mental health support, or healthcare accessibility in rural areas.",
    tags: ["Computer Vision", "NLP", "Predictive Analytics"]
  },
  {
    id: "agriculture", 
    title: "Smart Agriculture & Food Security",
    description: "Create AI-powered solutions for crop monitoring, yield prediction, pest detection, or sustainable farming practices.",
    tags: ["IoT", "Satellite Imagery", "ML"]
  },
  {
    id: "education",
    title: "Education & Skill Development", 
    description: "Build personalized learning platforms, skill assessment tools, or AI tutors for quality education access across India.",
    tags: ["EdTech", "LLMs", "Adaptive Learning"]
  },
  {
    id: "fintech",
    title: "Financial Inclusion & Fintech",
    description: "Develop AI solutions for credit scoring, fraud detection, financial literacy, or inclusive banking services.",
    tags: ["Risk Assessment", "NLP", "Blockchain"]
  },
  {
    id: "governance",
    title: "Governance & Public Services",
    description: "Create AI tools for citizen services, policy analysis, transparency, or efficient government service delivery.",
    tags: ["Data Analytics", "Automation", "Transparency"]
  },
  {
    id: "open",
    title: "Open Innovation Track",
    description: "Propose any AI solution addressing critical challenges in Indian society, economy, or governance.",
    tags: ["Innovation", "Social Impact", "Open"]
  }
];
