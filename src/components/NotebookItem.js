import React from "react";
import {Link} from "react-router-dom";

//buttons
import DeleteButton from "./buttons/DeleteButton"

//styling
import { NotebookWrapper } from "../styles";

const NotebookItem = ({notebook, deleteNotebook}) => {
  
  return (
    <div>
      <NotebookWrapper className="col-lg-6 col-md-6 col-sm-6" key={notebook.id}>
       <Link to={`/notebooks/${notebook.slug}`}>
         <img
          src={notebook.img}
          alt={notebook.alt}
        /></Link> 

        <p className="notebook-name">{notebook.name}</p>
        <p className="notebook-price">{notebook.price} Kwd</p>
      </NotebookWrapper>
      <DeleteButton notebookId={notebook.id} deleteNotebook={deleteNotebook}/>
    </div>
  );
};
export default NotebookItem;
