import PropTypes from 'prop-types';

export default function CastItem({ casts }) {
  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
            alt={cast.name}
          />

          <p>{cast.name}</p>
          <p>{cast.caracter}</p>
        </li>
      ))}
    </ul>
  );
}

CastItem.propTypes = {
  casts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
