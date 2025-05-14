export const postParameter = async (cleanData) => {
    try {
        cleanData.temperature = cleanData.temperature ? cleanData.temperature : null;
        cleanData.density = cleanData.density ? cleanData.density : null;
        cleanData.ph = cleanData.ph ? cleanData.ph : null;
        cleanData.no2 = cleanData.no2 ? cleanData.no2 : null;
        cleanData.no3 = cleanData.no3 ? cleanData.no3 : null;
        cleanData.po4 = cleanData.po4 ? cleanData.po4 : null;
        cleanData.ca = cleanData.ca ? cleanData.ca : null;
        cleanData.mg = cleanData.mg ? cleanData.mg : null;
        cleanData.kh = cleanData.kh ? cleanData.kh : null;
        cleanData.comment = cleanData.comment ? cleanData.comment : null;

        const response = await fetch ('http://localhost:8000/api/parameters', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/ld+json',
                'Accept': 'application/ld+json'
                },
            body: JSON.stringify(cleanData)
        });

        console.log('Données envoyées :', JSON.stringify(cleanData));

        if(!response.ok) {
            throw new Error('Erreur lors de la création');
        }

        const data = await response.json();
        console.log('Créé avec succès :', data);
        
    } catch (error){
        console.log('Erreur :' , error);
    }
};