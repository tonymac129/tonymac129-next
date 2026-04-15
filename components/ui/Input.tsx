"use client";

import { useRef } from "react";
import { FaXmark } from "react-icons/fa6";

type InputProps = {
  placeholder: string;
  value: string;
  setValue:
    | React.Dispatch<React.SetStateAction<string>>
    | ((value: string) => void);
  width?: number;
  className?: string;
};

function Input({ placeholder, value, setValue, width, className }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClear() {
    setValue("");
    inputRef.current?.focus();
  }

  return (
    <div
      style={{ width: width + "px" }}
      className="relative flex items-center text-zinc-800 dark:text-zinc-300 max-w-full! mx-auto"
    >
      <input
        type="text"
        className={
          "bg-zinc-300 dark:bg-zinc-900 outline-none rounded-lg px-4 py-2 max-w-full " +
          className
        }
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />
      {value.length > 0 && (
        <FaXmark
          onClick={handleClear}
          className="absolute right-4 cursor-pointer"
          title="Clear"
          size={20}
        />
      )}
    </div>
  );
}

export default Input;
