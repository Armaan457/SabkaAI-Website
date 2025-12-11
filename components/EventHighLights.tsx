"use client";

import React from "react";
import { motion } from "framer-motion";

export function EventHighlights() {
  const items = [
    "6 Innovation Tracks",
    "₹1,75,000 Prize Pool",
    "Global Participation Welcome",
    "Focus on Rural & Accessibility Solutions",
    "24+ Hour Hackathon",
  ];
  // Duplicate list for seamless marquee
  const list = [...items, ...items, ...items];

  const containerVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full overflow-hidden border-t border-b rounded-none bg-gradient-to-r from-white via-blue-50 to-white shadow-lg py-6 px-10">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        variants={containerVariants}
        animate="animate"
      >
        {list.map((t, i) => (
          <motion.span
            key={i}
            className="px-6 py-2 rounded-full border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
          >
            {t}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
