export default function Billboard(props: BillboardProps) {
  const { movieData } = props;
  return (
    <div className="absolute w-full -translate-y-28 -z-[1]">
      <video
        className="w-full 
        h-[97.5vh]
        object-cover
        brightness-60
        transition
        duration-150"
        autoPlay
        muted
        loop
        title={movieData.title}
        poster={movieData.thumbnailUrl}
        src={movieData.videoUrl}
      />
      <div className="flex flex-col absolute top-[40%] lg:top-[35%] left-[10%] text-wrap gap-5">
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
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
