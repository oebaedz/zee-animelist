'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-2">
        <h3 className="font-bold text-4xl text-color-accent">NOT FOUND</h3>
        <div className="text-color-primary flex gap-3">
        <Link href="/" className=" hover:text-color-accent">
          Beranda
        </Link> | 
        <button onClick={() => router.back()} className=" hover:text-color-accent">
          Kembali
        </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
