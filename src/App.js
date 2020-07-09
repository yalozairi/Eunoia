import React, { useState } from "react";
import {Route, Switch} from "react-router"


//styling
import {GlobalStyle, LinkStyle} from "./styles";

//Notebook List
import NotebookList from "./components/NotebookList";

// Data
import notebooks from "./notebooks";
import Details from "./components/Details";

import Home from "./components/Home"

import NavBar from "./components/NavBar"
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
  const [currentTheme, setCurrentTheme] = useState("default");
  const [_notebooks, setNotebooks] = useState(notebooks);

  const deleteNotebook = (notebookId) => {
    const updatedNotebooks = _notebooks.filter(
      (notebook) => notebook.id !== +notebookId
    );
    setNotebooks(updatedNotebooks);

  };
  const toggleTheme = () => {
    currentTheme === "default"
      ? setCurrentTheme("white")
      : currentTheme === "white"
      ? setCurrentTheme("dark")
      : setCurrentTheme("default");
  };

  const toggleNavTheme = (pickedTheme) => {
  setCurrentTheme(pickedTheme);
  };

  // const selectNotebook = (notebookId) => {
  //   const selectedNotebook = notebooks.find(
  //     (notebook) => notebook.id === notebookId
  //   );
  //   setNotebook(selectedNotebook);
  // };

 
  
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar toggleNavTheme={toggleNavTheme} />
     
      <Switch>
      <Route path="/notebooks/:notebookSlug">
      <Details
          notebooks={_notebooks}
          deleteNotebook={deleteNotebook}
        />
        </Route>
      
     <Route path="/notebooks">
     <NotebookList
        deleteNotebook={deleteNotebook}
        notebooks={_notebooks}
        
      />

     </Route>
     <Route path="/">
      <Home toggleTheme={toggleTheme} currentTheme={currentTheme}/>

      </Route>
     </Switch>
     <LinkStyle to="/notebooks">Take a look at our Notebooks!</LinkStyle>
     
  
    </ThemeProvider>
  );
}

export default App;
