import React, { useState } from 'react';
import { app } from '../firebase';
import { getDatabase, ref, set } from "firebase/database";

const Contact = () => {
    const database = getDatabase(app);

    const [data, setData] = useState({ name: "", email: "", message: "" });
    
    const ID = Math.floor(Math.random() * 9999999999);
    
    const submitQuery = (e) => {
        e.preventDefault();
        setData({ name: e.name, email: e.email, message: e.message });
        set(ref(database, 'query/' + ID), {
            username: data.name,
            email: data.email,
            message: data.message
        }).then(() => {
            alert("Successfully added query");
        }).catch((error) => {
            alert("Error adding query: " + error);
        });
        setData({ name: "", email: "", message: "" });
    }

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container ps-5" id="contact">
                <div className="container shadow-lg p-3 my-5 bg-body rounded contact-section row d-flex justify-content-between align-items-center">
                    <div className="col-12 col-lg-6 mt-4">
                        <h3 className="fs-2 fw-bold text-center">Submit Your Query</h3>
                        <form className="my-4">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={data.name} onChange={onChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={data.email} onChange={onChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Enter Your Message</label>
                                <textarea className="form-control" id="message" name="message" rows="3" value={data.message} onChange={onChange} required ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100" onClick={submitQuery}>Submit Your Message</button>
                        </form>
                    </div>
                    <div className="col-12 col-lg-6 rounded-2 image d-flex align-items-center justify-content-center flex-column">
                        <h2 className="text-center mb-5">Contact Details</h2>
                        <div className="container d-flex flex-column mt-3" style={{ width: "300px" }}>
                            <div className="box d-flex align-items-center mb-3">
                                <div className="icon"><i className="fas fa-envelope"></i></div>
                                <div className="text d-flex flex-column align-items-start">
                                    <h4>Email Address</h4>
                                    <p>theritiktiwari@gmail.com</p>
                                </div>
                            </div>
                            <div className="box d-flex align-items-center">
                                <div className="icon"><i className="fas fa-phone"></i></div>
                                <div className="text d-flex flex-column align-items-start">
                                    <h4>Mobile Number</h4>
                                    <p>9876-543-210</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
