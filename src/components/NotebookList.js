import React from "react";
//styling
import styles from "../styles";
//data
import notebooks from "../notebooks";
//components
//Notebooks
import NotebookItem from "./NotebookItem";

const NotebookList = () => {
  
  const notebookList = notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} key={notebook.id} />
  ));
  return <div style={styles.list}>{notebookList}</div>;
};

export default NotebookList;
