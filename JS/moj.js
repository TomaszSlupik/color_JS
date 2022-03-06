const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector(".btn2");
const square = document.querySelector(".color");
const remove = document.querySelector(".remove-color");

function redColor() {
	square.classList.add("red")
    square.classList.remove ('blue')
    square.classList.remove ('gold')
}

function blueColor () {
    square.classList.add ('blue')
    square.classList.remove ('red')
    square.classList.remove ('gold')
}

function removeColor () {
    square.classList.add ('gold')
    square.classList.remove ('blue')
    square.classList.remove ('red')
}

btn1.addEventListener ('click', redColor)
btn2.addEventListener ('click', blueColor)
remove.addEventListener ('click', removeColor)
