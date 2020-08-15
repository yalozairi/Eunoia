import React, { useState } from "react";
import { Link } from "react-router-dom";

//Styles
import { NavBarLogo, NavStyle, NavItemStyle } from "../../styles";
import { UserStyled, LogOutStyled } from "./styles";

//Logo
import logo from "../../logo.png";

//Components
import VendorModal from "../modals/VendorModal";
import SignUpButton from "../buttons/SignUpButton";
import SignInButton from "../buttons/SignInButton";

//Stores
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const NavBar = ({ toggleNavTheme, setPickerShow, pickerShow }) => {
  //LOG OUT AND HIDE PICKER
  const logOut = () => {
    authStore.signout();
    setPickerShow(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <NavStyle className="navbar navbar-expand">
      <Link
        className="navbar-brand"
        to="/"
        onClick={() => setPickerShow(false)}
      >
        <NavBarLogo alt="logo" src={logo} />
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {authStore.user && authStore.user.role === "admin" && (
            <>
              <NavItemStyle
                className="nav-item"
                to="/vendors"
                onClick={() => setPickerShow(true)}
              >
                Vendors
              </NavItemStyle>
              <NavItemStyle
                className="nav-item"
                to="/notebooks"
                onClick={() => setPickerShow(true)}
              >
                Notebooks
              </NavItemStyle>
            </>
          )}
          {authStore.user ? (
            <>
              <UserStyled>
                <p className="helloStyled">
                  Hello, {""}
                  <span className="usernameStyled">
                    {authStore.user.username}
                  </span>
                </p>
              </UserStyled>
              <LogOutStyled onClick={logOut} size="2em" color="red" />
            </>
          ) : (
            <>
              <SignInButton />
              <SignUpButton />
            </>
          )}
          {authStore.user &&
            authStore.user.role !== "admin" &&
            !authStore.user.vendorSlug && (
              <button onClick={openModal}>Create your Vendor!</button>
            )}
          <VendorModal isOpen={isOpen} closeModal={closeModal} />
          {pickerShow === false ? null : (
            <form>
              <select
                defaultValue=""
                onChange={(event) => toggleNavTheme(event.target.value)}
              >
                <option value="" disabled>
                  Change Themes
                </option>
                <option value="default">Default Theme</option>
                <option value="white">White Theme</option>
                <option value="dark">Dark Theme</option>
              </select>
            </form>
          )}
        </div>
      </div>
    </NavStyle>
  );
};

export default observer(NavBar);
