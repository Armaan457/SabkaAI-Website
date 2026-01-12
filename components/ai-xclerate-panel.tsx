"use client";

import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

interface PanelSpeaker {
  id: string;
  name: string;
  institution: string;
  image: string;
  linkedin?: string;
}

interface Panel {
  id: string;
  title: string;
  topic: string;
  date: string;
  time: string;
  venue: string;
  speakers: PanelSpeaker[];
}

const aiScleratePanels: Panel[] = [
  {
    id: "panel1",
    title: "Panel 1",
    topic: "Govt Policies around AI and AI in current scenario",
    date: "17 January 2026",
    time: "11:30 AM - 12:10 PM",
    venue: "CSED Ground Floor",
    speakers: [
      {
        id: "ps1",
        name: "Dr Chandrasekhar Buddha",
        institution: "CEO of Anuvadini AI , Ministry of Education and COO at AICTE, Ministry of Education.",
        image: "/speaker4.png",
        linkedin: "https://www.linkedin.com/in/chandrasekharbudha/"
      },
      {
        id: "ps2",
        name: "Prerna Mukharya",
        institution: "Founder of Outline India. Research background from Harvard, MIT, and the Centre for Policy Research.",
        image: "/speaker5.png",
        linkedin: "https://www.linkedin.com/in/prernamukharya/"
      },
      {
        id: "ps3",
        name: "Rahul Bhargava",
        institution: "Founder and Managing Director of R Dot Ventures, Shekunj.com, and OctaHire.com. 8 times TEDX speaker.",
        image: "/speaker1.png",
        linkedin: "https://www.linkedin.com/in/rahuldotbhargava/"
      }
    ]
  },
  {
    id: "panel2",
    title: "Panel 2",
    topic: "Future Placement and How to be relevant with AI for today's Youth ",
    date: "17 January 2026",
    time: "12:20 PM - 1:00 PM",
    venue: "CSED Ground Floor",
    speakers: [
      {
        id: "ps4",
        name: "Richa Marwah",
        institution: "Co-Founder of Bharat Digital, team lead at Ministry of Rural Development, Govt. of India. driving Digital Transformation",
        image: "/speaker6.png",
        linkedin: "https://www.linkedin.com/in/richa-marwah-30a874157/"
      },
      {
        id: "ps5",
        name: "Vinamra Harkar",
        institution: "Researcher at NUS GeoSpatialX Lab. Graduate from NSUT with expertise in GeoAI and Computer Vision.",
        image: "/speaker7.png",
        linkedin: "https://www.linkedin.com/in/vinamraharkar/"
      },
      {
        id: "ps6",
        name: "Saket Kumar",
        institution: "Security Software Engineer at Microsoft with 15+ years of experience, working on Agentic AI and Generative AI",
        image: "/speaker2.png",
        linkedin: "https://www.linkedin.com/in/saketkumar05/"
      }
    ]
  }
];

// Animation variants
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
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants = {
  initial: { y: 0 },
  hover: {
    y: -12,
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: {
      duration: 0.4,
    },
  },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.95 },
  hover: {
    opacity: 0.35,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

function PanelSpeakerCard({ speaker }: { speaker: PanelSpeaker }) {
  return (
    <motion.div
      variants={itemVariants}
      className="h-full"
      whileHover="hover"
      initial="initial"
    >
      <motion.div className="relative h-full group" variants={cardVariants}>
        {/* Glow background */}
        <motion.div
          className="absolute -inset-1 rounded-xl opacity-0 blur-xl bg-gradient-to-br from-teal-300 via-teal-200 to-teal-400"
          variants={glowVariants}
        />

        {/* Card */}
        <Card className="relative h-full p-5 text-center backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white/90 to-teal-50/80 border-teal-200/60">
          {/* Image container */}
          <motion.div className="mb-0 flex justify-center" variants={imageVariants}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-full blur-sm opacity-60 bg-gradient-to-r from-teal-300 to-teal-200" />
              <img
                src={speaker.image}
                alt={speaker.name}
                className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    speaker.name
                  )}&background=8b5cf6&color=ffffff&size=112`;
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-2 flex flex-col flex-grow">
            <motion.h4
              className="font-bold text-lg leading-tight text-gray-900 whitespace-normal break-words"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, color: '#0d9488' }}
            >
              {speaker.name}
            </motion.h4>


            <p className="text-sm text-gray-600 whitespace-normal break-words leading-relaxed mt-1 flex-grow">
              {speaker.institution}
            </p>

            {speaker.linkedin && (
              <motion.div
                className="pt-2 flex justify-center mt-auto"
                initial={{ opacity: 0.7, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 justify-center rounded-lg px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 shadow"
                  aria-label={`Open ${speaker.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4 text-white" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function AiScleratePanel() {
  return (
    <div className="space-y-12 py-4">
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center space-y-2" variants={itemVariants}>
          <motion.div className="flex justify-center mb-1">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full border border-teal-100/60">
              <p className="text-sm font-semibold text-teal-700">Panel Discussion</p>
            </div>
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">
            AI-xclerate: Expert Panel Discussion
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Join industry experts as they discuss cutting-edge AI topics and insights in transformative sessions.
          </p>
        </motion.div>

        {/* Panels Container */}
        <div className="space-y-12">
          {aiScleratePanels.map((panel) => (
            <motion.div
              key={panel.id}
              className="space-y-4"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
                {/* Panel Meta */}
                <div className="rounded-xl p-6 bg-white/92 border border-teal-100 shadow-md backdrop-blur-sm space-y-4 h-full">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">{panel.title}</p>
                    <h4 className="text-3xl font-bold text-gray-900 leading-snug">{panel.topic}</h4>
                  </div>
                  <div className="space-y-3 text-sm font-medium text-teal-800">
                    <div className="inline-flex items-center gap-2 w-full rounded-lg bg-teal-50 border border-teal-100 px-3 py-2">
                      <span>📅</span>
                      <span>{panel.date}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 w-full rounded-lg bg-teal-50 border border-teal-100 px-3 py-2">
                      <span>⏰</span>
                      <span>{panel.time}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 w-full rounded-lg bg-teal-50 border border-teal-100 px-3 py-2">
                      <span>📍</span>
                      <span>{panel.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Panel Speakers */}
                <motion.div
                  className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                  variants={containerVariants}
                >
                  {panel.speakers.map((speaker) => (
                    <PanelSpeakerCard key={speaker.id} speaker={speaker} />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
