export const postFish = async (cleanData) => {
    try {
        cleanData.entryDate = cleanData.entryDate ? new Date(cleanData.entryDate).toISOString() : null;
        cleanData.exitDate = cleanData.entryDate ? new Date(cleanData.exitDate).toISOString() : null;
        cleanData.note = cleanData.note ? cleanData.note : null;

        const response = await fetch ("http://localhost:8000/api/fish" , {
            method: "POST",
            headers: {
                "Content-Type": "application/ld+json",
                "Accept" : "application/ld+json",
            },
            body: JSON.stringify(cleanData)
        });

        console.log("Données envoyées :", JSON.stringify(cleanData));

        if(!response.ok) {
            throw new Error("Erreur lors de la création");
        }

        const data = await response.json();
        console.log("Créé avec succès :", data);
    } catch (error) {
        console.error('Erreur :', error);
    }
};