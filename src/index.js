import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Page1,Page2,Page3} from './Comp';
const MyPage = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
   <Page1 />
   <Page2 />
   <Page3 />
  </React.StrictMode>, MyPage);

const btn     = document.querySelector('.btn');
const left    = document.querySelector('.left');
const right   = document.querySelector('.right');

btn.addEventListener("click", () =>{

  left.style.animation  = "moveleft 1s linear";
  right.style.animation = "moveright 1s linear";
  
    setTimeout(function(){
    left.style = "none";
    right.style = "none"; 
    }, 2000);

});