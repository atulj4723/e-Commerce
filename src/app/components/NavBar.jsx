"use client";
import Link from "next/link";
import React, { useState } from "react";

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
        <div className="text-white  flex p-4 items-center sticky top-0 justify-between w-[100%] bg-red-700">
            <Link href="/" className="text-2xl font-extrabold">
                E-Commerce
            </Link>
            <h1>searchicon</h1>
            <button onClick={toggleMenu} className="z-50 text-4xl font-extrabold">
                =
            </button>
            <div className="flex w-[50%] menu absolute  right-0 scale-0  top-5 origin-top-right bg-red-600 p-2 flex-col py-4 justify-between items-center text-xl">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link
                    href="/signup"
                    className="bg-white text-black px-4 py-2 rounded-lg font-bold">
                    SignUp
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
