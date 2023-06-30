import React, { useEffect } from "react";

function MovieList() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODcyZTc4Nzg3OWEwMWRkMzM5N2QwZDNhZDU2N2NmOSIsInN1YiI6IjY0OWJlYjZkOTYzODY0MDBjNjcxODY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dI_3RqEW4H093ZpKVyCrmH94UO9JwJrP0GrckaVLu78",
    },
  };
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  });
  return <div></div>;
}

export default MovieList;
