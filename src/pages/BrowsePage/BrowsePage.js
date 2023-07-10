import React, {  useEffect, useState } from "react";
import logo from "../../img/logo.png";
import "./Browse.css";
import facebookLogo from "../../img/Facbook.svg";
import intagramLogo from "../../img/Instagram.svg";
import twitterLogo from "../../img/Twitter.svg";
import youtubeLogo from "../../img/Youtube.svg";
import searchbar from "../../img/Search.svg";
import notifybell from "../../img/NotifyBell.svg";
import genralprofile from "../../img/Profiletype.png";
import HomeBrowse from "../../components/smart/HomeBrowse/HomeBrowse";

export default function BrowsePage() {
  const [isScrolled, setIsScrolled]=useState(false);
  const handleScroll = ()=>{
    window.scrollY >= 40 ? setIsScrolled(true): setIsScrolled(false);
  }
  useEffect( () => {
    window.addEventListener("scroll",handleScroll)
    console.log(isScrolled);
    return () =>{
        window.removeEventListener("scroll",handleScroll)
    }
  },[window.scrollY])
  
  return (
    <div id="browse-page-layout">
      <div id="browse-navbar" className={isScrolled?"nav_color":""}>
        <div id="left-side-nav">
          <div id="logo-browse">
            
             <  img src={logo} id="logo-browse-com" alt="" />
          </div>
          <div id="menu-left-browse">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">TV Shows</a></li>
              <li><a href="/">Movies</a></li>
              <li><a href="/">New & Popular</a></li>
              <li><a href="/">My List</a></li>
              <li><a href="/">Browse By Languages</a></li>
            </ul>
          </div>
        </div>
        <div id="right-nav-browse">
          <ul>
            <li><a href="/"><img id="searchbar-brow" src={searchbar} alt="" /></a></li>
            <li><a href="/">Children</a></li>
            <li><a href="/"><img id="bell-brow" src={notifybell} alt="" /></a></li>
            <li><a href="/"><img id="profile-type-brow" src={genralprofile} alt="" /></a></li>
          </ul>
        </div>
      </div>

      <div id="content-entertaiment">
        <HomeBrowse/>    
      </div>
      <div id="footer-browser">
        <div id="social-plat">
            <ul><li><a href="/"> <img  id="facebool-size-brow" src={facebookLogo} alt="Facebook" /></a></li>
            <li><a href="/"> <img  id="insta-size-brow" src={intagramLogo} alt="Instagram" /></a></li>
            <li><a href="/"><img  id="twitter-size-brow" src={twitterLogo} alt="twitter" /></a></li>
            <li><a href="/"><img  id="Youtube-size-brow" src={youtubeLogo} alt="Youtube" /></a></li></ul>
        </div>
        <div id="footer-menu-layout">
          <div className="menu-list">
            <ul>
              <li><a href="/">Audio Description</a></li>
              <li><a href="/">Investor Relations</a></li>
              <li><a href="/">Legal Notices</a></li>
            </ul>
          </div>
          <div className="menu-list">
            <ul>
              <li><a href="/">Help Centre</a></li>
              <li><a href="/">Jobs</a></li>
              <li><a href="/">Cookie Preferences</a></li>
            </ul>
          </div>
          <div className="menu-list">
            <ul>
              <li><a href="/">Gift Cards</a></li>
              <li><a href="/">Terms of Use</a></li>
              <li><a href="/">Corporate Information</a></li>
            </ul>
          </div>
          <div className="menu-list">
            <ul>
              <li><a href="/">Media Centre</a></li>
              <li><a href="/">Privacy</a></li>
              <li><a href="/">Contact Us</a></li>
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
