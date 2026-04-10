import type { PostType } from "@/types/blog";
import Link from "next/link";

type SidebarProps = {
  posts: PostType[];
  post: PostType;
};

function Sidebar({ posts, post }: SidebarProps) {
  return (
    <div className="hidden sm:flex flex-col gap-y-5 py-5 w-65 border-r-2 border-r-zinc-800 pr-3 sticky top-16.5 sm:top-18.5 h-[calc(100vh-66px)] sm:h-[calc(100vh-74px)] overflow-auto">
      <h2 className="text-white text-lg font-bold px-4">My Posts</h2>
      <div className="flex flex-col gap-y-3">
        {posts.map((sidePost) => (
          <Link
            key={sidePost.id}
            href={"/blog/" + sidePost.slug}
            className={
              "text-zinc-300 px-4 py-2 rounded-lg hover:bg-zinc-900 transition-colors duration-300 " +
              (post.id === sidePost.id ? "font-bold text-blue-500!" : "")
            }
          >
            {sidePost.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
