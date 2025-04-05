import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ReviewCard from "../Components/ReviewCard";
import { customerReviewRecords } from "../assets/JS/customerReviews";
import { useRef, useState } from "react"
import StatisticCard from "../Components/StatisticCard";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {ToastContainer, toast} from "react-toastify"

export default function Testimonials() {
    const fileInputRef = useRef(null);
    const feedbackForm = useRef();
    const [photo, setPhoto] = useState("")
    const [rating, setStar] = useState(0)

    const handleFileChange = (e) => {
        const fetchFileName = e.target.files[0];

        if (fetchFileName) {
            setPhoto(fetchFileName.name)
        }
    }

    const dispatchEmail = (event) => {
        event.preventDefault();

        const message = feedbackForm.current.message.value.trim();

        if (!photo || rating == 0 || !message){
            toast.error("Please fill all required fields");
        } else {
            emailjs.sendForm(
                'service_v68nuzj',
                'template_q84u7uy',
                feedbackForm.current,
                'RbqjL1PQb_rxrXkaz'
            ).then(res => {
                toast.success("Thank you for sharing valuable feedback.")

                // Reset form fields
                feedbackForm.current.reset()
                setPhoto("");
                setStar(0)
            },(error)=>{
                toast.info("Something went wrong.", error)
            })
        }
    }
    return (
        <>
            <Header />

            <div className="w-full flex flex-col-reverse md:flex-row items-center ff-roboto">
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }} className="w-80 md:w-1/2 md:m-5">
                    <h2 className="text-2xl md:text-6xl font-medium mb-3">Real Stories from Real Customers</h2>
                    <p className="text-[#6B7280] text-md md:text-xl">
                        Discover how our furniture and interior design solutions have
                        transformed homes and lives. Read authentic experiences
                        shared by our valued customers.
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }} className="w-80 md:w-1/2 my-3 md:m-5">
                    <img src="testimonial-banner.png" alt="testimonial image" />
                </motion.div>
            </div>

            <div className="w-full my-20 flex flex-col md:flex-row">
                {customerReviewRecords.map((val, key) => (
                    <>
                        <ReviewCard key={key} customerProfile={val.customerProfile} customerName={val.customerName} customerLoc={val.customerLoc} reviewMsg={val.reviewMsg} productImgPath={val.productImgPath} />
                    </>
                ))}
            </div>

            <div className="w-full my-20">
                <div className="w-80 md:w-1/2 text-center mx-auto ff-roboto">
                    <h3 className="font-bold text-3xl mb-10">Share Your Story</h3>
                    <form ref={feedbackForm} onSubmit={dispatchEmail}>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="photoEl" className="font-medium text-sm text-[#374151] mb-2">Upload Photos</label>
                            <div className="border-2 border-dotted border-gray-600 p-5 md:p-10">
                                <input type="text" required name="photos" id="photoEl" readOnly value={photo} placeholder="Upload a file" onClick={() => fileInputRef.current.click()} className="cursor-pointer focus:outline-none text-center text-sm" />
                                <button onClick={() => fileInputRef.current.click()}></button>
                                <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
                            </div>
                        </div>

                        <div className="flex flex-col mb-5">
                            <label htmlFor="ratingEl" className="font-medium text-sm text-[#374151] mb-2">Your Rating</label>
                            <div>
                                {[1, 2, 3, 4, 5].map(star => (
                                    <button key={star} onClick={(e) => { setStar(star); e.preventDefault(); }} className={`text-4xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>★</button>
                                ))}
                            </div>
                            <input type="hidden" name="rating" value={rating}/>
                        </div>

                        <div className="flex flex-col mb-5">
                            <label htmlFor="reviewEl" className="font-medium text-sm text-[#374151] mb-2">Your Review</label>
                            <textarea name="message" id="reviewEl" className="resize-none border border-grey-100 focus:outline-none p-5 text-[#6B7280]" placeholder="Share your experience..."></textarea>
                        </div>

                        <button className="bg-black w-full py-2 text-white rounded-md hover:cursor-pointer">Submit Review</button>
                        <ToastContainer/>
                    </form>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-around ff-roboto my-20">
                <StatisticCard score="2,547" description="Total Reviews" />
                <StatisticCard score="4.8/5" description="Average Rating" />
                <StatisticCard score="98%" description="Customer Satisfaction" />
                <StatisticCard score="15,234" description="Customer Served" />
            </div>

            <Footer />
        </>
    )
}