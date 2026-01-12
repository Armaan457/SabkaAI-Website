"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Heart,
  Sprout,
  GraduationCap,
  CreditCard,
  Building2,
  Lightbulb,
  ChevronRight,
  TrendingUp,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Item = {
  id: string
  title: string
  desc: string
  detailedDesc: string
  icon: React.ReactNode
  tags: string[]
  examples: string[]
  impact: string
  teamSize: string
  features: string[]
}

const ITEMS: Item[] = [
  {
    id: "financial-literacy",
    title: "AI for Financial Literacy to Rural People",
    desc: "Enhance socio-economic development for rural India through AI-powered financial education solutions.",
    detailedDesc: "Create innovative AI solutions to bridge the financial literacy gap in rural India. Focus on developing conversational AI systems that can educate and guide rural populations about financial services in their local languages.",
    icon: <CreditCard className="h-6 w-6" />,
    tags: ["NLP", "Local Languages", "Chatbots", "Financial Education"],
    examples: [
      "Multilingual financial literacy chatbots",
      "Voice-based financial advisory systems",
      "Interactive financial education modules",
      "Personalized financial planning assistants"
    ],
    features: [
      "Support for multiple Indian languages",
      "Voice and text-based interactions",
      "Offline content accessibility",
      "Cultural context awareness"
    ],
    impact: "Empower millions of rural Indians with financial knowledge",
    teamSize: "3-4 members"
  },
  {
    id: "accessibility",
    title: "Multilingual and Multimodal Accessibility Tools",
    desc: "Develop tools to bridge language and sensory gaps, making technology accessible to people with diverse abilities.",
    detailedDesc: "Create innovative accessibility solutions that break down barriers in communication and technology use. Focus on real-time translation and conversion tools that enable inclusive access to digital content.",
    icon: <GraduationCap className="h-6 w-6" />,
    tags: ["Accessibility", "Sign Language", "Braille", "Real-time Translation"],
    examples: [
      "Real-time sign language translation",
      "Braille conversion systems",
      "Multi-modal content adapters",
      "Assistive reading technologies"
    ],
    features: [
      "Real-time processing capabilities",
      "Multi-device compatibility",
      "Customizable output formats",
      "Low-latency performance"
    ],
    impact: "Enable technology access for millions with diverse abilities",
    teamSize: "4-5 members"
  },
  {
    id: "ai-tutors",
    title: "AI Tutors for Schools",
    desc: "Create intelligent tutoring systems to support education in schools with limited teaching resources.",
    detailedDesc: "Develop AI-powered tutoring systems that can provide personalized learning support to students in resource-constrained schools, helping bridge the education gap through technology.",
    icon: <GraduationCap className="h-6 w-6" />,
    tags: ["EdTech", "Personalized Learning", "Conversational AI", "Education Analytics"],
    examples: [
      "Personalized homework assistance",
      "Adaptive lesson planning",
      "Interactive doubt resolution",
      "Progress tracking systems"
    ],
    features: [
      "Personalized learning paths",
      "Multi-subject support",
      "Performance analytics",
      "Offline learning capabilities"
    ],
    impact: "Support millions of students in underserved schools",
    teamSize: "3-5 members"
  },
  {
    id: "recruitment",
    title: "Bias-Free AI for Recruitment",
    desc: "Develop AI solutions to ensure fair and equitable hiring processes for all candidates.",
    detailedDesc: "Create AI systems that can eliminate unconscious bias from recruitment processes, ensuring equal opportunities for all candidates regardless of their background, gender, or other demographic factors.",
    icon: <Building2 className="h-6 w-6" />,
    tags: ["HR Tech", "Bias Detection", "Fair AI", "Recruitment"],
    examples: [
      "Bias-free resume screening",
      "Objective skill assessment tools",
      "Fair interview analysis systems",
      "Inclusive job description generators"
    ],
    features: [
      "Bias detection algorithms",
      "Transparent decision making",
      "Diversity metrics tracking",
      "Compliance reporting"
    ],
    impact: "Create equal opportunities in employment for all",
    teamSize: "4-5 members"
  },
  {
    id: "energy",
    title: "AI for Energy Saving",
    desc: "Design AI solutions to analyze and optimize building energy consumption patterns.",
    detailedDesc: "Develop intelligent systems that can analyze data from smart meters and provide actionable recommendations for reducing energy consumption in buildings, promoting sustainability and cost savings.",
    icon: <Lightbulb className="h-6 w-6" />,
    tags: ["Energy Analytics", "IoT", "Smart Buildings", "Sustainability"],
    examples: [
      "Smart meter data analysis",
      "Energy consumption forecasting",
      "Automated efficiency recommendations",
      "Real-time usage monitoring"
    ],
    features: [
      "Real-time monitoring",
      "Predictive analytics",
      "Personalized recommendations",
      "Cost-saving calculations"
    ],
    impact: "Reduce energy consumption and promote sustainability",
    teamSize: "3-4 members"
  },
  {
    id: "open",
    title: "Open Challenge: AI for Inclusion",
    desc: "Propose innovative AI solutions to promote inclusion and accessibility in any domain.",
    detailedDesc: "Create novel AI applications that address inclusion challenges in society. This track welcomes creative solutions that can make technology, services, or opportunities more accessible to underserved populations.",
    icon: <Heart className="h-6 w-6" />,
    tags: ["Innovation", "Social Impact", "Inclusion", "Accessibility"],
    examples: [
      "Inclusive technology solutions",
      "Accessibility enhancement tools",
      "Social integration platforms",
      "Adaptive assistance systems"
    ],
    features: [
      "User-centric design",
      "Inclusive architecture",
      "Scalable implementation",
      "Impact measurement"
    ],
    impact: "Create a more inclusive and accessible society",
    teamSize: "2-5 members"
  },
]

