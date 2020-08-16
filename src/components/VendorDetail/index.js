import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";

//Stores
import vendorStore from "../../stores/vendorStore";
import authStore from "../../stores/authStore";

//buttons
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";
import AddButton from "../buttons/AddButton";

//styles
import { DetailWrapper, DetailTop, LinkStyle } from "./styles";
import NotebookList from "../NotebookList";
import { observer } from "mobx-react";
import notebookStore from "../../stores/notebookStore";

const VendorDetail = () => {
  const { vendorSlug } = useParams();
  if (!authStore.user) return <Redirect to="/" />;

  const vendor = vendorStore.vendors.find(
    (_vendor) => _vendor.slug === vendorSlug
  );
  if (!vendor && authStore.user.role === "admin")
    return <Redirect to="/vendors" />;
  else if ((!vendor && authStore.user.role !== "admin") || !authStore.user)
    return <Redirect to="/" />;

  let notebooks = [];

  if (vendor.notebooks) {
    notebooks = vendor.notebooks
      .map((notebook) => notebookStore.getNotebookById(notebook.id))
      .filter((notebook) => notebook);
  }

  return (
    <div className>
      <DetailWrapper>
        <DetailTop>
          <h1>{vendor.name}</h1>
        </DetailTop>
        <div className="row">
          <div className="col-sm-5 col-xs-12">
            <DetailTop>
              <Link to="/vendors">
                <img src={vendor.image} alt={vendor.name} />
              </Link>
            </DetailTop>
          </div>
          <div className="col-sm-7 col-xs-12">
            <UpdateButton vendor={vendor} />
            <DeleteButton vendorId={vendor.id} />
          </div>
        </div>
      </DetailWrapper>
      <div className="container">
        <NotebookList notebooks={notebooks} vendorSlug={vendor.slug} />
        <AddButton vendor={vendor} />
      </div>
      {authStore.user.role !== "admin" ? null : (
        <LinkStyle to="/vendors">Back to the Vendors!</LinkStyle>
      )}
    </div>
  );
};

export default observer(VendorDetail);
