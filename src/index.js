import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header,Box1,Box2,Box3,Box4} from './codes';
import {Footer} from './codes';
const MyPage = document.querySelector('#root');


ReactDOM.render(
  <React.StrictMode>
  <Header />
  <Box1 />
  <Box2 />
  <Box3 />
  <Box4 />
  <Footer/>
  </React.StrictMode>, MyPage);