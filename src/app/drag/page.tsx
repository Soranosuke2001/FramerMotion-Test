"use client";

import { motion } from "framer-motion";

export default function Drag() {
  return (
    <main className="flex justify-center w-full h-screen items-center">
      <h1 className="absolute top-14 text-3xl">Drag Page</h1>

      <motion.div
        className="border-2 border-black h-36 w-36"
        // Allows the user to drag the object horizontally
        drag="x"
        // Setting the drag constraints
        dragConstraints={{ right: 100, left: -200 }}
      ></motion.div>
    </main>
  );
}
