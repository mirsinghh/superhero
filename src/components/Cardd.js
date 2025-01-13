// src/components/Card.js
import React from 'react';

const Card = ({ hero }) => {
  return (
    <div className="card">
      <img
        src={hero.image.url}
        alt={hero.name}
        style={{ width: "150px", height: "auto" }}
      />
      <h2>{hero.name}</h2>
      <h4>Full Name: {hero.biography["full-name"]}</h4>
      <p>
        <strong>Publisher:</strong> {hero.biography.publisher}
      </p>
      <p>
        <strong>Powerstats:</strong>
      </p>
      <ul>
        <li>Intelligence: {hero.powerstats.intelligence}</li>
        <li>Strength: {hero.powerstats.strength}</li>
        <li>Speed: {hero.powerstats.speed}</li>
        <li>Durability: {hero.powerstats.durability}</li>
        <li>Power: {hero.powerstats.power}</li>
        <li>Combat: {hero.powerstats.combat}</li>
      </ul>
      <p>
        <strong>Appearance:</strong>
      </p>
      <ul>
        <li>gender: {hero.appearance.gender}</li>
        <li>Race: {hero.appearance.race}</li>
        <li>Height: {hero.appearance.height}</li>
        <li>Weight: {hero.appearance.weight}</li>
        <li>Eye-color: {hero.appearance["eye-color"]}</li>
        <li>Hair-color: {hero.appearance["fhair-color"]}</li>
      </ul>
      <p>
        <strong>Biography:</strong>
      </p>
      <ul>
        <li>Alter-egos: {hero.biography["alter-egos"]}</li>
        <li>Aliases: {hero.biography.aliases}</li>
        <li>Place-of-birth: {hero.biography["place-of-birth"]}</li>
        <li>First-appearance: {hero.biography["first-appearance"]}</li>
        <li>Alignment: {hero.biography.alignment}</li>
      </ul>
      <p>
        <strong>Connections:</strong>
      </p>
      <ul>
        <li>Group-affiliation: {hero.connections["group-affiliation"]}</li>
        <li>Relatives: {hero.connections.relatives}</li>
      </ul>
      <p>
        <strong>Work:</strong> {hero.work.occupation}
      </p>
      <p>
        <strong>Base:</strong> {hero.work.base}
      </p>
    </div>
  );
};

export default Card;

