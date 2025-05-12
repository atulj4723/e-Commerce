"use client";
import React from "react";
import data from "../_lib/data";
import { useRouter } from "next/navigation";

const CategoryCard = ({ category }) => {
    const router = useRouter();
    const image = data.filter((cur) => {
        return cur.category == category;
    });
    const img = image[0].image;
    return (
        <div
            onClick={() => {
                router.push(`category/${category}`);
            }}
            className="m-3  hover:scale-105 max-w-[300px] border-2 overflow-hidden border-gray-300  bg-white shadow-lg rounded-2xl p-3">
            <img
                src={img}
                className="h-[150px] w-[2150px] p-3 m-auto object-contain border-2 border-gray-300 rounded-2xl"
            />
            <h1 className="capitalize text-center">{category}</h1>
        </div>
    );
};
``;

export default CategoryCard;
