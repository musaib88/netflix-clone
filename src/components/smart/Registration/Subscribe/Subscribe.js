import React from 'react'
import "./Subscribe.css";
import uppertick from '../../../../img/RegForm/icons8-checkmark-64.png';
import sideticks from '../../../../img/RegForm/icons8-done-26.png';
export default function Subscribe() {
  return (
    <div id='subscribe-main-layout'>
       <div id='subscribe-layout'>
        <div id='subscribe-form'>
          <div id='upper-tick-head'>
             <img src={uppertick} alt="" />
          </div>
            <div id='steps-tp'><span >STEP 3 OF 3</span></div>
             <div id='p-subscribe-div'> <h1 id='plan-head-s'>Just Subscribe Free</h1></div>
             <div id='div-sologon-sbs'>
              <div className='subs-sologon'> 
              <span><img src={sideticks} alt="" /></span>
              
            <span > No commitments, cancel anytime.</span>
            </div>
            <div  className='subs-sologon'>
            <span><img src={sideticks} alt="" /></span>
            <span  > Everything on Netflix free.</span>
            </div>
            <div  className='subs-sologon'>
            <span><img src={sideticks} alt="" /></span>
            <span >  No ads and no extra fees. Ever.</span>
            </div>
            </div>
            <div id='subscribe-button'><a href="/"><  button>Subscribe</button></a></div>

        </div>
       </div>
    </div>
  )
}
