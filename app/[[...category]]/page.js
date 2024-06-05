import React from 'react';
import HomeContainer from '@/containers/home';


import {getCategories,getSingleCategory, getPopularMovies, getTopRatedMovies} from "@/api/api";
import MoviesSection from "@/components/movies-section";

const fetchMovies = async (params) => {
    let selectedCategory = null;
    const [categories, popularMovies,
        topRatedMovies] = await Promise.all([
        getCategories(),
        getPopularMovies(),
        getTopRatedMovies()
    ]);

    if (params && params.category && params.category.length > 0) {
        let genreId = params.category[0];
        selectedCategory = await getSingleCategory(genreId);
    }

    return {categories, popularMovies, topRatedMovies, selectedCategory};
};

async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function HomePage({params}) {
    let {categories, popularMovies,
        topRatedMovies, selectedCategory} = await fetchMovies(params);

    return (
        <HomeContainer
            MovieCategories={categories}
            PopularMovies={popularMovies}
            TopRatedMovies={topRatedMovies}
            selectedCategory={
                selectedCategory ? <MoviesSection title="Selected Category" movies={selectedCategory.results.slice(0, 5)}/> : null
        }
        />
    );
}

export default HomePage;