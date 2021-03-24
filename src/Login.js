import React from 'react';
import './Login.css';  
import Logo from './img/facebook_img.png'; 
import logoText from './img/Facebook-Logo.wine.svg';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // sign in...
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <div>
                <img src={Logo} alt="" />
                <img src={logoText} alt="" />
            </div>
        
            <Button type="submit" onClick={signIn} >
                Sign In
            </Button>
        </div>
    )
}

export default Login
