import React from 'react'
import { Link } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import FoodItem from './FoodItem'

const Home = (props) => {
    return (
        <>
            <div className="main-section text-center">
                <div className="container intro-text pt-5 position-absolute top-50 start-50 translate-middle d-flex justify-content-center flex-column align-items-center">
                    <h1 className="fw-bold">WELCOME TO <span>{props.title}</span></h1>
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
                    <FoodItem name="Cake" />
                    <FoodItem name="redvelvet" />
                    <FoodItem name="cake" />
                    <Link to="/items" className="d-flex align-items-center justify-content-center more"><i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>
            <Contact title={props.title} />
        </>
    )
}

export default Home
