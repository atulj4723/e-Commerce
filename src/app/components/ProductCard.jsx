"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }) => {
    const router = useRouter();
    return (
        <div
            className="m-3  hover:scale-105 border-2 max-w-[300px] overflow-hidden border-gray-300  bg-white shadow-lg rounded-2xl p-3"
            onClick={() => router.push(`/productdetails/${product.id}`)}>
            <img
                src={product.image}
                alt=""
                className="h-[200px] w-[200px] p-3 m-auto object-contain border-2 border-gray-300 rounded-2xl"
            />
            <h1 className="font-semibold p-1 flex justify-center">
                {product.title}
            </h1>
            {product.offer ? (
                <div className="flex gap-1 justify-center p-1 items-end">
                    <h2 className="font-bold  text-xl">
                        ₹
                        {(
                            product.price -
                            (product.price * product.offer) / 100
                        ).toFixed(2)}
                    </h2>
                    <h2 className="font-bold   text-base line-through text-red-500">
                        ₹{product.price}
                    </h2>
                    <h2 className="font-bold  text-xl text-green-500">
                        {product.offer}% off
                    </h2>
                </div>
            ) : (
                <h2 className="font-semibold flex justify-center p-1 text-xl">
                    ₹{product.price}
                </h2>
            )}
        </div>
    );
};

export default ProductCard;
