import React, { useState } from "react";
import { Route, Switch } from "react-router";

//styling
import { GlobalStyle, LinkStyle } from "./styles";

//Notebook List
import NotebookList from "./components/list/NotebookList";

// components
import Details from "./components/details/Details";
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
//theme
import { ThemeProvider } from "styled-components";

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
    backgroundColor: "#121212",
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

  const toggleTheme = () => {
    const newTheme =
      currentTheme === "default"
        ? "white"
        : currentTheme === "white"
        ? "dark"
        : "default";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleNavTheme = (pickedTheme) => {
    setCurrentTheme(pickedTheme);
    localStorage.setItem("theme", pickedTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar
        toggleNavTheme={toggleNavTheme}
        setPickerShow={setPickerShow}
        pickerShow={pickerShow}
      />

      <Switch>
        <Route path="/notebooks/:notebookSlug">
          <Details />
        </Route>
        <Route path="/notebooks">
          <NotebookList />
        </Route>
        <Route path="/">
          <Home toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </Route>
      </Switch>
      {window.location.href === "http://localhost:3000/" ? (
        <LinkStyle to="/notebooks" onClick={() => setPickerShow(true)}>
          Take a look at our Notebooks!
        </LinkStyle>
      ) : null}
    </ThemeProvider>
  );
}

export default App;
