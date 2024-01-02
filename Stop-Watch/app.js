const time_display = document.getElementById('timeDisplay')
const start_btn = document.getElementById('start')
const pause_btn = document.getElementById('pause')
const reset_btn = document.getElementById('reset')

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true 
let intervalId;
let hrs = 0
let mins = 0
let secs = 0

start_btn.addEventListener("click",(e)=>{
    if(paused){
        paused = false
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime,75)
    }
})
pause_btn.addEventListener('click',e=>{
    if(!paused){
        paused = true
        elapsedTime = Date.now() - startTime
        clearInterval(intervalId)
    }
})
reset_btn.addEventListener('click',e=>{
    paused = true
    clearInterval(intervalId)
    startTime = 0
    elapsedTime = 0
    currentTime = 0
    hrs = 0
    mins = 0
    secs = 0
    time_display.textContent = "00:00:00"
})

function updateTime(){
    elapsedTime = Date.now() - startTime
    secs = Math.floor((elapsedTime / 1000) % 60)
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60)
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

    function pad(unit){
        return String(unit).length < 2 ? "0"+unit : unit
    }
    secs = pad(secs)
    mins = pad(mins)
    hrs = pad(hrs)

    time_display.textContent = `${hrs}:${mins}:${secs}`
}