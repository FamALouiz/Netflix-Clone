"use client";
import { useEffect, useState } from "react";
import checkIfUserIsSignedInAndCookieSaved from "./handlers";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Billboard from "@/components/Billboard/Billboard";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [randomMovie, setRandomMovie] = useState(0);

  useEffect(() => {
    // Check if user is signed in and cookie is saved with user id
    const userId = checkIfUserIsSignedInAndCookieSaved();
    if (userId) {
      setUserId(userId);
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
        .then((data) => {
          setMovieData(data);

          // Setting a random movie to show on the billboard
          setRandomMovie(Math.floor(Math.random() * data.length));
        })
        .catch((error) => console.error(error));
    } else {
      router.push("/auth");
    }
  }, []);
  return (
    randomMovie && (
      <>
        <div>
          {/* Billboard component */}
          <Billboard movieData={movieData[randomMovie]} />

          {/* Navbar component */}
          <Navbar />
        </div>

        {/* Main content */}
        <div className="relative">
          <h1 className="text-white">Test</h1>
        </div>
      </>
    )
  );
}
