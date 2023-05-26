import mongoose from 'mongoose';
import OrderModal from "../models/Order.js"

//CREATE
export const createOrder = async (req, res) => {
    const newOrder = new OrderModal(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

//UPDATE
export const updateOrder = async (req, res) => {
    try {
      const updatedOrder = await OrderModal.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
};

//DELETE
export const deleteOrder = async (req, res) => {
    try {
      await OrderModal.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
}

//GET ORDER
export const getOrder = async (req, res) => {
    try {
      const Order = await OrderModal.findById(req.params.id);
      res.status(200).json(Order);
    } catch (err) {
      res.status(500).json(err);
    }
}

//GET ALL ORDERS
export const getOrders = async (req, res) => {
    try {
        const Order = await OrderModal.find();
        res.status(200).json(Order);
    } catch (err) {
        res.status(500).json(err);
    }
};