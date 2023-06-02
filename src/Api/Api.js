import axios from 'axios';

const movieApi = axios.create({ baseURL: 'https://api.themoviedb.org/3/' });
export const moviesFetch = async () => {
  const response = await movieApi.get('trending/movie/day', {
    params: { api_key: '2797e847effb3f024c7d83afab7f550f' },
  });
  return response.data.results;
};

export const searchMoviesByName = async searchQuery => {
  const response = await movieApi.get('/search/movie', {
    params: {
      api_key: '2797e847effb3f024c7d83afab7f550f',
      query: searchQuery,
    },
  });
  return response.data.results;
};

export const searchMovieById = async id => {
  const response = await movieApi.get(`/movie/${id}`, {
    params: {
      api_key: '2797e847effb3f024c7d83afab7f550f',
    },
  });
  return response.data;
};

export const searchMovieByCast = async id => {
  const response = await movieApi.get(`/movie/${id}/credits`, {
    params: {
      api_key: '2797e847effb3f024c7d83afab7f550f',
    },
  });
  return response.data;
};

export const searchMovieByReviews = async id => {
  const response = await movieApi.get(`/movie/${id}/reviews`, {
    params: {
      api_key: '2797e847effb3f024c7d83afab7f550f',
    },
  });
  return response.data;
};
