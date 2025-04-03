import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion"
import WhyChooseUsCard from "../Components/WhyChooseUsCard";
import TeamCard from "../Components/TeamCard";

export default function About() {
    return (
        <>
            <Header />

            <div className="relative w-full bg-[url(/about-banner.png)] h-80 md:h-100 flex flex-col justify-center">
                <div className="absolute bg-black/50 inset-0"></div>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }} className="relative text-white ff-roboto w-80 md:w-2/4 m-8">
                    <h1 className="text-2xl md:text-5xl font-bold mb-3">Crafting Spaces That Inspire</h1>
                    <p className="text-md md:text-xl">
                        With over two decades of excellence in interior design and custom furniture creation,
                        we transform spaces into extraordinary living experiences.
                    </p>
                </motion.div>
            </div>


            <div className="w-full mt-20 mb-20">
                <div className="w-80 md:w-1/2 mx-auto text-center">
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
                <WhyChooseUsCard
                    image_path="/premium_quality.png"
                    name="premium_quality"
                    heading="Premium-Quality Materials"
                    description="We source the finest materials globally to ensure lasting beauty and durability in every piece we create."
                />

                <WhyChooseUsCard
                    image_path="/custom_sol.png"
                    name="custom_solution"
                    heading="Customized Solutions"
                    description="Each project is uniquely tailored to reflect your personal style and meet your specific needs."
                />

                <WhyChooseUsCard
                    image_path="/price_tag.png"
                    name="price_tag"
                    heading="Affordable & Stylish"
                    description="We deliver sophisticated design solutions that respect your budget without compromising on style."
                />

                <WhyChooseUsCard
                    image_path="/consultation.png"
                    name="consultation"
                    heading="Expert Consultation"
                    description="Our experienced designers provide professional guidance throughout your design journey."
                />
            </div>

            <div className="w-full flex flex-col-reverse md:flex-row items-center mt-20 mb-20">
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }} className="w-80 md:w-1/2 md:m-5 ff-roboto">
                    <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-5">Our Expertise</h3>
                    <p className="text-md md:text-lg text-[#4B5563] mb-5">
                        With over 20 years of experience in interior design and custom furniture creation,
                        our team has developed an unparalleled understanding of space optimization and
                        aesthetic harmony. We pride ourselves on our ability to translate our clients' visions
                        into reality while adding our signature touch of sophistication.
                    </p>
                    <ul className="space-y-2 mb-10 md:mb-0">
                        <li><i className="fa-solid fa-circle-check"></i> <span className="text-[#4B5563]">Award-winning design team</span></li>
                        <li><i className="fa-solid fa-circle-check"></i> <span className="text-[#4B5563]">Sustainable materials and practices</span></li>
                        <li><i className="fa-solid fa-circle-check"></i> <span className="text-[#4B5563]">End-to-end project management</span></li>
                    </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }} className="w-80 md:w-1/2 md:m-5">
                    <div className="grid grid-cols-2 space-x-2 space-y-2">
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
                </motion.div>
            </div>

            <div className="w-full">
                <h3 className="text-lg md:text-3xl ff-roboto font-bold text-center">Meet Our Team</h3>

                <div className="w-full flex flex-col md:flex-row">
                    <TeamCard
                        profile_image="/SarahJohnson.png"
                        member_name="Sarah Johnson"
                        member_designation="Principal Designer"
                        member_description="With 15 years of experience in luxury interior design,
                                Sarah leads our creative vision and ensures every
                                project exceeds expectations."
                    />

                    <TeamCard
                        profile_image="/Michael.png"
                        member_name="Michael Chen"
                        member_designation="Technical Director"
                        member_description="Michael brings technical expertise to our designs,
                                ensuring all custom furniture pieces are perfectly
                                crafted and installed."
                    />

                    <TeamCard
                        profile_image="/Emma.png"
                        member_name="Emma Roberts"
                        member_designation="Design Consultant"
                        member_description="Emma specializes in creating personalized design
                                solutions that perfectly align with our clients' lifestyle
                                and preferences."
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}