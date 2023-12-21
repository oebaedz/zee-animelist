import Link from "next/link";

const Header = ({ title, linkTitle, linkHref }) => {
  return (
    <div className="flex items-center justify-between py-3">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Link
        href={linkHref}
        className="md:text-md text-sm underline hover:text-yellow-500 transition-all"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
