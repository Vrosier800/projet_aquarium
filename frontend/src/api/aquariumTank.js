export const fetchAquariumTanks = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/aquarium_tanks', {
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            throw new Error('Erreur de réseau ou réponse incorrecte');
        }

        const data = await response.json();
        console.log("Données API :", data); // Log les données pour voir leur format

        // Utilise 'member' pour accéder aux données des bacs
        return data.member;
    } catch (error) {
        console.error('Erreur lors du fetch:', error);
        throw error; // Propager l'erreur à la fonction appelante
    }
};
