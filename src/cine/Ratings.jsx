import React from "react";
import Star from "../assets/star.svg";
const Ratings = ({ value }) => {
  const stars = Array(value).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} alt="star" width="14" height={"14"} />
      ))}
    </>
  );
};

export default Ratings;
