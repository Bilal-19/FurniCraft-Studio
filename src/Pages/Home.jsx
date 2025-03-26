import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <>
            <Header />

            <div class="w-full bg-[url(/home-banner.png)] h-100 md:h-250 bg-cover bg-no-repeat flex flex-col justify-center bg-black-900">
                <h2 className="ff-playfair text-2xl md:text-7xl text-white font-medium text-center">
                    Transform Your Space,
                    <br />
                    Elevate Your Lifestyle
                </h2>
                <button className="ff-roboto w-fit mx-auto py-3 px-5 mt-5 rounded-sm bg-black text-white hover:bg-gray-800 hover:cursor-pointer text-md md:text-lg">View Collections</button>
            </div>

            <div class="container-fluid bg-[#efefef] pt-10 pb-10 md:pt-15 md:pb-15">
                <h3 className="text-center ff-playfair font-bold text-3xl md:text-[40px]">Featured Collections</h3>

                <div class="flex flex-col md:flex-row space-y-5 md:justify-around items-center mt-15 mb-15">
                    <div className="w-80 md:w-fit">
                        <img src="/fc_sofa.png" className="h-120 rounded-lg hover:scale-101 duration-200 object-cover" alt="sofa" />
                    </div>

                    <div className="w-80 md:w-fit">
                        <img src="/fc_room.png" className="h-120 rounded-lg hover:scale-101 duration-200 object-cover" alt="room" />
                    </div>

                    <div className="w-80 md:w-fit">
                        <img src="/fc_dinning.png" className="h-120 rounded-lg hover:scale-101 duration-200 object-cover" alt="dinning table" />
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-10 pb-10 md:pt-15 md:pb-15">
                <h3 className="text-center ff-playfair font-bold text-3xl md:text-[40px] mt-15 mb-15">Trending Designs</h3>

                <div className="container mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="mx-auto md:mx-0">
                            <img src="/velvet-chair.png" className="rounded-lg" alt="velvet-chair" />
                            <p className="font-medium md:text-lg ff-roboto mt-3 mb-3">Velvet Accent Chair</p>
                            <p className="font-semibold ff-roboto">$899</p>
                        </div>

                        <div className="mx-auto md:mx-0">
                            <img src="/marble-dinning-table.png" className="rounded-lg" alt="marble-dinning-table" />
                            <p className="font-medium md:text-lg ff-roboto mt-3 mb-3">Marble Dining Table</p>
                            <p className="font-semibold ff-roboto">$2,499</p>
                        </div>

                        <div className="mx-auto md:mx-0">
                            <img src="/pendant-light.png" className="rounded-lg" alt="pendant-light" />
                            <p className="font-medium md:text-lg ff-roboto mt-3 mb-3">Modern Pendant Light</p>
                            <p className="font-semibold ff-roboto">$599</p>
                        </div>

                        <div className="mx-auto md:mx-0">
                            <img src="/bed-frame.png" className="rounded-lg" alt="bed-frame" />
                            <p className="font-medium md:text-lg ff-roboto mt-3 mb-3">Tufted Bed Frame</p>
                            <p className="font-semibold ff-roboto">$1,899</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid bg-[#efefef] pt-10 pb-10 md:pt-15 md:pb-15">
                <h3 className="text-center ff-playfair font-bold text-3xl md:text-[40px] mt-15 mb-15">Design Inspiration</h3>

                <div className="flex flex-col md:flex-row justify-around">
                    <div className="mx-auto md:mx-0 my-5 md:my-0 w-80 md:w-fit">
                        <img src="/di-room.png" className="h-100 rounded-lg hover:scale-101 duration-200 object-cover" alt="sofa" />
                    </div>

                    <div className="mx-auto md:mx-0 my-5 md:my-0 w-80 md:w-fit">
                        <img src="/di-bedroom.png" className="h-100 rounded-lg hover:scale-101 duration-200 object-cover" alt="room" />
                    </div>

                    <div className="mx-auto md:mx-0 my-5 md:my-0 w-80 md:w-fit">
                        <img src="/di-dinning.png" className="h-100 rounded-lg hover:scale-101 duration-200 object-cover" alt="dinning table" />
                    </div>
                </div>
            </div>


            <div class="w-full bg-[#F9FAFB] pt-10 pb-10 md:pt-15 md:pb-15">
                <h3 className="text-center ff-playfair font-bold text-3xl md:text-[40px]">What Our Customers Say</h3>

                <div class="container mx-auto mt-15 mb-15">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="bg-white border border-gray-200 mx-10 md:mx-0 px-5 py-3 rounded-lg shadow">
                            <div className="flex">
                                <img src="/sarah.png" alt="" />
                                <div className="ml-2">
                                    <p className="ff-roboto font-medium">Sarah Johnson</p>
                                    <p>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                    </p>
                                </div>
                            </div>
                            <p className="ff-roboto text-[#4B5563] mt-5">"The quality of furniture and attention to detail
                                exceeded my expectations. The design team was
                                incredibly helpful in creating my perfect living space."</p>
                        </div>


                        <div className="bg-white border border-gray-200 mx-10 md:mx-0 px-5 py-3 rounded-lg shadow">
                            <div className="flex">
                                <img src="/sarah.png" alt="" />
                                <div className="ml-2">
                                    <p className="ff-roboto font-medium">Sarah Johnson</p>
                                    <p>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                    </p>
                                </div>
                            </div>
                            <p className="ff-roboto text-[#4B5563] mt-5">"The quality of furniture and attention to detail
                                exceeded my expectations. The design team was
                                incredibly helpful in creating my perfect living space."</p>
                        </div>

                        <div className="bg-white border border-gray-200 mx-10 md:mx-0 px-5 py-3 rounded-lg shadow">
                            <div className="flex">
                                <img src="/sarah.png" alt="" />
                                <div className="ml-2">
                                    <p className="ff-roboto font-medium">Sarah Johnson</p>
                                    <p>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                                    </p>
                                </div>
                            </div>
                            <p className="ff-roboto text-[#4B5563] mt-5">"The quality of furniture and attention to detail
                                exceeded my expectations. The design team was
                                incredibly helpful in creating my perfect living space."</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#efefef] flex flex-col items-center">
                <h3 className="text-center ff-playfair font-bold text-2xl md:text-4xl mt-15 mb-5">Join Our Design Community</h3>
                <p className="text-[#4B5563] ff-roboto mb-5 w-80 md:w-fit">
                    Subscribe to receive exclusive offers, design tips, and inspiration for your home.
                </p>

                <form action="" className="mb-15 ff-roboto">
                    <input type="text" placeholder="Enter your email" className="w-50 md:w-100 px-3 py-2 border border-gray-200 focus:outline-gray-300 bg-white mr-2" />
                    <button className="bg-black text-white px-8 py-2 hover:cursor-pointer">Subscribe</button>
                </form>
            </div>

            <Footer />
        </>
    )
}