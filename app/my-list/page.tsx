"use client";

import { useEffect, useState } from "react";
import checkIfUserIsSignedInAndCookieSaved from "../handlers";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "@/components/Navbar/Navbar";
import LargeMovieCard from "@/components/MovieCards/LargeMovieCard";

export default function MyListPage() {
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
      <div className="flex">
        <div className="mt-28">
          <h1 className="text-2xl font-bold text-white mx-16">My List</h1>
          <div className="flex flex-col justify-start w-[90%]">
            {favoriteMoveData.map((data) => {
              return <LargeMovieCard movieData={data} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
