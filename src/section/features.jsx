"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Features = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const features = [
    {
      icon: "/file.svg",
      title: "Add Your Whole Family!",
      description:
        "Register up to 11 family members with quick sign-up using Govt. ID & Address Proof. One app to manage everyone's care.",
    },
    {
      icon: "/globe.svg",
      title: "Connect with Doctors Instantly!",
      description:
        "Emergency connect to doctors, see who's online now, and filter by specialty, location, or availability across India.",
    },
    {
      icon: "/window.svg",
      title: "Multiple Ways to Consult",
      description:
        "Emergency support, video calls, voice/chat, clinic visits, home consultations, and specialized elderly care services.",
    },
    {
      icon: "/vercel.svg",
      title: "Easy Appointment Booking",
      description:
        "Schedule, reschedule, or cancel anytime with reminders so you never miss a slot.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#F5F8FF]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Makes <span className="text-[#0069FD]">RUSHDR</span> Special?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your family's complete healthcare solution, designed by doctors, for
            patients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="relative w-8 h-8">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl text-center font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="bg-[#0069FD] hover:bg-blue-600">
            Learn More
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Features;
