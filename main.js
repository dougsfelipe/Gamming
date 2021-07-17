

const timeMinutes = document.getElementById('minutos')
const timeSeconds = document.getElementById('segundos')

function startTimer() {

    



    let currentSeconds = parseInt(timeSeconds.innerText)
    let currentMinutes = parseInt(timeMinutes.innerText)


    console.log(currentSeconds)
    console.log(currentMinutes)


    setInterval(() => {
        currentSeconds --
        timeSeconds.innerText = currentSeconds
        console.log(currentSeconds)
        if(currentSeconds < 1){
            currentSeconds = 59
            currentMinutes = currentMinutes - 1
            timeMinutes.innerText = currentMinutes
        }
    }, 1000)
    
    
}

window.onload = startTimer();
