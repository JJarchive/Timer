// 강사님 코드
var start_button = document.querySelector(".start-btn");
start_button.addEventListener("click", startTimer);
var stop_button = document.querySelector(".pause-btn");
stop_button.addEventListener("click", pauseTimer);
var reset_button = document.querySelector(".reset-btn");
reset_button.addEventListener("click", resetTimer)
start_flags = true;
pause_flags = true;
function startTimer() {
    if (start_flags == false && pause_flags == false) { // PAUSE를 누르고 나서
        timer = setInterval(countTimer, 1000);
        document.querySelector('#pause_message').innerText = "Resume";
    } else if (start_flags == false && pause_flags == true) { // START 누르고 START 누르면
        clearInterval(timer);
        alert("이미 타이머가 동작 중입니다.")
        timer = setInterval(countTimer, 1000);
    } else { // 처음 시작
        min = document.querySelector('#startMin').value;
        sec = document.querySelector('#startSec').value;
        timer = setInterval(countTimer, 1000);
        start_flags = false;
    }
}
function countTimer() {
    if (sec != 0) {
        sec = sec - 1;
        document.querySelector('#display').innerText = min + " : " + sec;
    }
    else {
        if (min != 0) {
            min = min - 1;
            sec = 59;
        }
        else {
            document.querySelector('#display').innerText = "Time over";
            setTimeout(function () {window.location.reload()}, 3000);
        }
    }
}
function pauseTimer() {
    clearInterval(timer);
    pause_flags = false;
    resume = document.querySelector(".start-btn");
    resume.value = "RESUME";
    document.querySelector('#pause_message').innerText = "Pause";
}
function resetTimer() {
    clearInterval(timer);
    document.querySelector('#display').innerText = "Reset";
    setTimeout(function () {window.location.reload()}, 2000);
}

