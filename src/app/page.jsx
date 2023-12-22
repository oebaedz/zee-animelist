import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnime, getNestedAnime } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnime('top/anime', 'limit=10')
  let recomAnime = await getNestedAnime('recommendations/anime', 'entry')
  recomAnime = { data: recomAnime.slice(0,10) }

  return (
    <>
      <section>
        <Header
          title="Anime Terpopuler"
          linkTitle="Lihat Semua"
          linkHref="/popular"
        />
        <AnimeList api={topAnime} />
      </section>
      <hr className="my-3"/>
      <section>
        <Header
          title="Rekomendasi Anime"
          linkTitle="Lihat Semua"
          linkHref="/popular"
        />
        <AnimeList api={recomAnime} />
      </section>
    </>
  );
};

export default Page;
