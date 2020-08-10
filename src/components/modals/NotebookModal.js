import React, { useState } from "react";
import Modal from "react-modal";
import { ModalStyle, CreateButtonStyled } from "./styles";
//Stores
import notebookStore from "../../stores/notebookStore";

const NotebookModal = ({ isOpen, closeModal, oldNotebook }) => {
  const [notebook, setNotebook] = useState(
    oldNotebook ?? {
      name: "",
      price: 0,
      description: "",
      img: "",
    }
  );

  const handleChange = (event) => {
    setNotebook({ ...notebook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notebookStore[oldNotebook ? "updateNotebook" : "createNotebook"](notebook);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={ModalStyle}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <h3 style={{ textAlign: "center" }}>Create New Notebook</h3>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                type="text"
                required
                className="form-control"
                name="name"
                onChange={handleChange}
                value={notebook.name}
              />
            </div>
            <div className="col-6">
              <label>Price</label>
              <input
                type="number"
                min="0"
                required
                className="form-control"
                name="price"
                onChange={handleChange}
                value={notebook.price}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              required
              className="form-control"
              name="description"
              onChange={handleChange}
              value={notebook.description}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="text"
              required
              className="form-control"
              name="img"
              onChange={handleChange}
              value={notebook.img}
            />
          </div>
          <CreateButtonStyled className="btn float-right">
            {oldNotebook ? "Update" : "Create"}
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default NotebookModal;
