import React from "react";

//styles
import { DeleteButtonStyle } from "../../styles";

//Stores
import notebookStore from "../../stores/notebookStore";
import vendorStore from "../../stores/vendorStore";

const DeleteButton = ({ notebookId, vendorId }) => {
  const handleDelete = () => {
    if (vendorId) {
      vendorStore.deleteVendor(vendorId);
    } else {
      notebookStore.deleteNotebook(notebookId);
    }
  };
  return <DeleteButtonStyle onClick={handleDelete}>Delete</DeleteButtonStyle>;
};

export default DeleteButton;
