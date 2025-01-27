import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from "./ThemeContext";
import Card from './Card';
import '../styles/characterHero.css';

const CharacterHero = () => {
  const { isSun } = useContext(ThemeContext);
  const [characters, setCharacters] = useState([]);
  const [transformations, setTransformations] = useState([]);


  // Función para obtener los datos de la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener personajes
        const charResponse = await fetch("https://dragonball-api.com/api/characters");
        const charData = await charResponse.json();
        console.log("Character API Response:", charData); // Ver estructura en consola
        setCharacters(Array.isArray(charData) ? charData.slice(0, 3) : charData.items?.slice(0, 3) || []);

        // Obtener transformaciones
        const transResponse = await fetch("https://dragonball-api.com/api/transformations");
        const transData = await transResponse.json();
        console.log("Transformations API Response:", transData);
        setTransformations(Array.isArray(transData) ? transData.slice(0, 3) : transData.items?.slice(0, 3) || []);

      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

    return (

        <div>
            <div className={`container mb-5 rounded ${isSun ? 'containerHeroSun' : 'containerHeroDark'}`}>
                <div className="p-5 text-start rounded-3 title">
                    <h1>CHARACTERS</h1>
                    <p className="lead">Conoce a los personajes más icónicos de Dragon Ball.</p>
                    <div className="row rowHero">
                        {characters.map((char) => (
                        <div key={char.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center divCardHero">
                        {/* <div key={char.id} className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center align-items-center divCardHero"> */}
                            <Card className="text-center" character={char} />
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`container mb-5 rounded ${isSun ? 'containerHeroSun' : 'containerHeroDark'}`}>
                <div class="p-5 text-end rounded-3 title">
                    <h1>TRANSFORMATIONS</h1>
                    <p className="lead">Descubre las formas más poderosas de los guerreros.</p>
                    <div className="row rowHero">
                        {transformations.map((trans) => (
                        <div key={trans.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center divCardHero">
                            <Card className="text-center" transformation={trans} />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>



    );
};

export default CharacterHero;



















