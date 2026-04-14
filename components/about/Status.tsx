"use client";

import type { StatusType } from "@/types/about";
import { motion } from "framer-motion";
import Image from "next/image";

function Status({ status }: { status: StatusType }) {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.03 }}
      transition={{ duration: 0.7, type: "spring" }}
      href={status.link}
      target="_blank"
      className="flex-1 rounded-lg bg-zinc-300 dark:bg-zinc-900 flex gap-x-5 px-6 py-3 h-3 items-center justify-between"
    >
      <div className="flex flex-col gap-y-1">
        <h3 className="font-bold text-zinc-800 dark:text-zinc-300">
          {status.heading}
        </h3>
        <h2 className="text-xl font-bold text-blue-500">{status.name}</h2>
        <p className="text-zinc-800 dark:text-zinc-300 text-sm">
          {status.description}
        </p>
      </div>
      {status.image && (
        <Image
          src={status.image}
          alt={status.name + " image"}
          width={100}
          height={100}
          className="rounded-lg h-20 w-fit"
        />
      )}
    </motion.a>
  );
}

export default Status;
