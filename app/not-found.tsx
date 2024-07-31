"use client";

import Logo from "@/components/Logo/Logo";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="w-full h-full text-white">
      <div className="absolute top-7 left-3">
        <Logo />
      </div>
      <h2 className="absolute lg:text-7xl font-bold font-sans top-48 left-20 text-wrap w-1/2 text-2xl">
        Something went wrong
      </h2>
      <p className="absolute lg:text-xl font-sans lg:bottom-72 left-20 w-1/2 text-sm bottom-96">
        The page you are looking for could not be found check if the url you
        have typed is correct!
      </p>
      <div className="flex justify-end">
        <img
          src="images/not-found.png"
          className="w-[45%] h-auto"
          alt="Page not found"
        />
      </div>
      <button
        className="absolute left-20 lg:bottom-52 rounded-md bg-white text-neutral-700 bottom-72"
        onClick={() => {
          router.back();
        }}
      >
        <div className="mx-3 my-1">Go back</div>
      </button>
    </div>
  );
}
