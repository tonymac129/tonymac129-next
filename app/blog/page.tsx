import type { Metadata } from "next";
import type { PostType } from "@/types/blog";
import Hero from "@/components/layout/Hero";
import Posts from "./Posts";

const posts: PostType[] = [
  {
    id: 0,
    title: "My First Blog Post on This New Site!",
    date: new Date("4/8/26"),
    slug: "first-post",
    content:
      "Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much.",
  },
];

export const metadata: Metadata = {
  title: "Blog | TonyMac129",
  description:
    "Some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. I'm not exactly the best writer nor do I want to become one, so don't expect too much here.",
  authors: [{ name: "TonyMac129", url: "https://tonymac.net" }],
  openGraph: {
    title: "Blog | TonyMac129",
    description:
      "Some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. I'm not exactly the best writer nor do I want to become one, so don't expect too much here.",
    url: "https://tonymac.net/blog",
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
    <div>
      <Hero title="My Blog">
        Some short blog posts on my skills, experiences, and just random stuff
        if I feel like writing about it. I&apos;m not exactly the best writer
        nor do I want to become one, so don&apos;t expect too much here.
      </Hero>
      <Posts posts={posts} />
    </div>
  );
}

export default Page;
