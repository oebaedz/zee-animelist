"use client";

import { Star } from "@phosphor-icons/react";
import { useState } from "react";

const AddFavoriteBtn = ({ favorited, anime_mal_id, user_email, anime_title, anime_image }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddFav = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_title, anime_image };

    const response = await fetch("/api/v1/favorite", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const favorite = await response.json();
    if (favorite.isAdded) {
      setIsAdded(true);
    }
    return
  };

  return (
    <>
      
      <button
        onClick={handleAddFav}
        className={`${ !isAdded && !favorited ? 'bg-color-secondary text-color-primary border-color-primary' : 'bg-color-accent text-color-dark border-color-accent'} py-2 px-2 border rounded`}
      >
        <Star/>
      </button>
    </>
  );
};

export default AddFavoriteBtn;
