import * as Api from 'servis/Api';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MovieList/MoviesList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import Status from '../../servis/Const';

export default function Home() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    getTrendingMovies();

    function getTrendingMovies() {
      Api.getTrendingMovies()
        .then(data => {
          setMovies(data.results);
          setStatus(Status.RESOLVED);

          if (data.results.lenght === 0) {
            setError(
              'Sorry, there are no movies matching your search query. Please try again.'
            );
            setStatus(Status.REJECTED);
          }
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }
  }, []);

  return (
    <main>
      <div>
        {/* {isLoading && <Loader />} */}
        <ul>
          {status === Status.PENDING && <Loader />}
          {status === Status.REJECTED && <Error message={error} />}
          {status === Status.RESOLVED && <MoviesList movies={movies} />}
        </ul>
      </div>
    </main>
  );
}
