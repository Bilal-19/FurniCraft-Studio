import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function About() {
    return (
        <>
            <Header />

            <div className="relative w-full bg-[url(/about-banner.png)] h-80 md:h-100 flex flex-col justify-center">
                <div class="absolute bg-black/40 inset-0"></div>
                <div className="relative text-white ff-roboto w-80 md:w-2/4 m-8">
                    <h1 className="text-2xl md:text-5xl font-bold ">Crafting Spaces That Inspire</h1>
                    <p className="text-md md:text-xl">
                        With over two decades of excellence in interior design and custom furniture creation,
                        we transform spaces into extraordinary living experiences.
                    </p>
                </div>
            </div>


            <div class="w-full mt-20 mb-20">
                <div class="w-80 md:w-1/2 mx-auto text-center">
                    <img src="/logo.png" alt="logo" className="mx-auto mb-10 h-25" />
                    <h3 className="text-[#111827] ff-roboto font-bold text-xl md:text-3xl mb-5 md:mb-10">Our Mission</h3>
                    <p className="ff-roboto text-[#4B5563]">
                        We believe that every space has the potential to be extraordinary. Our mission is to create
                        thoughtfully designed interiors that perfectly balance aesthetics with functionality, bringing our
                        clients' visions to life through expert craftsmanship and innovative design solutions.
                    </p>
                </div>
            </div>

            <div className="w-full bg-[#f9fafb] flex flex-col md:flex-row justify-around pt-10 pb-10">
                <div className="w-80 md:w-fit rounded-lg bg-white p-10 text-center ff-roboto border border-gray-300 shadow mb-5 md:mb-0 mx-auto md:mx-0">
                    <img src="/premium_quality.png" alt="premium_quality" className="mx-auto mb-5" />
                    <h4 className="font-semibold text-xl mb-5">Premium-Quality Materials</h4>
                    <p className="md:w-60 mx-auto text-[#4B5563]">
                        We source the finest materials globally to ensure lasting beauty and durability in every piece we create.
                    </p>
                </div>


                <div className="w-80 md:w-fit rounded-lg bg-white p-10 text-center ff-roboto border border-gray-300 shadow mb-5 md:mb-0 mx-auto md:mx-0">
                    <img src="/custom_sol.png" alt="custom_solution" className="mx-auto mb-5" />
                    <h4 className="font-semibold text-xl mb-5">Customized Solutions</h4>
                    <p className="md:w-60 mx-auto text-[#4B5563]">
                        Each project is uniquely tailored to reflect your personal style and meet your specific needs.
                    </p>
                </div>

                <div className="w-80 md:w-fit rounded-lg bg-white p-10 text-center ff-roboto border border-gray-300 shadow mb-5 md:mb-0 mx-auto md:mx-0">
                    <img src="/price_tag.png" alt="price_tag" className="mx-auto mb-5" />
                    <h4 className="font-semibold text-xl mb-5">Affordable & Stylish</h4>
                    <p className="md:w-60 mx-auto text-[#4B5563]">
                        We deliver sophisticated design solutions that respect your budget without compromising on style.
                    </p>
                </div>

                <div className="w-80 md:w-fit rounded-lg bg-white p-10 text-center ff-roboto border border-gray-300 shadow mb-5 md:mb-0 mx-auto md:mx-0">
                    <img src="/consultation.png" alt="consultation" className="mx-auto mb-5" />
                    <h4 className="font-semibold text-xl mb-5">Expert Consultation</h4>
                    <p className="md:w-60 mx-auto text-[#4B5563]">
                        Our experienced designers provide professional guidance throughout your design journey.
                    </p>
                </div>
            </div>

            <div class="w-full flex flex-col md:flex-row items-center mt-20 mb-20">
                <div className="w-80 md:w-1/2 md:m-5 ff-roboto">
                    <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-5">Our Expertise</h3>
                    <p className="text-md md:text-lg text-[#4B5563] mb-5">
                        With over 20 years of experience in interior design and custom furniture creation,
                        our team has developed an unparalleled understanding of space optimization and
                        aesthetic harmony. We pride ourselves on our ability to translate our clients' visions
                        into reality while adding our signature touch of sophistication.
                    </p>
                    <ul className="space-y-2 mb-10 md:mb-0">
                        <li><i class="fa-solid fa-circle-check"></i> <span className="text-[#4B5563]">Award-winning design team</span></li>
                        <li><i class="fa-solid fa-circle-check"></i> <span className="text-[#4B5563]">Sustainable materials and practices</span></li>
                        <li><i class="fa-solid fa-circle-check"></i> <span className="text-[#4B5563]">End-to-end project management</span></li>
                    </ul>
                </div>
                <div className="md:w-1/2 md:m-5">
                    <div className="grid md:grid-cols-2 space-x-2 space-y-2">
                        <div>
                            <img src="/expertise_1.png" alt="" />
                        </div>
                        <div>
                            <img src="/expertise_2.png" alt="" />
                        </div>
                        <div>
                            <img src="/expertise_3.png" alt="" />
                        </div>
                        <div>
                            <img src="/expertise_4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full">
                <h3 className="text-lg md:text-3xl ff-roboto font-bold text-center">Meet Our Team</h3>

                <div className="w-full flex flex-col md:flex-row">
                    <div className="w-80 md:w-1/3 p-5 ff-roboto mx-auto md:mx-0">
                        <img src="/SarahJohnson.png" alt="Sarah Johnson profile" className="rounded mb-3" />
                        <div className="p-2">
                            <h5 className="font-semibold md:text-xl mb-2">Sarah Johnson</h5>
                            <p>Principal Designer</p>
                            <p className="text-[#4B5563] mt-2">
                                With 15 years of experience in luxury interior design,
                                Sarah leads our creative vision and ensures every
                                project exceeds expectations.
                            </p>
                        </div>
                    </div>

                    <div className="w-80 md:w-1/3 p-5 ff-roboto mx-auto md:mx-0">
                        <img src="/Michael.png" alt="Michael profile" className="rounded mb-3" />
                        <div class="p-2">
                            <h5 className="font-semibold md:text-xl mb-2">Michael Chen</h5>
                            <p>Technical Director</p>
                            <p className="text-[#4B5563] mt-2">
                                Michael brings technical expertise to our designs,
                                ensuring all custom furniture pieces are perfectly
                                crafted and installed.
                            </p>
                        </div>
                    </div>

                    <div className="w-80 md:w-1/3 p-5 ff-roboto mx-auto md:mx-0">
                        <img src="/Emma.png" alt="Emma profile" className="rounded mb-3" />
                        <div class="p-2">
                            <h5 className="font-semibold md:text-xl mb-2">Emma Roberts</h5>
                            <p>Design Consultant</p>
                            <p className="text-[#4B5563] mt-2">
                                Emma specializes in creating personalized design
                                solutions that perfectly align with our clients' lifestyle
                                and preferences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}