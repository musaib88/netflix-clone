import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import apiKey from "../../Api/ApiConfig";

import "./MovieList.css";

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
            return response.data.results;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    useEffect(() => {
        const fetchMovies = async () => {
            const fetchedMovies = await fetchData();
            setMovies(fetchedMovies);
        };

        fetchMovies();
    }, []);



    return (
        <div className='cards-browse' >
             {movies.map((movie)=>{
                 <div> <div>New Popular</div>
                      <div> <img src={} alt="" /></div>
                 </div>
             })}
                            
           
        </div >
    );
}
