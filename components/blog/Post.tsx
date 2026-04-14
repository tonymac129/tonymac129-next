"use client";

import type { PostType } from "@/types/blog";
import { motion } from "framer-motion";
import Link from "next/link";

type PostProps = {
  post: PostType;
  index: number;
};

function Post({ post, index }: PostProps) {
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
        href={"/blog/" + post.slug}
        className="bg-zinc-300 dark:bg-zinc-900 rounded-lg cursor-pointer flex flex-col px-6 py-3 gap-y-3 text-sm w-65 h-full"
      >
        <h2 className="text-blue-500 font-bold text-xl">{post.title}</h2>
        <div className="font-bold text-zinc-800 dark:text-zinc-300">
          {new Date(post.date).toLocaleDateString()}
        </div>
        <p className="text-zinc-800 dark:text-zinc-300">
          {post.content.slice(0, 60) + "..."}
        </p>
      </Link>
    </motion.div>
  );
}

export default Post;
