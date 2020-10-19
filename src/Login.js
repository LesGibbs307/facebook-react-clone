import React from 'react';
import "./Login.css";
import Button from '@material-ui/core/Button';
import {auth, provider} from "./firebase";
import { CallMerge } from '@material-ui/icons';
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";

const Login = () => {
    const [state, dispatch] = useStateValue();
    const signIn = ()=> {
        //sign in
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch((err) => alert(err.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" 
                    style={{marginBottom: "30px"}}
                    />

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/196px-Facebook_Logo_%282019%29.svg.png" />

            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
};


export default Login;