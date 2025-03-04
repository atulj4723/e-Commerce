import React from "react";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import data from "../_lib/data";

const Home = () => {
    const style = {
        gridContainer: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
        },
    };
    return (
        <div className="bg-white text-black p-2">
            <HeroSection />
            
            <div style={style.gridContainer}>
                {data.map((product) => {
                    return <ProductCard product={product} key={product.id} />;
                })}
            </div>
        </div>
    );
};

export default Home;
