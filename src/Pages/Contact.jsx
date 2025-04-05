import React, { useRef, useState } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify"

export default function Contact() {
    const contactForm = useRef();
    const [fname, setFullName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")

    const submitContactForm = (e) => {
        e.preventDefault();

        if (!fname || !emailAddress || !phoneNumber || !message) {
            toast.error("Please fill all fields")
        } else {
            emailjs.sendForm(
                'service_v68nuzj',
                'template_grts4y9',
                contactForm.current,
                'RbqjL1PQb_rxrXkaz'
            ).then(res => {
                toast.success("We've received your inquiry. Our team will contact you soon.")
                // Reset form fields
                contactForm.current.reset()
            }, (error) => {
                toast.info("Something went wrong.", error)
            })
        }

    }
    return (
        <>
            <Header />

            <div className="relative w-full bg-[url('/contact-banner.png')] bg-cover h-40 md:h-90 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-black/40"></div>
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
                        <a className="bg-black text-white px-3 py-2 rounded" href="#schedule-now">Schedule Now</a>
                    </div>
                </div>

                <div className="w-80 mx-auto md:w-1/2 bg-white border border-gray-200 p-5 rounded-md ff-roboto shadow-md" id="schedule-now">
                    <h4 className="font-medium text-xl md:text-3xl text-center">Send Us a Message</h4>

                    <form ref={contactForm} onSubmit={submitContactForm}>
                        <div className="flex flex-col md:w-4/5 my-5 mx-auto">
                            <label htmlFor="fname">Full Name *</label>
                            <input type="text" name="fname" id="fname" className="focus:outline-none border border-gray-300 px-3 py-2" placeholder="Enter Your Name" onChange={(e)=>setFullName(e.target.value)} />
                        </div>

                        <div className="flex flex-col md:w-4/5 my-5 mx-auto">
                            <label htmlFor="emailAddress">Email Address *</label>
                            <input type="email" name="emailAddress" id="emailAddress" className="focus:outline-none border border-gray-300 px-3 py-2" placeholder="Enter Your Email" onChange={(e)=>setEmailAddress(e.target.value)} />
                        </div>

                        <div className="flex flex-col md:w-4/5 my-5 mx-auto">
                            <label htmlFor="phoneNumber">Phone Number *</label>
                            <input type="text" name="phoneNumber" id="phoneNumber" className="focus:outline-none border border-gray-300 px-3 py-2" placeholder="Enter Your Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>

                        <div className="flex flex-col md:w-4/5 my-5 mx-auto">
                            <label htmlFor="message">Message *</label>
                            <textarea name="message" id="message" className="focus:outline-none border border-gray-300 px-3 py-2 resize-none" rows="5" placeholder="How can we help you?" onChange={(e)=>setMessage(e.target.value)}></textarea>
                        </div>

                        <div className="flex flex-col md:w-4/5 my-5 mx-auto">
                            <button className="bg-black text-white px-3 py-2 rounded cursor-pointer">Send Message</button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}