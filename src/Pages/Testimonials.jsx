import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ReviewCard from "../Components/ReviewCard";
import { customerReviewRecords } from "../assets/JS/customerReviews";

export default function Testimonials() {
    return (
        <>
            <Header />

            <div class="w-full flex flex-col-reverse md:flex-row items-center ff-roboto">
                <div class="w-80 md:w-1/2 md:m-5">
                    <h2 className="text-2xl md:text-6xl font-medium mb-3">Real Stories from Real Customers</h2>
                    <p className="text-[#6B7280] text-md md:text-xl">
                        Discover how our furniture and interior design solutions have
                        transformed homes and lives. Read authentic experiences
                        shared by our valued customers.
                    </p>
                </div>
                <div class="w-80 md:w-1/2 mb-3 md:m-5">
                    <img src="testimonial-banner.png" alt="testimonial image" />
                </div>
            </div>

            <div class="w-full my-20 flex flex-col md:flex-row">
                {customerReviewRecords.map((val, key) => (
                    <>
                        <ReviewCard customerProfile={val.customerProfile} customerName={val.customerName} customerLoc={val.customerLoc} reviewMsg={val.reviewMsg} productImgPath={val.productImgPath} />
                    </>
                ))}
            </div>
            <Footer />
        </>
    )
}