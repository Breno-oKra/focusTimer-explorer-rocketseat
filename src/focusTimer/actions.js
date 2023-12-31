import states from "./states.js";
import * as timer from "./time.js";
import * as el from './elements.js'
import * as sounds from './sounds.js'
export function toggleRunning(){   
    states.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    states.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}
export function set() {
    el.minutes.setAttribute('contenteditable',true)
    el.minutes.focus()
}

export function toggleMusic(){
    states.isMute = document.documentElement.classList.toggle('music-on')
    if(states.isMute){
        sounds.bgAudio.play() 
        return
    }
    sounds.bgAudio.pause()
}