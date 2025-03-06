"use client";
import data from "@/app/_lib/data";
import ProductCard from "@/app/components/ProductCard";
import { faStar, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar as full } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ProductDetails = ({ params }) => {
    const { id } = React.use(params);
    const product = data.find((product) => product.id === parseInt(id));
    const related = data.filter((cur) => {
        return cur.category == product.category && cur.id != parseInt(id);
    });

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
    const rate = product.rating.rate;
    const num = (rate % 1).toFixed(2);
    const solid = Math.floor(rate) + (num > 0.75 ? 1 : 0);
    const half = num >= 0.25 && num < 0.75 ? 1 : 0;
    const blank = 5 - solid - half;
    const [quantity, setQuantity] = useState(0);
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
                    <h1 className="text-3xl font-extrabold">{product.title}</h1>
                    <h2 className="text-2xl font-bold">
                        {product.description}
                    </h2>
                    <h3 className="text-2xl font-extrabold">
                        ₹{product.price}
                    </h3>
                    <h4 className="text-2xl capitalize">
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
                        } font-bold`}>
                        {rate} &nbsp;
                        {[...Array(solid)].map((i) => {
                            return (<FontAwesomeIcon icon={full} key={i} />);
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
                            return (<FontAwesomeIcon icon={faStar} key={i} />);
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
                            onChange={(e) => {
                                console.log(e.target.value);
                                e.target.value <= product.stock &&
                                e.target.value >= 0
                                    ? setQuantity(e.target.value)
                                    : setQuantity(quantity);
                            }}
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

                    <button className="bg-red-500 text-white p-3 rounded-full mt-1">
                        Add to Cart
                    </button>
                </div>
            </div>

            {related.length > 0 ? (
                <>
                    <h1 className="pl-15 font-bold"> Related Products</h1>
                    <div style={style.gridContainer} className="p-10 pt-5 ">
                        {related.length > 1 ? (
                            related.map((cur) => {
                                return (
                                    <ProductCard product={cur} key={cur.id} />
                                );
                            })
                        ) : (
                            <ProductCard
                                product={related[0]}
                                key={related.id}
                            />
                        )}
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default ProductDetails;
