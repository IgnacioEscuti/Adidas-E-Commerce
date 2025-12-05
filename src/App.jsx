import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./components/carrito/carrito";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./context/cartContextt";

function App() {
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const toggleCarrito = () => setCarritoAbierto(!carritoAbierto);
  const cerrarCarrito = () => setCarritoAbierto(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar carritoAbierto={carritoAbierto} toggleCarrito={toggleCarrito} />
        <Carrito carritoAbierto={carritoAbierto} cerrarCarrito={cerrarCarrito} />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido" />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
