"use client";

type FilterProps = {
  index: number;
  text: string;
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
};

function Filter({ index, text, filter, setFilter }: FilterProps) {
  return (
    <div
      className={`rounded-full border-2 border-zinc-500 dark:border-zinc-800 cursor-pointer px-4 py-2 text-zinc-800 dark:text-zinc-300 transition-colors duration-300 ${filter === index ? "bg-zinc-400 dark:bg-zinc-800" : "hover:bg-zinc-300 dark:hover:bg-zinc-900"}`}
      onClick={() => setFilter(index === filter ? null : index)}
    >
      {text}
    </div>
  );
}

export default Filter;
