import React from 'react';
import "./HomeBrowse.css"
import HomeBanner from "../../../img/wedensday.webp";
import MovieData from '../MovieData/MovieData';
// import ApiKey from '../../Api/ApiKey';
export default function HomeBrowse() {


  return (
    <div>
      <div id='banner-homebrowse'>
        <img id='image-banner-layout-brow' src={HomeBanner} alt="" />

      </div>
      <div className='data-arousal-movies-row'>
        <MovieData  url="/trending/all/day" rowTitle="Trending"> </MovieData>
        <MovieData  url="/discover/movie?sort_by=popularity.desc" rowTitle="Organils"> </MovieData>
        <MovieData    url="/movie/top_rated" rowTitle="Top rated"> </MovieData>
        <MovieData   url="/discover/movie?with_genres=28" rowTitle="Action"> </MovieData>
        <MovieData   url="/discover/movie?with_genres=35" rowTitle="Comedy"> </MovieData>
        <MovieData url="/discover/movie?with_genres=27" rowTitle="Horror"> </MovieData>
        <MovieData   url="/discover/movie?with_genres=10749" rowTitle="Romance"> </MovieData>
         

      </div>
    </div>
  )
}
