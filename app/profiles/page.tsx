"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  router.push("/auth");

  return <></>;
}
