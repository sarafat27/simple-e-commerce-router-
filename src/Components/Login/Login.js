import React, { useState } from 'react';
import './Login.css'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
const Login = () => {
    const { userGoogle, signInWithGoogle, handleSignOut } = useFirebase();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home'


    const getEmail = event => {
        setEmail(event.target.value)
    }
    const getPassword = event => {
        setPassword(event.target.value)
    }
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <h2>This is login</h2>
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

                <input type="submit" value="Login" />
            </form>
            <p>Don't have an account?please <Link to='/signup'>Register</Link></p>
            {userGoogle ?
                <div>
                    <button onClick={handleSignOut}>Logout by google</button>
                    <p>This is {userGoogle.displayName}</p>
                </div>
                :
                <button onClick={signInWithGoogle}>Login with Google</button>}
        </div>
    );
};

export default Login;