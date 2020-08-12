import React from "react";
import { Link } from "react-router-dom";

//Styles
import { NavBarLogo, NavStyle, NavItemStyle } from "../../styles";
import { UserStyled, LogOutStyled } from "./styles";

//Logo
import logo from "../../logo.png";
import SignUpButton from "../buttons/SignUpButton";
import SignInButton from "../buttons/SignInButton";

//Stores
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const NavBar = ({ toggleNavTheme, setPickerShow, pickerShow }) => {
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
                  Hello,
                  <p className="usernameStyled">{authStore.user.username}</p>
                </p>
              </UserStyled>
              <LogOutStyled
                onClick={authStore.signout}
                size="2em"
                color="red"
              />
            </>
          ) : (
            <>
              <SignInButton />
              <SignUpButton />
            </>
          )}

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
