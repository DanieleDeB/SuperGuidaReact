import react from "react";

function Item({ localizedName, image }) {
  return (
    <li>
      <img src={image} alt="" height={0} />
      <span>{localizedName} </span>
    </li>
  );
}

export default function Step({ step, ingredients, equipment }) {
  return (
    <li className="step">
      <div className="stepName">
        <span>{step}</span>
      </div>

      {ingredients.length ? (
        <>
          <b>Ingredients:</b>
          <ul>
            {ingredients.map((ing, key) => (
              <Item key={key} {...ing} />
            ))}
          </ul>
        </>
      ) : null}

      {equipment.length ? (
        <>
          <b>Equipment:</b>
          <ul>
            {equipment.map((eq, key) => (
              <Item key={key} {...eq} />
            ))}
          </ul>
        </>
      ) : null}
    </li>
  );
}
