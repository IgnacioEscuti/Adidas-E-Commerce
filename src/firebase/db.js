import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
import {app} from "./Firebase"

const db =  getFirestore(app)

export const getProducts = async() =>{
    const documents = await getDocs(collection(db,"´products"))
    const products = [];
    documents.forEach((doc)=>{
        products.push({
            ...doc.data(),
            id:doc.id
        });
    });
    return products;
}