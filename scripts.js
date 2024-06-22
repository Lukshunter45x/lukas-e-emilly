document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('surpresaBtn').addEventListener('click', function() {
        // Exibir a mensagem
        document.querySelector('.mensagem span').textContent = 'Eu te amo, Emilly';

        // Exibir a flor
        const flor = document.getElementById('flor');
        flor.style.display = 'block';

        // Animação das pétalas
        const petalas = document.querySelectorAll('.petala');
        petalas.forEach((petala, index) => {
            petala.style.animationDelay = `${index * 0.2}s`;
        });
    });
});
