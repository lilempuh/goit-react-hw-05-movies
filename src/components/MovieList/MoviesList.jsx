import MovieItem from '../MovieItem/MovieItem';
import PropTypes from 'prop-types';
import { List } from './MoviesList.styled';

export default function MoviesList({ movies }) {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <MovieItem key={id} id={id} title={title} poster={poster_path} />
      ))}
    </List>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
