import {fetchParameters} from "../api/parameter";
import {useState, useEffect} from "react";
import React from "react";
import {Link} from "react-router-dom";

const Parameter = () => {
    const [parameters, setParameters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getParameter = async () => {
            try {
                const data = await fetchParameters();
                if(Array.isArray(data)) {
                    setParameters(data);
                } else {
                    setParameters([]);
                    setError(true);
                }
            } catch (err) {
                console.error('Erreur de récupération : ', error);
                setError(true);
                setParameters([]);
            } finally {
                setLoading(false);
            }
        };

        getParameter();
    }, []);

    if (loading) return <p>Chargement...</p>
    if(error) return <p>Une erreur est survenue lors du chargement des paramètres</p>

    return (
        <div>
            <div className='button-grid'>
                <Link to='/accueil'>
                    <button>Retour à l'accueil</button>
                </Link>
            </div>
            <h2>Mes paramètres</h2>
            {parameters.length > 0 ? (
                parameters.map((parameter) => (
                    <div key={parameter.id}>
                        <h3>{new Date(parameter.measureAt).toLocaleDateString()}</h3>
                        <p><strong>Température :</strong> {parameter.temperature != null ? parameter.temperature + "°C" : "Pas testé"}</p>
                        <p><strong>KH :</strong> {parameter.kh != null ? parameter.kh + "°dKh" : "Pas testé"}</p>
                        <p><strong>Densité :</strong>{parameter.density != null ? parameter.density +"Kh/m³" : "Pas testé"}</p>
                        <p><strong>PH :</strong> {parameter.ph != null ? parameter.ph : "Pas testé"}</p>
                        <p><strong>NO2 :</strong> {parameter.no2 != null ? parameter.no2 + "mg/L" : "Pas testé"}</p>
                        <p><strong>NO3 :</strong> {parameter.no3 != null ? parameter.no3 + "mg/L" : "Pas testé"}</p>
                        <p><strong>PO4 :</strong> {parameter.po4 != null ? parameter.po4 + "mg/L" : "Pas testé"}</p>
                        <p><strong>Ca :</strong> {parameter.ca != null ? parameter.ca + "mg/L" : "Pas testé"}</p>
                        <p><strong>Mg :</strong> {parameter.mg != null ? parameter.mg + "mg/L" : "Pas testé"}</p>
                        <p><strong>Note :</strong> {parameter.comment ? parameter.comment : "Pas de commentaire"}</p>
                        <hr/>
                    </div>
                    ))
            ) : (
                <p>Aucun paramètre pour le moment</p>
            )}
        </div>
    );
};

    export default Parameter;