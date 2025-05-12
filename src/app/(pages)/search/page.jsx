"use client";
import data from "@/app/_lib/data";
import ProductCard from "@/app/components/ProductCard";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
    const searchParams = useSearchParams();
    const initialSearchVal = searchParams.get("searchVal") || ""; // Get the search value from the query params
    const [searchVal, setSearchVal] = useState(initialSearchVal);
    const [searchResults, setSearchResults] = useState([]);
    const [filterResults, setFilterResults] = useState([]);
    const [categoryShow, setCategoryShow] = useState("");

    const style = {
        gridContainer: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
        },
    };

    const categories = [
        ...new Set(
            data.map((cur) => {
                return cur.category;
            })
        ),
    ];

    useEffect(() => {
        if (searchVal.trim() !== "") {
            const filteredData = data.filter((cur) =>
                cur.title
                    .toLowerCase()
                    .trim()
                    .includes(searchVal.toLowerCase().trim())
            );
            setSearchResults(filteredData);

            // If a category is selected, filter the results further
            if (categoryShow) {
                const categoryFilteredData = filteredData.filter(
                    (cur) => cur.category === categoryShow
                );
                setFilterResults(categoryFilteredData);
            } else {
                setFilterResults(filteredData);
            }
        } else {
            setSearchResults([]);
            setFilterResults(data);
        }
    }, [searchVal, categoryShow]); // Re-run the filter whenever searchVal or categoryShow changes

    const handleInputChange = (e) => {
        setSearchVal(e.target.value);
    };

    const handleCategoryClick = (cur) => {
        if (categoryShow === cur) {
            // If the same category is clicked again, reset the filter
            setCategoryShow("");
            setFilterResults(searchResults);
        } else {
            // Filter by the selected category
            const categoryFilteredData = searchResults.filter(
                (cur1) => cur1.category === cur
            );
            setFilterResults(categoryFilteredData);
            setCategoryShow(cur);
        }
    };

    return (
        <div className="h-full flex flex-col items-center bg-gray-100 p-5">
            <div className="bg-white w-full border-2 gap-4 flex flex-col border-gray-300 p-5 rounded-xl shadow-lg">
                <h1 className="text-center text-2xl font-bold text-gray-700">
                    Search Results
                </h1>
                <input
                    type="text"
                    value={searchVal}
                    onChange={handleInputChange}
                    className="border-2 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
                    placeholder="Search..."
                />
                <div
                    className="w-full grid items-center text-center gap-2 mt-4"
                    style={{
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(100px, 1fr))",
                    }}
                >
                    {categories.map((cur) => {
                        return (
                            <div
                                key={cur}
                                className={`${
                                    categoryShow === cur
                                        ? "bg-red-400 text-white"
                                        : "bg-white text-black"
                                } cursor-pointer border-2 border-gray-300 rounded-xl p-1`}
                                onClick={() => handleCategoryClick(cur)}
                            >
                                {cur.toUpperCase()}
                            </div>
                        );
                    })}
                </div>
                <div
                    className="flex flex-col gap-3 w-full p-2 mt-4"
                    style={style.gridContainer}
                >
                    {filterResults.length > 0 ? (
                        filterResults.map((cur, idx) => (
                            <ProductCard product={cur} key={idx} />
                        ))
                    ) : (
                        <p>No results found for "{searchVal}"</p>
                    )}
                </div>
            </div>
        </div>
    );
};

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchPage />
        </Suspense>
    );
};

export default Page;