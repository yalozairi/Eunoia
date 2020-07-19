import React, { useState } from "react";

import NotebookModal from "../modals/NotebookModal";

//styles
import { UpdateButtonStyled } from "../../styles";

//Stores
// import notebookStore from "../../stores/notebookStore"

const UpdateButton = ({ notebook }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <NotebookModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldNotebook={notebook}
      />
    </>
  );
};

export default UpdateButton;
