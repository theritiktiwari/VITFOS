import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { getAuth, signOut } from "firebase/auth";

const Navbar = (props) => {
    const history = useHistory();
    const { user, title } = props;

    const auth = getAuth();

    // logout
    const logout = async () => {
        try{
            await signOut(auth);
            history.push("/");
        }
        catch(error){
            console.log(error);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {title}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#about">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/items">
                                    Food Items
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#contact">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                        {!user && <div className="d-flex">
                            <Link
                                to="/login"
                                role="button"
                                className="btn btn-primary my-2 me-2"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                role="button"
                                className="btn btn-outline-primary mx-1 my-2"
                            >
                                Signup
                            </Link>
                        </div>}
                        {user && <div className="d-flex">
                            <Link
                                to="/profile"
                                role="button"
                                className="btn btn-primary my-2 me-2"
                            >
                                Profile
                            </Link>
                            <button
                                className="btn btn-outline-danger mx-1 my-2" style={{ borderColor: '#DC3545' }}
                                onClick={logout}>
                                Logout
                            </button>
                        </div>}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
