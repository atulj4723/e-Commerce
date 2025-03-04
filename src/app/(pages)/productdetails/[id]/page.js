import data from "@/app/_lib/data";
import React from "react";

const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const product = data[id - 1];
    return (
        <div className="flex flex-col gap-3 md:flex-row items-center justify-center">
            <div>
                <img src={product.image} />
            </div>
            <div>
                <h1 className="text-5xl font-extrabold">{product.title}</h1>
                <h2 className="text-4xl font-bold">{product.description}</h2>
                <h3 className="text-5xl font-extrabold">${product.price}</h3>
                <h4 className="text-4xl">{product.category}</h4>
                <h5>{product.rating.rate}</h5>
                <h6>{product.stock}</h6>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
