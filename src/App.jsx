import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";

const FakeAPI = () => {
  return Promise.resolve([
    { id: 1, name: "ITEM 1" },
    { id: 2, name: "ITEM 2" },
    { id: 3, name: "ITHEM 3" },
    { id: 4, name: "ITEM 4" },
    { id: 5, name: "ITEM 5" },
  ]);
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    FakeAPI().then((data) => setProducts(data));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  const buyNow = useCallback(() => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert(`You have purchased: ${cart.map((item) => item.name).join(", ")}`);
      setCart([]); // Clear the cart after purchase
    }
  }, [cart]);

  return (
    <div className="container">
      <h1 className="header">Filterable Product List</h1>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
        <button onClick={clearSearch} className="button">
          Clear Search
        </button>
      </div>
      <p className="count">Products Found: {filteredProducts.length}</p>
      <ul className="list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="listItem">
            <span>{product.name}</span>
            <button
              onClick={() => addToCart(product)}
              className="button addToCartButton"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <div className="cartContainer">
        <h2 className="cartHeader">Cart</h2>
        <ul className="list">
          {cart.map((item, index) => (
            <li key={index} className="listItem">
              {item.name}
            </li>
          ))}
        </ul>
        <button onClick={buyNow} className="button buyNowButton">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductList;
