"use client";

import { allDivisions } from "@/database/allDivisions";
import useGet from "@/hooks/useGet";
import { CheckoutFormTypes, District } from "@/types";
import { Form, FormProps, Spin } from "antd";
import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

function CheckoutForm() {
    const { getData, loading } = useGet();

    const [districts, setDistricts] = useState<District[]>([]);
    const [upoZillas, setUpoZillas] = useState<string[]>([]);

    const handleChangeDivision = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDistrict = await getData({ url: `https://bdapis.com/api/v1.2/division/${e.target.value}` });
        setDistricts(selectedDistrict?.data);
    };

    const handleChangeDistrict = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDistrict = await getData({ url: `https://bdapis.com/api/v1.2/district/${e.target.value}` });
        setUpoZillas(selectedDistrict?.data[0]?.upazillas);
    };

    const handleSubmit: FormProps<CheckoutFormTypes>["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    return (
        <section className="bg-white">
            <div className="grid lg:grid-cols-5 gap-10 max-w-7xl p-8 mx-auto">
                <div className="lg:col-span-2 space-y-6">
                    <ProductDetails />
                </div>

                <div className="lg:col-span-3 ">
                    <Form onFinish={handleSubmit} className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="md:text-xl text-lg font-semibold text-gray-900 dark:text-white">অর্ডার করতে নিচের ফর্মটি পূরণ করুন 👇</h2>
                            <div className="grid lg:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        আপনার নাম লিখুন
                                    </label>
                                    <Form.Item name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
                                        <input
                                            type="text"
                                            id="your_name"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="নাম"
                                        />
                                    </Form.Item>
                                </div>

                                <div>
                                    <label htmlFor="mobile" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        আপনার ফোন নাম্বারটি লিখুন
                                    </label>
                                    <Form.Item name="mobile" className="!m-0" rules={[{ required: true, message: "Please enter your active mobile number!" }]}>
                                        <div className="flex items-center">
                                            <button
                                                className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                type="button"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="me-2 h-4 w-4" viewBox="0 0 36 36">
                                                    <path fill="#006a4d" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z" />
                                                    <circle cx="16" cy="17.5" r="7" fill="#f42a41" />
                                                </svg>
                                                +880
                                            </button>

                                            <div className="relative w-full">
                                                <input
                                                    type="text"
                                                    id="mobile"
                                                    className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500"
                                                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                    placeholder="123-456-7890"
                                                />
                                            </div>
                                        </div>
                                    </Form.Item>
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="select-1" className="block text-sm font-medium text-gray-900 dark:text-white">
                                            বিভাগ
                                        </label>
                                    </div>
                                    <Form.Item name="division" rules={[{ required: true, message: "Please select division!" }]}>
                                        <select
                                            id="select-1"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            onChange={handleChangeDivision}
                                        >
                                            <option disabled selected>
                                                নির্বাচন করুন
                                            </option>
                                            {allDivisions?.map((division, index) => {
                                                return (
                                                    <option key={index} value={division.division}>
                                                        {division.divisionbn}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </Form.Item>
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="select-2" className="block text-sm font-medium text-gray-900 dark:text-white">
                                            জেলা
                                        </label>
                                    </div>
                                    <Form.Item name="district" rules={[{ required: true, message: "Please select district!" }]}>
                                        <Spin spinning={loading}>
                                            <select
                                                id="select-2"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 disabled:opacity-50"
                                                disabled={districts ? false : true}
                                                onChange={handleChangeDistrict}
                                            >
                                                <option selected disabled>
                                                    নির্বাচন করুন
                                                </option>
                                                {districts?.map((distric, index) => {
                                                    return (
                                                        <option key={index} value={distric?.district}>
                                                            {distric?.districtbn}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </Spin>
                                    </Form.Item>
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="select-3" className="block text-sm font-medium text-gray-900 dark:text-white">
                                            উপজেলা
                                        </label>
                                    </div>{" "}
                                    <Form.Item name="upozilla" rules={[{ required: true, message: "Please select upozilla!" }]}>
                                        <Spin spinning={loading}>
                                            <select
                                                id="select-3"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 disabled:opacity-50"
                                                disabled={upoZillas ? false : true}
                                            >
                                                <option selected disabled>
                                                    নির্বাচন করুন
                                                </option>
                                                {upoZillas?.map((upoZilla, index) => {
                                                    return (
                                                        <option key={index} value={upoZilla}>
                                                            {upoZilla}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </Spin>
                                    </Form.Item>
                                </div>

                                <div>
                                    <label htmlFor="addrsss" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        আপনার ঠিকানা লিখুন
                                    </label>
                                    <Form.Item name="address" rules={[{ required: true, message: "Please enter your address!" }]}>
                                        <textarea
                                            id="address"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="ঠিকানা"
                                        ></textarea>
                                    </Form.Item>
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="select-3" className="block text-sm font-medium text-gray-900 dark:text-white">
                                            Products color
                                        </label>
                                    </div>
                                    <Form.Item name="color" rules={[{ required: true, message: "Please select color!" }]}>
                                        <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 disabled:opacity-30">
                                            <option selected disabled>
                                                নির্বাচন করুন
                                            </option>
                                            <option value="red">red</option>
                                            <option value="red">blue</option>
                                        </select>
                                    </Form.Item>
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="select-3" className="block text-sm font-medium text-gray-900 dark:text-white">
                                            Products Quantity
                                        </label>
                                    </div>
                                    <Form.Item name="quantity" rules={[{ required: true, message: "Please select product quantity!" }]}>
                                        <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 disabled:opacity-30">
                                            <option selected disabled>
                                                নির্বাচন করুন
                                            </option>
                                            <option value="red">1</option>
                                            <option value="red">2</option>
                                            <option value="red">3</option>
                                        </select>
                                    </Form.Item>
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="select-3" className="block text-sm font-medium text-gray-900 dark:text-white">
                                            Products size
                                        </label>
                                    </div>
                                    <Form.Item name="size" rules={[{ required: true, message: "Please select products size!" }]}>
                                        <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 disabled:opacity-30">
                                            <option selected disabled>
                                                নির্বাচন করুন
                                            </option>
                                            <option value="red">xl</option>
                                            <option value="red">xxl</option>
                                        </select>
                                    </Form.Item>
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        ইমেইল <span className="text-gray-400">(optional)</span>
                                    </label>
                                    <Form.Item name="email">
                                        <input
                                            type="email"
                                            id="email"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="name@flowbite.com"
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-300" />
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold text-gray-800">Order summary</h2>
                            <div className="flow-root">
                                <ul>
                                    <li className="flex py-6">
                                        <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src="https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                                className="size-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href="#">Black Embroidered and Striped Joysree Silk Panjabi</a>
                                                    </h3>
                                                    <p className="ml-4">$90.00</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500">Qty 1</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 py-6">
                                <div className="flex justify-between text-base font-medium text-gray-600">
                                    <p>Product price</p>
                                    <p>$1250</p>
                                </div>
                                <div className="flex my-5 justify-between text-base font-medium text-gray-600">
                                    <p>Delivary charge</p>
                                    <p>$262.00</p>
                                </div>
                                <div className="flex font-semibold justify-between text-base text-gray-900">
                                    <p>Total</p>
                                    <p>$262.00</p>
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                                    >
                                        Confirm order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default CheckoutForm;
