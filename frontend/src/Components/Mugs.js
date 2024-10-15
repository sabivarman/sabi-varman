import React from 'react';

const Mugs = () => {
  const products = [
    { name: 'plain mug', price: '$2.50', image: 'https://i.pinimg.com/236x/97/38/4e/97384ecd78fbf41c73d3ce3112ee05db.jpg' },
    { name: 'steal mug',  price: '$3.00', image: 'https://i.pinimg.com/236x/14/ef/25/14ef251f100f985ee3167285841893d6.jpg' },
    { name: 'printed',  price: '$4.50', image: 'https://i.pinimg.com/236x/63/e8/9b/63e89b3b69f506c9050270257601fa32.jpg' },
    
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
      <h2>Mugs</h2>
      
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>

            {/* Buttons */}
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

export default Mugs;
