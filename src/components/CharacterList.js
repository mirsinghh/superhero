// src/components/CharacterList.js
import React, { useState, useEffect } from "react";
import Card from './Card';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]); // Almacena los datos de personajes
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8; // Puedes modificar este valor si lo deseas

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const url = `https://dragonball-api.com/api/characters?page=${currentPage}&limit=${itemsPerPage}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const data = await response.json();
        console.log(data); // Ver en consola los datos recibidos

        // Ajustar los datos según la estructura de la API
        setCharacters(data.items || []);
        setTotalPages(data.meta?.totalPages || 1); // Obtener el total de páginas desde la API
      } catch (err) {
        setError("Error al cargar los datos");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage]); // Se ejecuta cada vez que cambia la página

  // Asegurar que la página actual no se pase de los límites
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center g-3">
        {error && <p className="text-danger">Error: {error}</p>}

        {characters.length > 0
          ? characters.map((character) => (
              <div key={character.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
                <Card className="text-center" character={character} />
              </div>
            ))
          : !loading && <p>No hay datos para mostrar</p>}
      </div>

      {loading && <p className="loading-text">Cargando datos...</p>}

      {/* Paginación basada en la API */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>Página {currentPage} de {totalPages}</span>
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default CharacterList;
