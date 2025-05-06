import React from "react";
import {useEffect, useState} from "react";
import {fetchFish} from "../../api/fish/getFish";
import {fetchCoral} from "../../api/coral/getCoral";
import {Link} from "react-router-dom";

const GetFishAndCoral = () => {
    const [fishes, setFishes] = useState([]);
    const [corals, setCorals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const [fishData, coralData] = await Promise.all([
                    fetchFish(),
                    fetchCoral()
                ]);

                if (Array.isArray(fishData)) {
                    setFishes(fishData);
                } else {
                    setFishes([]);
                    setError(true);
                }

                if (Array.isArray(coralData)) {
                    setCorals(coralData);
                } else {
                    setCorals([]);
                    setError(true);
                }
            } catch (err) {
                console.error('Erreur de récupération:', err);
                setError(true);
                setFishes([]);
                setCorals([]);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) return <p>Chargement...</p>
    if (error) return <p>Une erreur est survenue lors du chargement des bacs.</p>;

    return (
        <div>
            <div className="button-grid">
                <Link to="/accueil">
                    <button>Retour à l'accueil</button>
                </Link>
            </div>

            <section className="fishSection">
                <h2>Mes poissons</h2>
                {fishes.length > 0 ? (
                    fishes.map((fish) => (
                        <div key={fish.id}>
                            <p><strong>Nom :</strong> {fish.specie}</p>
                        </div>
                    ))
                ) : (
                    <p>Aucun poisson trouvé</p>
                )}

                <Link to="/ajouterPoisson">
                    <button>Ajouter un poisson</button>
                </Link>
            </section>

            <section className="coralSection">
                <h2>Mes coraux</h2>
                {corals.length > 0 ? (
                    corals.map((coral) => (
                        <div key={coral.id}>
                            <p><strong>Nom :</strong> {coral.specie}</p>
                        </div>
                    ))
                ) : (
                    <p>Aucun corail trouvé</p>
                )}
            </section>

        </div>
    )
};

export default GetFishAndCoral;