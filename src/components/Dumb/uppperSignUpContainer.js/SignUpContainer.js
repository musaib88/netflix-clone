import React from 'react';

import SignUp from '../../smart/signUp/SignUp';
import './SignUpContainer.css';
export default function SignUpContainer() {
  return (
    <div className='scontainer'>
      <div className='innercontainer'>
        <div className='unlimited'><h1>Unlimited movies, TV <br/>shows and more</h1></div>
         <div className='para'> <p>Watch anywhere. Cancel anytime.</p></div>
          <div id='signup'> <SignUp/>  </div>
      </div>
     
    </div>
  )
}

