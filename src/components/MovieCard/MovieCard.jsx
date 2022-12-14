import propTypes from 'prop-types';
import {
  DivWrapper,
  ImageWrapper,
  MovHeader,
  Details,
  GenresWrapper,
  Genres,
} from './MovieCard.styled';

export default function MovieCard({ movie }) {
  return (
    <DivWrapper>
      <ImageWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </ImageWrapper>
      <div>
        <MovHeader>{movie.title ? movie.title : 'Movie'}</MovHeader>
        <Details>{`User score:   ${movie.vote_average} %`}</Details>
        <Details>{`Overview:  ${movie.overview}`}</Details>
        <GenresWrapper>
          Genres:
          {movie.genres &&
            movie.genres.map(({ id, name }) => (
              <Genres key={id}>{name}</Genres>
            ))}
        </GenresWrapper>
      </div>
    </DivWrapper>
  );
}

MovieCard.propTypes = {
  movie: propTypes.object.isRequired,
};
