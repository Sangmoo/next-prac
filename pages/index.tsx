import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import { useQuery } from "react-query";

const API_KEY = "bdf72cddc21a6224f6b97f73d6d0440c";

interface IGetMoviesProps {
  page: number;
  results: IMovieProps[];
  total_pages: number;
  total_results: number;
}

interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

function getMovies() {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  ).then((response) => response.json());
}

export default function Home() {
  const { data, isLoading } = useQuery<IGetMoviesProps>(
    ["movies", "popular"],
    getMovies,
  );

  return (
    <div>
      <Seo title="Home" />
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        data?.results.map((movie) => (
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        ))
      )}
    </div>
  );
}
