    // Select elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const images = document.querySelectorAll('.gallery-image');
    const closeBtn = document.querySelector('.close');

    // Open lightbox
    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex'; // Show the lightbox
            lightboxImage.src = image.src; // Set the clicked image's src to the lightbox image
            lightboxImage.alt = image.alt; // Set the alt text
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none'; // Hide the lightbox
    });

    // Close lightbox on background click
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none'; // Hide the lightbox
        }
    });