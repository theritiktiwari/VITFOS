import React, { useEffect, useContext } from "react";
import ItemContext from "../Context/ItemContext";
import FoodItem from "./FoodItem";

const FoodItems = () => {
    const context = useContext(ItemContext);
    const { items, getItems } = context;
    useEffect(() => {
        getItems();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className="container-fluid food-items-page text-center position-relative">
                <div className="container pt-5 position-absolute top-50 start-50 translate-middle">
                    <h1>Order Your Food, Get Your Food</h1>
                </div>
            </div>

            <div className="container my-5 item-page">
                {items.map((item) => {
                    return <FoodItem item={item} />;
                })}
            </div>
        </>
    );
};

export default FoodItems;
