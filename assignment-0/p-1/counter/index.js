const start = document.getElementById('start');

start.addEventListener('click', () => {
    countDown = setInterval(upDateInterval, 1000);
});

function upDateInterval() {
        document.getElementById('counter').innerHTML =new Date().toLocaleTimeString();
}

let countDown = setInterval(testTimeOutMethod, 1000);


function testTimeOutMethod() {
    upDateInterval();
    console.time('setTimeout');
    setTimeout(() => {}, 1000);
    console.timeEnd('setTimeout');
}