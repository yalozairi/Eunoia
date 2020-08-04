import React from "react";

//Styles
import { VendorWrapper } from "./styles";
import { Link } from "react-router-dom";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

const VendorItem = ({ vendor }) => {
  return (
    <div>
      {" "}
      <VendorWrapper key={vendor.id}>
        <Link to={`/vendors/${vendor.slug}`}>
          <img src={vendor.image} alt={vendor.name} />
        </Link>
        <p className="vendor-name">{vendor.name}</p>
      </VendorWrapper>
      <UpdateButton vendor={vendor} />
      <DeleteButton vendorId={vendor.id} />
    </div>
  );
};

export default VendorItem;
