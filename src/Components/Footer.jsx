import React from "react";

export default function Footer() {
    return (
        <>
            <div className="w-full bg-[#111827] pt-10 pb-10">
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
                        <p className="text-[#9CA3AF]">923427634247</p>
                        <p className="text-[#9CA3AF]">info@furnicraftstudio.com</p>
                        <p className="text-[#9CA3AF]">Mon-Fri, 9:00 AM - 6:00 PM</p>
                    </div>

                    <div className="w-80 md:w-1/5 text-white space-y-1 m-2 md:m-5">
                        <h5 className="font-medium text-lg">Company</h5>
                        <p className="text-[#9CA3AF]">About Us</p>
                        <p className="text-[#9CA3AF]">Services</p>
                        <p className="text-[#9CA3AF]">Products</p>
                        <p className="text-[#9CA3AF]">Testimonials</p>
                        <p className="text-[#9CA3AF]">Contact Us</p>
                    </div>

                    <div className="w-80 md:w-1/5 text-white space-y-1 m-2 md:m-5">
                        <h5 className="font-medium text-lg">Connect</h5>
                        <div className="space-x-5">
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-pinterest"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}