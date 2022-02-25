import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Hello} from './Comp';
const MyPage = document.getElementById('root');



ReactDOM.render(
  <React.StrictMode>
  <Hello />
  </React.StrictMode>, MyPage);
