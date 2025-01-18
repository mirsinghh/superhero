import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isSun, setIsSun] = useState(true);

  // Cambiar la clase del <body> dinámicamente
  useEffect(() => {
    document.body.className = isSun ? "body-light" : "body-dark";
  }, [isSun]); // Se ejecuta cuando `isSun` cambia

  return (
    <ThemeContext.Provider value={{ isSun, setIsSun }}>
      {children}
    </ThemeContext.Provider>
  );
};