import React from 'react';

const Tshirt = () => {
  const products = [
    { name: 'Anime', image: 'https://i.pinimg.com/564x/12/36/bf/1236bf322ba6f9a0c03cbafced4f2db0.jpg' },
    { name: 'Printed', price: '$3.50', image: 'https://i.pinimg.com/564x/f9/11/97/f91197b8e4dab90b50dd923da1d27201.jpg' },
    { name: 'Over Sized', price: '$7.00', image: 'https://i.pinimg.com/564x/50/85/d1/5085d17472f50977d867735b36ea477e.jpg' },
    { name: 'Formal',  price: '$4.00', image: 'https://i.pinimg.com/564x/f5/8e/98/f58e98e671189dd37a3e5accb06d22be.jpg' }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
  };

  return (
    <div className="category-page">
      <h2>T-SHIRTS</h2>
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            
            {/* Buttons Container */}
            <div className="action-buttons">
              <button onClick={() => handleAddToCart(product.name)} className="add-to-cart-btn">Add to Cart</button>
              <button onClick={() => handleBuyNow(product.name)} className="buy-now-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tshirt;
