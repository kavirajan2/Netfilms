

const API_URL = "https://api.themoviedb.org/3/";

export const getPopularMovies = async () => {
    const response = await fetch(`${API_URL}movie/popular?api_key=${process.env.API_KEY}&page=1`);
    return response.json();
};

export const getTopRatedMovies = async () => {
    const response = await fetch(`${API_URL}movie/top_rated?api_key=${process.env.API_KEY}&page=1`);
    return response.json();
};
export const getCategories = async () => {
    const response = await fetch(`${API_URL}genre/movie/list?api_key=${process.env.API_KEY}`);
    return response.json();
}

export const getSingleCategory = async (genreId) => {
    const response = await fetch(`${API_URL}discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`);
    return response.json();
};

export const getMovieDetail = async (movieId) => {
    const response = await fetch(`${API_URL}movie/${movieId}?api_key=${process.env.API_KEY}`);
    return response.json();
}