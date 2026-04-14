"use client";

import type { AboutType } from "@/types/about";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const dropdownStyles =
  "border-2 border-zinc-500 dark:border-zinc-800 rounded-lg py-1 cursor-pointer outline-none appearance-none text-center hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors duration-300 w-35";

function About({ aboutData }: { aboutData: AboutType[] }) {
  const [parent, setParent] = useState<number>(0);
  const [child, setChild] = useState<number>(0);
  const parentData = useMemo<AboutType>(() => {
    return aboutData.find((about) => about.id === parent)!;
  }, [aboutData, parent]);

  return (
    <div className="flex flex-col items-center gap-y-10 px-5 sm:px-10 lg:px-40 max-w-430 mx-auto">
      <h2 className="text-blue-500 text-2xl font-bold text-center">
        More oversharing and doxxing myself because I don&apos;t care about
        privacy
      </h2>
      <div className="flex flex-col gap-y-3 items-center">
        <div className="text-lg text-zinc-800 dark:text-zinc-300 flex gap-3 items-center justify-center flex-wrap">
          Here are (some of) the
          <select
            className={dropdownStyles}
            onChange={(e) => {
              setChild(0);
              setParent(Number(e.target.value));
            }}
          >
            {aboutData.map((about) => (
              <option key={about.id} value={about.id}>
                {about.name}
              </option>
            ))}
          </select>
          that
          <select
            className={dropdownStyles}
            onChange={(e) => setChild(Number(e.target.value))}
          >
            {parentData.options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        {parentData.link && (
          <a
            href={parentData.link}
            target="_blank"
            className="text-blue-500 hover:underline w-fit"
          >
            More info
          </a>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {parentData.options
          .find((option) => option.id === child)!
          .titles.map((title, i) => (
            <motion.div
              key={i + title + child}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, type: "spring", delay: i * 0.05 }}
              className="bg-zinc-300 dark:bg-zinc-900 rounded-lg px-4 py-2 text-lg text-zinc-800 dark:text-zinc-300 font-bold"
            >
              {title}
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default About;
