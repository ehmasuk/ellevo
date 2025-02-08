import mongoose, { models } from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        name: String,
        mobile: String,
        division: String,
        district: String,
        upozilla: String,
        address: String,
        color: String,
        quantity: Number,
        size: String,
        email: String,
        totalPrice: Number,
        status: String,
    },
    { timestamps: true }
);

export const OrdersModel = models.orders || mongoose.model("orders", OrderSchema);
