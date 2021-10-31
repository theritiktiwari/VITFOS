import React, { useState } from 'react'
import { app } from '../firebase';
import { useHistory } from 'react-router';
import { getAuth, updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const history = useHistory();

    const auth = getAuth(app);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');

    const signup = async (e) => {
        e.preventDefault();
        try {
            if (password !== cpassword) {
                alert('Password do not match');
            }
            else {
                await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(auth.currentUser, {
                    displayName: name
                });
                alert('Account Created');
                history.push('/');
            }
        } catch (error) {
            alert('Internal Errors');
        }
    }

    return (
        <>
            <div className="form my-5">
                <div class="container">
                    <div class="card"></div>
                    <div class="card">
                        <h1 class="title">Signup</h1>
                        <form>
                            <div class="input-container">
                                <input type="text" id="name" name="name" required="required" onChange={(e) => setName(e.target.value)} />
                                <label for="name">Name</label>
                                <div class="bar"></div>
                            </div>
                            <div class="input-container">
                                <input type="email" id="email" name="email" required="required" onChange={(e) => setEmail(e.target.value)}
                                />
                                <label for="email">Email Address</label>
                                <div class="bar"></div>
                            </div>
                            <div class="input-container">
                                <input type="password" id="password" name="password" required="required" onChange={(e) => setPassword(e.target.value)} />
                                <label for="password">Password</label>
                                <div class="bar"></div>
                            </div>
                            <div class="input-container">
                                <input type="password" id="cpassword" name="cpassword" required="required" onChange={(e) => setcPassword(e.target.value)} />
                                <label for="cpassword">Confirm Password</label>
                                <div class="bar"></div>
                            </div>
                            <div class="button-container">
                                <button onClick={signup}>
                                    <span>Sign up</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
