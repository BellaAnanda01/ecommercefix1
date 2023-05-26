import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    namaDepan: { type: String },
    namaBelakang: { type: String },
    noTelepon: { type: String },
    products: [
      {
        productId: {
          type: String,
        },
        note: {
            type: String,
            default: "-",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    metodePengiriman: { type: String, required: true },
    alamat: { type: String, required: true },
    RT: { type: String, required: true },
    RW: { type: String, required: true },
    kelurahan: { type: String, required: true },
    kecamatan: { type: String, required: true },
    kota: { type: String, required: true },
    provinsi: { type: String, required: true },
    kodePos: { type: Number, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const OrderModal = mongoose.model("Order", OrderSchema);

export default OrderModal;