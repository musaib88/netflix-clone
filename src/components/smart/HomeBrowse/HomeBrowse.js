import React, { useEffect, useState } from 'react';
import "./HomeBrowse.css"
import HomeBanner from "../../../img/wedensday.webp";
import MovieList from '../MovieList/MovieList';

export default function HomeBrowse() {
  
  
  return (
    <div>
        <div id='banner-homebrowse'>
           <img id='image-banner-layout-brow' src={HomeBanner} alt="" />
        </div>
        <div className='data-arousal-movies-row'>
            <MovieList></MovieList>
        </div>
    </div>
  )
}
