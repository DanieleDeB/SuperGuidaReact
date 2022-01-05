import "../../index.css"
import "./meal.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  const api = {
    key: process.env.REACT_APP_API_KEY,
    url: "https://api.spoonacular.com/",
  };

  useEffect(() => {
    fetch(`${api.url}recipes/${meal.id}/information?${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("errorn in meal js fetch");
      });
  }, [meal.id]);

  return (
    <div className="recipe">
      <h2>{meal.title}</h2>
      <img src={imageUrl} alt="recipe"></img>
      <div>
        
      </div>
      <button>
        <Link to={`/recipe/${meal.id}`} state={{ meal }}>
          See Recipe
        </Link>
      </button>
    </div>
  );
}
