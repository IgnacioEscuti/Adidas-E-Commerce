import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const productoRef = doc(db, "items", id);

    getDoc(productoRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [id]);

  return (
    <div className="itemdetail-container">
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
