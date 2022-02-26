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

  
const btn    = document.querySelector('.btn');
const move   = document.querySelector('.move');

btn.addEventListener("click", () =>{
  
  move.style.animation = "move 1s linear";

})
