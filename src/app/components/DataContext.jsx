"use client";

import { useState, createContext, useEffect, useContext, use } from "react";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    useEffect(() => {
        const storedCartItems =
            JSON.parse(localStorage.getItem("cartItem")) || [];
        setCartItem(storedCartItems);
    }, []);
    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
    }, [cartItem]);
    return (
        <DataContext.Provider value={{ cartItem, setCartItem }}>
            {children}
        </DataContext.Provider>
    );
};
export const useData = () => useContext(DataContext);
