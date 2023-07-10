import React from 'react'
import Navbar from '../navbar/Navbar';
import SignUpContainer from '../uppperSignUpContainer.js/SignUpContainer';
import './Header.css';
export default function header() {
  return (
    <div className='header'>
      <Navbar/>
      < SignUpContainer/>

    </div>
  )
}
