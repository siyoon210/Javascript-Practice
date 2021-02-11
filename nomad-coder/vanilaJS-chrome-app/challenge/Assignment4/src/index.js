// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function init() {
    const AVAIL_WIDTH = window.screen.availWidth;
    window.addEventListener('resize', () => {
        const ratio = window.innerWidth / AVAIL_WIDTH;
        const body = document.querySelector('body');
        if(ratio < 0.3) {
            body.classList.remove('teal', 'violet')
            body.classList.add('tomato')
        } else if (ratio < 0.5) {
            body.classList.remove('tomato', 'violet')
            body.classList.add('teal')
        } else {
            body.classList.remove('teal', 'tomato')
            body.classList.add('violet')
        }
    })
}

init();