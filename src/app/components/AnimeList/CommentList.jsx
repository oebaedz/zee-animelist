// import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import prisma from "@/libs/prisma";

const CommentList = async ({ anime_mal_id, anime_image }) => {
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id },
  });
  console.log(comments);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="flex flex-row text-xs gap-2 py-1">
            <img src={anime_image} alt={comment.username} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p>{comment.username}</p>
              <p>{comment.comment}</p>
              <p className=" text-color-secondary"><span className="hover:text-color-accent">Like</span> | <span className="hover:text-color-accent">Reply</span></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
