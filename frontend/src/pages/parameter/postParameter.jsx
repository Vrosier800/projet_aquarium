import {useState} from "react";
import React from "react";
import {postParameter} from "../../api/parameter/postParameter";
import {Link} from "react-router-dom";

export default function AddParameterForm() {
    const [formData, setFormData] = useState({
        temperature: '',
        density: '',
        ph: '',
        no2: '',
        no3: '',
        po4: '',
        ca: '',
        mg: '',
        kh: '',
        comment: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cleanData = {
            ...formData,
            temperature: parseFloat(formData.temperature),
            density: parseFloat(formData.density),
            ph: parseFloat(formData.ph),
            no2: parseFloat(formData.no2),
            no3: parseFloat(formData.no3),
            po4: parseFloat(formData.po4),
            ca: parseFloat(formData.ca),
            mg: parseFloat(formData.mg),
            kh: parseFloat(formData.kh),
        };

        await postParameter(cleanData);
    };

    return (
        <div>
            <div className='button-grid'>
                <Link to='/accueil'>
                    <button>Retour à l'accueil</button>
                </Link>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="temperature">Température (en °C) :</label>
                <input type="number" id='temperature' name='temperature' step='0.1' value={formData.temperature}
                       onChange={handleChange}/>

                <label htmlFor="density">Densité (en Kh/m³) :</label>
                <input type="number" id='density' name='density' step='1' value={formData.density}
                       onChange={handleChange}/>

                <label htmlFor="kh">KH (en °dKh) :</label>
                <input type="number" id='kh' name='kh' step='1' value={formData.kh} onChange={handleChange}/>

                <label htmlFor="ph">PH :</label>
                <input type="number" id='ph' name='ph' step='0.1' value={formData.ph} onChange={handleChange}/>

                <label htmlFor="no2">NO2 (en mg/L) :</label>
                <input type="number" id='no2' name='no2' step='0.1' value={formData.no2} onChange={handleChange}/>

                <label htmlFor="no3">NO3 (en mg/L) :</label>
                <input type="number" id='no3' name='no3' step='0.1' value={formData.no3} onChange={handleChange}/>

                <label htmlFor="po4">PO4 (en mg/L) :</label>
                <input type="number" id='po4' name='po4' step='0.1' value={formData.po4} onChange={handleChange}/>

                <label htmlFor="ca">Calcium (en mg/L) :</label>
                <input type="number" id='ca' name='ca' step='0.1' value={formData.ca} onChange={handleChange}/>

                <label htmlFor="mg">Magnésium (en mg/L) :</label>
                <input type="number" id='mg' name='mg' step='0.1' value={formData.mg} onChange={handleChange}/>

                <label htmlFor="comment">Commentaire :</label>
                <input type="text" id='comment' name='comment' value={formData.comment} onChange={handleChange}/>

                <button type="submit">Enregistrer les paramètres</button>

            </form>
        </div>
    );
}