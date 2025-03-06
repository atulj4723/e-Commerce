import data from "@/app/_lib/data";

import ProductCard from "@/app/components/ProductCard";
import React from "react";

const page = ({ params }) => {
    const { category } = params;
    console.log(category);
    const style = {
        gridContainer: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
        },
    };
    const text = category.replace("%20", " ");
    const items = data.filter((cur) => {
        return cur.category == text;
    });

    return (
        <div className="p-2 ">
            <h1 className="pl-10 capitalize text-2xl font-bold">{text}</h1>
            <div style={style.gridContainer} className="p-10 pt-5 ">
                {items.map((product) => {
                    return <ProductCard product={product} key={product.id} />;
                })}
            </div>
        </div>
    );
};

export default page;
