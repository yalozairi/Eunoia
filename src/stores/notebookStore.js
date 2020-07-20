import { decorate, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class NotebookStore {
  notebooks = [];
  idCounter = this.notebooks.length + 1;

  fetchNotebooks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = res.data;
    } catch (error) {
      console.error("NotebookStore -> fetchNotebooks -> error", error);
    }
  };

  createNotebook = (newNotebook) => {
    newNotebook.slug = slugify(newNotebook.name);
    newNotebook.id = this.idCounter;
    this.notebooks.push(newNotebook);
    this.idCounter++;
  };

  deleteNotebook = async (notebookId) => {
    try {
      await axios.delete(`http://localhost:8000/notebooks/${notebookId}`);
    } catch (error) {
      console.error("NotebookStore -> deleteNotebook -> error", error);
    }
    this.notebooks = this.notebooks.filter(
      (notebook) => notebook.id !== +notebookId
    );
  };

  updateNotebook = (updatedNotebook) => {
    const notebook = this.notebooks.find(
      (notebook) => notebook.id === updatedNotebook.id
    );
    for (const key in updatedNotebook) notebook[key] = updatedNotebook[key];
  };
}

decorate(NotebookStore, { notebooks: observable });

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();
export default notebookStore;
