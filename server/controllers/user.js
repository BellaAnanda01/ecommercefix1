import mongoose from 'mongoose';
import UserModal from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken"

//REGISTER
export const registerUser = async (req, res) => {
    const newUser = new UserModal({
      name: req.body.name,
      username: req.body.username,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
};

//LOGIN
export const loginUser = async (req, res) => {
    try {
        const user = await UserModal.findOne({ username: req.body.username });

        if (!user) {
            return res.status(401).json("User doesn't exist");
        };

        // const hashedPassword = CryptoJS.AES.decrypt(
        //     user.password,
        //     process.env.PASS_SEC
        //   );
        const OriginalPassword = user.password;
        
        if(OriginalPassword !== req.body.password) {
            return res.status(401).json("Incorrect password");
        };

        // const accessToken = jwt.sign(
        //     {
        //       id: user._id,
        //       username: user.username,
        //     },
        //     process.env.JWT_SEC,
        //     {expiresIn:"1d"}
        // );

        const { password, ...others } = user._doc
        
        // res.status(200).json({...others, accesToken})
        res.status(200).json({...others})
    } catch (err) {
        res.status(500).json(err)
    }
};

//DELETE
export const deleteUser = async (req, res) => {
    try {
      await UserModal.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
};

//UPDATE
export const updateUser = async (req, res) => {
  try {
    const updateUser = await UserModal.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
};


//GET USER
export const getUser = async (req, res) => {
    try {
      const user = await UserModal.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
};

//GET ALL USERS
export const getUsers = async (req, res) => {
    const query = req.query.new;
    try {
      const users = query
        ? await UserModal.find().sort({ _id: -1 })
        : await UserModal.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
};