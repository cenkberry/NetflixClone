import logo from './img/logo.png';
import tv from './img/tv.png';
import mobile from './img/mob.jpg';
import box3 from './img/box3.png';
import box4 from './img/box4.png';


export const Header = () => {
  return(
      <div className="container-fluid header">
          <div className="row">
                <div className="col-8">
                  <img className="img-fluid logo" src={logo} alt="logo" />
                </div>
                <div className="col-4 text-light rside">
                   <button className='btn login text-bold text-light'>Sign In</button>
                </div>
          </div>
          <div className='text-center'>
            <h1 className='spot'>Unlimited movies, TV shows, and more.</h1>
            <h4 className='text-light mt-2'>Watch anywhere. Cancel anytime.</h4>
            <h5 className='text-light mt-3'>Ready to watch? Enter your email to create or restart your membership.</h5>
            <input type="text" className='mail mt-3' placeholder='Email Adress' />
            <button className='btn start mb-1 text-light'>Get Started ></button>
          </div>
      </div>
  )
}

export const Box1 = () => {
  return(
    <div className="container-fluid box">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 parag">
              <h1 className="text-light">Enjoy on your TV.</h1>
              <h4 className="text-light mt-2">Watch on Smart TVs, Playstation, Xbox, 
                               Chromecast, Apple TV, Blu-ray players, and more.</h4>
          </div>
          <div className="col-sm-6">
          <img className="img-fluid" src={tv} alt="tv" />
          </div>
        </div>
      </div>
    </div>
  )
};

export const Box2 = () => {
  return(
    <div className="container-fluid box">
        <div className="container">
        <div className="row mob-reverse">
          <div className="col-sm-6">
          <img className="img-fluid" src={mobile} alt="tv" />
          </div>
          <div className="col-sm-6 parag">
              <h1 className="text-light">Download your shows to watch offline.</h1>
              <h3 className="text-light mt-2">Save your favorites easily and always have something to watch.</h3>
          </div>
        </div>
      </div>
    </div>
  )
};
export const Box3 = () => {
  return(
    <div className="container-fluid box">
      <div className="container">
        <div className="row d-flex">
          <div className="col-sm-6 parag">
              <h1 className="text-light">Watch everywhere.</h1>
              <h4 className="text-light mt-2">Stream unlimited movies and TV shows on your phone,
               tablet, laptop, and TV without paying more.</h4>
          </div>
          <div className="col-sm-6">
          <img className="img-fluid" src={box3} alt="box3" />
          </div>
        </div>
      </div>
    </div>
  )
};
export const Box4 = () => {
  return(
    <div className="container-fluid box">
        <div className="container">
        <div className="row mob-reverse">
          <div className="col-sm-6">
          <img className="img-fluid" src={box4} alt="tv" />
          </div>
          <div className="col-sm-6 parag">
              <h1 className="text-light">Create profiles for kids.</h1>
              <h3 className="text-light mt-2">Send kids on adventures with their favorite characters in a 
              space made just for them free with your membership.</h3>
          </div>
        </div>
      </div>
    </div>
  )
};