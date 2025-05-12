"use client";
import data from "@/app/_lib/data";
import { useData } from "@/app/components/DataContext";
import ProductCard from "@/app/components/ProductCard";
import { faStar, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar as full } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetails = () => {
    const { cartItem, setCartItem } = useData();
    const { id } = useParams();
    const product = data.find((product) => product.id === parseInt(id));
    const related = data.filter((cur) => {
        return cur.category == product.category && cur.id != parseInt(id);
    });
    const item = cartItem.find((cur) => cur.id == product.id);

    const style = {
        gridContainer: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
        },
    };
    if (!product) {
        return <>No product found</>;
    }

    const handleCart = (quantity) => {
        if (quantity > product.stock) {
            alert("Stock is less than quantity");
            return;
        } else if (quantity < 0) {
            alert("Quantity should be greater than 0");
            return;
        }
        setCartItem((item) => {
            const exists = item.find((cur) => cur.id == product.id);
            if (quantity == 0) {
                return item.filter((cur) => cur.id != id);
            }
            if (exists) {
                return item.map((cur) =>
                    cur.id == product.id ? { ...cur, quantity } : cur
                );
            } else {
                return [
                    ...item,
                    {
                        id: product.id,
                        quantity,
                    },
                ];
            }
        });
    };

    const rate = product.rating.rate;
    const num = (rate % 1).toFixed(2);
    const solid = Math.floor(rate) + (num > 0.75 ? 1 : 0);
    const half = num >= 0.25 && num < 0.75 ? 1 : 0;
    const blank = 5 - solid - half;
    const [quantity, setQuantity] = useState(item ? item.quantity : 0);
    return (
        <>
            <div className="flex bg-white h-auto w-[80%]  m-auto overflow-visible p-5 md:gap-5 text-black flex-col gap-3 md:flex-row items-center md:items-start  ">
                <div className="flex-shrink-0 h-full max-w-[300px] md:sticky md:top-20">
                    <img
                        src={product.image}
                        className=" h-full p-2 border-2 rounded-2xl object-contain"
                    />
                </div>
                <div className="">
                    <h1 className="text-lg md:text-xl font-extrabold">
                        {product.title}
                    </h1>
                    <h2 className="md:text-lg text-sm font-bold">
                        {product.description}
                    </h2>
                    {product.offer ? (
                        <div className="flex gap-3  p-1 items-end">
                            <h2 className="font-bold  text-lg">
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
                        <h2 className="font-semibold flex  p-1 text-xl">
                            ₹{product.price}
                        </h2>
                    )}
                    <h4 className="md:text-lg text-lg capitalize">
                        <span className="font-bold ">Category:</span>
                        {product.category}
                    </h4>
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
                        } font-bold text-lg`}>
                        {rate} &nbsp;
                        {[...Array(solid)].map((i) => {
                            return <FontAwesomeIcon icon={full} key={i} />;
                        })}
                        {[...Array(half)].map((i) => {
                            return (
                                <FontAwesomeIcon
                                    icon={faStarHalfStroke}
                                    key={i}
                                />
                            );
                        })}
                        {[...Array(blank)].map((i) => {
                            return <FontAwesomeIcon icon={faStar} key={i} />;
                        })}
                    </h5>
                    <h6 className="">
                        <span className="font-bold">InStock: </span>
                        {product.stock}
                    </h6>
                    <div className="flex  w-25 justify-evenly border-2 border-gray-00 rounded-2xl overflow-hidden">
                        <button
                            onClick={() => {
                                quantity > 0
                                    ? setQuantity(quantity - 1)
                                    : setQuantity(0);
                            }}
                            className="w-full flex cursor-pointer justify-center items-center font-bold text-2xl">
                            -
                        </button>
                        <input
                            type="text"
                            className="w-10 text-center  border-gray-900 border-x-2 "
                            value={quantity}
                            disabled
                        />
                        <button
                            onClick={() => {
                                quantity < product.stock
                                    ? setQuantity(quantity + 1)
                                    : setQuantity(product.stock);
                            }}
                            className="w-full cursor-pointer flex justify-center items-center font-bold text-2xl">
                            +
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            handleCart(quantity);
                        }}
                        className="bg-red-500 text-white p-2 hover:scale-105 cursor-pointer rounded-full mt-1">
                        {item ? <>Update Cart</> : <>Add to Cart</>}
                    </button>
                </div>
            </div>

            {related.length > 0 ? (
                <>
                    <h1 className="pl-15 text-2xl font-bold">
                        Related Products
                    </h1>
                    <div style={style.gridContainer} className="p-10 pt-5 ">
                        {related.map((cur) => {
                            return <ProductCard product={cur} key={cur.id} />;
                        })}
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default ProductDetails;
