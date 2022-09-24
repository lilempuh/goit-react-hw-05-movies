import * as Api from 'servis/Api';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import MoviesList from '../../components/MovieList/MoviesList';
import Status from '../../servis/Const';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState(Status.IDLE);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const searchQuery = searchParams.get('searchWord');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setStatus(Status.PENDING);
    setMovies([]);

    getMoviesByQuery();

    function getMoviesByQuery() {
      Api.getMoviesByQuery(searchQuery)
        .then(data => {
          setMovies(data.results);
          setStatus(Status.RESOLVED);

          if (data.results.length === 0) {
            setMovies([]);
            setError('Sorry, there are no movies matching your search query.');
            setStatus(Status.REJECTED);
          }
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }
  }, [searchQuery]);

  const handleFormSubmit = searchQuery => {
    setSearchParams({ searchWord: searchQuery });
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <Error message={error} />}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
    </div>
  );
}
