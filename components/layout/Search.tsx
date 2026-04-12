"use client";

import type { ProjectType } from "@/types/project";
import { useMemo, useState } from "react";
import Input from "../ui/Input";

function Search({ results }: { results: ProjectType[] }) {
  const [search, setSearch] = useState<string>("");
  const searchResults = useMemo<ProjectType[]>(() => {
    return search.trim().length > 1
      ? results.filter(
          (result) =>
            result.name.toLowerCase().includes(search.trim().toLowerCase()) ||
            result.description
              ?.toLowerCase()
              .includes(search.trim().toLowerCase()),
        )
      : [];
  }, [results, search]);

  return (
    <div className="relative">
      <Input
        placeholder="Search TonyMac129"
        value={search}
        setValue={setSearch}
        width={250}
        className={searchResults.length > 0 ? "rounded-b-none" : ""}
      />
      {searchResults.length > 0 && (
        <div className="absolute w-full top-full left-0 flex flex-col gap-y-2 bg-zinc-900 rounded-b-lg p-2">
          {searchResults.slice(0, 10).map((result) => (
            <a
              key={result.id + result.name}
              href={(result.repo ? "https://" : "") + result.link}
              target="_blank"
              className="text-zinc-300 px-2 py-1 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              {result.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
