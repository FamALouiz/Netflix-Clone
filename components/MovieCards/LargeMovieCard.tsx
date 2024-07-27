import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SlHeart, SlPlus } from "react-icons/sl";

export default function LargeMovieCard(props: { movieData: MovieData }) {
  const router = useRouter();
  const { movieData } = props;
  const [favorite, setFavorite] = useState<boolean>(true);

  const handleToggleFavorite: () => void = () => {
    const url = process.env.NEXT_PUBLIC_FAVORITES_URL || "";
    const userId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userId"))
      ?.split("=")[1];

    console.log(userId);

    if (!userId) {
      router.push("/auth");
      return;
    }

    axios
      .put(`${url}${userId}?movieId=${movieData.id}`)
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          throw new Error("Error while updating favorite");
        }
        setFavorite((prevValue) => !prevValue);
      })
      .catch((error) => console.log(error));
  };
  const handleOnClick = () => {
    router.push(`/movies/${movieData.id}`);
  };

  return (
    <div className="flex bg-neutral-700 my-3 mx-16 w-full h-full rounded-md gap-5">
      <div className="w-1/3 h-1/5">
        <img
          src={movieData.thumbnailUrl}
          alt={movieData.title}
          className="rounded-md cursor-pointer object-cover"
          onClick={handleOnClick}
        />
      </div>
      <div className="flex flex-col justify-around grow my-2 gap-2 w-3/4 text-white">
        <div className="flex w-full items-center">
          <h1
            className="text-xl font-bold hover:underline cursor-pointer w-fit"
            onClick={handleOnClick}
          >
            {movieData.title}
          </h1>
          <div className="flex flex-grow justify-end w-5 h-5 mx-5 cursor-pointer">
            {!favorite && (
              <SlPlus fill="white" onClick={handleToggleFavorite} />
            )}
            {favorite && <SlHeart fill="red" onClick={handleToggleFavorite} />}
          </div>
        </div>
        <div>
          <p className="underline">Description:</p>
          <p className=" text-sm text-ellipsis">{movieData.description}</p>
        </div>
        <div className="flex gap-2 text-gray-400">
          <p className="text-sm">Genres: </p>
          <p className="text-sm">{movieData.genre}</p>
        </div>
      </div>
    </div>
  );
}
