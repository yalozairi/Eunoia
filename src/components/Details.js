import React from "react";
import {Link, useParams, Redirect} from "react-router-dom";
 

//buttons
import DeleteButton from "./buttons/DeleteButton"

//styles
import { DetailWrapper} from "../styles";

const Details = ({notebooks, deleteNotebook}) => {
 
  const {notebookSlug} = useParams();


const notebook = notebooks.find((notebook) => notebook.slug === notebookSlug);
if (!notebook) return <Redirect to="/notebooks" />
  return (
    <DetailWrapper>
      <h1>{notebook.name}</h1>
      <Link to="/notebooks">
      <img
        src={notebook.img}
        alt={notebook.alt}
        
      />
      </Link>
      <p className="description">{notebook.description}</p>
      <p className="price">{notebook.price} Kwd</p>
     
      <DeleteButton notebookId={notebook.id} deleteNotebook={deleteNotebook}/>
    </DetailWrapper>
  );
};

export default Details;
