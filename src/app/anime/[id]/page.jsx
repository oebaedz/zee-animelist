import AddFavoriteBtn from "@/app/components/AnimeList/AddFavoriteBtn";
import Genres from "@/app/components/Genres";
import HeaderMenu from "@/app/components/Utilities/HeaderMenu";
import VideoPlayer from "@/app/components/Utilities/VideoPlayer";
import { getAnime } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const { data } = await getAnime(`anime/${id}`);
  const user = await authUserSession();
  const favorite = await prisma.favorite.findFirst({
    where: { user_email: user?.email, anime_mal_id: id  }
  })

  return (
    <>
      <HeaderMenu title={"Anime Detail"} />
      <div className="flex flex-col md:flex-row pt-6 gap-4">
        <Image
          src={data.images.webp.image_url}
          alt={data.title}
          width={300}
          height={300}
          className="object-cover w-full md:max-h-96 min-w-56"
        />
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-color-accent font-medium text-2xl">
              {data.title}
            </h3>
            { user && !favorite && <AddFavoriteBtn anime_mal_id={id} user_email={user?.email} /> }
          </div>
          <div className="flex gap-4 flex-wrap">
            {data.genres.map((genre, index) => (
              <Genres
                key={genre?.mal_id}
                index={index}
                name={genre?.name}
                length={data?.genres?.length}
              />
            ))}
          </div>

          <div className="flex flex-col text-sm md:flex-row gap-2 md:gap-6 text-color-primary my-2">
            <div>Rank: {data?.rank}</div>
            <div>Episodes: {data?.episodes}</div>
            <div>Duration: {data?.duration}</div>
            <div>Score: {data?.score}</div>
          </div>

          <div className="pt-8 text-sm text-color-primary space-y-2 pr-4">
            <div>OVERVIEW:</div>
            <div className="lg:line-clamp-4">{data.synopsis}</div>
          </div>

          <VideoPlayer youtubeId={data?.trailer.youtube_id} />
        </div>
      </div>
    </>
  );
};

export default Page;
