import React from "react";
import "./HomeBrowse.css";
import HomeBanner from "../../../img/wedensday.webp";
import MovieData from "../MovieData/MovieData";

export default function HomeBrowse() {
  return (
    <div>
      <div id='banner-homebrowse'>
        <img
          id='image-banner-layout-brow'
          src={HomeBanner}
          alt=''
        />
        <div id='movie-bannaer-wedsday'>
          <img
            id='banner-pic-weds'
            src='https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABdxlUl_M2h5ERjFfyvuhRn2v-Az7Pwe_KxG_M9HSWbURJYrAs9pvqDPa3B3UPTCn3K_xS17OhTYmOca-lM4XAN7y5RogX7xYSfhIkk21Sgt9wNuZlqUFsCVdSD-tT7udzadO5zDd2hkAMGYPQJV9kbYoTY6n6u5X4YgGHG6AStY-EUePkvpO6A.png?r=50a'></img>
              
          <div id='top-10-title'>
            {" "}
            <img src='https://www.netflix.com/tudum/top10/images/top10.png'></img>{" "}
            <span>
              
              #3 in TV Shows Today
            </span>

          </div>

          <div id="details-para-weds">
                <p>
                  Smart, sarcastic and a little dead inside, Wednesday Addams
                  investigates a murder spree while making new friends — and
                  foes — at Nevermore Academy.
                </p>

                <div>
                  {" "}
                  <button className="button-top-10" id="button-top-play"> <i className="fa-solid fa-play"></i> Play</button>
                  <button className="button-top-10" id="button-top-info" >  <i className="fa-solid fa-circle-info"></i>  More Info</button>
                </div>
              </div>
        </div>
      </div>
      <div className='data-arousal-movies-row'>
        <MovieData
          url='/trending/all/day?'
          rowTitle='Trending'></MovieData>

        <MovieData
          url='/discover/movie?'
          rowTitle='Orginals'></MovieData>
        <MovieData
          url='/movie/top_rated?'
          rowTitle='Top rated'></MovieData>
        <MovieData
          url='/discover/movie?with_genres=28&'
          rowTitle='Action'></MovieData>
        <MovieData
          url='/discover/movie?with_genres=35&'
          rowTitle='Comedy'></MovieData>
        <MovieData
          url='/discover/movie?with_genres=27&'
          rowTitle='Horror'></MovieData>
        <MovieData
          url='/discover/movie?with_genres=10749&'
          rowTitle='Romance'></MovieData>
      </div>
    </div>
  );
}
