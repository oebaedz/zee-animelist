import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="px-20 lg:px-40 xl:px-60 bg-color-accent">
      <div className="py-3 flex flex-col md:flex-row justify-between items-center gap-2">
        <Link href="/" className="font-bold text-3xl">
          ZeeAnimeList
        </Link>
        <InputSearch />
        <UserActionButton/>
      </div>
    </header>
  );
};

export default Navbar;
