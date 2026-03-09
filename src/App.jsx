import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Home from "./screens/Home";
import Products from "./screens/Products";
import Contact from "./screens/Contact";
import { useState } from "react";

export default function App() {
  // Carrito sea global
  const {cart, setCart} = useState([]);

  // Estado para la notificacion
  const {toast, setToast} = useState("");

  // Funcion para mostrar la notificacion
  const showToast = (text) => {
    setToast(text);
    setTimeout(() => setToast(""), 2000); // DURA 2sg
  }

  // Funcion para agregar productos al carrito
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    showToast("Producto agregado al carrito");
  }

  return (
    <BrowserRouter>
      <MainLayout cartCount={cart.length}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Le enviamos la funcion onAddToCart  a products*/}
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Notificacion visible solo cuando toast tiene texto*/}
        {toast && <Toast message={toast}/>}
      </MainLayout>
    </BrowserRouter>
  );
}

// Browser -> Permite navegar sin recarfgar la pagina
// Routes -> todas las rutas de la aplicacion 
//MainLayout -> Envuelve cada pantalla
// cada vez que se agrega un producto setCart([...cart, product]); -> agregar un nuevo elemento al arreglo
