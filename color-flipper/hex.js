const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function () {

    let curr = "#";

    for (let i = 0; i < 6; i++) {

        curr += colors[getrandomno()];


    }
    color.textContent = curr;
    document.body.style.backgroundColor = curr;




});







function getrandomno() {

    return Math.floor(colors.length * Math.random());


}