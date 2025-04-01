import React from "react";
import {motion} from "framer-motion"

export default function FeaturedCollectionCard(props) {
    return (
        <>
            <div className="w-80 md:w-fit">
                <motion.img initial={{ opacity: 0, y: props.initialBottomVal }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} src={props.imagePath} className="h-120 rounded-lg hover:scale-101 duration-200 object-cover" alt={props.altText} />
            </div>
        </>
    )
}