"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { faStar, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar as full } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProductCard = ({ product, role }) => {
    const router = useRouter();
    const rate = product.rating.rate;
    const num = (rate % 1).toFixed(2);
    const solid = Math.floor(rate) + (num > 0.75 ? 1 : 0);
    const half = num >= 0.25 && num < 0.75 ? 1 : 0;
    const blank = 5 - solid - half;
    return (
        <div
            className="m-3  hover:scale-102 border-2 max-w-[300px] overflow-hidden border-gray-300  bg-white shadow-lg rounded-2xl p-3"
            onClick={() => {
                role != "admin"
                    ? router.push(`/productdetails/${product.id}`)
                    : router.push(`/updateproduct/${product.id}`);
            }}>
            <img
                src={product.image}
                alt=""
                className="h-[200px] w-[200px] p-3 m-auto object-contain border-2 border-gray-300 rounded-2xl"
            />
            <h1 className="font-semibold p-1 flex justify-center">
                {product.title}
            </h1>
            <h5
                className={`${
                    rate > 4
                        ? "text-[#57e32c]"
                        : rate > 3
                        ? "text-[#b7dd29]"
                        : rate > 2
                        ? "text-[#ffe234]"
                        : rate > 1
                        ? "text-[#ffa534]"
                        : "text-[#ff4545]"
                } font-bold text-center`}>
                {rate} &nbsp;
                {[...Array(solid)].map((i) => {
                    return <FontAwesomeIcon icon={full} key={i} />;
                })}
                {[...Array(half)].map((i) => {
                    return <FontAwesomeIcon icon={faStarHalfStroke} key={i} />;
                })}
                {[...Array(blank)].map((i) => {
                    return <FontAwesomeIcon icon={faStar} key={i} />;
                })}
            </h5>
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
