"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;

    if (!keyword) { return }

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        placeholder="Nama anime..."
        className="px-4 py-1 rounded-lg"
        ref={searchRef}
        onKeyUp={handleSearch}
      />
      <button
        className="px-4 py-2 bg-color-dark text-color-accent rounded-lg"
        onClick={handleSearch}
      >
        Cari
      </button>
    </div>
  );
};

export default InputSearch;
