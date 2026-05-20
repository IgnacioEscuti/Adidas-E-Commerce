import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./components/carrito/carrito";
import Checkout from "./components/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
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

        <div className="app-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ItemListContainer greeting="Todos los productos" />
                </>
              }
            />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
