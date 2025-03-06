"use client";

import Link from "next/link";
import React, { useState } from "react";
import Cart from "./Cart";
const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => {
        if (toggle) {
            document.querySelector(".menu").classList.add("scale-100");
            document.querySelector(".menu").classList.remove("scale-0");
            setToggle(false);
            console.log("toggle");
        } else {
            document.querySelector(".menu").classList.remove("scale-100");
            document.querySelector(".menu").classList.add("scale-0");
            setToggle(true);
            console.log("toggle2");
        }
    };
    return (
        <div className="text-white  flex p-4 items-center sticky top-0 justify-between h-16 z-50 w-[100%] bg-red-700">
            <Link href="/" className="text-2xl font-extrabold">
                E-Commerce
            </Link>
            <Cart />
        </div>
    );
};

export default NavBar;
