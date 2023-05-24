"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex justify-center w-full h-screen items-center">
      <motion.div
        className="border-2 border-black h-36 w-36"
        whileHover={{ scale: 1.7 }}
        // Allows the user to drag the object horizontally
        drag="x"
        // Setting the drag constraints
        dragConstraints={{ right: 100, left: -200 }}
      ></motion.div>
    </main>
  );
}
