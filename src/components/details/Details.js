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

const Details = () => {
  const { notebookSlug } = useParams();

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
              <Link to="/notebooks">
                <img src={notebook.img} alt={notebook.alt} />
              </Link>
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
      <LinkStyle to="/notebooks">Take a look at our Notebooks!</LinkStyle>
    </>
  );
};

export default observer(Details);
