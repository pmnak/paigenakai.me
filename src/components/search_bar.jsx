import React, { useState } from 'react';

function SearchBar(props) {
  const [searchterm, setSearchTerm] = useState('');
  const onInputChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <div id="search-bar">
      <input onChange={onInputChange} value={searchterm} placeholder="search" />
    </div>
  );
}

export default SearchBar;
