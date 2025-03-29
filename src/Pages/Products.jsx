import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import { productRecords } from "../assets/JS/products";

export default function Products() {
    return (
        <>
            <Header />

            <h2 className="text-3xl ff-roboto mx-5 mt-10">Our Collections</h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 mb-40">
                {productRecords.map((val, key) => (
                    <>
                        <ProductCard
                            image_path={val.image_path}
                            product_name={val.product_name}
                            product_description={val.product_description}
                            product_price={val.product_price}
                        />
                    </>
                ))}
            </div>

            <Footer />
        </>
    )
}