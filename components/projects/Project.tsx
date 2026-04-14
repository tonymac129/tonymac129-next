import type { ProjectType } from "@/types/project";
import { FaGlobe } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

function Project({ project }: { project: ProjectType }) {
  return (
    <div className="rounded-lg border-2 border-zinc-500 dark:border-zinc-800 p-5 flex flex-col gap-y-5 min-w-70 w-[calc(50%-10px)]">
      {project.image && (
        <Image
          src={project.image}
          alt={project.name + " demo"}
          width={800}
          height={800}
          className="w-full rounded-lg"
        />
      )}
      <div className="text-sm font-bold text-zinc-800 dark:text-zinc-300">
        {project.date}
      </div>
      <div className="flex items-center gap-x-10">
        <h2 className="text-blue-500 font-bold text-2xl">{project.name}</h2>
        <div className="flex gap-x-5 text-zinc-800 dark:text-zinc-300">
          <a href={"https://" + project.link} target="_blank" title="Try demo">
            <FaGlobe size={25} />
          </a>
          <a
            href={"https://github.com/" + project.repo}
            target="_blank"
            title="Source code"
          >
            <SiGithub size={25} />
          </a>
        </div>
      </div>
      <div className="flex gap-x-3 text-zinc-800 dark:text-zinc-300 text-xl">
        {project.skills?.map((skill) => skill)}
      </div>
      <div className="flex flex-wrap gap-1.5 text-xs text-zinc-800 dark:text-zinc-300">
        {project.tags.map((tag, i) => (
          <div
            key={i}
            className="border-2 border-zinc-500 dark:border-zinc-800 rounded-lg px-2 py-1"
          >
            {tag}
          </div>
        ))}
      </div>
      <p className="text-zinc-800 dark:text-zinc-300">
        {project.description?.slice(0, 300) + "..."}
      </p>
    </div>
  );
}

export default Project;
