import  React, { useState  } from "react";
import "./SignIn.css";
import Logo from "../../Dumb/logo/Logo";
export default function SignIn() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [labelEmail,setLabelEmail]=useState(false);
  const [labelPassword,setLabelPassword]=useState(false);
  const[passwordVisible,setPasswordVisble]=useState(false);
  const [passwordToggle,setPasswordToggle]=useState(false);
   const handlePasswordToggleFocus=()=>{ 
    
    setPasswordToggle(true);
      
  }
  const handlePasswordToggleBlur=()=>{
    setPasswordToggle(false);
     
  
  }
    
    
    const handleEmailChange=(event)=>{
      const result = event.target.value.trim();
         setEmail(result);
         
        
        if(result.length>0){
          setLabelEmail(true);
      
          
        }
        else{
         setLabelEmail(false);
          
          
        }
         

        

    }
    const handlePasswordChange=(e)=>{
      const result = e.target.value.trim();
         setPassword(result);
         if(result.length>0){
         setLabelPassword(true);
          
         }
         else{
          setLabelPassword(false);
         }

    }
    
    const handleShow=()=>{
       setPasswordVisble(!passwordVisible);
    }
   
  return (
    <div id="sign-in-layout">
       <div id="logo-abc">
        <Logo />
        </div>
       <div id='box-sigin-container'>
      <div className="s-container-layout">
        <div id="container-login-form">
          <h1 className="signin-heading">Sign In</h1>
          <form>
             
            <div className="input-div">
              <input
                type="email"
                minLength={5}
                maxLength={50}
                value={email}
                id="email-signin-p"
                onChange={handleEmailChange}
              />
               <div className={labelEmail?"label-postion-sp-after":"label-postion-sp"} >
              <label htmlFor="email-signin-p">Email or phone number</label>
              </div>
            </div>
            <div className="input-div">
              <input
                type={passwordVisible?"text":"password"}
                minLength={6}
                maxLength={12}
                 onChange={handlePasswordChange}
                 value={password}
                 onFocus={handlePasswordToggleFocus}
                 
                id="password-signin-p" 
              />
              <div className={labelPassword?"label-postion-sp-after":"label-postion-sp"} >
              <label htmlFor="password-signin-p">Password</label>
              </div>
              
                 
             <div className={passwordToggle?"show":"show-hide"}>
                 
              <label htmlFor="password-signin-p" onClick={handleShow } >{passwordVisible?"HIDE":"SHOW"}</label>
              </div>
             
             
            </div>
            <div className="input-div-button">
              <button type="submit">Sign In</button>
            </div>
            <div id="labels">
              <div>
                <form action="" id='check-box'> 
               <input type="checkbox"  className="rememberData" id="custom-checkbox" name="rember-data" value=""/>
                 <label htmlFor="rememberData">Remember me</label>
                 </form>
              
              </div>
              <div id="need-help">
                
                 <a href="https://www.netflix.com/in/LoginHelp"><span>Need help?</span></a>
              </div>
            </div>
          </form>
          <div id="bottom-sigin">
            
            <div id="span-bottom1">
              
              <span>New to Netflix? </span>
              <span id="Sigin-now"> Sign up now. </span>
            </div>
            <br />
            <div id="span-bottom2">
              
              <span>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <a href="">Learn more.</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
