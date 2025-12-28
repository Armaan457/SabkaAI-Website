"use client";

import { useState } from "react";
import {
  Calendar,
  Users,
  Presentation,
  Trophy,
  Clock,
  Globe,
  MapPin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const INDIA_EVENTS = [
  {
    title: "PPT Submission Deadline",
    icon: Presentation,
    date: "05 December 2025",
    description: "Teams must submit their initial presentation and approach",
  },
  {
    title: "Shortlisting Phase I",
    icon: Users,
    date: "08 December 2025",
    description: "First round of team selection based on submissions",
  },
  {
    title: "Online Pitching",
    icon: Presentation,
    date: "28 December 2025",
    description: "Selected teams present their solutions online",
  },
  {
    title: "Results Announcement",
    icon: Trophy,
    date: "07 January 2026",
    description: "Winners will be announced for both tracks",
  },
  {
    title: "AI Hands-On Workshop",
    icon: Users,
    date: "17 January 2026",
    description: "Practical AI workshop for all participants",
  },
  {
    title: "Innovation Challenge",
    icon: Trophy,
    date: "17-18 January 2026",
    description: "Final 24-hour hackathon event",
  },
];

const UQ_EVENTS = [
  {
    title: "PPT Submission Deadline",
    icon: Presentation,
    date: "05 December 2025",
    description: "Teams must submit their initial presentation and approach",
  },
  {
    title: "Shortlisting Phase I",
    icon: Users,
    date: "10 December 2025",
    description: "First round of team selection based on submissions",
  },
  {
    title: "Online Pitching",
    icon: Presentation,
    date: "04 January 2026",
    description: "Selected teams present their solutions online",
  },
  {
    title: "Results Announcement",
    icon: Trophy,
    date: "07 January 2026",
    description: "Winners will be announced for both tracks",
  },
  {
    title: "AI Hands-On Workshop",
    icon: Users,
    date: "17 January 2026",
    description: "Practical AI workshop for all participants",
  },
  {
    title: "Innovation Challenge",
    icon: Trophy,
    date: "17-18 January 2026",
    description: "Final 24-hour hackathon event",
  },
];

export function Timeline() {
  const [selectedTrack, setSelectedTrack] = useState<"india" | "uq">("india");

  const currentEvents = selectedTrack === "india" ? INDIA_EVENTS : UQ_EVENTS;

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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="space-y-8">
      {/* Track Selector */}
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center space-y-3">
          <motion.div className="flex justify-center mb-2">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full">
              <p className="text-sm font-semibold text-teal-700">Timeline</p>
            </div>
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
            Event Timeline
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Select your region to view the specific timeline for your participation
          </p>
        </div>

        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Button
              variant={selectedTrack === "india" ? "default" : "outline"}
              onClick={() => setSelectedTrack("india")}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:shadow-lg transition-all"
            >
              <MapPin className="h-4 w-4" />
              India (TIET)
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              variant={selectedTrack === "uq" ? "default" : "outline"}
              onClick={() => setSelectedTrack("uq")}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:shadow-lg transition-all"
            >
              <Globe className="h-4 w-4" />
              Australia (UQ)
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Timeline Display */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-teal-200/80 bg-gradient-to-br from-white to-teal-50/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle className="flex items-center gap-2 text-xl">
                {selectedTrack === "india" ? (
                  <>
                    <MapPin className="h-5 w-5 text-teal-600" />
                    Timeline for India (TIET Students)
                  </>
                ) : (
                  <>
                    <Globe className="h-5 w-5 text-teal-600" />
                    Timeline for Australia (UQ Students)
                  </>
                )}
              </CardTitle>
            </motion.div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto pb-4">
              <motion.div
                className="flex gap-8 min-w-max"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {currentEvents.map((event, index) => {
                  const IconComponent = event.icon;
                  const isCompleted = false;
                  const isCurrent = index === 2;

                  return (
                    <motion.div
                      key={index}
                      className="relative flex flex-col items-center min-w-[200px]"
                      variants={itemVariants}
                    >
                      {/* Timeline Line */}
                      {index < currentEvents.length - 1 && (
                        <motion.div
                          className="absolute top-6 left-[calc(100%-16px)] w-8 h-0.5 bg-gradient-to-r from-teal-300 to-emerald-300 z-0"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                          style={{ transformOrigin: "left" }}
                        />
                      )}

                      {/* Icon */}
                      <motion.div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-300 ${
                          isCompleted
                            ? "bg-green-100 border-green-500 text-green-600"
                            : isCurrent
                            ? "bg-gradient-to-br from-teal-100 to-emerald-100 border-teal-500 text-teal-600 shadow-lg shadow-teal-200/50"
                            : "bg-gray-100 border-gray-300 text-gray-500"
                        }`}
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="h-5 w-5" />
                      </motion.div>

                      {/* Content */}
                      <motion.div
                        className="text-center mt-4 max-w-[180px]"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                      >
                        <Badge
                          variant={isCurrent ? "default" : "secondary"}
                          className={`text-xs mb-2 ${
                            isCurrent
                              ? "bg-gradient-to-r from-teal-600 to-emerald-600"
                              : ""
                          }`}
                        >
                          {event.date}
                        </Badge>
                        <h4 className="font-bold text-sm mb-2 leading-tight text-gray-900">
                          {event.title}
                        </h4>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {event.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
