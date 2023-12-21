import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, image, id }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image
        src={image}
        width={400}
        height={500}
        alt="image"
        className="w-full max-h-64 object-cover hover:scale-103"
      />
      <h3 className="font-bold text-sm p-4">{title}</h3>
    </Link>
  );
};

export default AnimeList;
