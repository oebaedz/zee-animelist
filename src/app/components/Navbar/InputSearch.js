"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search/${searchRef.current.value}`);
  };

  return (
    <div className="flex gap-2">
      <input
        placeholder="Nama anime..."
        className="px-2 py-1 rounded-lg"
        ref={searchRef}
      />
      <button
        className="p-2 bg-gray-900 text-yellow-400 rounded-lg"
        onClick={handleSearch}
      >
        Cari
      </button>
    </div>
  );
};

export default InputSearch;
