"use client";

import type { ProjectType } from "@/types/project";
import { useState, useMemo } from "react";
import Card from "@/components/projects/Card";
import Input from "@/components/ui/Input";
import Link from "next/link";

function Projects({ projects }: { projects: ProjectType[] }) {
  const [search, setSearch] = useState<string>("");
  const displayedProjects = useMemo<ProjectType[]>(() => {
    return projects.filter((project) =>
      project.name.toLowerCase().includes(search.trim().toLowerCase()),
    );
  }, [projects, search]);

  return (
    <div className="flex flex-col gap-y-10 items-center">
      <Input
        placeholder="Search misc"
        value={search}
        setValue={setSearch}
        className="text-lg w-120"
      />
      <div className="flex flex-wrap justify-center gap-3 px-50">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))
        ) : (
          <div className="text-zinc-300">
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
