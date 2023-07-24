import React from 'react'
import Logo from '../../Dumb/logo/Logo';
import SignButton from '../../smart/signbutton/SignButton';
import './Navbar.css';
export default function Navbar() {
  return (
    <div className='Navbar'>
      <div>
      <Logo/>
      </div>
      <div>
      <SignButton buttonColor="white" buttonBgColor="#E50914"> </SignButton>
      </div>

    </div>
  )
}
