import { SlQuestion } from "react-icons/sl";

export default function Billboard(props: BillboardProps) {
  const { movieData } = props;
  return (
    <div className="relative w-full -translate-y-28">
      <video
        className="w-full 
        h-[95vh]
        object-cover
        brightness-60
        transition
        duration-150"
        autoPlay
        muted
        loop
        disablePictureInPicture
        title={movieData.title}
        poster={movieData.thumbnailUrl}
        src={movieData.videoUrl}
      />
      <div className="flex flex-col absolute top-[40%] left-[10%] text-wrap gap-5">
        <div className="w-1/4">
          <h2 className="text-white text-2xl lg:text-6xl font-bold">
            {movieData.title}
          </h2>
        </div>
        <div className="w-1/2">
          <p className="text-white text-sm lg:text-xl font-semibold">
            {movieData.description}
          </p>
        </div>
        <div className="w-1/4">
          <button
            className="bg-white opacity-60 text-black text-sm lg:text-lg font-semibold py-2 px-4 rounded-lg mt-6 hover:opacity-100"
            onClick={() => {
              console.log("Test");
            }}
          >
            <div className="flex items-center gap-2">
              Learn more
              <SlQuestion className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
