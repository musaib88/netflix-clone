import React from 'react';
import "./HomeBrowse.css"
import HomeBanner from "../../../img/wedensday.webp";
import MovieList from '../../Dumb/MovieList/MovieList';
export default function HomeBrowse() {
  return (
    <div>
        <div id='banner-homebrowse'>
           <img id='image-banner-layout-brow' src={HomeBanner} alt="" />
        </div>
        <div className='data-arousal-movies-row'>
          <MovieList />
        </div>
    </div>
  )
}
