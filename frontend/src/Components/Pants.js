import React from 'react';

const Pants= () => {
  const products = [
    { name: 'Baggy',  price: '$10.00', image: 'https://i.pinimg.com/236x/c5/e3/0d/c5e30dda7c5af7f18c6ee529be6bdb8d.jpg' },
    { name: 'Cotton',  price: '$3.50', image: 'https://i.pinimg.com/236x/5f/83/4e/5f834eed1b0b847cdd6cf5bd32db6365.jpg' },
    { name: 'Jeans',  price: '$1.80', image: 'https://i.pinimg.com/564x/ab/14/84/ab1484519a9e3166a715dfa787bdd066.jpg' },
    
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
    // Implement cart functionality here
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
    // Implement buy functionality here
  };

  return (
    <div className="category-page">
      <h2>Pants</h2>
      
      
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

export default Pants;
