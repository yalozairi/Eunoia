import React from "react";
import "./App.css";
//styling
import styles from "./styles";
//logo
import logo from "./logo.png";
//Notebook List
import NotebookList from "./components/NotebookList";

function App() {
  return (
    <div>
      <div style={styles.body}>
        <h1 style={styles.title}>Welcome to Eunoia</h1>
        <img style={styles.centeredImage} src={logo} alt="Eunoia Palm Tree" />
        <h4 style={styles.takeALook}>Take a look at our Notebooks!</h4>
        <NotebookList />
      </div>
    </div>
  );
}

export default App;
