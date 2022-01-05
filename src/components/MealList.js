import React from "react";
import Meal from "./Meal/Meal";
import '../index.css'


export default function MealList({ mealData }) {
  return (
    <main>
      <section>
        {mealData.results.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
