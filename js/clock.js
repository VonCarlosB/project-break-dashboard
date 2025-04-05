const clock = document.getElementById('clock')

setInterval(updateTime, 1000);

function updateTime() {
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    if(hour < 10) hour = '0'+hour
    if(minute < 10) minute = '0'+minute
    if(seconds < 10) seconds = '0'+seconds
    clock.textContent = `${hour}:${minute}:${seconds}`
}