import React from "react";

//styles
import { DetailWrapper, DeleteButton } from "../styles";

const Details = (props) => {
  const notebook = props.notebook;

  return (
    <DetailWrapper>
      <h1>{notebook.name}</h1>
      <img
        src={notebook.img}
        alt={notebook.alt}
        onClick={() => props.setNotebook(null)}
      />
      <p className="description">{notebook.description}</p>
      <p className="price">{notebook.price} Kwd</p>
      <DeleteButton onClick={() => props.deleteNotebook(notebook.id)}>
        Delete
      </DeleteButton>
    </DetailWrapper>
  );
};

export default Details;
