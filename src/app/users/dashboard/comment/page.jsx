import HeaderMenu from "@/app/components/Utilities/HeaderMenu";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

const Comment = async () => {
  const user = await authUserSession();

  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="text-color-primary mb-8">
      <HeaderMenu title={"My Comments"} />
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
        {comments.map((comment) => {
          return (
            <Link
            key={comment.id}
              href={`/anime/${comment.anime_mal_id}`}
              className="relative border-2 text-sm border-color-accent text-color-dark bg-color-accent rounded p-2"
            >
              <p>{comment.anime_title}</p>
              <p className="text-xs">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Comment;
