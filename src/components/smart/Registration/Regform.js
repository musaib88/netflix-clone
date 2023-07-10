import { useState } from "react";
import React  from 'react';
import "./Regform.css";

export default function Regform({ changeState }) {
    const [password, setPassword] = useState("");
    const [email,setEmail]=useState("");
    const [passwordPostiton,setPasswordPosition]=useState(false)
    const [emailPostiton,setEmailPosition]=useState(false)

    // const   [index,setIndex]=useState(null);
    //  const handlelabelPosition=(ev,ind)=>{
    //   const value=ev.target.value.trim();
    //   if(value.length>0){
    //     setLabelsPosition(true);
    //     setIndex(ind);
    //   }
    //   else{
    //     setIndex(ind);
    //     setLabelsPosition(false);
    //   }
      
         
    //  }

    const handleEmailChange = (e) => {
        const evalue =e.target.value.trim();
        setEmail(e.target.value);
        if(evalue.length>0){
          setEmailPosition(true);
          
        }
        else{
          setEmailPosition(false);
          
        }
    };
  
    const handlePasswordChange = (e) => {
       const pvalue =e.target.value.trim();
       setPassword(e.target.value);
      if(pvalue.length>0){
        setPasswordPosition(true);
      }
      else{
        setPasswordPosition(false);
          

      }
    };
  return (
    <div>
       <div id="reg-form-container">
        <div id="reg-form">
          <div id="reg-form-span">
            <span>STEP 1 OF 3</span>
          </div>
          <div id="reg-form-h1">
            <h1 className="heading_reg">Create a password to start your membership</h1>
          </div>
          <div id="reg-form-p">
            <p>
              Just a few more steps and you're done! We hate paperwork, too.
            </p>
          </div>
          <form action="">
          <div className="reg-form-div">
            
            <input  type="email" max={50} min={10}  id="reg-email"  value={email} onChange={handleEmailChange}  />
            <label id={emailPostiton?"label-input-after-change":"label-email"} htmlFor="reg-email">Email</label>
          </div>
          <div className="reg-form-div">
            <input type="password" max={30} min={12}  id="reg-password" value={password} onChange={handlePasswordChange} />
            <label id={passwordPostiton?"label-input-after-change":"label-password"} htmlFor="reg-password">Add a password</label>
          </div>
          <div className="reg-form-div" >
             <button onClick={changeState} className="reg-button-next" type="submit">Next</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}
