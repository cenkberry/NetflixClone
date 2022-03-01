import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header,LoginPage,Box1,Box2,Box3,Box4} from './codes';
import {Footer} from './codes';
const MyPage   = document.querySelector('#root');


ReactDOM.render(
  <React.StrictMode>
  <Header />
  <Box1 />
  <Box2 />
  <Box3 />
  <Box4 />
  <Footer/>
  </React.StrictMode>, MyPage);

const login = document.querySelector('.login');
 login.addEventListener("click" , () =>{
  ReactDOM.render(
      <React.StrictMode>
      <LoginPage />
      <Footer/>
      </React.StrictMode>, MyPage);
  const username = document.querySelector('.username');
  const password = document.querySelector('.password');
  username.addEventListener("click" , () =>{
    
    username.style.backgroundColor = "#454545";
  
  });
  password.addEventListener("click" , () =>{
    
    password.style.backgroundColor = "#454545";
  
  });
  username.addEventListener("mouseout" , () =>{
    
    username.style.backgroundColor = "#333333";
  
  });
  password.addEventListener("mouseout" , () =>{
    
    password.style.backgroundColor = "#333333";
  
  });
});