"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MoviePage() {
  const [movie, setMovie] = useState<MovieData>({
    id: 0,
    title: "",
    description: "",
    videoUrl: "",
    thumbnailUrl: "",
    genre: "",
    duration: 0,
  });
  const { id }: { id: string } = useParams();

  useEffect(() => {
    const url: string = process.env.NEXT_PUBLIC_MOVIE_URL || "";

    axios
      .get(`${url}${id}`)
      .then((response) => {
        const movieData: MovieData = {
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          videoUrl: response.data.video_url,
          thumbnailUrl: response.data.thumbnai_url,
          genre: response.data.genre,
          duration: response.data.duration,
        };

        setMovie(movieData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    movie && (
      <div className="flex justify-center items-center w-1/2">
        <video
          className="w-full"
          autoPlay
          controls
          src={movie.videoUrl}
          title={movie.title}
          poster={movie.thumbnailUrl}
        />
      </div>
    )
  );
}
