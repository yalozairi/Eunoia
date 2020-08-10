import React, { useState } from "react";
import Modal from "react-modal";
import { AuthModalStyle, CreateButtonStyled, AuthFormLabel } from "./styles";

//Stores
import authStore from "../../stores/authStore";

const SignUpModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
      username: "",
      email: "",
      fullName: "",
      password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={AuthModalStyle}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <h3 style={{ textAlign: "center" }}>Sign Up</h3>
          <div className="form-group row">
            <div className="col-12">
              <AuthFormLabel>Username*</AuthFormLabel>
              <input
                type="text"
                required
                className="form-control"
                name="username"
                onChange={handleChange}
                value={user.username}
              />
            </div>
            <div className="col-6">
              <AuthFormLabel>Email*</AuthFormLabel>
              <input
                type="email"
                required
                className="form-control"
                name="name"
                onChange={handleChange}
                value={user.name}
              />
            </div>
            <div className="col-6">
              <AuthFormLabel>Full Name</AuthFormLabel>
              <input
                type="text"
                className="form-control"
                name="fullName"
                onChange={handleChange}
                value={user.fullName}
              />
            </div>

          <div className="col-12">
              <AuthFormLabel>Password*</AuthFormLabel>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                value={user.password}
              />
            </div>
          </div>
          <CreateButtonStyled className="btn float-right">
            Sign Up
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default SignUpModal;
