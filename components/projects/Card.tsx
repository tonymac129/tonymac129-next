"use client";

import type { ProjectType } from "@/types/project";
import { motion } from "framer-motion";
import Link from "next/link";

type CardProps = {
  project: ProjectType;
  index: number;
};

function Card({ project, index }: CardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: index * 0.05,
          duration: 0.5,
          type: "spring",
        },
      }}
      exit={{ y: 50, opacity: 0 }}
      whileHover={{
        y: -3,
        scale: 1.03,
        transition: { duration: 0.7, type: "spring" },
      }}
      layout
    >
      <Link
        href={project.link}
        className="bg-zinc-900 rounded-lg cursor-pointer flex flex-col px-4 py-2 gap-y-3 text-sm w-50 h-full"
      >
        <h2 className="text-lg text-white font-bold">{project.name}</h2>
        <div className="flex gap-x-3 text-zinc-300 text-2xl">
          {project.skills?.map((skill, i) => (
            <div key={i}>{skill}</div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 text-xs text-zinc-300">
          {project.tags.map((tag, i) => (
            <div
              key={i}
              className="border-2 border-zinc-800 rounded-lg px-2 py-1"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="text-zinc-300">{project.date}</div>
      </Link>
    </motion.div>
  );
}

export default Card;
