import React from "react";
import "./img.css";
const ImageCard = (props) => {
  const { imgSrc, title, rating, plot } = props.film;
  return (
    <div class="wrapper">
      <div class="imgWrapper">
        <img src={imgSrc} alttext="img here" />
      </div>
      <div class="misc">
        <div class="titleWrapper">{title}</div>
        <div class="rating"> ⭐{rating}/10</div>
      </div>
      <div class="sub">{plot}</div>
    </div>
  );
};

export default ImageCard;
