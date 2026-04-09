"use client";

import Link from "next/link";

type BtnProps = {
  text: string;
  onclick?: () => void;
  link?: string;
  primary?: boolean;
  children?: React.ReactNode;
  left?: boolean;
};

const btnStyles =
  "bg-transparent font-bold px-4 py-2 border-2 text-zinc-300 border-zinc-800 hover:border-zinc-700 rounded-lg cursor-pointer transition-colors duration-300 flex items-center gap-x-3 w-fit ";

function Btn({ text, onclick, link, primary, children, left }: BtnProps) {
  return link ? (
    <Link
      href={link}
      className={
        btnStyles +
        (primary
          ? "bg-white border-white! hover:bg-zinc-300 hover:border-zinc-300! text-zinc-800"
          : "")
      }
    >
      {(left && children) || ""}
      {text}
      {(!left && children) || ""}
    </Link>
  ) : (
    <button className={btnStyles} onClick={onclick}>
      {(left && children) || ""}
      {text}
      {(!left && children) || ""}
    </button>
  );
}

export default Btn;
