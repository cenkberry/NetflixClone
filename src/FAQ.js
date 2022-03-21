import React,{ Component } from 'react';

class FAQ extends Component {
   constructor(props) {
      super(props);
   }

   state = {
      isVisible : false,
      butStatus : true
   }
   
   shower = (e) =>{
      this.setState({
         isVisible : !this.state.isVisible,
         butStatus : !this.state.butStatus
      })
   }

   render() { 
      const {isVisible} = this.state;
      const {butStatus} = this.state;
      return(  
             <div className='fbar'>
                 <div 
                 className="fques"
                 onClick={this.shower}
                 >
                    <div className="text-light">{this.props.header}</div>
                    <div className="text-light openbut">{butStatus ? "+" : "X"}</div>
                </div>

                {
                      isVisible ? <div className='fans'>
                      {this.props.parag}
                      </div> : null
                }
               
             </div>
      );
   }
}
 
export default FAQ;
