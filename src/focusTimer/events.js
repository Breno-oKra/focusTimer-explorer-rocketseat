import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as el from './elements.js'
import states from "./states.js";
import { updateDisplay } from "./time.js";
export function registerControls(){
    controls.addEventListener('click', event =>{
        // taget é todo click em elemtnetos dentro de controls
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }
        
        actions[action]()
    })
}
export function setMinute(){
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })
    // /\d/ verifica se não é um numero
    // pode usar o onkeydown tambem
    el.minutes.onkeypress = (event) => /\d/.test(event.key)
    //quanto esta desfocado
    el.minutes.addEventListener('blur', event =>{
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        states.minutes = time
        states.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    } )
}