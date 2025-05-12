"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const AdminNavBar = () => {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="text-white  flex p-4 items-center sticky top-0 justify-between h-16 z-50 w-[100%] bg-red-700">
            <Link href="/dashboard" className="text-2xl font-extrabold">
                E-Commerce
            </Link>
            <div className=" gap-4 hidden sm:flex ">
                <h1
                    className="cursor-pointer  border-2 border-red-400 p-1 rounded-2xl hover:scale-115 hover:bg-red-400"
                    onClick={() => {
                        router.push("/dashboard");
                    }}>
                    DashBoard
                </h1>
                <h1
                    className="cursor-pointer border-2 border-red-400 p-1 rounded-2xl hover:scale-115 hover:bg-red-400"
                    onClick={() => {
                        router.push("/addproduct");
                    }}>
                    Add Product
                </h1>
                <h1
                    className="cursor-pointer border-2 border-red-400 p-1 rounded-2xl hover:scale-115 hover:bg-red-400"
                    onClick={() => {
                        router.push("/updateproduct");
                    }}>
                    UpDate Product
                </h1>
            </div>
            <div className="sm:hidden">
                <button
                    onClick={() => {
                        setShowMenu(!showMenu);
                    }}
                    className="text-white text-2xl">
                    {!showMenu ? (
                        <FontAwesomeIcon icon={faBars} />
                    ) : (
                        <FontAwesomeIcon icon={faXmark} />
                    )}
                </button>
                {showMenu && (
                    <div className="absolute top-10 right-4 bg-red-700 text-white p-4 rounded-lg shadow-lg flex flex-col gap-2">
                        <h1
                            className="cursor-pointer border-2 border-red-400 p-1 rounded-2xl align-center hover:scale-105  hover:bg-red-400"
                            onClick={() => {
                                router.push("/dashboard");
                                setShowMenu(false);
                            }}>
                            DashBoard
                        </h1>
                        <h1
                            className="cursor-pointer border-2 border-red-400 p-1 rounded-2xl align-center hover:scale-105 hover:text-white hover:bg-red-400"
                            onClick={() => {
                                router.push("/addproduct");
                                setShowMenu(false);
                            }}>
                            Add Product
                        </h1>
                        <h1
                            className="cursor-pointer border-2 border-red-400 p-1 rounded-2xl align-center hover:scale-105 hover:text-white hover:bg-red-400"
                            onClick={() => {
                                router.push("/updateproduct");
                                setShowMenu(false);
                            }}>
                            Update Product
                        </h1>
                        <h1
                            className="cursor-pointer border-2 border-red-400 p-1 rounded-2xl align-center hover:scale-105 hover:text-white hover:bg-red-400"
                            onClick={() => {
                                router.push("/orders");
                                setShowMenu(false);
                            }}>
                            Orders
                        </h1>
                        <h1
                            className="cursor-pointer border-2 border-red-400 p-1 rounded-2xl align-center hover:scale-105 hover:text-white hover:bg-red-400"
                            onClick={() => {
                                router.push("/");
                                setShowMenu(false);
                            }}>
                            LogOut
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminNavBar;
