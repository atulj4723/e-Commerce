"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }) => {
    const router = useRouter();

    return (
        <div
            className="m-3 max-w-[300px] border-2 border-gray-300 shadow-lg rounded-2xl p-3"
            onClick={() => router.push(`/productdetails/${product.id}`)}>
            <img
                src={product.image}
                alt=""
                className="h-[300px] w-[300px] p-3 object-contain border-2 border-gray-300 rounded-2xl"
            />
            <h1 className="font-bold p-1">{product.title}</h1>
            {
                <h2 className="font-bold p-1">
                    {product.description.length > 50
                        ? product.description.slice(0, 50) + "..."
                        : product.description}
                </h2>
            }
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>

            {product.offer ? (
                <div className="flex align-center">
                    <h2 className="font-bold p-2 text-2xl line-through text-red-500">
                        ${product.price}
                    </h2>
                    <h2 className="font-bold p-2 text-3xl">
                        $
                        {(
                            product.price -
                            (product.price * product.offer) / 100
                        ).toFixed(2)}
                    </h2>
                    <h2 className="font-bold p-2 text-green-500">
                        {product.offer}% off
                    </h2>
                </div>
            ) : (
                <h2 className="font-bold p-2 text-2xl">${product.price}</h2>
            )}
        </div>
    );
};

export default ProductCard;
