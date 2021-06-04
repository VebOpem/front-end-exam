console.log("script-2 loaded")
//Results
var q1Result = document.getElementById('q1Result');
var q2Result = document.getElementById('q2Result');
var q3Result = document.getElementById('q3Result');

//q1
var button1 = document.getElementById('btn1')
var button2 = document.getElementById('btn2')
var button3 = document.getElementById('btn3')

button1.addEventListener('click', function () {
    correct1();
});
button2.addEventListener('click', function () {
    false1();
});
button3.addEventListener('click', function () {
    false1();
});
function correct1() {
    q1Result.innerHTML = " ";
    q1Result.innerHTML = "Correct"
}

function false1() {
    q1Result.innerHTML = " ";
    q1Result.innerHTML = "False"
}

//q2
var button4 = document.getElementById('btn4')
var button5 = document.getElementById('btn5')
var button6 = document.getElementById('btn6')
button4.addEventListener('click', function () {
    false2()
});
button5.addEventListener('click', function () {
    correct2();
});
button6.addEventListener('click', function () {
    false2();
});

function correct2() {
    q2Result.innerHTML = " ";
    q2Result.innerHTML = "Correct"
}

function false2() {
    q2Result.innerHTML = " ";
    q2Result.innerHTML = "False"
}
//q3
var button7 = document.getElementById('btn7')
var button8 = document.getElementById('btn8')
var button9 = document.getElementById('btn9')
button7.addEventListener('click', function () {
    false3()
});
button8.addEventListener('click', function () {
    false3()
});
button9.addEventListener('click', function () {
    correct3();
});

function correct3() {
    q3Result.innerHTML = " ";
    q3Result.innerHTML = "Correct"
}

function false3() {
    q3Result.innerHTML = " ";
    q3Result.innerHTML = "False"
}