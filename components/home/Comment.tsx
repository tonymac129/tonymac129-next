import type { Comment } from "@/lib/generated/prisma/client";

function Comment({ comment }: { comment: Comment }) {
  return (
    <div className="bg-zinc-300 dark:bg-zinc-900 rounded-lg px-4 py-2 flex flex-col gap-y-3">
      <div className="flex flex-col gap-y-0.5">
        <div className="flex gap-x-3 items-center text-zinc-800 dark:text-zinc-300 text-sm">
          <h2 className="font-bold text-lg text-blue-500">
            {comment.username}
          </h2>
          {comment.email && (
            <>
              • <span>{comment.email}</span>
            </>
          )}
        </div>
        <div
          className="text-xs text-zinc-800 dark:text-zinc-300"
          title={comment.date.toISOString()}
        >
          {comment.date.toLocaleDateString()}
        </div>
      </div>
      <div className="text-zinc-800 dark:text-zinc-300">{comment.content}</div>
    </div>
  );
}

export default Comment;
