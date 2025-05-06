export const getCoral = async() => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/corals', {
            headers: {'Content-Type': 'application/json'}
        });
        if(!response.ok) {
            throw new Error('Erreur de réseau ou réponse incorrect');
        }

        const data = await response.json();
        console.log("Données API:", data);

        return data.member;
    } catch (error) {
        console.log('Erreur : ', error);
    }
}