'use client'

import { useEffect, useState } from "react";
import AnimeList from "../components/AnimeList";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import Pagination from "../components/Utilities/Pagination";
import { getAnime } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const allPopular = await getAnime('top/anime', `page=${page}`)
    setTopAnime(allPopular)
  }

  useEffect(() => {
    fetchData()
  }, [page])


  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
    </>
  );
};

export default Page;
