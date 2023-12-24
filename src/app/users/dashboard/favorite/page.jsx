import HeaderMenu from "@/app/components/Utilities/HeaderMenu";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

const Favorite = async () => {
  const user = await authUserSession();

  const favorite = await prisma.favorite.findMany({
    where: { user_email: user.email },
  });

  console.log({ favorite });

  return (
    <section className="text-color-primary">
      <HeaderMenu title={"My Favorite"} />
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
        {favorite.map((fav) => {
          return (
            <Link
              href={`/anime/${fav.anime_mal_id}`}
              className="relative border-2 border-color-accent"
            >
              <Image src={fav.anime_image} alt={fav.anime_title} height={250} width={250} className="w-full"/>
              <div className="absolute bottom-0 font-light text-sm md:text-md p-2 truncate text-center w-full bg-color-accent text-color-dark">
                {fav.anime_title}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Favorite;
