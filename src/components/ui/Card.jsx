// src/components/ui/Card.jsx

import React from "react";
import { motion } from "framer-motion";

/**
 * Card: A reusable, styled, animated container for dashboard sections.
 * - Adds rounded corners, shadow, light animation on mount
 * - Responsive padding and layout
 */

export function Card({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 transition hover:shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * CardContent: Inner container for card content
 * - Adds spacing between elements
 */

export function CardContent({ children, className = "" }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {children}
    </div>
  );
}

