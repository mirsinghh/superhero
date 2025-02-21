// src/components/Header.js
import React, { useContext } from 'react';
import '../App.css'; 
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const styles = {
  fullHeight: {
    height: '100vh',
    overflowY:'auto',
  },

};



const Header = () => {

  const {isSun, setIsSun} = useContext(ThemeContext); // Estado para alternar entre sol y luna

  const toggleIcon = () => {
    setIsSun(!isSun);
  };

  const logoSrc = isSun ? 'batman-black.png' : 'batman-white.png'; // Cambiar imagen según el estado


  return (

    <nav className={`navbar navbar-expand-lg fixed-top ${isSun ? 'navbar-light' : 'navbar-dark'}`}>
      <div class="container">
        {/* <a class="navbar-brand" href="#"><img src={logoSrc} alt="Logo" /></a> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Alternar navegación">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbar">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={`${isSun ? 'nav-item' : 'nav-item-dark'}`}>
              <Link class="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className={`${isSun ? 'nav-item' : 'nav-item-dark'}`}>
              <a class="nav-link" href="/characters">Characters</a>
            </li>
            <li className={`${isSun ? 'nav-item' : 'nav-item-dark'}`}>
              <Link  class="nav-link" to="/transformations">Transformations</Link >
            </li>
            <li className={`${isSun ? 'nav-item' : 'nav-item-dark'}`}>
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <form role="search">
            <input class="form-control search" type="search" placeholder="Search..." aria-label="Buscar"/>
          </form>

          <div onClick={toggleIcon}> 

            {isSun ? (
              <div className='sun rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                </svg>
              </div>

            ) : (
              <div className='moon rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-moon-stars" viewBox="0 0 16 16">
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                </svg>
              </div>
            )}

          </div>
          
        </div>
      </div>
    </nav>

    // <nav className={`navbar navbar-expand-lg fixed-top  ${isSun ? 'navbar-light' : 'navbar-dark'}`}>
    //   <div className="container">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="offcanvas"
    //       data-bs-target="#offcanvasNavbar"
    //       aria-controls="offcanvasNavbar"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div
    //       className={`offcanvas offcanvas-end  ${isSun ? 'bg-light' : 'bg-dark'}`}
    //       tabIndex="-1"
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //       style={styles.fullHeight}
    //     >
    //       <div className="offcanvas-header">
    //         <button
    //           type="button"
    //           className="btn-close"
    //           data-bs-dismiss="offcanvas"
    //           aria-label="Close"
    //         ></button>
    //       </div>
    //       <div className="offcanvas-body">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className={`${isSun ? 'nav-item' : 'nav-item-dark'}`}>
    //             <Link className="nav-link" aria-current="page" to="/">
    //               Home
    //             </Link>
    //           </li>
    //           <li className={`${isSun ? 'nav-item' : 'nav-item-dark'}`}>
    //             <a className="nav-link" href="#">
    //               Characters
    //             </a>
    //           </li>
    //           <li className={`${isSun ? 'nav-item' : 'nav-item-dark'}`}>
    //             <Link className="nav-link" to="/transformations">
    //               Transformations
    //             </Link>
    //           </li>
    //           <li className={`${isSun ? 'nav-item' : 'nav-item-dark'}`}>
    //             <Link className="nav-link" to="/planets">
    //               Planets
    //             </Link>
    //           </li>
    //           <li className={`${isSun ? 'nav-item' : 'nav-item-dark'}`}>
    //             <a className="nav-link" href="#">
    //               About
    //             </a>
    //           </li>
    //         </ul>
    //         <form role="search">
    //           <input
    //             className="form-control search"
    //             type="search"
    //             placeholder="Search..."
    //             aria-label="Search"
    //           />
    //         </form>

    //         <div onClick={toggleIcon}> 

    //           {isSun ? (
    //            <div className='sun rounded'>
    //               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
    //                 <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
    //               </svg>
    //             </div>
    //           ) : (
    //             <div className='moon rounded'>
    //               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-moon-stars" viewBox="0 0 16 16">
    //                 <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
    //                 <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
    //               </svg>
    //             </div>
    //           )}

    //         </div>




    //       </div>
    //     </div>
    //   </div>
    // </nav>

  );
};

export default Header;


