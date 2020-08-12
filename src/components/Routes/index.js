import React from "react";
import { Route, Switch } from "react-router";

//Notebook List
import NotebookList from "../NotebookList";

//Stores
import notebookStore from "../../stores/notebookStore";

// components
import NotebookDetails from "../NotebookDetails";
import Home from "../Home";
import VendorList from "../VendorList";
import VendorDetail from "../VendorDetail";

const Routes = ({ currentTheme, setCurrentTheme }) => {
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

  return (
    <Switch>
      <Route path="/vendors/:vendorSlug">
        <VendorDetail />
      </Route>
      <Route path="/vendors">
        <VendorList />
      </Route>
      <Route path="/notebooks/:notebookSlug">
        <NotebookDetails />
      </Route>
      <Route path="/notebooks">
        <NotebookList notebooks={notebookStore.notebooks} />
      </Route>
      <Route path="/">
        <Home toggleTheme={toggleTheme} currentTheme={currentTheme} />
      </Route>
    </Switch>
  );
};

export default Routes;
