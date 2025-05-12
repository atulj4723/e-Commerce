"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import data from "../_lib/data";
import { useRouter } from "next/navigation";

const Search = () => {
    const [searchVal, setSearchVal] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const router = useRouter();
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchVal(value);
        if (value.trim() === "") {
            setSearchResults([]);
        } else {
            setSearchResults(
                data.filter((cur) =>
                    cur.title
                        .toLowerCase()
                        .trim()
                        .includes(value.toLowerCase().trim())
                )
            );
        }
    };

    return (
        <div className="order-3 sm:order-2 bg-red-400 w-full sm:w-60 rounded-xl p-1 relative">
            <div className="flex items-center">
                <input
                    type="text"
                    className="focus:outline-none p-1 flex-grow"
                    placeholder="Search .."
                    value={searchVal}
                    onChange={handleInputChange}
                />
                <button
                    className="border-l-2 p-1 cursor-pointer"
                    onClick={() => {
                        if (searchVal.trim() !== "") {
                            router.push(`/search?searchVal=${encodeURIComponent(searchVal)}`);
                            setSearchVal("");
                            setSearchResults([]);
                        }
                    }}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            {searchResults.length > 0 && (
                <div className="p-1 absolute bg-white rounded max-h-[500px] overflow-y-scroll shadow mt-1">
                    {searchResults.map((cur, idx) => (
                        <div
                            className="flex gap-2 border-b-2 cursor-pointer border-gray-200 p-1"
                            onClick={() => {
                                router.push(`/productdetails/${cur.id}`);
                                setSearchVal("");
                                setSearchResults([]);
                            }}>
                            <img
                                key={idx}
                                src={cur.image}
                                alt={cur.title}
                                className="h-10 w-10 mb-1"
                            />
                            <h1 className="text-black">
                                {cur.title.length > 25 ? (
                                    <>{cur.title.slice(0, 25)}..</>
                                ) : (
                                    <> {cur.title}</>
                                )}
                            </h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
