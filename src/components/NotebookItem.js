import React from "react";

//styling
import { NotebookWrapper } from "../styles";

const NotebookItem = (props) => {
  return (
    <NotebookWrapper key={props.notebook.id}>
      <img src={props.notebook.img} alt={props.notebook.alt} />
      <p className="notebook-name">{props.notebook.name}</p>
      <p className="notebook-price">{props.notebook.price} Kwd</p>
    </NotebookWrapper>
  );
};
export default NotebookItem;
