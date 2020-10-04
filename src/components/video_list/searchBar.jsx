import React from 'react';

const SearchBar = () => {
  return (
    <form>
      <span>
        <i className="fab fa-youtube" />
        Youtube
      </span>
      <input type="text" placeholder="Search..." />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
