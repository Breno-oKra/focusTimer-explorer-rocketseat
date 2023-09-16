import state from './states.js'
import * as events from './events.js'
import * as timer from './time.js'
export function start(minutes,seconds){
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay(0,6)
    events.registerControls()
    events.setMinute()
}