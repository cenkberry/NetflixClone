import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Mydiv = (props) => {
  return( 
    <div>
       <h1>{props.title}</h1>
       <img src={props.tlink} alt='pic' />
       <h3>{props.parag}</h3>
    </div>
  )
};

ReactDOM.render(
  <React.StrictMode>
  <Mydiv
   title= 'Daisy Photo'
   parag= 'this is about daisy info'
   tlink= 'https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg'
   />
   <Mydiv
   title='Daisy Photo2'
   parag='this is about daisy info2'
   tlink='https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg'
   />
  </React.StrictMode>,
  document.getElementById('root')
)