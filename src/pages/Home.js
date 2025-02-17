// src/components/Home.js
import React, { useContext } from 'react';
import { ThemeContext } from "../components/ThemeContext";

const Home = () => {
    
    const { isSun } = useContext(ThemeContext);

    return (

        <div className={`px-4 py-5 text-center ${isSun ? 'home-light' : 'home-dark'}`}>
            <div class="py-5 title">
                <h1 class="display-5 fw-bold">theDragonBallApp</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="fs-5 mb-4">Here you'll find <b>everything</b> you need to know about your favorite <b>superheroes</b> and <b>villains</b>. From their origins and powers to their most iconic stories, our wiki is designed to bring you detailed and <b>up-to-date</b> information about the fascinating world of superheroes.</p>
                    <div class="home-buttons d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-lg px-4 me-sm-3">Custom button</button>
                        <button type="button" class="btn btn-lg px-4">Secondary</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
