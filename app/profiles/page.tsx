"use client";

import { useEffect } from "react";
import checkIfUserIsSignedInAndCookieSaved from "../handlers";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  useEffect(() => {
    const userId = checkIfUserIsSignedInAndCookieSaved();
    if (!userId) {
      router.push("/auth");
    } else {
      router.push(`/profiles/${userId}`);
    }
  }, []);

  return <></>;
}
