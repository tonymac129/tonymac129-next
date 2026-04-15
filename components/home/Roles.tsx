"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { roles } from "@/lib/constants";
import Image from "next/image";

function Roles() {
  const [selected, setSelected] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const current = useRef<number>(selected);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!containerRef.current?.matches(":hover")) {
        setProgress((prev) => {
          if (prev == 100) {
            setSelected((p) =>
              current.current == roles.length - 1 ? 0 : p + 1,
            );
            return 0;
          }
          return prev + 1;
        });
      }
    }, 40);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    current.current = selected;
  }, [selected]);

  return (
    <div className="flex flex-col gap-y-5 group/container" ref={containerRef}>
      <div className="flex gap-3 items-center flex-wrap">
        <span className="text-zinc-800 dark:text-zinc-300 font-bold">
          I am a:
        </span>
        {roles.map((role) => (
          <div
            key={role.id}
            onClick={() => setSelected(role.id)}
            className={`px-4 py-2 text-zinc-800 dark:text-zinc-300 border-2 font-bold text-sm border-zinc-500 dark:border-zinc-800 overflow-hidden z-2 rounded-full
              cursor-pointer relative  ${selected === role.id ? "group-hover/container:bg-zinc-300 dark:group-hover/container:bg-zinc-800" : "bg-transparent hover:bg-zinc-300 dark:hover:bg-zinc-900"} transition-colors duration-300`}
          >
            {selected === role.id && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-zinc-300 dark:bg-zinc-900 -z-1 h-full absolute top-0 left-0 group-hover/container:bg-zinc-300 dark:group-hover/container:bg-zinc-800 transition-colors duration-300"
                style={{ width: progress + "%" }}
              />
            )}
            {role.name}
          </div>
        ))}
      </div>
      <div className="flex gap-0 lg:gap-2 flex-wrap">
        <AnimatePresence mode="popLayout">
          {roles
            .find((role) => role.id === selected)
            ?.attributes.map((attribute, i) => (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5, type: "spring" }}
                key={i + attribute.name}
                className="text-zinc-800 dark:text-zinc-300 flex flex-col items-center gap-y-2 w-20 group cursor-pointer"
                onClick={() => {
                  if (attribute.link) {
                    window.open("https://" + attribute.link, "_blank");
                  }
                }}
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  className={`${attribute.color ? attribute.color : ""} transition-colors duration-300 cursor-pointer`}
                >
                  {typeof attribute.icon === "string" ? (
                    <div className="h-8.5">
                      <Image
                        src={attribute.icon}
                        alt={attribute.name}
                        width={44}
                        height={44}
                      />
                    </div>
                  ) : (
                    attribute.icon
                  )}
                </motion.div>
                <div className="text-zinc-700 dark:text-zinc-400 text-sm text-center w-full">
                  {attribute.name}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Roles;
