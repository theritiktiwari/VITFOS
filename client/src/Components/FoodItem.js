import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const FoodItem = (props) => {
  const { item, user } = props;
  const history = useHistory();

  const buyItem = (e) => {
    e.preventDefault();
    alert("Item Ordered Successfully");
    history.push("/");
  };
  return (
    <>
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`${item.image}`}
            className="card-img-top"
            height="200px"
            alt={""}
          />
          <div className="card-body position-relative">
            <span
              className="position-absolute top-5 badge rounded-pill"
              style={{ right: "0", width: "50px" }}
            >
              {item.rating} <i className="fas fa-star"></i>
            </span>
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              {item.type}
              <span className="card-text float-end">Rs. {item.price}</span>
            </p>
            {user && (
              <Link
                to="/buy"
                onClick={buyItem}
                className="btn btn-sm btn-primary w-100"
              >
                Order Now
              </Link>
            )}
            {!user && (
              <Link
                to="/items"
                className="btn btn-sm btn-primary w-100"
              >
                Order Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
