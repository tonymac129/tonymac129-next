import { projectData, miscData } from "@/lib/projects";
import Image from "next/image";
import Search from "./Search";
import Link from "next/link";

const navLinkStyles =
  "text-zinc-300 px-2 py-1 sm:px-4 sm:py-2 hover:bg-zinc-900 rounded-lg transition-colors duration-300";
const allResults = [...projectData, ...miscData];

function Nav() {
  return (
    <nav className="border-b-2 border-b-zinc-800 px-5 sm:px-10 lg:px-40 py-4 sticky top-0 z-10 bg-zinc-950/75 backdrop-blur-md">
      <div className="max-w-350 mx-auto w-full relative flex justify-center items-center">
        <Link
          href="/"
          className="text-white text-xl font-bold absolute left-0 flex gap-x-3 items-center"
        >
          <Image src="/logo.png" alt="TonyMac129 Logo" width={45} height={45} />
          <span className="hidden md:block">TonyMac129</span>
        </Link>
        <div className="flex gap-x-1 lg:gap-x-3">
          <Link href="/projects" className={navLinkStyles}>
            Projects
          </Link>
          <Link href="/skills" className={navLinkStyles}>
            Skills
          </Link>
          <Link href="/blog" className={navLinkStyles}>
            Blog
          </Link>
          <Link href="/about" className={navLinkStyles}>
            About
          </Link>
        </div>
        <div className="absolute right-0 hidden md:block">
          <Search results={allResults} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
