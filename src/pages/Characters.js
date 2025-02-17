import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../styles/card.css';
import Card from '../components/Card';


const Characters = () => {
  const navigate = useNavigate();
  const [Characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchCharacters = async () => {
  //     try {
  //       console.log("Fetching Characters...");
  //       const response = await fetch("https://dragonball-api.com/api/characters");

  //       if (!response.ok) {
  //         throw new Error(`Error ${response.status}: ${response.statusText}`);
  //       }

  //       const data = await response.json();
  //       console.log("API Response:", data); // Ver la estructura de los datos

  //       if (!Array.isArray(data.items)) {
  //         throw new Error("Invalid API response format: Expected an array.");
  //       }

  //       setCharacters(data.items); // Usamos `data` directamente porque es un array
  //     } catch (err) {
  //       console.error("Fetch Error:", err);
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCharacters();
  // }, []);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        let allCharacters = [];
        let page = 1;
        let hasMore = true;
  
        while (hasMore) {
          console.log(`Fetching page ${page}...`);
          const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}`);
  
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
  
          const data = await response.json();
          console.log(`API Response (page ${page}):`, data);
  
          // Asegúrate de que 'items' existe y es un array
          if (Array.isArray(data.items)) {
            allCharacters = [...allCharacters, ...data.items];
          } else {
            throw new Error("Invalid API response format: Expected an array in 'items'.");
          }
  
          // Verifica si hay más páginas
          hasMore = data.items.length > 0; // Si la página actual tiene 0 elementos, hemos terminado
          page++;
        }
  
        setCharacters(allCharacters);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchAllCharacters();
  }, []);

  if (loading) return <p className="loading-text">Loading characters...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div className="container" style={{ paddingTop: "50px" }}>
      <div className="row rowHero">
        {Characters.length > 0 ? (
          Characters.map((character) => (
            <div key={character.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center align-items-center divCardHero">
              <Card className="text-center" character={character} />
            </div>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>
    </div>
  );
};

export default Characters;