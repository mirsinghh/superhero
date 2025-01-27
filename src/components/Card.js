import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/card.css';



const Card = ({ character = {}, transformation = {}}) => {
  const navigate = useNavigate();

  // Determinar cuál objeto usar (en orden de prioridad)
  const item = character.id ? character : transformation;
  const imageUrl = item.image || "https://via.placeholder.com/150";

  return (
    <div className="card border d-flex flex-column align-items-center">
      <div className='d-flex justify-content-center align-items-center divCardImg'>
        <img src={imageUrl} className="rounded cardImg" alt={item.name}/>

      </div>
      <div className="card-body text-start w-100">
        <h5 className="text">{item.name}</h5>
      </div>
    </div>
  );
};

export default Card;
