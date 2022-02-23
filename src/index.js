import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

const menuitems = [
  {
    id: "Ana Sayfa",
    link: "./index.html"
  },
  {
   id: "Bitkiler",
   link: "./bitkiler.html"
 },
 {
  id: "Arajmanlar",
  link: "./arajmanlar.html"
},
{
  id: "Buketler",
  link: "./buketler.html"
},
{
  id: "Nişan&Evlilik",
  link: "./nisanev.html"
},
{
  id: "İletişim",
  link: "./contact.html"
}
];

const menu = document.querySelector('.menu');
let result = menuitems.map( item => `<a class="nav-link my-1 mx-1" href="${item.link}">${item.id}</a>`).join("");
menu.innerHTML =  result;