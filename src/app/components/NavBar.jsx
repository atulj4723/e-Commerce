import Link from "next/link";
import React from "react";
import Cart from "./Cart";
import Search from "./Search";
const NavBar = () => {
    return (
        <div className="text-white  flex flex-wrap  p-4 items-center sticky top-0 justify-between sm:h-16 z-50 w-[100%] bg-red-700">
            <Link href="/" className="order-1  text-2xl   sm:flex-1 font-extrabold">
                E-Commerce
            </Link>
            {/* <div className="flex gap-1 items-center"> */}
                <Search  />
                <Cart  />
            {/* </div> */}
        </div>
    );
};

export default NavBar;
