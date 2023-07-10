import React,{useState} from "react";
import "./RegForm.css";
import Logo from "../../components/Dumb/logo/Logo";
import SignButton from "../../components/smart/signbutton/SignButton";
import Footer from "../../components/Dumb/Footer-Reuse/FooterResue";
export default function RegForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div id="reg-form-layout">
      <div id="reg-navbar-form">
        <div>
          <Logo></Logo>
        </div>
        <div>
          {" "}
          <SignButton buttonColor="black"></SignButton>{" "}
        </div>
      </div>
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
            <label id="label-email" htmlFor="reg-email">Email</label>
          </div>
          <div className="reg-form-div">
            <input type="password" max={30} min={12}  id="reg-password" value={password} onChange={handlePasswordChange} />
            <label id="label-password" htmlFor="reg-password">Add a password</label>
          </div>
          <div className="reg-form-div" >
             <button  className="reg-button-next" type="submit">Next</button>
          </div>
          </form>
        </div>
      </div>
      <div>
        {" "}
        <Footer
          bgcolor=" rgb(243,243,243)"
          textcolor="rgb(115,115,115)"
        ></Footer>
      </div>
    </div>
  );
}
