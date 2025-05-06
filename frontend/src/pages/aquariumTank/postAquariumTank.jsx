import { useState } from "react";
import React from "react";
import {postAquariumTank} from "../../api/aquariumTank/postAquariumTank";

export default function AddAquariumTankForm() {
    const [formData, setFormData] = useState({
        name: "",
        volume: "",
        length: "",
        width: "",
        height: "",
        startDate: "",
        notes: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // On prépare ici les données nettoyées au bon moment
        const cleanData = {
            ...formData,
            volume: parseFloat(formData.volume),
            length: parseFloat(formData.length),
            width: parseFloat(formData.width),
            height: parseFloat(formData.height),
            startDate: formData.startDate !== "" ? formData.startDate : null // ✅ camelCase ici
        };

        await postAquariumTank(cleanData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

            <label htmlFor="volume">Volume du bac :</label>
            <input type="number" id="volume" name="volume" value={formData.volume} onChange={handleChange} />

            <label htmlFor="length">Longueur :</label>
            <input type="number" id="length" name="length" step="5" value={formData.length} onChange={handleChange} />

            <label htmlFor="width">Largeur :</label>
            <input type="number" id="width" name="width" step="5" value={formData.width} onChange={handleChange} />

            <label htmlFor="height">Hauteur :</label>
            <input type="number" id="height" name="height" step="5" value={formData.height} onChange={handleChange} />

            <label htmlFor="startDate">Date de mise en eau :</label>
            <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} />

            <label htmlFor="notes">Note sur le bac :</label>
            <input
                type="text"
                id="notes"
                name="notes"
                placeholder="Vous pouvez ajouter ici une note sur votre bac"
                value={formData.notes}
                onChange={handleChange}
            />

            <button type="submit">Créer le bac</button>
        </form>
    );
}
