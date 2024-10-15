import React from 'react';

const Shoes= () => {
  const products = [
    { name: 'Nike', price: '$2.50', image: 'https://i.pinimg.com/564x/3c/92/6a/3c926a8d031f417035cc4126f9ecddf0.jpg' },
    { name: 'Puma',  price: '$3.00', image: 'https://i.pinimg.com/564x/45/42/fd/4542fda987a8fa8d085775159b55b721.jpg' },
    { name: 'Adidas',  price: '$4.00', image: 'https://i.pinimg.com/564x/18/2f/38/182f383662b25ebd1e62423ab6cd906b.jpg' },
    { name: 'Crocs',price: '$1.00', image: 'https://i.pinimg.com/564x/a4/5b/6a/a45b6a52e661f89bb70a65bac9198e78.jpg' }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
    // Implement cart functionality here
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
    // Implement buy now functionality here
  };

  return (
    <div className="category-page">
      <h2>Shoes</h2>
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
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

export default Shoes;
