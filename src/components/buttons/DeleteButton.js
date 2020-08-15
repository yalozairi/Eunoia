import React from "react";

//styles
import { DeleteButtonStyle } from "./styles";

//Stores
import notebookStore from "../../stores/notebookStore";
import vendorStore from "../../stores/vendorStore";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const DeleteButton = ({ notebookId, vendorId }) => {
  const handleDelete = async () => {
    if (vendorId) {
      vendorStore.deleteVendor(vendorId);
      authStore.user.vendorSlug = null;
      console.log(
        "handleDelete -> authStore.user.vendorSlug",
        authStore.user.vendorSlug
      );
    } else {
      await notebookStore.deleteNotebook(notebookId);
    }
  };
  return <DeleteButtonStyle onClick={handleDelete}>Delete</DeleteButtonStyle>;
};

export default observer(DeleteButton);
