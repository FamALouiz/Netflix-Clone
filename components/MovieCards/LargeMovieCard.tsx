import { useRouter } from "next/navigation";

export default function LargeMovieCard(props: { movieData: MovieData }) {
  const router = useRouter();
  const { movieData } = props;

  const handleOnClick = () => {
    router.push(`/movies/${movieData.id}`);
  };
  return (
    <div className="flex bg-neutral-700 my-3 mx-16 w-full h-full rounded-md gap-5">
      <div className="w-1/3 h-1/5">
        <img
          src={movieData.thumbnailUrl}
          alt={movieData.title}
          className="rounded-md cursor-pointer object-cover"
          onClick={handleOnClick}
        />
      </div>
      <div className="flex flex-col justify-around grow my-2 gap-2 w-3/4 text-white">
        <h1
          className="text-xl font-bold hover:underline cursor-pointer w-fit"
          onClick={handleOnClick}
        >
          {movieData.title}
        </h1>
        <div>
          <p className="underline">Description:</p>
          <p className=" text-sm text-ellipsis">{movieData.description}</p>
        </div>
        <div className="flex gap-2 text-gray-400">
          <p className="text-sm">Genres: </p>
          <p className="text-sm">{movieData.genre}</p>
        </div>
      </div>
    </div>
  );
}
