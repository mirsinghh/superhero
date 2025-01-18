import './App.css';
import React, { useState, useEffect } from "react";
import Card from './components/Card';
import { ThemeProvider } from './components/ThemeContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function App() {
  const [heroData, setHeroData] = useState([]); // Almacenará los datos de héroes
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // Indicador de carga
  const itemsPerPage = 16; // 8 cards por página

  useEffect(() => {
    const fetchAllHeroes = async () => {
      setLoading(true); // Mostrar indicador de carga
      const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
  
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const data = await response.json();
        console.log(data); // Agrega este console.log
        setHeroData(data); // Guardar los datos de héroes
      } catch (err) {
        setError("Error al cargar los datos");
      } finally {
        setLoading(false); // Ocultar indicador de carga
      }
    };
  
    fetchAllHeroes();
  }, []);

  // Cambiar página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Total de páginas
  const totalPages = Math.ceil(heroData.length / itemsPerPage);
  
  // Calcular los héroes a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentHeroes = heroData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <ThemeProvider>
      <div>

        <Header />

        <Home />


        {error && <p>Error: {error}</p>}

        <div className="container">
          <div className="row justify-content-center">
            {/* Mostrar las tarjetas a medida que los datos están disponibles */}
            {currentHeroes.length > 0
              ? currentHeroes.map((hero) => (
                  <div key={hero.id} className="col-md-3 p-0 d-flex justify-content-center align-items-center"> {/* 4 columnas */}
                    <Card className="text-center" hero={hero} />
                  </div>
                ))
              : !loading && <p>No hay datos para mostrar</p>}
          </div>
        </div>

        {/* Indicador de carga */}
        {loading && <p className="loading-text">Cargando datos...</p>}

        {/* Paginación */}
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


        <br></br>
        <br></br>
        <br></br>
        
        <Footer />
      


      </div>
    </ThemeProvider>
  );
}

export default App;
