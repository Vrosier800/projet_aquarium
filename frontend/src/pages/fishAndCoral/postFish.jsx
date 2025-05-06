import {useState} from "react";
import React from "react";
import {postFish} from "../../api/fish/postFish";
import {Link} from "react-router-dom";

export default function AddFishForm() {
    const [formData, setFormData] = useState( {
        specie : "",
        specieLatin : "",
        actuallyInAquarium : "",
        entryDate : "",
        exitDate : "",
        note : "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cleanData = {
            ...formData,
            actuallyInAquarium: formData.actuallyInAquarium === "true",
            entryDate : formData.entryDate !== "" ? formData.entryDate : null,
            exitDate : formData.exitDate !== "" ? formData.exitDate : null
        };

        await postFish(cleanData);
    };
    
    return (
        <div>
            <div className="button-grid">
                <Link to="/accueil">
                    <button>Retour à l'accueil</button>
                </Link>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="specie">Espèce :</label>
                <input type="text" id="specie" name="specie" value={formData.specie} onChange={handleChange}/>

                <label htmlFor="specieLatin">Nom Latin :</label>
                <input type="text" id="specieLatin" name="specieLatin" value={formData.specieLatin}
                       onChange={handleChange}/>

                <fieldset>
                    <legend>Actuellement dans le bac :</legend>
                    <label htmlFor="yes">Oui</label>
                    <input
                        type="radio"
                        id="yes"
                        name="actuallyInAquarium"
                        value="true"
                        onChange={handleChange}
                        checked={formData.actuallyInAquarium === "true"}
                    />
                    <label htmlFor="no">Non</label>
                    <input
                        type="radio"
                        id="no"
                        name="actuallyInAquarium"
                        value="false"
                        onChange={handleChange}
                        checked={formData.actuallyInAquarium === "false"}
                    />
                </fieldset>

                <label htmlFor="entryDate">Date d'introduction :</label>
                <input type="date" id="entryDate" name="entryDate" value={formData.entryDate} onChange={handleChange}/>

                <label htmlFor="exitDate">Date de sortie du bac :</label>
                <input type="date" id="exitDate" name="exitDate" value={formData.exitDate} onChange={handleChange}/>

                <label htmlFor="note">Notes :</label>
                <input type="text" id="note" name="note" value={formData.note} onChange={handleChange}/>

                <button type="submit">Ajouter votre poisson</button>
            </form>
        </div>
    )
}