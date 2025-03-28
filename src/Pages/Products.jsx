import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";

export default function Products() {
    return (
        <>
            <Header />

            <h2 className="text-3xl ff-roboto mx-5 mt-10">Our Collections</h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 mb-40">
                <ProductCard
                    image_path="/velvet-sofa.png"
                    product_name="Modern Velvet Sofa"
                    product_description="Premium comfort with elegant design"
                    product_price="2,499"
                />

                <ProductCard
                    image_path="/leather-armchair.png"
                    product_name="Leather Armchair"
                    product_description="Classic comfort in genuine leather"
                    product_price="1,299"
                />

                <ProductCard
                    image_path="/marble-coffee-table.png"
                    product_name="Marble Coffee Table"
                    product_description="Elegant marble with gold accents"
                    product_price="899"
                />

                <ProductCard
                    image_path="/modern-sectional-sofa.png"
                    product_name="Modern Sectional Sofa"
                    product_description="Spacious comfort for the whole family"
                    product_price="3,499"
                />

                <ProductCard
                    image_path="/designer-console-table.png"
                    product_name="Designer Console Table"
                    product_description="Elegant storage solution"
                    product_price="1,199"
                />

<ProductCard
                    image_path="/boucle-accent-chair.png"
                    product_name="Bouclé Accent Chair"
                    product_description="Textured comfort and style"
                    product_price="899"
                />
            </div>

            <Footer />
        </>
    )
}