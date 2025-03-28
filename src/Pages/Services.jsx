import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Services() {
    return (
        <>
            <Header />

            <div className="relative w-full bg-[url(/service-banner.png)] h-60 md:h-115 bg-cover bg-no-repeat flex flex-col items-center justify-center text-center ff-roboto text-white">
                <div class="absolute inset-0 bg-black/40"></div>
                <div class="absolute">
                    <h2 className="text-3xl md:text-5xl font-bold">Our Services</h2>
                    <p className="text-sm md:text-xl">
                        Transforming spaces into extraordinary living experiences
                    </p>
                </div>
            </div>

            <div class="w-full mt-20 mb-20 grid md:grid-cols-3">
                <div class="bg-[#ffffff] p-5 border border-gray-200 rounded-lg ff-roboto m-5">
                    <img src="/custom-furniture-design.png" alt="custom-furniture-design" />
                    <h5 className="text-xl font-semibold mt-3 mb-3">Custom Furniture Design</h5>
                    <p className="text-[#4B5563]">
                        Bespoke furniture pieces crafted to your exact
                        specifications, combining aesthetics with
                        functionality to create unique statement pieces for
                        your space.
                    </p>
                </div>

                <div class="bg-[#ffffff] p-5 border border-gray-200 rounded-lg ff-roboto m-5">
                    <img src="/Interior-Design-Consultation.png" alt="Interior-Design-Consultation" />
                    <h5 className="text-xl font-semibold mt-3 mb-3">Interior Design Consultation</h5>
                    <p className="text-[#4B5563]">
                        Expert guidance from our seasoned designers to
                        help you create a cohesive and stunning interior that
                        reflects your personal style.
                    </p>
                </div>

                <div class="bg-[#ffffff] p-5 border border-gray-200 rounded-lg ff-roboto m-5">
                    <img src="/space-planning.png" alt="space-planning" />
                    <h5 className="text-xl font-semibold mt-3 mb-3">Space Planning & Renovation</h5>
                    <p className="text-[#4B5563]">
                        Comprehensive space transformation services
                        including layout optimization, renovation planning,
                        and execution management.
                    </p>
                </div>

                <div class="bg-[#ffffff] p-5 border border-gray-200 rounded-lg ff-roboto m-5">
                    <img src="/kitchen.png" alt="kitchen" />
                    <h5 className="text-xl font-semibold mt-3 mb-3">Modular Kitchen & Wardrobes</h5>
                    <p className="text-[#4B5563]">
                        Custom storage solutions designed to maximize
                        space efficiency while maintaining aesthetic appeal
                        and functionality.
                    </p>
                </div>

                <div class="bg-[#ffffff] p-5 border border-gray-200 rounded-lg ff-roboto m-5">
                    <img src="/decor.png" alt="decor" />
                    <h5 className="text-xl font-semibold mt-3 mb-3">Decor & Styling</h5>
                    <p className="text-[#4B5563]">
                        Final touches and accessories selection to bring
                        your space to life, creating the perfect ambiance and
                        atmosphere.
                    </p>
                </div>


            </div>


            <div class="w-full flex justify-center mt-20 mb-20">
                <button className="bg-black text-white ff-roboto font-medium text-lg py-3 px-6 rounded hover:bg-black/90 hover:cursor-pointer">Book a Free Consultation</button>
            </div>
            <Footer />
        </>
    )
}