import Genres from "@/app/components/Genres"
import { getAnime } from "@/app/libs/api-libs"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const { data } = await getAnime(`anime/${id}`)
    return (
        <>
            <div className="flex flex-col md:flex-row pt-6 gap-4">
                <Image src={data.images.webp.image_url} alt={data.title} width={300} height={300} className="object-cover w-full md:max-h-96 min-w-56" />
                <div>
                    <h3 className="text-color-accent font-medium text-2xl mb-4">{data.title}</h3>
                    <div className="flex gap-4 flex-wrap" >
                        {data.genres.map((genre, index) => (
                            <Genres key={genre?.mal_id} index={index} name={genre?.name} length={data?.genres?.length} />
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
                </div>
            </div>
        </>
    )
}

export default Page