import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { app } from "../firebase";
import { getAuth, sendPasswordResetEmail, updateProfile, updateEmail } from "firebase/auth";

const Profile = (props) => {
    const history = useHistory();
    const { user } = props;
    const auth = getAuth(app);

    const [data, setData] = useState({ name: user.displayName, email: user.email });

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const update = (user) => {
        setData({ name: user.name, email: user.email });

        updateProfile(auth.currentUser, {
            displayName: data.name
        }) && updateEmail(auth.currentUser, data.email).then(() => {
            alert("Profile updated successfully");
            history.push('/');
        }).catch((error) => {
            alert("Error updating profile");
        });
    }

    const forgetPass = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, user.email);
            alert("Email sent to : " + user.email);
            history.push("/");
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container profile-container my-5">
                <h1 className="text-center">Welcome {user.displayName}</h1>
                <div className="container w-50">
                    <form className="my-5">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={data.name} onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={onChange} required />
                        </div>
                        <button onClick={update} type="button" className="btn btn-outline-primary mb-2" style={{ width: "48%", float: "left" }}>Update</button>
                        <button onClick={forgetPass} className="btn btn-outline-danger" style={{ borderColor: '#DC3545', width: "48%", float: "right" }}>Change Password</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile
