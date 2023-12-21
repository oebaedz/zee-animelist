import Link from "next/link";
import AnimeList from "./components/AnimeList";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const anime = await response.json()

  return (
    <div className="px-20">
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-bold">Popular Anime</h1>
        <Link href='/popular' className="md:text-xl text-md underline hover:text-yellow-500 transition-all">Lihat semua</Link>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className="shadow-xl rounded-lg">
              <AnimeList title={data.title} image={data.images.webp.image_url} id={data.mal_id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home