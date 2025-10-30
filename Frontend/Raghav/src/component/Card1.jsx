import React from "react";
import "./card.css";

function Card1(props) {
  return (
    <div id="raghav">
      <img
        src={props.img1}  
        alt={props.name}
        height={150}
        width={150}
      />
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
    </div>
  );
}

export default Card1;
