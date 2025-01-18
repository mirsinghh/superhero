// src/components/Card.js
import React from 'react';

const Card = ({
  hero = {
    images: { md: "", sm: "", lg: "" },
    name: "Unknown Hero",
  },
}) => {
  const imageUrl = hero.images ? hero.images.md || hero.images.sm || hero.images.lg : "";

  return (



      <div class="card border-0">
        <img src={imageUrl} class="text-center rounded" alt={hero.name} />
        <div class="card-body">
          <h5 class="text-start">{hero.name}</h5>
        </div>
      </div>



  );
};

export default Card;

