const input = document.querySelector('input')
const form = document.querySelector('form')
const subscribed = document.querySelector('.subscribed')

const timeMinutes = document.getElementById('minutos')
const timeSeconds = document.getElementById('segundos')



function newSubscribe(){
    if(input.value !== null || input.value !== ''){
        localStorage.setItem('gamming:new-subscribe', 
        JSON.stringify(input.value))
        if(localStorage.getItem('gamming:new-subscribe')){
            subscribed.innerText = 'Your registration was successful!'
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    newSubscribe()
})



function startTimer() {

    let currentSeconds = parseInt(timeSeconds.innerText)
    let currentMinutes = parseInt(timeMinutes.innerText)
    setInterval(() => {
        currentSeconds --
        timeSeconds.innerText = currentSeconds
        if(currentSeconds < 1){
            currentSeconds = 59
            currentMinutes = currentMinutes - 1
            timeMinutes.innerText = currentMinutes
        }
    }, 1000)
    
    
}

window.onload = startTimer();

