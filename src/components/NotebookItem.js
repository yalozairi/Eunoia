import React from "react";

//styling
import { NotebookWrapper, DeleteButton } from "../styles";

const NotebookItem = (props) => {
  const notebook = props.notebook;
  const handleDelete = () => {
    props.deleteNotebook(notebook.id);
  };
  return (
    <div>
      <NotebookWrapper key={notebook.id}>
        <img
          src={notebook.img}
          alt={notebook.alt}
          onClick={() => props.selectNotebook(notebook.id)}
        />

        <p className="notebook-name">{notebook.name}</p>
        <p className="notebook-price">{notebook.price} Kwd</p>
      </NotebookWrapper>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </div>
  );
};
export default NotebookItem;
