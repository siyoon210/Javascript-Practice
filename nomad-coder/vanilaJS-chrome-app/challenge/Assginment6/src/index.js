// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector('select');

select.addEventListener('change', (event) => {
    localStorage.setItem('country', event.target.value);
})

function init() {
    const country = localStorage.getItem('country');
    if(country) {
        select.value = country;
    }
}

init();