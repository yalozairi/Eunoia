import React from "react";
import "./App.css";
//styling
import styles from "./styles";
//data
import notebooks from "./notebooks";
//logo
import logo from "./logo.png";

function App() {
  const notebookList = notebooks.map((notebook) => (
    <div style={styles.notebook} key={notebook.id}>
      <img style={styles.item} src={notebook.img} alt={notebook.alt} />
      <p style={styles.shopText}>{notebook.name}</p>
      <p style={styles.price}>{notebook.price} Kwd</p>
    </div>
  ));

  return (
    <div>
    <div style={styles.body}>
      <h1 style={styles.title}>Welcome to Eunoia</h1>
      <img style={styles.centeredImage} src={logo} alt="Eunoia Palm Tree" />
      <h4 style={styles.takeALook}>Take a look at our Notebooks!</h4>
      <div style={styles.list}>{notebookList}</div>
    </div>
    </div>
  );
}

export default App;
