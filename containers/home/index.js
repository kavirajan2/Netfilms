import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";

function HomeContainer({selectedCategory}) {
  return <div>
    <FeaturedMovie movie={Movies.results[0]} />
    <Categories categories={Genres.genres.slice(0,5)}/>
    {selectedCategory.movies.length > 0 && (
        <MoviesSection
            title={Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id).name}
            movies={selectedCategory.movies} />
    )}
    <MoviesSection title="Trending" movies={Movies.results.slice(0, 5)} />
    <MoviesSection title="Fovourites" movies={Movies.results.slice(6, 11)} />
  </div>;
}


export default HomeContainer;