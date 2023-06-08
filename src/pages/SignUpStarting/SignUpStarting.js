import React from "react";
import Logo from "../../components/Dumb/logo/Logo";
import Sigin from "../../components/smart/signbutton/SignButton";
import "./SignUpStarting.css";
import Footer from '../../components/Dumb/Footer-Reuse/FooterResue';
import deviceImg from "../../img/Devices.png";
export default function SignUpStarting() {
  return (
    <div id="staring-component-layout">
      <div id="navcontainer-registration">
        <div>
          {" "}
          <Logo></Logo>
        </div>
        <div>
          <Sigin buttonColor="black"></Sigin>
        </div>
      </div> 
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
          <a href="/">
            {" "}
            <button id="next-button">Next</button>
          </a>
        </div>
      </div>
      </div >
       <div ><Footer bgcolor=" rgb(243,243,243)" textcolor='rgb(115,115,115)'></Footer></div>
    </div>
  );
}
