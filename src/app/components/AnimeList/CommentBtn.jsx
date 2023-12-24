"use client";

import prisma from "@/libs/prisma";
import { useRef, useState } from "react";

const CommentBtn = ({ anime_mal_id, user_email, username }) => {
  const commentRef = useRef();

  const handlePost = async (event) => {
    event.preventDefault();
    const comment = commentRef.current.value

    const data = {anime_mal_id, user_email, username, comment}
    const response = await fetch ('/api/v1/comment', {
        method: "POST",
      body: JSON.stringify(data),
    })

    const postComment = await response.json()
  };

  return (
    <div>
      <textarea
        ref={commentRef}
        className="w-full p-2 text-color-dark rounded h-20"
      />
      <button
        onClick={handlePost}
        className="text-color-dark bg-color-accent px-4 py-2 mt-1 rounded "
      >
        Komentar
      </button>
    </div>
  );
};

export default CommentBtn;
