"use server";

import type { CommentType, ActionResponseType } from "@/types/home";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createComment(
  comment: CommentType,
): Promise<ActionResponseType> {
  try {
    const newComment = await prisma.comment.create({ data: { ...comment } });
    const content = newComment.content;
    revalidatePath("/");
    return {
      success: true,
      message: "Comment created successfully: " + content,
    };
  } catch (error) {
    console.error("Error: " + error);
    return { success: false, error: "Failed to add comment, please try again" };
  }
}
