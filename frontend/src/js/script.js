document.addEventListener('DOMContentLoaded', () => {
    const bubbleContainer = document.querySelector('.bubbles');

    // Fonction pour créer une bulle
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        // Position aléatoire horizontalement (centré avec une petite variation)
        const randomX = Math.random() * 100 - 50; // Entre -50% et 50% pour un effet centré
        bubble.style.left = `calc(50% + ${randomX}%)`;

        // Durée de l'animation aléatoire (entre 5 et 8 secondes)
        const randomDuration = Math.random() * 3 + 5;
        bubble.style.animationDuration = `${randomDuration}s`;

        // Ajouter la bulle au conteneur
        bubbleContainer.appendChild(bubble);

        // Supprimer la bulle après l'animation pour libérer de la mémoire
        setTimeout(() => {
            bubble.remove();
        }, randomDuration * 1000); // Supprime la bulle après que l'animation soit terminée
    }

    // Créer plusieurs bulles toutes les 200ms
    setInterval(createBubble, 200);
});
