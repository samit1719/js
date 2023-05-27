let btn1 = document.querySelector(".btn-1")
let box = document.querySelector(".box-2")

function hide() {
    if (box.classList.contains("h")) {
        box.classList.remove("h")
    } else {
        box.classList.add("h")
    }
}

btn1.addEventListener("click", hide)