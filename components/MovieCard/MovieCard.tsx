import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SlControlPlay, SlHeart, SlPlus } from "react-icons/sl";
export default function MovieCard(props: MovieData) {
  const router = useRouter();
  const { id, title, thumbnailUrl, duration } = props;
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleOnClick: () => void = () => {
    if (!id) {
      throw new Error("Movie id is incorrect please try again later");
    }
    router.push(`/movies/${id}`);
  };

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
      .put(`${url}${userId}?movieId=${id}`)
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          throw new Error("Error while updating favorite");
        }
        setFavorite((prevValue) => !prevValue);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_FAVORITE_URL || "";
    const userId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userId"))
      ?.split("=")[1];

    if (!userId) {
      router.push("/auth");
      return;
    }

    axios
      .get(`${url}${userId}?movieId=${id}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error while fetching favorite");
        }
        setFavorite(response.data.status);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="group w-[1/4]">
      <img
        className={`
                  h-[180px]
                  object-cover
                  rounded-md
                  transition-all
                  duration-150"
                  cursor-pointer
                  group-hover:translate-x-3
                  group-hover:-translate-y-3
                  group-hover:opacity-80`}
        src={thumbnailUrl}
        alt={title + " thumbnail"}
        onClick={handleOnClick}
      />
      <div
        className="opacity-0 
        flex-col
        flex
        gap-3
      bg-neutral-800
      w-full
      pl-2
      py-2
      rounded-md
      text-wrap
      group-hover:opacity-100 
      group-hover:translate-x-3
      group-hover:-translate-y-3
      transition-all 
      duration-150"
      >
        {!favorite && (
          <SlPlus
            className="w-5 h-5 absolute right-4 top-4 cursor-pointer"
            fill="white"
            onClick={handleToggleFavorite}
          />
        )}
        {favorite && (
          <SlHeart
            className="w-5 h-5 absolute right-4 top-4 cursor-pointer"
            fill="red"
            onClick={handleToggleFavorite}
          />
        )}
        <h2
          className="text-neutral-300 text-lg font-bold cursor-pointer"
          onClick={handleOnClick}
        >
          {title}
        </h2>
        <div className="flex justify-start gap-2">
          <div className="flex justify-center items-center bg-neutral-300 w-6 h-6 rounded-full">
            <SlControlPlay
              className="ml-0.5 cursor-pointer"
              onClick={handleOnClick}
            />
          </div>
          <p className="text-neutral-300">
            <b className="text-green-400">New</b> 2023
          </p>
        </div>
        <p className="text-neutral-300 text-xs">{duration} minutes</p>
      </div>
    </div>
  );
}
