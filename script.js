function toggleMenu() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.classList.toggle('toggle'); // Триггерим анимацию бургера
    navLinks.classList.toggle('nav-active'); // Открываем/закрываем меню
}



playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playBtn.style.display = 'none';
    } else {
        video.pause();
        playBtn.style.display = 'block';
    }
});


video.addEventListener('play', () => {
    playBtn.style.display = 'none';
});


video.addEventListener('pause', () => {
    playBtn.style.display = 'block';
});