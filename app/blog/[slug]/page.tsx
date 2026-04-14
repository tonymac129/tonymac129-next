import { posts } from "../page";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { redirect } from "next/navigation";
import Sidebar from "@/components/blog/Sidebar";
import Btn from "@/components/ui/Btn";
import Contents from "@/components/blog/Contents";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = posts.find((post) => post.slug === slug);
  if (postData) {
    const title = `${postData.title} | TonyMac129`;
    const description =
      postData.content.slice(0, 100) +
      (postData.content.length > 100 ? "..." : "");
    return {
      title,
      description,
      authors: [{ name: "TonyMac129", url: "https://tonymac.net" }],
      openGraph: {
        title,
        description,
        url: `https://tonymac.net/blog/${slug}`,
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
  } else {
    redirect("/blog");
  }
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = posts.find((post) => post.slug === slug)!;
  const postIndex = posts.indexOf(postData);
  console.log(postIndex);

  return (
    <div className="flex gap-x-10 pl-5 sm:pl-6 lg:pl-36 pr-5 sm:pr-10 lg:pr-40 max-w-430 mx-auto">
      <Sidebar posts={posts} post={postData} />
      <div className="flex-1 py-10 flex flex-col gap-y-5 pb-15">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-blue-500 text-3xl mb-10 font-bold text-center">
            {postData.title}
          </h1>
          <div className="flex text-zinc-800 dark:text-zinc-300 justify-between font-bold">
            <span>By Tony</span>
            <span>{new Date(postData.date).toLocaleDateString()}</span>
          </div>
          <hr className="h-1 bg-zinc-800 dark:bg-zinc-300 rounded-full" />
        </div>
        <p className="text-zinc-800 dark:text-zinc-300">{postData.content}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-10 mt-10">
          {postIndex !== 0 && (
            <Btn
              text={posts[postIndex - 1].title}
              link={"/blog/" + posts[postIndex - 1].slug}
              left={true}
            >
              <FaCaretLeft size={25} />
            </Btn>
          )}
          {postIndex !== posts.length - 1 && (
            <Btn
              text={posts[postIndex + 1].title}
              link={"/blog/" + posts[postIndex + 1].slug}
            >
              <FaCaretRight size={25} />
            </Btn>
          )}
        </div>
      </div>
      {postData.headings && <Contents post={postData} />}
    </div>
  );
}

export default Page;
