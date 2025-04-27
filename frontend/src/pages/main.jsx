import React from 'react';
import {useEffect} from "react";
import { Link } from 'react-router-dom';
import "../css/global.css"
import "../css/main.css"

const Main = () => {

    useEffect(() => {
        const bubbleContainer = document.querySelector('.bubbles');

        // Fonction pour créer une bulle
        function createBubble() {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            const randomX = Math.random() * 100 - 50;
            bubble.style.left = `calc(50% + ${randomX}%)`;

            const randomDuration = Math.random() * 3 + 5;
            bubble.style.animationDuration = `${randomDuration}s`;

            bubbleContainer.appendChild(bubble);

            setTimeout(() => {
                bubble.remove();
            }, randomDuration * 1000);
        }

        const interval = setInterval(createBubble, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='mainPage'>
            <h1>Bienvenue sur le Journal d'Aquarium 🐠</h1>
            <Link to="/accueil">
            <button>Allez à la page d'accueil</button>
            </Link>
            <div className="bubbles"></div>
        </div>
    );
};

export default Main;
