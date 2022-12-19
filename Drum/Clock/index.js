
setInterval(my_func, 1000);

function my_func() {

    let time = new Date;

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    let p = "AM"
    if (hours > 12) {
        p = "PM"
        hours = hours - 12;

    }
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('print').innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + p



}

