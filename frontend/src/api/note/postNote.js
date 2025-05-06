export const postNote = async (note) => {
    try {
        const response = await fetch ('http://localhost:8000/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/ld+json',
                'Accept' : 'application/ld+json',
                },
            body : JSON.stringify(note)
        });

        console.log('Données envoyées :', JSON.stringify(note));

        if(!response.ok){
            throw new Error('Erreur lors de la création');
        }

        const data = await response.json()
        console.log('Créé avec succès :', data)
    } catch (error) {
        console.error('Erreur :', error);
    }
}