import React, { useState } from "react";
import { app } from "../firebase";
import { useHistory } from "react-router";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
    const history = useHistory();

    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            history.push("/");
        } catch (error) {
            alert("Internal Error");
        }
    };

    const forgetPass = async () => {
        try{
            await sendPasswordResetEmail(auth, email);
            alert("Email sent");
        }
        catch(error){
            console.log(error);
        }
    };

    return (
        <>
            <div className="form my-5">
                <div class="container">
                    <div class="card"></div>
                    <div class="card">
                        <h1 class="title">Login</h1>
                        <form>
                            <div class="input-container">
                                <input type="email" id="email" name="email" required="required" onChange={(e) => setEmail(e.target.value)} />
                                <label for="email">Email Address</label>
                                <div class="bar"></div>
                            </div>
                            <div class="input-container">
                                <input type="password" id="password" name="password" required="required" onChange={(e) => setPassword(e.target.value)} />
                                <label for="password">Password</label>
                                <div class="bar"></div>
                            </div>
                            <div class="button-container">
                                <button onClick={login}>
                                    <span>Login</span>
                                </button>
                            </div>
                            <div class="footer">
                                <a href="/login" onClick={forgetPass}>Forgot your password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
