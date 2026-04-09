import type { Metadata } from "next";
import { miscData } from "@/lib/projects";
import Hero from "@/components/layout/Hero";
import Link from "next/link";
import Projects from "./Projects";

const sortedMiscData = miscData.sort(
  (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime(),
);

export const metadata: Metadata = {
  title: "Misc Projects | TonyMac129",
  description:
    "You can find all my small learning projects, demos, tests, and other miscellaneous non-coding stuff here! To check out my more serious and complex coding projects, click here!",
  authors: [{ name: "TonyMac129", url: "https://tonymac.net" }],
  openGraph: {
    title: "Misc Projects | TonyMac129",
    description:
      "You can find all my small learning projects, demos, tests, and other miscellaneous non-coding stuff here! To check out my more serious and complex coding projects, click here!",
    url: "https://tonymac.net/projects/misc",
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
      <Hero title="Miscellaneous Stuff">
        You can find all my small learning projects, demos, tests, and other
        miscellaneous non-coding stuff here! To check out my more serious and
        complex coding projects, click{" "}
        <Link href="/projects" className="text-blue-500 hover:underline">
          here
        </Link>
        !
      </Hero>
      <Projects projects={sortedMiscData} />
    </div>
  );
}

export default Page;
