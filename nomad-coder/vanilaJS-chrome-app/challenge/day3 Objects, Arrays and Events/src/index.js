// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const text = document.getElementsByTagName('h2')[0]

const superEventHandler = {
    mouseEnter: () => {
        text.style.color = colors[0]
        text.innerText = 'The mouse is here!'
    },
    mouseOut: () => {
        text.style.color = colors[1]
        text.innerText = 'The mouse is gone!'
    },
    resize: () => {
        text.style.color = colors[2]
        text.innerText = 'You just resized!'
    },
    rightClick: () => {
        text.style.color = colors[3]
        text.innerText = 'That was a right click!'
    }
};

function init() {
    text.addEventListener('mouseenter', superEventHandler.mouseEnter)
    text.addEventListener('mouseout', superEventHandler.mouseOut)
    window.addEventListener('resize', superEventHandler.resize)
    window.addEventListener('contextmenu', superEventHandler.rightClick)
}

init();
