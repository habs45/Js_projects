
let sec = 0, tens = 0;
let timer = false;
function reset() {

    location.reload();


}

function stopwatch() {

    if (timer == true) {

        tens++;

        if (tens == 99) {
            tens = 0;
            sec++;

        }

        if (tens < 10) {
            tens = '0' + tens;
        }
        let t = tens, s = sec;
        if (s < 10) {
            s = "0" + s;
        }
        document.getElementById('tens').innerHTML = t;
        document.getElementById('sec').innerHTML = s;




        setTimeout(stopwatch, 10);
    }



}

function start() {
    if (timer == false) {
        timer = true;
        stopwatch();
    }
}


function stop() {

    timer = false;



}