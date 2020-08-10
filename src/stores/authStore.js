import { decorate, observable } from "mobx";
import axios from "axios";

class AuthStore {

    signup = async (userData) => {

    
    try {
        await axios.post("http://localhost:8000/signup", userData)
    } catch (error) {
    console.error("AuthStore -> error", error)
        
    }

    }
}

decorate(AuthStore, {});

const authStore = new AuthStore();

export default authStore;