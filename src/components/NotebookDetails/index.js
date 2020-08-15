import React from "react";
import { observer } from "mobx-react";
import { Link, useParams, Redirect } from "react-router-dom";

//Stores
import notebookStore from "../../stores/notebookStore";

//buttons
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

//styles
import { DetailWrapper, DetailTop, LinkStyle } from "../../styles";
import authStore from "../../stores/authStore";

const Details = () => {
  const { notebookSlug } = useParams();
  // const history = useHistory();
  // const goBack = () => {
  //   history.goBack();
  // };
  if (!authStore.user) return <Redirect to="/" />;

  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.slug === notebookSlug
  );
  if (!notebook) return <Redirect to="/notebooks" />;
  return (
    <>
      <DetailWrapper>
        <DetailTop>
          <h1>{notebook.name}</h1>
        </DetailTop>

        <div className="row">
          <div className="col-sm-5 col-xs-12">
            <DetailTop>
              {authStore.user.role !== "admin" ? (
                <Link to={`/vendors/${authStore.user.vendorSlug}`}>
                  <img src={notebook.image} alt={notebook.name} />
                </Link>
              ) : (
                <Link to="/notebooks">
                  <img src={notebook.image} alt={notebook.name} />
                </Link>
              )}
            </DetailTop>
          </div>

          <div className="col-sm-7 col-xs-12">
            <p className="description">{notebook.description}</p>
            <p className="price">{notebook.price} Kwd</p>

            <UpdateButton notebook={notebook} />
            <DeleteButton notebookId={notebook.id} />
          </div>
        </div>
      </DetailWrapper>
      {authStore.user.role === "admin" ? (
        <LinkStyle to="/notebooks">Take a look at all Notebooks!</LinkStyle>
      ) : !authStore.user.vendorSlug ? null : authStore.user.role !==
        "admin" ? (
        <LinkStyle to={`/vendors/${authStore.user.vendorSlug}`}>
          Back to Your Vendor Page
        </LinkStyle>
      ) : null}
    </>
  );
};

export default observer(Details);
