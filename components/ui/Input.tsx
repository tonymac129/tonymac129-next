"use client";

type InputProps = {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  width?: number;
};

function Input({ placeholder, value, setValue, width }: InputProps) {
  return (
    <input
      type="text"
      style={{ width: width + "px" }}
      className="bg-zinc-900 outline-none rounded-lg px-4 py-2 text-zinc-300"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Input;
