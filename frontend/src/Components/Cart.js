import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Sample cart items
  const cartItems = [
    { id: 1, name: 'T-Shirt', img: 'https://via.placeholder.com/150', price: 20 },
    { id: 2, name: 'Hat', img: 'https://via.placeholder.com/150', price: 15 },
    { id: 3, name: 'Shoes', img: 'https://via.placeholder.com/150', price: 50 },
    { id: 4, name: 'Oversized Shirt', img: 'https://via.placeholder.com/150', price: 25 },
    { id: 5, name: 'Oversized T-Shirt', img: 'https://via.placeholder.com/150', price: 22 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items-list">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
