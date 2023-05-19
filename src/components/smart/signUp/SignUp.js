import './SignUp.css';
import React from 'react'
import svgfile from '../../../img/right angle.svg';

export default function SignUp() {
  return (
    <div className='container'>
        <form action="">
           <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
           <div className='email-button'>
           <div className='input'> <input className='input-input' type="email" minLength={5} maxLength={50}  placeholder='Email address'color='white'  /></div>
           <div className='button'><button className='button-button'>Get Started <img src={svgfile} alt="" /> </button></div>
           </div>
        </form>
      
    </div>
  )
}
