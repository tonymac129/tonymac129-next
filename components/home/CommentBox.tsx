"use client";

import type { CommentType } from "@/types/home";
import { SubmitEvent, useState } from "react";
import Input from "../ui/Input";
import Btn from "../ui/Btn";

const labelStyles =
  "flex flex-col gap-y-1 text-zinc-800 dark:text-zinc-300 w-fit text-sm";

function CommentBox() {
  const [comment, setComment] = useState<CommentType>({
    id: crypto.randomUUID(),
    username: "",
    content: "",
    date: new Date(),
  });

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
  }

  return (
    <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <label className={labelStyles}>
          Username
          <Input
            placeholder="Definitely not Tony"
            value={comment.username}
            setValue={(value: string) =>
              setComment({ ...comment, username: value })
            }
            className="text-base"
          />
        </label>
        <label className={labelStyles}>
          Email (optional)
          <Input
            placeholder="hi@example.com"
            value={comment.email || ""}
            setValue={(value: string) =>
              setComment({ ...comment, email: value })
            }
            className="text-base"
          />
        </label>
      </div>
      <label className={labelStyles + " w-full"}>
        Content
        <textarea
          className="bg-zinc-300 dark:bg-zinc-900 outline-none rounded-lg px-4 py-2 text-zinc-800 dark:text-zinc-300 resize-y text-base"
          placeholder="Wow this website is so cool totally"
          value={comment.content}
          onChange={(e) => setComment({ ...comment, content: e.target.value })}
        ></textarea>
      </label>
      <Btn text="Submit" onclick={() => console.log("submit")} primary />
    </form>
  );
}

export default CommentBox;
