"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useData } from "./DataContext";

const Cart = () => {
    const { cartItem } = useData();

    const router = useRouter();
    return (
        <button
            className="order-2 sm:order-3 ml-2 relative "
            onClick={() => {
                router.push("/cart");
            }}>
            <FontAwesomeIcon icon={faShoppingCart} className="text-3xl" />
            <h1
                className={` absolute  text-sm  top-[-2%] md:top-[-4%]  font-extrabold text-red-500 ${
                    cartItem.length > 9 ? " left-3 " : "left-3.5 "
                } `}>
                {cartItem.length}
            </h1>
        </button>
    );
};

export default Cart;
