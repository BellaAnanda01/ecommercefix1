import mongoose from 'mongoose';
import CategoryModal from "../models/Category.js"

//CREATE
export const createCategory = async (req, res) => {
    const newCategory = new CategoryModal(req.body);

    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {
        res.status(500).json(err);
    }
}

//UPDATE
export const updateCategory = async (req, res) => {
    try {
      const updatedCategory = await CategoryModal.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCategory);
    } catch (err) {
      res.status(500).json(err);
    }
};

//DELETE
export const deleteCategory = async (req, res) => {
    try {
      await CategoryModal.findByIdAndDelete(req.params.id);
      res.status(200).json("Category has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
}

//GET CATEGORY
export const getCategory = async (req, res) => {
    try {
      const category = await CategoryModal.findById(req.params.id);
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
}

//GET ALL CATEGORIES
export const getCategories = async (req, res) => {
    try {
        const category = await CategoryModal.find();
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
};