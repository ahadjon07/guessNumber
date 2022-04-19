const againbtn = document.querySelector('.again')
const checkbtn = document.querySelector('.check')
const scoreEl = document.querySelector('.score')
const heightscoreEl = document.querySelector('.highscore')
const message = document.querySelector('.message')
const body = document.querySelector('body')
const number = document.querySelector('.number')
const guess = document.querySelector('.guess')

// score
let score = 20

// heightscore 
heightscore = 0

//  random number
let randomNumber = Math.floor(Math.random() * 20) + 1
console.log(randomNumber)

checkbtn.addEventListener('click', () => {
if (guess.value) {
    if (guess.value == randomNumber) {
        message.textContent = "You are win "
        number.textContent = randomNumber
        body.style.background = "#66df22"
 
        if (score > heightscore) {
            heightscore = score
            heightscoreEl.textContent = heightscore
        }
     } else if (guess.value > randomNumber) {
         message.textContent = "Too height"
         score--
         scoreEl.textContent = score
     } else if (guess.value < randomNumber) {
         message.textContent = "Too low"
         score--
         scoreEl.textContent = score
     }
} else {
    message.textContent = "No Number"
}
})

againbtn.addEventListener('click', () => {
    score = 20
    scoreEl.textContent = 20
    body.style.background = "#222"
    message.textContent = "Start guessing..."
    number.textContent = "?"
    guess.value = ""
    randomNumber = Math.floor(Math.random() * 20) + 1
})

// o'yin tugagach game over chiqadi
// dizayn