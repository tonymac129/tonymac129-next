import { projectData } from "@/lib/projects";
import Hero from "@/components/layout/Hero";
import Projects from "./Projects";
import Link from "next/link";

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
      <Projects projects={projectData} />
    </div>
  );
}

export default Page;
