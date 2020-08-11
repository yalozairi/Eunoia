import React, { useState } from "react";
import { observer } from "mobx-react";

//components
import NotebookItem from "./NotebookItem";
import SearchBar from "../searchBar";

//style
import { ListWrapper, NotebooksTitle } from "../../styles";

const NotebookList = ({ notebooks = [] }) => {
  const [query, setQuery] = useState("");

  const notebookList = notebooks
    .filter((notebook) =>
      notebook.name.toUpperCase().includes(query.toUpperCase())
    )
    .map((notebook) => <NotebookItem notebook={notebook} key={notebook.id} />);
  return (
    <div className="container">
      <NotebooksTitle>These are our Notebooks!</NotebooksTitle>
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{notebookList}</ListWrapper>
    </div>
  );
};

export default observer(NotebookList);
