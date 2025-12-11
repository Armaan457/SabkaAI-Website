"use client";

import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

interface Organizer {
  id: string;
  name: string;
  role: string;
  image: string;
  institution: string;
  linkedin?: string;
}

const organizers: Organizer[] = [
  {
    id: "1",
    name: "Dr. Inderveer Chana",
    role: "Center Director",
    image: "/dr_channaM.png",
    institution: "Professor, TIET",
    linkedin: ""
  },
  {
    id: "2",
    name: "Dr. Tim Miller",
    role: "Center Director",
    image: "/tim.png",
    institution: "Professor, University of Queensland",
    linkedin: ""
  },
  {
    id: "3",
    name: "Dr. Maninder Singh",
    role: "",
    image: "/manminder (2).jpg",
    institution: "Chief Technological Officer, TIET",
    linkedin: ""
  },
  {
    id: "4",
    name: "Dr. Anju Bala",
    role: "Education and Training Coordinator",
    image: "/anju_bala_mam.png",
    institution: "Professor and Associate Head, TIET",
    linkedin: ""
  },
  {
    id: "5",
    name: "Dr. Sachin Kansal",
    role: "Research and Innovation Coordinator",
    image: "/sachin_sir.jpg",
    institution: "Assistant Professor, TIET",
    linkedin: ""
  },
  {
    id: "6",
    name: "Dr. Harpreet Singh",
    role: "",
    image: "/harpreet_sir.jpeg",
    institution: "Assistant Professor, TIET",
    linkedin: ""
  },
  {
    id: "7",
    name: "Dr. Amrita Kaur",
    role: "",
    image: "/harpreet_mam.jpg",
    institution: "Assistant Professor, TIET",
    linkedin: ""
  },
  {
    id: "8",
    name: "Dr. Maggi Bansal",
    role: "",
    image: "/maggi.jpeg",
    institution: "Assistant Professor, TIET",
    linkedin: ""
  },
];

const judges: Organizer[] = [
  {
    id: "j1",
    name: "Rahul Bhargava",
    role: "",
    image: "/speaker1.png",
    institution: "Founder and Managing Director of R Dot Ventures, Shekunj.com, and OctaHire.com.",
    linkedin: "https://www.linkedin.com/in/rahuldotbhargava/"
  },
  {
    id: "j2",
    name: "Saket Kumar",
    role: "",
    image: "/speaker2.png",
    institution: "Security Software Engineer at Microsoft, working on Agentic AI, Generative AI, and Cloud Security",
    linkedin: "https://www.linkedin.com/in/saketkumar05/"
  },
];

