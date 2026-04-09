import type { Metadata } from "next";
import { projectData } from "@/lib/projects";
import Hero from "@/components/layout/Hero";
import Projects from "./Projects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | TonyMac129",
  description:
    "The coding projects here are the ones I've put some effort into making, for my simple or unfinished learning stuff and non-coding projects, check out the misc page.",
  authors: [{ name: "TonyMac129", url: "https://tonymac.net" }],
  openGraph: {
    title: "Projects | TonyMac129",
    description:
      "The coding projects here are the ones I've put some effort into making, for my simple or unfinished learning stuff and non-coding projects, check out the misc page.",
    url: "https://tonymac.net/projects",
    siteName: "TonyMac129",
    images: [
      {
        url: "/logo.png",
        width: 50,
        height: 50,
      },
    ],
    type: "website",
  },
};

function Page() {
  return (
    <div className="mb-15">
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
