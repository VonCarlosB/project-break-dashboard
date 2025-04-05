const boton = document.getElementById('generatePassword')
const size = document.getElementById('passwordLength')
const result = document.getElementById('result')
const mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const minus = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const simbols = '!@#$%^&*()-_=+'
const chars = [mayus, minus, numbers, simbols]

boton.addEventListener('click', () => {
    let ans = ''
    ans += randomChar(mayus)
    ans += randomChar(minus)
    ans += randomChar(numbers)
    ans += randomChar(simbols)
    for (let i = 0; i < size.value-4; i++) {
        ans += randomChar(chars[Math.floor(Math.random()*4)])
    }
    result.textContent = ans
})

function randomChar(text) {
    return text.charAt(Math.floor(Math.random()*text.length))
}