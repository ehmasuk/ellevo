import { Star } from "lucide-react";

const reviews = [
    { id: 1, author: "রাফি আহমেদ", rating: 5, text: "এত সুন্দর ফিনিশিং আর আরামদায়ক কাপড় এক কথায় অসাধারণ! ডেলিভারিও সময়মতো পেয়েছি।" },
    { id: 2, author: "তানভীর ইসলাম", rating: 4, text: "এই দামে এত ভালো মানের সিল্ক পাঞ্জাবি আশা করিনি! রং আর ডিজাইন একদম পারফেক্ট!" },
    { id: 3, author: "সাব্বির রহমান", rating: 5, text: "Tআমি XXL নিয়েছি, ফিটিং একদম ঠিকঠাক। স্টিচিংও অনেক ভালো, খুবই আরামদায়ক!" },
];

export default function HeroSection() {
    return (
        <div className=" bg-white">
            <div>
                <section className="pt-8 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
                    <div className="max-w-7xl mx-auto items-center grid gap-4 lg:grid-cols-3">
                        <div className="md:col-span-2 px-4 sm:px-6 lg:px-8 text-center md:text-left">
                            <p className="font-bold md:text-4xl text-2xl bg-gradient-to-r from-blue-600 to-violet-600 inline-block text-transparent bg-clip-text">ELLEVO</p>
                            <h1 style={{ lineHeight: "60px" }} className="font-manrope font-bold text-3xl text-gray-900 mb-5 md:text-5xl">
                                শুদ্ধতার ছোঁয়ায়
                                <span className="text-indigo-600"> ঐতিহ্যের প্রতিচ্ছবি! </span>
                            </h1>
                            <p className="text-base font-normal leading-7 text-gray-500 mb-5 md:mb-9">সেরা মানের জয়শ্রী সিল্ক পাঞ্জাবি—স্টাইল, আরাম ও আভিজাত্যের অনন্য সংমিশ্রণ</p>
                            <a
                                href="#checkoutForm"
                                className="w-full md:w-auto md:mb-14 mb-7 inline-flex items-center justify-center py-3 px-7 text-base font-semibold  text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
                            >
                                🔥 এখনই অর্ডার করুন 🔥
                            </a>
                        </div>
                        <div className="md:col-span-1 flex justify-center items-center">
                            <img src="0010000076843.webp" alt="Cover image" className="rounded-t-3xl md:max-h-[500px] max-h-[300px] object-cover" />
                        </div>
                    </div>
                </section>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Features Section */}
                <section className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <h3 className="md:text-3xl text-xl font-bold text-gray-800 mb-8 text-center">কেন Ellevo বেছে নেবেন?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "সেরা মানের কাপড়", description: "খাঁটি জয়শ্রী সিল্ক, যা নরম ও আরামদায়ক" },
                                { title: "নতুন ট্রেন্ডের ডিজাইন", description: "চমৎকার এমব্রয়ডারি ও স্টাইলিশ স্ট্রাইপড ডিজাইন" },
                                { title: "ক্যাশ অন ডেলিভারি সুবিধা", description: "বিশ্বাসযোগ্যতা ও নিরাপদ লেনদেন" },
                            ].map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <h4 className="md:text-xl text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h3 className="md:text-3xl text-xl font-bold text-gray-800 mb-8 text-center">গ্রাহকের অভিজ্ঞতা</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <span className="font-medium text-gray-800 mr-2">{review.author}</span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">{review.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
