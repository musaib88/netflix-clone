import React from 'react'
import './SignInPage.css'
import SignIn from '../../components/smart/SignIn/SignIn'
import FooterResue from '../../components/Dumb/Footer-Reuse/FooterResue';
export default function SignInPage() {
  return (
    <div  id='SignInPage-layut'>
         <SignIn/>
         <div>
         <FooterResue bgcolor=" rgba(0,0,0,.85)" textcolor='rgb(115,115,115)'>
          </FooterResue>
          
         </div>
         
    </div>
  )
}
