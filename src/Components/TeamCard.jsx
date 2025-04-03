import React from "react";
import {motion} from "framer-motion"

export default function TeamCard(props) {
    return (
        <>
            <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }} className="w-90 md:w-1/3 p-5 ff-roboto mx-auto md:mx-0">
                <img src={props.profile_image} alt={props.member_name} className="rounded mb-3" />
                <div className="p-2">
                    <h5 className="font-semibold md:text-xl mb-2">{props.member_name}</h5>
                    <p>{props.member_designation}</p>
                    <p className="text-[#4B5563] mt-2 text-justify">{props.member_description}</p>
                </div>
            </motion.div>
        </>
    )
}