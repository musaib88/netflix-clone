import React, { useState } from "react";
import Logo from "../../components/Dumb/logo/Logo";
import Sigin from "../../components/smart/signbutton/SignButton";
import "./SignUpPage.css";
import Footer from '../../components/Dumb/Footer-Reuse/FooterResue';
import Reg from "../../components/smart/Registration/Reg";
import Regform from "../../components/smart/Registration/Regform";
import Subscribe from "../../components/smart/Registration/Subscribe/Subscribe";
export default function SignUpPage() {
  const [page, setPage] = useState('one');
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
        {page === 'two' &&<Regform changeState={()=>{setPage('three')}}/>}
        {page === 'three' && <Subscribe/>}
        {page === 'one' && <Reg changeState={()=>{setPage('two')}}/>}
   

       
       <div ><Footer bgcolor=" rgb(243,243,243)" textcolor='rgb(115,115,115)'></Footer></div>
    </div>
  );
}
