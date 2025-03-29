import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ReviewCard from "../Components/ReviewCard";
import { customerReviewRecords } from "../assets/JS/customerReviews";
import { useRef, useState } from "react"

export default function Testimonials() {
    const fileInputRef = useRef(null);
    const [photo, setPhoto] = useState("")
    const [rating, setStar] = useState(0)

    const handleFileChange = (e) => {
        const fetchFileName = e.target.files[0];

        if (fetchFileName) {
            setPhoto(fetchFileName.name)
        }
    }
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
                <div class="w-80 md:w-1/2 my-3 md:m-5">
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

            <div class="w-full my-20">
                <div class="w-80 md:w-1/2 text-center mx-auto ff-roboto">
                    <h3 className="font-bold text-3xl mb-10">Share Your Story</h3>
                    <form onClick={(e) => e.preventDefault}>
                        <div className="flex flex-col mb-5">
                            <label for="photoEl" className="font-medium text-sm text-[#374151] mb-2">Upload Photos</label>
                            <div className="border-2 border-dotted border-gray-600 p-5 md:p-10">
                                <input type="text" name="photos" id="photoEl" readOnly value={photo} placeholder="Upload a file" onClick={() => fileInputRef.current.click()} className="cursor-pointer focus:outline-none text-center text-sm" />
                                <button onClick={() => fileInputRef.current.click()}></button>
                                <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
                            </div>
                        </div>

                        <div className="flex flex-col mb-5">
                            <label for="ratingEl" className="font-medium text-sm text-[#374151] mb-2">Your Rating</label>
                            <div>
                                {[1, 2, 3, 4, 5].map(star => (
                                    <button key={star} onClick={(e) => { setStar(star); e.preventDefault(); }} className={`text-4xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>★</button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col mb-5">
                            <label for="reviewEl" className="font-medium text-sm text-[#374151] mb-2">Your Review</label>
                            <textarea name="message" id="reviewEl" className="resize-none border border-grey-100 focus:outline-none p-5 text-[#6B7280]" placeholder="Share your experience..."></textarea>
                        </div>

                        <button className="bg-black w-full py-2 text-white rounded-md hover:cursor-pointer">Submit Review</button>
                    </form>
                </div>
            </div>

            <div class="w-full flex flex-col md:flex-row justify-around ff-roboto my-20">
                <div class="w-70 mx-auto md:w-1/5 border border-gray-300 shadow-md flex justify-center p-5 m-2 md:m-5">
                    <h4 className="text-xl md:text-3xl font-semibold text-[#111827] mr-2">2,547</h4>
                    <p className="font-medium text-xs md:text-sm text-[#6B7280]">Total Reviews</p>
                </div>

                <div class="w-70 mx-auto md:w-1/5 border border-gray-300 shadow-md flex justify-center p-5 m-2 md:m-5">
                    <h4 className="text-xl md:text-3xl font-semibold text-[#111827] mr-2">4.8/5</h4>
                    <p className="font-medium text-xs md:text-sm text-[#6B7280]">Average Rating</p>
                </div>

                <div class="w-70 mx-auto md:w-1/5 border border-gray-300 shadow-md flex justify-center p-5 m-2 md:m-5">
                    <h4 className="text-xl md:text-3xl font-semibold text-[#111827] mr-2">98%</h4>
                    <p className="font-medium text-xs md:text-sm text-[#6B7280]">Customer Satisfaction</p>
                </div>

                <div class="w-70 mx-auto md:w-1/5 border border-gray-300 shadow-md flex justify-center p-5 m-2 md:m-5">
                    <h4 className="text-xl md:text-3xl font-semibold text-[#111827] mr-2">15,234</h4>
                    <p className="font-medium text-xs md:text-sm text-[#6B7280]">Customer Served</p>
                </div>
            </div>

            <Footer />
        </>
    )
}