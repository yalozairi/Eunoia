import React from "react";

//data
import notebooks from "../notebooks";

//components
import NotebookItem from "./NotebookItem";

//style
import { ListWrapper } from "../styles";

const NotebookList = () => {
  const notebookList = notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} key={notebook.id} />
  ));
  return <ListWrapper>{notebookList}</ListWrapper>;
};

export default NotebookList;
