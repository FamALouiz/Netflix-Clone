interface BillboardProps {
  movieData: MovieData;
}

interface MovieData {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: number;
}
