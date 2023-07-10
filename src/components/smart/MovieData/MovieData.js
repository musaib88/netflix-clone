import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Apikey from "../../Api/ApiKey";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MovieData.css';

export default function MovieData(props) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${Apikey}`
      );
      // ${props.movieCatagory}
      // ${props.showType}
      const movieData = response.data.results;
      return movieData;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const movieList = await fetchMovies();
      setMovies(movieList);
    };
    fetchData();
  },[fetchMovies]);

  console.log(movies);

  return (
    <div className='movie-data-layout'>
      <div id='movie-data-title'>{props.rowTitle}</div>
      <Slider className='slider-row-data' dots={false} infinite={true} slidesToShow={6} slidesToScroll={6.5}>
         
        {movies.map((movie) => (
          <div key={movie.id}   className='movie-box'>
            <img className='image-box'
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            {/* <h3>{movie.title}</h3> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}
