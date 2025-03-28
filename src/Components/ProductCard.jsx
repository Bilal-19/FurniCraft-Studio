import React from "react";

export default function ProductCard(props) {
    return (
        <>
            <div className="w-80 md:w-fit ff-roboto mx-auto mb-12 md:m-5">
                <img src={props.image_path} alt={props.product_name} />
                <h5 className="font-medium text-lg md:mb-2 mt-3">{props.product_name}</h5>
                <p className="text-[#4B5563] md:mb-2">{props.product_description}</p>
                <p className="text-xl font-medium">${props.product_price}</p>
            </div>
        </>
    )
}