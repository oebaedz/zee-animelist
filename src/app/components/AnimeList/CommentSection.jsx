"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const CommentSection = ({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}) => {
  const commentRef = useRef();
  const [isAdded, setIsAdded] = useState(false);
  const router = useRouter()
  const [placeholder, setPlaceholder] = useState()

  const handlePost = async (event) => {
    event.preventDefault();
    const comment = commentRef.current.value;

    const data = { anime_mal_id, user_email, username, comment, anime_title };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.isAdded) {
      setIsAdded(true);
      setPlaceholder('')
    }
    router.refresh()
    return
  };

  return (
    <div>
      {isAdded && <p className="text-color-primary py-1">Komentar dikirim...</p>}
      <textarea
        ref={commentRef}
        value={placeholder}
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

export default CommentSection;
