import * as Api from 'servis/Api';
import Status from '../../servis/Const';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import CastItem from 'components/CastItem/CastItem';

export default function Cast() {
  const { movieId } = useParams();
  const [status, setStatus] = useState(Status.IDLE);
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setStatus(Status.PENDING);
    setCasts([]);

    getMovieCredits();

    function getMovieCredits() {
      Api.getMovieCredits(movieId)
        .then(data => {
          setCasts(data.cast);
          setStatus(Status.RESOLVED);

          if (data.length === 0) {
            setCasts([]);
            setError('No foun infirmation.');
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
      {status === Status.RESOLVED && <CastItem casts={casts} />}
    </div>
  );
}
