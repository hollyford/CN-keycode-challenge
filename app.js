const main = document.getElementById("main")
const key = document.getElementById("key")
const which = document.getElementById("which")
const code = document.getElementById("code")

window.addEventListener("keypress", (event) => {
    console.log(event);
    main.textContent = `${event.which}`;
    which.textContent = `${event.which}`;
    key.textContent = `${event.key}`;
    code.textContent = `${event.code}`;
})


