import PropTypes from 'prop-types';

export default function ReviewsItem({ reviews }) {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{`Author: ${review.author}`}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

ReviewsItem.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
