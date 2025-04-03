import React from "react"
import {motion} from "framer-motion"

export default function WhyChooseUsCard(props) {
    return (
        <>
            <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }} className="w-80 md:w-1/4 md:m-2 rounded-lg bg-white p-10 text-center ff-roboto border border-gray-300 shadow mb-5 md:mb-0 mx-auto">
                <img src={props.image_path} alt={props.name} className="mx-auto mb-5" />
                <h4 className="font-semibold text-xl mb-5">{props.heading}</h4>
                <p className="md:w-60 mx-auto text-[#4B5563]">{props.description}</p>
            </motion.div>
        </>
    )
}