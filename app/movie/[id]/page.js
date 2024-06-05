import React from 'react';

import MovieContainer from '@/containers/movie';
import {getMovieDetail} from "@/api/api";
import {notFound} from "next/navigation";

async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function MoviePage({params}) {
    const movieDetail = await getMovieDetail(params.id);

    if (!movieDetail)
        notFound();


    return <MovieContainer movie={movieDetail}/>;
}
export default MoviePage;