export function ProblemStatements() {
  const [open, setOpen] = React.useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className="flex justify-center mb-2">
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-[#d7f5fb] to-[#bfe9f7] rounded-full">
            <p className="text-sm font-semibold text-[var(--brand-deep)]">Problem Statements</p>
          </div>
        </motion.div>
        <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#146b82] to-[#1b9ac5]">
          Choose Your Challenge
        </h3>
        <p className="text-gray-600 text-lg">
          Select a problem statement that aligns with your passion and expertise. Each track offers unique challenges and opportunities to create meaningful impact.
        </p>
      </motion.div>

      {/* Problem Statements Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {ITEMS.map((item, index) => (
          <React.Fragment key={item.id}>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card 
                  className="group relative p-6 transition-all duration-300 hover:shadow-2xl cursor-pointer border-2 border-[rgba(32,184,205,0.35)] bg-gradient-to-br from-white to-[rgba(32,184,205,0.05)] hover:border-[var(--brand-primary)] h-full"
                  onClick={() => setOpen(item.id)}
                >
                  {/* Glow background */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-br from-[#1ea7c5] to-[#4cc2e0] rounded-lg opacity-0 blur-xl"
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-[rgba(32,184,205,0.15)] to-[rgba(88,192,224,0.15)] rounded-lg text-[#0f8db3] shadow-md"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="h-5 w-5 text-[#0f8db3]" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-lg font-bold leading-tight text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{item.desc}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 + 0.1 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs bg-white/70 backdrop-blur-sm border-[rgba(32,184,205,0.35)] text-[var(--brand-deep)] font-medium hover:bg-[rgba(32,184,205,0.12)] transition-all"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                      {item.tags.length > 3 && (
                        <Badge 
                          variant="outline" 
                          className="text-xs bg-white/70 backdrop-blur-sm border-[rgba(32,184,205,0.35)] text-[var(--brand-deep)] font-medium"
                        >
                          +{item.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {open === item.id && (
                <Dialog open={open === item.id} onOpenChange={(isOpen) => !isOpen && setOpen(null)}>
                  <DialogContent className="max-h-[80vh] overflow-y-auto backdrop-blur-md bg-gradient-to-br from-white/95 to-[rgba(32,184,205,0.05)] shadow-xl border-[rgba(32,184,205,0.35)]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DialogHeader>
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div 
                            className="p-3 bg-gradient-to-br from-[rgba(32,184,205,0.15)] to-[rgba(88,192,224,0.15)] rounded-lg text-[#0f8db3] shadow-md"
                            whileHover={{ scale: 1.1 }}
                          >
                            {item.icon}
                          </motion.div>
                          <DialogTitle className="text-2xl font-bold text-gray-900">{item.title}</DialogTitle>
                        </div>
                        <DialogDescription className="text-gray-700 text-base leading-relaxed">{item.detailedDesc}</DialogDescription>
                      </DialogHeader>

                      <div className="space-y-6 mt-6">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h4 className="font-bold text-base mb-3 text-gray-900">Key Features:</h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            {item.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-3 p-2 rounded hover:bg-[rgba(32,184,205,0.08)] transition-colors"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15 + idx * 0.05 }}
                              >
                                <span className="text-[#0f8db3] font-bold mt-0.5">•</span>
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="font-bold text-base mb-3 text-gray-900">Example Solutions:</h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            {item.examples.map((example, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-3 p-2 rounded hover:bg-[rgba(32,184,205,0.08)] transition-colors"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25 + idx * 0.05 }}
                              >
                                <span className="text-[#0f8db3] font-bold mt-0.5">✓</span>
                                <span>{example}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          className="flex items-center gap-3 p-4 bg-gradient-to-r from-[rgba(32,184,205,0.12)] to-[rgba(88,192,224,0.12)] rounded-lg border border-[rgba(32,184,205,0.35)] shadow-sm"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <TrendingUp className="h-5 w-5 text-[#0f8db3] flex-shrink-0" />
                          <span className="text-sm font-semibold text-[var(--brand-deep)]">Impact: <span className="font-bold">{item.impact}</span></span>
                        </motion.div>

                        <motion.div
                          className="flex flex-wrap gap-2 pt-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.35 }}
                        >
                          {item.tags.map((tag, idx) => (
                            <motion.div
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + idx * 0.05 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="text-xs border-[rgba(32,184,205,0.4)] bg-[rgba(32,184,205,0.08)] text-[var(--brand-deep)] font-medium hover:bg-[rgba(32,184,205,0.18)] transition-all"
                              >
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  </DialogContent>
                </Dialog>
              )}
            </AnimatePresence>
          </React.Fragment>
        ))}
      </motion.div>      
    </div>
  )
}