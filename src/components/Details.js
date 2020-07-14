import React from "react";
import {observer} from "mobx-react"
import {Link, useParams, Redirect} from "react-router-dom";
 
//Stores
import notebookStore from "../stores/notebookStore"

//buttons
import DeleteButton from "./buttons/DeleteButton"
import UpdateButton from "./buttons/UpdateButton"

//styles
import { DetailWrapper} from "../styles";

const Details = () => {
 
  const {notebookSlug} = useParams();


const notebook = notebookStore.notebooks.find((notebook) => notebook.slug === notebookSlug);
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
     
      
<UpdateButton notebook={notebook}/>
      <DeleteButton notebookId={notebook.id} />
    </DetailWrapper>
  );
};

export default observer(Details);
