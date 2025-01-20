// src/components/Character.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Character = () => {
  const { id } = useParams(); // Obtener el ID del personaje desde la URL
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
        if (!response.ok) throw new Error("Error loading character");
        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <p className="loading-text">Loading characters...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-5" style={{ paddingTop: "50px" }}>
      <button className="btn btn-primary mb-3" onClick={() => navigate("/")}>Volver</button>



      <div class="row justify-content-center">
        <div class="col  d-flex justify-content-center">
          <div className="" style={{ maxWidth: "500px" }}>
            {/* <img src={character.image} className="card-img-top" alt={character.name} /> */}
            <div className="row card-body">
              <h1 className="card-title">{character.name}</h1>
              <p><strong>Race:</strong> {character.race}</p>
              <p><strong>Gender:</strong> {character.gender}</p>
              <p><strong>Ki:</strong> {character.ki}</p>
              <p><strong>MaxKi:</strong> {character.maxKi}</p>
              <p><strong>Affiliation:</strong> {character.affiliation}</p>
              <p><strong>Description:</strong> {character.description}</p>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div className=" character-img-div card">
            <img src={character.image} className="character-img" alt={character.name} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Character;
