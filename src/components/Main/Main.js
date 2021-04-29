import React, { useState, useEffect } from "react";
import AnimalNew from "../Animals/AnimalNew";
import AnimalsList from "../Animals/AnimalsList";
import { Switch, Route } from "react-router-dom";
import AnimalSingle from "../Animals/AnimalSingle";
import axios from "axios";

const Main = () => {
  const [animals, setAnimals] = useState([]);
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "",
    img: "",
    desc: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3002/animals")
      .then((res) => setAnimals(res.data));
  }, []);

  const valueChangeHandler = (e) => {
    setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value });
  };

  const submitanimal = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/animals", newAnimal)
      .then(() => {
        return axios.get("http://localhost:3002/animals");
      })
      .then((res) => setAnimals(res.data));
    e.target.reset();
  };

  return (
    <main>
      <Switch>
        <Route path="/:id">
          <AnimalSingle />
        </Route>
        <Route path="/" exact>
          <AnimalsList animals={animals} />
          <AnimalNew change={valueChangeHandler} submit={submitanimal} />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
