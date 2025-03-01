import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import '../styles/card.css';
import Card from '../components/CardT';
import { ThemeContext } from "../components/ThemeContext";


const Transformations = () => {
  const navigate = useNavigate();
  const [transformations, setTransformations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isSun } = useContext(ThemeContext);
  
  

  useEffect(() => {
    const fetchTransformations = async () => {
      try {
        console.log("Fetching Transformations...");
        const response = await fetch("https://dragonball-api.com/api/transformations");

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // Ver la estructura de los datos

        if (!Array.isArray(data)) {
          throw new Error("Invalid API response format: Expected an array.");
        }

        setTransformations(data); // Usamos `data` directamente porque es un array
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransformations();
  }, []);

  if (loading) return <p className="loading-text">Loading transformations...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (

    <div className={`px-4 py-5 text-center ${isSun ? 'home-light' : 'home-dark'}`}>
      <div class="py-5 title">
          <h1 class="display-5 fw-bold">Transformations</h1>
          <div class="col-lg-6 mx-auto">
              <p class="fs-5 mb-4">Here you'll find <b>everything</b> you need to know about your favorite <b>superheroes</b> and <b>villains</b>. From their origins and powers to their most iconic stories, our wiki is designed to bring you detailed and <b>up-to-date</b> information about the fascinating world of superheroes.</p>
              <div class="home-buttons d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button type="button" class="btn btn-lg px-4 me-sm-3">Custom button</button>
                  <button type="button" class="btn btn-lg px-4">Secondary</button>
              </div>
          </div>
      </div>
      <div className="container justify-content-center" style={{ paddingTop: "50px"}}>
        {/* <div className="row rowHero"> */}
        {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4"> */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
          {transformations.length > 0 ? (
            transformations.map((transformation) => (
              <div key={transformation.id} className="col d-flex justify-content-center" style={{ width: "fit-content" }}> 
                <Card className="text-center w-100" transformation={transformation} />
              </div>
            ))
          ) : (
            <p>No transformations found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transformations;