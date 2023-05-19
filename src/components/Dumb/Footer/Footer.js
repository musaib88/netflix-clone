import React from "react";
import './Footer.css';
export default function Footer() {
  return (
    <div id="Footer-layout">
      <div className="Footer-container">
        <span>
          Questions? Call <a href=""> 000-800-919-1694</a>
        </span>
        <div id="list-container">
          <div className="footer-anchors">
            <ul>
            <li><a href="">FAQ</a></li>
            <li><a href="">Investor Relations</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">Speed Test</a></li>
            </ul>
          </div>
          <div className="footer-anchors">
          <ul>
           <li> <a href=""> Help Centre</a></li>
            <li><a href="">Jobs</a></li>
           <li> <a href="">Cookie Preferences</a></li>
           <li> <a href="">Legal Notices</a></li>
           </ul>
          </div>
          <div className="footer-anchors">
            <ul>
           <li> <a href="">Account</a></li>
            <li><a href="">Ways to Watch</a></li>
            <li><a href="">Corporate Information</a></li>
            <li><a href="">Only on Netflix</a></li>
            </ul>
          </div>
          <div className="footer-anchors">
            <ul>
           <li> <a href="">Media Centre</a></li>
           <li> <a href="">Terms of Use</a></li>
           <li> <a href="">Contact Us</a></li>
           </ul>
          </div>
        </div>
           <div id="country"><span>Netflix india</span></div>
      </div>
    </div>
  );
}
