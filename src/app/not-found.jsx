import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <h3 className="font-bold text-4xl text-color-accent">NOT FOUND</h3>
        <Link href="/" className="text-color-primary hover:text-color-accent">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default Page;
