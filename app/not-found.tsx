"use client";

import Btn from "@/components/ui/Btn";
import Image from "next/image";

function NotFound() {
  return (
    <div className="flex flex-col items-center py-10 justify-center gap-y-15">
      <div className="relative flex flex-col items-center">
        <Image
          src="/lazy.png"
          alt="Oh no, even the 404 image is not found, the site is seriously broken :)"
          width={200}
          height={200}
        />
        <h1
          className="text-9xl text-blue-500 font-extrabold text-center absolute -bottom-10"
          style={{ textShadow: "0px 0px 20px #4f7eff" }}
        >
          404
        </h1>
      </div>
      <p className="w-170 text-zinc-300 mt-5">
        Uhhh, looks like that page doesn&apos;t exist... I&apos;m probably being
        lazy again and not bothering to finish this duct-taped portfolio site.
        Or maybe you typed the address wrong. Who knows, just submit an issue{" "}
        <a
          href="https://github.com/tonymac129/tonymac129-next/issues"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          here
        </a>{" "}
        if you want to. Meanwhile you can play this game below that doesn&apos;t
        exist and will probably never be added because why not
      </p>
      <div className="flex gap-x-10">
        <Btn text="Home" link="/" primary />
        <Btn text="Back" onclick={() => history.back()} />
      </div>
    </div>
  );
}

export default NotFound;
