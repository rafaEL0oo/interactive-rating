const MAIN = document.querySelector('.main')
const ENDING = document.querySelector('.ending')
const SELECTIONTEXT = document.querySelector('.selection')
let rateState = 0

const RatingClick = (event) => {
    document.querySelectorAll('.rate__buttons').forEach((button)=>{
        button.classList.remove('active')
    })
    event.target.classList.toggle('active')
    rateState = event.target.textContent
}

const RatingSubmitted = () => {
    MAIN.classList.add('hidden')
    ENDING.classList.remove('hidden')
    SELECTIONTEXT.textContent = `You selected ${rateState} out of 5`
} 


document.querySelectorAll('.rate__buttons').forEach((button)=>{
    button.addEventListener('click',RatingClick)
})

document.querySelector('.submit').addEventListener('click', RatingSubmitted)