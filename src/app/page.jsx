import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnime } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnime('top/anime', 'limit=10')

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
    </>
  );
};

export default Page;
