import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import '../styles/card.css';
import Card from '../components/Card';
import { ThemeContext } from "../components/ThemeContext";



const Characters = () => {
  const navigate = useNavigate();
  const [Characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isSun } = useContext(ThemeContext);

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

    <div className={`px-4 py-5 text-center ${isSun ? 'home-light' : 'home-dark'}`}>
      <div class="py-5 title">
          <h1 class="display-5 fw-bold">Characters</h1>
          <div class="col-lg-6 mx-auto">
              <p class="fs-5 mb-4">Here you'll find <b>everything</b> you need to know about your favorite <b>superheroes</b> and <b>villains</b>. From their origins and powers to their most iconic stories, our wiki is designed to bring you detailed and <b>up-to-date</b> information about the fascinating world of superheroes.</p>
              <div class="home-buttons d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button type="button" class="btn btn-lg px-4 me-sm-3">Custom button</button>
                  <button type="button" class="btn btn-lg px-4">Secondary</button>
              </div>
          </div>
      </div>

      <div className="container justify-content-center" style={{ paddingTop: "50px" }}>
        {/* <div className="row rowHero"> */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
          {Characters.length > 0 ? (
            Characters.map((character) => (
              // <div key={character.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center align-items-center divCardHero">
              <div key={character.id} className="col d-flex justify-content-center" style={{ width: "fit-content" }}> 
                <Card className="text-center w-100" character={character} />
              </div>
            ))
          ) : (
            <p>No characters found.</p>
          )}
        </div>
      </div>
           
    </div>
    
  );
};

export default Characters;