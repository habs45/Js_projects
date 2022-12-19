
const jokes = [
    " I failed math so many times at school, I can’t even count.",
    "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me",
    "Don’t you hate it when someone answers their own questions? I do",
    "I  can’t believe I got fired from the calendar factory. All I did was take a day off",
    "Why didn’t the orange win the race? It ran out of juice.",
    "Last night me and my girlfriend watched three DVDs back to back. Luckily I was the one facing the TV.",
    "What's black and white and read all over? The newspaper.",
    "chla ja bs@k",
    "nhi btaunga"

];


window.addEventListener("DOMContentLoaded", function () {

    target.textContent = jokes[rndm()];



});


const target = document.querySelector('.cnt2');
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {

    let p = rndm();
    target.textContent = jokes[p];



});

function rndm() {

    let rdm = Math.floor(Math.random() * jokes.length);

    return rdm;
}