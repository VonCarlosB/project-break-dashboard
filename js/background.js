const images = document.getElementById('images')
let actualImage = 0


//randomiceBackground()
images.style.backgroundImage = `url(img/1.jpg)`
images.style.backgroundImage = `url(./img/2.jpg)`
images.style.backgroundImage = `url(../img/3.jpg)`
images.style.backgroundImage = `url(./../img/4.jpg)`

/* Randomize background without repetition and a blur effect */
function randomiceBackground() {
    let imgNumbr = Math.floor(Math.random()*10)+1
    while(imgNumbr === actualImage){
        imgNumbr = Math.floor(Math.random()*10)+1
    }
    actualImage = imgNumbr
    /* No need for intervals as css takes care of transitions */
    images.style.filter = `saturate(0%) blur(100px)`
    setTimeout(() => {
        images.style.backgroundImage = `url(./img/${imgNumbr}.jpg)`
        images.style.filter = `saturate(80%) blur(0px)`
    }, 500);
    /* Restart the function with a random timer that ranges between .5 and 1 minute*/
    let randomTime = Math.floor((Math.random()*10+5)*6000)
    setTimeout(randomiceBackground, randomTime)
}