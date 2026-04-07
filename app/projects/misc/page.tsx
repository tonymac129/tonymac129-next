import { miscData } from "@/lib/projects";
import Hero from "@/components/layout/Hero";
import Link from "next/link";
import Projects from "./Projects";

function Page() {
  return (
    <div>
      <Hero title="Miscellaneous Stuff">
        You can find all my small learning projects, demos, tests, and other
        miscellaneous non-coding stuff here! To check out my more serious and
        complex coding projects, click{" "}
        <Link href="/projects" className="text-blue-500 hover:underline">
          here
        </Link>
        !
      </Hero>
      <Projects projects={miscData} />
    </div>
  );
}

export default Page;
