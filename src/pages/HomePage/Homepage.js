import React from 'react'
import Header from '../../components/Dumb/header/Header';
import './HomePage.css';
import HomeContentContainer from '../../components/Dumb/HomeContent-container/HomeContentContainer';
import Footer from '../../components/Dumb/Footer/Footer';
export default function Homepage() {
  return (
    <div id='Home'>
       <Header/> 
       <HomeContentContainer/>
       <Footer/>
    
    </div>
  )
}
