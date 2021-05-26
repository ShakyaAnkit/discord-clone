import { Button } from '@material-ui/core'
import { auth, provider } from './firebase';
import React from 'react'
import './Login.css'

function Login() {
    const signIn = () => {
        // do google login 
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://download.logo.wine/logo/Discord_(software)/Discord_(software)-Logo.wine.png" alt="discord-logo" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
