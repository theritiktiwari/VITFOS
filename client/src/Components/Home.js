import React, { useEffect, useContext } from "react";
import ItemContext from "../Context/ItemContext";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import FoodItem from "./FoodItem";

const Home = (props) => {
  const context = useContext(ItemContext);
  const { items, getItems } = context;
  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="main-section text-center">
        <div className="container intro-text pt-5 position-absolute top-50 start-50 translate-middle d-flex justify-content-center flex-column align-items-center">
          <h1 className="fw-bold">
            WELCOME TO <span>{props.title}</span>
          </h1>
          <p>Order Your Food, Get Your Food</p>
          <button className="btn btn-primary position-relative border-0">
            <div>EXPLORE </div>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <About title={props.title} />
      <div className="container-fluid food-items p-5">
        <h2 className="mb-4 fs-1 text-center text-capitalize">Here you go</h2>
        <div className="container items">
          {
            // eslint-disable-next-line
            items.map((item, index) => {
              if (index < 3) return <FoodItem item={item} />;
            })
          }
          <Link
            to="/items"
            className="d-flex align-items-center justify-content-center more"
          >
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <Contact title={props.title} />
    </>
  );
};

export default Home;
