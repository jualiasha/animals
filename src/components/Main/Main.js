import React, { useState, useEffect } from "react";
import AnimalNew from "../Animals/AnimalNew";
import AnimalsList from "../Animals/AnimalsList";
import axios from "axios";

const Main = () => {
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "",
    img: "",
    desc: "",
    link: "",
  });

  const valueChangeHandler = (e) => {
    setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value });
  };

  const submitanimal = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/animals", newAnimal);
  };

  return (
    <main>
      <AnimalsList />
      <AnimalNew change={valueChangeHandler} submit={submitanimal} />
    </main>
  );
};

export default Main;
