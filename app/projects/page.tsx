import { projectData } from "@/lib/projects";
import Hero from "@/components/layout/Hero";
import Link from "next/link";
import Card from "@/components/projects/Card";

function Page() {
  return (
    <div>
      <Hero title="Projects">
        The coding projects here are the ones I&apos;ve put some effort into
        making, for my simple or unfinished learning stuff and non-coding
        projects, check out the{" "}
        <Link href="/projects/misc" className="text-blue-500 hover:underline">
          misc
        </Link>{" "}
        page.
      </Hero>
      <div>
        {projectData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Page;
