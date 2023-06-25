import React from "react";
import logo from "../../img/logo.png";
import "./Browse.css";
import facebookLogo from "../../img/Facbook.svg";
import intagramLogo from "../../img/Instagram.svg";
import twitterLogo from "../../img/Twitter.svg";
import youtubeLogo from "../../img/Youtube.svg";


export default function BrowsePage() {
  return (
    <div id="browse-page-layout">
      <div id="browse-navbar">
        <div id="left-side-nav">
          <div id="logo-browse">
            <img id="logo-id-browse" src={logo} alt="NETFLIX" />
          </div>
          <div id="menu-left-browse">
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse By Languages</li>
            </ul>
          </div>
        </div>
        <div id="right-nav-browse">
          <ul>
            <li>freg</li>
            <li>greg</li>
            <li>rrg</li>
            <li>gregr</li>
          </ul>
        </div>
      </div>
      <div id="content-entevvvvcc rtaiment"></div>
      <div id="footer-browser">
        <div id="social-plat">
            <ul><li> <img  id="facebool-size-brow" src={facebookLogo} alt="Facebook" /></li>
            <li> <img  id="insta-size-brow" src={intagramLogo} alt="Instagram" /></li>
            <li><img  id="twitter-size-brow" src={twitterLogo} alt="twitter" /></li>
            <li><img  id="Youtube-size-brow" src={youtubeLogo} alt="Youtube" /></li></ul>
        </div>
        <div id="footer-menu-layout">
          <div className="menu-list">
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className="menu-list">
            <ul>
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className="menu-list">
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="menu-list">
            <ul>
              <li>Media Centre</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div id="bottom-bro-fot-span">
         <div id="service-code" ><span>Service Code</span></div>
         <div id="copyright-brow"> <span>© 1997-2023 Netflix, Inc.</span></div>
         </div>
      </div>
    </div>
  );
}
