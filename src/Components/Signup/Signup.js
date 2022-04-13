import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [createUserWithEmailAndPassword,
        user] = useCreateUserWithEmailAndPassword(auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const getEmail = event => {
        setEmail(event.target.value)
    }
    const getPassword = event => {
        setPassword(event.target.value)
    }

    const handleSignIn = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <h2>Please Register</h2>
            <form onSubmit={handleSignIn}>
                <div className='input-group'>
                    <label htmlFor="Email">Email</label>
                    <br />
                    <input onBlur={getEmail} type="text" placeholder='email' />
                </div>
                <div className='input-group'>
                    <label htmlFor="">password</label>
                    <br />
                    <input onBlur={getPassword} type="password" name="" id="" placeholder='password' />
                </div>

                <input type="submit" value="signUp" />
            </form>
            <p>Already have an account?please <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Signup;