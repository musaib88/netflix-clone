import React from 'react';
import './Rfooter.css';

export default function FooterResue(props) {
 
  return (
    <div id='footer-resue-layout' style={{backgroundColor:props.bgcolor,color:props.textcolor}} > 
        <div id='contain-all-footer'>
       <div id='layout-rfooter'>  
      <span>Questions? Call <a href="tel.000-800-919-1694" style={{color:props.textcolor}}> 000-800-919-1694</a></span>
      </div>
      <div id='footer-list-reuse'>
        <div className='list-div-footer-r'> <ul><li> <a href="https://help.netflix.com/en/node/412">FAQ</a> </li>
        <li> <a href="https://www.netflix.com/in/#">Cookie Preferences</a> </li>
        {/* <li>Language</li> */}
        </ul> </div>
        <div className='list-div-footer-r' ><ul><li> <a href="https://help.netflix.com/en/">Help Centre</a> </li>
        <li> <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li></ul></div>
        <div className='list-div-footer-r'><ul><li><a href="Terms of Use">Terms of Use</a> </li></ul></div>
        <div className='list-div-footer-r' ><ul><li><a href="https://help.netflix.com/legal/privacy">Privacy</a></li></ul></div>
      </div>
      </div>
    </div>
  )
}
