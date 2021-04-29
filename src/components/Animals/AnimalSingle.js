import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AnimalSingle = () => {
  const [animals, setAnimals] = useState();
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    if (!animals) {
      axios
        .get("http://localhost:3002/animals/" + id)
        .then((res) => setAnimals(res.data));
    }
  });

  let animalData = undefined;

  if (!animals) {
    animalData = <h1>Loading...</h1>;
  }

  if (animals) {
    animalData = (
      <>
        <div>
          <h1>{animals.name}</h1>
          <h2>{animals.aclass}</h2>
          <img src={animals.img} alt={animals.name} />
          <p>{animals.desc}</p>
        </div>

        <button
          onClick={() => {
            history.goBack();
          }}
        >
          Back to animals
        </button>
      </>
    );
  }

  return <div>{animalData}</div>;
};

export default AnimalSingle;
