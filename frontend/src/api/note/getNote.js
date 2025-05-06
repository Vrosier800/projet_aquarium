export const fetchNotes = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/notes' , {
            headers: {'Content-Type': 'application/json'}
        });
        if(!response.ok) {
            throw new Error('Erreur de réseau ou réponse incorrecte')
        }

        const data = await response.json();
        console.log('Données API : ', data);

        return data.member;
    } catch (error) {
        console.error('Erreur lors du fetch', error);
        throw error;
    }
};