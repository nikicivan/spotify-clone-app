import React from 'react';
import './login.css';
import { loginUrl } from '../../spotify';

const Login = () => {
    return (
        <div className="login">
            {/* Spotify logo */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />            
            {/* Login with spotify button */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY BUTTON</a>
        </div>
    )
}

export default Login;
