"use client";

import type { PostType } from "@/types/blog";
import { motion } from "framer-motion";
import Link from "next/link";

function Post({ post }: { post: PostType }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <Link
        href={"/blog/" + post.slug}
        className="bg-zinc-900 rounded-lg cursor-pointer flex flex-col px-6 py-3 gap-y-3 text-sm w-65 h-full"
      >
        <h2 className="text-blue-500 font-bold text-xl">{post.title}</h2>
        <div className="font-bold text-zinc-300">
          {new Date(post.date).toLocaleDateString()}
        </div>
        <p className="text-zinc-300">{post.content.slice(0, 60) + "..."}</p>
      </Link>
    </motion.div>
  );
}

export default Post;
