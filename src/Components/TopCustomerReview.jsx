import React from "react";
import { motion } from "framer-motion";

export default function TopCustomerReview(props) {
    return (
        <>
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }} className="w-80 md:w-1/3 bg-white border border-gray-200 mx-auto mb-5 md:mb-0 md:mx-5 px-5 py-3 rounded-lg shadow">
                <div className="flex">
                    <img src={props.customer_profile} alt="" />
                    <div className="ml-2">
                        <p className="ff-roboto font-medium">{props.customer_name}</p>
                        <p>
                            <i className="fa-solid fa-star text-[#FFD43B]"></i>
                            <i className="fa-solid fa-star text-[#FFD43B]"></i>
                            <i className="fa-solid fa-star text-[#FFD43B]"></i>
                            <i className="fa-solid fa-star text-[#FFD43B]"></i>
                            <i className="fa-solid fa-star text-[#FFD43B]"></i>
                        </p>
                    </div>
                </div>
                <p className="ff-roboto text-[#4B5563] mt-5">"{props.customer_message}"</p>
            </motion.div>
        </>
    )
}