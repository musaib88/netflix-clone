import "./SignUp.css";
import React, { useState } from "react";
import svgfile from "../../../img/right angle.svg";

export default function SignUp() {
    const [email,setEmail]=useState("");
    const [position,setPositon]=useState("email-label-signup")
    const handleEmailChange=(e)=>{
      const result = e.target.value.trim();
       setEmail(result);
       if (result.length>0 ){
          setPositon("email-label-signup-position");}
       else{
        setPositon("email-label-signup");
       }
       
    }
   

  return (
    <div className="container">
      <form action="">
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="email-button">
          <div className="input">
            
            <input
              className="input-input"
              type="email"
              minLength={5}
              maxLength={50}
              id="sigin-up-email"
              value={email} onChange={handleEmailChange} 
              color="white"
            />
            <label className={position} htmlFor="sigin-up-email">Email address</label>
          </div>
          <div className="btn">
            <div className="btn-btn">
              Get Started <img className="arrow" src={svgfile} alt="" />{" "}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
