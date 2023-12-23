import HeaderMenu from "@/app/components/Utilities/HeaderMenu"
import Image from "next/image"
import Link from "next/link"

const Favorite = () => {
  return (
    <section className="text-color-primary">
        <HeaderMenu title={'My Favorite'}/>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          <Link href='/anime' className="relative border-2 border-color-accent">
            <Image src='' alt="" height={250} width={250} />
            <div className="absolute bottom-0 font-light text-center w-full bg-color-accent text-color-dark">Judul Anime</div>
          </Link>
        </div>
    </section>
  )
}

export default Favorite