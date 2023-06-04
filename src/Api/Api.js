import axios from 'axios';

const api_key = '2797e847effb3f024c7d83afab7f550f';

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: api_key,
  },
});

export const moviesFetch = async () => {
  const response = await movieApi.get('trending/movie/day');
  return response.data.results;
};

export const searchMoviesByName = async searchQuery => {
  const response = await movieApi.get('/search/movie', {
    params: { query: searchQuery },
  });
  return response.data.results;
};

export const searchMovieById = async id => {
  const response = await movieApi.get(`/movie/${id}`);
  return response.data;
};

export const searchMovieByCast = async id => {
  const response = await movieApi.get(`/movie/${id}/credits`);
  return response.data;
};

export const searchMovieByReviews = async id => {
  const response = await movieApi.get(`/movie/${id}/reviews`);
  return response.data;
};
