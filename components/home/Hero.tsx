import Greeting from "./Greeting";
import Roles from "./Roles";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex gap-x-20 flex-1 py-15">
      <div className="flex flex-col gap-y-7 flex-5">
        <div className="flex flex-col gap-y-3">
          <Greeting />
          <h1 className="text-4xl font-extrabold text-white">
            👋 Hey, I&apos;m <span className="text-blue-500">TonyMac129</span>
          </h1>
        </div>
        <p className="text-zinc-300 w-120">
          This is my personal website, where you can check out my projects,
          skillset, blog, and other stuff about me!
        </p>
        <Roles />
      </div>
      <div className="flex-2">
        <Image
          src="/logo.png"
          alt="TonyMac129 Logo"
          width={230}
          height={230}
          className="rounded-full border-2 border-zinc-800"
        />
      </div>
    </div>
  );
}

export default Hero;
