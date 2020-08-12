import React, { useState } from "react";
import { observer } from "mobx-react";

//Styles
import { VendorTitle, VendorListWrapper } from "./styles";

//Stores
import vendorStore from "../../stores/vendorStore";
import authStore from "../../stores/authStore";

//Components
import VendorItem from "./VendorItem";
import SearchBar from "../searchBar";
import AddButton from "../buttons/AddButton";
import { Redirect } from "react-router";

const VendorList = () => {
  const [query, setQuery] = useState("");
  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to="/" />;

  const vendorList = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => <VendorItem vendor={vendor} key={vendor.id} />);
  return (
    <div className="container">
      <VendorTitle>These are our Vendors:</VendorTitle>
      <SearchBar setQuery={setQuery} />
      <VendorListWrapper className="row">{vendorList}</VendorListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(VendorList);
