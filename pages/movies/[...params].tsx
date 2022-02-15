import React from "react";
import Seo from "../../components/Seo";

interface IMovieProps {
  adult: boolean;
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      original_country: string;
    },
  ];
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
}

interface IGetServerSideProps {
  params: string | string[];
  data: IMovieProps;
}

function Detail({ params, data: movie }: IGetServerSideProps) {
  const title = params[0];
  return (
    <div>
      <Seo title={title} />
      <h4>{movie.title}</h4>
      <h4>{movie.overview}</h4>
    </div>
  );
}

interface IServerSideParamsProps {
  params: {
    params: string | string[];
  };
}

export async function getServerSideProps({
  params: { params },
}: IServerSideParamsProps) {
  const id = params[1];
  const data = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();
  return {
    props: {
      params,
      data,
    },
  };
}

export default Detail;
