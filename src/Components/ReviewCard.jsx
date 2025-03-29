import React from "react";

export default function ReviewCard(props) {
    return (
        <>
            <div class="w-80 md:w-1/3 ff-roboto border border-gray-300 p-5 rounded-md shadow-md mb-5 md:m-5 mx-auto">
                <div className="flex mb-5 items-center">
                    <div className="mr-2">
                        <img src={props.customerProfile} alt={props.customerName} />
                    </div>
                    <div>
                        <h5 className="font-semibold text-lg text-[#111827]">{props.customerName}</h5>
                        <p className="text-[#6B7280] text-sm">{props.customerLoc}</p>
                    </div>
                </div>
                <p className="mb-3 space-x-2">
                    <span>
                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                        <i className="fa-solid fa-star text-[#FFD43B]"></i>
                    </span>
                    <span className="text-sm text-[#6B7280]">
                        Verified Purchaser
                    </span>
                </p>
                <p className="text-[#4B5563] mb-5">
                    {props.reviewMsg}
                </p>
                <img src={props.productImgPath} alt="" />
            </div>
        </>
    )
}