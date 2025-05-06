export const fetchParameters = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/parameters' , {
            headers: {'Content-Type' : 'application/json'}
        });
        if(!response.ok) {
            throw new Error('Erreur de réseau ou réponse inccorecte')
        }

        const data = await response.json();
        console.log('Données API : ', data);

        return data.member;
    } catch (err) {
        console.error('Erreur lors du fetch', err)
        throw err;
    }
};