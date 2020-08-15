import React, { useState } from "react";
import Modal from "react-modal";
import { AuthModalStyle, CreateButtonStyled, AuthFormLabel } from "./styles";

//Stores
import authStore from "../../stores/authStore";

const SignInModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
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
          <h3 style={{ textAlign: "center" }}>Sign In</h3>
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
            <div className="col-12">
              <AuthFormLabel>Password*</AuthFormLabel>
              <input
                type="password"
                required
                className="form-control"
                name="password"
                onChange={handleChange}
                value={user.password}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              {/* cursor HOVER STYLES AND MAKE IT WORK */}
              <h6 onClick={closeModal}>Sign up?</h6>
            </div>
            <div className="col-6">
              <CreateButtonStyled className="btn float-right">
                Sign In
              </CreateButtonStyled>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SignInModal;
