import React, { useState } from "react";
import NotebookModal from "../modals/NotebookModal";
import { HoverButton } from "./styles";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <HoverButton className="float-right" size="1.5em" onClick={openModal} />
      <NotebookModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddButton;
