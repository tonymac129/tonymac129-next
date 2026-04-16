"use client";

import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

function Admin() {
  return (
    <Link href="/admin">
      <motion.div
        whileHover={{ scale: 1.25, y: -2, rotate: 15 }}
        whileTap={{ scale: 1.1, y: -1, rotate: 5 }}
        className="text-zinc-800 dark:text-zinc-300 cursor-pointer"
      >
        <FaUserCircle title="Admin page" size={25} />
      </motion.div>
    </Link>
  );
}

export default Admin;
