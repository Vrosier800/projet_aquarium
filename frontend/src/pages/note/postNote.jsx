import {useState} from "react";
import React from "react";
import {postNote} from "../../api/note/postNote";
import {Link} from "react-router-dom";

export default function AddNoteForm() {
    const [formData, setFormData] = useState({
        text : '',
    });
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const note = {
            ...formData
        };
        
        await postNote(note);
    };
    
    return (
        <div>
            <div className='button-grid'>
                <Link to='/accueil'>
                    <button>Retour à l'accueil</button>
                </Link>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Votre note :</label>
                <input type="textarea" id='text' name='text' value={formData.text} onChange={handleChange}/>

                <button type='submit'>Ajouter votre note</button>
            </form>
        </div>
    )
}