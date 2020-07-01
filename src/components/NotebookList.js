import React, { useState } from "react";

//data
import notebooks from "../notebooks";

//components
import NotebookItem from "./NotebookItem";

//style

import { ListWrapper } from "../styles";

const NotebookList = () => {
  const [_notebooks, setNotebooks] = useState(notebooks);

  const deleteNotebook = (notebookId) => {
    const updatedNotebooks = _notebooks.filter(
      (notebook) => notebook.id !== +notebookId
    );
    setNotebooks(updatedNotebooks);
  };
  const notebookList = _notebooks.map((notebook) => (
    <NotebookItem
      notebook={notebook}
      key={notebook.id}
      deleteNotebook={deleteNotebook}
    />
  ));
  return <ListWrapper>{notebookList}</ListWrapper>;
};

export default NotebookList;
