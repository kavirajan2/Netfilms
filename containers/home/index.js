import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";


function HomeContainer({MovieCategories = {}, PopularMovies = {}, TopRatedMovies = {}, selectedCategory = {}}) {
    return <div>
        <FeaturedMovie movie={TopRatedMovies.results[0]}/>
        <Categories categories={MovieCategories.genres.slice(0, 5)}/>
        {selectedCategory}

        <MoviesSection title="Popular Movies" movies={PopularMovies.results.slice(0, 5)}/>
        <MoviesSection title="Top Rated Movies" movies={TopRatedMovies.results.slice(0, 5)}/>

    </div>;
}


export default HomeContainer;