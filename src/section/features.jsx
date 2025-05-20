"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaUserMd, FaCalendarAlt, FaFileMedical } from "react-icons/fa";
import { MdChat } from "react-icons/md";
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
      Icon: FaUserMd,
      title: "Connect with Doctors Instantly",
      points: [
        "Emergency access to doctors",
        "See who’s online now",
        "Filter by specialty, location, or availability across India",
        "Register up to 11 family members with quick signup (Govt ID & address proof)",
      ],
    },
    {
      Icon: MdChat,
      title: "Multiple Ways to Consult",
      points: [
        "Emergency support",
        "Video or audio calls",
        "Clinic or hospital visits",
        "Home consultations",
        "Specialized elderly care services",
      ],
    },
    {
      Icon: FaCalendarAlt,
      title: "Easy Appointment Booking",
      points: [
        "Schedule, reschedule, or cancel appointments anytime",
        "Automatic reminders so you never miss a slot",
      ],
    },
    {
      Icon: FaFileMedical,
      title: "Manage Your Health Records",
      points: [
        "Upload and access prescriptions, lab reports, BMI, and other health metrics",
        "Share records securely with your doctor",
        "Keep your family’s medical history organized in one place",
      ],
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
            Your family's complete healthcare solution, designed by doctors, for patients.
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
                <feature.Icon className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl text-center font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <ul className="text-gray-600 text-sm text-left list-disc pl-5">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;