import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="w-full bg-[#111827] pt-10 pb-10 ff-roboto">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="w-80 md:w-2/5 m-2 md:m-5">
                        <img src="/footer_logo.png" alt="logo" />
                        <p className="text-[#9CA3AF]">
                            Transform your space into something
                            extraordinary with our premium interior
                            design services.
                        </p>
                    </div>

                    <div className="w-80 md:w-1/5 text-white space-y-1 m-2 md:m-5">
                        <h5 className="font-medium text-lg">Contact</h5>
                        <p className="text-[#9CA3AF]">+92 3082491543</p>
                        <p className="text-[#9CA3AF]">contact@furnicraft.com</p>
                        <p className="text-[#9CA3AF]">Mon-Fri, 9:00 AM - 6:00 PM</p>
                    </div>

                    <div className="w-80 md:w-1/5 text-white m-2 md:m-5 flex flex-col">
                        <h5 className="font-medium text-lg">Company</h5>
                        <Link to="/about" className="text-[#9CA3AF]">About</Link>
                        <Link to="/services" className="text-[#9CA3AF]">Services</Link>
                        <Link to="/products" className="text-[#9CA3AF]">Products</Link>
                        <Link to="/testimonials" className="text-[#9CA3AF]">Testimonials</Link>
                        <Link to="/contact" className="text-[#9CA3AF]">Contact Us</Link>
                    </div>

                    <div className="w-80 md:w-1/5 text-white space-y-1 m-2 md:m-5">
                        <h5 className="font-medium text-lg">Connect</h5>
                        <div className="space-x-5">
                            <i className="text-[#9CA3AF] fa-brands fa-instagram"></i>
                            <i className="text-[#9CA3AF] fa-brands fa-pinterest"></i>
                            <i className="text-[#9CA3AF] fa-brands fa-facebook"></i>
                            <i className="text-[#9CA3AF] fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}