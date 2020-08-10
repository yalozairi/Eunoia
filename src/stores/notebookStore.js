import { decorate, observable } from "mobx";
import axios from "axios";

class NotebookStore {
  notebooks = [];
  loading = true;

  fetchNotebooks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = res.data;
      this.loading = false;
    } catch (error) {
      console.error("NotebookStore -> fetchNotebooks -> error", error);
    }
  };

  getNotebookById = (notebookId) => {
    return this.notebooks.find((notebook) => notebook.id === notebookId);
  };

  createNotebook = async (newNotebook, vendor) => {
    try {
      const formData = new FormData();
      for (const key in newNotebook) formData.append(key, newNotebook[key]);
      const res = await axios.post(
        `http://localhost:8000/vendors/${vendor.id}/notebooks`,
        formData
      );
      this.notebooks.push(res.data);
      vendor.notebooks.push({ id: res.data.id });
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
      const formData = new FormData();
      for (const key in updatedNotebook)
        formData.append(key, updatedNotebook[key]);
      await axios.put(
        `http://localhost:8000/notebooks/${updatedNotebook.id}`,
        formData
      );

      const notebook = this.notebooks.find(
        (notebook) => notebook.id === updatedNotebook.id
      );
      for (const key in updatedNotebook) notebook[key] = updatedNotebook[key];
      notebook.image = URL.createObjectURL(updatedNotebook.image);
    } catch (error) {
      console.error("NotebookStore -> updateNotebook -> error", error);
    }
  };
}

decorate(NotebookStore, { notebooks: observable, loading: observable });

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();
export default notebookStore;
