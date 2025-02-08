"use client";

import Loader from "@/components/Loader";
import useGet from "@/hooks/useGet";
import { Order } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function OrderSuccess() {
    const { orderId } = useParams();
    const { getData, data, loading } = useGet();
    const [order, setOrder] = useState<null | Order>(null);

    useEffect(() => {
        if (data) {
            setOrder(data);
        }
    }, [data]);

    useEffect(() => {
        getData({ url: `${process.env.NEXT_PUBLIC_API_URL}/order?id=${orderId}` });
    }, []);

    return (
        <div className="p-10">
            <Loader loading={loading} />
            <div className="max-w-4xl mx-auto bg-white p-10 border border-gray-300 rounded-lg ">
                <h2 className="text-2xl font-semibold text-center">আপনার অর্ডার নিশ্চিত করা হয়েছে! 🎉</h2>
                <div className="mt-6 mb-8">
                    <p className="text-slate-800 font-semibold text-center">ধন্যবাদ, {order?.name}</p>
                    <p className="text-slate-800 mt-3 text-center">আপনার অর্ডার নিশ্চিত করা হয়েছে এবং শীঘ্রই আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে </p>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-center">Order Details</h3>
                    <p className="font-gray-200 text-sm mt-2 text-center">
                        Order ID: <span className="font-semibold">#{order?._id}</span>
                    </p>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                            <Image width={100} height={100} alt="Perfume" src="/0010000076843.webp" className="w-16 h-16 object-cover rounded-md object-top" />
                            <div className="ml-4 flex-1">
                                <p className="font-semibold">Black Embroidered and Striped Joysree Silk Panjabi</p>
                                <p className="text-gray-600 text-sm my-2">
                                    QTY: <b>{order?.quantity}</b>
                                </p>
                                <p className="text-gray-600 text-sm">
                                    Color: <b>{order?.color}</b>
                                </p>
                            </div>
                            <p className="font-semibold">$52.00</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg space-y-6">
                    <div className="flex justify-between text-slate-800">
                        <span>Subtotal</span>
                        <span>$180.00</span>
                    </div>
                    <div className="flex justify-between text-slate-800">
                        <span>Delivery Charge</span>
                        <span>150 tk</span>
                    </div>
                    <div className="flex justify-between text-slate-800">
                        <span>Tax Fee</span>
                        <span>$5.00</span>
                    </div>
                    <div className="flex justify-between text-slate-800">
                        <span>Discount</span>
                        <span>00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold text-lg text-indigo-600">
                        <span>Total</span>
                        <span>{order?.totalPrice} tk</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;
