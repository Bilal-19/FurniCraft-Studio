import React from "react";
import { motion } from "framer-motion"

export default function TrendingDesignCard(props) {
    return (
        <>
            <motion.div
                className="mx-auto md:mx-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}>
                <img src={props.image} className="rounded-lg" alt={props.product_name} />
                <p className="font-medium md:text-lg ff-roboto mt-3 mb-2">{props.product_name}</p>
                <p className="font-semibold ff-roboto">${props.price}</p>
            </motion.div>
        </>
    )
}