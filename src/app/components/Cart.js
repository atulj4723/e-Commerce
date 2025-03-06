"use client"; // Ensure this runs on the client-side in Next.js 13+

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    const [cartCount, setCartCount] = useState(9);

    return (
        <div className=" relative ">
            <FontAwesomeIcon icon={faShoppingCart} className="text-3xl" />
            <h1
                className={` absolute  text-sm top-[-4%]  font-extrabold text-red-500 ${
                    cartCount > 9 ? " left-3 " : "left-3.5 "
                } `}>
                {cartCount}
            </h1>
        </div>
    );
};

export default Cart;
