
const colors = ["green", "red", "blue", "white", "pink", "violet"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {

    const no = getrandomno();

    document.body.style.backgroundColor = colors[no];
    color.textContent = colors[no];

});


function getrandomno() {

    return Math.floor(colors.length * Math.random());


}