import React, { useEffect, useState } from 'react';
import { fetchAquariumTanks } from "../api/aquariumTank";
import {Link} from "react-router-dom";

const AquariumTank = () => {
    const [tanks, setTanks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getTanks = async () => {
            try {
                const data = await fetchAquariumTanks();
                if (Array.isArray(data)) {
                    setTanks(data); // On met à jour les bacs
                } else {
                    setTanks([]); // fallback vide si jamais l'API renvoie un objet ou null
                    setError(true);
                }
            } catch (err) {
                console.error("Erreur de récupération :", err);
                setError(true);
                setTanks([]); // éviter que tanks soit undefined
            } finally {
                setLoading(false);
            }
        };

        getTanks();
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Une erreur est survenue lors du chargement des bacs.</p>;

    return (
        <div>
            <div className="button-grid">
                <Link to="/accueil">
                    <button>Retour à l'accueil</button>
                </Link>
            </div>
            <h2>Mes bacs</h2>
            {tanks.length > 0 ? (
                tanks.map((tank) => (
                    <div key={tank.id}>
                        <p><strong>Nom :</strong> {tank.name}</p>
                        <p><strong>Volume :</strong> {tank.volume}</p>
                        <p><strong>Date de début :</strong> {tank.startDate ? new Date(tank.startDate).toLocaleDateString() : "Non précisé"}</p>
                        <p><strong>Notes :</strong> {tank.note ? tank.note : "Pas encore de note publié"}</p>
                        <p>Photo :</p>
                        <br/>
                        {tank.picture ? <img src="" alt=""/> : "Pas d'image téléchargé pour ce bac"}
                    </div>
                ))
            ) : (
                <p>Aucun bac trouvé.</p>
            )}
        </div>
    );
};


export default AquariumTank;
