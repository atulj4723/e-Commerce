"use client";
import data from "@/app/_lib/data";
import { useParams } from "next/navigation";
import React, { useRef, useState } from "react";

const page = () => {
    const { id } = useParams();
    const product = data.find((product) => product.id === parseInt(id));
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category.toUpperCase());
    const [stock, setStock] = useState(product.stock);
    const [offer, setOffer] = useState(product.offer || 0);
    const [img, setImg] = useState(product.image);
    const [description, setDescription] = useState(product.description || "");
    const categories = [
        ...new Set(
            data.map((cur) => {
                return cur.category.toUpperCase();
            })
        ),
    ];
    const ref = useRef(null);

    const handleClick = () => {
        ref.current.click(); // Trigger the file input's click event
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImg(URL.createObjectURL(file)); // Generate a preview URL
        }
    };

    return (
        <div className="h-full flex justify-center items-center bg-gray-100 p-5">
            <div className="bg-white w-full max-w-[600px] border-2 gap-4 flex flex-col border-gray-300 p-5 rounded-xl shadow-lg">
                <h1 className="text-center text-2xl font-bold text-gray-700">
                    Update Product Details
                </h1>
                <div className="flex justify-between items-center gap-3 w-full p-2">
                    <h2 className="text-lg font-bold text-gray-600">Image</h2>
                    <img
                        src={img}
                        alt="Product"
                        className="w-20 h-20 object-contain border rounded-md cursor-pointer"
                        onClick={handleClick} // Trigger file input click on image click
                    />
                    <input
                        ref={ref} // Attach the ref to the file input
                        className="hidden"
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleImageChange} // Handle file selection
                    />
                </div>
                <div className="flex flex-col gap-1 w-full p-2">
                    <h2 className="text-lg font-bold text-gray-600">Title</h2>
                    <textarea
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        className="border-2 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 w-full resize-none"
                        name="title"
                        value={title}
                        rows={Math.max(title.split("\n").length, 1)}
                    />
                </div>
                <div className="flex flex-col gap-1 w-full p-2">
                    <h2 className="text-lg font-bold text-gray-600">Price</h2>
                    <input
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                        className="border-2 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
                        type="number"
                        name="price"
                        value={price}
                        size={Math.max(price.toString().length, 5)}
                    />
                </div>
                <div className="flex flex-col gap-1 w-full p-2">
                    <h2 className="text-lg font-bold text-gray-600">Stock</h2>
                    <input
                        onChange={(e) => {
                            setStock(e.target.value);
                        }}
                        className="border-2 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
                        type="number"
                        name="stock"
                        value={stock}
                        size={Math.max(stock.toString().length, 5)}
                    />
                </div>
                <div className="flex flex-col gap-1 w-full p-2">
                    <h2 className="text-lg font-bold text-gray-600">
                        Category
                    </h2>
                    <input
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                        className="border-2 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
                        type="text"
                        value={category}
                        list="suggestions"
                        size={Math.max(category.length, 10)}
                    />
                    <datalist id="suggestions">
                        {categories.map((cur, index) => {
                            return <option key={index} value={cur} />;
                        })}
                    </datalist>
                </div>
                <div className="flex flex-col gap-1 w-full p-2">
                    <h2 className="text-lg font-bold text-gray-600">Offer</h2>
                    <input
                        onChange={(e) => {
                            setOffer(e.target.value);
                        }}
                        className="border-2 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
                        type="number"
                        name="offer"
                        value={offer}
                        size={Math.max(offer.toString().length, 5)}
                    />
                </div>
                <div className="flex flex-col gap-1 w-full p-2">
                    <h2 className="text-lg font-bold text-gray-600">
                        Description
                    </h2>
                    <textarea
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        className="border-2 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
                        name="description"
                        value={description}
                        rows={Math.max(description.split("\n").length, 3)}
                    />
                </div>
                <button className="bg-red-500 text-white font-bold rounded-xl w-full p-2 hover:scale-105 transition-transform">
                    Update Product
                </button>
            </div>
        </div>
    );
};

export default page;
