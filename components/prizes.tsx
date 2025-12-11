"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Gift } from "lucide-react";
import { motion } from "framer-motion";

const prizes = [
  {
    position: "1st Place (2 Teams)",
    amount: "₹40,000",
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    gradientFrom: "from-yellow-400",
    gradientTo: "to-orange-300",
    description: "Winners of IndiaAI Impact Hackathon",
    benefits: ["• Cash Prize per team", "• Mentorship Program", "• Certificate", "• Industry Recognition"]
  },
  {
    position: "2nd Place (2 Teams)", 
    amount: "₹25,000",
    icon: Medal,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    gradientFrom: "from-gray-400",
    gradientTo: "to-slate-400",
    description: "Runner-up Teams",
    benefits: ["• Cash Prize per team", "• Mentorship Program", "• Industry Recognition", "• Networking Opportunities"]
  },
  {
    position: "3rd Place (3 Teams)",
    amount: "₹15,000",
    icon: Award,
      color: "text-[#cd7f32]", // bronze color
      bgColor: "bg-[#f8e7d0]", // light bronze background
      borderColor: "border-[#cd7f32]", // bronze border
      gradientFrom: "from-[#cd7f32]",
      gradientTo: "to-[#b87333]",
    description: "Second Runner-up Teams",
    benefits: ["• Cash Prize per team", "• Industry Recognition", "• Networking Opportunities", "• Certificate"]
  },
];

export function Prizes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <motion.div
        className="text-center space-y-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className="flex justify-center mb-2">
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-100 to-orange-50 rounded-full">
            <p className="text-sm font-semibold text-yellow-500">Rewards</p>
          </div>
        </motion.div>
        <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
          Prize Pool
        </h3>
      </motion.div>

      {/* Main Prizes */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {prizes.map((prize, index) => {
          const IconComponent = prize.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`${prize.borderColor} border-2 ${prize.bgColor} relative overflow-hidden h-full transition-all duration-300 hover:shadow-xl`}>
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-br ${prize.gradientFrom} ${prize.gradientTo} opacity-0 blur-lg`}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.4 }}
                  />

                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div
                      className={`mx-auto w-16 h-16 rounded-full ${prize.bgColor} border-2 ${prize.borderColor} flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className={`h-8 w-8 ${prize.color}`} />
                    </motion.div>
                    <CardTitle className="text-xl text-gray-900">{prize.position}</CardTitle>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <CardDescription className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                        {prize.amount}
                      </CardDescription>
                    </motion.div>
                    <p className="text-sm text-gray-600 mt-2">{prize.description}</p>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <motion.ul
                      className="space-y-3 list-disc list-inside"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                      {prize.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          className="text-sm text-gray-700 font-medium flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 + idx * 0.05, duration: 0.3 }}
                        >
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Additional Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50 border-orange-100/70 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="text-center pb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-500">
                Additional Benefits for All Participants
              </CardTitle>
            </motion.div>
          </CardHeader>
          <CardContent>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: "Certificate", description: "Official participation certificate" },
                { title: "Networking", description: "Connect with industry experts" },
                { title: "Learning", description: "Workshops and mentorship sessions" },
                { title: "Opportunities", description: "Job and internship opportunities" }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="space-y-2 p-4 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <div className="text-lg font-bold text-gray-900">{benefit.title}</div>
                  <div className="text-sm text-gray-600">{benefit.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
