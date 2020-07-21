import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

//buttons
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

//styling
import { NotebookWrapper } from "../../styles";

const NotebookItem = ({ notebook }) => {
  return (
    <div>
      <NotebookWrapper key={notebook.id}>
        <Link to={`/notebooks/${notebook.slug}`}>
          <img src={notebook.img} alt={notebook.name} />
        </Link>

        <p className="notebook-name">{notebook.name}</p>
        <p className="notebook-price">{notebook.price} Kwd</p>
      </NotebookWrapper>
      <UpdateButton notebook={notebook} />
      <DeleteButton notebookId={notebook.id} />
    </div>
  );
};
export default observer(NotebookItem);
