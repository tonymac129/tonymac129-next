import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Hero from "@/components/layout/Hero";
import SignOut from "@/components/admin/SignOut";

export const metadata: Metadata = {
  title: "Admin | TonyMac129",
  description:
    "This is the admin page of my personal website, where I can sign in to manage my projects, skills, blog posts, and more. This page is useless to you because of obvious reasons.",
  authors: [{ name: "TonyMac129", url: "https://tonymac.net" }],
  openGraph: {
    title: "Admin | TonyMac129",
    description:
      "This is the admin page of my personal website, where I can sign in to manage my projects, skills, blog posts, and more. This page is useless to you because of obvious reasons.",
    url: "https://tonymac.net/admin",
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

async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/signin");

  return (
    <div>
      <Hero title="Admin">
        Welcome back, Tony! Update your skills, projects, and more here!
      </Hero>
      <div className="h-30 mb-15 flex flex-col gap-y-5 justify-center items-center">
        <h2 className="text-blue-500 font-bold text-3xl text-center">
          More stuff coming soon to the admin page!
        </h2>
        <SignOut />
      </div>
    </div>
  );
}

export default Page;
