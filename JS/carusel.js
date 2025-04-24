window.onload = function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }

    setInterval(nextImage, 3000); // Cambia cada 3 segundos
    showImage(currentImageIndex);
};