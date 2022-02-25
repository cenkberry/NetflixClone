import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Mydiv = (props) => {
  return( 
    <div>
       <h3>{props.title}</h3>
       <img src={props.tlink} alt='pic' />
       <h4>{props.parag}</h4>
    </div>
  )
};

ReactDOM.render(
  <React.StrictMode>
  
   <Mydiv
   title= 'Daisy Photo'
   parag= 'This is daisy'
   tlink= 'https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg'
   />

  </React.StrictMode>,
  document.getElementById('root')
)