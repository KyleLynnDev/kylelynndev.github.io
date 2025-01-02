window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.querySelector('.dynamic-scroll').style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Adjust speed
});