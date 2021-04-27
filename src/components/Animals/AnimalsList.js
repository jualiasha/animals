import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimalCard from "./AnimalCard";

const AnimalsList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/animals")
      .then((res) => setAnimals(res.data));
  }, []);

  return (
    <div className="list">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          name={animal.name}
          aclass={animal.aclass}
          description={animal.desc}
          img={animal.img}
          link={animal.link}
        />
      ))}
    </div>
  );
};

export default AnimalsList;
