import Greeting from "./Greeting";
import Roles from "./Roles";
import Discord from "./Discord";

function Hero() {
  return (
    <div className="flex gap-x-20 flex-1 py-15 items-center">
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
      <Discord />
    </div>
  );
}

export default Hero;
