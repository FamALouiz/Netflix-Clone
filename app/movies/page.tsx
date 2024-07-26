"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function MoviesHomePage() {
  const [moviesData, setMoviesData] = useState<MovieData[]>([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_MOVIES_URL || "";

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        const moviesData = data.map((data: any) => ({
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
      {moviesData.map((movie: MovieData, idx: number) => (
        <div key={idx}>
          <p className="text-white">
            {movie.title} - {movie.description}
            {movie.videoUrl} - {movie.thumbnailUrl} - {movie.genre} -{" "}
            {movie.duration}
          </p>
          <br />
        </div>
      ))}
    </div>
  );
}
