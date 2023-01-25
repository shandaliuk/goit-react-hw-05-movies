import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'f482511e908c5491e9f1e2c33a3c3db7';

export const getTrendingMovies = async () => {
  const result = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return result.data.results;
};

export const getMoviesByName = async query => {
  const result = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return result.data.results;
};

export const getSingleMovie = async id => {
  const result = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return result.data;
};

export const getCast = async id => {
  const result = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return result.data.cast;
};

export const getReviews = async id => {
  const result = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return result.data.results;
};
