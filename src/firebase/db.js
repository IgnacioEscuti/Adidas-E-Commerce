import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
import App from "../App"

const db =  getFirestore(App)

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