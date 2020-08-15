import React from "react";

//styles
import { Title, Logo, ThemeButton, TakeALook } from "../../styles";

//logo
import logo from "../../logo.png";
import authStore from "../../stores/authStore";
import { Redirect } from "react-router";
import { observer } from "mobx-react";

const Home = ({ toggleTheme, currentTheme }) => {
  if (authStore.user && authStore.user.vendorSlug) {
    return <Redirect to={`/vendors/${authStore.user.vendorSlug}`} />;
  }

  return (
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
    </>
  );
};

export default observer(Home);
