import React, { useState } from "react";
import { observer } from "mobx-react";

//Styling
import { GlobalStyle, LinkStyle } from "./styles";

//Components
import Navbar from "./components/navBar";
import Routes from "./components/Routes";

//Theme
import { ThemeProvider } from "styled-components";

//Stores
import authStore from "./stores/authStore";
import vendorStore from "./stores/vendorStore";
import notebookStore from "./stores/notebookStore";

const theme = {
  default: {
    backgroundColor: "#EAE0CC",
    mainColor: "black",
    yellow: "#bdac2d",
    darkBlue: "#11586A",
    lightBlue: "#82B3B7",
    white: "#FFFFFF",
    beige: "#EAE0CC",
    pink: "#C9ADA1",
    green: "#A0A083",
    button: "#e7e7e7",
    buttonText: "black",
    purple: "purple",
    search: "white",
    searchText: "#82B3B7",
    searchBorder: "black",
  },

  white: {
    backgroundColor: "#FFFFFF",
    mainColor: "black",
    yellow: "#DAC732",
    darkBlue: "#11586A",
    lightBlue: "#82B3B7",
    white: "#FFFFFF",
    beige: "#EAE0CC",
    pink: "#C9ADA1",
    green: "#A0A083",
    button: "#121212",
    buttonText: "white",
    purple: "purple",
    search: "#EAE0CC",
    searchText: "grey",
    searchBorder: "black",
  },
  dark: {
    backgroundColor: "#212121",
    mainColor: "white",
    yellow: "#DAC732",
    darkBlue: "#177d96",
    lightBlue: "#82B3B7",
    white: "#FFFFFF",
    beige: "#EAE0CC",
    pink: "#C9ADA1",
    green: "#A0A083",
    button: "#EAE0CC",
    buttonText: "black",
    purple: "purple",
    search: "#EAE0CC",
    searchText: "grey",
    searchBorder: "white",
  },
};

function App() {
  const savedTheme = localStorage.getItem("theme") ?? "default";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);
  const [pickerShow, setPickerShow] = useState(
    window.location.href === "http://localhost:3000/" ? false : true
  );

  const toggleNavTheme = (pickedTheme) => {
    setCurrentTheme(pickedTheme);
    localStorage.setItem("theme", pickedTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Navbar
        toggleNavTheme={toggleNavTheme}
        setPickerShow={setPickerShow}
        pickerShow={pickerShow}
      />

      {vendorStore.loading || notebookStore.loading ? (
        <h1>loading...</h1>
      ) : (
        <Routes currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      )}
      {window.location.href === "http://localhost:3000/" &&
        authStore.user &&
        authStore.user.role === "admin" && (
          <LinkStyle to="/notebooks" onClick={() => setPickerShow(true)}>
            Take a look at our Notebooks!
          </LinkStyle>
        )}
    </ThemeProvider>
  );
}

export default observer(App);
