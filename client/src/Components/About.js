import React from 'react'

const About = (props) => {
    return (
        <>
            <div className="container ps-5" id="about">
                <div className="container shadow-lg p-3 my-5 bg-body rounded about-section row d-flex justify-content-between align-items-center">
                    <div className="col-12 col-lg-6 rounded-2 image d-flex align-items-center justify-content-center">
                        <h2 className="mb-4 fw-bold text-capitalize">Who we are ?</h2>
                    </div>
                    <div className="col-12 col-lg-6 mt-4">
                        <p className="lh-lg" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sit velit et exercitationem architecto facilis sed molestiae alias quos suscipit tempore facere, consectetur libero veritatis voluptate ut praesentium, impedit laudantium! Commodi cum, et libero totam in consequatur odit provident! Sequi necessitatibus deleniti aperiam enim hic dignissimos consectetur iste obcaecati suscipit!</p>
                        <p className="text-end"> - {props.title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
