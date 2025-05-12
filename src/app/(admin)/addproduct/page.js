"use client";
import data from "@/app/_lib/data";
import React, { useState } from "react";

const page = () => {
    const categories = [
        ...new Set(
            data.map((cur) => {
                return cur.category.toUpperCase();
            })
        ),
    ];

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [offer, setOffer] = useState("");
    const [img, setImg] = useState(null);
    const [imgPreview, setImgPreview] = useState(null); // For previewing the image
    const [description, setDescription] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImg(file);
        setImgPreview(URL.createObjectURL(file)); // Generate a preview URL
    };

    const handleAddProduct = async () => {
        // Logic to add the product
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onloadend = async () => {
            console.log(reader.result);
            
        };
    };

    return (
        <div className="h-full flex justify-center items-center bg-gray-100 p-5">
            <div className="bg-white w-full max-w-[600px] border-2 gap-4 flex flex-col border-gray-300 p-5 rounded-xl shadow-lg">
                <h1 className="text-center text-2xl font-bold text-gray-700">
                    Add New Product
                </h1>
                <div className="flex flex-col gap-3 w-full p-2">
                    <h2 className="text-lg font-bold text-gray-600">Image</h2>
                    {imgPreview && (
                        <img
                            src={imgPreview}
                            alt="Selected Product"
                            className="w-20 h-20 object-contain border rounded-md"
                        />
                    )}
                    <input
                        className="border-2 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleImageChange}
                    />
                </div>
                <div className="flex flex-col gap-1 w-full p-2">
                    <h2 className="text-lg font-bold text-gray-600">Title</h2>
                    <textarea
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-2 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 w-full resize-none"
                        name="title"
                        value={title}
                        rows={Math.max(title.split("\n").length, 1)}
                    />
                </div>
                <div className="flex flex-col gap-1 w-full p-2">
                    <h2 className="text-lg font-bold text-gray-600">Price</h2>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
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
                        onChange={(e) => setStock(e.target.value)}
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
                        onChange={(e) => setCategory(e.target.value)}
                        className="border-2 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
                        type="text"
                        value={category}
                        list="suggestions"
                        size={Math.max(category.length, 10)}
                    />
                    <datalist id="suggestions">
                        {categories.map((cur, index) => (
                            <option key={index} value={cur} />
                        ))}
                    </datalist>
                </div>
                <div className="flex flex-col gap-1 w-full p-2">
                    <h2 className="text-lg font-bold text-gray-600">Offer</h2>
                    <input
                        onChange={(e) => setOffer(e.target.value)}
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
                        onChange={(e) => setDescription(e.target.value)}
                        className="border-2 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
                        name="description"
                        value={description}
                        rows={Math.max(description.split("\n").length, 3)}
                    />
                </div>
                <button
                    onClick={handleAddProduct}
                    className="bg-red-500 text-white font-bold rounded-xl w-full p-2 hover:scale-105 transition-transform">
                    Add Product
                </button>
            </div>
        </div>
    );
};

export default page;
