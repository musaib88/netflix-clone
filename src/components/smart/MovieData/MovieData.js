import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Apikey from "../../Api/ApiKey";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieData.css";
import playButton from "../../../img/PlayButton.svg";
import Addlist from "../../../img/./AddList.svg";
import ThumbsUp from "../../../img/ThumbsUp.svg";
import RightArrow from "../../../img/RightArrow.svg";
import LeftArrow from "../../../img/LeftArrow.svg";

export default function MovieData(props) {
  const [movies, setMovies] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [movieId, setMovieId] = useState();
  const [arrow, setArrow] = useState(false);
  const handleArrowShow = () => () => {
    setArrow(false);
  };
  const handleArrowHide = () => () => {
    setArrow(true);
  };

  const handelInDetails = (id) => () => {
    setMovieId(id);
    setShowDetails(true);
    setArrow(true);
  };

  const handelOutDetails = (id) => () => {
    setShowDetails(false);
    setMovieId(id);
  };
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        id={arrow ? "left-side-crousal-arrow-show" : "left-side-crousal-arrow"}
        onClick={onClick}
      >
        <img src={LeftArrow} alt="Previous" />
      </div>
    );
  };
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        id={
          arrow ? "right-side-crousal-arrow-show" : "right-side-crousal-arrow"
        }
      >
        <img src={RightArrow} alt="Next" />
      </div>
    );
  };

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3${props.url}api_key=${Apikey}`
      );
      const movieData = response.data.results;
      console.log(movieData);
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
  }, []); // Removed fetchMovies from the dependency array

  console.log(movies);

  return (
    <div
      className="movie-data-layout"
      onMouseOver={handleArrowShow}
      onMouseOut={handleArrowHide}
    >
      <div id="movie-data-title">{props.rowTitle}</div>
      <Slider
        className="slider-row-data"
        dots={false}
        infinite={true}
        slidesToShow={6}
        slidesToScroll={6}
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-box"
            onMouseOver={handelInDetails(movie.id)}
            onMouseOut={handelOutDetails(movie.id)}
          >
            <img
              className="image-box"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div
              id={
                showDetails && movieId == movie.id
                  ? "details-play-movie-visible"
                  : "details-play-movie-hide"
              }
            >
              <div id="playButton-etc">
                <ul id="list-optins-movie-play">
                  <li>
                    <img
                      id="size-button-play"
                      src={playButton}
                      alt="Play Button"
                    />
                  </li>
                  <li>
                    <img
                      id="size-addlist-movies"
                      src={Addlist}
                      alt="Add to List"
                    />
                  </li>
                  <li>
                    <img
                      id="size-addlist-movies"
                      src={ThumbsUp}
                      alt="Thumbs Up"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
