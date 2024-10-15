import React, { useState } from 'react';
import axios from 'axios';

const AdminAddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/products/add', {
      name,
      price,
      description,
      imageUrl,
    })
    .then(() => {
      alert('Product added successfully!');
      setName('');
      setPrice('');
      setDescription('');
      setImageUrl('');
    })
    .catch((error) => {
      console.error('There was an error adding the product!', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AdminAddProduct;
