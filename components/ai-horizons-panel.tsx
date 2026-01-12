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

const aiHorizonsPanels: Panel[] = [
  {
    id: "workshop1",
    title: "Workshop 1",
    topic: "Digital Transformation & AI in Industry",
    date: "16 January 2026",
    time: "3:00 PM - 5:00 PM",
    venue: "C Hall",
    speakers: [
      {
        id: "wh1-vinamra",
        name: "Vinamra Harkar",
        institution:
          "Researcher at NUS GeoSpatialX Lab. Graduate from NSUT with expertise in GeoAI and Computer Vision.",
        image: "/speaker7.png",
        linkedin: "https://www.linkedin.com/in/vinamraharkar/",
      },
      {
        id: "wh1-richa",
        name: "Richa Marwah",
        institution:
          "Co-Founder of Bharat Digital, team lead at Ministry of Rural Development, Govt. of India.",
        image: "/speaker6.png",
        linkedin: "https://www.linkedin.com/in/richa-marwah-30a874157/",
      },
    ],
  },
  {
    id: "workshop2",
    title: "Workshop 2",
    topic: "Global AI Ethics",
    date: "16 January 2026",
    time: "5:00 PM - 7:00 PM",
    venue: "C Hall",
    speakers: [
      {
        id: "wh2-rahul",
        name: "Rahul Bhargava",
        institution:
          "Founder and Managing Director of R Dot Ventures, Shekunj.com, and OctaHire.com.",
        image: "/speaker1.png",
        linkedin: "https://www.linkedin.com/in/rahuldotbhargava/",
      },
    ],
  },
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
    <motion.div variants={itemVariants} className="h-full" whileHover="hover" initial="initial">
      <motion.div className="relative h-full group" variants={cardVariants}>
        {/* Glow background */}
        <motion.div
          className="absolute -inset-1 rounded-xl opacity-0 blur-xl bg-gradient-to-br from-indigo-300 via-violet-200 to-violet-400"
          variants={glowVariants}
        />

        {/* Card */}
        <Card className="relative h-full p-5 text-center backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white/90 to-violet-50/80 border-violet-200/60">
          {/* Image container */}
          <motion.div className="mb-0 flex justify-center" variants={imageVariants}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-full blur-sm opacity-60 bg-gradient-to-r from-indigo-300 to-violet-200" />
              <img
                src={speaker.image}
                alt={speaker.name}
                className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    speaker.name
                  )}&background=6366f1&color=ffffff&size=112`;
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-2 flex flex-col flex-grow">
            <motion.h4
              className="font-bold text-lg leading-tight text-gray-900 whitespace-normal break-words"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, color: "#4f46e5" }}
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

function EmptySpeakerCard() {
  return (
    <Card className="relative h-full p-6 text-center backdrop-blur-sm shadow-md bg-gradient-to-br from-white/90 to-violet-50/80 border-violet-200/60">
      <p className="text-sm text-gray-700">Speakers to be announced.</p>
    </Card>
  );
}

export function AiHorizonsPanel() {
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
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-full border border-violet-100/60">
              <p className="text-sm font-semibold text-indigo-700">Workshops</p>
            </div>
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">
            AI Horizons: Innovation & Integrity
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Hands-on sessions exploring responsible, trustworthy, and innovative AI practices.
          </p>
        </motion.div>

        {/* Panels Container */}
        <div className="space-y-12">
          {aiHorizonsPanels.map((panel) => (
            <motion.div key={panel.id} className="space-y-4" variants={itemVariants}>
              {/* Panel Header */}
              <div className="rounded-xl p-6 bg-white/92 border border-violet-100 shadow-md backdrop-blur-sm">
                <h4 className="text-2xl font-bold mb-3 text-gray-900">{panel.topic}</h4>
                <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-indigo-800">
                  <span className="inline-flex items-center gap-2 bg-indigo-50 border border-violet-100 px-3 py-1 rounded-full">📅 {panel.date}</span>
                  <span className="inline-flex items-center gap-2 bg-indigo-50 border border-violet-100 px-3 py-1 rounded-full">⏰ {panel.time}</span>
                  <span className="inline-flex items-center gap-2 bg-indigo-50 border border-violet-100 px-3 py-1 rounded-full">📍 {panel.venue}</span>
                </div>
              </div>

              {/* Panel Speakers */}
              <motion.div className="flex flex-wrap justify-center gap-5 sm:gap-6" variants={containerVariants}>
                {panel.speakers.length === 0 ? (
                  <div className="w-full md:w-1/2 lg:w-1/3">
                    <EmptySpeakerCard />
                  </div>
                ) : (
                  panel.speakers.map((speaker) => (
                    <div
                      key={speaker.id}
                      className="w-[calc(50%-0.625rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(20%-1.2rem)]"
                    >
                      <PanelSpeakerCard speaker={speaker} />
                    </div>
                  ))
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
