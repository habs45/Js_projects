const arr = [];


function undo() {

    if (arr.length != 0) {
        if (flag == 1) {
            document.getElementById('print').innerHTML = 'Player O Turn';
            flag = 0;
        }
        else {
            flag = 1;
            document.getElementById('print').innerHTML = 'Player X Turn';

        }
        last_move = arr[arr.length - 1];

        arr.pop();
        if (last_move == 1) {
            document.getElementById("b1").disabled = false;
            document.getElementById("b1").value = '';
            document.getElementById("b1").disabled = false;
        }
        else if (last_move == 2) {
            document.getElementById("b2").disabled = false;
            document.getElementById("b2").value = '';
            document.getElementById("b2").disabled = false;
        }
        else if (last_move == 3) {
            document.getElementById("b3").disabled = false;
            document.getElementById("b3").value = '';
            document.getElementById("b3").disabled = false;
        }
        else if (last_move == 4) {
            document.getElementById("b4").disabled = false;
            document.getElementById("b4").value = '';
            document.getElementById("b4").disabled = false;
        }
        else if (last_move == 5) {
            document.getElementById("b5").disabled = false;
            document.getElementById("b5").value = '';
            document.getElementById("b5").disabled = false;
        }
        else if (last_move == 6) {
            document.getElementById("b6").disabled = false;
            document.getElementById("b6").value = '';
            document.getElementById("b6").disabled = false;
        }
        else if (last_move == 7) {
            document.getElementById("b7").disabled = false;
            document.getElementById("b7").value = '';
            document.getElementById("b7").disabled = false;
        }
        else if (last_move == 8) {
            document.getElementById("b8").disabled = false;
            document.getElementById("b8").value = '';
            document.getElementById("b8").disabled = false;
        }
        else {
            document.getElementById("b9").disabled = false;
            document.getElementById("b9").value = '';
            document.getElementById("b9").disabled = false;
        }


    }



}

function myfunc() {

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;

    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;


    if (b1 == 'X' && b2 == 'X' && b3 == 'X') {

        document.getElementById('print').innerHTML = "Player X Won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(end_X, 400);

    }
    else if (b1 == 'O' && b2 == 'O' && b3 == 'O') {
        document.getElementById('print').innerHTML = "Player O Won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(end_O, 400);

    }
    else if (b1 == 'O' && b4 == 'O' && b7 == 'O') {
        document.getElementById('print').innerHTML = "Player O Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(end_O, 400);

    }
    else if (b1 == 'X' && b4 == 'X' && b7 == 'X') {
        document.getElementById('print').innerHTML = "Player X Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        setTimeout(end_X, 400);

    }
    else if (b8 == 'X' && b9 == 'X' && b7 == 'X') {
        document.getElementById('print').innerHTML = "Player X Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b4").disabled = true;
        setTimeout(end_X, 400);

    }
    else if (b8 == 'O' && b9 == 'O' && b7 == 'O') {
        document.getElementById('print').innerHTML = "Player O Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b4").disabled = true;
        setTimeout(end_O, 400);

    }
    else if (b3 == 'X' && b6 == 'X' && b9 == 'X') {
        document.getElementById('print').innerHTML = "Player X Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b4").disabled = true;
        setTimeout(end_X, 400);

    }
    else if (b3 == 'O' && b6 == 'O' && b9 == 'O') {
        document.getElementById('print').innerHTML = "Player O Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b4").disabled = true;
        setTimeout(end_O, 400);

    }
    else if (b1 == 'X' && b5 == 'X' && b9 == 'X') {
        document.getElementById('print').innerHTML = "Player X Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        setTimeout(end_X, 400);

    }
    else if (b1 == 'O' && b5 == 'O' && b9 == 'O') {
        document.getElementById('print').innerHTML = "Player O Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        setTimeout(end_O, 400);

    }
    else if (b3 == 'X' && b5 == 'X' && b7 == 'X') {
        document.getElementById('print').innerHTML = "Player X Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        setTimeout(end_X, 400);

    }
    else if (b3 == 'O' && b5 == 'O' && b7 == 'O') {
        document.getElementById('print').innerHTML = "Player O Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b4").disabled = true;
        setTimeout(end_O, 400);

    }
    else if (b4 == 'X' && b5 == 'X' && b6 == 'X') {
        document.getElementById('print').innerHTML = "Player X Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        setTimeout(end_X, 400);

    }
    else if (b4 == 'O' && b5 == 'O' && b6 == 'O') {
        document.getElementById('print').innerHTML = "Player O Won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        setTimeout(end_O, 400);

    }

    else if (b2 == 'X' && b5 == 'X' && b8 == 'X') {
        document.getElementById('print').innerHTML = "Player X Won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        setTimeout(end_X, 400);

    }
    else if (b2 == 'O' && b5 == 'O' && b8 == 'O') {
        document.getElementById('print').innerHTML = "Player O Won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;

        setTimeout(end_O, 400);

    }
    else if (b1 == '' || b2 == '' || b3 == '' || b4 == '' || b5 == '' || b6 == '' || b7 == '' || b8 == '' || b9 == '') {

        if (flag == 1) {
            document.getElementById('print').innerHTML = 'Player X Turn';

        }
        else {
            document.getElementById('print').innerHTML = 'Player O Turn';
        }

    }
    else {
        document.getElementById('print').innerHTML = 'Match Tie';

        setTimeout(end, 400);




    }
}

function end_X() {


    if (window.confirm('Player X Won !!!! Do you want to play again ? ') == true) {
        myfunc_2();

    }
    else {
        close();

    }

}
function end_O() {


    if (window.confirm('Player O Won !!!! Do you want to play again ? ') == true) {
        myfunc_2();

    }
    else {
        close();

    }

}
function end() {


    if (window.confirm('Match Tie !!!! Do you want to play again ? ') == true) {
        myfunc_2();

    }
    else {
        close();

    }

}

// RESET GAME

function myfunc_2() {

    location.reload();
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';




}

// PLAYER's TURN

flag = 1;
// flag==1 PLAYER X 1st

function myfunc_3() {

    arr.push(1);

    if (flag == 1) {
        document.getElementById("b1").value = 'X';
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = 'O'
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function myfunc_4() {
    arr.push(2);

    if (flag == 1) {
        document.getElementById("b2").value = 'X';
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = 'O'
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    arr.push(3);

    if (flag == 1) {
        document.getElementById("b3").value = 'X';
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = 'O'
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    arr.push(4);

    if (flag == 1) {
        document.getElementById("b4").value = 'X';
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = 'O'
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    arr.push(5);

    if (flag == 1) {
        document.getElementById("b5").value = 'X';
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = 'O'
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    arr.push(6);

    if (flag == 1) {
        document.getElementById("b6").value = 'X';
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = 'O'
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
function myfunc_9() {
    arr.push(7);

    if (flag == 1) {
        document.getElementById("b7").value = 'X';
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = 'O'
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    arr.push(8);

    if (flag == 1) {
        document.getElementById("b8").value = 'X';
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = 'O'
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function myfunc_11() {
    arr.push(9);

    if (flag == 1) {
        document.getElementById("b9").value = 'X';
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = 'O'
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}

