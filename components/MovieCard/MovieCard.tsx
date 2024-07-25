import { SlControlPlay } from "react-icons/sl";
export default function MovieCard(props: MovieData) {
  const { title, description, videoUrl, thumbnailUrl, genre, duration } = props;

  return (
    <div className="group w-[1/4]">
      <img
        className={`
                  h-[180px]
                  object-cover
                  rounded-md
                  transition-all
                  duration-150"
                  cursor-pointer
                  group-hover:translate-x-3
                  group-hover:-translate-y-3
                  group-hover:opacity-80`}
        src={thumbnailUrl}
        alt={title + " thumbnail"}
      />
      <div
        className="opacity-0 
        flex-col
        flex
        gap-3
      bg-neutral-800
      w-full
      pl-2
      py-2
      rounded-md
      text-wrap
      group-hover:opacity-100 
      group-hover:translate-x-3
      group-hover:-translate-y-3
      transition-all 
      duration-150"
      >
        <h2 className="text-neutral-300 text-lg font-bold">{title}</h2>
        <div className="flex justify-start gap-2">
          <div className="flex justify-center items-center bg-neutral-300 w-6 h-6 rounded-full">
            <SlControlPlay className="ml-0.5 cursor-pointer" />
          </div>
          <p className="text-neutral-300">
            <b className="text-green-400">New</b> 2023
          </p>
        </div>
        <p className="text-neutral-300 text-xs">{duration} minutes</p>
      </div>
    </div>
  );
}
