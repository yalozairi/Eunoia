import React from "react";

//styles
import {DeleteButtonStyle} from "../../styles"

//Stores
import notebookStore from "../../stores/notebookStore"

const DeleteButton = ({notebookId}) => {
 
    const handleDelete = () => {
      notebookStore.deleteNotebook(notebookId);

      };
  return <DeleteButtonStyle onClick={handleDelete}>Delete</DeleteButtonStyle>;
};

export default DeleteButton;