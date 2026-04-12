"use client";

import type { ProjectType } from "@/types/project";
import { useState, useMemo, useEffect } from "react";
import Card from "@/components/projects/Card";
import Input from "@/components/ui/Input";
import Filter from "@/components/skills/Filter";
import Link from "next/link";

const filters = [
  "Web App",
  "Learning",
  "Design",
  "Game",
  2026,
  2025,
  2024,
  2023,
  2022,
];

function Projects({ projects }: { projects: ProjectType[] }) {
  const [sortedProjects, setSortedProjects] = useState<ProjectType[]>(projects);
  const [filter, setFilter] = useState<number | null>(null);
  const [sortMethod, setSortMethod] = useState<string>("latest");
  const [search, setSearch] = useState<string>("");
  const displayedProjects = useMemo<ProjectType[]>(() => {
    return sortedProjects.filter((project) => {
      return (
        project.name.toLowerCase().includes(search.trim().toLowerCase()) &&
        (filter !== null
          ? typeof filters[filter] === "string"
            ? project.tags.includes(filters[filter])
            : Number(project.date?.slice(4)) == filters[filter]
          : true)
      );
    });
  }, [search, filter, sortedProjects]);

  useEffect(() => {
    const allProjects = [...projects];

    switch (sortMethod) {
      case "latest":
        setSortedProjects(allProjects);
        break;
      case "oldest":
        setSortedProjects(allProjects.reverse());
        break;
      case "name":
        setSortedProjects(
          allProjects.sort((a, b) => a.name.localeCompare(b.name)),
        );
        break;
      case "category":
        setSortedProjects(
          allProjects.sort((a, b) => a.tags[0].localeCompare(b.tags[0])),
        );
        break;
    }
  }, [sortMethod, projects]);

  return (
    <div className="flex flex-col gap-y-10 px-5 sm:px-10 lg:px-40 max-w-430 mx-auto">
      <div className="flex flex-col gap-y-3 lg:flex-row justify-center relative items-center">
        <div className="lg:absolute right-0">
          <Input
            placeholder="Search misc"
            value={search}
            setValue={setSearch}
          />
        </div>
        <div className="text-zinc-300 flex items-center gap-x-3 lg:absolute left-0">
          Sort by{" "}
          <select
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
            className="appearance-none py-2 w-30 rounded-lg bg-zinc-900 cursor-pointer font-bold text-center outline-none"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {filters.slice(0, 4).map((text, i) => (
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
            className="appearance-none py-2 w-20 transition-colors duration-300 rounded-full border-2 border-zinc-800 hover:bg-zinc-900 text-zinc-300 cursor-pointer text-center outline-none"
          >
            <option value="0">Year</option>
            <option value="4">2026</option>
            <option value="5">2025</option>
            <option value="6">2024</option>
            <option value="7">2023</option>
            <option value="8">2022</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project, i) => (
            <Card key={project.id} project={project} index={i} />
          ))
        ) : (
          <div className="text-zinc-300 text-center">
            No projects found! Maybe try{" "}
            <Link href="/projects" className="text-blue-500 hover:underline">
              here
            </Link>
            ?
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
