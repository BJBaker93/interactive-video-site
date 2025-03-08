document.querySelectorAll('.clickable-element').forEach(element => {
    element.addEventListener('click', () => {
        const transitionVideo = element.getAttribute('data-transition');
        const loopVideo = element.getAttribute('data-loop');
        playTransitionAndLoop(transitionVideo, loopVideo);
    });
});

function playTransitionAndLoop(transitionSrc, loopSrc) {
    const mainVideo = document.getElementById('mainVideo');
    mainVideo.src = transitionSrc;
    mainVideo.loop = false;
    mainVideo.play();

    mainVideo.onended = () => {
        mainVideo.src = loopSrc;
        mainVideo.loop = true;
        mainVideo.play();
    };
}
