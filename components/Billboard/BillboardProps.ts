interface BillboardProps {
  movieData: MovieData;
}

interface MovieData {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: number;
}
