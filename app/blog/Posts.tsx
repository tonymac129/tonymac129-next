"use client";

import type { PostType } from "@/types/blog";
import { useState, useMemo, useEffect } from "react";
import Post from "@/components/blog/Post";
import Input from "@/components/ui/Input";
import Filter from "@/components/skills/Filter";

const filters = ["Skill", "Personal", "Entertainment", 2025, 2023];

function Posts({ posts }: { posts: PostType[] }) {
  const [sortedPosts, setSortedPosts] = useState<PostType[]>(posts);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sortMethod, setSortMethod] = useState<string>("latest");
  const displayedPosts = useMemo<PostType[]>(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.trim().toLowerCase()) &&
        (filter !== null
          ? typeof filters[filter] === "string"
            ? post.tags.includes(filters[filter])
            : post.date.getFullYear() == filters[filter]
          : true),
    );
  }, [sortedPosts, filter, search]);

  useEffect(() => {
    const allPosts = [...posts];

    switch (sortMethod) {
      case "latest":
        setSortedPosts(allPosts);
        break;
      case "oldest":
        setSortedPosts(allPosts.reverse());
        break;
      case "name":
        setSortedPosts(allPosts.sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case "category":
        setSortedPosts(
          allPosts.sort((a, b) => a.tags[0].localeCompare(b.tags[0])),
        );
        break;
    }
  }, [sortMethod, posts]);

  return (
    <div className="flex flex-col gap-y-10 px-5 sm:px-10 lg:px-40 max-w-430 mx-auto">
      <div className="flex flex-col gap-y-3 lg:flex-row justify-center relative items-center">
        <div className="lg:absolute right-0">
          <Input
            placeholder="Search blog posts"
            value={search}
            setValue={setSearch}
          />
        </div>
        <div className="text-zinc-800 dark:text-zinc-300 flex items-center gap-x-3 lg:absolute left-0">
          Sort by{" "}
          <select
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
            className="appearance-none py-2 w-30 rounded-lg bg-zinc-300 dark:bg-zinc-900 cursor-pointer font-bold text-center outline-none"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {filters.slice(0, 3).map((text, i) => (
            <Filter
              key={i}
              index={i}
              text={text as string}
              filter={filter}
              setFilter={setFilter}
            />
          ))}
          <select
            value={filter as number}
            onChange={(e) => setFilter(Number(e.target.value) || null)}
            className="appearance-none py-2 w-20 transition-colors duration-300 rounded-full border-2 border-zinc-500 dark:border-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-300 cursor-pointer text-center outline-none"
          >
            <option value="0">Year</option>
            <option value="3">2025</option>
            <option value="4">2023</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post, i) => (
            <Post key={post.id} post={post} index={i} />
          ))
        ) : (
          <div className="text-zinc-800 dark:text-zinc-300">
            Yeah that&apos;s it... I just don&apos;t write blog posts
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;
