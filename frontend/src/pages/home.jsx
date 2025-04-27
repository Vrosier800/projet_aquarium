import React from 'react';
import "../css/homePage.css"
import {Link} from 'react-router-dom';

const Home = () => {

        return (
            <div className="homePage">
                <h1>Que voulez-vous faire ?</h1>
                <div className="button-grid">
                    <Link to="/bac">
                        <button>Mon bac</button>
                    </Link>
                    <Link to="/poissonsetcoraux">
                        <button>Mes poissons et coraux</button>
                    </Link>
                    <Link to="/parametres">
                        <button>Mes paramètres</button>
                    </Link>
                    <Link to="/notes">
                        <button>Mes notes</button>
                    </Link>
                </div>
            </div>
        );
};
export default Home;
