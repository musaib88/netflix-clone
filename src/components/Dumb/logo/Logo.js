import React from "react";
import netflixlogo from '../../../img/netflixlogo.svg';
import './Logo.css';
export default function Logo() {
  return (
    <div>
        <img  className="netflix-logo" src={netflixlogo} alt='hello' />
    </div>
  );
}
