"use client";
import { useParams } from "next/navigation";

export default function MoviePage() {
  const { id } = useParams();

  return <div className="text-white">{id}</div>;
}
