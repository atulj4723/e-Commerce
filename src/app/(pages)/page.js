import React from "react";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import data from "../_lib/data";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
    const style = {
        gridContainer: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
        },
        gridContainer2: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
        },
        gridContainer3: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
        },
    };
    const category = [
        ...new Set(
            data.map((cur) => {
                return cur.category;
            })
        ),
    ];
    const sortedData = [...data].sort((a, b) => b.rating.rate - a.rating.rate);
    const deals = [...data].filter((cur) => {
        return cur.offer && cur.offer >= 50;
    });
    deals.sort((a, b) => b.offer - a.offer);
    return (
        <div className="p-2">
            <HeroSection data={data[0]} />
            <h1 className="pl-10 font-bold text-2xl">Top Deals</h1>
            <div style={style.gridContainer3} className="p-5">
                {deals &&
                    deals.map((product) => {
                        return (
                            <ProductCard product={product} key={product.id} />
                        );
                    })}
            </div>
            <h1 className="pl-10 font-bold text-2xl">Category</h1>
            <div style={style.gridContainer2} className="p-5">
                {category &&
                    category.map((cur, i) => {
                        return <CategoryCard category={cur} key={i} />;
                    })}
            </div>
            <h1 className="pl-10 font-bold text-2xl">Top Pick's</h1>
            <div style={style.gridContainer} className="p-5">
                {sortedData &&
                    sortedData.map((product) => {
                        return (
                            <ProductCard product={product} key={product.id} />
                        );
                    })}
            </div>
        </div>
    );
};

export default Home;
