import { decorate, observable } from "mobx";
import axios from "axios";

class NotebookStore {
  notebooks = [];

  fetchNotebooks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = res.data;
    } catch (error) {
      console.error("NotebookStore -> fetchNotebooks -> error", error);
    }
  };

  createNotebook = async (newNotebook) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/notebooks",
        newNotebook
      );
      this.notebooks.push(res.data);
    } catch (error) {
      console.error("NotebookStore -> createNotebook -> error", error);
    }
  };

  deleteNotebook = async (notebookId) => {
    try {
      await axios.delete(`http://localhost:8000/notebooks/${notebookId}`);
      this.notebooks = this.notebooks.filter(
        (notebook) => notebook.id !== +notebookId
      );
    } catch (error) {
      console.error("NotebookStore -> deleteNotebook -> error", error);
    }
  };

  updateNotebook = async (updatedNotebook) => {
    try {
      await axios.put(
        `http://localhost:8000/notebooks/${updatedNotebook.id}`,
        updatedNotebook
      );

      const notebook = this.notebooks.find(
        (notebook) => notebook.id === updatedNotebook.id
      );
      for (const key in updatedNotebook) notebook[key] = updatedNotebook[key];
    } catch (error) {
      console.error("NotebookStore -> updateNotebook -> error", error);
    }
  };
}

decorate(NotebookStore, { notebooks: observable });

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();
export default notebookStore;
