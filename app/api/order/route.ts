import { connectDb } from "@/helpers/connectDb";
import { OrdersModel } from "@/models/ordersModel";
import { NextRequest, NextResponse } from "next/server";
connectDb();
export const POST = async (req: NextRequest) => {
    try {
        const { name, totalPrice, email, mobile, division, district, upozilla, address, color, quantity, size } = await req.json();

        if (!name || !mobile || !division || !district || !upozilla || !address || !color || !quantity || !size || !totalPrice) {
            return NextResponse.json("Required all fields", { status: 404 });
        }
        const order = await OrdersModel.create({ name, email, mobile, division, district, upozilla, address, color, quantity, size, totalPrice, status: "pending" });
        if (!order) {
            return NextResponse.json("Cannot create order", { status: 404 });
        }
        return NextResponse.json(order, { status: 200 });
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(err.message, { status: 404 });
        }
    }
};

export const GET = async (req: NextRequest) => {
    try {
        const id = req.nextUrl.searchParams.get("id");

        if (id) {
            const order = await OrdersModel.findOne({ _id: id });
            if (!order) {
                return NextResponse.json("Cannot find order", { status: 404 });
            }
            return NextResponse.json(order, { status: 200 });
        } else {
            const orders = await OrdersModel.find().sort({ createdAt: "desc" });
            if (!orders) {
                return NextResponse.json("Cannot find order", { status: 404 });
            }
            return NextResponse.json(orders, { status: 200 });
        }
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(err.message, { status: 404 });
        }
    }
};
