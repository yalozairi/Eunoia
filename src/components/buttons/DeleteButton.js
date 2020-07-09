import React from "react";

//styles
import {DeleteButtonStyle} from "../../styles"

const DeleteButton = ({deleteNotebook, notebookId}) => {
 
    const handleDelete = () => {
        deleteNotebook(notebookId);

      };
  return <DeleteButtonStyle onClick={handleDelete}>Delete</DeleteButtonStyle>;
};

export default DeleteButton;