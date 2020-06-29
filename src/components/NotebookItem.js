import React from "react";
//styling
import styles from "../styles";

const NotebookItem = (props) => {
  return (
    <div style={styles.notebook} key={props.notebook.id}>
      <img
        style={styles.item}
        src={props.notebook.img}
        alt={props.notebook.alt}
      />
      <p style={styles.shopText}>{props.notebook.name}</p>
      <p style={styles.price}>{props.notebook.price} Kwd</p>
    </div>
  );
};
export default NotebookItem;
