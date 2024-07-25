import MovieCard from "../MovieCard/MovieCard";

export default function Trendingboard(props: TrendingboardProp) {
  const { movieData } = props;
  return (
    <div className="flex flex-col w-full h-1/2 justify-start my-5 gap-4">
      <h2 className="text-white text-3xl font-bold font-sans ml-5">
        Trending Now
      </h2>
      <div className="flex justify-center gap-2 w-full">
        {movieData.map((movie: any) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
}
