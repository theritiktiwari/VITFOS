import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import ItemContext from "../Context/ItemContext";
import FoodItem from "./FoodItem";

const FoodItems = (props) => {
  const { user } = props;
  const history = useHistory();
  const context = useContext(ItemContext);
  const { items, getItems } = context;
  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);
    return (
      <>
        {user && <div className="container-fluid food-items-page text-center position-relative">
          <div className="container pt-5 position-absolute top-50 start-50 translate-middle">
            <h1>Order Your Food, Get Your Food</h1>
          </div>
        </div>}

        {user && <div className="container my-5 item-page">
          {items.map((item) => {
            return <FoodItem item={item} user={user} />;
          })}
        </div>}
        {!user && history.push('/login')}
      </>
    );
};

export default FoodItems;
