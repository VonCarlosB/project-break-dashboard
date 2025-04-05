const clock = document.getElementById('clock')

setInterval(updateTime, 1000);

function updateTime() {
    let year = new Date().getFullYear()
    let month = new Date().getMonth()
    let date = new Date().getDate()
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    if(month < 10) month = '0'+month
    if(date < 10) date = '0'+date
    if(hour < 10) hour = '0'+hour
    if(minute < 10) minute = '0'+minute
    if(seconds < 10) seconds = '0'+seconds
    clock.firstElementChild.textContent = `${hour}:${minute}:${seconds}`
    clock.lastElementChild.textContent = `${date}/${month}/${year}`
}