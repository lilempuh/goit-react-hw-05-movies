import { Item, LinkTo } from './MovieItem.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function MovieItem({ id, title }) {
  const location = useLocation();
  return (
    <Item key={id}>
      <LinkTo to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </LinkTo>
    </Item>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
