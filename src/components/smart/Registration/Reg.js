import React from 'react';
import deviceImg from "../../../img/Devices.png";
 

export default function Reg({ changeState }) {
  
  return (
   
    <div>
      <div id="layout-next">
      <div id="Next-img-container">
        <div id="device-img">
          <img src={deviceImg} alt="devices" />
        </div>
        <div id="step-1-3">
          <span>STEP 1 OF 3</span>
        </div>
        <div id="account-heading-reg">
          <h1 className="heading_reg">Finish setting up your account</h1>
        </div>
        <div id="para-details-reg1">
          <p>
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </p>
        </div>
        <div id="next-div">
          <p >
            
            <button onClick={changeState} id="next-button">Next</button>
          </p>
        </div>
      </div>
      </div >
    </div>
    
  )
}
