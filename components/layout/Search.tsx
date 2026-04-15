"use client";

import type { ProjectType } from "@/types/project";
import type { PostType } from "@/types/blog";
import { useMemo, useState, useEffect, useRef } from "react";
import Input from "../ui/Input";

function Search({ results }: { results: (ProjectType | PostType)[] }) {
  const [search, setSearch] = useState<string>("");
  const [searching, setSearching] = useState<boolean>(false);
  const searchResults = useMemo<(ProjectType | PostType)[]>(() => {
    return search.trim().length > 1
      ? results.filter((result) => {
          if ("name" in result) {
            return (
              result.name.toLowerCase().includes(search.trim().toLowerCase()) ||
              result.description
                ?.toLowerCase()
                .includes(search.trim().toLowerCase())
            );
          } else {
            return (
              result.title
                .toLowerCase()
                .includes(search.trim().toLowerCase()) ||
              result.tags.find((tag) =>
                tag.toLowerCase().includes(search.trim().toLowerCase()),
              )
            );
          }
        })
      : [];
  }, [results, search]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickListener = (e: Event) => {
      if (!searchRef.current?.contains(e.target as Node)) {
        setSearching(false);
      } else {
        setSearching(true);
      }
    };
    document.addEventListener("click", clickListener);

    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, []);

  useEffect(() => {
    setSearching(true);
  }, [search]);

  return (
    <div className="relative" ref={searchRef}>
      <Input
        placeholder="Search TonyMac129"
        value={search}
        setValue={setSearch}
        width={250}
        className={
          searchResults.length > 0 && searching ? "rounded-b-none" : ""
        }
      />
      {searchResults.length > 0 && searching && (
        <div className="absolute w-full top-full left-0 flex flex-col gap-y-2 bg-zinc-300 dark:bg-zinc-900 rounded-b-lg p-2">
          {searchResults.slice(0, 10).map((result) => (
            <a
              key={result.id + ("name" in result ? result.name : result.title)}
              href={
                "name" in result
                  ? (result.repo ? "https://" : "") + result.link
                  : "/blog/" + result.slug
              }
              target={"name" in result ? "_blank" : ""}
              className="text-zinc-800 dark:text-zinc-300 px-2 py-1 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              {"name" in result ? result.name : result.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
