"use client";

import type { Skilltype } from "@/types/skill";
import { motion } from "framer-motion";

function Card({ skill }: { skill: Skilltype }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      transition={{ duration: 0.7, type: "spring" }}
      className="bg-zinc-900 rounded-lg cursor-pointer flex flex-col px-4 py-2 gap-y-3 text-sm w-65 h-full"
    >
      <div className="flex gap-x-3 items-center text-zinc-300">
        <div className="text-4xl">{skill.icon}</div>
        <div className="flex flex-col gap-y-1">
          <h2 className="text-blue-500 text-xl font-bold">{skill.name}</h2>
          <p>{skill.description}</p>
        </div>
      </div>
      <div className="flex items-center text-zinc-300 gap-x-1">
        <div className="relative overflow-hidden rounded-full bg-zinc-950 w-full h-3">
          <div
            style={{ width: skill.progress + "%" }}
            className="absolute bg-blue-500 left-0 top-0 h-full"
          />
        </div>
        {skill.progress}%
      </div>
    </motion.div>
  );
}

export default Card;
