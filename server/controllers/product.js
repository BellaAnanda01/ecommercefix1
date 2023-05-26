import mongoose from 'mongoose';
import ProductModal from "../models/Product.js"

//CREATE
export const createProduct = async (req, res) => {
    const newProduct = new ProductModal(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
}

//UPDATE
export const updateProduct = async (req, res) => {
    try {
      const updatedProduct = await ProductModal.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
};

//DELETE
export const deleteProduct = async (req, res) => {
    try {
      await ProductModal.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
}

//GET PRODUCT
export const getProduct = async (req, res) => {
    try {
      const Product = await ProductModal.findById(req.params.id);
      res.status(200).json(Product);
    } catch (err) {
      res.status(500).json(err);
    }
}

//GET ALL PRODUCTS
export const getProducts = async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await ProductModal.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await ProductModal.find({
          categories: {
            $in: `${qCategory}`,
          },
        });
      } else {
        products = await ProductModal.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
};