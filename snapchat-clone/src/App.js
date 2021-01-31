import React, { useEffect } from 'react';
import WebcamCapture from "./WebcamCapture"; 
import Preview from "./Preview"; 
import Chats from "./Chats";
import ChatView from "./ChatView";
import './App.css';
import Login from './Login.js';
import {selectUser,login,logout} from "./features/appSlice";
import {  BrowserRouter as Router,  Switch,  Route,  } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { auth } from './firebase';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          username:authUser.displayName,
          profilePic:authUser.photoURL,
          id:authUser.uid,
        }));

      }else{
       dispatch(logout());
      }
    });
  },[]);

  return (
    <div className="app">
      <Router>
        {
          !user ? (<Login/>):(
            <>
               <img className="app_logo" src='https://icon-library.com/images/snapchat-png-icon/snapchat-png-icon-15.jpg' alt=""/>

        <div className="app_body">      
        <div className="app_bodyBackground">
        <Switch>
        <Route exact path="/chats/view">
         <ChatView/>
         </Route>
        <Route exact path="/chats">
         <Chats/>
          </Route>
         <Route exact path="/preview">
         <Preview/>
          </Route>
         <Route exact path="/">
         <WebcamCapture />
          </Route>
        </Switch>
        </div>
      </div></>
          )
        }
      
    </Router>

     
    </div>
  );
}

export default App;
