import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Transformations = () => {
  const navigate = useNavigate();
  const [transformations, setTransformations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="container" style={{ paddingTop: "50px" }}>
      <h1>Transformations</h1>
      <div className="row justify-content-center g-3">
        {transformations.length > 0 ? (
          transformations.map((transformation) => (
            <div key={transformation.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
              <div className="card text-center">
                <img src={transformation.image || "https://via.placeholder.com/150"} 
                     className="card-img-top" 
                     alt={transformation.name} />
                <div className="card-body">
                  <h5 className="text-start">{transformation.name}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No transformations found.</p>
        )}
      </div>
    </div>


  );
};

export default Transformations;
