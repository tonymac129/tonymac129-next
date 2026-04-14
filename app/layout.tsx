import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/layout/Nav";
import Animate from "@/components/layout/Animate";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Home | TonyMac129",
  description:
    "Hey, I'm TonyMac129 — fullstack web developer studying STEM and computer science at TJHSST. Find my projects, skills, about, blog, contact info, and more here on my portfolio website!",
  authors: [{ name: "TonyMac129", url: "https://tonymac.net" }],
  openGraph: {
    title: "Home | TonyMac129",
    description:
      "Hey, I'm TonyMac129 — fullstack web developer studying STEM and computer science at TJHSST. Find my projects, skills, about, blog, contact info, and more here on my portfolio website!",
    url: "https://tonymac.net",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class">
          <Nav />
          <Animate>{children}</Animate>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
