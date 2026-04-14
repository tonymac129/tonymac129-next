import Greeting from "./Greeting";
import Roles from "./Roles";
import Discord from "./Discord";

function Hero() {
  return (
    <div className="max-w-350 mx-auto w-full flex flex-col md:flex-row! gap-10 flex-1 py-10 md:py-15 overflow-hidden">
      <div className="flex flex-col gap-y-7 flex-2">
        <div className="flex flex-col gap-y-3">
          <Greeting />
          <h1 className="text-4xl font-extrabold text-black dark:text-white">
            👋 Hey, I&apos;m <span className="text-blue-500">TonyMac129</span>
          </h1>
        </div>
        <p className="text-zinc-800 dark:text-zinc-300 w-full max-w-120">
          This is my personal website, where you can check out my projects,
          skillset, blog, and other stuff about me!
        </p>
        <Roles />
      </div>
      <Discord />
    </div>
  );
}

export default Hero;
