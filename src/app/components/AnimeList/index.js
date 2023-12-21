import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
      {api.data.map((anime) => (
        <Link href={`/${anime.mal_id}`} className="cursor-pointer">
          <Image
            src={anime.images.webp.image_url}
            width={400}
            height={500}
            alt="image"
            className="w-full max-h-64 object-cover hover:scale-103"
          />
          <h3 className="font-bold text-sm p-2">{anime.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
