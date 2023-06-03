import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';
import image from 'images/notFound.jpeg';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies &&
        movies.map(({ id, name, title, poster_path }) => (
          <li key={id} className={css.item}>
            <Link
              to={`/movies/${id}`}
              state={{ location }}
              className={css.link__movies}
            >
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width="300"
                  height="400"
                />
              ) : (
                <img src={image} alt={name} width="300" height="400" />
              )}
              <span className={css.description}>{name || title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