const studentCoordinators: Organizer[] = [
  {
    id: "sc1",
    name: "Armaan Jagirdar",
    role: "Overall Event Coordinator",
    image: "/armaan.png",
    institution: "Thapar Institute of Engineering & Technology",
    linkedin: "https://www.linkedin.com/in/armaan-jagirdar-183b47285/"
  },
  {
    id: "sc2",
    name: "Harsimran Singh",
    role: "Overall Event Coordinator",
    image: "/harsimran.png",
    institution: "Thapar Institute of Engineering & Technology",
    linkedin: ""
  },
  {
    id: "sc3",
    name: "Lakshya Manchanda",
    role: "Overall Event Coordinator",
    image: "/placeholder-avatar.jpg",
    institution: "Thapar Institute of Engineering & Technology",
    linkedin: ""
  },
  {
    id: "sc4",
    name: "Nakul Sharma",
    role: "Overall Event Coordinator",
    image: "/placeholder-avatar.jpg",
    institution: "Thapar Institute of Engineering & Technology",
    linkedin: ""
  },
  {
    id: "sc5",
    name: "Nityam",
    role: "Overall Event Coordinator",
    image: "/placeholder-avatar.jpg",
    institution: "Thapar Institute of Engineering & Technology",
    linkedin: ""
  },
  {
    id: "sc6",
    name: "Tamanna Bhardwaj",
    role: "Overall Event Coordinator",
    image: "/placeholder-avatar.jpg",
    institution: "Thapar Institute of Engineering & Technology",
    linkedin: ""
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

function PersonCard({ person, isSpeaker = false }: { person: Organizer; isSpeaker?: boolean }) {
  const isStudentCoordinator = person.id.startsWith('sc');
  const showLinkedIn = person.linkedin;

  // Color logic
  let glowBg, cardBg, imageBg, nameHover, roleText;
  if (isSpeaker) {
    glowBg = 'bg-gradient-to-br from-teal-400 via-teal-300 to-teal-500';
    cardBg = 'bg-gradient-to-br from-white/80 to-teal-50/80 border-teal-200/60';
    imageBg = 'bg-gradient-to-r from-teal-300 to-teal-200';
    nameHover = '#0d9488';
    roleText = 'text-teal-600';
  } else if (isStudentCoordinator) {
    glowBg = 'bg-gradient-to-br from-green-400 via-emerald-400 to-green-500';
    cardBg = 'bg-gradient-to-br from-white/80 to-green-50/80 border-green-200/60';
    imageBg = 'bg-gradient-to-r from-green-300 to-emerald-300';
    nameHover = '#059669';
    roleText = 'text-green-600';
  } else {
    glowBg = 'bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500';
    cardBg = 'bg-gradient-to-br from-white/80 to-blue-50/80 border-blue-200/60';
    imageBg = 'bg-gradient-to-r from-blue-300 to-cyan-300';
    nameHover = '#0084ff';
    roleText = 'text-blue-600';
  }

  const linkedinBg = 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600';

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
          className={`absolute -inset-1 rounded-xl opacity-0 blur-xl ${glowBg}`}
          variants={glowVariants}
        />

        {/* Card */}
        <Card className={`relative h-full p-5 text-center backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 ${cardBg}`}>
          {/* Image container */}
          <motion.div className="mb-3 flex justify-center" variants={imageVariants}>
            <div className="relative">
              <div className={`absolute -inset-1 rounded-full blur-sm opacity-60 ${imageBg}`} />
              <img
                src={person.image}
                alt={person.name}
                className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    person.name
                  )}&background=${isStudentCoordinator ? '10b981' : isSpeaker ? '14b8a6' : '3b82f6'}&color=ffffff&size=112`;
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-2 flex flex-col flex-grow">
            <motion.h4
              className="font-bold text-lg leading-tight text-gray-900 whitespace-normal break-words"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, color: nameHover }}
            >
              {person.name}
            </motion.h4>

            {person.role && (
              <motion.p
                className={`text-sm font-semibold whitespace-normal break-words leading-snug ${roleText}`}
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {person.role}
              </motion.p>
            )}

            <p className="text-sm text-gray-600 flex-grow whitespace-normal break-words leading-relaxed mt-1">
              {person.institution}
            </p>

            {/* LinkedIn Button for organizers and speakers */}
            {showLinkedIn && (
              <motion.div
                className="pt-2 flex justify-center mt-auto"
                initial={{ opacity: 0.7, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 justify-center rounded-lg px-3 py-2 hover:shadow-lg transition-all duration-300 text-white ${linkedinBg}`}
                  aria-label={`Open ${person.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4 text-white" />
                  <span className="text-xs font-medium text-white">LinkedIn</span>
                </a>
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function Organizers() {
  return (
    <div className="space-y-12 py-4">
      {/* Organizers Section */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center space-y-2" variants={itemVariants}>
          <motion.div className="flex justify-center mb-1">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full">
              <p className="text-sm font-semibold text-blue-600">Leadership Team</p>
            </div>
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            Meet Our Organizers
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Our dedicated team of faculty and staff from both institutions working
            together to make this event a success.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6"
          variants={containerVariants}
        >
          {organizers.map((organizer) => (
            <PersonCard key={organizer.id} person={organizer} isSpeaker={false} />
          ))}
        </motion.div>
      </motion.div>

      {/* Judges Section */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center space-y-2" variants={itemVariants}>
          <motion.div className="flex justify-center mb-1">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full">
              <p className="text-sm font-semibold text-teal-700">Event Judges</p>
            </div>
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">
            Meet Our Judges
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Experienced professionals and industry experts who will evaluate and judge the projects at the hackathon.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6"
          variants={containerVariants}
        >
          {judges.map((judge) => (
            <PersonCard key={judge.id} person={judge} isSpeaker={true} />
          ))}
        </motion.div>
      </motion.div>

      {/* Student Coordinators Section
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center space-y-2" variants={itemVariants}>
          <motion.div className="flex justify-center mb-1">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
              <p className="text-sm font-semibold text-green-600">Student Team</p>
            </div>
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
            Student Organizers
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Our enthusiastic student team working tirelessly to ensure a smooth and engaging hackathon experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6"
          variants={containerVariants}
        >
          {studentCoordinators.map((coordinator) => (
            <PersonCard key={coordinator.id} person={coordinator} isSpeaker={false} />
          ))}
        </motion.div>
      </motion.div> */}
    </div>
  );
}
