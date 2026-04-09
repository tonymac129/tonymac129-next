import type { Metadata } from "next";
import { skillData } from "@/lib/skills";
import Skills from "./Skills";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "Skills | TonyMac129",
  description:
    "Here are some skills and hobbies that I know or am currently learning, with a progress bar that shows my mastery on the skill.",
  authors: [{ name: "TonyMac129", url: "https://tonymac.net" }],
  openGraph: {
    title: "Skills | TonyMac129",
    description:
      "Here are some skills and hobbies that I know or am currently learning, with a progress bar that shows my mastery on the skill.",
    url: "https://tonymac.net/skills",
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
      <Hero title="My Skills">
        Here are some skills and hobbies that I know or am currently learning,
        with a progress bar that shows my mastery on the skill.
      </Hero>
      <Skills skillData={skillData} />
    </div>
  );
}

export default Page;
