import React from "react";

//style
import { SearchBarStyle } from "../../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyle
      type="search"
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder=" Search our Notebooks..."
    />
  );
};

export default SearchBar;
