import "./App.css";
import "./index.css"
import React, { useState } from "react";
import MealList from "./components/MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [food, setFood] = useState("");
  const [query, setQuery] = useState("");

  const api = {
    key: process.env.REACT_APP_API_KEY,
    url: "https://api.spoonacular.com/",
  };

  function handleChange(e) {
    setFood(e.target.value);
  }

  function getMealData() {
    fetch(
      `${api.url}recipes/complexSearch?${api.key}&diet=vegetarian&query=${query}&addRecipeInformation=true`
    ) /* &addRecipeInformation=true &query=${query}*/
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  const onChange = (e) => setQuery(e.target.value);

  return (
    <div className="App">
      <h1 className="mainTitle">Vegetarian Recipe Search</h1>
      <input  className="queryContainer" type="string" placeholder="type ingredient" onChange={onChange} />
      <button onClick={getMealData}>SEARCH</button> 
      <div className="recipes">
        {mealData && <MealList mealData={mealData} />}
      </div>
    </div>
  );
}

export default App;
