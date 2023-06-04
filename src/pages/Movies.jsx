import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from 'Api/Api';
import css from './Movies.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const fetchMovie = async () => {
    if (!query) {
      return;
    }
    const response = await searchMoviesByName(query);
    setMovies(response);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    fetchMovie();
  }, [query]);

  return (
    <div className={css.wrapperTitle}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your query here, please"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
