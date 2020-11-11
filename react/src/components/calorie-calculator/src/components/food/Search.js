import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ clearFoods, searchFoods, setAlert }) => {
  const [text, setText] = useState();

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something');
    } else {
      searchFoods(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='searchForm'>
        <input
          type='text'
          name='text'
          className='searchInput'
          placeholder='Search for a food product...'
          value={text}
          onChange={onChange}
        />
        <input type='submit' value='Search' className='search-button' />
        <button onClick={clearFoods} className='search-button search-clear'>
          Clear
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  searchFoods: PropTypes.func.isRequired,
  clearFoods: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
