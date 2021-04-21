const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
if (startBtn) { startBtn.addEventListener("click", startRecording); }
if (stopBtn) { stopBtn.addEventListener("click", stopRecording); }

var start_time;
var stop_time;
var active_time;
var inactive_time;

var active_period_start;
var active_period_end;
var first_time_active = 1;

function idleTime() {

    var t;
    var inactive_period_start;
    var inactive_period_end;
    var first_time_inactive = 1;
    var currently_active = 1;
    start_time = Date.now();
    console.log(start_time);
    active_period_start = Date.now();
    inactive_period_start = Date.now();
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;     
    window.ontouchstart = resetTimer;
    window.onclick = resetTimer;
    window.onkeydown = resetTimer;
    window.addEventListener('scroll', resetTimer, true);

    function inactivityDetected() {
        currently_active = 0;
        active_period_end = Date.now();
        inactive_period_start = Date.now();
        active_split = Math.abs(active_period_end - active_period_start);
        if (first_time_active == 1) { active_time = active_split; first_time_active = 0; }
        else { active_time = active_time + active_split; }
        active_period_start = null;
    }

    function resetTimer() {
        if (currently_active != 1) { currently_active = 1; active_period_start = Date.now(); }
        clearTimeout(t);
        t = setTimeout(inactivityDetected, 1000);  // time is in milliseconds
    }
}

function startRecording() {
    idleTime();
}

function stopRecording() {
    active_period_end = Date.now();
    active_split = Math.abs(active_period_end - active_period_start);
    if (first_time_active == 1) { active_time = active_split; first_time_active = 0; }
    else { active_time = active_time + active_split; }
    end_time = Date.now();
    console.log(end_time);
    console.log(Math.abs(start_time - end_time));
    makeChart();
}

function makeChart() {

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Inactive',
                'Active',
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [Math.abs(Math.abs(end_time - start_time) - active_time), active_time],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(38, 166, 91)'
                ],
                hoverOffset: 4
            }]
        }
    });

    myChart.render();
}