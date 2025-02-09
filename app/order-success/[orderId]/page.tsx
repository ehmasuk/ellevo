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
                        <div className="flex gap-3 bg-gray-50 p-4 rounded-lg shadow-sm">
                            <Image width={100} height={100} alt="Perfume" src="/0010000076843.webp" className="w-20 h-32 object-contain rounded-md object-top" />
                            <div className="ml-4 flex-1 space-y-2">
                                <p className="font-semibold">Black Embroidered and Striped Joysree Silk Panjabi</p>
                                <p className="text-gray-600 text-sm">
                                    QTY: <b>{order?.quantity}</b>
                                </p>
                                <p className="text-gray-600 text-sm">
                                    Color: <b>{order?.color}</b>
                                </p>
                                <p className="text-gray-600 text-sm">
                                    Size: <b>{order?.size}</b>
                                </p>
                            </div>
                            <p className="font-semibold">1200 tk</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg space-y-6">
                    <div className="flex justify-between text-slate-800">
                        <span>Product price</span>
                        <span>1200 tk</span>
                    </div>
                    <div className="flex justify-between text-slate-800">
                        <span>Quantiry</span>
                        <span>{order?.quantity}</span>
                    </div>
                    <div className="flex justify-between text-slate-800">
                        <span>Delivery Charge</span>
                        <span>{order?.delivaryCharge} tk</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold text-lg text-indigo-600">
                        <span>Total</span>
                        <span>{order?.totalPrice} tk</span>
                    </div>
                </div>
                <div className="flex gap-4 items-center mt-5 justify-center">
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Download invoice
                    </button>
                    <a href="/">
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Return to homepage
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;
