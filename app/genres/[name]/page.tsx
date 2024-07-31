"use client";

import { useParams } from "next/navigation";

export default function GenreByNamePage() {
  const { name } = useParams();

  return <div>{name}</div>;
}
