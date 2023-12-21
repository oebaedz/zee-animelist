import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" px-20 bg-yellow-400">
      <div className="py-3 flex flex-col md:flex-row justify-between items-center gap-2">
        <Link href="/" className="font-bold text-2xl">
          ZeeAnimeList
        </Link>
        <input placeholder="Cari anime..." className="px-2 py-1 rounded-lg" />
      </div>
    </header>
  );
};

export default Navbar;
