const boton = document.getElementById('generatePassword')
const size = document.getElementById('passwordLength')
const result = document.getElementById('result')
const mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const minus = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const simbols = '!@#$%^&*()-_=+'
const chars = [mayus, minus, numbers, simbols]

boton.addEventListener('click', () => {
    if(size.value > 50) size.value = 50
    if(size.value < 12) size.value = 12
    let ans = ''
    ans += randomChar(mayus)
    ans += randomChar(minus)
    ans += randomChar(numbers)
    ans += randomChar(simbols)
    for (let i = 0; i < size.value-4; i++) {
        ans += randomChar(chars[Math.floor(Math.random()*4)])
    }
    result.innerHTML = `
        <p>Your password:</p>
        <br>
        <p>${ans}</p>
    `
})

function randomChar(text) {
    return text.charAt(Math.floor(Math.random()*text.length))
}