import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import FeaturedCollectionCard from "../Components/FeaturedCollectionCard";
import TrendingDesignCard from "../Components/TrendingDesignCard";
import DesignInspirationCard from "../Components/DesignInspirationCard";
import TopCustomerReview from "../Components/TopCustomerReview";

export default function Home() {
    return (
        <>

            <Header />

            <div className="relative w-full bg-[url(/home-banner.jpg)] h-100 md:h-250 bg-cover bg-no-repeat flex flex-col justify-center text-white">
                <div className="absolute inset-0 bg-black/40"></div>
                <motion.h2 initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }} className="relative ff-playfair text-2xl md:text-7xl font-medium text-center">
                    Transform Your Space,
                    <br />
                    Elevate Your Lifestyle
                </motion.h2>
                <button
                    className="relative ff-roboto w-fit mx-auto py-3 px-5 mt-5 rounded-sm bg-black hover:bg-gray-800 hover:cursor-pointer text-md md:text-lg">
                    View Collections
                </button>
            </div>

            <div className="container-fluid bg-[#efefef] pt-10 pb-10 md:pt-15 md:pb-15">
                <motion.h3
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center ff-playfair font-bold text-2xl md:text-[40px]">
                    Featured Collections
                </motion.h3>

                <div className="flex flex-col md:flex-row md:justify-around items-center mt-15 mb-15">
                    <FeaturedCollectionCard imagePath="/fc_sofa.png" altText="Sofa" initialBottomVal={50} />
                    <FeaturedCollectionCard imagePath="/fc_room.png" altText="Sofa" initialBottomVal={100} />
                    <FeaturedCollectionCard imagePath="/fc_dinning.png" altText="Sofa" initialBottomVal={150} />
                </div>
            </div>

            <div className="container-fluid pt-10 pb-10 md:pt-15 md:pb-15">
                <h3 className="text-center ff-playfair font-bold text-2xl md:text-[40px] mt-15 mb-15">Trending Designs</h3>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <TrendingDesignCard image="/velvet-chair.png" product_name="Velvet Accent Chair" price="899" />
                        <TrendingDesignCard image="/marble-dinning-table.png" product_name="Marble Dining Table" price="2,499" />
                        <TrendingDesignCard image="/pendant-light.png" product_name="Modern Pendant Light" price="599" />
                        <TrendingDesignCard image="/bed-frame.png" product_name="Tufted Bed Frame" price="1,899" />
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-[#efefef] pt-10 pb-10 md:pt-15 md:pb-15">
                <h3 className="text-center ff-playfair font-bold text-2xl md:text-[40px] mt-15 mb-15">Design Inspiration</h3>

                <div className="flex flex-col md:flex-row justify-around">
                    <DesignInspirationCard image="/di-room.png" image_name="room" />
                    <DesignInspirationCard image="/di-bedroom.png" image_name="bedroom" />
                    <DesignInspirationCard image="/di-dinning.png" image_name="dinning" />
                </div>
            </div>


            <div className="w-full bg-[#F9FAFB] pt-10 pb-10 md:pt-15 md:pb-15">
                <h3 className="text-center ff-playfair font-bold text-2xl md:text-[40px]">What Our Customers Say</h3>

                <div className="w-full flex flex-col md:flex-row mt-10">
                    <TopCustomerReview
                        customer_profile="/sarah.png"
                        customer_name="Sarah Johnson"
                        customer_message="The quality of furniture and attention to detail
                            exceeded my expectations. The design team was
                            incredibly helpful in creating my perfect living space."
                    />

                    <TopCustomerReview
                        customer_profile="/michael_profile.png"
                        customer_name="Michael Chen"
                        customer_message="Exceptional service from start to finish. The furniture
                            pieces are not only beautiful but also incredibly
                            comfortable and well-made."
                    />

                    <TopCustomerReview
                        customer_profile="/emma_profile.png"
                        customer_name="Emma Thompson"
                        customer_message="I'm absolutely in love with my new dining set. The
                            quality is outstanding, and it perfectly matches the
                            design aesthetic I was looking for."
                    />
                </div>
            </div>

            <div className="bg-[#efefef] flex flex-col items-center">
                <h3 className="text-center ff-playfair font-bold text-xl md:text-4xl mt-15 mb-5">Join Our Design Community</h3>
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