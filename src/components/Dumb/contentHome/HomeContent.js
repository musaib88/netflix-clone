import React, { useState } from "react";
import "./HomeContent.css";
import image1 from "../../../img/Grid/en.png";
import image2 from "../../../img/Grid/brig.png";
import image3 from "../../../img/Grid/kids.png";
import image4 from "../../../img/Grid/Strange things.png";
import SignUp from '../../smart/signUp/SignUp'

export default function HomeContent() {
  const [visible, setVisible] = useState("NotVisible");
  const [index, setIndex] = useState(null);
  const [transform,setTransform]=useState("NoTransform");
  // const [rotate ,setRotate]=useState('collapse-label::before');

  const showContent = (i) => {
    if ( index !== i) {
      setVisible("Visible");
      setIndex(i);
      setTransform("Transform");
    } else {
      setVisible("NotVisible");
      setIndex(null);
     
      
    }
  };
  console.log(visible);
  return (
    <div className="main-container">
      <div id="grid-container">
        <div className="grid-item">
          <div className="img">
            <img src={image1} alt="" />
          </div>
          <div className="paragraph">
            <p className="p1">Enjoy on your TV</p>
            <p className="p2">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="img">
            <img src={image2} alt="" />
          </div>
          <div className="paragraph">
            <p className="p1">Watch everywhere</p>
            <p className="p2">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="img">
            <img src={image3} alt="" />
          </div>
          <div className="paragraph">
            <p className="p1">Create profiles for kids</p>
            <p className="p2">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="img">
            <img src={image4} alt="" />
          </div>
          <div className="paragraph">
            <p className="p1">Download your shows to watch offline</p>
            <p className="p2">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      "collapse-label " + 
      <div id="collapse-layout">
        <h2>Frequently Asked Questions</h2>
        <div className="collapse-container">
          <div className="collapse-label " onClick={() => showContent(0)}>
              <h3>What is Netflix?</h3>
              <span className={index===0?transform:"NoTransform"}  >+</span>
              
          </div>
          <div className={index ===0 ? visible : "NotVisible"}>
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices. <br />
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </p>
          </div>
          <div className="collapse-label" onClick={() => showContent(1)}>
            
           <h3> How much does Netflix cost?</h3>
           <span className={index===1?transform:"NoTransform"}  >+</span>
          </div>
          <div className={index === 1 ? visible : "NotVisible"}>
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </p>
          </div>
          <div className="collapse-label" onClick={() => showContent(2)}>
          <h3> Where can i watch? </h3>
          <span className={index===2?transform:"NoTransform"}  >+</span>
          </div>
          <div className={index === 2 ? visible : "NotVisible"}>
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </p>
          </div>
          <div className="collapse-label " onClick={() => showContent(3)}>
            <h3> How do i cancel?</h3>
            <span className={index===3?transform:"NoTransform"}  >+</span>
          </div>
          <div className={index === 3 ? visible : "NotVisible"}>
            <p>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          </div>
          <div className="collapse-label" onClick={() => showContent(4)}>
             <h3>What can i watch on Netflix?</h3>
             <span className={index===4?transform:"NoTransform"}  >+</span>
          </div>
          <div className={index === 4 ? visible : "NotVisible"}>
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </div>
          <div className="collapse-label" onClick={() => showContent(5)}>
              <h3> Is Netflix good for kids?</h3>
              <span className={index===5?transform:"NoTransform"}  >+</span>
          </div>
          <div className={index === 5 ? visible : "NotVisible"}>
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </p>
          </div>
        </div>
             <div id="signUp-accord">
            <  SignUp/>
              </div>
      </div>
    </div>
  );
}
