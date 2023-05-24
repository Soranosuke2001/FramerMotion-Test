"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col justify-around w-full h-screen items-center">
      <section className="absolute top-2">
        <h1 className="">Framer Motion Testing</h1>
      </section>
      <motion.div
        className="border-2 border-black h-36 w-36"
        whileHover={{ scale: 1.7 }}
      ></motion.div>
    </main>
  );
}
