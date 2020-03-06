console.log('Home is where the placenta is')

const countdown = document.getElementById('countdown')
const countdownContainer = document.getElementById('countdown-container')
const display = document.getElementById('display')
const eventSource = new EventSource('http://localhost:1999/event-source')
let notRendered = true
eventSource.onmessage = event => {
    const data = JSON.parse(event.data)
    //console.log(data)
    const {hack, time, destination} = data
    if(hack && notRendered){
        notRendered = false
        getSecret(destination)
    }
    if(time){
        countdown.innerText = time
    }
}

eventSource.onerror = event => {
    console.log('-----> ERROR <-----')
    console.log(event)
    console.log('-----/end error-----')
}


const getSecret = (url) => {
    const x = new XMLHttpRequest();
    x.onreadystatechange = () => {
        if(x.readyState === 4 && x.status > 199 && x.status < 300){
            renderSecret(x.responseText)
        }
        
    }
    x.open('GET', url, true)
    x.send()
}

const renderSecret = (data) => {
    countdownContainer.style.display = 'none'
    const {html} = data
    display.innerHTML = data
    //`<a href=javascript:load(${data});></a>`
}