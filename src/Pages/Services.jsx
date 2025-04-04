import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ServiceCard from "../Components/ServiceCard";

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
                <ServiceCard
                    service_image="/custom-furniture-design.png"
                    service_name="Custom Furniture Design"
                    service_description="Bespoke furniture pieces crafted to your exact
                        specifications, combining aesthetics with
                        functionality to create unique statement pieces for
                        your space."
                />

                <ServiceCard
                    service_image="/Interior-Design-Consultation.png"
                    service_name="Interior Design Consultation"
                    service_description="Expert guidance from our seasoned designers to
                        help you create a cohesive and stunning interior that
                        reflects your personal style."
                />

                <ServiceCard
                    service_image="/space-planning.png"
                    service_name="Space Planning & Renovation"
                    service_description="Comprehensive space transformation services
                        including layout optimization, renovation planning,
                        and execution management."
                />


                <ServiceCard
                    service_image="/kitchen.png"
                    service_name="Modular Kitchen & Wardrobes"
                    service_description="Custom storage solutions designed to maximize
                        space efficiency while maintaining aesthetic appeal
                        and functionality."
                />

                <ServiceCard
                    service_image="/decor.png"
                    service_name="Decor & Styling"
                    service_description="Final touches and accessories selection to bring
                        your space to life, creating the perfect ambiance and
                        atmosphere."
                />
            </div>


            <div class="w-full flex justify-center mt-20 mb-20">
                <button className="bg-black text-white ff-roboto font-medium text-lg py-3 px-6 rounded hover:bg-black/90 hover:cursor-pointer">Book a Free Consultation</button>
            </div>
            <Footer />
        </>
    )
}