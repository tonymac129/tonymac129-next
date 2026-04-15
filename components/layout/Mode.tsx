"use client";

import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

function Mode() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.25, y: -2, rotate: 15 }}
      whileTap={{ scale: 1.1, y: -1, rotate: 5 }}
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      className="text-zinc-800 dark:text-zinc-300 cursor-pointer"
    >
      {theme == "light" ? (
        <FaMoon title="Toggle dark mode" size={25} />
      ) : (
        <FaSun title="Toggle light mode" size={25} />
      )}
    </motion.div>
  );
}

export default Mode;
