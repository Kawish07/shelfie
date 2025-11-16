import React from "react";
import { motion } from "framer-motion";

export default function Carousel({ items }) {
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex gap-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="min-w-[220px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
