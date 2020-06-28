import React from "react";
import "./App.css";

const styles = {
  centeredText: { textAlign: "center" },
  centeredImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "20%",
  },
  title: { textAlign: "center", color: "purple" },
  notebook: { border: "purple solid", borderRadius: "10px", margin: "20px" },
  item: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100px",
    height: "100px",
  },
  list: { alignItems: "center", justifyContent: "center", display: "flex" },

  shopText: {
    fontSize: "small",
    textAlign: "center",
    marginLeft: "8px",
    marginRight: "8px",
  },

  price: {
    fontSize: "small",
    textAlign: "center",
    color: "purple",
    fontWeight: "bold",
  },
};

function App() {
  return (
    <div>
      <h1 style={styles.title}>Welcome to Eunoia</h1>

      <img
        style={styles.centeredImage}
        src="https://lh3.googleusercontent.com/proxy/2og8Lwa41TMf2bpGWSg1iC66neQQOJYI2cg3qXI82DfWdkYZdcmG-0TtqBp7on37CxF2AZUtFvCB5DWFRXEnpjl640OGKzA
        "
        alt="Eunoia palm tree"
      />
      <h4 style={{ textAlign: "center", color: "blue", marginTop: "30px" }}>
        Take a look at our notebooks!
      </h4>

      <div style={styles.list}>
        <div style={styles.notebook}>
          <img
            style={styles.item}
            src="https://images-na.ssl-images-amazon.com/images/I/61g1WIsaNjL._AC_SX425_.jpg"
            alt="notebook pile"
          />
          <p style={styles.shopText}>Get our seasonal notebooks</p>
          <p style={styles.price}>25Kwd</p>
        </div>
        <div style={styles.notebook}>
          <img
            style={styles.item}
            src="https://cdn.shopify.com/s/files/1/0831/9463/products/Notebooks_Notebook_Blossom-Pink_1200x1200.png?v=1571438791
        "
            alt="pink spiral notebook"
          />
          <p style={styles.shopText}>Here is our pink spiral notebook</p>
          <p style={styles.price}>15Kwd</p>
        </div>

        <div style={styles.notebook}>
          <img
            style={styles.item}
            src="https://previews.123rf.com/images/marietatiant/marietatiant1805/marietatiant180500102/100698986-realistic-notebook-vector-a-notebook-in-a-ruler-a-notebook-with-a-shadow-.jpg
        "
            alt="lifestyle notebook"
          />
          <p style={styles.shopText}>Here is our lifestyle notebook</p>
          <p style={styles.price}>10Kwd</p>
        </div>
      </div>
    </div>
  );
}

export default App;
