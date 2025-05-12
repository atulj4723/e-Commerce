"use client";
import data from "@/app/_lib/data";
import { useData } from "@/app/components/DataContext";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
const Cart = () => {
    const router = useRouter();
    const { cartItem, setCartItem } = useData();
    const [total, setTotal] = useState(0);
    const updateCart = (id, quantity) => {
        setCartItem((item) => {
            if (quantity == 0) {
                return item.filter((cur) => cur.id != id);
            }
            const exists = item.find((cur) => cur.id == id);
            if (exists) {
                return item.map((cur) =>
                    cur.id == id ? { ...cur, quantity } : cur
                );
            } else {
                return [...item, { id, quantity }];
            }
        });
    };
    useEffect(() => {
        let sum = 0;
        cartItem.forEach((element) => {
            const product = data.find((cur) => cur.id == element.id);
            const price = product.offer
                ? (
                      (1 - product.offer / 100) *
                      product.price *
                      element.quantity
                  ).toFixed(2)
                : (product.price * element.quantity).toFixed(2);
            sum += parseFloat(price);
        });
        setTotal(sum.toFixed(2));
    }, [cartItem]);
    return (
        <div className="w-[80vw]  m-auto mt-6 pb-2">
            <h2 className="font-bold text-xl">Shopping Cart</h2>
            <div className="md:flex md:justify-evenly">
                <div>
                    {cartItem.length > 0 ? (
                        cartItem.map((element, i) => {
                            const product = data.find(
                                (cur) => cur.id == element.id
                            );
                            const price = product.offer
                                ? (
                                      (1 - product.offer / 100) *
                                      product.price *
                                      element.quantity
                                  ).toFixed(2)
                                : (product.price * element.quantity).toFixed(2);
                            return (
                                <div className="flex h-auto gap-2 mt-0.5 border-t-2 p-1 border-gray-300 w-[100%] ">
                                    <img
                                        src={product.image}
                                        className="w-[50%] max-h-[200px] object-contain p-3  "
                                        onClick={() => {
                                            router.push(
                                                `productdetails/${product.id}`
                                            );
                                        }}
                                    />
                                    <div className="w-[50%] flex flex-col justify-evenly">
                                        <h1>
                                            {product.title.length > 50 ? (
                                                <>
                                                    {product.title.slice(0, 50)}
                                                    ...
                                                </>
                                            ) : (
                                                <>{product.title}</>
                                            )}
                                        </h1>
                                        {product.offer ? (
                                            <div className="flex gap-1  w-[100%]  p-1 items-end">
                                                <h2 className="font-bold  text-xl">
                                                    ₹
                                                    {(
                                                        product.price -
                                                        (product.price *
                                                            product.offer) /
                                                            100
                                                    ).toFixed(2)}
                                                </h2>
                                                <h2 className="font-bold   text-base line-through text-red-500">
                                                    ₹{product.price}
                                                </h2>
                                                <h2 className="font-bold  text-base text-green-500">
                                                    {product.offer}% off
                                                </h2>
                                            </div>
                                        ) : (
                                            <h2 className="font-semibold flex  p-1 text-xl">
                                                ₹{product.price}
                                            </h2>
                                        )}
                                        <div className="flex w-25 justify-evenly border-2 border-gray-00 rounded-2xl overflow-hidden">
                                            <button
                                                onClick={() => {
                                                    const newQuantity =
                                                        element.quantity > 0
                                                            ? element.quantity -
                                                              1
                                                            : 0;
                                                    updateCart(
                                                        product.id,
                                                        newQuantity
                                                    );
                                                }}
                                                className="w-full flex cursor-pointer justify-center items-center font-bold text-2xl">
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                className="w-10 text-center  border-gray-900 border-x-2 "
                                                value={element.quantity}
                                                disabled
                                            />
                                            <button
                                                onClick={() => {
                                                    const newQuantity =
                                                        element.quantity <
                                                        product.stock
                                                            ? element.quantity +
                                                              1
                                                            : product.stock;
                                                    updateCart(
                                                        product.id,
                                                        newQuantity
                                                    );
                                                }}
                                                className="w-full cursor-pointer flex justify-center items-center font-bold text-2xl">
                                                +
                                            </button>
                                        </div>
                                        <h3>SubTotal: ₹{price}</h3>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center">No items in cart</div>
                    )}
                    <h1 className="border-gray-300 border-t-2"></h1>
                </div>
                {cartItem.length > 0 ? (
                    <div className=" w-[200px] h-fit mt-2  p-2 border-2 border-gray-300 rounded-xl ">
                        <h3 className="text-xl ">Total: ₹{total}</h3>
                        <button className="bg-red-500 p-2 rounded-full hover:scale-105 cursor-pointer text-white text-lg md:text-xl">
                            Check Out
                        </button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Cart;
