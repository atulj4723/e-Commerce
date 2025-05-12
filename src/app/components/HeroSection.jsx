import React from "react";
import data from "../_lib/data";
import Link from "next/link";

const HeroSection = ({ data }) => {
    const product = data;

    return (
        <div className="flex  items-center p-6 h-auto  flex-col-reverse  justify-evenly  md:flex-row">
            <div className="w-[100%] md:w-[50%] flex flex-col gap-2 items-start">
                <h1 className="text-3xl font-extrabold">{product.title}</h1>
                {product.title.length < 100 && (
                    <h2 className="text-2xl font-bold">
                        {product.description.length > 150
                            ? product.description.slice(0, 150) + "..."
                            : product.description}
                    </h2>
                )}
                <Link
                    href={`/productdetails/${product.id}`}
                    className="bg-black text-white text-3xl px-4 py-2 rounded-lg font-bold">
                    Shop Now
                </Link>
            </div>

            <img
                src={product.image}
                alt=""
                className="h-auto md:h-[80vh] w-[50%] object-contain"
            />
        </div>
    );
};

export default HeroSection;
