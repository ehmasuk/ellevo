"use client";

import { Image } from "antd";
import { ChevronLeftIcon, ChevronRightIcon, Truck } from "lucide-react";
import { useState } from "react";

function ProductDetails() {
    const images = ["0010000076843.webp", "0010000076843_1.webp", "0020000107709.webp", "0020000107709_1.webp", "0010000076843.webp"];

    const [previewImage, setPreviewImage] = useState(0);

    const changeImage = (type: string) => {
        switch (type) {
            case "next":
                if (previewImage < images.length - 1) {
                    setPreviewImage(previewImage + 1);
                } else {
                    setPreviewImage(0);
                }
                break;

            case "previous":
                if (previewImage > 0) {
                    setPreviewImage(previewImage - 1);
                } else {
                    setPreviewImage(images.length - 1);
                }
                break;

            default:
                break;
        }
    };

    return (
        <div className="items-start grid-cols-1 lg:grid-cols-4 gap-8 max-lg:gap-12 max-sm:gap-8">
            <div className="w-full lg:col-span-2">
                <div className="flex flex-col gap-4">
                    <Image.PreviewGroup>
                        <div className="relative text-center">
                            <Image className="border max-h-[260px] p-3 max-w-full border-blue-100" src={images[previewImage]} alt="image" />
                            <ChevronRightIcon size={38} onClick={() => changeImage("next")} strokeWidth={1} className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2" />
                            <ChevronLeftIcon size={38} onClick={() => changeImage("previous")} strokeWidth={1} className="absolute left-2 top-1/2 cursor-pointer -translate-y-1/2" />
                        </div>
                    </Image.PreviewGroup>
                </div>
            </div>

            <div className="w-full lg:col-span-2">
                <div>
                    <h3 className="md:text-lg font-semibold text-black my-4">Black Embroidered and Striped Joysree Silk Panjabi</h3>
                    <div className="flex items-center flex-wrap gap-4">
                        <h4 className="text-lg font-semibold">Tk 1250</h4>
                        <p className="text-gray-500 text-lg">
                            <del>1750 tk</del>
                        </p>
                    </div>
                </div>
                <hr className="my-6 border-gray-300" />

                <div className="space-y-7">
                    <div className="flex gap-3 items-center">
                        <h3 className="text-gray-600 min-w-[80px]">Sizes:</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="font-medium">M</div>
                            <div className="font-medium">SM</div>
                            <div className="font-medium">Xl</div>
                            <div className="font-medium">XXL</div>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <h3 className="text-gray-600 min-w-[80px]">Colors:</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="font-medium text-red-600">Red</div>
                            <div className="font-medium text-blue-600">Blue</div>
                            <div className="font-medium text-green-600">Green</div>
                            <div className="font-medium text-yellow-600">Yellow</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 max-w-80 mt-10">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <input
                                        type="radio"
                                        name="delivery-method"
                                        className="h-4 w-4 border-gray-300 bg-white text-blue-600"
                                        defaultChecked
                                    />
                                </div>
                                <div className="ms-4 text-sm">
                                    <label htmlFor="dhl" className="font-medium leading-none text-gray-900 dark:text-white">
                                        Cash on delivery
                                    </label>
                                    <p id="dhl-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                                        Pay with cash upon delivery.
                                    </p>
                                </div>
                                <Truck size={38} strokeWidth={1} className="ml-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
