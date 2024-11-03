function createCarrossel(carrosselElement) {
    let currentIndex = 0;
    const images = carrosselElement.querySelectorAll('img');

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        carrosselElement.style.transform = `translateX(-${currentIndex * 500}px)`;
    }

    setInterval(showNextImage, 3000); // Muda de imagem a cada 3 segundos
}

// Seleciona cada carrossel e aplica a função de carrossel
document.querySelectorAll('.carrossel-imagens').forEach(createCarrossel);

