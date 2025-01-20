import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from './components/Card';
import { ThemeProvider } from './components/ThemeContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import CharacterList from './components/CharacterList';
// import Character from "./components/Character";
import Transformations from "./components/Transformations";
import CharacterHero from "./components/CharacterHero";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100"> {/* Contenedor principal */}
          <Header /> {/* Header siempre visible */}

          {/* Contenido Principal */}
          <div className="main-content flex-grow-1">
            <Routes>
              {/* Página principal con la lista de personajes */}
              <Route path="/" element={<>
                <Home />
                <CharacterHero />
                {/* <CharacterList /> */}
              </>} />

              {/* Página de detalles del personaje */}
              {/* <Route path="/character/:id" element={<Character />} /> */}

              {/* Página de transformaciones */}
              <Route path="/transformations" element={<Transformations />} />
            </Routes>
          </div>

          <Footer /> {/* Footer siempre visible */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
