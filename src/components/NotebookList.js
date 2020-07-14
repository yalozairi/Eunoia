import React, {useState} from "react";
import { observer } from "mobx-react";

//components
import NotebookItem from "./NotebookItem";
import SearchBar from "./SearchBar"

//Stores
import notebookStore from "../stores/notebookStore"

//style
import { ListWrapper, NotebooksTitle } from "../styles";
import AddButton from "./buttons/AddButton";

const NotebookList = () => {
  const [query, setQuery] = useState("");
  
 
  const notebookList = notebookStore.notebooks.filter((notebook) => notebook.name.toUpperCase().includes(query.toUpperCase())).map((notebook) => (
    <NotebookItem
      notebook={notebook}
      key={notebook.id}       
    />
  ));
  return (

  <div className="container">
<NotebooksTitle>These are our Notebooks!</NotebooksTitle>
  <SearchBar setQuery={setQuery}/>
  <ListWrapper className="row">{notebookList}</ListWrapper>
  <AddButton/>
  </div>
  );
};

export default observer(NotebookList);
