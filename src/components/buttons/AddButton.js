import React, { useState } from "react";
import NotebookModal from "../modals/NotebookModal";
import VendorModal from "../modals/VendorModal";
import { HoverButton } from "../../styles";

const AddButton = ({ vendor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <HoverButton className="float-right" size="1.5em" onClick={openModal} />
      {vendor ? (
        <NotebookModal
          vendor={vendor}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      ) : (
        <VendorModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AddButton;
