import type { CommentType } from "@/types/home";

function Comment({ comment }: { comment: CommentType }) {
  return (
    <div>
      <div>
        <h2>{comment.username}</h2>
        {comment.email && <div>{comment.email}</div>}
      </div>
      <div title={comment.date.toISOString()}>
        {comment.date.toLocaleDateString()}
      </div>
      <div>{comment.content}</div>
    </div>
  );
}

export default Comment;
