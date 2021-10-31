import React from 'react'

const FoodItem = (props) => {
    return (
        <>
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={`https://source.unsplash.com/1600x900/?${props.name}`} className="card-img-top" alt={''} />
                    <div className="card-body position-relative">
                    <span className="position-absolute top-5 badge rounded-pill" style={{right: '0', width: '50px'}}>
                        4.5 <i className="fas fa-star"></i></span>
                        <h5 className="card-title">Red Velvet Cake</h5>
                        <p className="card-text">Bakery
                        <span className="card-text float-end">Rs. 50</span>
                        </p>
                        <a href="/" className="btn btn-sm btn-primary w-100">Order Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodItem
