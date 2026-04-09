import type { PostType } from "@/types/blog";
import Link from "next/link";

function Contents({ post }: { post: PostType }) {
  return (
    <div className="flex flex-col gap-y-5 py-5 w-45 border-l-2 border-l-zinc-800 pl-3 sticky top-18.5 h-[calc(100vh-74px)]">
      <h2 className="text-white text-lg font-bold px-4">Post Contents</h2>
      <div className="flex flex-col gap-y-3">
        {post.headings!.map((heading) => (
          <Link
            key={heading.id}
            href={`/blog/${post.slug}/#${heading.id}`}
            className="text-zinc-300 px-4 py-2 rounded-lg hover:bg-zinc-900 transition-colors duration-300 "
          >
            {heading.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Contents;
