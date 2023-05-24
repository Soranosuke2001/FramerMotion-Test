"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex justify-center w-full h-screen items-center">
      <motion.div
        className="border-2 border-black h-36 w-36"
        // Mouse Hover: scales the box by 1.7 from the original size 
        whileHover={{ scale: 1.7 }}

        // On click/tap: scales the box by 1.1 from the original size
        whileTap={{ scale: 1.1 }}
      ></motion.div>
    </main>
  );
}
