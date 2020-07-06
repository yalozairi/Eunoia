import React from "react";

//components
import NotebookItem from "./NotebookItem";

//style

import { ListWrapper } from "../styles";

const NotebookList = (props) => {
  const notebookList = props.notebooks.map((notebook) => (
    <NotebookItem
      notebook={notebook}
      key={notebook.id}
      deleteNotebook={props.deleteNotebook}
      selectNotebook={props.selectNotebook}
    />
  ));
  return <ListWrapper>{notebookList}</ListWrapper>;
};

export default NotebookList;
