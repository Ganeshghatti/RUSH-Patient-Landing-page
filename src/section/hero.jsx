"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="bg-[#0069FD] mt-4 relative overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute top-40 -left-10 w-32 h-32 rounded-full bg-blue-400 opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-blue-300 opacity-20 blur-xl"></div>

      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Hero text content */}
          <motion.div
            className="flex-1 text-white z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Your Health, Our Priority
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Experience modern healthcare with our expert doctors. Book
              appointments online and get the care you deserve.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-white text-[#0069FD] hover:bg-blue-50"
              >
                Book an Appointment
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-blue-100">
                Join <span className="font-bold text-white">1,000+</span>{" "}
                existing patients who trust us with their health.
              </p>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative h-[400px] md:block hidden md:h-[500px] w-full">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/hero.jpg"
                  alt="Doctor with patient"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden items-center justify-center h-full">
                  <p className="text-white text-center p-4">
                    Modern healthcare at your fingertips
                  </p>
                </div>
              </div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0069FD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">
                      Patient Satisfaction
                    </p>
                    <p className="font-bold text-gray-800">98% Positive</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating appointment card */}
            <motion.div
              className="absolute -top-5 -right-5 bg-white p-4 md:block hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0069FD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Next Available</p>
                  <p className="font-bold text-gray-800">Today, 2:00 PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
