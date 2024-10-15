import React from 'react';

const Clothes = () => {
  const featuredProducts = [
    { name: 'MEN', image: 'https://i.pinimg.com/564x/8f/ba/a6/8fbaa6294a35cfdbdac358479ca32730.jpg' },
    { name: 'WOMEN', image: 'https://i.pinimg.com/564x/2a/51/01/2a51012867f116318561d9ad5acc6c82.jpg' },
    { name: 'CHILD',  image: 'https://i.pinimg.com/564x/1c/4b/7c/1c4b7c176bc7b1c51b5677cba368c824.jpg' },
    
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
    <div style={{ padding: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Clothes</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {featuredProducts.map((product, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '10px', width: '200px', textAlign: 'center' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            
            {/* Buttons for Add to Cart and Buy Now */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => handleAddToCart(product.name)}
                style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product.name)}
                style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothes;
