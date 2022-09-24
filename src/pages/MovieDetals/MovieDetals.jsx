import * as Api from 'servis/Api';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Status from '../../servis/Const';
import { Container } from '../../components/App/App.styled';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { BackGoButton, Links, AddInfo, Info } from './MovieDetals.styled';
import MovieCard from '../../components/MovieCard/MovieCard';

export default function MovieDetals() {
  const { movieId } = useParams();
  const location = useLocation();

  const [status, setStatus] = useState(Status.IDLE);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setStatus(Status.PENDING);
    setMovie([]);

    getMovieById();

    function getMovieById() {
      Api.getMovieById(movieId)
        .then(data => {
          setMovie(data);
          setStatus(Status.RESOLVED);

          if (data.length === 0) {
            setMovie([]);
            setError('Sorry,page is not found.');
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
    <main>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <Error message={error} />}
      {status === Status.RESOLVED && (
        <Container>
          <section>
            <BackGoButton to={backLinkHref}>{`<-- Go back`}</BackGoButton>
            <MovieCard movie={movie} />
          </section>
          <section>
            <AddInfo>
              <Info>Additional Info</Info>
              <Links
                to={`/movies/${movieId}/cast`}
                state={{ from: location?.state?.from }}
              >
                | Cast |
              </Links>

              <Links
                to={`/movies/${movieId}/reviews`}
                state={{ from: location?.state?.from }}
              >
                | Reviews |
              </Links>
            </AddInfo>
          </section>
          <Outlet />
        </Container>
      )}
    </main>
  );
}
