import React from "react";

export default function StatisticCard(props) {
    return (
        <>
            <div className="w-70 mx-auto md:w-1/5 border border-gray-300 shadow-md flex justify-center p-5 m-2 md:m-5">
                <h4 className="text-xl md:text-3xl font-semibold text-[#111827] mr-2">{props.score}</h4>
                <p className="font-medium text-xs md:text-sm text-[#6B7280]">{props.description}</p>
            </div>
        </>
    )
}