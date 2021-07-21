import React from "react";

//styles
import { Image, MovieName } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable, movieName }) => (
  <div>
    <Image src={image} alt="movie-thumbnail" />
    <MovieName>
      <h1>{movieName}</h1>
    </MovieName>
  </div>
);

export default Thumb;
