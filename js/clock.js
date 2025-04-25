const clock = document.getElementById('clock')
const paragraphs = document.querySelectorAll('#clock p')
console.log(paragraphs)

setInterval(updateTime, 1000);

function updateTime() {
    let year = new Date().getFullYear()
    let month = new Date().getMonth()+1
    let date = new Date().getDate()
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    if(month < 10) month = '0'+month
    if(date < 10) date = '0'+date
    if(hour < 10) hour = '0'+hour
    if(minute < 10) minute = '0'+minute
    if(seconds < 10) seconds = '0'+seconds
    paragraphs[0].textContent = `${hour}:${minute}:${seconds}`
    paragraphs[1].textContent = `${date}/${month}/${year}`
    if(paragraphs.length>2){
        let timeStamp = Number(hour)*60+Number(minute)
        console.log(timeStamp)
        if(timeStamp>(0*60)) paragraphs[2].textContent = 'Es hora de descansar. Apaga y sigue mañana'
        if(timeStamp>(7*60)) paragraphs[2].textContent = 'Buenos días, desayuna fuerte y a darle al código'
        if(timeStamp>(12*60)) paragraphs[2].textContent = 'Echa un rato más pero no olvides comer'
        if(timeStamp>(14*60)) paragraphs[2].textContent = 'Espero que hayas comido'
        if(timeStamp>(16*60)) paragraphs[2].textContent = 'Buenas tardes, el último empujón'
        if(timeStamp>(18*60)) paragraphs[2].textContent = 'Esto ya son horas extras, ... piensa en parar pronto'
        if(timeStamp>(22*60)) paragraphs[2].textContent = 'Buenas noches, es hora de pensar en parar y descansar'
    }
}