import React, { useState } from "react";

//styling
import { Title, Logo, TakeALook, GlobalStyle, ThemeButton } from "./styles";

//logo
import logo from "./logo.png";

//Notebook List
import NotebookList from "./components/NotebookList";

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
  },
};

function App() {
  let [currentTheme, setCurrentTheme] = useState("default");

  const toggleTheme = () => {
    currentTheme === "default"
      ? setCurrentTheme("white")
      : currentTheme === "white"
      ? setCurrentTheme("dark")
      : setCurrentTheme("default");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Title>Welcome to Eunoia!</Title>
      <ThemeButton onClick={toggleTheme}>
        Switch to{" "}
        {currentTheme === "default"
          ? "White"
          : currentTheme === "white"
          ? "Dark"
          : "Default"}{" "}
        Theme!
      </ThemeButton>
      <Logo src={logo} alt="Eunoia Palm Tree" />
      <TakeALook>Take a look at our Notebooks!</TakeALook>
      <NotebookList />
    </ThemeProvider>
  );
}

export default App;
