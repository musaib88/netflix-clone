import React from 'react'
import './SignButton.css';
export default function SignButton(props) {
    
  return (
    <div className='signin-button' style={{backgroundColor:props.buttonBgColor}}>
       <div id='right-signin'><a   href="/" style={{color:props.buttonColor}}>Sign in</a></div>
    </div>
  )
}
