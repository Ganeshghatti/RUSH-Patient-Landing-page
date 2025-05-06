"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Link from "next/link";

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-[#0069FD] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Register Today – Protect Your Family's Health!
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Start your journey to smarter healthcare today. Your loved ones
            deserve the best — and so do you!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="https://app.rushdr.com/patient/register">
              <Button
                size="lg"
                className="bg-white text-[#0069FD] hover:bg-blue-50 text-lg px-10 h-14"
              >
                Register Now
              </Button>
            </Link>
            <p className="text-blue-100 mt-4">
              It's free, fast, and your first step to better care!
            </p>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-10 left-10 hidden md:block"
            initial={{ opacity: 0, x: -20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center">
              <div className="text-white text-lg font-bold">24/7</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-5 right-20 hidden md:block"
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-white text-sm">Trusted by doctors</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
