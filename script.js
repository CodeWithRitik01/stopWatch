let [sec, min, hrs] = [0,0,0];
let count = document.getElementById('count');
let timer = null;
let start = document.getElementById('start');
let STOP = document.getElementById('stop');
let RESET = document.getElementById('reset');

function stopwatch(){
    sec++;
    if(sec === 60){
        sec = 0;
        min++;
        if(min === 60){
            min = 0;
            hrs++;
        }

    }
    let h = hrs < 10 ? "0" + hrs : hrs;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    count.innerHTML = h + ":" + m + ":" + s;
}

function startWatch(){
    if(timer!==null){
        clearInterval(timer);
    }

   timer = setInterval(stopwatch, 1000);
}

function stop(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    [sec, min, hrs] = [0,0,0];
    count.innerHTML = "00:00:00";
}

start.addEventListener('click', startWatch);
STOP.addEventListener('click', stop);
RESET.addEventListener('click',reset);
