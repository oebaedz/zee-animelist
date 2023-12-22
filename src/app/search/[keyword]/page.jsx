import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";
import { getAnime } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword)
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  // );
  const searchAnime = await getAnime('anime', `q=${decodedKeyword}`)

  return (
    <>
      <section>
        <Header
          title={`Hasil pencarian untuk ${decodedKeyword}`}
          linkTitle="Kembali"
          linkHref="/"
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
