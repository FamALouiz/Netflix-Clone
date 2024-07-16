"use client";
import { useEffect, useState } from "react";
import checkIfUserIsSignedInAndCookieSaved from "./handlers";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Check if user is signed in and cookie is saved with user id
    const userId = checkIfUserIsSignedInAndCookieSaved();
    if (userId) {
      setUserId(userId);
    } else {
      router.push("/auth");
    }
  }, []);
  return (
    <div className="w-full h-full">
      <Navbar />
    </div>
  );
}
