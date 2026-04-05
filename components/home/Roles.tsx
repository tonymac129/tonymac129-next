"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { roles } from "@/lib/constants";
import Image from "next/image";

function Roles() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex gap-x-3 items-center">
        <span className="text-zinc-300 font-bold">I am a:</span>
        {roles.map((role) => (
          <div
            key={role.id}
            onClick={() => setSelected(role.id)}
            className={`px-4 py-2 text-zinc-300 border-2 font-bold text-sm border-zinc-800 rounded-full cursor-pointer ${selected === role.id ? "bg-zinc-800" : "bg-transparent hover:bg-zinc-900"} transition-colors duration-300`}
          >
            {role.name}
          </div>
        ))}
      </div>
      <div className="flex gap-x-3">
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
                className="text-zinc-300 flex flex-col items-center gap-y-2 w-20 group cursor-pointer"
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
                    <Image
                      src={attribute.icon}
                      alt={attribute.name}
                      width={43}
                      height={43}
                    />
                  ) : (
                    attribute.icon
                  )}
                </motion.div>
                <div className="text-zinc-400 text-sm text-center w-full">
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
