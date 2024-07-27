"use client";

import LargeMovieCard from "@/components/MovieCards/LargeMovieCard";
import Navbar from "@/components/Navbar/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import checkIfUserIsSignedInAndCookieSaved from "../handlers";

export default function MyListPage() {
  const [ascending, setAscending] = useState(true);
  const router = useRouter();
  const [favoriteMoveData, setFavoriteMoveData] = useState<MovieData[]>([]);

  useEffect(() => {
    let mounted: boolean = false;

    const userId = checkIfUserIsSignedInAndCookieSaved();

    if (!userId) {
      router.push("/auth");
    }

    const url = process.env.NEXT_PUBLIC_FAVORITES_URL || "";

    axios
      .get(`${url}${userId}`)
      .then((response) => {
        const data = response.data;
        let movieUrl = process.env.NEXT_PUBLIC_MOVIE_URL || "";

        for (let favorite of data.favorites) {
          axios
            .get(movieUrl + favorite)
            .then((response) => {
              const data = response.data;
              const movieData: MovieData = {
                id: data.id,
                title: data.title,
                description: data.description,
                videoUrl: data.video_url,
                thumbnailUrl: data.thumbnail_url,
                genre: data.genre,
                duration: data.duration,
              };
              return movieData;
            })
            .then((data) => {
              if (!mounted) setFavoriteMoveData((prev) => [...prev, data]);
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));

    return () => {
      mounted = true;
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-28">
        <div className="flex justify-between ml-16 mr-24">
          <h1 className="text-2xl font-bold text-white ">My List</h1>
          <div
            className="flex text-white items-center gap-2 cursor-pointer"
            onClick={() => setAscending((prev) => !prev)}
          >
            <h1>Sort</h1>
            {ascending ? (
              <FaSortAlphaUp className="w-5 h-5" />
            ) : (
              <FaSortAlphaDown className="w-5 h-5" />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-start w-[90%] transition-height duration-150">
          {favoriteMoveData
            .sort((a, b) =>
              ascending
                ? a.title.localeCompare(b.title)
                : -a.title.localeCompare(b.title)
            )
            .map((data) => {
              return <LargeMovieCard movieData={data} key={data.id} />;
            })}
        </div>
      </div>
    </>
  );
}
