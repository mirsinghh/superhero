import React from 'react';
import styled from 'styled-components';

const Card = ({
  hero = {
    images: { md: "", sm: "", lg: "" },
    name: "Unknown Hero",
  },
}) => {
  const imageUrl = hero.images ? hero.images.md || hero.images.sm || hero.images.lg : "";

  return (
    <StyledWrapper hero={hero}>
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content border">
                <p>{hero.name}</p>
              </div>
            </div>

            <div className="front">
              <div className="front-content">
                {/* Asegúrate de que la URL de la imagen esté bien definida */}
                <img src={imageUrl} alt={hero.name} />
              </div>
            </div>
          </div>
        </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    // width: 330px;
    height: 375px;
    border: 0;
    position:relative;
    margin-bottom:40px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 400ms;
    border-radius: 8px;
    border: 0;
  }

  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden;
  }

  .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .front-content img {
    max-width: 100%; /* Ajusta el ancho para que no exceda el contenedor */
    max-height: 100%; /* Ajusta la altura para que no exceda el contenedor */
    object-fit: cover; /* Asegura que toda la imagen sea visible sin recortar */
  }

  .back {
    transform: rotateY(180deg);
    color: white;
  }

  .back .back-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7); /* Fondo semitransparente */
    border-radius: 8px;
    position: relative;
    overflow: hidden;
  }

  .back .back-content::before {
    content: ""; /* Pseudo-elemento para la imagen con blur */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ hero }) => hero.images?.md || hero.images?.sm || hero.images?.lg || 'ruta/a/imagen/predeterminada.jpg'}); /* Imagen del héroe */
    background-size: cover;
    background-position: center;
    filter: blur(10px); /* Efecto de desenfoque */
    z-index: 0; /* Colocar detrás del contenido */
  }

  .back .back-content p {
    position: relative;
    z-index: 1; /* Asegurar que el texto esté encima de la imagen desenfocada */
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Sombra para mejorar la legibilidad */
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }
`;


export default Card;

