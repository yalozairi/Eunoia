import React, { useState } from "react";

import NotebookModal from "../modals/NotebookModal";

//styles
import { UpdateButtonStyled } from "./styles";
import VendorModal from "../modals/VendorModal";

const UpdateButton = ({ notebook, vendor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      {notebook ? (
        <NotebookModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldNotebook={notebook}
        />
      ) : (
        <VendorModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldVendor={vendor}
        />
      )}
    </>
  );
};

export default UpdateButton;
