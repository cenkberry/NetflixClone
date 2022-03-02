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
            <h1 className='spot'>Enjoy on your TV.</h1>
            <h4 className='text-light mt-2'>Watch anywhere. Cancel anytime.</h4>
            <h5 className='text-light mt-3'>Ready to watch? Enter your email to create or restart your membership.</h5>
            <input type="text" className='mail mt-3' placeholder='Email Adress' />
            <button className='btn start mb-1 text-light'>Get Started</button>
          </div>
      </div>
  )
};
export const Box1 = () => {
  return(
    <div className="container-fluid box">
      <div className="container">
        <div className="row py-3">
          <div className="col-sm-6 parag px-4">
              <h1 className="text-light title">Enjoy on your TV.</h1>
              <h4 className="text-light mt-2 boxpar">Watch on Smart TVs, Playstation, Xbox, 
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
        <div className="row py-2 mob-reverse">
          <div className="col-sm-6">
          <img className="img-fluid" src={mobile} alt="tv" />
          </div>
          <div className="col-sm-6 parag">
              <h1 className="text-light title">Download your shows to watch offline.</h1>
              <h3 className="text-light mt-2 boxpar">Save your favorites easily and always have 
              something to watch.</h3>
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
        <div className="row py-3">
          <div className="col-sm-6 parag">
              <h1 className="text-light title">Watch everywhere.</h1>
              <h4 className="text-light mt-2 boxpar">Stream unlimited movies and TV shows on your phone,
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
        <div className="row py-2 mob-reverse">
          <div className="col-sm-6">
          <img className="img-fluid" src={box4} alt="tv" />
          </div>
          <div className="col-sm-6 parag">
              <h1 className="text-light title">Create profiles for kids.</h1>
              <h3 className="text-light mt-2 boxpar">Send kids on adventures with their favorite characters in a 
              space made just for them free with your membership.</h3>
          </div>
        </div>
      </div>
    </div>
  )
 
};
export const Footer = () => {
  return(
    <div className="container-fluid box">
      <div className="container-sm my-5 px-3">
       <h6 className='mb-4'>Questions? Call 0850-390-7444</h6>
      <div className="grid">
    
           <div><a href="#empty">FAQ</a></div>
           <div><a href="#empty">Help Center</a></div>
           <div><a href="#empty">Account</a></div>
           <div><a href="#empty">Media Center</a></div>
    
           <div><a href="#empty">Investor Relations</a></div>
           <div><a href="#empty">Jobs</a></div>
           <div><a href="#empty">Redeem Gift Cards</a></div>
           <div><a href="#empty">Ways to Watch</a></div>
    
           <div><a href="#empty">Terms of Use</a></div>
           <div><a href="#empty">Privacy</a></div>
           <div><a href="#empty">Cookie Preferences</a></div>
           <div><a href="#empty">Corporate Information</a></div>

           <div><a href="#empty">Contact Us</a></div>
           <div><a href="#empty">Speed Test</a></div>
           <div><a href="#empty">Legal Notices</a></div>
           <div><a href="#empty">Only on Netflix</a></div>
        </div>
      </div>
    </div>
  )
};