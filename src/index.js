function renderHi() {
    const h1 = document.createElement("h1");
    h1.textContent = "Hello world!"
    document.querySelector("body").append(h1)

}

renderHi()

const noConflict = false