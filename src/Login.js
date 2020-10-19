import React from 'react';
// import App from './App';
import "./Login.css";
import { loginUrl } from './spotify';
function Login(){
    return (
        <div className = "login">
            {/* <h1> I am the login page</h1> */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify"></img>
            <a href = {loginUrl}>LoginWithSpotify</a>
        </div>
    );
}
export default Login;