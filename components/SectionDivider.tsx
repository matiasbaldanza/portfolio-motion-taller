"use client"

import React from "react";
import { motion } from "framer-motion"

import { sectionVariants } from "@/components/Intro"

export default function SectionDivider() {
  return (
    <motion.div
      className="hidden w-1 h-16 my-24 bg-gray-200 rounded-full sm:block dark:bg-opacity-20"
      initial="initial"
      animate="final"
      variants={sectionVariants}
    />
  );
}
