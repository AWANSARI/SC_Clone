import React from 'react';
import './Login.css';
import {login} from "./features/appSlice";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {auth,provider} from "./firebase";
function Login() {
    const dispatch=useDispatch();
    const signIn=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            dispatch(
                login({
                    username:result.user.displayName,
                    profilePic:result.user.photoUrl,
                    id:result.user.uid,}));
        }).catch((error)=>alert(error.message));


    };

    return (
        <div className="login">
           <div className="login_container">
               <img src='https://icon-library.com/images/snapchat-png-icon/snapchat-png-icon-15.jpg' alt=""/>
               <Button variant='outlined' onClick={signIn}> Sign In</Button>
               </div> 
        </div>
    )
}

export default Login
