"use client";

import type { PostType } from "@/types/blog";
import { useState, useMemo } from "react";
import Post from "@/components/blog/Post";
import Input from "@/components/ui/Input";

function Posts({ posts }: { posts: PostType[] }) {
  const [search, setSearch] = useState<string>("");
  const displayedPosts = useMemo<PostType[]>(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.trim().toLowerCase()),
    );
  }, [posts, search]);

  return (
    <div className="flex flex-col gap-y-10 items-center px-40">
      <Input
        placeholder="Search blog posts"
        value={search}
        setValue={setSearch}
        className="text-lg w-120"
      />
      <div className="flex flex-wrap justify-center gap-3">
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <div className="text-zinc-300">
            Yeah that&apos;s it... I just don&apos;t write blog posts
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;
