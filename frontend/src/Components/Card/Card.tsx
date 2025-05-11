import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img
        src=""
        alt="Image"
      />
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <p className="info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sit
        et nesciunt odio libero quas quod alias ratione quam. Minima tenetur
        blanditiis excepturi quis, eum a debitis voluptatem aliquid aut.
      </p>
    </div>
  );
};

export default Card;
