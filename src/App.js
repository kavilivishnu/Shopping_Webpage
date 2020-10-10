import React, { useState } from 'react';
import './App.css';
import Parallax from 'react-rellax';
import { FaShoppingBag } from "react-icons/fa";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
const PAGE_LAST = 'final page';

function App() {

  const [products] = useState([
    {
      name: "Oreo",
      price: "20/-",
      image: "https://www.coop.ch/img/produkte/1200_630/RGB/4094888_001.jpg?_=1539125524913"
    },

    {
      name: "Lays",
      price: "20/-",
      image: "https://images-na.ssl-images-amazon.com/images/I/71uQ3b9609L._SL1500_.jpg"
    },

    {
      name: "Pepsi",
      price: "50/-",
      image: "https://images-na.ssl-images-amazon.com/images/I/515Lwr5CyxL.jpg"
    },

    {
      name: "French fries",
      price: "70/-",
      image: "https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg"
    },

  ]);

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const renderProducts = () => (
    <>
      <h1 className="heading">Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <h3 style={{ fontFamily: "Overlock" }}>{product.name}</h3>
            <h4 style={{ fontFamily: "Overlock" }}>{product.price}</h4>
            <button className="button" onClick={() => addToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <h1 className="heading" >Cart</h1>
      <div className="products">
        {cart.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <h3 style={{ fontFamily: "Overlock" }}>{product.name}</h3>
            <h4 style={{ fontFamily: "Overlock" }}>{product.price}</h4>
            <button className="button" onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );

  const renderFinalPage = () => (
    <div>
      <h1 className="heading1" >Thankyou for shopping with us!</h1>
    </div>
  );

  return (
    <>
      <div style={{ marginLeft: "5%", marginTop: "3%" }}>
        <FaShoppingBag color="lightsalmon" size="5rem" />
        <br />
        <h3 className="heading2" >Shop to your heart's content!</h3>
      </div>
      <div className="App">
        <div>
          <header>
            <br />
            <Parallax speed={-7}>
              <button className="button1" onClick={() => navigateTo(PAGE_CART)}>Cart ({cart.length})</button>
              <button className="button2" onClick={() => navigateTo(PAGE_PRODUCTS)}>Products</button>
              <button className="button3" onClick={() => navigateTo(PAGE_LAST)}>Order Now</button>
            </ Parallax>
          </header>
        </div>
        {page === PAGE_PRODUCTS && renderProducts()}
        {page === PAGE_CART && renderCart()}
        {page === PAGE_LAST && renderFinalPage()}
      </div>
    </>
  )
}


export default App;

