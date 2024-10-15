import React from 'react';

const Hats = () => {
  const products = [
    { name: 'Adidas', price: '$2.00', image: 'https://i.pinimg.com/564x/b0/53/58/b05358fb403d7caac78ff7ace695fa52.jpg' },
    { name: 'Nike', price: '$5.00', image: 'https://i.pinimg.com/564x/b4/69/29/b46929ea4f7f86fa52b65919973783c4.jpg' },
    { name: 'Puma', price: '$3.50', image: 'https://i.pinimg.com/564x/10/c8/78/10c878e8d6f1ef3604d22495bfcd3a09.jpg' },
    { name: 'Fred perry', price: '$4.00', image: 'https://i.pinimg.com/564x/8b/3b/6c/8b3b6c8ce1f27c09c56d73dc41afc172.jpg' }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
  };

  return (
    <div className="category-page">
      <h2>Hats</h2>
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            
            {/* Action Buttons */}
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

export default Hats;
