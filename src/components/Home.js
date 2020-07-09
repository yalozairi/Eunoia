import React from "react";

//styles
//styling
import { Title, Logo, ThemeButton, TakeALook } from "../styles";

//logo
import logo from "../logo.png";

const Home = ({toggleTheme, currentTheme}) => {
 
    return( 
    <>
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
 <TakeALook>We sell lifestyle Notebooks!</TakeALook>
  </>  )
}


export default Home