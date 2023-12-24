import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 text-color-primary">
      {api.data?.map((anime) => (
        <Link
          href={`/anime/${anime.mal_id}`}
          className="cursor-pointer hover:text-color-accent"
          key={anime.mal_id}
        >
          <Image
            src={anime.images.webp.image_url}
            width={400}
            height={600}
            alt="image"
            className=" min-h-56 max-h-56 object-cover hover:scale-103"
            priority={true}
          />
          <div className="p-1">
            <h3 className=" font-bold text-xs truncate py-1">{anime.title}</h3>
            {anime.episodes && (
              <p className="text-xs">{`${anime.episodes} episodes`}</p>
            )}
            {anime.year && <p className="text-xs">{anime.year}</p>}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
