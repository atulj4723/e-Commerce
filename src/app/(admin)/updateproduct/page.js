"use client";
import data from "@/app/_lib/data";
import ProductCard from "@/app/components/ProductCard";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
    const style = {
        gridContainer: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
        },
    };

    const [searchResult, setSearchResult] = useState(data);
    const [filterResult, setFilterResult] = useState(data);
    const [categoryShow, setCategoryShow] = useState("");

    const category = [
        ...new Set(
            searchResult.map((cur) => {
                return cur.category;
            })
        ),
    ];

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredData = data.filter((cur) =>
            cur.title.toLowerCase().includes(searchValue)
        );
        setSearchResult(filteredData);

        // If a category is selected, filter the results further
        if (categoryShow) {
            const categoryFilteredData = filteredData.filter(
                (cur) => cur.category === categoryShow
            );
            setFilterResult(categoryFilteredData);
        } else {
            setFilterResult(filteredData);
        }
    };

    const handleCategoryClick = (cur) => {
        if (categoryShow === cur) {
            // If the same category is clicked again, reset the filter
            setCategoryShow("");
            setFilterResult(searchResult);
        } else {
            // Filter by the selected category
            const categoryFilteredData = searchResult.filter(
                (cur1) => cur1.category === cur
            );
            setFilterResult(categoryFilteredData);
            setCategoryShow(cur);
        }
    };

    return (
        <div className="w-full flex items-center flex-col">
            <input
                type="text"
                className="w-[200px] p-3 border-b-2 border-black rounded-3xl mt-8 mb-5 h-8"
                placeholder="Search"
                onChange={handleSearch}
            />
            <div
                className="w-[90vw] grid items-center text-center gap-2"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                }}>
                {category.map((cur) => {
                    return (
                        <div
                            key={cur}
                            className={`${
                                categoryShow === cur
                                    ? "bg-red-400 text-white"
                                    : "bg-white text-black"
                            } cursor-pointer border-2 border-gray-300 rounded-xl p-1 m-1`}
                            onClick={() => handleCategoryClick(cur)}>
                            {cur.toUpperCase()}
                        </div>
                    );
                })}
            </div>
            <div style={style.gridContainer} className="w-full">
                {filterResult.map((product) => {
                    return (
                        <div
                            key={product.id}
                            onClick={() => {
                                router.push(`/updateproduct/${product.id}`);
                            }}>
                            <ProductCard product={product} role={"admin"} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default page;
