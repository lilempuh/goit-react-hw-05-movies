import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = '6e83d9f645a92ff232bed757caa274bd';

export async function getTrendingMovies() {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  console.log(response.data);
  return response.data;
}

export async function getMovieById(id) {
  const response = await axios.get(`/3/movie/${id}?api_key=${API_KEY}`);
  return response.data;
}
export async function getMovieCredits(id) {
  const response = await axios.get(`/3/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
}
export async function getMovieReviews(id) {
  const response = await axios.get(`/3/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
}

export async function getMoviesByQuery(searchQuery) {
  const response = await axios.get(
    `/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false`
  );

  return response.data;
}
