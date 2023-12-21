import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className=" px-20 bg-yellow-400">
      <div className="py-3 flex flex-col md:flex-row justify-between items-center gap-2">
        <Link href="/" className="font-bold text-2xl">
          ZeeAnimeList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
