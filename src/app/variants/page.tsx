"use client";

import { motion } from "framer-motion";

export default function Variants() {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };
  return (
    <main className="flex justify-center w-full h-screen items-center">
      <h1 className="absolute top-14 text-3xl">Variants Page</h1>
      {/* Can be used to animate an entire subtree of components with only a single animate prop */}

      <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>
    </main>
  );
}
