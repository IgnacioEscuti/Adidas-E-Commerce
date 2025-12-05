import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig.js";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemsRef = collection(db, "items");

    const q = categoriaId
      ? query(itemsRef, where("categoria", "==", categoriaId))
      : itemsRef;

    getDocs(q)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
      })
      .catch((err) => console.error("Error al cargar items:", err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="itemlist-container">
      <h2>{greeting ? greeting : categoriaId}</h2>
      <ItemList productos={items} />
    </div>
  );
}

export default ItemListContainer;
