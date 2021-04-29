import React from "react";
import "./AnimalCard.css";
import { Link } from "react-router-dom";

const AnimalCard = ({ name, aclass, description, img, link }) => {
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };

  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h3>{aclass}</h3>
      <p>{truncate(description, 30)} ... </p>
      <Link to={`/${link}`}>Read more</Link>
      {/* <a href={link}>Read more</a> */}
    </div>
  );
};

export default AnimalCard;
