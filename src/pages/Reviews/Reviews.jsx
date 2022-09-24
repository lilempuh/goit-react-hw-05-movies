import * as Api from 'servis/Api';
import Status from '../../servis/Const';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';

export default function Reviews() {
  const { movieId } = useParams();
  const [status, setStatus] = useState(Status.IDLE);
  const [reviews, setReviews] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);

    getMovieReviews();

    function getMovieReviews() {
      Api.getMovieReviews(movieId)
        .then(data => {
          setReviews(data.results);
          setStatus(Status.RESOLVED);

          if (data.results.length === 0) {
            setReviews([]);
            setError('We do not have any reviews for this movie.');
            setStatus(Status.REJECTED);
          }
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }
  }, [movieId]);

  return (
    <div>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <Error message={error} />}
      {status === Status.RESOLVED && <ReviewsItem reviews={reviews} />}
    </div>
  );
}
