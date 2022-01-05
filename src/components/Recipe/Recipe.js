import React from "react";
import Step from "../Step";
import { useLocation } from "react-router-dom";
import { TiTick, TiTimes } from "react-icons/ti";
import { BsFillPersonFill } from "react-icons/bs";
import { BiTime, BiEuro } from "react-icons/bi";
import {Link} from 'react-router-dom'

import "../../index.css"
import "./recipe.css";

export default function Recipe() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="dataContainer">
      <div className="dataContainerInside">
        
          <h1 className="titleMeal">{location.state.meal.title}</h1>
          <div className="imageContainer">

            <img
              src={location.state.meal.image}
              alt="recipe"
              className="imageIMG"
            />
          </div>
        
        <div className="details">
          
          <h3>
            <b>PRICE: </b>{location.state.meal.pricePerServing} <BiEuro />
          </h3>

          <h3>
            <b>READY IN MINUTES: </b>{location.state.meal.readyInMinutes} <BiTime />
          </h3>
          <h3>
            <b>SERVINGS: </b>{location.state.meal.servings} <BsFillPersonFill />{" "}
          </h3>
          <h3>
            <b>VEGETARIAN:</b>
            {location.state.meal.vegetarian ? <TiTick /> : <TiTimes />}
          </h3>
          <h3> <b>VEGAN: </b>{location.state.meal.vegan ? <TiTick /> : <TiTimes />}</h3>
        </div>

        <div className="diets">
          <h3><b>DIETS: </b></h3>
          <ul>
            {location.state.meal.diets.map((key, diet) => {
              return <li key={diet}>{key}</li>;
            })}
          </ul>
        </div>

        <div>
          <h3><b>HOW TO PREPARE:</b></h3>
          <ol>
            {location.state.meal.analyzedInstructions[0].steps.map(
              (step, key) => (
                <Step key={key} {...step} />
              )
            )}
          </ol>
        </div>
        <div className="returnHomeButtonContainer">
          <button className="returnHomeButton">
            <Link to="/">HOME</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
