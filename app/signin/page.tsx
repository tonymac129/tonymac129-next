import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";
import SignIn from "./SignIn";

export const metadata: Metadata = {
  title: "Sign In | TonyMac129",
  description:
    "This is the sign in page of my personal website, and only my email account is authorized to log in to access the admin page and manage the site's content and data. This page is useless to you because of obvious reasons.",
  authors: [{ name: "TonyMac129", url: "https://tonymac.net" }],
  openGraph: {
    title: "Sign In | TonyMac129",
    description:
      "This is the sign in page of my personal website, and only my email account is authorized to log in to access the admin page and manage the site's content and data. This page is useless to you because of obvious reasons.",
    url: "https://tonymac.net/signin",
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
      <Hero title="Admin Sign In">
        Umm... what are you doing here, only I am allowed to sign in to my own
        website &gt;:)
      </Hero>
      <div className="h-30 mb-15 flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  );
}

export default Page;
