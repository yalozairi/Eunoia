import React, { useState } from "react";
import Modal from "react-modal";
import { ModalStyle, CreateButtonStyled } from "./styles";
//Stores
import vendorStore from "../../stores/vendorStore";

const VendorModal = ({ isOpen, closeModal, oldVendor }) => {
  const [vendor, setVendor] = useState(
    oldVendor ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setVendor({ ...vendor, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    vendorStore[oldVendor ? "updateVendor" : "createVendor"](vendor);
    closeModal();
  };

  const handleImage = (event) => {
    setVendor({ ...vendor, image: event.target.files[0] });
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
          <h3 style={{ textAlign: "center" }}>Create New Vendor</h3>
          <div className="form-group row">
            <div className="col-12">
              <label>Name</label>
              <input
                type="text"
                required
                className="form-control"
                name="name"
                onChange={handleChange}
                value={vendor.name}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              // required
              className="form-control"
              name="image"
              onChange={handleImage}
            />
          </div>
          <CreateButtonStyled className="btn float-right">
            {oldVendor ? "Update" : "Create"}
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default VendorModal;
