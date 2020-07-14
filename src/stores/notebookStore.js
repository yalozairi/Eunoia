import { decorate, observable } from "mobx";
import slugify from 'react-slugify';

//data
import notebooks from "../notebooks"

class NotebookStore {
notebooks = notebooks;

createNotebook = (newNotebook) => {
    newNotebook.slug = slugify(newNotebook.name)
    newNotebook.id = this.notebooks[this.notebooks.length - 1].id + 1;
    this.notebooks.push(newNotebook)
  };

deleteNotebook = (notebookId) => {
this.notebooks = this.notebooks.filter(
      (notebook) => notebook.id !== +notebookId
    );

  };

updateNotebook = (updatedNotebook) => {
  const notebook = this.notebooks.find((notebook) => notebook.id === updatedNotebook.id);
  for (const key in updatedNotebook) notebook[key] = updatedNotebook[key]
}

};

decorate(NotebookStore, {notebooks: observable,});

const notebookStore = new NotebookStore();
export default notebookStore;