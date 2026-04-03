"use client";

type BtnProps = {
  text: string;
  onclick?: () => void;
};

function Btn({ text, onclick }: BtnProps) {
  return (
    <button
      className="font-bold px-4 py-2 bg-white text-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-300 transition-colors duration-300"
      onClick={onclick}
    >
      {text}
    </button>
  );
}

export default Btn;
