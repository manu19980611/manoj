import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from './pages/Home';
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import Product3 from "./pages/Product3";
import Product4 from "./pages/Product4";
import Product5 from "./pages/Product5";
import Payment from './pages/Payment';
import { CartProvider } from "./Context/CartContext";
import { ProductProvider } from "./Context/ProductContext";
import ErrorBoundary from "./pages/errorboundary";


import './App.css'

function App() {

  return (
    <>
       <ErrorBoundary>
     <CartProvider>
<ProductProvider>
       <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path ="/Products" element={<Products />}/> 
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Product1" element={<Product1 />} />
          <Route path="/Product2" element={<Product2 />} />
        <Route path="/Product3" element={<Product3 />} />
        <Route path="/Product4" element={<Product4 />} />
        <Route path="/Product5" element={<Product5 />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
    </ProductProvider>
     </CartProvider>
     </ErrorBoundary>
    </>
  )
}

export default App
