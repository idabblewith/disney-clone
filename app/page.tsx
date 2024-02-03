import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <p>Disney</p>

      {/*  */}
      <div className="flex flex-col space-y-2 xl:mt-24">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" isVertical />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" isVertical />
        <MoviesCarousel movies={popularMovies} title="Popular" isVertical />
      </div>
      <Button>Click me!</Button>
    </main>
  );
}
