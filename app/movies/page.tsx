"use client";

import LargeMovieCard from "@/components/MovieCards/LargeMovieCard";
import Navbar from "@/components/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";

export default function MoviesHomePage() {
  const [ascending, setAscending] = useState(true);
  const [moviesData, setMoviesData] = useState<MovieData[]>([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_MOVIES_URL || "";

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        const moviesData = data.map((data: any) => ({
          id: data.id,
          title: data.title,
          description: data.description,
          videoUrl: data.video_url,
          thumbnailUrl: data.thumbnail_url,
          genre: data.genre,
          duration: data.duration_in_minutes,
        }));
        return moviesData;
      })
      .then((data) => setMoviesData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />

      <div className="mt-24">
        <div className="flex justify-between ml-16 mr-24">
          <h1 className="text-2xl font-bold text-white ">All Movies</h1>
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
        <div className="w-[90%]">
          {moviesData
            .sort((a, b) =>
              ascending
                ? a.title.localeCompare(b.title)
                : -a.title.localeCompare(b.title)
            )
            .map((movie: MovieData) => (
              <LargeMovieCard key={movie.id} movieData={movie} />
            ))}
        </div>
      </div>
    </div>
  );
}
