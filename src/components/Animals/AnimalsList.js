import React from "react";

import AnimalCard from "./AnimalCard";

const AnimalsList = ({ animals }) => {
  return (
    <div className="list">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          name={animal.name}
          aclass={animal.aclass}
          description={animal.desc}
          img={animal.img}
          link={animal.id}
        />
      ))}
    </div>
  );
};

export default AnimalsList;
