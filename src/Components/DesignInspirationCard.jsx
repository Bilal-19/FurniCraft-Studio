import React from "react";
import { motion } from "framer-motion"

export default function DesignInspirationCard(props) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }} className="mx-auto md:mx-0 my-5 md:my-0 w-80 md:w-fit">
                <img src={props.image} className="h-100 rounded-lg hover:scale-101 duration-200 object-cover" alt={props.image_name} />
            </motion.div>

        </>
    )
}