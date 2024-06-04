import React from "react";

import CategoriesLoading from "@/components/categories/loading";
import FeaturedMovieLoading from "@/components/featured-movie/loading";
function Loading() {
  return <div>
    <FeaturedMovieLoading />
    <CategoriesLoading />
  </div>;
}
export default Loading;