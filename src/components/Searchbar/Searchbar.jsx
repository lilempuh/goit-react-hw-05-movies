import {
  Searchbarr,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('searchWord');

  const [searchQuery, setSearchQuery] = useState(search || '');

  const handleInputChange = event => {
    const { value } = event.currentTarget;
    setSearchQuery(value.toLowerCase().trim());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Enter valid search');
    }
    onSubmit(searchQuery);
  };
  return (
    <Searchbarr>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SearchForm>
    </Searchbarr>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
