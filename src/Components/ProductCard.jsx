import React from "react";

export default function ProductCard(props) {
    return (
        <>
            <div className="w-80 md:w-100 ff-roboto mb-12 mx-auto md:m-5">
                <img src={props.image_path} alt={props.product_name} className="w-100 h-60 object-cover rounded-md hover:scale-102 duration-200" />
                <h5 className="font-medium text-lg md:mb-2 mt-3">{props.product_name}</h5>
                <p className="text-[#4B5563] md:mb-2">{props.product_description}</p>
                <p className="text-xl font-medium">${props.product_price}</p>
            </div>
        </>
    )
}