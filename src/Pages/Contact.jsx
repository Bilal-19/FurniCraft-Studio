import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function Contact() {
    return (
        <>
            <Header />

            <div className="relative w-full bg-[url('/contact-banner.png')] bg-cover h-40 md:h-90 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-black/50"></div>
                <h2 className="absolute ff-roboto text-white font-medium text-3xl md:text-5xl">Contact Us</h2>
            </div>

            <div className="my-20 md:my-40 container mx-auto flex flex-col md:flex-row">
                <div className="w-80 mx-auto md:w-1/2 ff-roboto">
                    <h4 className="font-medium text-xl md:text-3xl">Get in Touch</h4>

                    <h6 className="md:text-lg font-medium mt-5">Visit Our Showroom</h6>
                    <p className="text-[#4B5563]"><i className="fa-solid fa-location-dot"></i> 123 Luxury Avenue, New York, NY 10001</p>

                    <h6 className="md:text-lg font-medium mt-5">Contact Information</h6>
                    <p className="text-[#4B5563]"><i className="fa-solid fa-phone"></i> +92 3082491543</p>
                    <p className="text-[#4B5563]"><i className="fa-solid fa-envelope"></i> contact@furnicraft.com</p>
                    <p className="text-[#4B5563]"><i className="fa-solid fa-clock"></i> Mon - Sat: 10:00 AM - 7:00 PM</p>

                    <div className="border border-gray-200 rounded-md shadow-md p-5 bg-white my-10 md:w-4/5">
                        <h4 className="font-medium text-lg mb-3">Book an Appointment</h4>
                        <p className="text-[#4B5563] mb-3">
                            Experience our collection with a personal consultation from our design
                            experts.
                        </p>
                        <button className="bg-black text-white px-3 py-2 rounded">Schedule Now</button>
                    </div>
                </div>

                <div className="w-80 mx-auto md:w-1/2 bg-white border border-gray-200 p-5 rounded-md ff-roboto shadow-md">
                    <h4 className="font-medium text-xl md:text-3xl">Send Us a Message</h4>

                    <form action="">
                        <div className="flex flex-col md:w-4/5 my-5">
                            <label htmlFor="fname">Full Name *</label>
                            <input type="text" name="fname" id="fname" className="focus:outline-none border border-gray-300 px-3 py-2" placeholder="Enter Your Name" />
                        </div>

                        <div className="flex flex-col md:w-4/5 my-5">
                            <label htmlFor="emailAddress">Email Address *</label>
                            <input type="email" name="emailAddress" id="emailAddress" className="focus:outline-none border border-gray-300 px-3 py-2" placeholder="Enter Your Email" />
                        </div>

                        <div className="flex flex-col md:w-4/5 my-5">
                            <label htmlFor="phoneNumber">Phone Number *</label>
                            <input type="text" name="phoneNumber" id="phoneNumber" className="focus:outline-none border border-gray-300 px-3 py-2" placeholder="Enter Your Phone Number" />
                        </div>

                        <div className="flex flex-col md:w-4/5 my-5">
                            <label htmlFor="message">Message *</label>
                            <textarea name="message" id="message" className="focus:outline-none border border-gray-300 px-3 py-2 resize-none" rows="5" placeholder="How can we help you?"></textarea>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}