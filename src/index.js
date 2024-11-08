console.log("DOM loaded")

function renderHi() {
    const h1 = document.createElement("h1");
    h1.textContent = "HI!"
    document.querySelector("body").append(h1)

}

renderHi()
