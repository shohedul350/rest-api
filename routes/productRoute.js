const express = require('express');

const router = express.Router();
const { Product } = require('../models/ProductModel');


//  upload product
//  api/product/uploadproduct

router.post('/uploadproduct', async (req, res) => {
  try {
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.status(200).json({ message: 'Product Upload Succesfully ', newProduct });
  } catch (error) {
    res.status(500).json(error);
  }
});


//  getAll product
//  api/product/getallProduct

router.get('/getallProduct', async (req, res) => {
  try {
    const getAllProduct = await Product.find();
    if (!getAllProduct) {
      return res.status(404).json({ message: 'Product Not Found' });
    }
    res.status(200).json(getAllProduct);
  } catch (error) {
    res.status(500).json(error);
  }
  return 0;
});

//  get single product
//  api/product/getproduct/:id

router.get('/getproduct/:id', async (req, res) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    if (!getProduct) {
      return res.status(404).json({ message: 'Product Not Found' });
    }
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).json(error);
  }
  return 0;
});

//  update product by product id
//  api/product/updateproduct/:id

router.put('/updateproduct/:id', async (req, res) => {
  try {
    const updateProduct = await
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Product Update Succesfully ', updateProduct });
  } catch (error) {
    res.status(500).json(error);
  }
});

//  delete  product by product id
//  api/product//deleteproduct/:id

router.delete('/deleteproduct/:id', async (req, res) => {
  try {
    const deleteProduct = await
    Product.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Product Delete Succesfully Deleted', deleteProduct });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
