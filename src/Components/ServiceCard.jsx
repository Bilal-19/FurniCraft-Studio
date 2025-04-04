import React from "react";
import {motion} from "framer-motion"

export default function ServiceCard(props) {
    return (
        <>
            <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }} class="bg-[#ffffff] p-5 border border-gray-200 rounded-lg ff-roboto m-5">
                <img src={props.service_image} alt={props.service_name} />
                <h5 className="text-xl font-semibold mt-3 mb-3">{props.service_name}</h5>
                <p className="text-[#4B5563]">{props.service_description}</p>
            </motion.div>
        </>
    )
}