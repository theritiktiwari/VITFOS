import React from 'react'
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <>
            <div className="container-fluid mt-5 px-5 pt-5 pb-3 footer">
                <div className="container d-flex justify-content-around align-items-center">
                    <div className="author">
                        <h2 className="text-dark">Author</h2>
                        <div className="profile d-flex">
                            <img src="https://avatars.githubusercontent.com/u/59665768?v=4" className="profile-img" alt="author-img" />
                            <div className="profile-body">
                                <h5 className="profile-title fs-3">Ritik Tiwari</h5>
                                <p className="profile-text">An aspiring full-stack developer who enjoys connecting the dots.</p>
                                <p className="tech"><b>Tech :</b> HTML, CSS, Bootstrap, React, NodeJS, Express JS, Firebase</p>
                                <a href="https://github.com/theritiktiwari" rel="noreferrer" target="_blank" className="btn btn-sm btn-outline-primary me-2"><i className="fab fa-github"></i></a>
                                <a href="https://instagram.com/codingwalls" rel="noreferrer" target="_blank" className="btn btn-sm btn-outline-primary me-2"><i className="fab fa-instagram"></i></a>
                                <a href="https://linkedin.com/in/theritiktiwari" rel="noreferrer" target="_blank" className="btn btn-sm btn-outline-primary me-2"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="links d-flex flex-column">
                        <h2 className="text-dark">Important Links</h2>
                        <ul className="d-flex flex-column list-unstyled">
                            <li><Link to="/" className="link">Home</Link></li>
                            <li><Link to="/about" className="link">About Us</Link></li>
                            <li><Link to="/items" className="link">Food Items</Link></li>
                            <li><Link to="/contact" className="link">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <h2 className="text-dark">Social Media</h2>
                        <ul className="icon-list list-unstyled d-flex justify-content-between">
                            <li className="icon-item">
                                <a href="https://instagram.com/theritiktiwari" rel="noreferrer" target="_blank" className="icon-link"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li className="icon-item">
                                <a href="https://facebook.com/theritiktiwari" rel="noreferrer" target="_blank" className="icon-link"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li className="icon-item">
                                <a href="https://github.com/theritiktiwari" rel="noreferrer" target="_blank" className="icon-link"><i className="fab fa-github"></i></a>
                            </li>
                            <li className="icon-item">
                                <a href="https://github.com/theritiktiwari" rel="noreferrer" target="_blank" className="icon-link"><i className="fab fa-youtube"></i></a>
                            </li>
                            <li className="icon-item">
                                <a href="https://linkedin.com/in/theritiktiwari" rel="noreferrer" target="_blank" className="icon-link"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container copyright">
                    <hr className="text-dark my-4" />
                    <p className="text-center text-dark">Copyright © {new Date().getFullYear()} <Link className="text-decoration-none name" to="/">{props.title}</Link>. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
