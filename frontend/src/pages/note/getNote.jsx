import React, {useEffect, useState} from "react";
import {fetchNotes} from "../../api/note/getNote";
import {Link} from "react-router-dom";

const GetNote = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getNotes = async () => {
            try {
                const data = await fetchNotes();
                if (Array.isArray(data)) {
                    setNotes(data);
                } else {
                    setNotes([]);
                    setError(true);
                }
            } catch (error) {
                console.error('Erreur de récupération :', error);
                setError(true);
                setNotes([]);
            } finally {
                setLoading(false);
            }
        };

        getNotes();
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Une erreur est survenue lors du chargement des notes.</p>

    return (
        <div>
            <div className='button-grid'>
                <Link to='/accueil'>
                    <button>Retour à l'accueil</button>
                </Link>
            </div>
            <h2>Mes notes</h2>
            {notes.length > 0 ? (
                notes.map((note) => (
                    <div key={note.id}>
                        <p><strong>Notes:</strong></p>
                        <p><i>{new Date(note.dateNote).toLocaleDateString()}</i></p>
                        <p>{note.text}</p>
                    </div>
                ))
            ) : (
                <p>Aucune note pour le moment</p>
            )}
        </div>
    );
};

export default GetNote;