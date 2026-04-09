import type { Metadata } from "next";
import type { PostType } from "@/types/blog";
import Hero from "@/components/layout/Hero";
import Posts from "./Posts";

export const posts: PostType[] = [
  {
    id: 0,
    title: "My First Blog Post!",
    date: new Date("4/8/26"),
    slug: "first-post",
    content:
      "Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much. Here are some short blog posts on my skills, experiences, and just random stuff if I feel like writing about it. Disclaimer: I'm not the best writer or the most proactive person, so don't expect too much.",
    headings: [
      { id: "heading-1", name: "Heading 1" },
      { id: "heading-2", name: "Heading 1" },
      { id: "heading-3", name: "Heading 1" },
    ],
  },
  {
    id: 1,
    title: "My Second Blog Post!",
    date: new Date("4/8/26"),
    slug: "second-post",
    content:
      "Another blog that totally isn't just a placeholder thing to test whether this blog system thing works.",
    headings: [
      { id: "heading-1", name: "Heading 1" },
      { id: "heading-2", name: "Heading 1" },
      { id: "heading-3", name: "Heading 1" },
    ],
  },
  {
    id: 2,
    title: "My Third Blog Post!",
    date: new Date("4/8/26"),
    slug: "third-post",
    content:
      "Wow look at that another totally original completely real blog post that definitely isn't made for the same testing purposes.",
    headings: [
      { id: "heading-1", name: "Heading 1" },
      { id: "heading-2", name: "Heading 1" },
      { id: "heading-3", name: "Heading 1" },
    ],
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
    <div className="mb-15">
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
