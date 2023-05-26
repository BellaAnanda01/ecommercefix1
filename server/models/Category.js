import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true }
  },
  { timestamps: true }
);

const CategoryModal = mongoose.model("Category", CategorySchema);

export default CategoryModal;