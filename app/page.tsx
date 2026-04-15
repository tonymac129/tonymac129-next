import type { QuoteType } from "@/types/home";
import { createComment } from "./actions";
import { prisma } from "@/lib/prisma";
import Hero from "@/components/home/Hero";
import CommentBox from "@/components/home/CommentBox";
import Image from "next/image";
import Comment from "@/components/home/Comment";

const quotes: QuoteType[] = [
  {
    id: 0,
    name: "beibei703",
    image:
      "https://cdn.discordapp.com/avatars/878787426682798091/515837c93a136c00cad6589e2e64fed7.webp?size=1024",
    quote:
      "He's pretty creative and talented at web development. He puts a lot of effort into even small projects and that attention to detail really shows",
  },
  {
    id: 2,
    name: "RespectableDot",
    image: "https://ca.slack-edge.com/E09V59WQY1E-U0A4QG5JTGX-2cc700e5cbb2-512",
    quote:
      "tony is so cool, asian, and very good at existing, he also likes attack on titan for some reason",
  },
  {
    id: 1,
    name: "jaypaw.",
    image:
      "https://cdn.discordapp.com/avatars/1172171018282999909/0a7f2e9e57cb4a402f58a3d933c05753.webp?size=1024",
    quote:
      "If your in a pickle, tony will help you with anything; just like how he is a graviton and can go through anything",
  },
];

export default async function Home() {
  const comments = await prisma.comment.findMany();

  return (
    <div className="flex flex-col px-5 gap-y-10 sm:px-10 lg:px-40 mb-15">
      <Hero />
      <div className="flex gap-x-15">
        <div className="flex-1 flex flex-col gap-y-10">
          <h1 className="text-blue-500 text-2xl font-bold">
            Here&apos;s what people say about me
          </h1>
          <div className="flex flex-col gap-y-5">
            {quotes.map((quote) => (
              <div
                key={quote.id}
                className="flex bg-zinc-300 dark:bg-zinc-900 rounded-lg p-5 items-center gap-x-5"
              >
                <Image
                  src={quote.image}
                  alt="Profile image"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-zinc-500 dark:border-zinc-800"
                />
                <div className="flex flex-col gap-y-1">
                  <h2 className="text-blue-500 text-xl font-bold">
                    {quote.name}
                  </h2>
                  <p className="text-zinc-800 dark:text-zinc-300 text-sm">
                    &quot;{quote.quote}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-y-10">
          <h1 className="text-blue-500 text-2xl font-bold">
            Leave your own message here!
          </h1>
          <CommentBox createComment={createComment} />
          <div className="flex flex-col gap-y-3">
            {comments.length > 0 ? (
              comments
                .sort((a, b) => b.date.getTime() - a.date.getTime())
                .map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))
            ) : (
              <div className="text-zinc-800 dark:text-zinc-300 text-center">
                No comments found! Looks like you&apos;re the first one here :)
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
