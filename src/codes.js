import logo from './img/logo.png';
import tv from './img/tv.png';
import mobile from './img/mob.jpg';
import box3 from './img/box3.png';
import box4 from './img/box4.png';
import FAQ from './FAQ';

export const Header = () => {
  return(
      <div className="container-fluid header">
          <div className="row">
                <div className="col-8">
                  <img className="img-fluid logo" src={logo} alt="logo" />
                </div>
                <div className="col-4 text-light rside mt-3">
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
export const Box5 = () => {
  return(
    <div className="container-fluid faqbox">
        <div className="container">
          <div className="row justify-content-center">
        
           <div className="col-xs-12 col-sm-9">

              <h1 className='text-center text-light my-5 title'>Frequently Asked Questions</h1>

              <FAQ
                  header="What is Netflix?"
                  parag="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, 
                  and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single 
                  commercial – all for one low monthly price. There's always something new to discover 
                  and new TV shows and movies are added every week!" 
              />
              <FAQ
                 header="How much does Netflix cost?"
                 parag="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.
                  Plans range from 26.99 TL to 54.99 TL a month. No extra costs, no contracts." 
              />
              <FAQ
                 header="Where can I watch?"
                 parag="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com
                 from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs,
                 smartphones, tablets, streaming media players and game consoles.
                 You can also download your favorite shows with the iOS, Android, 
                 or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection.
                 Take Netflix with you anywhere.."           
             />
             <FAQ
                 header="How do I cancel?"
                 parag="Netflix is flexible. There are no pesky contracts and no commitments.
                 You can easily cancel your account online in two clicks.
                 There are no cancellation fees – start or stop your account anytime."           
             />
             <FAQ
                 header="What can I watch on Netflix?"
                 parag="Netflix has an extensive library of feature films, documentaries, TV shows, anime, 
                 award-winning Netflix originals, and more. Watch as much as you want, anytime you want."           
             />
             <FAQ
                 header="Is Netflix good for kids?"
                 parag="The Netflix Kids experience is included in your membership to give parents 
                 control while kids enjoy 
                 family-friendly TV shows and movies in their own space.
                 Kids profiles come with PIN-protected parental controls that let you restrict the maturity
                 rating of content kids can watch and block specific titles you don’t want kids to see."           
             />
           </div>
         </div>
      </div>
    </div>
  )
};


export const Footer = () => {
  return(
    <div className="container-fluid box">
      <div className="container-sm my-5 px-2">
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