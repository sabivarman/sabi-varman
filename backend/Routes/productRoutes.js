const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Add a new product (Admin)
router.post('/add', async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;

    // Create a new product instance
    const newProduct = new Product({ name, price, description, imageUrl });

    // Save the new product to the database
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
