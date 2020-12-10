import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
                <h1>Sign in to hilldev slack clone</h1>
                <p>Movebizonline.com</p>
                <Button>Sign In with Google</Button>
            </div>
            
        </div>
    )
}

export default Login
