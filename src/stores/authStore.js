import { decorate } from "mobx";
//observable?
import instance from "./instance";

class AuthStore {

    signup = async (userData) => {
    try {
        await instance.post("/signup", userData)
    } catch (error) {
    console.error("AuthStore -> error", error)   
    };
    }
    signin = async (userData) => {
        try {
            const res = await instance.post("/signin", userData)
            console.log("AuthStore -> signin -> res.data", res.data)
        } catch (error) {
        console.error("AuthStore -> signin -> error", error)
            
        }
    }


    
}

decorate(AuthStore, {});

const authStore = new AuthStore();

export default authStore;