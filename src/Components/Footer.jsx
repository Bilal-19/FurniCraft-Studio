import React from "react";

export default function Footer() {
    return (
        <>
            <div className="w-full bg-[#111827] pt-10 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="m-5 md:m-10">
                        <img src="/footer_logo.png" alt="logo" />
                        <p className="text-[#9CA3AF]">
                            Transforming spaces with exceptional
                            design and quality furniture since 2010.
                        </p>
                    </div>

                    <div className="text-white space-y-1 m-5 md:m-10">
                        <h5 className="font-medium text-lg">Company</h5>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Products</p>
                        <p>Testimonials</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="text-white space-y-1 m-5 md:m-10">
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