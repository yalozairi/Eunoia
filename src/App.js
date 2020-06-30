import React from "react";

//styling
import { Title, Logo, TakeALook, GlobalStyle } from "./styles";

//logo
import logo from "./logo.png";

//Notebook List
import NotebookList from "./components/NotebookList";

//theme
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    backgroundColor: "#EAE0CC",
    yellow: "#DAC732",
    darkBlue: "#11586A",
    lightBlue: "#82B3B7",
    white: "#FFFFFF",
    beige: "#EAE0CC",
    pink: "#C9ADA1",
    green: "#A0A083",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Title>Welcome to Eunoia!</Title>
      <Logo src={logo} alt="Eunoia Palm Tree" />
      <TakeALook>Take a look at our Notebooks!</TakeALook>
      <NotebookList />
    </ThemeProvider>
  );
}

export default App;
