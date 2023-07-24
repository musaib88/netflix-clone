import React from "react";
import './Footer.css';
export default function Footer() {
  return (
    <div id="Footer-layout">
      <div className="Footer-container">
        <span>
          Questions? Call <a href="tel:000-800-919-1694"> 000-800-919-1694</a>
        </span>
        <div id="list-container">
          <div className="footer-anchors">
            <ul>
            <li><a href="https://help.netflix.com/en/node/412">FAQ</a></li>
            <li><a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a></li>
            <li><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
            <li><a href="https://fast.com/">Speed Test</a></li>
            </ul>
          </div>
          <div className="footer-anchors">
          <ul>
           <li> <a href="https://help.netflix.com/en/"> Help Centre</a></li>
            <li><a href="https://jobs.netflix.com/">Jobs</a></li>
           <li> <a href="https://www.netflix.com/in/#">Cookie Preferences</a></li>
           <li> <a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
           </ul>
          </div>
          <div className="footer-anchors">
            <ul>
           <li> <a href="/">Account</a></li>
            <li><a href="https://devices.netflix.com/en/">Ways to Watch</a></li>
            <li><a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
            <li><a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a></li>
            </ul>
          </div>
          <div className="footer-anchors">
            <ul>
           <li> <a href="https://media.netflix.com/en/">Media Centre</a></li>
           <li> <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
           <li> <a href="https://help.netflix.com/en/contactus">Contact Us</a></li>
           </ul>
          </div>
        </div>
           <div id="country"><span>Netflix india</span></div>
      </div>
    </div>
  );
}
