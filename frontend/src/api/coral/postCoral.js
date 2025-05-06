export const postCoral = async (cleanData) => {
    try {
        const response = await fetch('http://localhost:8000/api/corals', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/ld+json',
                'Accept' : 'application/ld+json',
            },
            body: JSON.stringify(cleanData)
        });

        console.log("Data envoyée :", JSON.stringify(cleanData));

        if (!response.ok) {
            throw new Error('Erreur lors de la création');
        }

        const data = await response.json();
        console.log('Créé avec succès :', data)
    } catch (error) {
        console.log('Erreur :', error)
    }
}