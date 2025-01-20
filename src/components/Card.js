import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  card: {
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    width: "100%",
    maxWidth: "350px",
    overflow: "hidden",
  },
  
  divCardImg: {
    width: "100%",
    height: "450px",
    padding: "10px",
  },

  cardImg: {
    cursor: "pointer",
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    objectFit: "contain",
  },

  text: {
    fontWeight: "bold",
  }
}

const Card = ({ character = {}, transformation = {}}) => {
  const navigate = useNavigate();

  // Determinar cuál objeto usar (en orden de prioridad)
  const item = character.id ? character : transformation;
  const imageUrl = item.image || "https://via.placeholder.com/150";

  return (
    <div className="card border d-flex flex-column align-items-center" style={styles.card}>
      <div className='d-flex justify-content-center align-items-center' style={styles.divCardImg}>
        <img src={imageUrl} className="rounded" alt={item.name} style={styles.cardImg} />
      </div>
      <div className="card-body text-start w-100">
        <h5 style={styles.text}>{item.name}</h5>
      </div>
    </div>
  );
};

export default Card;
